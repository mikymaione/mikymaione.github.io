var gdjs;
(function(gdjs2) {
  class PathfindingObstaclesManager {
    constructor(runtimeScene) {
      this._obstaclesRBush = new rbush(9, [
        ".owner.getAABB().min[0]",
        ".owner.getAABB().min[1]",
        ".owner.getAABB().max[0]",
        ".owner.getAABB().max[1]"
      ]);
    }
    static getManager(runtimeScene) {
      if (!runtimeScene.pathfindingObstaclesManager) {
        runtimeScene.pathfindingObstaclesManager = new gdjs2.PathfindingObstaclesManager(runtimeScene);
      }
      return runtimeScene.pathfindingObstaclesManager;
    }
    addObstacle(pathfindingObstacleBehavior) {
      this._obstaclesRBush.insert(pathfindingObstacleBehavior);
    }
    removeObstacle(pathfindingObstacleBehavior) {
      this._obstaclesRBush.remove(pathfindingObstacleBehavior);
    }
    getAllObstaclesAround(x, y, radius, result) {
      const searchArea = gdjs2.staticObject(PathfindingObstaclesManager.prototype.getAllObstaclesAround);
      searchArea.minX = x - radius;
      searchArea.minY = y - radius;
      searchArea.maxX = x + radius;
      searchArea.maxY = y + radius;
      const nearbyPlatforms = this._obstaclesRBush.search(searchArea);
      result.length = 0;
      result.push.apply(result, nearbyPlatforms);
    }
  }
  gdjs2.PathfindingObstaclesManager = PathfindingObstaclesManager;
  class PathfindingObstacleRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._oldX = 0;
      this._oldY = 0;
      this._oldWidth = 0;
      this._oldHeight = 0;
      this._registeredInManager = false;
      this._impassable = behaviorData.impassable;
      this._cost = behaviorData.cost;
      this._manager = PathfindingObstaclesManager.getManager(runtimeScene);
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.impassable !== newBehaviorData.impassable) {
        this.setImpassable(newBehaviorData.impassable);
      }
      if (oldBehaviorData.cost !== newBehaviorData.cost) {
        this.setCost(newBehaviorData.cost);
      }
      return true;
    }
    onDestroy() {
      if (this._manager && this._registeredInManager) {
        this._manager.removeObstacle(this);
      }
    }
    doStepPreEvents(runtimeScene) {
      if (!this.activated() && this._registeredInManager) {
        this._manager.removeObstacle(this);
        this._registeredInManager = false;
      } else {
        if (this.activated() && !this._registeredInManager) {
          this._manager.addObstacle(this);
          this._registeredInManager = true;
        }
      }
      if (this._oldX !== this.owner.getX() || this._oldY !== this.owner.getY() || this._oldWidth !== this.owner.getWidth() || this._oldHeight !== this.owner.getHeight()) {
        if (this._registeredInManager) {
          this._manager.removeObstacle(this);
          this._manager.addObstacle(this);
        }
        this._oldX = this.owner.getX();
        this._oldY = this.owner.getY();
        this._oldWidth = this.owner.getWidth();
        this._oldHeight = this.owner.getHeight();
      }
    }
    doStepPostEvents(runtimeScene) {
    }
    getAABB() {
      return this.owner.getAABB();
    }
    onActivate() {
      if (this._registeredInManager) {
        return;
      }
      this._manager.addObstacle(this);
      this._registeredInManager = true;
    }
    onDeActivate() {
      if (!this._registeredInManager) {
        return;
      }
      this._manager.removeObstacle(this);
      this._registeredInManager = false;
    }
    getCost() {
      return this._cost;
    }
    setCost(cost) {
      this._cost = cost;
    }
    isImpassable() {
      return this._impassable;
    }
    setImpassable(impassable) {
      this._impassable = impassable;
    }
  }
  gdjs2.PathfindingObstacleRuntimeBehavior = PathfindingObstacleRuntimeBehavior;
  gdjs2.registerBehavior("PathfindingBehavior::PathfindingObstacleBehavior", gdjs2.PathfindingObstacleRuntimeBehavior);
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pathfindingobstacleruntimebehavior.js.map
