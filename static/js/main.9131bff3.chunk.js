(this["webpackJsonpbarcode-generator"]=this["webpackJsonpbarcode-generator"]||[]).push([[0],{21:function(e,t,a){e.exports=a(52)},52:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),o=a(12),i=a.n(o),s=a(18),u=a(4),m=a(5),d=a(7),p=a(6),E=a(8),h=a(19),v=a.n(h),f=a(20),b=a.n(f),y=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("table",{className:"ui fixed table"},r.a.createElement("thead",null,r.a.createElement("th",null,"Key1"),r.a.createElement("th",null,"Lot No"),r.a.createElement("th",null,"QR CODE")),r.a.createElement("tbody",null,this.props.datas.map((function(e){return r.a.createElement("tr",{key:e.key},r.a.createElement("td",null,e.key),r.a.createElement("td",null,e.lot),r.a.createElement("td",null,r.a.createElement("img",{key:e.svg,src:e.svg})))}))))}}]),t}(r.a.Component),g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={datas:[]},a.onSubmit=function(e){e.preventDefault(),a.splitCal(e.target.elements)},a.splitCal=function(){var e=Object(s.a)(i.a.mark((function e(t){var n,r,l,c,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=t.lotText,r=t.deliveryQty,l=t.lotSize,c=Math.ceil(r.value/l.value),o=[],s=1;case 4:if(!(s<=c)){e.next=16;break}return e.t0=o,e.t1=s,e.t2="".concat(n.value,"-").concat(s),e.next=10,v.a.toDataURL("".concat(n.value,"-").concat(s),{type:"svg"});case 10:e.t3=e.sent,e.t4={key:e.t1,lot:e.t2,svg:e.t3},e.t0.push.call(e.t0,e.t4);case 13:s++,e.next=4;break;case 16:a.setState({datas:o});case 17:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),a}return Object(E.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"ui header"},r.a.createElement("div",{className:"content"},"Lot Spliter")),r.a.createElement("form",{className:"ui form",onSubmit:this.onSubmit},r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Lot TEXT:"),r.a.createElement("input",{type:"text",name:"lotText",placeholder:"LOT TEXT"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Delevery QTY:"),r.a.createElement("input",{type:"text",name:"deliveryQty",placeholder:"Delevery QTY"})),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,"Lot size:"),r.a.createElement("input",{type:"text",name:"lotSize",placeholder:"Lot size"})),r.a.createElement("button",{className:"ui button",type:"submit"},"Submit"),r.a.createElement("div",{className:"row"},this.state.datas.length>0?r.a.createElement("div",{className:"row"},r.a.createElement(b.a,{trigger:function(){return r.a.createElement("button",{className:"ui button",href:"#"},"Print this out!")},content:function(){return e.componentRef}}),r.a.createElement("div",{style:{display:"none"}},r.a.createElement(y,{datas:this.state.datas,ref:function(t){return e.componentRef=t}}))):" ")))}}]),t}(r.a.Component),k=function(){return r.a.createElement("div",{className:"ui container"},r.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.9131bff3.chunk.js.map