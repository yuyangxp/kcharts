/*! kcharts - v1.3 - 2014-01-23 5:42:15 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/tools/color/index",function(t){function l(t,l){var e=parseInt(t.substring(1,3),16),r=parseInt(t.substring(3,5),16),i=parseInt(t.substring(5,7),16);e=parseInt(e*(100+l)/100),r=parseInt(r*(100+l)/100),i=parseInt(i*(100+l)/100),e=255>e?e:255,r=255>r?r:255,i=255>i?i:255;var n=1==e.toString(16).length?"0"+e.toString(16):e.toString(16),a=1==r.toString(16).length?"0"+r.toString(16):r.toString(16),s=1==i.toString(16).length?"0"+i.toString(16):i.toString(16);return"#"+n+a+s}var e=function(t){this.init(t)};return t.augment(e,{init:function(t){var l=t&&t.themeCls||"ks-chart-default";this._colors=this.colorCfg[l]||this.colorCfg["ks-chart-default"]},colorCfg:{"ks-chart-default":[{DEFAULT:"#1f77b4",HOVER:"#1f77b4"},{DEFAULT:"#aec7e8",HOVER:"#aec7e8"},{DEFAULT:"#98df8a",HOVER:"#98df8a"},{DEFAULT:"#ff7f0e",HOVER:"#ff7f0e"},{DEFAULT:"#2ca02c",HOVER:"#2ca02c"},{DEFAULT:"#ffbb78",HOVER:"#ffbb78"},{DEFAULT:"#d62728",HOVER:"#d62728"},{DEFAULT:"#ff9896",HOVER:"#ff9896"}],"ks-chart-analytiks":[{DEFAULT:"#00adef",HOVER:"#1176ba"},{DEFAULT:"#8cc63e",HOVER:"#066839"},{DEFAULT:"#f7941d",HOVER:"#ef3e38"},{DEFAULT:"#ee217e",HOVER:"#cd7db2"},{DEFAULT:"#603814",HOVER:"#8a5e3b"},{DEFAULT:"#662e91",HOVER:"#492062"},{DEFAULT:"#bf1e2d",HOVER:"#ec1d23"}],"ks-chart-rainbow":[{DEFAULT:"#4573a7",HOVER:"#5E8BC0"},{DEFAULT:"#aa4644",HOVER:"#C35F5C"},{DEFAULT:"#89a54e",HOVER:"#A2BE67"},{DEFAULT:"#806a9b",HOVER:"#9982B4"},{DEFAULT:"#3e96ae",HOVER:"#56AFC7"},{DEFAULT:"#d9853f",HOVER:"#F49D56"},{DEFAULT:"#808080",HOVER:"#A2A2A2"},{DEFAULT:"#188AD7",HOVER:"#299BE8"},{DEFAULT:"#90902C",HOVER:"#B7B738"},{DEFAULT:"#AFE65D",HOVER:"#C5ED89"}]},removeAllColors:function(){return this._colors=[],this._colors},setColor:function(t){var e=10;t&&(t.DEFAULT&&t.HOVER||(t.DEFAULT&&!t.HOVER?t.HOVER=l(t.DEFAULT,e):t={DEFAULT:t,HOVER:l(t,e)})),this._colors.push(t)},getColor:function(t){return this._colors[t%this._colors.length]},getColors:function(){var t,l=0,e=this,r=[];arguments[1]?(l=arguments[0],t=arguments[1]):t=arguments[0];for(var i=l;t-l>i;i++)r.push(e.getColor(i));return r}}),e});