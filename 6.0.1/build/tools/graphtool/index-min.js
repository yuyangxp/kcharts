/*!build time : 2015-04-14 1:37:57 PM*/
KISSY.add("kg/kcharts/6.0.1/tools/graphtool/index",function(a,b){var c=Math.sqrt,d={},e=function(a,b,d,e,f){var g,h=["M"+[b,d-e].join(","),"L"+[b-e*c(3)/2,d-0+1*e/2].join(","),[b-0+e*c(3)/2,d-0+1*e/2].join(","),"Z"].join(" ");return a&&a.path?(g=a.path(h),g.rotate(f,b,d),g):void 0},f=function(a,b,c,d,e,f){var g,h=["M"+[b,c-e/2].join(","),"L"+[b-0+d/2,c].join(","),[b,c-0+e/2].join(","),[b-d/2,c].join(","),"Z"].join(",");return a&&a.path?(g=a.path(h),g.rotate(f,b,c),g):void 0},g=function(a,b,c,d,e){var f,g=[["M",b-d/2,",",c-e/2].join(""),[" L",b/1+d/2,",",c-e/2," v",e," h",-d,"z"].join("")];return a&&a.path?f=a.path(g):void 0};return d=a.merge(d,{triangle:e,rhomb:f,square:g})},{requires:["kg/kcharts/6.0.1/raphael/index"]});