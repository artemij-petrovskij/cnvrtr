(function(e){function t(t){for(var s,i,l=t[0],c=t[1],u=t[2],h=0,f=[];h<l.length;h++)i=l[h],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(e[s]=c[s]);o&&o(t);while(f.length)f.shift()();return n.push.apply(n,u||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],s=!0,l=1;l<r.length;l++){var c=r[l];0!==a[c]&&(s=!1)}s&&(n.splice(t--,1),e=i(i.s=r[0]))}return e}var s={},a={app:0},n=[];function i(t){if(s[t])return s[t].exports;var r=s[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=s,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)i.d(r,s,function(t){return e[t]}.bind(null,s));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var o=c;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("9f4d")},2509:function(e,t,r){e.exports=r.p+"img/ADA-USDT.0b141af5.png"},"2a34":function(e,t,r){var s=r("c973").default,a=r("970b").default,n=r("9523").default;r("96cf");var i=r("a18f"),l="api/currency",c=function e(){"use strict";a(this,e)};n(c,"getNBRBCurrency",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat(l,"/NBRB"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),n(c,"getCRBCurrency",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat(l,"/CRB"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),n(c,"getBTCCurrency",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat(l,"/BTC"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r.data[0]);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),n(c,"getIndexTickers",s(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i("".concat(l,"/index-tickers"));case 3:return t=e.sent,e.next=6,t.json();case 6:return r=e.sent,e.abrupt("return",r);case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))),e.exports=c},"4f7a":function(e,t,r){e.exports=r.p+"img/flag_usa.e10750d5.jpg"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=r("5c96"),n=r.n(a),i=(r("0fae"),r("b2d6")),l=r.n(i),c=r("4897"),u=r.n(c),o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{class:{night:e.nightMode}},[r("div",{staticClass:"particles"},[r("div",{attrs:{id:"particles-js"}})]),r("el-header",[r("h1",[r("el-link",{attrs:{icon:"el-icon-s-tools"},on:{click:e.openAPI}}),e._v("\n      CNVRTR\n      "),r("el-switch",{attrs:{"active-color":"#A9A9A9","inactive-color":"#282828"},model:{value:e.nightMode,callback:function(t){e.nightMode=t},expression:"nightMode"}}),e._v("\n       \n      "),r("i",{staticClass:"el-icon-moon"})],1)]),r("el-main",[r("el-tabs",{attrs:{type:"card",stretch:""}},[r("el-tab-pane",{attrs:{label:"TICKER"}},[r("TICKER")],1),r("el-tab-pane",{attrs:{label:"CRYPTO"}},[r("CRYPTO")],1),r("el-tab-pane",{attrs:{label:"НБРБ"}},[r("NBRB")],1),r("el-tab-pane",{attrs:{label:"ЦБР"}},[r("CBR")],1)],1)],1),r("el-footer")],1)},h=[],f=(r("572f"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{attrs:{"element-loading-background":"transparent","label-width":"60px"}},[e._l(e.favoritesArray,(function(t){return s("div",{staticClass:"index"},[s("h6",[t.valueDifference>0?s("div",{staticClass:"up-class"},[e._v("\n        "+e._s(t.valueDifference)+" "+e._s(t.percentDifference)+"\n      ")]):s("div",{staticClass:"down-class"},[e._v("\n        "+e._s(t.valueDifference)+" "+e._s(t.percentDifference)+"\n      ")])]),s("img",{staticClass:"flag btc-logo",attrs:{src:r("c417")("./"+t.asset+".png"),alt:t.asset}}),s("span",[e._v(" "+e._s(t.asset)+" "+e._s(t.last)+" ")]),s("el-link",{attrs:{icon:"el-icon-copy-document"},on:{click:function(r){return e.copyRate(t.asset,t.last)}}}),s("el-divider")],1)})),s("h4",[e._v("All CRYPTO")]),s("el-table",{staticStyle:{width:"100%"},attrs:{data:e.allCryptoTickers.filter((function(t){return!e.search||t.instId.toLowerCase().includes(e.search.toLowerCase())})),height:"250"}},[s("el-table-column",{attrs:{label:"Asset",prop:"instId"}}),s("el-table-column",{attrs:{label:"Last",prop:"idxPx"}}),s("el-table-column",{scopedSlots:e._u([{key:"header",fn:function(t){return[s("el-input",{attrs:{size:"mini",placeholder:"Type to search"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})]}}])})],1)],2)}),p=[],m=r("1da1"),d=(r("b680"),r("ac1f"),r("5319"),r("99af"),r("96cf"),r("2a34")),b=r.n(d),U={data:function(){return{search:"",allCryptoTickers:[],favoritesArray:[],favoritesPare:["BTC-USDT","ETH-USDT","DOT-USDT","ADA-USDT","XRP-USDT"],crypto:{}}},mounted:function(){this.fetchIndexTickers()},created:function(){this.refreshСurrencies()},methods:{creatingFavoritesArray:function(){var e=this.allCryptoTickers,t=[];for(var r in e)for(var s in this.favoritesPare)this.favoritesPare[s]===e[r]["instId"]&&t.push({asset:e[r]["instId"],last:"".concat(this.formatNumber(e[r]["idxPx"]),"$"),opening:e[r]["sodUtc0"],valueDifference:this.calcDifferenceCurrency(e[r]),percentDifference:this.calcPercentСurrency(e[r])});this.favoritesArray=t},fetchIndexTickers:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.getIndexTickers();case 2:e.allCryptoTickers=t.sent,e.creatingFavoritesArray();case 4:case"end":return t.stop()}}),t)})))()},"refreshСurrencies":function(){var e=this;setInterval((function(){e.fetchIndexTickers()}),2e3)},calcDifferenceCurrency:function(e){var t=e.idxPx-e.sodUtc0;return"".concat(t.toFixed(2))},"calcPercentСurrency":function(e){var t=e.idxPx-e.sodUtc0,r=t/e.idxPx*100;return"".concat(r.toFixed(2),"%")},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},copyRate:function(e,t){var r=document.createElement("textarea");r.value="".concat(e," ").concat(t),document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),this.$message({message:"Скопировано ".concat(r.value),type:"success"})}}},y=U,g=r("2877"),v=Object(g["a"])(y,f,p,!1,null,null,null),N=v.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-form",{staticStyle:{"max-width":"500px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"element-loading-background":"transparent","label-width":"60px"}},[s("el-form-item",[s("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[s("img",{staticClass:"flag btc-logo",attrs:{src:r("6b39")}})]),s("el-input",{attrs:{type:"tel",placeholder:"BTC",clearable:""},on:{input:e.convertBTC},model:{value:e.fields.BTC,callback:function(t){e.$set(e.fields,"BTC",t)},expression:"fields.BTC"}},[s("template",{slot:"append"},[e._v("BTC")])],2)],1),s("el-form-item",[s("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[s("img",{staticClass:"flag",attrs:{src:r("4f7a")}})]),s("el-input",{attrs:{type:"tel",placeholder:"USD",clearable:""},on:{input:e.convertUSD},model:{value:e.fields.USD,callback:function(t){e.$set(e.fields,"USD",t)},expression:"fields.USD"}},[s("template",{slot:"append"},[e._v("USD")])],2)],1)],1)},B=[],x={data:function(){return{currency:{BTC:0,ETH:0,ADA:0},fields:{BTC:"",USD:""}}},mounted:function(){this.fetchCurrencyBTC()},created:function(){this.refreshСurrencies()},methods:{convertBTC:function(){this.fields.BTC=event.target.value=this.ifNaN(event.target.value),this.fields.USD=this.formatNumber(this.fields.BTC*this.currency.BTC)},convertUSD:function(){this.fields.USD=event.target.value=this.ifNaN(event.target.value),this.fields.BTC=this.formatBTC(this.fields.USD/this.currency.BTC)},fetchCurrencyBTC:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.getBTCCurrency();case 2:r=t.sent,e.currency.BTC=r.last;case 4:case"end":return t.stop()}}),t)})))()},"refreshСurrencies":function(){var e=this;setInterval((function(){e.fetchCurrencyBTC()}),5e3)},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},formatBTC:function(e){return parseFloat(e).toFixed(7).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")}}},S=x,D=Object(g["a"])(S,R,B,!1,null,null,null),C=D.exports,A=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[e._v("Курс НБРБ")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyBYN},model:{value:e.result.BYN,callback:function(t){e.$set(e.result,"BYN",t)},expression:"result.BYN"}},[r("template",{slot:"append"},[e._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyUSD},model:{value:e.result.USD,callback:function(t){e.$set(e.result,"USD",t)},expression:"result.USD"}},[r("template",{slot:"append"},[e._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyEUR},model:{value:e.result.EUR,callback:function(t){e.$set(e.result,"EUR",t)},expression:"result.EUR"}},[r("template",{slot:"append"},[e._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyRUB},model:{value:e.result.RUB,callback:function(t){e.$set(e.result,"RUB",t)},expression:"result.RUB"}},[r("template",{slot:"append"},[e._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyPLN},model:{value:e.result.PLN,callback:function(t){e.$set(e.result,"PLN",t)},expression:"result.PLN"}},[r("template",{slot:"append"},[e._v("PLN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/galleryformatter_slide/public/images/shop/products/flag_ukraina_new.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyUAH},model:{value:e.result.UAH,callback:function(t){e.$set(e.result,"UAH",t)},expression:"result.UAH"}},[r("template",{slot:"append"},[e._v("UAH")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:e.clearFields}},[e._v("Очистить")])],1)},P=[],E={data:function(){return{tenScale:10,hundredScale:100,currency:{USD:"",EUR:"",RUB:"",PLN:"",UAH:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:"",UAH:""}}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.getNBRBCurrency();case 2:r=t.sent,e.currency.USD=r[5].Cur_OfficialRate,e.currency.EUR=r[6].Cur_OfficialRate,e.currency.RUB=r[17].Cur_OfficialRate,e.currency.PLN=r[7].Cur_OfficialRate,e.currency.UAH=r[3].Cur_OfficialRate;case 8:case"end":return t.stop()}}),t)})))()},methods:{currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.USD=this.formatNumber(this.result.BYN/this.currency.USD),this.result.EUR=this.formatNumber(this.result.BYN/this.currency.EUR),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.RUB*this.hundredScale),this.result.PLN=this.formatNumber(this.result.BYN/this.currency.PLN*this.tenScale),this.result.UAH=this.formatNumber(this.result.BYN/this.currency.UAH*this.hundredScale)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.USD*this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.EUR)),this.result.RUB=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.RUB)*this.hundredScale),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.PLN)*this.tenScale),this.result.UAH=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.UAH)*this.hundredScale)},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.EUR*this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.USD)),this.result.RUB=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.RUB)*this.hundredScale),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.PLN)*this.tenScale),this.result.UAH=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.UAH)*this.hundredScale)},currencyRUB:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.RUB*this.currency.RUB/this.hundredScale),this.result.USD=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.USD/this.hundredScale)),this.result.EUR=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.EUR/this.hundredScale)),this.result.PLN=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.PLN/this.hundredScale*this.tenScale)),this.result.UAH=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.UAH/this.hundredScale)*this.hundredScale)},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.PLN/this.tenScale),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.USD/this.tenScale)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.EUR/this.tenScale)),this.result.RUB=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.RUB*this.tenScale)),this.result.UAH=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.UAH*this.tenScale))},currencyUAH:function(){this.result.UAH=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.UAH*this.currency.UAH/this.hundredScale),this.result.USD=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.USD/this.hundredScale)),this.result.EUR=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.EUR/this.hundredScale)),this.result.RUB=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.RUB)),this.result.PLN=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.PLN/this.tenScale))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN="",this.result.UAH=""},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},w=E,T=Object(g["a"])(w,A,P,!1,null,null,null),_=T.exports,k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[e._v("Курс ЦБР")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyRUB},model:{value:e.result.RUB,callback:function(t){e.$set(e.result,"RUB",t)},expression:"result.RUB"}},[r("template",{slot:"append"},[e._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyUSD},model:{value:e.result.USD,callback:function(t){e.$set(e.result,"USD",t)},expression:"result.USD"}},[r("template",{slot:"append"},[e._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyEUR},model:{value:e.result.EUR,callback:function(t){e.$set(e.result,"EUR",t)},expression:"result.EUR"}},[r("template",{slot:"append"},[e._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyBYN},model:{value:e.result.BYN,callback:function(t){e.$set(e.result,"BYN",t)},expression:"result.BYN"}},[r("template",{slot:"append"},[e._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:e.currencyPLN},model:{value:e.result.PLN,callback:function(t){e.$set(e.result,"PLN",t)},expression:"result.PLN"}},[r("template",{slot:"append"},[e._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:e.clearFields}},[e._v("Очистить")])],1)},L=[],Y={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:"",BYN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,b.a.getCRBCurrency();case 2:r=t.sent,e.currency.USD=r.rates.USD,e.currency.EUR=r.rates.EUR,e.currency.BYN=r.rates.BYN,e.currency.PLN=r.rates.PLN;case 7:case"end":return t.stop()}}),t)})))()},methods:{currencyRUB:function(){this.result.RUB=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.RUB*this.currency.BYN),this.result.USD=this.formatNumber(this.result.RUB*this.currency.USD),this.result.EUR=this.formatNumber(this.result.RUB*this.currency.EUR),this.result.PLN=this.formatNumber(this.result.RUB*this.currency.PLN)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.USD/this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.EUR/this.currency.USD)),this.result.BYN=this.formatNumber(this.result.USD*(this.currency.BYN/this.currency.USD)),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.PLN/this.currency.USD))},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.EUR/this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.USD/this.currency.EUR)),this.result.BYN=this.formatNumber(this.result.EUR*(this.currency.BYN/this.currency.EUR)),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.PLN/this.currency.EUR))},currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.BYN),this.result.USD=this.formatNumber(this.result.BYN*(this.currency.USD/this.currency.BYN)),this.result.EUR=this.formatNumber(this.result.BYN*(this.currency.EUR/this.currency.BYN)),this.result.PLN=this.formatNumber(this.result.BYN*(this.currency.PLN/this.currency.BYN))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.PLN/this.currency.PLN),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.USD/this.currency.PLN)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.EUR/this.currency.PLN)),this.result.BYN=this.formatNumber(this.result.PLN*(this.currency.BYN/this.currency.PLN))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(e){return parseFloat(e).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(e){return e.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},H=Y,O=Object(g["a"])(H,k,L,!1,null,null,null),j=O.exports,I={data:function(){return{nightMode:!1}},name:"App",components:{TICKER:N,CRYPTO:C,NBRB:_,CBR:j},mounted:function(){this.initParticles(),this.localControllerNightMode()},watch:{nightMode:function(){localStorage.nightMode=this.nightMode}},methods:{localControllerNightMode:function(){"true"===localStorage.nightMode&&(this.nightMode=!0),"false"===localStorage.nightMode&&(this.nightMode=!1)},openAPI:function(){this.$alert('<p>Bitcoin <a href="https://cnvrtr.herokuapp.com/api/currency/BTC">BTC</a></p><p>Etherium <a href="https://cnvrtr.herokuapp.com/api/currency/ETH">ETH</a></p><p> Национальный банк Республики Беларусь <a href=""></a><a href="https://cnvrtr.herokuapp.com/api/currency/NBRB">НБРБ</a></p> <p>Центральный банк России <a href="https://cnvrtr.herokuapp.com/api/currency/CRB">ЦБР</a></p>',"API CNVRTR",{dangerouslyUseHTMLString:!0,confirmButtonText:"OK"})},initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:8,density:{enable:!1,value_area:394.57382081613633}},color:{value:"#1b1e34"},shape:{type:"image",stroke:{width:1,color:"#000"},polygon:{nb_sides:1},image:{src:"https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png",width:10,height:10}},opacity:{value:.12626362266116362,random:!1,anim:{enable:!1,speed:.1,opacity_min:.1,sync:!1}},size:{value:10,random:!1,anim:{enable:!0,speed:5,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:1,direction:"top",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:320.6824121731046,rotateY:721.5354273894853}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},M=I,F=(r("034f"),Object(g["a"])(M,o,h,!1,null,null,null)),J=F.exports;s["default"].use(n.a),s["default"].config.productionTip=!1,u.a.use(l.a),new s["default"]({render:function(e){return e(J)}}).$mount("#app")},"6b39":function(e,t,r){e.exports=r.p+"img/BTC-USDT.052d430d.png"},"746f":function(e,t,r){e.exports=r.p+"img/XRP-USDT.132523db.png"},"85f5":function(e,t){e.exports="data:image/png;base64,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"},"973a":function(e,t,r){e.exports=r.p+"img/bittorrent.5e952e09.png"},"9f4d":function(e,t,r){},b7db:function(e,t,r){e.exports=r.p+"img/ETH-USDT.7549d886.png"},c417:function(e,t,r){var s={"./ADA-USDT.png":"2509","./BTC-USDT.png":"6b39","./DOT-USDT.png":"85f5","./ETH-USDT.png":"b7db","./XRP-USDT.png":"746f","./bittorrent.png":"973a"};function a(e){var t=n(e);return r(t)}function n(e){if(!r.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=n,e.exports=a,a.id="c417"}});
//# sourceMappingURL=app.17e38535.js.map