
if (typeof gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded = {};


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.userFunc0x1643518 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const canvas = runtimeScene.getGame().getRenderer().getCanvas();

gdjs._MousePointerLockExtension = {};
gdjs._MousePointerLockExtension.movement = { x: 0, y: 0 };

canvas.addEventListener("pointermove", (e) => {
    gdjs._MousePointerLockExtension.movement.x += e.movementX || 0;
    gdjs._MousePointerLockExtension.movement.y += e.movementY || 0;
}, false);
};
gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.userFunc0x1643518(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("MousePointerLock"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("MousePointerLock"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__MousePointerLock__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
