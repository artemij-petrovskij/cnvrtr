(function(e){function t(t){for(var s,l,i=t[0],c=t[1],u=t[2],h=0,p=[];h<i.length;h++)l=i[h],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&p.push(a[l][0]),a[l]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);o&&o(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,i=1;i<r.length;i++){var c=r[i];0!==a[c]&&(s=!1)}s&&(n.splice(t--,1),e=l(l.s=r[0]))}return e}var s={},a={app:0},n=[];function l(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,l),r.l=!0,r.exports}l.m=e,l.c=s,l.d=function(e,t,r){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(l.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)l.d(r,s,function(t){return e[t]}.bind(null,s));return r},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var o=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";var s=r("85ec"),a=r.n(s);a.a},"2a34":function(e,t,r){r("96cf");var s=r("c973"),a=r("970b"),n=r("9523"),l=r("a18f"),i="api/currency",c=function e(){"use strict";a(this,e)};n(c,"getNBRBCurrency",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat(i,"/NBRB"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),n(c,"getCRBCurrency",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat(i,"/CRB"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),n(c,"getBTCCurrency",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat(i,"/BTC"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),n(c,"getETHCurrency",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat(i,"/ETH"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),n(c,"fromUSDtoBTC",function(){var e=s(regeneratorRuntime.mark((function e(t){var r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l("".concat(i,"/USDtoBTC"),{method:"post",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return r=e.sent,e.next=6,r.json();case 6:return s=e.sent,e.abrupt("return",s);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()),e.exports=c},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=r("5c96"),n=r.n(a),l=(r("0fae"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",[r("div",{staticClass:"particles"},[r("div",{attrs:{id:"particles-js"}})]),r("el-header",[r("h1",[e._v("CNVRTR "),r("el-link",{attrs:{icon:"el-icon-s-tools"},on:{click:e.openAPI}})],1)]),r("el-main",[r("el-tabs",{attrs:{type:"card"}},[r("el-tab-pane",{attrs:{label:"CRYPTO"}},[r("CRYPTO")],1),r("el-tab-pane",{attrs:{label:"НБРБ"}},[r("NBRB")],1),r("el-tab-pane",{attrs:{label:"ЦБР"}},[r("CBR")],1)],1)],1),r("el-footer")],1)}),i=[],c=(r("572f"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"},{name:"show",rawName:"v-show",value:e.visible,expression:"visible"}],staticStyle:{"max-width":"500px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"element-loading-background":"rgba(255, 255, 255)","label-width":"60px"}},[r("h2",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag btc-logo",attrs:{src:"https://www.dhresource.com/0x0/f2/albu/g9/M00/27/85/rBVaVVxO822ACwv4AALYau1h4a8355.jpg/500pcs-30mm-diameter-bitcoin-logo-label-sticker.jpg"}})]),e._v(" BTC "+e._s(e.actual_course_BTC)+"$ "),r("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(t){return e.copyRate("Bitcoin")}}})],1),r("h2",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag btc-logo",attrs:{src:"https://totalcoin.io/uploads/coins/big/eth.png"}})]),e._v(" ETH "+e._s(e.actual_course_ETH)+"$ "),r("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(t){return e.copyRate("Etherium")}}})],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag btc-logo",attrs:{src:"https://www.dhresource.com/0x0/f2/albu/g9/M00/27/85/rBVaVVxO822ACwv4AALYau1h4a8355.jpg/500pcs-30mm-diameter-bitcoin-logo-label-sticker.jpg"}})]),r("el-input",{attrs:{placeholder:"BTC",clearable:""},on:{input:e.convertBTC},model:{value:e.fields.BTC,callback:function(t){e.$set(e.fields,"BTC",t)},expression:"fields.BTC"}},[r("template",{slot:"append"},[e._v("BTC")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{placeholder:"USD",clearable:""},on:{input:e.convertUSD},model:{value:e.fields.USD,callback:function(t){e.$set(e.fields,"USD",t)},expression:"fields.USD"}},[r("template",{slot:"append"},[e._v("USD")])],2)],1)],1)}),u=[],o=(r("99af"),r("b680"),r("ac1f"),r("5319"),r("96cf"),r("1da1")),h=r("2a34"),p=r.n(h),f={data:function(){return{loading:!0,visible:!1,actual_course_BTC:"",actual_course_ETH:"",currency:{BTC:0,ETH:0},fields:{BTC:"",USD:""}}},mounted:function(){this.fetchCurrencyBTC(),this.fetchCurrencyETH()},created:function(){this.refreshСurrencies()},methods:{convertBTC:function(){this.fields.BTC=event.target.value=this.ifNaN(event.target.value),this.fields.USD=this.fields.BTC*this.currency.BTC},convertUSD:function(){this.fields.USD=event.target.value=this.ifNaN(event.target.value),this.fields.BTC=this.fields.USD/this.currency.BTC},fetchCurrencyBTC:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getBTCCurrency();case 2:r=t.sent,e.currency.BTC=r.USD.last,e.actual_course_BTC=e.formatNumber(r.USD.last);case 5:case"end":return t.stop()}}),t)})))()},fetchCurrencyETH:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getETHCurrency();case 2:r=t.sent,e.currency.ETH=r.USD,e.actual_course_ETH=e.formatNumber(e.currency.ETH),e.visible=!0,e.loading=!1;case 7:case"end":return t.stop()}}),t)})))()},"refreshСurrencies":function(){var e=this;setInterval((function(){e.fetchCurrencyBTC(),e.fetchCurrencyETH()}),5e3)},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},copyRate:function(e){var t=document.createElement("textarea");"Bitcoin"==e?t.value="".concat(e," ").concat(this.actual_course_BTC,"$"):"Etherium"==e&&(t.value="".concat(e," ").concat(this.actual_course_ETH,"$")),document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),this.$message({message:"Скопировано ".concat(t.value),type:"success"})}}},m=f,b=r("2877"),d=Object(b["a"])(m,c,u,!1,null,null,null),g=d.exports,y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[e._v("Курс НБРБ")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyBYN},model:{value:e.result.BYN,callback:function(t){e.$set(e.result,"BYN",t)},expression:"result.BYN"}},[r("template",{slot:"append"},[e._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyUSD},model:{value:e.result.USD,callback:function(t){e.$set(e.result,"USD",t)},expression:"result.USD"}},[r("template",{slot:"append"},[e._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyEUR},model:{value:e.result.EUR,callback:function(t){e.$set(e.result,"EUR",t)},expression:"result.EUR"}},[r("template",{slot:"append"},[e._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyRUB},model:{value:e.result.RUB,callback:function(t){e.$set(e.result,"RUB",t)},expression:"result.RUB"}},[r("template",{slot:"append"},[e._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyPLN},model:{value:e.result.PLN,callback:function(t){e.$set(e.result,"PLN",t)},expression:"result.PLN"}},[r("template",{slot:"append"},[e._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:e.clearFields}},[e._v("Очистить")])],1)},N=[],v={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getNBRBCurrency();case 2:r=t.sent,e.currency.USD=r[4].Cur_OfficialRate,e.currency.EUR=r[5].Cur_OfficialRate,e.currency.RUB=r[16].Cur_OfficialRate,e.currency.PLN=r[6].Cur_OfficialRate;case 7:case"end":return t.stop()}}),t)})))()},methods:{currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.USD=this.formatNumber(this.result.BYN/this.currency.USD),this.result.EUR=this.formatNumber(this.result.BYN/this.currency.EUR),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.RUB*100),this.result.PLN=this.formatNumber(this.result.BYN/this.currency.PLN*10)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.USD*this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.EUR)),this.result.RUB=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.PLN)*10)},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.EUR*this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.USD)),this.result.RUB=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.PLN)*10)},currencyRUB:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.RUB/100),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.USD/100)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.EUR/100)),this.result.PLN=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.PLN/100*10))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.PLN/10),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.USD/10)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.EUR/10)),this.result.RUB=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.RUB*10))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},U=v,B=Object(b["a"])(U,y,N,!1,null,null,null),R=B.exports,_=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[e._v("Курс ЦБР")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyRUB},model:{value:e.result.RUB,callback:function(t){e.$set(e.result,"RUB",t)},expression:"result.RUB"}},[r("template",{slot:"append"},[e._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyUSD},model:{value:e.result.USD,callback:function(t){e.$set(e.result,"USD",t)},expression:"result.USD"}},[r("template",{slot:"append"},[e._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyEUR},model:{value:e.result.EUR,callback:function(t){e.$set(e.result,"EUR",t)},expression:"result.EUR"}},[r("template",{slot:"append"},[e._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyBYN},model:{value:e.result.BYN,callback:function(t){e.$set(e.result,"BYN",t)},expression:"result.BYN"}},[r("template",{slot:"append"},[e._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyPLN},model:{value:e.result.PLN,callback:function(t){e.$set(e.result,"PLN",t)},expression:"result.PLN"}},[r("template",{slot:"append"},[e._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:e.clearFields}},[e._v("Очистить")])],1)},C=[],w={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:"",BYN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.getCRBCurrency();case 2:r=t.sent,e.currency.USD=r.rates.USD,e.currency.EUR=r.rates.EUR,e.currency.BYN=r.rates.BYN,e.currency.PLN=r.rates.PLN;case 7:case"end":return t.stop()}}),t)})))()},methods:{currencyRUB:function(){this.result.RUB=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.RUB*this.currency.BYN),this.result.USD=this.formatNumber(this.result.RUB*this.currency.USD),this.result.EUR=this.formatNumber(this.result.RUB*this.currency.EUR),this.result.PLN=this.formatNumber(this.result.RUB*this.currency.PLN)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.USD/this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.EUR/this.currency.USD)),this.result.BYN=this.formatNumber(this.result.USD*(this.currency.BYN/this.currency.USD)),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.PLN/this.currency.USD))},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.EUR/this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.USD/this.currency.EUR)),this.result.BYN=this.formatNumber(this.result.EUR*(this.currency.BYN/this.currency.EUR)),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.PLN/this.currency.EUR))},currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.BYN),this.result.USD=this.formatNumber(this.result.BYN*(this.currency.USD/this.currency.BYN)),this.result.EUR=this.formatNumber(this.result.BYN*(this.currency.EUR/this.currency.BYN)),this.result.PLN=this.formatNumber(this.result.BYN*(this.currency.PLN/this.currency.BYN))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.PLN/this.currency.PLN),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.USD/this.currency.PLN)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.EUR/this.currency.PLN)),this.result.BYN=this.formatNumber(this.result.PLN*(this.currency.BYN/this.currency.PLN))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},x=w,E=Object(b["a"])(x,_,C,!1,null,null,null),S=E.exports,P={name:"App",components:{CRYPTO:g,NBRB:R,CBR:S},mounted:function(){this.initParticles()},methods:{openAPI:function(){this.$alert('<p>Bitcoin <a href="https://cnvrtr.herokuapp.com/api/currency/BTC">BTC</a></p><p>Etherium <a href="https://cnvrtr.herokuapp.com/api/currency/ETH">ETH</a></p><p> Национальный банк Республики Беларусь <a href=""></a><a href="https://cnvrtr.herokuapp.com/api/currency/NBRB">НБРБ</a></p> <p>Центральный банк России <a href="https://cnvrtr.herokuapp.com/api/currency/CRB">ЦБР</a></p>',"API CNVRTR",{dangerouslyUseHTMLString:!0,confirmButtonText:"OK"})},initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:200,density:{enable:!0,value_area:800}},color:{value:"#000000"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5},image:{src:"img/github.svg",width:100,height:100}},opacity:{value:1,random:!0,anim:{enable:!0,speed:1,opacity_min:0,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:4,size_min:.3,sync:!1}},line_linked:{enable:!1,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:1,direction:"none",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:600}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"bubble"},onclick:{enable:!0,mode:"repulse"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:250,size:0,duration:2,opacity:0,speed:3},repulse:{distance:400,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},D=P,L=(r("034f"),Object(b["a"])(D,l,i,!1,null,null,null)),T=L.exports;s["default"].use(n.a),s["default"].config.productionTip=!1,new s["default"]({render:function(e){return e(T)}}).$mount("#app")},"85ec":function(e,t,r){}});
//# sourceMappingURL=app.9000db83.js.map