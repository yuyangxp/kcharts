/*!build time : 2015-04-14 1:37:57 PM*/
KISSY.add("kg/kcharts/6.0.1/tip/index",function(a,b,c,d,e,f){var g,h=a.all,i={initializer:function(){this.init()},init:function(){var b=this.userConfig,c=this,d={clsName:"ks-chart-default",autoRender:!0,isVisable:!1,boundry:{x:0,y:0,width:0,height:0},rootNode:h("body"),tpl:"",corner:{isShow:!1,tpl:"corner",css:{position:"absolute",marginLeft:0,marginTop:0}},anim:{easing:"easeOut",duration:.25},offset:{x:0,y:0},alignX:"left",alignY:"top"};c._events={MOVE:"move",SETCONT:"setcontent",HIDE:"hide"},c._cfg=a.mix(d,b,void 0,void 0,!0),c._cfg.rootNode=h(c._cfg.rootNode);var e=c._cfg;c._data={},c._tpl=e.tpl,c.bindEvent(),e.autoRender&&c.render()},bindEvent:function(){var b=this,c=b._cfg.template,d=b._events;b.on(d.MOVE,function(a){var c=a.x,d=a.y,e=a.style;b.isVisable()&&b._cfg.anim?b.animateTo(c,d):b.moveTo(c,d),e&&b.$tip.css(e)}),b.on(d.SETCONT,function(d){a.isFunction(c)?b.setContent(c(d.data)):b.renderTemplate(c,d.data)}),b.on(d.HIDE,function(a){b.hide()})},getInstance:function(){return this.$tip},isVisable:function(){return"none"==this.$tip.css("display")?!1:!0},show:function(){var a=this;return a.$tip&&a.$tip.show(),a},hide:function(){var a=this;return a.$tip&&a.$tip.stop()&&a.$tip.hide(),a},moveTo:function(a,b){var c=this;c._prevtime=(new Date).getTime(),c.show();var d=c.getInstance(),e=c._cfg,f=(c._cfg.anim,c.getPos(a,b)),g=(e.corner.css["margin-top"]||e.corner.css.marginTop||0,e.corner.css["margin-left"]||e.corner.css.marginLeft||0),h=c.$corner;h&&h.css({"margin-left":g+a-f.x}),d.css({"margin-top":f.y,"margin-left":f.x})},animateTo:function(a,b,c){var d=this,e=d._cfg,f=e.anim,g=(new Date).getTime();d._prevtime&&g-d._prevtime<100&&d.animateFast(a,b,c),d.show(),d._prevtime=(new Date).getTime();var h=d.getInstance(),i=d.getPos(a,b),j=(e.corner.css["margin-top"]||e.corner.css.marginTop||0,e.corner.css["margin-left"]||e.corner.css.marginLeft||0),k=d.$corner;k&&k.css({"margin-left":j+a-i.x}),h.stop().animate({"margin-top":i.y,"margin-left":i.x},f.duration,f.easing,function(){c&&c()})},animateFast:function(a,b,c){var d,e,f=this,g=f.get("x"),h=f.get("y"),i=.2;f._prevtime=(new Date).getTime(),f.show(),void 0!==g&&(d=g/1+(a-g)*i,e=h/1+(b-h)*i);var j=f.getInstance(),k=f._cfg,l=f._cfg.anim,m=f.getPos(d,e),n=(k.corner.css["margin-top"]||k.corner.css.marginTop||0,k.corner.css["margin-left"]||k.corner.css.marginLeft||0),o=f.$corner;o&&o.css({"margin-left":n+a-m.x}),j.css({"margin-top":m.y,"margin-left":m.x});var p=f.getPos(a,b);j.stop().animate({"margin-top":p.y,"margin-left":p.x},l.duration,l.easing,function(){c&&c()})},renderTemplate:function(a,b){return this.setContent(e(a).render(b))},setContent:function(a){return h("."+this._cfg.clsName+"-tip-content",this.$tip).html(a)},getPos:function(a,b){var c=this,d=c._cfg,e=d.offset,f=b+e.y,g=a+e.x,h=d.alignX,i=d.alignY,j=c.getInstance(),k=j.outerWidth(),l=j.outerHeight(),m=d.boundry;switch(c.set("x",a||0),c.set("y",b||0),h){case"center":g=Math.round(a)+e.x-k/2;break;case"right":g=Math.round(a)+e.x-k}switch(i){case"middle":f=Math.round(b)+e.y-l/2;break;case"bottom":f=Math.round(b)+e.y-l}if(m.width&&m.height){var n=m.x||0,o=m.y||0,p=m.width,q=m.height;o>f?f=b- -Math.abs(e.y):f>o+q-l&&(f=b-l-Math.abs(e.y)),n>g?g=a- -Math.abs(e.x):g>n+p-k&&(g=a-k-Math.abs(e.x))}return{x:g,y:f}},_isExist:function(){return this.$tip&&this.$tip[0]},render:function(){var a=this,b=a._cfg,c=a._tpl,d=a._data,e=b.isVisable?"inline-block":"none",f=b.rootNode.offset();return b.rootNode.offset()?(a.$tip=!a._isExist()&&h('<span class="'+b.clsName+'-tip" style="*zoom:1;"><span class="'+b.clsName+'-tip-content"></span></span>').css({display:e}).appendTo(b.rootNode),a.$corner=b.corner.isShow&&b.corner.tpl?h("<div class='"+b.clsName+"-corner'>"+b.corner.tpl+"</div>").css(b.corner.css).appendTo(a.$tip):void 0,a.$tip.css({"margin-top":f.top+b.offset.y,"margin-left":f.left+b.offset.x,position:"absolute"}),a.renderTemplate(c,d),a.$tip):!1}};return c.extend?g=c.extend(i):(g=function(a){a&&(this.userConfig=a,this.init())},a.extend(g,c,i)),g},{requires:["node","base","anim","kg/kcharts/6.0.1/template/index","./assets/tip.css"]});