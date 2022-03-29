System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, JsonAsset, resources, SpriteFrame, Sprite, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, test;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      JsonAsset = _cc.JsonAsset;
      resources = _cc.resources;
      SpriteFrame = _cc.SpriteFrame;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d60b7JMyr5B24ZsPLVL55ne", "test", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = test
       * DateTime = Tue Mar 22 2022 11:31:36 GMT+0530 (India Standard Time)
       * Author = chandanKrishnani
       * FileBasename = test.ts
       * FileBasenameNoExtension = test
       * URL = db://assets/Script/test.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("test", test = (_dec = ccclass('test'), _dec2 = property(JsonAsset), _dec(_class = (_class2 = (_temp = class test extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardsData", _descriptor, this);
        }

        changeImage(image) {
          console.log("Image", image);
          this.node.getComponent(Sprite).spriteFrame = image;
        }

        buttonClick() {
          var jsonData = this.cardsData.json;
          resources.load(jsonData.Data[1].Image + '/spriteFrame', SpriteFrame, (err, spriteFrame) => {
            this.changeImage(spriteFrame);
          }); // resources.load('background',SpriteFrame, (err, audio) => { console.log(audio);   this.node.getComponent(Sprite).spriteFrame = audio });
          // resources.loadDir("DragonImages", SpriteFrame, (err, assets) =>
          //     this.changeImage(assets[0]));
          // resources.load("DragonImages/fireBolt", SpriteFrame ,(err: any, texture : SpriteFrame) => {
          //     this.node.getComponent(Sprite).spriteFrame = texture;
          //     console.log("Spriteframe",texture);
          // });
          // resources.load('data/AlexAlien',JsonAsset, (err, audio) => console.log(audio));
          // bundle2.load('imgs/cocos', SpriteFrame, null, (err, spriteFrame) => console.log(err));
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardsData", [_dec2], {
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
//# sourceMappingURL=test.js.map