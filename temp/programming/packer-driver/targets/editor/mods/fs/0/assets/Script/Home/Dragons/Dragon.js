System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, Dragon;

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "15d16RJAjxPVLi5veCEowZj", "Dragon", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = Dragon
       * DateTime = Tue Mar 29 2022 14:33:46 GMT+0530 (India Standard Time)
       * Author = chandanKrishnani
       * FileBasename = Dragon.ts
       * FileBasenameNoExtension = Dragon
       * URL = db://assets/Script/Home/Dragons/Dragon.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("Dragon", Dragon = (_dec = ccclass('Dragon'), _dec(_class = (_temp = class Dragon extends Component {
        constructor(...args) {
          super(...args);

          _defineProperty(this, "dragonName", "");

          _defineProperty(this, "type", "");

          _defineProperty(this, "cardsData", []);
        }

        start() {}

        setDragon(cardsData) {
          console.log("cardsData", cardsData); // this.node.getComponent(Sprite).spriteFrame = image;

          this.cardsData = cardsData;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp)) || _class));
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
//# sourceMappingURL=Dragon.js.map