(function(e){function t(t){for(var n,c,l=t[0],i=t[1],a=t[2],f=0,p=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);o&&o(t);while(p.length)p.shift()();return u.push.apply(u,a||[]),r()}function r(){for(var e,t=0;t<u.length;t++){for(var r=u[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==s[i]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},s={app:0},u=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var o=i;u.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},1837:function(e,t,r){},"2a34":function(e,t,r){r("96cf");var n=r("c973"),s=r("970b"),u=r("9523"),c=r("dab5"),l="api/currency/",i=function e(){"use strict";s(this,e)};u(i,"getCurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(l);case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),e.exports=i},"45db":function(e,t,r){"use strict";var n=r("1837"),s=r.n(n);s.a},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("5c96"),u=r.n(s),c=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("index")}),l=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("el-header",[e._v("Header5")]),r("el-main",[r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"20px"},attrs:{"label-width":"150px"}},[r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}}),e._v("BLR ")]),r("el-input",{attrs:{name:"text"},on:{input:e.currencyBLR},model:{value:e.result.BLR,callback:function(t){e.$set(e.result,"BLR",t)},expression:"result.BLR"}})],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}}),e._v("USD ")]),r("el-input",{attrs:{name:"text"},on:{input:e.currencyUSD},model:{value:e.result.USD,callback:function(t){e.$set(e.result,"USD",t)},expression:"result.USD"}})],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}}),e._v("EUR ")]),r("el-input",{attrs:{name:"text"},on:{input:e.currencyEUR},model:{value:e.result.EUR,callback:function(t){e.$set(e.result,"EUR",t)},expression:"result.EUR"}})],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}}),e._v("RUB ")]),r("el-input",{attrs:{name:"text"},on:{input:e.currencyRUB},model:{value:e.result.RUB,callback:function(t){e.$set(e.result,"RUB",t)},expression:"result.RUB"}})],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}}),e._v("PLN ")]),r("el-input",{attrs:{name:"text"},on:{input:e.currencyPLN},model:{value:e.result.PLN,callback:function(t){e.$set(e.result,"PLN",t)},expression:"result.PLN"}})],1)],1)],1)],1)},a=[],o=(r("96cf"),r("1da1")),f=r("2a34"),p=r.n(f),h={name:"HelloWorld",data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:""},result:{USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getCurrency();case 2:r=t.sent,e.currency.USD=r[4].Cur_OfficialRate,e.currency.EUR=r[5].Cur_OfficialRate,e.currency.RUB=r[16].Cur_OfficialRate,e.currency.PLN=r[6].Cur_OfficialRate;case 7:case"end":return t.stop()}}),t)})))()},methods:{currencyBLR:function(e){this.result.USD=e/this.currency.USD,this.result.EUR=e/this.currency.EUR,this.result.RUB=e/this.currency.RUB*100,this.result.PLN=e/this.currency.PLN*10},currencyUSD:function(e){this.result.BLR=e*this.currency.USD,this.result.EUR=e*(this.currency.USD/this.currency.EUR),this.result.RUB=e*(this.currency.USD/this.currency.RUB)*100,this.result.PLN=e*(this.currency.USD/this.currency.PLN)*10},currencyEUR:function(e){this.result.BLR=e*this.currency.EUR,this.result.USD=e*(this.currency.EUR/this.currency.USD),this.result.RUB=e*(this.currency.EUR/this.currency.RUB)*100,this.result.PLN=e*(this.currency.EUR/this.currency.PLN)*10},currencyRUB:function(e){this.result.BLR=e*this.currency.RUB/100,this.result.USD=e*(this.currency.RUB/this.currency.USD/100),this.result.EUR=e*(this.currency.RUB/this.currency.EUR/100),this.result.PLN=e*(this.currency.RUB/this.currency.PLN/100*10)},currencyPLN:function(e){this.result.BLR=e*this.currency.PLN/10,this.result.USD=e*(this.currency.PLN/this.currency.USD/10),this.result.EUR=e*(this.currency.PLN/this.currency.EUR/10),this.result.RUB=e*(this.currency.PLN/this.currency.RUB*10)}}},y=h,m=(r("45db"),r("2877")),U=Object(m["a"])(y,i,a,!1,null,null,null),d=U.exports,R={name:"App",components:{index:d}},b=R,g=(r("034f"),Object(m["a"])(b,c,l,!1,null,null,null)),v=g.exports;n["default"].use(u.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(v)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.2147106a.js.map