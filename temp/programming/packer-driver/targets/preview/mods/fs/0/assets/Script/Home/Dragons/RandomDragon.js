System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, CCInteger, JsonAsset, Prefab, instantiate, TeamManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, RandomDragon;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTeamManager(extras) {
    _reporterNs.report("TeamManager", "../../GameManager/TeamManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      CCInteger = _cc.CCInteger;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      TeamManager = _unresolved_2.TeamManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e6906pZIX1AqYvi6Is4j9Z4", "RandomDragon", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = RandomDragon
       * DateTime = Mon Mar 28 2022 11:40:39 GMT+0530 (India Standard Time)
       * Author = chandanKrishnani
       * FileBasename = RandomDragon.ts
       * FileBasenameNoExtension = RandomDragon
       * URL = db://assets/Script/Home/RandomDragon.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("RandomDragon", RandomDragon = (_dec = ccclass('RandomDragon'), _dec2 = property({
        type: CCInteger
      }), _dec3 = property({
        type: JsonAsset
      }), _dec4 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp = class RandomDragon extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "DragonsCount", _descriptor, this);

          _initializerDefineProperty(this, "DragonsData", _descriptor2, this);

          _initializerDefineProperty(this, "DragonPrefab", _descriptor3, this);
        }

        start() {
          var DragonsData = this.DragonsData.json;
          var array = Array.apply(null, {
            length: DragonsData.Data.length
          }).map(Number.call, Number);
          console.log("Array", array);
          var random = 0;
          var temp = null;
          var tempScript = null;

          for (var i = 0; i < this.DragonsCount; i++) {
            random = this.randomInt(0, array.length - 1);
            temp = instantiate(this.DragonPrefab);
            tempScript = temp.getComponent('Dragons');
            tempScript.setDragon(DragonsData.Data[random]);
            (_crd && TeamManager === void 0 ? (_reportPossibleCrUseOfTeamManager({
              error: Error()
            }), TeamManager) : TeamManager).getInstance().setDragonsOwned(temp);
            array.splice(random, 1);
          }
        }

        randomInt(min, max) {
          return Math.floor(Math.random() * (max - min + 1) + min);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DragonsCount", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "DragonsData", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DragonPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      /**
       * [1] Class member could be defined like this.
       * [2] Use `property` decorator if your want the member to be serializable.
       * [3] Your initialization goes here.
       * [4] Your update function goes here.
       *
       * Learn more about scripting: https://docs.cocos.com/creator/3.4/manual/en/scripting/
       * Learn more about CCClass: https://docs.cocos.com/creator/3.4/manual/en/scripting/decorator.html
       * Learn more about life-cycle callbacks: https://docs.cocos.com/creator/3.4/manual/en/scripting/life-cycle-callbacks.html
       */


      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=RandomDragon.js.map