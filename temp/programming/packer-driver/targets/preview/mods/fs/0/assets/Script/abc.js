System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _crd, ccclass, property, abc;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "21856GOrnZJ+6uvHwd8zQVG", "abc", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = abc
       * DateTime = Wed Mar 23 2022 12:36:00 GMT+0530 (India Standard Time)
       * Author = chandanKrishnani
       * FileBasename = abc.ts
       * FileBasenameNoExtension = abc
       * URL = db://assets/Script/abc.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("abc", abc = (_dec = ccclass('abc'), _dec(_class = class abc extends Component {
        // [1]
        // dummy = '';
        // [2]
        // @property
        // serializableDummy = 0;
        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }) || _class));
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
//# sourceMappingURL=abc.js.map