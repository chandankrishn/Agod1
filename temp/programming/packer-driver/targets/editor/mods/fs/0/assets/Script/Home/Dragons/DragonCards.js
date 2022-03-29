System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, _decorator, Component, Node, JsonAsset, Prefab, instantiate, Sprite, CCInteger, TeamManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _temp, _crd, ccclass, property, DragonCards;

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
      Node = _cc.Node;
      JsonAsset = _cc.JsonAsset;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      Sprite = _cc.Sprite;
      CCInteger = _cc.CCInteger;
    }, function (_unresolved_2) {
      TeamManager = _unresolved_2.TeamManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1a9b4O/6/BKMoRJ7reHyIDt", "DragonCards", undefined);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * Predefined variables
       * Name = DragonCards
       * DateTime = Wed Mar 23 2022 15:05:55 GMT+0530 (India Standard Time)
       * Author = chandanKrishnani
       * FileBasename = DragonCards.ts
       * FileBasenameNoExtension = DragonCards
       * URL = db://assets/Script/Home/Dragons/DragonCards.ts
       * ManualUrl = https://docs.cocos.com/creator/3.4/manual/en/
       *
       */

      _export("DragonCards", DragonCards = (_dec = ccclass('DragonCards'), _dec2 = property({
        type: JsonAsset
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: CCInteger
      }), _dec8 = property({
        type: Node
      }), _dec(_class = (_class2 = (_temp = class DragonCards extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "DragonCardsJson", _descriptor, this);

          _initializerDefineProperty(this, "DragonCardPrefab", _descriptor2, this);

          _initializerDefineProperty(this, "AbilitiesPrefab", _descriptor3, this);

          _initializerDefineProperty(this, "parentDragonsNode", _descriptor4, this);

          _initializerDefineProperty(this, "ParentAbilityNode", _descriptor5, this);

          _initializerDefineProperty(this, "AvailableDragons", _descriptor6, this);

          _initializerDefineProperty(this, "CenterDragonNode", _descriptor7, this);

          _defineProperty(this, "dragonCards", []);

          _defineProperty(this, "dargonAbilties", []);

          _defineProperty(this, "dragonsData", null);

          _defineProperty(this, "cardSelected", 0);
        }

        changeImage(node, image) {
          node.getComponent(Sprite).spriteFrame = image;
        }

        leftArrowClick() {
          this.cardSelected > 0 && this.setSelectedDragon(this.cardSelected - 1);
        }

        rightArrowClick() {
          this.cardSelected < this.dragonCards.length - 1 && this.setSelectedDragon(this.cardSelected + 1);
        }

        toggleView() {
          this.ParentAbilityNode.active = !this.ParentAbilityNode.active;
          this.parentDragonsNode.active = !this.parentDragonsNode.active;
        }

        backButton() {
          this.node.active = !this.node.active;
        }

        setSelectedDragon(index) {
          console.log("Called");
          this.dragonCards[this.cardSelected].getChildByName('particles').active = false;
          this.cardSelected = index;
          this.dragonCards[index].getChildByName('particles').active = true;
          let image = this.dragonCards[index].getChildByName('DragonImage').getComponent(Sprite).spriteFrame;
          this.changeImage(this.CenterDragonNode, image);

          for (let i = 0; i < 4; i++) {
            this.changeImage(this.dargonAbilties[i].getChildByName('DragonImage'), image);
          }
        }

        start() {
          this.backButton();
          let tempNode = null; //    for(let i=0;i<this.AvailableDragons;i++)
          //    {
          //        tempNode = instantiate(this.DragonCardPrefab);
          //        this.parentDragonsNode.addChild(tempNode);
          //        this.dragonCards.push(tempNode);
          //        resources.load(this.dragonsData.Data[array[random]].Image+'/spriteFrame',SpriteFrame, (err, spriteFrame) => 
          //         {       
          //                 let image : SpriteFrame  = spriteFrame;
          //                 TeamManager.getInstance().setDragonsImages(image);
          //                 this.changeImage(this.dragonCards[i].getChildByName('DragonImage'),image);
          //                 i==0 && this.setSelectedDragon(0);
          //         }
          //     );
          //        TeamManager.getInstance().setDragonsOwned(array[random]);
          //    }

          for (let i = 0; i < 4; i++) {
            tempNode = instantiate(this.AbilitiesPrefab);
            this.ParentAbilityNode.addChild(tempNode);
            this.dargonAbilties.push(tempNode);
          }

          let index = (_crd && TeamManager === void 0 ? (_reportPossibleCrUseOfTeamManager({
            error: Error()
          }), TeamManager) : TeamManager).getInstance().getDragonbyIndex(0);
          console.log('index', index);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "DragonCardsJson", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "DragonCardPrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "AbilitiesPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "parentDragonsNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "ParentAbilityNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "AvailableDragons", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "CenterDragonNode", [_dec8], {
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
//# sourceMappingURL=DragonCards.js.map