(function(t){function e(e){for(var s,n,u=e[0],i=e[1],c=e[2],h=0,p=[];h<u.length;h++)n=u[h],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s]);o&&o(e);while(p.length)p.shift()();return l.push.apply(l,c||[]),r()}function r(){for(var t,e=0;e<l.length;e++){for(var r=l[e],s=!0,u=1;u<r.length;u++){var i=r[u];0!==a[i]&&(s=!1)}s&&(l.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},l=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var o=i;l.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";var s=r("85ec"),a=r.n(s);a.a},"2a34":function(t,e,r){r("96cf");var s=r("c973"),a=r("970b"),l=r("9523"),n=r("a18f"),u="api/currency",i=function t(){"use strict";a(this,t)};l(i,"getNBRBCurrency",s(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("".concat(u,"/NBRB"));case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))),l(i,"getCRBCurrency",s(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("".concat(u,"/CRB"));case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))),l(i,"getBTCCurrency",s(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("".concat(u,"/BTC"));case 3:return e=t.sent,t.next=6,e.json();case 6:return r=t.sent,t.abrupt("return",r);case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))),l(i,"fromUSDtoBTC",function(){var t=s(regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("".concat(u,"/USDtoBTC"),{method:"post",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}});case 3:return r=t.sent,t.next=6,r.json();case 6:return s=t.sent,t.abrupt("return",s);case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()),t.exports=i},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=r("5c96"),l=r.n(a),n=(r("0fae"),function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-container",[r("el-header",[r("h1",[t._v("CNVRTR")])]),r("el-main",[r("el-tabs",{attrs:{type:"card"}},[r("el-tab-pane",{attrs:{label:"ВТС"}},[r("BTC")],1),r("el-tab-pane",{attrs:{label:"НБРБ"}},[r("NBRB")],1),r("el-tab-pane",{attrs:{label:"ЦБР"}},[r("CBR")],1)],1)],1)],1)}),u=[],i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-card",{staticClass:"box-card",staticStyle:{"max-width":"400px",height:"600px",position:"relative",margin:"0px auto",padding:"10px","text-align":"center"},attrs:{shadow:"hover"}},[r("h2",[t._v("1 BTC = "+t._s(t.currency.BTC)+"$")]),r("img",{staticClass:"btc",attrs:{src:"https://pngimg.com/uploads/bitcoin/bitcoin_PNG35.png",alt:"BTC-logo"}}),r("el-form",{staticClass:"demo-form-inline"},[r("el-form-item",[r("el-input",{attrs:{placeholder:"BTC"},on:{input:t.convertBTC},model:{value:t.fields.BTC,callback:function(e){t.$set(t.fields,"BTC",e)},expression:"fields.BTC"}},[r("template",{slot:"append"},[t._v("BTC")])],2)],1),r("el-form-item",[r("el-input",{attrs:{placeholder:"USD"},on:{input:t.convertUSD},model:{value:t.fields.USD,callback:function(e){t.$set(t.fields,"USD",e)},expression:"fields.USD"}},[r("template",{slot:"append"},[t._v("USD")])],2)],1)],1)],1)},c=[],o=(r("ac1f"),r("5319"),r("96cf"),r("1da1")),h=r("2a34"),p=r.n(h),f={data:function(){return{currency:{BTC:0},fields:{BTC:"",USD:""}}},mounted:function(){this.fetchCurrencyBTC()},created:function(){this.refreshCurrencyBTC()},methods:{convertBTC:function(){this.fields.BTC=event.target.value=this.ifNaN(event.target.value),this.fields.USD=this.fields.BTC*this.currency.BTC},convertUSD:function(){this.fields.USD=event.target.value=this.ifNaN(event.target.value),this.fields.BTC=this.fields.USD/this.currency.BTC},fetchCurrencyBTC:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.getBTCCurrency();case 2:r=e.sent,t.currency.BTC=r.USD.last;case 4:case"end":return e.stop()}}),e)})))()},refreshCurrencyBTC:function(){var t=this;setInterval((function(){t.fetchCurrencyBTC()}),5e3)},ifNaN:function(t){return t.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},m=f,N=r("2877"),U=Object(N["a"])(m,i,c,!1,null,null,null),y=U.exports,b=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h4",[t._v("Курс НБРБ")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyBYN},model:{value:t.result.BYN,callback:function(e){t.$set(t.result,"BYN",e)},expression:"result.BYN"}},[r("template",{slot:"append"},[t._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyUSD},model:{value:t.result.USD,callback:function(e){t.$set(t.result,"USD",e)},expression:"result.USD"}},[r("template",{slot:"append"},[t._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyEUR},model:{value:t.result.EUR,callback:function(e){t.$set(t.result,"EUR",e)},expression:"result.EUR"}},[r("template",{slot:"append"},[t._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyRUB},model:{value:t.result.RUB,callback:function(e){t.$set(t.result,"RUB",e)},expression:"result.RUB"}},[r("template",{slot:"append"},[t._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyPLN},model:{value:t.result.PLN,callback:function(e){t.$set(t.result,"PLN",e)},expression:"result.PLN"}},[r("template",{slot:"append"},[t._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:t.clearFields}},[t._v("Очистить")])],1)},g=[],d=(r("b680"),{data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.getNBRBCurrency();case 2:r=e.sent,t.currency.USD=r[4].Cur_OfficialRate,t.currency.EUR=r[5].Cur_OfficialRate,t.currency.RUB=r[16].Cur_OfficialRate,t.currency.PLN=r[6].Cur_OfficialRate;case 7:case"end":return e.stop()}}),e)})))()},methods:{currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.USD=this.formatNumber(this.result.BYN/this.currency.USD),this.result.EUR=this.formatNumber(this.result.BYN/this.currency.EUR),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.RUB*100),this.result.PLN=this.formatNumber(this.result.BYN/this.currency.PLN*10)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.USD*this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.EUR)),this.result.RUB=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.PLN)*10)},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.EUR*this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.USD)),this.result.RUB=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.RUB)*100),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.PLN)*10)},currencyRUB:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.RUB/100),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.USD/100)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.EUR/100)),this.result.PLN=this.formatNumber(this.result.PLN*(this.currency.RUB/this.currency.PLN/100*10))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.PLN/10),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.USD/10)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.EUR/10)),this.result.RUB=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.RUB*10))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(t){return parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(t){return t.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}}),v=d,B=Object(N["a"])(v,b,g,!1,null,null,null),R=B.exports,x=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h4",[t._v("Курс ЦБР")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyRUB},model:{value:t.result.RUB,callback:function(e){t.$set(t.result,"RUB",e)},expression:"result.RUB"}},[r("template",{slot:"append"},[t._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyUSD},model:{value:t.result.USD,callback:function(e){t.$set(t.result,"USD",e)},expression:"result.USD"}},[r("template",{slot:"append"},[t._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyEUR},model:{value:t.result.EUR,callback:function(e){t.$set(t.result,"EUR",e)},expression:"result.EUR"}},[r("template",{slot:"append"},[t._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyBYN},model:{value:t.result.BYN,callback:function(e){t.$set(t.result,"BYN",e)},expression:"result.BYN"}},[r("template",{slot:"append"},[t._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyPLN},model:{value:t.result.PLN,callback:function(e){t.$set(t.result,"PLN",e)},expression:"result.PLN"}},[r("template",{slot:"append"},[t._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:t.clearFields}},[t._v("Очистить")])],1)},S=[],_={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:"",BYN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,p.a.getCRBCurrency();case 2:r=e.sent,t.currency.USD=r.rates.USD,t.currency.EUR=r.rates.EUR,t.currency.BYN=r.rates.BYN,t.currency.PLN=r.rates.PLN;case 7:case"end":return e.stop()}}),e)})))()},methods:{currencyRUB:function(){this.result.RUB=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.RUB*this.currency.BYN),this.result.USD=this.formatNumber(this.result.RUB*this.currency.USD),this.result.EUR=this.formatNumber(this.result.RUB*this.currency.EUR),this.result.PLN=this.formatNumber(this.result.RUB*this.currency.PLN)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.USD/this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.EUR/this.currency.USD)),this.result.BYN=this.formatNumber(this.result.USD*(this.currency.BYN/this.currency.USD)),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.PLN/this.currency.USD))},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.EUR/this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.USD/this.currency.EUR)),this.result.BYN=this.formatNumber(this.result.EUR*(this.currency.BYN/this.currency.EUR)),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.PLN/this.currency.EUR))},currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.BYN),this.result.USD=this.formatNumber(this.result.BYN*(this.currency.USD/this.currency.BYN)),this.result.EUR=this.formatNumber(this.result.BYN*(this.currency.EUR/this.currency.BYN)),this.result.PLN=this.formatNumber(this.result.BYN*(this.currency.PLN/this.currency.BYN))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.PLN/this.currency.PLN),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.USD/this.currency.PLN)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.EUR/this.currency.PLN)),this.result.BYN=this.formatNumber(this.result.PLN*(this.currency.BYN/this.currency.PLN))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(t){return parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(t){return t.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},C=_,D=Object(N["a"])(C,x,S,!1,null,null,null),P=D.exports,w={name:"App",components:{BTC:y,NBRB:R,CBR:P}},E=w,L=(r("034f"),Object(N["a"])(E,n,u,!1,null,null,null)),Y=L.exports;s["default"].use(l.a),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(Y)}}).$mount("#app")},"85ec":function(t,e,r){}});
//# sourceMappingURL=app.06610a3c.js.map