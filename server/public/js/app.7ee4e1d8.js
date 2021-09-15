(function(t){function e(e){for(var s,n,l=e[0],c=e[1],u=e[2],h=0,f=[];h<l.length;h++)n=l[h],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&f.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);o&&o(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),r()}function r(){for(var t,e=0;e<i.length;e++){for(var r=i[e],s=!0,l=1;l<r.length;l++){var c=r[l];0!==a[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=r[0]))}return t}var s={},a={app:0},i=[];function n(e){if(s[e])return s[e].exports;var r=s[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=s,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(r,s,function(e){return t[e]}.bind(null,s));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var o=c;i.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("9f4d")},"16c0":function(t,e,r){},2509:function(t,e,r){t.exports=r.p+"img/ADA-USDT.0b141af5.png"},"2a34":function(t,e,r){var s=r("c973").default,a=r("970b").default,i=r("9523").default;r("96cf");var n=r("a18f"),l=function t(){"use strict";a(this,t)};i(l,"fetchCurrency",function(){var t=s(regeneratorRuntime.mark((function t(e){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n("api/currency".concat(e));case 3:return r=t.sent,t.next=6,r.json();case 6:return s=t.sent,t.abrupt("return",s);case 10:t.prev=10,t.t0=t["catch"](0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})));return function(e){return t.apply(this,arguments)}}()),t.exports=l},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var s=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-tabs",{attrs:{"background-color":"deep-purple accent-4","center-active":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab",[t._v("TICKER")]),r("v-tab",[t._v("CRYPTO")])],1),r("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[r("v-tab-item",[r("TICKER")],1),r("v-tab-item",[r("CRYPTO")],1)],1)],1)},i=[],n=(r("572f"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},t._l(t.favoritesArray,(function(e){return s("div",{key:e.asset,staticClass:"index"},[s("v-card",{staticClass:"mx-auto",attrs:{"max-width":"600",outlined:""}},[s("v-list-item",{attrs:{"two-line":""}},[s("v-avatar",{staticClass:"ma-3",attrs:{size:"40",tile:""}},[s("v-img",{attrs:{src:r("c417")("./"+e.asset+".png")}})],1),s("v-list-item-content",[s("v-list-item-title",{staticClass:"text-h5 mb-1"},[e.valueDifference>0?s("div",{staticClass:"up-class"},[t._v("\n              "+t._s(e.valueDifference)+" "+t._s(e.percentDifference)+"\n            ")]):s("div",{staticClass:"down-class"},[t._v("\n              "+t._s(e.valueDifference)+" "+t._s(e.percentDifference)+"\n            ")])]),s("div",{staticClass:"text-overline"},[t._v(t._s(e.asset)+" "+t._s(e.last))])],1)],1)],1)],1)})),0)}),l=[],c=r("1da1"),u=(r("b680"),r("ac1f"),r("5319"),r("99af"),r("96cf"),r("2a34")),o=r.n(u),h={data:function(){return{search:"",allCryptoTickers:[],favoritesArray:[],favoritesPare:["BTC-USDT","ETH-USDT","DOT-USDT","ADA-USDT","XRP-USDT"],crypto:{}}},mounted:function(){this.fetchIndexTickers()},created:function(){this.refreshСurrencies()},methods:{creatingFavoritesArray:function(){var t=this.allCryptoTickers,e=[];for(var r in t)for(var s in this.favoritesPare)this.favoritesPare[s]===t[r]["instId"]&&e.push({asset:t[r]["instId"],last:"".concat(this.formatNumber(t[r]["idxPx"]),"$"),opening:t[r]["sodUtc0"],valueDifference:this.calcDifferenceCurrency(t[r]),percentDifference:this.calcPercentСurrency(t[r])});this.favoritesArray=e},fetchIndexTickers:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.fetchCurrency("/index-tickers");case 2:t.allCryptoTickers=e.sent,t.creatingFavoritesArray();case 4:case"end":return e.stop()}}),e)})))()},"refreshСurrencies":function(){var t=this;setInterval((function(){t.fetchIndexTickers()}),2e3)},calcDifferenceCurrency:function(t){var e=t.idxPx-t.sodUtc0;return"".concat(e.toFixed(2))},"calcPercentСurrency":function(t){var e=t.idxPx-t.sodUtc0,r=e/t.idxPx*100;return"".concat(r.toFixed(2),"%")},formatNumber:function(t){return parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},copyRate:function(t,e){var r=document.createElement("textarea");r.value="".concat(t," ").concat(e),document.body.appendChild(r),r.select(),document.execCommand("copy"),document.body.removeChild(r),this.$message({message:"Скопировано ".concat(r.value),type:"success"})}}},f=h,p=(r("69e4"),r("2877")),m=r("6544"),d=r.n(m),U=r("8212"),b=r("b0af"),y=r("a523"),v=r("adda"),g=r("da13"),N=r("5d23"),R=Object(p["a"])(f,n,l,!1,null,"3de6efb8",null),B=R.exports;d()(R,{VAvatar:U["a"],VCard:b["a"],VContainer:y["a"],VImg:v["a"],VListItem:g["a"],VListItemContent:N["a"],VListItemTitle:N["b"]});var S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{attrs:{fluid:""}},[s("el-form-item",[s("v-text-field",{attrs:{type:"tel",placeholder:"BTC"},on:{input:t.convertBTC},model:{value:t.fields.BTC,callback:function(e){t.$set(t.fields,"BTC",e)},expression:"fields.BTC"}},[s("template",{slot:"prepend"},[s("v-img",{staticClass:"logo",attrs:{height:"30",width:"30",src:r("6b39")}})],1),s("template",{slot:"append"},[t._v("BTC")])],2)],1),s("el-form-item",[s("v-text-field",{attrs:{type:"tel",placeholder:"USD"},on:{input:t.convertUSD},model:{value:t.fields.USD,callback:function(e){t.$set(t.fields,"USD",e)},expression:"fields.USD"}},[s("template",{slot:"prepend"},[s("v-img",{staticClass:"logo",attrs:{height:"30",width:"30",src:r("ba70")}})],1),s("template",{slot:"append"},[t._v("USD")])],2)],1)],1)},A=[],D={data:function(){return{currency:{BTC:0,ETH:0},fields:{BTC:"",USD:""}}},mounted:function(){this.fetchCurrencyBTC()},created:function(){this.refreshСurrencies()},methods:{convertBTC:function(){this.fields.BTC=event.target.value=this.ifNaN(event.target.value),this.fields.USD=this.formatUSD(this.fields.BTC*this.currency.BTC)},convertUSD:function(){this.fields.USD=event.target.value=this.ifNaN(event.target.value),this.fields.BTC=this.formatBTC(this.fields.USD/this.currency.BTC)},fetchCurrencyBTC:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.fetchCurrency("/BTC");case 2:r=e.sent,t.currency.BTC=r;case 4:case"end":return e.stop()}}),e)})))()},"refreshСurrencies":function(){var t=this;setInterval((function(){t.fetchCurrencyBTC()}),5e3)},ifNaN:function(t){if(t)return t.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")},formatUSD:function(t){if(t)return parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},formatBTC:function(t){if(t)return parseFloat(t).toFixed(7).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")}}},x=D,C=(r("9965"),r("8654")),P=Object(p["a"])(x,S,A,!1,null,"8ccad3c0",null),E=P.exports;d()(P,{VContainer:y["a"],VImg:v["a"],VTextField:C["a"]});var T=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[t._v("Курс НБРБ")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyBYN},model:{value:t.result.BYN,callback:function(e){t.$set(t.result,"BYN",e)},expression:"result.BYN"}},[r("template",{slot:"append"},[t._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyUSD},model:{value:t.result.USD,callback:function(e){t.$set(t.result,"USD",e)},expression:"result.USD"}},[r("template",{slot:"append"},[t._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyEUR},model:{value:t.result.EUR,callback:function(e){t.$set(t.result,"EUR",e)},expression:"result.EUR"}},[r("template",{slot:"append"},[t._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyRUB},model:{value:t.result.RUB,callback:function(e){t.$set(t.result,"RUB",e)},expression:"result.RUB"}},[r("template",{slot:"append"},[t._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyPLN},model:{value:t.result.PLN,callback:function(e){t.$set(t.result,"PLN",e)},expression:"result.PLN"}},[r("template",{slot:"append"},[t._v("PLN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/galleryformatter_slide/public/images/shop/products/flag_ukraina_new.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyUAH},model:{value:t.result.UAH,callback:function(e){t.$set(t.result,"UAH",e)},expression:"result.UAH"}},[r("template",{slot:"append"},[t._v("UAH")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:t.clearFields}},[t._v("Очистить")])],1)},w=[],L={data:function(){return{tenScale:10,hundredScale:100,currency:{USD:"",EUR:"",RUB:"",PLN:"",UAH:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:"",UAH:""}}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.fetchCurrency("/NBRB");case 2:r=e.sent,t.currency.USD=r[5].Cur_OfficialRate,t.currency.EUR=r[6].Cur_OfficialRate,t.currency.RUB=r[17].Cur_OfficialRate,t.currency.PLN=r[7].Cur_OfficialRate,t.currency.UAH=r[3].Cur_OfficialRate;case 8:case"end":return e.stop()}}),e)})))()},methods:{currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.USD=this.formatNumber(this.result.BYN/this.currency.USD),this.result.EUR=this.formatNumber(this.result.BYN/this.currency.EUR),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.RUB*this.hundredScale),this.result.PLN=this.formatNumber(this.result.BYN/this.currency.PLN*this.tenScale),this.result.UAH=this.formatNumber(this.result.BYN/this.currency.UAH*this.hundredScale)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.USD*this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.EUR)),this.result.RUB=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.RUB)*this.hundredScale),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.PLN)*this.tenScale),this.result.UAH=this.formatNumber(this.result.USD*(this.currency.USD/this.currency.UAH)*this.hundredScale)},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.EUR*this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.USD)),this.result.RUB=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.RUB)*this.hundredScale),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.PLN)*this.tenScale),this.result.UAH=this.formatNumber(this.result.EUR*(this.currency.EUR/this.currency.UAH)*this.hundredScale)},currencyRUB:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.RUB*this.currency.RUB/this.hundredScale),this.result.USD=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.USD/this.hundredScale)),this.result.EUR=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.EUR/this.hundredScale)),this.result.PLN=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.PLN/this.hundredScale*this.tenScale)),this.result.UAH=this.formatNumber(this.result.RUB*(this.currency.RUB/this.currency.UAH/this.hundredScale)*this.hundredScale)},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.PLN*this.currency.PLN/this.tenScale),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.USD/this.tenScale)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.EUR/this.tenScale)),this.result.RUB=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.RUB*this.tenScale)),this.result.UAH=this.formatNumber(this.result.PLN*(this.currency.PLN/this.currency.UAH*this.tenScale))},currencyUAH:function(){this.result.UAH=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.UAH*this.currency.UAH/this.hundredScale),this.result.USD=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.USD/this.hundredScale)),this.result.EUR=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.EUR/this.hundredScale)),this.result.RUB=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.RUB)),this.result.PLN=this.formatNumber(this.result.UAH*(this.currency.UAH/this.currency.PLN/this.tenScale))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN="",this.result.UAH=""},formatNumber:function(t){if(t)return parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(t){if(t)return t.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},Y=L,k=Object(p["a"])(Y,T,w,!1,null,null,null),O=k.exports,H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("el-form",{staticStyle:{"max-width":"400px",position:"relative",margin:"0px auto",padding:"10px"},attrs:{"label-width":"60px"}},[r("h2",[t._v("Курс ЦБР")]),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/shop/products/flag_rf_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyRUB},model:{value:t.result.RUB,callback:function(e){t.$set(t.result,"RUB",e)},expression:"result.RUB"}},[r("template",{slot:"append"},[t._v("RUB")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_usa_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyUSD},model:{value:t.result.USD,callback:function(e){t.$set(t.result,"USD",e)},expression:"result.USD"}},[r("template",{slot:"append"},[t._v("USD")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/250px-Flag_of_Europe.svg.png"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyEUR},model:{value:t.result.EUR,callback:function(e){t.$set(t.result,"EUR",e)},expression:"result.EUR"}},[r("template",{slot:"append"},[t._v("EUR")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_belorussija_enl.jpg"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyBYN},model:{value:t.result.BYN,callback:function(e){t.$set(t.result,"BYN",e)},expression:"result.BYN"}},[r("template",{slot:"append"},[t._v("BYN")])],2)],1),r("el-form-item",[r("span",{staticClass:"label",attrs:{slot:"label"},slot:"label"},[r("img",{staticClass:"flag",attrs:{src:"https://www.megaflag.ru/sites/default/files/styles/h_60/public/images/directory_names/flag_polsha_enl.jpg?itok=-HFE5GGA"}})]),r("el-input",{attrs:{type:"tel",name:"text",clearable:""},on:{input:t.currencyPLN},model:{value:t.result.PLN,callback:function(e){t.$set(t.result,"PLN",e)},expression:"result.PLN"}},[r("template",{slot:"append"},[t._v("PLN")])],2)],1),r("el-button",{attrs:{type:"danger",round:""},on:{click:t.clearFields}},[t._v("Очистить")])],1)},I=[],j={data:function(){return{currency:{USD:"",EUR:"",RUB:"",PLN:"",BYN:""},result:{BYN:"",USD:"",EUR:"",RUB:"",PLN:""}}},created:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,o.a.fetchCurrency("/CRB");case 2:r=e.sent,t.currency.USD=r.rates.USD,t.currency.EUR=r.rates.EUR,t.currency.BYN=r.rates.BYN,t.currency.PLN=r.rates.PLN;case 7:case"end":return e.stop()}}),e)})))()},methods:{currencyRUB:function(){this.result.RUB=event.target.value=this.ifNaN(event.target.value),this.result.BYN=this.formatNumber(this.result.RUB*this.currency.BYN),this.result.USD=this.formatNumber(this.result.RUB*this.currency.USD),this.result.EUR=this.formatNumber(this.result.RUB*this.currency.EUR),this.result.PLN=this.formatNumber(this.result.RUB*this.currency.PLN)},currencyUSD:function(){this.result.USD=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.USD/this.currency.USD),this.result.EUR=this.formatNumber(this.result.USD*(this.currency.EUR/this.currency.USD)),this.result.BYN=this.formatNumber(this.result.USD*(this.currency.BYN/this.currency.USD)),this.result.PLN=this.formatNumber(this.result.USD*(this.currency.PLN/this.currency.USD))},currencyEUR:function(){this.result.EUR=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.EUR/this.currency.EUR),this.result.USD=this.formatNumber(this.result.EUR*(this.currency.USD/this.currency.EUR)),this.result.BYN=this.formatNumber(this.result.EUR*(this.currency.BYN/this.currency.EUR)),this.result.PLN=this.formatNumber(this.result.EUR*(this.currency.PLN/this.currency.EUR))},currencyBYN:function(){this.result.BYN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.BYN/this.currency.BYN),this.result.USD=this.formatNumber(this.result.BYN*(this.currency.USD/this.currency.BYN)),this.result.EUR=this.formatNumber(this.result.BYN*(this.currency.EUR/this.currency.BYN)),this.result.PLN=this.formatNumber(this.result.BYN*(this.currency.PLN/this.currency.BYN))},currencyPLN:function(){this.result.PLN=event.target.value=this.ifNaN(event.target.value),this.result.RUB=this.formatNumber(this.result.PLN/this.currency.PLN),this.result.USD=this.formatNumber(this.result.PLN*(this.currency.USD/this.currency.PLN)),this.result.EUR=this.formatNumber(this.result.PLN*(this.currency.EUR/this.currency.PLN)),this.result.BYN=this.formatNumber(this.result.PLN*(this.currency.BYN/this.currency.PLN))},clearFields:function(){this.result.BYN="",this.result.USD="",this.result.EUR="",this.result.RUB="",this.result.PLN=""},formatNumber:function(t){if(t)return parseFloat(t).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g,"$1 ").replace(".",".")},ifNaN:function(t){if(t)return t.replace(",",".").replace(/[^\d.]/g,"").replace(/\./,"x").replace(/\./g,"").replace(/x/,".")}}},_=j,F=Object(p["a"])(_,H,I,!1,null,null,null),M=F.exports,Q={data:function(){return{nightMode:!1,tab:null}},name:"App",components:{TICKER:B,CRYPTO:E,NBRB:O,CBR:M},mounted:function(){this.initParticles(),this.localControllerNightMode()},watch:{nightMode:function(){localStorage.nightMode=this.nightMode}},methods:{localControllerNightMode:function(){"true"===localStorage.nightMode&&(this.nightMode=!0),"false"===localStorage.nightMode&&(this.nightMode=!1)},openAPI:function(){this.$alert('<p>Bitcoin <a href="https://cnvrtr.herokuapp.com/api/currency/BTC">BTC</a></p><p>Etherium <a href="https://cnvrtr.herokuapp.com/api/currency/ETH">ETH</a></p><p> Национальный банк Республики Беларусь <a href=""></a><a href="https://cnvrtr.herokuapp.com/api/currency/NBRB">НБРБ</a></p> <p>Центральный банк России <a href="https://cnvrtr.herokuapp.com/api/currency/CRB">ЦБР</a></p>',"API CNVRTR",{dangerouslyUseHTMLString:!0,confirmButtonText:"OK"})},initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:8,density:{enable:!1,value_area:394.57382081613633}},color:{value:"#1b1e34"},shape:{type:"image",stroke:{width:1,color:"#000"},polygon:{nb_sides:1},image:{src:"https://pngimg.com/uploads/bitcoin/small/bitcoin_PNG47.png",width:10,height:10}},opacity:{value:.12626362266116362,random:!1,anim:{enable:!1,speed:.1,opacity_min:.1,sync:!1}},size:{value:10,random:!1,anim:{enable:!0,speed:5,size_min:40,sync:!1}},line_linked:{enable:!1,distance:200,color:"#ffffff",opacity:1,width:2},move:{enable:!0,speed:1,direction:"top",random:!0,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!0,rotateX:320.6824121731046,rotateY:721.5354273894853}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"grab"},onclick:{enable:!1,mode:"push"},resize:!0},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},J=Q,X=(r("034f"),r("71a3")),q=r("c671"),Z=r("fe57"),z=r("aac8"),V=Object(p["a"])(J,a,i,!1,null,null,null),W=V.exports;d()(V,{VCard:b["a"],VTab:X["a"],VTabItem:q["a"],VTabs:Z["a"],VTabsItems:z["a"]});var G=r("f309");s["a"].use(G["a"]);var K=new G["a"]({});s["a"].config.productionTip=!1,new s["a"]({vuetify:K,render:function(t){return t(W)}}).$mount("#app")},"640c":function(t,e,r){},"69e4":function(t,e,r){"use strict";r("16c0")},"6b39":function(t,e,r){t.exports=r.p+"img/BTC-USDT.052d430d.png"},"746f2":function(t,e,r){t.exports=r.p+"img/XRP-USDT.132523db.png"},"85f5":function(t,e){t.exports="data:image/png;base64,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"},"973a":function(t,e,r){t.exports=r.p+"img/bittorrent.5e952e09.png"},9965:function(t,e,r){"use strict";r("640c")},"9f4d":function(t,e,r){},b7db:function(t,e,r){t.exports=r.p+"img/ETH-USDT.7549d886.png"},ba70:function(t,e){t.exports="data:image/webp;base64,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"},c417:function(t,e,r){var s={"./ADA-USDT.png":"2509","./BTC-USDT.png":"6b39","./DOT-USDT.png":"85f5","./ETH-USDT.png":"b7db","./XRP-USDT.png":"746f2","./bittorrent.png":"973a"};function a(t){var e=i(t);return r(e)}function i(t){if(!r.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}a.keys=function(){return Object.keys(s)},a.resolve=i,t.exports=a,a.id="c417"}});
//# sourceMappingURL=app.7ee4e1d8.js.map