(function(e){function t(t){for(var n,c,l=t[0],i=t[1],u=t[2],f=0,p=[];f<l.length;f++)c=l[f],Object.prototype.hasOwnProperty.call(s,c)&&s[c]&&p.push(s[c][0]),s[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);o&&o(t);while(p.length)p.shift()();return a.push.apply(a,u||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==s[i]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},s={app:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var o=i;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var n=r("85ec"),s=r.n(n);s.a},"0c2d":function(e,t,r){e.exports=r.p+"img/cardano.0b141af5.png"},"2a34":function(e,t,r){r("96cf");var n=r("c973"),s=r("970b"),a=r("9523"),c=r("a18f"),l="api/currency",i=function e(){"use strict";s(this,e)};a(i,"getNBRBCurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat(l,"/NBRB"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),a(i,"getCRBCurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat(l,"/CRB"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),a(i,"getBTCCurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat(l,"/BTC"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.data[0]);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),a(i,"getETHCurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat(l,"/ETH"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.data[0]);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),a(i,"getADACurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat(l,"/ADA"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.data[0]);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),a(i,"getDOTCurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat(l,"/DOT"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.data[0]);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),a(i,"getXRPCurrency",n(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c("".concat(l,"/XRP"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.data[0]);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),e.exports=i},"4f7a":function(e,t,r){e.exports=r.p+"img/flag_usa.e10750d5.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),s=r("5c96"),a=r.n(s),c=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{class:{night:e.nightMode}},[r("div",{staticClass:"particles"},[r("div",{attrs:{id:"particles-js"}})]),r("el-header",[r("h1",[r("el-link",{attrs:{icon:"el-icon-s-tools"},on:{click:e.openAPI}}),e._v(" CNVRTR "),r("el-switch",{attrs:{"active-color":"#A9A9A9","inactive-color":"#282828"},model:{value:e.nightMode,callback:function(t){e.nightMode=t},expression:"nightMode"}}),e._v(" "),r("i",{staticClass:"el-icon-moon"})],1)]),r("el-main",[r("el-tabs",{attrs:{type:"card",stretch:""}},[r("el-tab-pane",{attrs:{label:"TICKER"}},[r("TICKER")],1),r("el-tab-pane",{attrs:{label:"CRYPTO"}},[r("CRYPTO")],1),r("el-tab-pane",{attrs:{label:"НБРБ"}},[r("NBRB")],1),r("el-tab-pane",{attrs:{label:"ЦБР"}},[r("CBR")],1)],1)],1),r("el-footer")],1)}),l=[],i=(r("572f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticStyle:{"max-width":"500px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"element-loading-background":"transparent","label-width":"60px"}},[n("div",{staticClass:"index"},[n("h6",[n("div",{staticClass:"full-name-crypto"},[e._v(" Bitcoin")]),e.BTC.difference_currency>=0?n("div",{staticClass:"up-class"},[e._v(" "+e._s(e.BTC.difference_currency)+" +"+e._s(e.BTC.difference_percent)+" ")]):n("div",{staticClass:"down-class"},[e._v(" "+e._s(e.BTC.difference_currency)+" "+e._s(e.BTC.difference_percent)+" ")])]),n("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"flag btc-logo",attrs:{src:r("aeb3")}})]),e._v(" BTC "+e._s(e.BTC.last)+"$ "),n("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(t){return e.copyRate("Bitcoin",e.BTC.last)}}})],1),n("el-divider"),n("div",{staticClass:"index"},[n("h6",[n("div",{staticClass:"full-name-crypto"},[e._v(" Ethereum")]),e.ETH.difference_currency>=0?n("div",{staticClass:"up-class"},[e._v(" "+e._s(e.ETH.difference_currency)+" +"+e._s(e.ETH.difference_percent)+" ")]):n("div",{staticClass:"down-class"},[e._v(" "+e._s(e.ETH.difference_currency)+" "+e._s(e.ETH.difference_percent)+" ")])]),n("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"flag btc-logo",attrs:{src:r("ff5b")}})]),e._v(" ETH "+e._s(e.ETH.last)+"$ "),n("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(t){return e.copyRate("Etherium",e.ETH.last)}}})],1),n("el-divider"),n("div",{staticClass:"index"},[n("h6",[n("div",{staticClass:"full-name-crypto"},[e._v(" Cardano")]),e.ADA.difference_currency>=0?n("div",{staticClass:"up-class"},[e._v(" "+e._s(e.ADA.difference_currency)+" +"+e._s(e.ADA.difference_percent)+" ")]):n("div",{staticClass:"down-class"},[e._v(" "+e._s(e.ADA.difference_currency)+" "+e._s(e.ADA.difference_percent)+" ")])]),n("img",{staticClass:"flag btc-logo",attrs:{src:r("0c2d")}}),e._v(" ADA "+e._s(e.ADA.last)+"$ "),n("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(t){return e.copyRate("Cardano",e.ADA.last)}}})],1),n("el-divider"),n("div",{staticClass:"index"},[n("h6",[n("div",{staticClass:"full-name-crypto"},[e._v(" Polkadot")]),e.DOT.difference_currency>=0?n("div",{staticClass:"up-class"},[e._v(" "+e._s(e.DOT.difference_currency)+" +"+e._s(e.DOT.difference_percent)+" ")]):n("div",{staticClass:"down-class"},[e._v(" "+e._s(e.DOT.difference_currency)+" "+e._s(e.DOT.difference_percent)+" ")])]),n("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"flag btc-logo",attrs:{src:r("6e26")}})]),e._v(" DOT "+e._s(e.DOT.last)+"$ "),n("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(t){return e.copyRate("Polkadot",e.DOT.last)}}})],1),n("el-divider"),n("div",{staticClass:"index"},[n("h6",[n("div",{staticClass:"full-name-crypto"},[e._v(" XRP ")]),e.XRP.difference_currency>=0?n("div",{staticClass:"up-class"},[e._v(" "+e._s(e.XRP.difference_currency)+" +"+e._s(e.XRP.difference_percent)+" ")]):n("div",{staticClass:"down-class"},[e._v(" "+e._s(e.XRP.difference_currency)+" "+e._s(e.XRP.difference_percent)+" ")])]),n("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"flag btc-logo",attrs:{src:r("7a2b")}})]),e._v(" XRP "+e._s(e.XRP.last)+"$ "),n("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(t){return e.copyRate("XRP",e.XRP.last)}}})],1),n("el-divider")],1)}),u=[],o=(r("99af"),r("b680"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),f=r("2a34"),p=r.n(f),h={data:function(){return{loading:!0,visible:!1,BTC:{last:"",difference_currency:"",difference_percent:""},ETH:{last:"",difference_currency:"",difference_percent:""},ADA:{last:"",difference_currency:"",difference_percent:""},DOT:{last:"",difference_currency:"",difference_percent:""},XRP:{last:"",difference_currency:"",difference_percent:""}}},mounted:function(){this.fetchCurrencyBTC(),this.fetchCurrencyETH(),this.fetchCurrencyADA(),this.fetchCurrencyDOT(),this.fetchCurrencyXRP()},created:function(){this.refreshСurrencies()},methods:{calculateDifferenceCurrency:function(e){var t=e.last-e.open24h;return"".concat(t.toFixed(2))},"calculatePercentСurrency":function(e){var t=e.last-e.open24h,r=t/e.last*100;return"".concat(r.toFixed(2),"%")},fetchCurrencyBTC:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getBTCCurrency();case 2:r=t.sent,e.BTC.last=e.formatNumber(r.last),e.BTC.difference_currency=e.calculateDifferenceCurrency(r),e.BTC.difference_percent=e.calculatePercentСurrency(r);case 6:case"end":return t.stop()}}),t)})))()},fetchCurrencyETH:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getETHCurrency();case 2:r=t.sent,e.ETH.last=e.formatNumber(r.last),e.ETH.difference_currency=e.calculateDifferenceCurrency(r),e.ETH.difference_percent=e.calculatePercentСurrency(r);case 6:case"end":return t.stop()}}),t)})))()},fetchCurrencyADA:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getADACurrency();case 2:r=t.sent,e.ADA.last=e.formatNumber(r.last),e.ADA.difference_currency=e.calculateDifferenceCurrency(r),e.ADA.difference_percent=e.calculatePercentСurrency(r);case 6:case"end":return t.stop()}}),t)})))()},fetchCurrencyDOT:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getDOTCurrency();case 2:r=t.sent,e.DOT.last=e.formatNumber(r.last),e.DOT.difference_currency=e.calculateDifferenceCurrency(r),e.DOT.difference_percent=e.calculatePercentСurrency(r);case 6:case"end":return t.stop()}}),t)})))()},fetchCurrencyXRP:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getXRPCurrency();case 2:r=t.sent,e.XRP.last=e.formatNumber(r.last),e.XRP.difference_currency=e.calculateDifferenceCurrency(r),e.XRP.difference_percent=e.calculatePercentСurrency(r),e.visible=!0,e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()},"refreshСurrencies":function(){var e=this;setInterval((function(){e.fetchCurrencyBTC(),e.fetchCurrencyETH(),e.fetchCurrencyADA(),e.fetchCurrencyDOT(),e.fetchCurrencyXRP()}),2e3)},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},copyRate:function(e,t){var r=document.createElement("textarea");r.value="".concat(e," ").concat(t,"$"),document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),this.$message({message:"Скопировано ".concat(r.value),type:"success"})}}},m=h,d=r("2877"),y=Object(d["a"])(m,i,u,!1,null,null,null),v=y.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-form",{staticStyle:{"max-width":"500px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"element-loading-background":"transparent","label-width":"60px"}},[n("el-form-item",[n("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"flag btc-logo",attrs:{src:r("aeb3")}})]),n("el-input",{attrs:{placeholder:"BTC",clearable:""},on:{input:e.convertBTC},model:{value:e.fields.BTC,callback:function(t){e.$set(e.fields,"BTC",t)},expression:"fields.BTC"}},[n("template",{slot:"append"},[e._v("BTC")])],2)],1),n("el-form-item",[n("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[n("img",{staticClass:"flag",attrs:{src:r("4f7a")}})]),n("el-input",{attrs:{placeholder:"USD",clearable:""},on:{input:e.convertUSD},model:{value:e.fields.USD,callback:function(t){e.$set(e.fields,"USD",t)},expression:"fields.USD"}},[n("template",{slot:"append"},[e._v("USD")])],2)],1)],1)},b=[],N={data:function(){return{currency:{BTC:0,ETH:0,ADA:0},fields:{BTC:"",USD:""}}},mounted:function(){this.fetchCurrencyBTC()},created:function(){this.refreshСurrencies()},methods:{convertBTC:function(){this.fields.BTC=event.target.value=this.ifNaN(event.target.value),this.fields.USD=this.formatNumber(this.fields.BTC*this.currency.BTC)},convertUSD:function(){this.fields.USD=event.target.value=this.ifNaN(event.target.value),this.fields.BTC=this.formatBTC(this.fields.USD/this.currency.BTC)},fetchCurrencyBTC:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getBTCCurrency();case 2:r=t.sent,e.currency.BTC=r.last;case 4:case"end":return t.stop()}}),t)})))()},"refreshСurrencies":function(){var e=this;setInterval((function(){e.fetchCurrencyBTC()}),5e3)},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},formatBTC:function(e){return parseFloat(e).toFixed(7).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")}}},R=N,U=Object(d["a"])(R,g,b,!1,null,null,null),C=U.exports,B=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[e._v("Курс НБРБ")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyBYN},model:{value:e.result.BYN,callback:function(t){e.$set(e.result,"BYN",t)},expression:"result.BYN"}},[r("template",{slot:"append"},[e._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyUSD},model:{value:e.result.USD,callback:function(t){e.$set(e.result,"USD",t)},expression:"result.USD"}},[r("template",{slot:"append"},[e._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyEUR},model:{value:e.result.EUR,callback:function(t){e.$set(e.result,"EUR",t)},expression:"result.EUR"}},[r("template",{slot:"append"},[e._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyRUB},model:{value:e.result.RUB,callback:function(t){e.$set(e.result,"RUB",t)},expression:"result.RUB"}},[r("template",{slot:"append"},[e._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyPLN},model:{value:e.result.PLN,callback:function(t){e.$set(e.result,"PLN",t)},expression:"result.PLN"}},[r("template",{slot:"append"},[e._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:e.clearFields}},[e._v("Очистить")])],1)},_=[],x={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getNBRBCurrency();case 2:r=t.sent,e.currency.USD=r[4].Cur_OfficialRate,e.currency.EUR=r[5].Cur_OfficialRate,e.currency.RUB=r[16].Cur_OfficialRate,e.currency.PLN=r[6].Cur_OfficialRate;case 7:case"end":return t.stop()}}),t)})))()},methods:{currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.USD=this.formatNumber(this.result.BYN/this.currency.USD),this.result.EUR=this.formatNumber(this.result.BYN/this.currency.EUR),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.RUB*100),this.result.PLN=this.formatNumber(this.result.BYN/this.currency.PLN*10)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.USD*this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.EUR)),this.result.RUB=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.PLN)*10)},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.EUR*this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.USD)),this.result.RUB=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.PLN)*10)},currencyRUB:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.RUB/100),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.USD/100)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.EUR/100)),this.result.PLN=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.PLN/100*10))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.PLN/10),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.USD/10)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.EUR/10)),this.result.RUB=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.RUB*10))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},D=x,P=Object(d["a"])(D,B,_,!1,null,null,null),w=P.exports,T=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[e._v("Курс ЦБР")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyRUB},model:{value:e.result.RUB,callback:function(t){e.$set(e.result,"RUB",t)},expression:"result.RUB"}},[r("template",{slot:"append"},[e._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyUSD},model:{value:e.result.USD,callback:function(t){e.$set(e.result,"USD",t)},expression:"result.USD"}},[r("template",{slot:"append"},[e._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyEUR},model:{value:e.result.EUR,callback:function(t){e.$set(e.result,"EUR",t)},expression:"result.EUR"}},[r("template",{slot:"append"},[e._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyBYN},model:{value:e.result.BYN,callback:function(t){e.$set(e.result,"BYN",t)},expression:"result.BYN"}},[r("template",{slot:"append"},[e._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyPLN},model:{value:e.result.PLN,callback:function(t){e.$set(e.result,"PLN",t)},expression:"result.PLN"}},[r("template",{slot:"append"},[e._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:e.clearFields}},[e._v("Очистить")])],1)},E=[],A={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:"",BYN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getCRBCurrency();case 2:r=t.sent,e.currency.USD=r.rates.USD,e.currency.EUR=r.rates.EUR,e.currency.BYN=r.rates.BYN,e.currency.PLN=r.rates.PLN;case 7:case"end":return t.stop()}}),t)})))()},methods:{currencyRUB:function(){this.result.RUB=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.RUB*this.currency.BYN),this.result.USD=this.formatNumber(this.result.RUB*this.currency.USD),this.result.EUR=this.formatNumber(this.result.RUB*this.currency.EUR),this.result.PLN=this.formatNumber(this.result.RUB*this.currency.PLN)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.USD/this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.EUR/this.currency.USD)),this.result.BYN=this.formatNumber(this.result.USD*(this.currency.BYN/this.currency.USD)),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.PLN/this.currency.USD))},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.EUR/this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.USD/this.currency.EUR)),this.result.BYN=this.formatNumber(this.result.EUR*(this.currency.BYN/this.currency.EUR)),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.PLN/this.currency.EUR))},currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.BYN),this.result.USD=this.formatNumber(this.result.BYN*(this.currency.USD/this.currency.BYN)),this.result.EUR=this.formatNumber(this.result.BYN*(this.currency.EUR/this.currency.BYN)),this.result.PLN=this.formatNumber(this.result.BYN*(this.currency.PLN/this.currency.BYN))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.PLN/this.currency.PLN),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.USD/this.currency.PLN)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.EUR/this.currency.PLN)),this.result.BYN=this.formatNumber(this.result.PLN*(this.currency.BYN/this.currency.PLN))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},S=A,k=Object(d["a"])(S,T,E,!1,null,null,null),O=k.exports,L={data:function(){return{nightMode:!1}},name:"App",components:{TICKER:v,CRYPTO:C,NBRB:w,CBR:O},mounted:function(){this.initParticles(),this.localControllerNightMode()},watch:{nightMode:function(){localStorage.nightMode=this.nightMode}},methods:{localControllerNightMode:function(){"true"===localStorage.nightMode&&(this.nightMode=!0),"false"===localStorage.nightMode&&(this.nightMode=!1)},openAPI:function(){this.$alert('<p>Bitcoin <a href="https://cnvrtr.herokuapp.com/api/currency/BTC">BTC</a></p><p>Etherium <a href="https://cnvrtr.herokuapp.com/api/currency/ETH">ETH</a></p><p> Национальный банк Республики Беларусь <a href=""></a><a href="https://cnvrtr.herokuapp.com/api/currency/NBRB">НБРБ</a></p> <p>Центральный банк России <a href="https://cnvrtr.herokuapp.com/api/currency/CRB">ЦБР</a></p>',"API CNVRTR",{dangerouslyUseHTMLString:!0,confirmButtonText:"OK"})},initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:8,density:{enable:!1,value_area:394.57382081613633}},color:{value:"#1b1e34"},shape:{type:"image",stroke:{width:1,color:"#000"},polygon:{nb_sides:1},image:{src:"https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png",width:10,height:10}},opacity:{value:.12626362266116362,random:!1,anim:{enable:!1,speed:.1,opacity_min:.1,sync:!1}},size:{value:10,random:!1,anim:{enable:!0,speed:5,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:1,direction:"top",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:320.6824121731046,rotateY:721.5354273894853}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},Y=L,j=(r("034f"),Object(d["a"])(Y,c,l,!1,null,null,null)),H=j.exports;n["default"].use(a.a),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(H)}}).$mount("#app")},"6e26":function(e,t){e.exports="data:image/png;base64,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"},"7a2b":function(e,t,r){e.exports=r.p+"img/xrp.132523db.png"},"85ec":function(e,t,r){},aeb3:function(e,t,r){e.exports=r.p+"img/bitcoin.052d430d.png"},ff5b:function(e,t,r){e.exports=r.p+"img/ethereum.7549d886.png"}});
//# sourceMappingURL=app.8cf1122e.js.map