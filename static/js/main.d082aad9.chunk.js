(this.webpackJsonpjademm=this.webpackJsonpjademm||[]).push([[0],{81:function(t,e,a){t.exports=a(89)},86:function(t,e,a){},87:function(t,e,a){},88:function(t,e,a){t.exports=a.p+"static/media/data.0fa7f54e.csv"},89:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(26),i=a.n(c),s=(a(86),a(87),a(27)),o=a(15),d=a(28),l=a(29),u=a(31),h=a(32),f=a(1),v=a(30),m=a.n(v);function p(t){return r.a.createElement("form",null,t.showKeys.map((function(e,a){return r.a.createElement("span",{class:"checks",key:"district".concat(e.district)},r.a.createElement("input",{type:"checkbox",id:"district".concat(e.district),checked:e.checked,onChange:function(e){return t.handleChange(e,a)}}),r.a.createElement("label",{htmlFor:"district".concat(e.district)},"District ".concat(e.district)))})))}var w=function(t){Object(h.a)(n,t);var e=Object(u.a)(n);function n(){var t;return Object(d.a)(this,n),(t=e.call(this)).saveData=function(e){var a,n=Object(o.a)(e.data),r=[],c=0,i=[],d=[],l=Object(s.a)(n);try{for(l.s();!(a=l.n()).done;){var u=a.value;i.includes(u.district)?r[i.indexOf(u.district)].value++:(i[c]=u.district,r[c]={label:u.district,value:1},d[c]={district:u.district,checked:!0},c++)}}catch(h){l.e(h)}finally{l.f()}d.sort((function(t,e){return Number(t.district)-Number(e.district)})),r.sort((function(t,e){return Number(t.label)-Number(e.label)})),t.setState({districts:r}),t.setState({data:r}),t.setState({showKeys:d})},t.handleChange=function(e,a){var n=Object(o.a)(t.state.showKeys);n[a].checked?n[a].checked=!1:n[a].checked=!0,t.setState({showKeys:n}),t.updateData(n)},t.updateData=function(e){var a=t.state.districts.map((function(e,a){return t.state.showKeys[a].checked?e:{label:e.district,value:0}}));t.setState({data:a})},t.drawCanvas=function(){var e=t.state,a=e.height,n=e.width,r=f.e("#canvas").append("svg").attr("width",n).attr("height",a).append("g").attr("transform","translate(".concat(n/2,", ").concat(a/2,")"));t.setState({canvas:r}),t.drawKey(r)},t.drawSlices=function(e){var a=t.state,n=a.height,r=a.width,c=a.canvas,i=a.data,s=Math.min(n,r)/2,o=f.d().range(["#A7226E","#EC2049","#F26B38","#cc3300","#F7DB4F","#2F9599"]),d=f.a().innerRadius(.5*s).outerRadius(s),l=f.c().value((function(t){return t.value})).sort(null),u=c.selectAll("path").data(l(i));u.enter().insert("path").attr("d",d).style("fill",(function(t,e){return o(e)})),u.transition().duration(1e3).attrTween("d",(function(t){this._current=this._current||t;var e=f.b(this._current,t);return this._current=e(0),function(t){return d(e(t))}})),u.exit().remove()},t.drawKey=function(e){var a=t.state,n=(a.height,a.width,f.d().range(["#A7226E","#EC2049","#F26B38","#cc3300","#F7DB4F","#2F9599"])),r=[1,2,3,4,5,6];e.selectAll("circle").data(r).enter().append("circle").attr("r",6).attr("cx",-35).attr("cy",(function(t){return 20*t-70})).style("fill",(function(t,e){return n(e)})),e.selectAll("text").data(r).enter().append("text").text((function(t){return"District ".concat(t)})).attr("x",-20).attr("y",(function(t,e){return 20*t-64}))},t.state={data:[],districts:[],showKeys:[],width:600,height:400,canvas:f.e("#canvas")},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=a(88);m.a.parse(t,{header:!0,download:!0,skipEmptyLines:!0,complete:this.saveData}),this.drawCanvas()}},{key:"render",value:function(){return this.drawSlices(),r.a.createElement("div",{class:"container"},r.a.createElement("h3",null,"Sacremento Crime Rates by District - 2006"),r.a.createElement("div",{id:"canvas"}),r.a.createElement(p,{showKeys:this.state.showKeys,handleChange:this.handleChange}))}}]),n}(r.a.Component);var y=function(){return r.a.createElement("div",null,r.a.createElement(w,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[81,1,2]]]);
//# sourceMappingURL=main.d082aad9.chunk.js.map