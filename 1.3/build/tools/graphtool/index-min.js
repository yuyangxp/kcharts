/*! kcharts - v1.3 - 2014-01-23 5:42:15 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/tools/graphtool/index",function(t){var e=Math.sqrt,l={},r=function(t,l,r,i,n){var a,s=["M"+[l,r-i].join(","),"L"+[l-i*e(3)/2,r-0+1*i/2].join(","),[l-0+i*e(3)/2,r-0+1*i/2].join(","),"Z"].join(" ");return t&&t.path?(a=t.path(s),a.rotate(n,l,r),a):void 0},i=function(t,e,l,r,i,n){var a,s=["M"+[e,l-i/2].join(","),"L"+[e-0+r/2,l].join(","),[e,l-0+i/2].join(","),[e-r/2,l].join(","),"Z"].join(",");return t&&t.path?(a=t.path(s),a.rotate(n,e,l),a):void 0},n=function(t,e,l,r,i){var n,a=[["M",e-r/2,",",l-i/2].join(""),[" L",e/1+r/2,",",l-i/2," v",i," h",-r,"z"].join("")];return t&&t.path?n=t.path(a):void 0};return l=t.merge(l,{triangle:r,rhomb:i,square:n})},{requires:["gallery/kcharts/1.3/raphael/index"]});