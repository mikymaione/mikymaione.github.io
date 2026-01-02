var gdjs;
(function(gdjs2) {
  let evtTools;
  (function(evtTools2) {
    let platform;
    (function(platform2) {
      platform2.isOnPlatform = function(objectsLists1, behaviorName, objectsLists2, inverted) {
        return gdjs2.evtTools.object.twoListsTest(gdjs2.PlatformRuntimeBehavior.isOnPlatformTest, objectsLists1, objectsLists2, inverted, behaviorName);
      };
    })(platform = evtTools2.platform || (evtTools2.platform = {}));
  })(evtTools = gdjs2.evtTools || (gdjs2.evtTools = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=platformtools.js.map
