!function(l){function e(e){for(var t,n,a=e[0],r=e[1],c=e[2],o=0,i=[];o<a.length;o++)n=a[o],Object.prototype.hasOwnProperty.call(u,n)&&u[n]&&i.push(u[n][0]),u[n]=0;for(t in r)Object.prototype.hasOwnProperty.call(r,t)&&(l[t]=r[t]);for(m&&m(e);i.length;)i.shift()();return f.push.apply(f,c||[]),s()}function s(){for(var e,t=0;t<f.length;t++){for(var n=f[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==u[c]&&(a=!1)}a&&(f.splice(t--,1),e=o(o.s=n[0]))}return e}var n={},u={0:0},f=[];function o(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return l[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=l,o.c=n,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="";var t=window.clock=window.clock||[],a=t.push.bind(t);t.push=e,t=t.slice();for(var r=0;r<t.length;r++)e(t[r]);var m=a;f.push([298,1]),s()}({298:function(e,t,n){"use strict";n.r(t);function v(t){var e=l.filter(function(e){return e.fontName===t});if(e.length)return e[0].fontsizelist.replace(/(\d)/g,"$100").split(",").map(function(e){return parseInt(e,10)})}var W=n(0),L=n.n(W),a=n(34),r=n.n(a),c=n(103),o=n.n(c),i=[{fontName:"Orbitron",fontsizelist:"4,5,6,7,8,9"},{fontName:"Wallpoet",fontsizelist:"4"},{fontName:"Roboto",fontsizelist:"1,3,7,9"},{fontName:"Oswald",fontsizelist:"2,3,4,6,7,5"},{fontName:"Balsamiq Sans",fontsizelist:"4,7"},{fontName:"Anton",fontsizelist:"4"},{fontName:"Barlow Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Patrick Hand",fontsizelist:"4"},{fontName:"Sacramento",fontsizelist:"4"},{fontName:"Poiret One",fontsizelist:"4"},{fontName:"Press Start 2P",fontsizelist:"4"},{fontName:"Saira Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Chakra Petch",fontsizelist:"3,4,5,6,7"},{fontName:"Baloo Chettan 2",fontsizelist:"4,5,6,7,8"},{fontName:"Coda",fontsizelist:"4,8"},{fontName:"Saira Semi Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Saira Extra Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Aldrich",fontsizelist:"4"},{fontName:"Stardos Stencil",fontsizelist:"4,7"},{fontName:"Megrim",fontsizelist:"4"},{fontName:"Iceland",fontsizelist:"4"},{fontName:"Sarpanch",fontsizelist:"4,5,6,7,8,9"},{fontName:"Shojumaru",fontsizelist:"4"},{fontName:"Londrina Outline",fontsizelist:"400"},{fontName:"Geo",fontsizelist:"4"},{fontName:"Libre Barcode 39 Extended Text",fontsizelist:"4"},{fontName:"Tulpen One",fontsizelist:"4"}],l=Array.prototype.concat([{fontName:"sans-serif",fontsizelist:"4,5,6,7,8,9"},{fontName:"serif",fontsizelist:"4,5,6,7,8,9"},{fontName:"monospace",fontsizelist:"4,5,6,7,8,9"}],i),s=i.map(function(e){return e.fontName+":"+e.fontsizelist.replace(/(\d)/g,"$100")}),O=l.map(function(e){return""+e.fontName}),u=n(15),f=n(104),m=n(17),d=Object(m.reducerWithInitialState)({}),p=n(35),b=n.n(p),g=b()("ScreenSetting"),S=g("INIT"),N=g("SET_FONTSIZE"),y=g("SET_FONTFAMILY"),j=g("SET_FONTWEIGHT"),z=g("SET_FONTCOLOR"),w=g("SET_BACKGROUNDCOLOR"),C=g("SET_ENABLEDSHOWMILLISECONDS"),E=function(){return(E=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},h={fontSize:28,fontFamily:"sans-serif",fontWeight:400,fontColor:{r:0,g:0,b:0,a:1},backgroundColor:{r:255,g:255,b:255,a:1},enabledShowMilliseconds:!0},T=Object(m.reducerWithInitialState)(h).case(S,function(e,t){return h}).case(N,function(e,t){var n="string"==typeof t?parseInt(t,10):t;return E(E({},e),{fontSize:n})}).case(y,function(e,t){return E(E({},e),{fontFamily:t})}).case(j,function(e,t){var n="string"==typeof t?parseInt(t,10):t;return E(E({},e),{fontWeight:n})}).case(z,function(e,t){return E(E({},e),{fontColor:t})}).case(w,function(e,t){return E(E({},e),{backgroundColor:t})}).case(C,function(e,t){return E(E({},e),{enabledShowMilliseconds:t})}),R=n(105),k=n(106),_=n.n(k),x=function(e,o,i,l){return new(i=i||Promise)(function(n,t){function a(e){try{c(l.next(e))}catch(e){t(e)}}function r(e){try{c(l.throw(e))}catch(e){t(e)}}function c(e){var t;e.done?n(e.value):((t=e.value)instanceof i?t:new i(function(e){e(t)})).then(a,r)}c((l=l.apply(e,o||[])).next())})},P=function(n,a){var r,c,o,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]},e={next:t(0),throw:t(1),return:t(2)};return"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,c&&(o=2&t[0]?c.return:t[0]?c.throw||((o=c.return)&&o.call(c),0):c.next)&&!(o=o.call(c,t[1])).done)return o;switch(c=0,o&&(t=[2&t[0],o.value]),t[0]){case 0:case 1:o=t;break;case 4:return i.label++,{value:t[1],done:!1};case 5:i.label++,c=t[1],t=[0];continue;case 7:t=i.ops.pop(),i.trys.pop();continue;default:if(!(o=0<(o=i.trys).length&&o[o.length-1])&&(6===t[0]||2===t[0])){i=0;continue}if(3===t[0]&&(!o||t[1]>o[0]&&t[1]<o[3])){i.label=t[1];break}if(6===t[0]&&i.label<o[1]){i.label=o[1],o=t;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(t);break}o[2]&&i.ops.pop(),i.trys.pop();continue}t=a.call(n,i)}catch(e){t=[6,e],c=0}finally{r=o=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}},I=b()(),F=I("INIT"),M=I("SET_TEXT");function B(e){var t,n=e.num,a=e.minimamDisit;switch(typeof n){case"string":t=n;break;case"number":t=n.toString();break;default:return!1}for(;t.length<a;)t="0"+t;return t}function V(e){return"rgba( "+e.r+","+e.g+","+e.b+","+e.a+")"}function D(){var e=Object(W.useState)(new Date),r=e[0],n=e[1];Object(ee.a)(function(e,t){n(new Date),t()},{increment:.5,startAt:0,finishAt:-1})(function(){});var t=Object(W.useState)({}),a=t[0],c=t[1],o=Object(te.d)(function(e){return e.ScreenSettingReducer.fontSize}),i=Object(te.d)(function(e){return e.ScreenSettingReducer.fontFamily}),l=Object(te.d)(function(e){return e.ScreenSettingReducer.fontWeight}),s=Object(te.d)(function(e){return e.ScreenSettingReducer.fontColor}),u=Object(te.d)(function(e){return e.ScreenSettingReducer.backgroundColor}),f=Object(te.d)(function(e){return e.ScreenSettingReducer.enabledShowMilliseconds}),m=Object(W.useState)(0),d=m[0],p=m[1],b=Object(W.useState)(0),g=b[0],S=b[1],E=Object(W.useState)(0),h=E[0],v=E[1],O=Object(W.useState)(0),N=O[0],y=O[1],j=Object(W.useState)(0),z=j[0],w=j[1],C=Object(W.useState)(0),T=C[0],R=C[1],k=Object(W.useState)(0),_=k[0],x=k[1],P=Object(W.useState)(0),I=P[0],F=P[1],M=Object(W.useState)(0),D=M[0],A=M[1];return Object(W.useEffect)(function(){c(ne(ne({},a),{fontSize:o+"px",fontFamily:i,fontWeight:l,color:V(s),backgroundColor:V(u)}))},[o,i,l,s,u]),Object(W.useEffect)(function(){var e=B({num:r.getHours(),minimamDisit:2}),t=B({num:r.getMinutes(),minimamDisit:2}),n=B({num:r.getSeconds(),minimamDisit:2}),a=B({num:r.getMilliseconds(),minimamDisit:3});p(e[0]),S(e[1]),v(t[0]),y(t[1]),w(n[0]),R(n[1]),x(a[0]),F(a[1]),A(a[2])},[r]),L.a.createElement("div",{className:"screen",style:a},L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"hh1",num:d})),L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"hh2",num:g})),L.a.createElement("div",{className:"screen-colon"},":"),L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"mm1",num:h})),L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"mm2",num:N})),L.a.createElement("div",{className:"screen-colon"},":"),L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"ss1",num:z})),L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"ss2",num:T})),f?L.a.createElement(L.a.Fragment,null,L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"sss1",num:_})),L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"sss2",num:I})),L.a.createElement("div",{className:"screen-panel"},L.a.createElement(Q,{type:"sss3",num:D}))):null)}function A(e){var t=e.title,n=e.name,a=e.defaultValue,r=e.options,c=e.onChange,o=Object(W.useState)(t);return o[0],o[1],L.a.createElement(L.a.Fragment,null,0<r.length?L.a.createElement(L.a.Fragment,null,L.a.createElement("dt",{className:"setting-font_title"},t),L.a.createElement("dd",{className:"setting-font_detail"},L.a.createElement("div",{className:"setting-font-family"},L.a.createElement("select",{defaultValue:a.value,name:n,onChange:c},r.map(function(e){var t=e.value,n=e.valueName;return L.a.createElement("option",{value:t,key:t},n)}))))):null)}function G(e){var n=Object(te.c)(),t=(Object(te.d)(function(e){return e.ScreenSettingReducer.fontSize}),Object(te.d)(function(e){return e.ScreenSettingReducer.fontFamily})),a=Object(te.d)(function(e){return e.ScreenSettingReducer.fontWeight}),r=Object(te.d)(function(e){return e.ScreenSettingReducer.fontColor}),c=Object(te.d)(function(e){return e.ScreenSettingReducer.backgroundColor}),o=Object(te.d)(function(e){return e.ScreenSettingReducer.enabledShowMilliseconds}),i=Object(W.useState)(28),l=i[0],s=(i[1],Object(W.useState)(100)),u=s[0],f=(s[1],Object(W.useState)([])),m=f[0],d=f[1],p=Object(W.useState)([]),b=p[0],g=p[1],S=Object(W.useState)([]),E=S[0],h=S[1];return function(){for(var e=[],t=l;t<u;t++)e.push({value:t.toString(),valueName:t.toString()})}(),Object(W.useEffect)(function(){d(O.map(function(e){return{value:e,valueName:e}})),g(function(){for(var e=[],t=l;t<u;t++)e.push({value:t.toString(),valueName:t.toString()});return e})},[]),Object(W.useEffect)(function(){m.length&&n(y(m[0].value))},[m]),Object(W.useEffect)(function(){h(function(){return v(t).map(function(e){return{value:e.toString(),valueName:e.toString()}})});var e=v(t);-1===e.indexOf(a)&&n(j(e[0]))},[t]),Object(W.useEffect)(function(){n(N(28))},[]),L.a.createElement("div",{className:"setting"},L.a.createElement("fieldset",{className:"setting-fieldset"},L.a.createElement("legend",{className:"setting-legend"},"font"),L.a.createElement("dl",{className:"setting-font"},L.a.createElement(A,{title:"font-family",defaultValue:m[0],options:m,name:"font-family",onChange:function(e){var t=e.target.value;n(y(t))}}),L.a.createElement(A,{title:"font-size",defaultValue:b[0],options:b,name:"font-size",onChange:function(e){n(N(e.target.value))}}),L.a.createElement(A,{title:"font-weight",defaultValue:E[0],options:E,name:"font-weight",onChange:function(e){n(j(e.target.value))}}))),L.a.createElement("fieldset",{className:"setting-fieldset"},L.a.createElement("legend",{className:"config"},"Color"),L.a.createElement("div",{className:"font-color"},L.a.createElement("label",null,L.a.createElement("span",null,"font-color"),L.a.createElement(ae.SketchPicker,{color:r,onChange:function(e){n(z(e.rgb))}}))),L.a.createElement("div",{className:"background-color"},L.a.createElement("label",null,L.a.createElement("span",null,"background-color"),L.a.createElement(ae.SketchPicker,{color:c,onChange:function(e){n(w(e.rgb))}})))),L.a.createElement("fieldset",{className:"setting-fieldset"},L.a.createElement("legend",{className:"config"},"field"),L.a.createElement("div",{className:"field"},L.a.createElement("label",null,L.a.createElement("input",{type:"checkbox",value:"milliseconds",checked:o,onChange:function(e){n(C(e.target.checked))}}),L.a.createElement("span",null,"show milliseconds")))))}function H(){var e=Object(te.c)(),t=Object(te.d)(function(e){return e.TestReducer.text},te.b),n=Object(te.d)(function(e){return e.TestReducer.apiResult},te.b),a=Object(W.useState)(t),r=a[0],c=a[1];return Object(W.useEffect)(function(){e(U({url:"/react-state/"}))},[]),Object(W.useEffect)(function(){e(M(r))},[r]),L.a.createElement(L.a.Fragment,null,L.a.createElement("input",{type:"text",value:r,onChange:function(e){return c(e.target.value)}}),L.a.createElement("p",null,t),L.a.createElement("hr",{className:"hr"}),L.a.createElement("p",null,"サーバタイム：",n))}function X(){return L.a.createElement(te.a,{store:J},L.a.createElement("div",{className:"App"},L.a.createElement(D,null),L.a.createElement(G,null),L.a.createElement("hr",{className:"hr"}),L.a.createElement(H,null),L.a.createElement("hr",{className:"hr"})))}var U=Object(R.a)(I)("ASYNC_GETDATA",function(e,t){var a=e.url;return x(void 0,void 0,void 0,function(){var n;return P(this,function(e){switch(e.label){case 0:return[4,(t=a,_.a.head(t))];case 1:return n=e.sent(),[4,new Promise(function(e){setTimeout(function(){e()},5e3)})];case 2:return e.sent(),[2,{date:n.headers.date}]}var t})})}),Y=function(){return(Y=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},$={text:"first impression",apiEndpoint:"",apiResult:""},q=Object(m.reducerWithInitialState)($).case(F,function(e,t){return $}).case(M,function(e,t){return Y(Y({},e),{text:t})}).case(U.async.started,function(e,t){var n=t.url;return Y(Y({},e),{apiEndpoint:n})}).case(U.async.done,function(e,t){t.params;var n=t.result;return Y(Y({},e),{apiResult:n.date})}).case(U.async.failed,function(e,t){return Y(Y({},e),{apiResult:t.error.message})}),K=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,Z=f.a,J=Object(u.e)(Object(u.c)({ScreenReducer:d,ScreenSettingReducer:T,TestReducer:q}),K(Object(u.a)(Z))),Q=L.a.memo(function(e){var t=e.type,n=e.num;return L.a.createElement(L.a.Fragment,null,L.a.createElement("span",{className:"screen-panel-"+t},n))}),ee=n(110),te=n(3),ne=function(){return(ne=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e}).apply(this,arguments)},ae=n(58);o.a.load({google:{families:s}}),r.a.render(L.a.createElement(X,null),document.getElementById("app"))}});