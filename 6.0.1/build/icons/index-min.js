/*!build time : 2015-04-14 1:37:57 PM*/
KISSY.add("kg/kcharts/6.0.1/icons/index",function(a){var b=a.merge,c=a.isArray,d=[10,6],e="M",f="L",g="Z",h={trianglePath:function(a,b,c){var d=Math.sqrt(3)/3*c,h=1/6*c,i=[a,b-2/3*c+h],j=[a-d,b+1/3*c+h],k=[a+d,b+1/3*c+h],l=[e,i[0],i[1],f,j[0],j[1],f,k[0],k[1],g];return l},lineThrouth:function(a,b,c,d){var f=d.paper,g=d.size[0];return f.path([e,a-1.1*g*c,b,a+1.1*g*c,b].join(","))}},i={rect:function(a,c,e){var f=e.width||d[0],g=e.height||d[1],h=a-f/2,i=c-g/2,j=e.paper.rect(h,i,f,g).attr(b({},e.attrs));return j},square:function(a,c,e){return this.rect(a,c,b({width:d[1]},e))},linesquare:function(a,b,c){var e=this.square(a,b,c),f=d[1],g=c.paper.set();g.push(e);var i=h.lineThrouth(a,b,f,c);return g.push(i),g},diamond:function(a,b,c){var d=this.square(a,b,c).attr("transform","r45");return d},linediamond:function(a,b,c){var e=this.square(a,b,c).attr("transform","r45"),f=d[1],g=c.paper.set();g.push(e);var i=h.lineThrouth(a,b,f,c);return g.push(i),g},circle:function(a,b,c){var e;return e=c.paper.circle(a,b,d[1]/2)},linecircle:function(a,b,c){var e=this.circle(a,b,c),f=d[1],g=c.paper.set();g.push(e);var i=h.lineThrouth(a,b,f,c);return g.push(i),g},triangle:function(a,b,c){var e=d[1],f=h.trianglePath(a,b,e);return c.paper.path(f.join(","))},linetriangle:function(a,b,c){var e=d[1],f=h.trianglePath(a,b,e),g=c.paper.set();g.push(c.paper.path(f.join(",")));var i=h.lineThrouth(a,b,e,c);return g.push(i),g}},j={};for(var k in i)!function(b){var d=i[b];j[b]=function(b,e,f){var g=d.call(i,b,e,f);f.size&&(c(f.size)||(f.size=[f.size,f.size]),g.scale(f.size[0],f.size[1]));var h,j,k=f.attrs||{};return g.clear?(h=g[0],j=g[1],j.attr({stroke:k.fill||"#000","stroke-width":2*f.size[1]})):h=g,h.attr(a.merge({"stroke-width":0},f.attrs)),g}}(k);return j.BASIC=d,j});