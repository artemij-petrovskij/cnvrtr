(function(t){function e(e){for(var s,l,a=e[0],i=e[1],c=e[2],h=0,f=[];h<a.length;h++)l=a[h],Object.prototype.hasOwnProperty.call(n,l)&&n[l]&&f.push(n[l][0]),n[l]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);o&&o(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),r()}function r(){for(var t,e=0;e<u.length;e++){for(var r=u[e],s=!0,a=1;a<r.length;a++){var i=r[a];0!==n[i]&&(s=!1)}s&&(u.splice(e--,1),t=l(l.s=r[0]))}return t}var s={},n={app:0},u=[];function l(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=t,l.c=s,l.d=function(t,e,r){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)l.d(r,s,function(e){return t[e]}.bind(null,s));return r},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var o=i;u.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),n=r.n(s);n.a},1837:function(t,e,r){},"2a34":function(t,e,r){r("96cf");var s=r("c973"),n=r("970b"),u=r("9523"),l=r("dab5"),a="api/currency/",i=function t(){"use strict";n(this,t)};u(i,"getCurrency",s(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,l(a);case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))),t.exports=i},"45db":function(t,e,r){"use strict";var s=r("1837"),n=r.n(s);n.a},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),n=r("5c96"),u=r.n(n),l=(r("0fae"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("index")}),a=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("el-header",[r("h1",[t._v("CNVRTR")])]),r("el-main",[r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyBLR},model:{value:t.result.BLR,callback:function(e){t.$set(t.result,"BLR",e)},expression:"result.BLR"}},[r("template",{slot:"append"},[t._v("BLR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyUSD},model:{value:t.result.USD,callback:function(e){t.$set(t.result,"USD",e)},expression:"result.USD"}},[r("template",{slot:"append"},[t._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyEUR},model:{value:t.result.EUR,callback:function(e){t.$set(t.result,"EUR",e)},expression:"result.EUR"}},[r("template",{slot:"append"},[t._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyRUB},model:{value:t.result.RUB,callback:function(e){t.$set(t.result,"RUB",e)},expression:"result.RUB"}},[r("template",{slot:"append"},[t._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyPLN},model:{value:t.result.PLN,callback:function(e){t.$set(t.result,"PLN",e)},expression:"result.PLN"}},[r("template",{slot:"append"},[t._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:t.clearFields}},[t._v("Очистить")])],1)],1)],1)},c=[],o=(r("b680"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),h=r("2a34"),f=r.n(h),p={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:""},result:{BLR:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,f.a.getCurrency();case 2:r=e.sent,t.currency.USD=r[4].Cur_OfficialRate,t.currency.EUR=r[5].Cur_OfficialRate,t.currency.RUB=r[16].Cur_OfficialRate,t.currency.PLN=r[6].Cur_OfficialRate;case 7:case"end":return e.stop()}}),e)})))()},methods:{currencyBLR:function(){this.result.BLR=event.target.value=this.ifNaN(event.target.value),this.result.USD=this.formatNumber(this.result.BLR/this.currency.USD),this.result.EUR=this.formatNumber(this.result.BLR/this.currency.EUR),this.result.RUB=this.formatNumber(this.result.BLR/this.currency.RUB*100),this.result.PLN=this.formatNumber(this.result.BLR/this.currency.PLN*10)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.BLR=this.formatNumber(this.result.USD*this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.EUR)),this.result.RUB=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.PLN)*10)},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.BLR=this.formatNumber(this.result.EUR*this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.USD)),this.result.RUB=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.PLN)*10)},currencyRUB:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BLR=this.formatNumber(this.result.PLN*this.currency.RUB/100),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.USD/100)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.EUR/100)),this.result.PLN=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.PLN/100*10))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BLR=this.result.PLN*this.currency.PLN/10,this.result.USD=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.USD/10)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.EUR/10)),this.result.RUB=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.RUB*10))},clearFields:function(){this.result.BLR="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(t){return parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(t){return t.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},m=p,b=(r("45db"),r("2877")),y=Object(b["a"])(m,i,c,!1,null,null,null),R=y.exports,U={name:"App",components:{index:R}},d=U,g=(r("034f"),Object(b["a"])(d,l,a,!1,null,null,null)),N=g.exports;s["default"].use(u.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(N)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.3ee03c56.js.map