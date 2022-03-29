System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, Prefab, CCInteger, instantiate, UITransform, Input, input, Sprite, v2, Vec3, Intersection2D, TeamManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, TeamSelection;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfTeamManager(extras) {
    _reporterNs.report("TeamManager", "../GameManager/TeamManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      CCInteger = _cc.CCInteger;
      instantiate = _cc.instantiate;
      UITransform = _cc.UITransform;
      Input = _cc.Input;
      input = _cc.input;
      Sprite = _cc.Sprite;
      v2 = _cc.v2;
      Vec3 = _cc.Vec3;
      Intersection2D = _cc.Intersection2D;
    }, function (_unresolved_2) {
      TeamManager = _unresolved_2.TeamManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fffaauw4u5Kh62t8b9MC6tA", "TeamSelection", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = TeamSelection
       * DateTime = Thu Mar 24 2022 17:03:51 GMT+0530 (India Standard Time)
       * Author = chandanKrishnani
       * FileBasename = TeamSelection.ts
       * FileBasenameNoExtension = TeamSelection
       * URL = db://assets/Script/Home/Dragons/TeamSelection.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("TeamSelection", TeamSelection = (_dec = ccclass('TeamSelection'), _dec2 = property({
        type: CCInteger
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class TeamSelection extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "DragonPositions", _descriptor, this);

          _initializerDefineProperty(this, "DragonSelectionPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "DragonsPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "DragonsParent", _descriptor4, this);

          _defineProperty(this, "DragonPositionNode", []);

          _defineProperty(this, "dragons", []);

          _defineProperty(this, "dragonMove", false);

          _defineProperty(this, "targetDragon", 0);

          _defineProperty(this, "DragableNode", null);
        }

        start() {
          let startXpos = -(this.node.getComponent(UITransform).width * 0.1);
          let startYpos = -(this.node.getComponent(UITransform).height * 0.33);
          let tempNode = null;

          for (let i = 1; i <= 3; i++) {
            for (let j = 1; j <= 3; j++) {
              tempNode = instantiate(this.DragonSelectionPrefab);
              this.node.addChild(tempNode);
              tempNode.setPosition(startXpos, startYpos, 1);

              if (j % 2 != 0) {
                startXpos = startXpos - 120;
                startYpos = startYpos + 80;
              } else startYpos = startYpos - 160;

              this.DragonPositionNode.push(tempNode);
            }
          }

          this.setUpDragons();
          this.setTouchEvents();
        }

        setUpDragons() {
          let dragons = (_crd && TeamManager === void 0 ? (_reportPossibleCrUseOfTeamManager({
            error: Error()
          }), TeamManager) : TeamManager).getInstance().getDragonImages();
          var tempNode = null;
          this.DragableNode = instantiate(this.DragonsPrefab);
          this.node.addChild(this.DragableNode);
          this.DragableNode.active = false;

          for (let i = 0; i < dragons.length; i++) {
            tempNode = instantiate(this.DragonsPrefab);
            this.DragonsParent.addChild(tempNode);
            tempNode.getComponent(Sprite).spriteFrame = dragons[i];
            this.dragons.push(tempNode);
          }
        }

        backButton(event) {
          this.node.active = !this.node.active;
        }

        setTouchEvents() {
          input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
          input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        onTouchStart(event) {
          for (let i = 0; i < this.dragons.length; i++) {
            if (this.dragons[i].getComponent(UITransform).getBoundingBoxToWorld().contains(v2(event.getUILocation().x, event.getUILocation().y))) {
              // this.DragableNode.active = true;
              // this.DragableNode.getComponent(Sprite).spriteFrame = this.dragons[i].getComponent(Sprite).spriteFrame;
              // this.DragableNode.setPosition(event.getUILocation());
              let current = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x, event.getUILocation().y, 1));
              this.dragons[i].setPosition(current);
              this.dragons[i].parent = this.node; // this.dragons[i].active = false;

              this.targetDragon = i;
              this.dragonMove = true;
            }
          }
        }

        planevalidMoveCheck(current) {
          if (this.dragonMove) {
            this.dragons[this.targetDragon].setPosition(current);
          }
        }

        onTouchMove(event) {
          let current = this.node.getComponent(UITransform).convertToNodeSpaceAR(new Vec3(event.getUILocation().x, event.getUILocation().y, 1));
          this.planevalidMoveCheck(current);
        }

        onTouchEnd() {
          var colide = false;

          for (let i = 0; i < this.DragonPositionNode.length; i++) {
            var _this$dragons$this$ta, _this$DragonPositionN;

            colide = Intersection2D.rectRect((_this$dragons$this$ta = this.dragons[this.targetDragon].getChildByName('Colider').getComponent(UITransform)) === null || _this$dragons$this$ta === void 0 ? void 0 : _this$dragons$this$ta.getBoundingBoxToWorld(), (_this$DragonPositionN = this.DragonPositionNode[i].getChildByName('colider').getComponent(UITransform)) === null || _this$DragonPositionN === void 0 ? void 0 : _this$DragonPositionN.getBoundingBoxToWorld());

            if (colide) {
              let pos = this.DragonPositionNode[i].getPosition();
              pos.y = pos.y + this.dragons[this.targetDragon].getComponent(UITransform).height / 2;
              this.dragons[this.targetDragon].setPosition(pos);
              break;
            }
          }

          if (!colide) {
            this.dragons[this.targetDragon].parent = this.DragonsParent;
          }
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DragonPositions", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 7;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "DragonSelectionPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "DragonsPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "DragonsParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
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
//# sourceMappingURL=TeamSelection.js.map