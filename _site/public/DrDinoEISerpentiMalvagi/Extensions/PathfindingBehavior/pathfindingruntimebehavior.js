var gdjs;
(function(gdjs2) {
  class PathfindingRuntimeBehavior extends gdjs2.RuntimeBehavior {
    constructor(runtimeScene, behaviorData, owner) {
      super(runtimeScene, behaviorData, owner);
      this._path = [];
      this._pathFound = false;
      this._speed = 0;
      this._angularSpeed = 0;
      this._timeOnSegment = 0;
      this._totalSegmentTime = 0;
      this._currentSegment = 0;
      this._reachedEnd = false;
      this._movementAngle = 0;
      if (this._path === void 0) {
      } else {
        this._path.length = 0;
      }
      this._allowDiagonals = behaviorData.allowDiagonals;
      this._acceleration = behaviorData.acceleration;
      this._maxSpeed = behaviorData.maxSpeed;
      this._angularMaxSpeed = behaviorData.angularMaxSpeed;
      this._rotateObject = behaviorData.rotateObject;
      this._angleOffset = behaviorData.angleOffset;
      this._cellWidth = behaviorData.cellWidth;
      this._cellHeight = behaviorData.cellHeight;
      this._gridOffsetX = behaviorData.gridOffsetX || 0;
      this._gridOffsetY = behaviorData.gridOffsetY || 0;
      this._extraBorder = behaviorData.extraBorder;
      this._manager = gdjs2.PathfindingObstaclesManager.getManager(runtimeScene);
      this._searchContext = new gdjs2.PathfindingRuntimeBehavior.SearchContext(this._manager);
    }
    updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
      if (oldBehaviorData.allowDiagonals !== newBehaviorData.allowDiagonals) {
        this.allowDiagonals(newBehaviorData.allowDiagonals);
      }
      if (oldBehaviorData.acceleration !== newBehaviorData.acceleration) {
        this.setAcceleration(newBehaviorData.acceleration);
      }
      if (oldBehaviorData.maxSpeed !== newBehaviorData.maxSpeed) {
        this.setMaxSpeed(newBehaviorData.maxSpeed);
      }
      if (oldBehaviorData.angularMaxSpeed !== newBehaviorData.angularMaxSpeed) {
        this.setAngularMaxSpeed(newBehaviorData.angularMaxSpeed);
      }
      if (oldBehaviorData.rotateObject !== newBehaviorData.rotateObject) {
        this.setRotateObject(newBehaviorData.rotateObject);
      }
      if (oldBehaviorData.angleOffset !== newBehaviorData.angleOffset) {
        this.setAngleOffset(newBehaviorData.angleOffset);
      }
      if (oldBehaviorData.cellWidth !== newBehaviorData.cellWidth) {
        this.setCellWidth(newBehaviorData.cellWidth);
      }
      if (oldBehaviorData.cellHeight !== newBehaviorData.cellHeight) {
        this.setCellHeight(newBehaviorData.cellHeight);
      }
      if (oldBehaviorData.gridOffsetX !== newBehaviorData.gridOffsetX) {
        this._gridOffsetX = newBehaviorData.gridOffsetX;
      }
      if (oldBehaviorData.gridOffsetY !== newBehaviorData.gridOffsetY) {
        this._gridOffsetY = newBehaviorData.gridOffsetY;
      }
      if (oldBehaviorData.extraBorder !== newBehaviorData.extraBorder) {
        this.setExtraBorder(newBehaviorData.extraBorder);
      }
      return true;
    }
    setCellWidth(width) {
      this._cellWidth = width;
    }
    getCellWidth() {
      return this._cellWidth;
    }
    setCellHeight(height) {
      this._cellHeight = height;
    }
    getCellHeight() {
      return this._cellHeight;
    }
    setGridOffsetX(gridOffsetX) {
      this._gridOffsetX = gridOffsetX;
    }
    getGridOffsetX() {
      return this._gridOffsetX;
    }
    setGridOffsetY(gridOffsetY) {
      this._gridOffsetY = gridOffsetY;
    }
    getGridOffsetY() {
      return this._gridOffsetY;
    }
    setAcceleration(acceleration) {
      this._acceleration = acceleration;
    }
    getAcceleration() {
      return this._acceleration;
    }
    setMaxSpeed(maxSpeed) {
      this._maxSpeed = maxSpeed;
    }
    getMaxSpeed() {
      return this._maxSpeed;
    }
    setSpeed(speed) {
      this._speed = speed;
    }
    getSpeed() {
      return this._speed;
    }
    getMovementAngle() {
      return this._movementAngle;
    }
    movementAngleIsAround(degreeAngle, tolerance) {
      return gdjs2.evtTools.common.angleDifference(this._movementAngle, degreeAngle) <= tolerance;
    }
    setAngularMaxSpeed(angularMaxSpeed) {
      this._angularMaxSpeed = angularMaxSpeed;
    }
    getAngularMaxSpeed() {
      return this._angularMaxSpeed;
    }
    setAngleOffset(angleOffset) {
      this._angleOffset = angleOffset;
    }
    getAngleOffset() {
      return this._angleOffset;
    }
    setExtraBorder(extraBorder) {
      this._extraBorder = extraBorder;
    }
    getExtraBorder() {
      return this._extraBorder;
    }
    allowDiagonals(allow) {
      this._allowDiagonals = allow;
    }
    diagonalsAllowed() {
      return this._allowDiagonals;
    }
    setRotateObject(allow) {
      this._rotateObject = allow;
    }
    isObjectRotated() {
      return this._rotateObject;
    }
    getNodeX(index) {
      if (index < this._path.length) {
        return this._path[index][0];
      }
      return 0;
    }
    getNodeY(index) {
      if (index < this._path.length) {
        return this._path[index][1];
      }
      return 0;
    }
    getNextNodeIndex() {
      if (this._currentSegment + 1 < this._path.length) {
        return this._currentSegment + 1;
      } else {
        return this._path.length - 1;
      }
    }
    getNodeCount() {
      return this._path.length;
    }
    getNextNodeX() {
      if (this._path.length === 0) {
        return 0;
      }
      if (this._currentSegment + 1 < this._path.length) {
        return this._path[this._currentSegment + 1][0];
      } else {
        return this._path[this._path.length - 1][0];
      }
    }
    getNextNodeY() {
      if (this._path.length === 0) {
        return 0;
      }
      if (this._currentSegment + 1 < this._path.length) {
        return this._path[this._currentSegment + 1][1];
      } else {
        return this._path[this._path.length - 1][1];
      }
    }
    getLastNodeX() {
      if (this._path.length < 2) {
        return 0;
      }
      if (this._currentSegment < this._path.length - 1) {
        return this._path[this._currentSegment][0];
      } else {
        return this._path[this._path.length - 1][0];
      }
    }
    getLastNodeY() {
      if (this._path.length < 2) {
        return 0;
      }
      if (this._currentSegment < this._path.length - 1) {
        return this._path[this._currentSegment][1];
      } else {
        return this._path[this._path.length - 1][1];
      }
    }
    getDestinationX() {
      if (this._path.length === 0) {
        return 0;
      }
      return this._path[this._path.length - 1][0];
    }
    getDestinationY() {
      if (this._path.length === 0) {
        return 0;
      }
      return this._path[this._path.length - 1][1];
    }
    pathFound() {
      return this._pathFound;
    }
    destinationReached() {
      return this._reachedEnd;
    }
    moveTo(runtimeScene, x, y) {
      const owner = this.owner;
      const targetCellX = Math.round((x - this._gridOffsetX) / this._cellWidth);
      const targetCellY = Math.round((y - this._gridOffsetY) / this._cellHeight);
      const startCellX = Math.round((owner.getX() - this._gridOffsetX) / this._cellWidth);
      const startCellY = Math.round((owner.getY() - this._gridOffsetY) / this._cellHeight);
      if (startCellX == targetCellX && startCellY == targetCellY) {
        this._path.length = 0;
        this._path.push([owner.getX(), owner.getY()]);
        this._path.push([x, y]);
        this._enterSegment(0);
        this._pathFound = true;
        return;
      }
      this._searchContext.allowDiagonals(this._allowDiagonals);
      this._searchContext.setObstacles(this._manager);
      this._searchContext.setCellSize(this._cellWidth, this._cellHeight);
      this._searchContext.setGridOffset(this._gridOffsetX, this._gridOffsetY);
      this._searchContext.setStartPosition(owner.getX(), owner.getY());
      this._searchContext.setObjectSize(owner.getX() - owner.getDrawableX() + this._extraBorder, owner.getY() - owner.getDrawableY() + this._extraBorder, owner.getWidth() - (owner.getX() - owner.getDrawableX()) + this._extraBorder, owner.getHeight() - (owner.getY() - owner.getDrawableY()) + this._extraBorder);
      if (this._searchContext.computePathTo(x, y)) {
        let node = this._searchContext.getFinalNode();
        let finalPathLength = 0;
        while (node) {
          if (finalPathLength === this._path.length) {
            this._path.push([0, 0]);
          }
          this._path[finalPathLength][0] = node.pos[0] * this._cellWidth + this._gridOffsetX;
          this._path[finalPathLength][1] = node.pos[1] * this._cellHeight + this._gridOffsetY;
          node = node.parent;
          finalPathLength++;
        }
        this._path.length = finalPathLength;
        this._path.reverse();
        this._path[0][0] = owner.getX();
        this._path[0][1] = owner.getY();
        this._enterSegment(0);
        this._pathFound = true;
        return;
      }
      this._pathFound = false;
    }
    _enterSegment(segmentNumber) {
      if (this._path.length === 0) {
        return;
      }
      this._currentSegment = segmentNumber;
      if (this._currentSegment < this._path.length - 1) {
        const pathX = this._path[this._currentSegment + 1][0] - this._path[this._currentSegment][0];
        const pathY = this._path[this._currentSegment + 1][1] - this._path[this._currentSegment][1];
        this._totalSegmentTime = Math.sqrt(pathX * pathX + pathY * pathY);
        this._timeOnSegment = 0;
        this._reachedEnd = false;
        this._movementAngle = (Math.atan2(pathY, pathX) * 180 / Math.PI + 360) % 360;
      } else {
        this._reachedEnd = true;
        this._speed = 0;
      }
    }
    doStepPreEvents(runtimeScene) {
      if (this._path.length === 0 || this._reachedEnd) {
        return;
      }
      const timeDelta = this.owner.getElapsedTime(runtimeScene) / 1e3;
      this._speed += this._acceleration * timeDelta;
      if (this._speed > this._maxSpeed) {
        this._speed = this._maxSpeed;
      }
      this._angularSpeed = this._angularMaxSpeed;
      this._timeOnSegment += this._speed * timeDelta;
      if (this._timeOnSegment >= this._totalSegmentTime && this._currentSegment < this._path.length) {
        this._enterSegment(this._currentSegment + 1);
      }
      let newPos = [0, 0];
      let pathAngle = this.owner.getAngle();
      if (this._currentSegment < this._path.length - 1) {
        newPos[0] = gdjs2.evtTools.common.lerp(this._path[this._currentSegment][0], this._path[this._currentSegment + 1][0], this._timeOnSegment / this._totalSegmentTime);
        newPos[1] = gdjs2.evtTools.common.lerp(this._path[this._currentSegment][1], this._path[this._currentSegment + 1][1], this._timeOnSegment / this._totalSegmentTime);
        pathAngle = gdjs2.toDegrees(Math.atan2(this._path[this._currentSegment + 1][1] - this._path[this._currentSegment][1], this._path[this._currentSegment + 1][0] - this._path[this._currentSegment][0])) + this._angleOffset;
      } else {
        newPos = this._path[this._path.length - 1];
      }
      this.owner.setX(newPos[0]);
      this.owner.setY(newPos[1]);
      if (this._rotateObject) {
        this.owner.rotateTowardAngle(pathAngle, this._angularSpeed, runtimeScene);
      }
    }
    doStepPostEvents(runtimeScene) {
    }
    static euclideanDistance(a, b) {
      return Math.sqrt((a[0] - b[0]) * (a[0] - b[0]) + (a[1] - b[1]) * (a[1] - b[1]));
    }
    static manhattanDistance(a, b) {
      return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
    }
  }
  gdjs2.PathfindingRuntimeBehavior = PathfindingRuntimeBehavior;
  gdjs2.registerBehavior("PathfindingBehavior::PathfindingBehavior", gdjs2.PathfindingRuntimeBehavior);
  (function(PathfindingRuntimeBehavior2) {
    class Node {
      constructor(xPos, yPos) {
        this.cost = 0;
        this.smallestCost = -1;
        this.estimateCost = -1;
        this.parent = null;
        this.open = true;
        this.pos = [xPos, yPos];
      }
      reinitialize(xPos, yPos) {
        this.pos[0] = xPos;
        this.pos[1] = yPos;
        this.cost = 0;
        this.smallestCost = -1;
        this.estimateCost = -1;
        this.parent = null;
        this.open = true;
      }
    }
    PathfindingRuntimeBehavior2.Node = Node;
    class SearchContext {
      constructor(obstacles) {
        this._finalNode = null;
        this._destination = [0, 0];
        this._start = [0, 0];
        this._startX = 0;
        this._startY = 0;
        this._allowDiagonals = true;
        this._maxComplexityFactor = 50;
        this._cellWidth = 20;
        this._cellHeight = 20;
        this._gridOffsetX = 0;
        this._gridOffsetY = 0;
        this._leftBorder = 0;
        this._rightBorder = 0;
        this._topBorder = 0;
        this._bottomBorder = 0;
        this._allNodes = [];
        this._openNodes = [];
        this._closeObstacles = [];
        this._nodeCache = [];
        this._obstacles = obstacles;
        this._distanceFunction = PathfindingRuntimeBehavior2.euclideanDistance;
      }
      setObstacles(obstacles) {
        this._obstacles = obstacles;
        return this;
      }
      getFinalNode() {
        return this._finalNode;
      }
      allowDiagonals(allowDiagonals) {
        this._allowDiagonals = allowDiagonals;
        this._distanceFunction = allowDiagonals ? PathfindingRuntimeBehavior2.euclideanDistance : PathfindingRuntimeBehavior2.manhattanDistance;
        return this;
      }
      setStartPosition(x, y) {
        this._startX = x;
        this._startY = y;
        return this;
      }
      setObjectSize(leftBorder, topBorder, rightBorder, bottomBorder) {
        this._leftBorder = leftBorder;
        this._rightBorder = rightBorder;
        this._topBorder = topBorder;
        this._bottomBorder = bottomBorder;
        return this;
      }
      setCellSize(cellWidth, cellHeight) {
        this._cellWidth = cellWidth;
        this._cellHeight = cellHeight;
        return this;
      }
      setGridOffset(gridOffsetX, gridOffsetY) {
        this._gridOffsetX = gridOffsetX;
        this._gridOffsetY = gridOffsetY;
        return this;
      }
      computePathTo(targetX, targetY) {
        if (this._obstacles === null) {
          console.log("You tried to compute a path without specifying the obstacles");
          return;
        }
        this._destination[0] = Math.round((targetX - this._gridOffsetX) / this._cellWidth);
        this._destination[1] = Math.round((targetY - this._gridOffsetY) / this._cellHeight);
        this._start[0] = Math.round((this._startX - this._gridOffsetX) / this._cellWidth);
        this._start[1] = Math.round((this._startY - this._gridOffsetY) / this._cellHeight);
        this._freeAllNodes();
        const startNode = this._getNode(this._start[0], this._start[1]);
        startNode.smallestCost = 0;
        startNode.estimateCost = 0 + this._distanceFunction(this._start, this._destination);
        this._openNodes.length = 0;
        this._openNodes.push(startNode);
        let iterationCount = 0;
        const maxIterationCount = startNode.estimateCost * this._maxComplexityFactor;
        while (this._openNodes.length !== 0) {
          if (iterationCount++ > maxIterationCount) {
            return false;
          }
          const n = this._openNodes.shift();
          n.open = false;
          if (n.pos[0] == this._destination[0] && n.pos[1] == this._destination[1]) {
            this._finalNode = n;
            return true;
          }
          this._insertNeighbors(n);
        }
        return false;
      }
      _freeAllNodes() {
        if (this._nodeCache.length <= 32e3) {
          for (const i in this._allNodes) {
            if (this._allNodes.hasOwnProperty(i)) {
              const nodeArray = this._allNodes[i];
              for (const j in nodeArray) {
                if (nodeArray.hasOwnProperty(j)) {
                  this._nodeCache.push(nodeArray[j]);
                }
              }
            }
          }
        }
        this._allNodes = [];
      }
      _insertNeighbors(currentNode) {
        this._addOrUpdateNode(currentNode.pos[0] + 1, currentNode.pos[1], currentNode, 1);
        this._addOrUpdateNode(currentNode.pos[0] - 1, currentNode.pos[1], currentNode, 1);
        this._addOrUpdateNode(currentNode.pos[0], currentNode.pos[1] + 1, currentNode, 1);
        this._addOrUpdateNode(currentNode.pos[0], currentNode.pos[1] - 1, currentNode, 1);
        if (this._allowDiagonals) {
          this._addOrUpdateNode(currentNode.pos[0] + 1, currentNode.pos[1] + 1, currentNode, 1.414213562);
          this._addOrUpdateNode(currentNode.pos[0] + 1, currentNode.pos[1] - 1, currentNode, 1.414213562);
          this._addOrUpdateNode(currentNode.pos[0] - 1, currentNode.pos[1] - 1, currentNode, 1.414213562);
          this._addOrUpdateNode(currentNode.pos[0] - 1, currentNode.pos[1] + 1, currentNode, 1.414213562);
        }
      }
      _getNode(xPos, yPos) {
        if (this._allNodes.hasOwnProperty(xPos)) {
          if (this._allNodes[xPos].hasOwnProperty(yPos)) {
            return this._allNodes[xPos][yPos];
          }
        } else {
          this._allNodes[xPos] = [];
        }
        let newNode;
        if (this._nodeCache.length !== 0) {
          newNode = this._nodeCache.shift();
          newNode.reinitialize(xPos, yPos);
        } else {
          newNode = new Node(xPos, yPos);
        }
        const nodeCenterX = xPos * this._cellWidth + this._gridOffsetX;
        const nodeCenterY = yPos * this._cellHeight + this._gridOffsetY;
        let objectsOnCell = false;
        const radius = this._cellHeight > this._cellWidth ? this._cellHeight * 2 : this._cellWidth * 2;
        this._obstacles.getAllObstaclesAround(nodeCenterX, nodeCenterY, radius, this._closeObstacles);
        for (let k = 0; k < this._closeObstacles.length; ++k) {
          const obj = this._closeObstacles[k].owner;
          const topLeftCellX = Math.floor((obj.getDrawableX() - this._rightBorder - this._gridOffsetX) / this._cellWidth);
          const topLeftCellY = Math.floor((obj.getDrawableY() - this._bottomBorder - this._gridOffsetY) / this._cellHeight);
          const bottomRightCellX = Math.ceil((obj.getDrawableX() + obj.getWidth() + this._leftBorder - this._gridOffsetX) / this._cellWidth);
          const bottomRightCellY = Math.ceil((obj.getDrawableY() + obj.getHeight() + this._topBorder - this._gridOffsetY) / this._cellHeight);
          if (topLeftCellX < xPos && xPos < bottomRightCellX && topLeftCellY < yPos && yPos < bottomRightCellY) {
            objectsOnCell = true;
            if (this._closeObstacles[k].isImpassable()) {
              newNode.cost = -1;
              break;
            } else {
              newNode.cost += this._closeObstacles[k].getCost();
            }
          }
        }
        if (!objectsOnCell) {
          newNode.cost = 1;
        }
        this._allNodes[xPos][yPos] = newNode;
        return newNode;
      }
      _addOrUpdateNode(newNodeX, newNodeY, currentNode, factor) {
        const neighbor = this._getNode(newNodeX, newNodeY);
        if (!neighbor.open || neighbor.cost < 0) {
          return;
        }
        if (neighbor.smallestCost === -1 || neighbor.smallestCost > currentNode.smallestCost + (currentNode.cost + neighbor.cost) / 2 * factor) {
          if (neighbor.smallestCost != -1) {
            for (let i = 0; i < this._openNodes.length; ++i) {
              if (this._openNodes[i].pos[0] == neighbor.pos[0] && this._openNodes[i].pos[1] == neighbor.pos[1]) {
                this._openNodes.splice(i, 1);
                break;
              }
            }
          }
          neighbor.smallestCost = currentNode.smallestCost + (currentNode.cost + neighbor.cost) / 2 * factor;
          neighbor.parent = currentNode;
          neighbor.estimateCost = neighbor.smallestCost + this._distanceFunction(neighbor.pos, this._destination);
          if (this._openNodes.length === 0 || this._openNodes[this._openNodes.length - 1].estimateCost < neighbor.estimateCost) {
            this._openNodes.push(neighbor);
          } else {
            for (let i = 0; i < this._openNodes.length; ++i) {
              if (this._openNodes[i].estimateCost >= neighbor.estimateCost) {
                this._openNodes.splice(i, 0, neighbor);
                break;
              }
            }
          }
        }
      }
    }
    PathfindingRuntimeBehavior2.SearchContext = SearchContext;
  })(PathfindingRuntimeBehavior = gdjs2.PathfindingRuntimeBehavior || (gdjs2.PathfindingRuntimeBehavior = {}));
})(gdjs || (gdjs = {}));
//# sourceMappingURL=pathfindingruntimebehavior.js.map
