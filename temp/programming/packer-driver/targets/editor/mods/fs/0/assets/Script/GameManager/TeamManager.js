System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, TeamManager, _crd;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  _export("TeamManager", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0e055FLahdKRaVf1Pe5ImPq", "TeamManager", undefined);

      _export("TeamManager", TeamManager = class TeamManager {
        constructor() {
          _defineProperty(this, "DragonsOwned", []);

          _defineProperty(this, "DragoneImages", []);

          if (TeamManager._instance) {
            throw new Error("Error: Instantiation failed: Use SingletonDemo.getInstance() instead of new.");
          }

          TeamManager._instance = this;
        }

        static getInstance() {
          return TeamManager._instance;
        }

        setDragonsImages(image) {
          this.DragoneImages.push(image);
        }

        getDragonImages() {
          return this.DragoneImages;
        }

        setDragonsOwned(Element) {
          this.DragonsOwned.push(Element);
        }

        getDragonsOwned() {
          return this.DragonsOwned;
        }

        getDragonbyIndex(n) {
          return this.DragonsOwned[n];
        }

      });

      _defineProperty(TeamManager, "_instance", new TeamManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=TeamManager.js.map