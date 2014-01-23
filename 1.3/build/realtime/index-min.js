/*! kcharts - v1.3 - 2014-01-23 5:42:15 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/realtime/util",function(){function t(t,l){for(var e=Math.min.apply(Math,t),r=Math.max.apply(Math,t),i=r-e,n=[u,f,d,p,v],a=[],s=0;n.length>s;s++){var o=i/n[s];if(1>o)break;a.push(o-l)}var h,c=Math.min.apply(Math,a);h=c?a.indexOf(c):0;var x=["minute","hour","day","week","month"];return x[h]}function l(t){var l={minute:6e4,hour:36e5,day:864e5,week:6048e5,month:18144e6};return l[t]}function e(t,l){var e={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(l)&&(l=l.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var r in e)RegExp("("+r+")").test(l)&&(l=l.replace(RegExp.$1,1==RegExp.$1.length?e[r]:("00"+e[r]).substr((""+e[r]).length)));return l}function r(t,l){return Math.round(t*l)/l}function i(t,l,e){e>1?e=1:0>e&&(e=0);var r=t+(l-t)*e;return Math.round(100*r)/100}function n(t,l){var e=[l[0]-t[0],l[1]-t[1]];if(0===e[0])return e[1]>0?90:0>e[1]?-90:0;var r=B*Math.atan(e[1]/e[0]);return 0>e[0]&&(r-=180),r}function a(t,l,e){e||(e={});var a,s,o,h,c="number"!=typeof e.scale?3:e.scale,x="number"!=typeof e.ratio?.5:e.ratio,y=1e6,u=n(t,l),f=Math.cos(u*T),d=Math.sin(u*T),p=i(t[0],l[0],x),v=i(t[1],l[1],x);return a=p+d*c,o=v-f*c,s=p-d*c,h=v+f*c,{x0:r(p,y),y0:r(v,y),x1:r(a,y),y1:r(o,y),x2:r(s,y),y2:r(h,y)}}function s(t,l){for(var e=t.name,r=!0,i=0,n=l.length;n>i;i++)if(l[i].name===e){var a=l[i].data;l[i].data=[].concat(a,t.data),r=!1;break}r&&l.push(t)}function o(t,l){var e=l&&t&&t[0];e&&e.setAttribute("shape-rendering","crispEdges")}function h(t){var l,e,r,i;r=i=0;for(var n=0,a=0,s=t.length;s>a;a++)t[a]&&"number"==typeof t[a].x&&(r+=t[a].x,i+=t[a].y,n++);return l=r/n,e=i/n,{x:l,y:e}}function c(t,l,e){return l.length>=t?l:c(t,e+l,e)}var x={},y=function(t){this.console&&console.log(t)},u=6e4,f=36e5,d=864e5,p=6048e5,v=18144e6;x.chooseUnit=t,x.unit2digts=l;var g=2.220446049250313e-16,m=1/Math.log(10),b=function(t,l,e,r,i,n){var a;return a=(g>r%n||g>n-r%n)&&0>=r&&i>=0?1:0,1-t/(l-1)-e+a},_=function(t,l,e){return 1-t/(l-1)-e+1},w=function(t,l,e,r){var i;return i=l-t,1-.5*(Math.pow(l-r,2)+Math.pow(t-e,2))/Math.pow(.1*i,2)},k=function(t,l,e){var r,i;return i=l-t,e>i?(r=(e-i)/2,1-.5*(Math.pow(r,2)+Math.pow(r,2))/Math.pow(.1*i,2)):1},C=function(t,l,e,r,i,n){var a,s;return a=(t-1)/(n-i),s=(l-1)/(Math.max(n,r)-Math.min(e,i)),2-Math.max(a/s,s/a)},S=function(t,l){return t>=l?2-(t-1)/(l-1):1},A=function(t,l,e,r,i,n){var a,s,o,h,c,x,y,u,f,d,p,v,A,L,M,T,B,E,I,P,z,N,F,R,D,$,O,G,Y,j,X,q,V;if(null==r&&(r=!1),null==i&&(i=[1,5,2,2.5,4,3]),null==n&&(n={simplicity:.2,coverage:.25,density:.5,legibility:.05}),R=function(t,l,e,r){return n.simplicity*t+n.coverage*l+n.density*e+n.legibility*r},s=0,a=0,o=0,h=-2,f=g,q=t>l?[l,t]:[t,l],I=q[0],B=q[1],f>l-t)return[I,B,e,-2];for(L=i.length,p=-1;Number.POSITIVE_INFINITY>p;){for(N=j=0,V=L-1;V>=0?V>=j:j>=V;N=V>=0?++j:--j)if(z=i[N],D=_(N,L,p),h>R(D,1,1,1))p=Number.POSITIVE_INFINITY;else for(v=2;Number.POSITIVE_INFINITY>v;){if(u=S(v,e),h>R(D,1,u,1))v=Number.POSITIVE_INFINITY;else for(y=(B-I)/(v+1)/p/z,Y=Math.ceil(Math.log(y)*m);Number.POSITIVE_INFINITY>Y;)if(O=p*z*Math.pow(10,Y),x=k(I,B,O*(v-1)),h>R(D,x,u,1))Y=Number.POSITIVE_INFINITY;else{if(P=Math.floor(B/O)*p-(v-1)*p,E=Math.ceil(I/O)*p,P>E);else for($=X=P;E>=P?E>=X:X>=E;$=E>=P?++X:--X)T=$*(O/p),M=T+O*(v-1),(!r||I>=T&&M>=B)&&(F=b(N,L,p,T,M,O),c=w(I,B,T,M),d=C(v,e,I,B,T,M),A=1,G=R(F,c,d,A),G>h&&(h=G,s=T,a=M,o=O));Y+=1}v+=1}p+=1}return[s,a,o,h]};x.getProperUnit=A;var L=function(t,l,e){var r=A(t,l,e),i=r[0],n=r[1],a=r[2];l>n&&(n+=a),i>t&&(i-=a);for(var s=(n-i)/a,o=[],h=i,c=1;s>=c;c++)o.push(h),h+=a;return o.push(h),o};x.axis=L;var M=function(e,r){var i=Math.max.apply(Math,e),n=t(e,r);n||y("ERR OCCURED!");var a,s,o=l(n),h=e.map(function(t){return t/o});a=Math.min.apply(Math,h),s=Math.max.apply(Math,h);var c=L(a,s,r),x=Math.min.apply(Math,c)*o,u=Math.max.apply(Math,c)*o;return i>u&&(u+=o),c=c.map(function(t){return+new Date(t*o)}),{dates:c,unit:o,min:x,max:u}};x.getlabel=M,x.formatDate=e,x.roundToFixed=r;var T=Math.PI/180,B=180/Math.PI;return x.verticalLine=a,x.combineSeries=s,x.fixSVGLineStyle=o,x.averagePoints=h,x.pad=c,x}),KISSY.add("gallery/kcharts/1.3/realtime/index",function(t,l,e,r,i,n,a,s,o){function h(t){for(var l=[],e=[],r=0;t.length>r;r++){var i=t[r],n=i.data;if(n)for(var a=0;n.length>a;a++){var s=n[a];"number"==typeof s[0]?l.push(s[0]):l.push(null),"number"==typeof s[1]?e.push(s[1]):e.push(null)}}return{dates:l,values:e}}function c(t,l,e,r){for(var i=[],n=l.range,a=e.range,s=0,o=t.length;o>s;s++){var h;if(t[s].hided)h=[];else{var c=t[s];h={data:[],name:c.name};for(var x=0,y=c.data.length;y>x;x++){var u=c.data[x],f=u[0],d=u[1],p=r(n,a,f,d);p&&h.data.push(p)}}i.push(h)}return i}function x(t,l){l||(l={}),l.n||(l.n=5);var e=Math.min.apply(Math,t),r=Math.max.apply(Math,t);l.range&&"number"==typeof l.range.min&&e>l.range.min&&(e=l.range.min),l.range&&"number"==typeof l.range.max&&l.range.max>r&&(r=l.range.max);var i=n.axis(e,r,l.n),a=Math.min.apply(Math,i),s=Math.max.apply(Math,i),o={min:a,max:s,range:i};return o}function y(t,l){l||(l={n:5});var e=n.getlabel(t,l.n),r=e.min,i=e.max,a={unit:e.unit,min:r,max:i,range:e.dates};return a}function u(t,l,e){var r=t,i=Math.floor((l-t)/e);r=t+i*e;for(var n=[],a=t;r>=a;a+=e)n.push(a);return{range:n,min:t,max:r,len:i}}function f(t){for(;t.length;){var l=t.pop();l&&l.remove&&l.remove()}}function d(t){for(var l,e=0,r=t.length;r>e;e++){var i=t[e],n=i.x,a=i.y;e?l.push("L",n,a):l=["M",n,a]}return l.join(",")}function p(t){var l,e,r,i,a=[];if(2>=t.length)for(var s=0,o=t.length;o>s;s++)e=t[s],r=e.x,i=e.y,r=n.roundToFixed(r,100),i=n.roundToFixed(i,100),s?a.push("L",r,i):a.push("M",r,i);else for(var s=0,o=t.length;o>s;s++)e=t[s],r=e.x,i=e.y,r=n.roundToFixed(r,100),i=n.roundToFixed(i,100),s?a.push(r,i):a.push("M",r,i,"R");return l=a.join(",")}function v(t,l){for(var e,r,i,n=[],a=[],s=0,o=t.length;o>s;s++)e=t[s],r=e.x,i=e.y,null===r?(n.push(a),a=[]):a.push(e);n.push(a);for(var h="",c=0,x=n.length;x>c;c++)h+=l(n[c]);return h}function g(t,l,e){for(var r,i,a=[],s=0,o=e.n;o>s;s++)r=s/(o-1),e.ratio=r,i=n.verticalLine(t,l,e),a.push(i);return a}function m(t,l,e){if(e||(e={}),2>arguments.length)return!1;for(var r,i,a,s,o,h=e.style||{},c=h.ruller||"-.",x=[],y=1,u=t.length;u>y;y++){if(r=t[y],"-."===c)i=r.x0,s=r.y0,e.xaxis?(a=r.x2,o=r.y2):(a=r.x1,o=r.y1);else if(".-"===c)e.xaxis?(i=r.x0,s=r.y0,a=r.x2,o=r.y2):(i=r.x0,s=r.y0,a=r.x1,o=r.y1);else{if("-.-"!==c)return!1;i=r.x1,s=r.y1,a=r.x2,o=r.y2}x.push("M",n.roundToFixed(i,10),n.roundToFixed(s,10),"L",n.roundToFixed(a,10),n.roundToFixed(o,10))}var f=x.join(","),d=e.path;if(d)d.animate({path:f},200);else{var p=I(h.style);d=l.path(f).attr(p)}return d}function b(t,l){var e,r,i=l.xmin,n=l.xmax,a=l.ymin,s=l.ymax,o=l.px,h=l.py,c=t[0],x=t[1],y=l.width,u=l.height;return null===c||null===x?(e=null,r=null):(e=(c-i)/(n-i)*y+o,r=u-(x-a)/(s-a)*u+h),[e,r]}function _(t,l){for(var e=[],r=0;t.length>r;r++){var i=[];e.push(i);var n=t[r],a=n.data;if(a)for(var s=0;a.length>s;s++){var o,h,c=a[s],x=b(c,l);o=x[0],h=x[1],i.push({x:o,y:h,rawx:c[0],rawy:c[1]})}}return e}function w(t,e){function n(){o.attr({stroke:c.DEFAULT,"stroke-width":2}),o.hover(function(){o.attr({stroke:c.HOVER,"stroke-width":3})},function(){o.attr({stroke:c.DEFAULT,"stroke-width":2})})}var a=new r.Defer,s=a.promise;e.context;var o,h,c,x=e.paper;h=x.set(),c=e.color;var y,u;if(u="arc"===e.lineType?v(t,p):v(t,d),e.$line)o=e.$line,o.animate({path:u},200),setTimeout(function(){a.resolve({$line:o,$points:h,color:c})},0);else{var f,g=l.getTotalLength(u);y=i.AnimateObject([{from:{per:0},to:{per:1},frame:function(t,e){var r=l.getSubpath(u,0,e*g);o?o.attr({path:r}):(o=x.path(r),n()),f=e},endframe:function(){1!==f&&o.attr({path:u}),a.resolve({$line:o,$points:h,color:c})}}],{easing:"easeNone",duration:1e3})}return e.pointConfig.isShow!==!1&&V(t,function(t){var l=x.circle(t.x,t.y,4);l.attr({stroke:"#fff",fill:c.DEFAULT,"stroke-width":2}),h.push(l)}),s}function k(t){var l=(t.$line,t.$points);l&&l.unhover(),l&&l.remove()}function C(t){if(t)for(var l=0,e=t.length;e>l;l++)k(t[l])}function S(t){for(var l,e,r=0,i=t.length;i>r;r++)l=t[r].$line,l&&l.hide(),e=t[r].$points,e&&e.unhover(),e&&e.remove()}function A(t,l){var e=t.get("$lines");return e&&e[l]}function L(t){var l=/(\d+)?(day|week|month)/,e=t.match(l);if(!e)return!1;var r,i;r=e.length>1?parseInt(e[1])||1:1,i=e[2];var n,a=[];if("day"===i)a.push(0),n=24*r-1;else if("week"===i)n=7*r;else if("month"===i){var s=new Date;n=new Date(s.getFullYear(),s.getMonth()+1,0).getDate(),n*=r}for(var o=1;n>=o;o++)a.push(o);return a}function M(t){return 10>t?"0"+t:t}function T(t,l){if("day"===l)return M(t)+":00";if("week"===l){var e=["一","二","三","四","五","六","日"];return"星期"+e[t-1]}return"month"===l?n.formatDate(new Date,"yyyy-MM")+"-"+M(t,2):!1}function B(t,l){var e=L(l),r=e[0],i=e[e.length-1];return t>=r&&i>=t?!1:!0}function E(t){var l=t.currentTarget;if(t.offsetX)return{offsetX:t.offsetX,offsetY:t.offsetY};var e=a.offset(l);return{offsetX:t.offsetX||t.clientX-e.left,offsetY:t.offsetY||t.clientY-e.top}}function I(l){return t.merge({stroke:"#999","stroke-width":"1"},l)}function P(t,e,r,i){for(var a,s,o,h,c,x=i.paper,y=i.context,u=[],f=1,d=r.length;d>f;f++)i.vertical?(a=r[f].x0,s=r[f].y0,o=a,h=t,c="$yGrid"):(a=r[f].x0,s=r[f].y0,o=e,h=s,c="$xGrid"),u.push("M",a,s,"L",o,h);var p=y.get(c);return p?p.attr({path:u.join(",")}):(p=x.path(u.join(",")),y.set(c,p),p.attr(I()),n.fixSVGLineStyle(p,l.svg)),p}function z(t,l,e){e||(e="x");for(var r=[],i=!1,n=0,a=t.length;a>n;n++){for(var s=null,o=0,h=t[n].length;h>o;o++){if(N(t[n][o],l,e)){s=t[n][o],i=!0;break}s=null}r.push(s)}return i?r:!1}function N(t,l,e){return"number"==typeof t[e]?3>Math.abs(t[e]-l):!1}function F(t){var l=t.get("$floatPointer");return l||(l=[],t.set("$floatPointer",l)),l}function R(t,e){var r=t.get("$floatLine");if(!r){r=t.get("paper").path(""),t.set("$floatLine",r);var i=t.get("$lines"),a=i[0];r.insertBefore(a),n.fixSVGLineStyle(r,l.svg)}if(e&&e.pt){var s=e.type;if("arrow"===s){var o=$({x:e.pt.x,y:e.padding.paddingy},{x:e.pt.x,y:e.padding.paddingy+e.innerHeight});r.attr(Z({path:o,"stroke-width":0,fill:"#bbb"},e.attr))}else{var o=["M",e.pt.x,e.padding.paddingy,"L",e.pt.x,e.padding.paddingy+e.innerHeight].join(",");r.attr({path:o}).attr(Z(I(),e.attr))}}return r}function D(t,l){var e=l.context,r=e.getBBox();return t.x>=r.left&&t.x<=r.left+r.width&&t.y>=r.top&&t.y<=r.top+r.height}function $(t,l){var e=6,r=6,i={x:t.x-e,y:t.y},n={x:t.x+e,y:t.y},a={x:t.x,y:t.y+r},s={x:l.x,y:l.y-r},o={x:l.x+e,y:l.y},h={x:l.x-e,y:l.y},c="M",x="L",y=[c,i.x,i.y,x,n.x,n.y,x,a.x,a.y,x,s.x,s.y,x,o.x,o.y,x,h.x,h.y,x,s.x,s.y,x,a.x,a.y,x,i.x,i.y,"Z"];return y.join(",")}function O(){var t=this.get("$tip");t&&t.hide()}function G(t){if(!this._isRunning){var l=E(t),e=l.offsetX,r=l.offsetY;if(D({x:e,y:r},{context:this})){j&&clearTimeout(j);var i,a=this.get("seriesPoints"),s=z(a,e,"x"),o=this.get("paper"),h=this,c=this.get("$series"),x=F(this);if(s){var y=[];V(s,function(t,l){t?(x[l]?x[l].attr({cx:t.x,cy:t.y,fill:c[l].color.DEFAULT,stroke:"#fff","stroke-width":2}):(x[l]=o.circle(t.x,t.y,5),c[l]&&c[l].color&&x[l].attr({fill:c[l].color.DEFAULT,stroke:"#fff","stroke-width":2})),y.push({index:l,xvalue:t.rawx,yvalue:t.rawy}),x[l].show()):x[l]&&x[l].hide()});var u=n.averagePoints(s);if(u){h.fire("pointover",{x:n.roundToFixed(u.x,10),y:n.roundToFixed(u.y,10),data:y});var f=this.get("hoverLineOption")||{};if(f.isShow!==!1){var d=this.getPadding();f.pt=u,f.padding=d,f.innerHeight=h.get("innerHeight"),f.innerWidth=h.get("innerWidth"),i=R(this,f),i.show()}}}j=setTimeout(function(){V(x,function(t){t&&t.hide()}),i=R(h),i&&i.hide()},1e3)}}}function Y(t){var l=t.get("$xgrid"),e=t.get("$ygrid");l&&l.toBack(),e&&e.toBack()}var j,X,q="{COLOR}",V=t.each,H=(t.map,t.indexOf),Z=t.merge,U={inititialize:function(){var t=this.get("renderTo"),l=a.get(t);this.set("container",l);var e=this.get("theme")||"ks-chart-default";this.colorManager=new o({themeCls:e}),this.updateContainer();var r=this;setTimeout(function(){r.render(),r.bindEvent()},0)},render:function(){var e=this;if(this._isRunning)return this._runningTimer&&clearTimeout(this._runningTimer),this._runningTimer=setTimeout(function(){e.render()},300),void 0;if(this.fire("beforeRender")!==!1){for(this._isRunning=!0,this._gc_el||(this._gc_el=[]);this._gc_el.length;){var r=this._gc_el.pop();r.remove()}var i=this.get("container"),a=this.get("paper"),s=this.get("series")||[];if(0===s.length)return S(this.get("$series")),void 0;var o=this.get("width"),f=this.get("height"),p=this.get("innerWidth"),v=this.get("innerHeight"),b=this.getPadding(),k=b.paddingx,C=b.paddingy;a||(a=l(i,o,f),this.set("paper",a));var M=this.get("yAxis")||{},E=this.get("xAxis")||{},z=E.range;W=z&&z.duration,s=c(s,E,M,function(t,l,e,r){return t&&"number"==typeof t.min&&t.min>e||t&&"number"==typeof t.max&&e>t.max||l&&"number"==typeof l.min&&l.min>r||l&&"number"==typeof l.max&&r>l.max?!1:"number"!=typeof e||"number"!=typeof r?[null,null]:W&&B(e,W)?!1:[e,r]});var N=h(s);if(N.values.length){this.removeElements();var F=this.get("$xlabels"),R=this.get("$ylabels");this.get("$jointPoints");var D,$,O,G,j,X,q,V,H=x(N.values,{range:M.range,n:5}),Z=H.range.length;this.get("fixedInterval");var U,W;if(z)if(W)if(D=L(W),W.indexOf("day")>-1)O=0,j=D[D.length-1],q=D.length;else if(W.indexOf("week"))O=1,j=D[D.length-1],q=D.length;else{if(!W.indexOf("month"))throw Error("duration is not in correct format");O=1,j=D[D.length-1],q=D.length}else{var K=z.min,Q=z.max,J=z.step||1;z.isDate!==!1&&(U=!0),"number"!=typeof K&&(K=Math.min.apply(Math,N.dates)),"number"!=typeof Q&&(Q=Math.max.apply(Math,N.dates));var tl=u(K,Q,J);D=tl.range,O=tl.min,j=tl.max,q=tl.len}else{U=!0;var ll={n:M.num};if(!N.dates.length)return;var el=y(N.dates,ll),rl=el.range.length,il=el.min,nl=el.max;el.unit,D=el.range,O=il,j=nl,q=rl}$=H.range,G=H.min,X=H.max,V=Z;var al=_(s,{xmin:O,xmax:j,ymin:G,ymax:X,px:k,py:C,width:p,height:v});this.set("seriesPoints",al),this.set("rangeData",{xmin:O,xmax:j,ymin:G,ymax:X});var sl=this.get("$series");sl||(sl=[],this.set("$series",sl)),t.each(al,function(t,l){var r=e.colorManager.getColor(l),i=e.get("point"),n=e.get("lineType"),s=e.get("$lines");s||(s=[],e.set("$lines",s));var o,h=A(e,l),c=e.get("series"),x=c[l];x.hided?(o={color:r,$path:null},s[l]=o.$line,o.name=x.name,sl[l]=o):(w(t,{paper:a,color:r,$line:h,lineType:n,pointConfig:i,context:e}).then(function(t){s[l]=t.$line,t.name=x.name,sl[l]=t,e.renderLegend().then(function(){e.fire("afterRender"),e._isRunning=!1}).fail(function(t){window.console&&window.console.log(t)}),Y(e)}).fail(function(){}),h&&h.show())});for(var ol=[],hl=[],cl=0;q>cl;cl++){var xl,yl;xl=cl/(q-1)*p+k,yl=f-C,0===cl?ol.push({x:xl,y:yl}):cl===q-1&&ol.push({x:xl,y:yl});var ul;if(U){var fl=this.get("dateformat")||"yyyy-MM-dd";ul=n.formatDate(new Date(D[cl]),fl)}else ul=W?T(cl,W):D[cl];var dl=this.get("xLabel");dl.hook&&t.isFunction(dl.hook)&&(ul=dl.hook.call(e,ul));var pl=a.text(xl,yl,ul);dl&&dl.rotate?pl.attr({"text-anchor":"end",transform:"t-5,5r-45,"+xl+","+yl}):pl.attr({transform:"t0,12"}),F.push(pl)}for(var vl=0;V>vl;vl++){var xl,yl;xl=k,yl=f-C-vl/(V-1)*v,0===vl?hl.push({x:xl,y:yl}):vl===V-1&&hl.push({x:xl,y:yl});var gl=a.text(xl,yl,H.range[vl]).attr({"text-anchor":"end",transform:"t-5,0"});R.push(gl)}var ml=C,bl=k+p,_l=e.get("yRuller")||{},wl=k,kl=C+v,Cl=k,Sl=C,Al=V,Ll=g([wl,kl],[Cl,Sl],{n:Al,scale:_l.size||5}),Ml=this.get("$rullerY");if(_l.isShow!==!1){var Tl=m(Ll,a,{yaxis:!0,style:_l,path:Ml});Ml||(this.set("$rullerY",Tl),n.fixSVGLineStyle(Tl,l.svg))}var Bl,El,Il=this.get("xGrid")||{};Il.isShow!==!1&&(Bl=P(ml,bl,Ll,{paper:a,context:e}),this.set("$xgrid",Bl));var Pl=e.get("xRuller")||{},zl=k,Nl=C+v,Fl=k+p,Rl=C+v,Dl=q,$l=g([zl,Nl],[Fl,Rl],{n:Dl,scale:Pl.size||5});if(Pl.isShow!==!1){var Ol=this.get("$rullerX"),Gl=m($l,a,{xaxis:!0,style:Pl,path:Ol});Ol||(this.set("$rullerX",Gl),n.fixSVGLineStyle(Gl,l.svg))}var Yl=this.get("yGrid")||{};Yl.isShow!==!1&&(El=P(ml,bl,$l,{paper:a,vertical:!0,context:e}),this.set("$ygrid",El));var jl,Xl;if(E.isShow!==!1){jl=E.arrow?ol.map(function(t,l){return l?{x:t.x+15,y:t.y}:{x:t.x,y:t.y}}):ol;var ql=a.path(d(jl)).attr(I(t.merge({"stroke-width":1.5},E.attr)));E.arrow===!0&&ql.attr({"arrow-end":"classic-wide-long"}),this.set("$xaxis",ql),n.fixSVGLineStyle(ql,l.svg)}if(M.isShow!==!1){Xl=M.arrow?hl.map(function(t,l){return l?{x:t.x,y:t.y-15}:{x:t.x,y:t.y}}):hl;var Vl=a.path(d(Xl)).attr(I(t.merge({"stroke-width":1.5},M.attr)));M.arrow===!0&&Vl.attr({"arrow-end":"classic-wide-long"}),this.set("$yaxis",Vl),n.fixSVGLineStyle(Vl,l.svg)}var Hl=this.get("xAxisLabel")||{};if(Hl.isShow!==!1&&jl){var Zl=Hl.text||"x",Ul=a.text(jl[1].x,jl[1].y,Zl).attr({"text-anchor":"start"});this.addGCel(Ul)}var Wl=this.get("xAxisLabel")||{};if(Wl.isShow!==!1&&Xl){var Kl=Hl.text||"y",Ql=a.text(Xl[1].x,Xl[1].y,Kl).attr({"text-anchor":"end"});this.addGCel(Ql)}var Jl=this.get("tip");Jl&&0!=Jl&&this.renderTip()}}},updateContainer:function(){var t,l,e=this.get("container"),r=a.width(e),i=a.height(e);this.set("width",r),this.set("height",i);var n,s,o=this.getPadding();n=o.paddingx,s=o.paddingy,t=r-2*n,l=i-2*s,this.set("innerWidth",t),this.set("innerHeight",l)},bindEvent:function(){var t=this.get("container");s.on(t,"mouseleave",O,this),this.get("point"),s.on(t,"mousemove",G,this)},unbindEvent:function(){var t=this.get("container");s.detach(t,"mouseleave",O)},clearData:function(){this.set("series",[])},data2point:function(t){var l,e,r=this.get("innerWidth"),i=this.get("innerHeight"),n=this.getPadding(),a=this.get("rangeData"),s=t[0],o=t[1];return"number"==typeof s&&(l=n.paddingx+(s-a.xmin)/(a.xmax-a.xmin)*r),"number"==typeof o&&(e=n.paddingy+(i-(o-a.ymin)/(a.ymax-a.ymin)*i)),[l,e]},text:function(t,l,e,r){r||(r={});var i,n,a,s,o=this.data2point([t,l]);if("number"==typeof o[0]&&"number"==typeof o[1]){i=this.get("paper"),a=o[0],s=o[1];var h=r.attr||{},c=r.offset||{},x=c.x||0,y=c.y||0;n=i.text(a+x,s+y,e).attr(h),0!=r.autoGC&&this.addGCel(n)}return n},addGCel:function(t){this._gc_el||(this._gc_el=[]),-1===H(t,this._gc_el)&&this._gc_el.push(t)},drawLine:function(t,e){e||(e={});var r,i=t.split("="),a=i[0],s=parseFloat(i[1]),o=this.get("innerWidth"),h=this.get("innerHeight"),c=this.getPadding(),x=this.get("paper"),y={},u={};if(e.raw)"x"===a?(y.x=s,y.y=c.paddingy,u.x=y.x,u.y=h+c.paddingy):(y.x=c.paddingx,y.y=s+c.paddingy,u.x=o+c.paddingx,u.y=s+c.paddingy);else{var f=this.get("rangeData");if("x"===a){if(s>f.xmax||f.xmin>s)return!1;y.x=c.paddingx+(s-f.xmin)/(f.xmax-f.xmin)*o,y.y=c.paddingy,u.x=y.x,u.y=y.y+h}else{if(s>f.ymax||f.ymin>s)return!1;y.x=c.paddingx,y.y=(s-f.ymin)/(f.ymax-f.ymin)*h,y.y=c.paddingy+h-y.y,u.x=y.x+o,u.y=y.y}}return r=x.path(["M",y.x,y.y,"L",u.x,u.y].join(",")),n.fixSVGLineStyle(r,l.svg),r.attr(I(e.style)),{$path:r,start:y,end:u}},getBBox:function(){var t=this.getPadding(),l=this.get("innerWidth"),e=this.get("innerHeight");return{width:l,height:e,left:t.paddingx,top:t.paddingy}},getPadding:function(){var l=t.isNumber(this.get("paddingx"))?this.get("paddingx"):15,e=t.isNumber(this.get("paddingy"))?this.get("paddingx"):15;return{paddingx:l,paddingy:e}},buildLegendParts:function(){var l=[],e="";return l=t.map(this.get("$series"),function(t){return e+=t.name,{DEFAULT:t.color.DEFAULT,HOVER:t.color.HOVER,text:t.name,$path:t.$path}}),this.legendString=e,l},renderLegend:function(){var e=this,i=e.get("legend"),n=new r.Defer,a=n.promise;if(i&&0!=i.isShow){var s=this.get("$legend");s&&s.destroy&&s.destroy(),t.use("gallery/kcharts/1.3/legend/index",function(t,r){var a=e.get("paper"),s=e.get("container"),o=(e.getPadding(),e.legendString),h=e.buildLegendParts(),c=e.legendString;if(o===c)return n.resolve(),void 0;var x=this.get("legend");x&&x.destroy&&x.destroy();var y={paper:a,container:s,bbox:e.getBBox(),iconAttrHook:function(t){var l=h[t].color;return{fill:l}},spanAttrHook:function(t){var e=l.getRGB(h[t].DEFAULT);return{color:e.hex}},config:h};x=new r(t.merge(y,i)),x.on("click",function(t){var l=t.index,e=(t.text,t.icon,t.el);1!=e.hide?(this.hideLine(l),e.hide=1,e.disable()):(this.showLine(l),e.hide=0,e.enable())},e),e.set("legend",x),n.resolve()})}return a},renderTip:function(l){if(!this.get("$tip")&&(l||(l=this.get("tip")),l)){var e=this,r=e.get("container");t.use("gallery/kcharts/1.3/tip/index,gallery/kcharts/1.3/tip/assets/tip.css",function(t,i){var n=e.getBBox();n.x=n.left,n.y=n.top;var a=l.themeCls||"ks-chart-default",s=l.boundryDetect?n:{},o=t.mix(l,{rootNode:r,clsName:a,boundry:s},void 0,void 0,!0),h=new i(o);e.set("$tip",h),e.on("pointover",function(r){var i=r.x+20,n=r.y;r.index,r.xvalue,r.yvalue,t.isFunction(l.template)?h.setContent(l.template.apply(h,[r.index,r.data])):h.renderTemplate(l.template,r),h.fire("move",{x:i,y:n,style:e.processAttr(l.css,{DEFAULT:"yellow",HOVER:"blue"})})},e)})}},processAttr:function(l,e){var r=t.clone(l);for(var i in r)r[i]&&"string"==typeof r[i]&&(r[i]=r[i].replace(q,e));return r},hideLine:function(l){if(t.isNumber(l)){var e=this.get("$series")[l],r=this.get("series")[l];if(e){var i=e.$line;i&&i.hide();var n=e.$points;n&&n.hide(),r.hided=!0}else r.hided=!0,this.render()}},showLine:function(l){if(t.isNumber(l)){var e=this.get("$series")[l],r=this.get("series")[l];if(e&&e.$line){var i=e.$line;i&&i.show();var n=e.$points;n&&n.show(),r.hided=!1}else r.hided=!1,this.render()}},removeElements:function(){var t=this.get("paper");C(this.get("$series"));var l=this.get("$xlabels");l?f(l):(l=t.set(),this.set("$xlabels",l));var e=this.get("$ylabels");e?f(e):(e=t.set(),this.set("$ylabels",e)),this.get("$xaxis")&&this.get("$xaxis").remove(),this.get("$yaxis")&&this.get("$yaxis").remove();var r=this.get("$jointPoints");r?f(r):(r=[],this.set("$jointPoints",r))},addSeries:function(t){for(var l=this.get("series"),e=0,r=t.length;r>e;e++)n.combineSeries(t[e],l)},updateAllSeries:function(t){t&&(this.clearData(),this.set("series",t),this.render())},destroy:function(){this.unbindEvent(),this.removeElements()}};return e.extend?X=e.extend(U):(X=function(t){this.set(t),this.inititialize()},t.extend(X,e,U)),X},{requires:["gallery/kcharts/1.3/raphael/index","base","promise","gallery/kcharts/1.3/animate/index","./util","dom","event","gallery/kcharts/1.3/tools/color/index"]});