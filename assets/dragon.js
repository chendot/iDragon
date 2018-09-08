// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
    },

    // use this for initialization
    onLoad: function () {
        this.getArmature();
    },

    start () {

    },

    update (dt) {
        this.getArmature();
    },

    getArmature:function(){
        //获取 ArmatureDisplay
        this._armatureDisPlay = this.getComponent(dragonBones.ArmatureDisplay)
        //获取 Armatrue
        this._armature = this._armatureDisPlay.armature()
        //添加动画监听
        this._armatureDisPlay.addEventListener(dragonBones.EventObject.FADE_IN_COMPLETE, this.animationEventHandler, this)
        this._armatureDisPlay.addEventListener(dragonBones.EventObject.FADE_OUT_COMPLETE, this.animationEventHandler, this)
        this.attack();
    },

    attack:function(){
        //动画执行方式一
        this._armature.animation.fadeIn('attack1', -1, -1, 0, 'hit');
    },

    attack2:function(){
        //动画执行方式二
        this._armatureDisPlay.playAnimation('attack2', 1);
    },

    animationEventHandler: function animationEventHandler(event) {
        if (event.type == dragonBones.EventObject.FADE_IN_COMPLETE) {
            cc.log(event.detail.animationName + ' fade in complete');
        } else if (event.type == dragonBones.EventObject.FADE_OUT_COMPLETE) {
            cc.log(event.detail.animationName + ' fade out complete');
        }
    }
});
