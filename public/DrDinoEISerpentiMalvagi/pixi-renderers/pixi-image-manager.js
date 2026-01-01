var gdjs;
(function(gdjs2) {
  const PIXI = GlobalPIXIModule.PIXI;
  const logFileLoadingError = (file, error) => {
    console.error("Unable to load file " + file + " with error:", error ? error : "(unknown error)");
  };
  const applyTextureSettings = (texture, resourceData) => {
    if (!texture)
      return;
    if (!resourceData.smoothed) {
      texture.baseTexture.scaleMode = PIXI.SCALE_MODES.NEAREST;
    }
  };
  const findResourceWithNameAndKind = (resources, resourceName, kind) => {
    for (let i = 0, len = resources.length; i < len; ++i) {
      const res = resources[i];
      if (res.name === resourceName && res.kind === kind) {
        return res;
      }
    }
    return null;
  };
  class PixiImageManager {
    constructor(resources) {
      this._resources = resources;
      this._invalidTexture = PIXI.Texture.from("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAFElEQVQoU2P8z/D/PwMewDgyFAAApMMX8Zi0uXAAAAAASUVORK5CYIIA");
      this._loadedTextures = new Hashtable();
    }
    setResources(resources) {
      this._resources = resources;
    }
    getPIXITexture(resourceName) {
      if (this._loadedTextures.containsKey(resourceName)) {
        const texture2 = this._loadedTextures.get(resourceName);
        if (texture2.valid) {
          return texture2;
        } else {
          console.error("Texture for " + resourceName + " is not valid anymore (or never was).");
        }
      }
      if (resourceName === "") {
        return this._invalidTexture;
      }
      const resource = findResourceWithNameAndKind(this._resources, resourceName, "image");
      if (!resource) {
        console.warn('Unable to find texture for resource "' + resourceName + '".');
        return this._invalidTexture;
      }
      console.log('Loading texture for resource "' + resourceName + '"...');
      const file = resource.file;
      const texture = PIXI.Texture.from(file).on("error", (error) => {
        logFileLoadingError(file, error);
      });
      applyTextureSettings(texture, resource);
      this._loadedTextures.put(resourceName, texture);
      return texture;
    }
    getPIXIVideoTexture(resourceName) {
      if (this._loadedTextures.containsKey(resourceName)) {
        return this._loadedTextures.get(resourceName);
      }
      if (resourceName === "") {
        return this._invalidTexture;
      }
      const resource = findResourceWithNameAndKind(this._resources, resourceName, "video");
      if (!resource) {
        console.warn('Unable to find video texture for resource "' + resourceName + '".');
        return this._invalidTexture;
      }
      const file = resource.file;
      console.log('Loading video texture for resource "' + resourceName + '"...');
      const texture = PIXI.Texture.from(file).on("error", (error) => {
        logFileLoadingError(file, error);
      });
      this._loadedTextures.put(resourceName, texture);
      return texture;
    }
    getInvalidPIXITexture() {
      return this._invalidTexture;
    }
    loadTextures(onProgress, onComplete) {
      const resources = this._resources;
      const resourceFiles = {};
      for (let i = 0, len = resources.length; i < len; ++i) {
        const res = resources[i];
        if (res.file && res.kind === "image") {
          if (this._loadedTextures.containsKey(res.name)) {
            continue;
          }
          resourceFiles[res.file] = resourceFiles[res.file] ? resourceFiles[res.file].concat(res) : [res];
        }
      }
      const totalCount = Object.keys(resourceFiles).length;
      if (totalCount === 0) {
        return onComplete(totalCount);
      }
      const loader = PIXI.Loader.shared;
      let loadingCount = 0;
      const progressCallbackId = loader.onProgress.add(function() {
        loadingCount++;
        onProgress(loadingCount, totalCount);
      });
      for (const file in resourceFiles) {
        if (resourceFiles.hasOwnProperty(file)) {
          loader.add(file, file);
        }
      }
      loader.load((loader2, loadedPixiResources) => {
        loader2.onProgress.detach(progressCallbackId);
        for (const file in loadedPixiResources) {
          if (loadedPixiResources.hasOwnProperty(file)) {
            if (!resourceFiles.hasOwnProperty(file)) {
              continue;
            }
            resourceFiles[file].forEach((resource) => {
              const loadedTexture = loadedPixiResources[file].texture;
              if (!loadedTexture) {
                const error = loadedPixiResources[file].error;
                logFileLoadingError(file, error);
                return;
              }
              this._loadedTextures.put(resource.name, loadedTexture);
              applyTextureSettings(loadedTexture, resource);
            });
          }
        }
        onComplete(totalCount);
      });
    }
  }
  gdjs2.PixiImageManager = PixiImageManager;
  gdjs2.ImageManager = gdjs2.PixiImageManager;
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pixi-image-manager.js.map
