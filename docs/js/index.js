!function(e){function t(t){for(var a,s,i=t[0],l=t[1],c=t[2],f=0,m=[];f<i.length;f++)s=i[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&m.push(r[s][0]),r[s]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,i=1;i<n.length;i++){var l=n[i];0!==r[l]&&(a=!1)}a&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},r={0:0},o=[];function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var i=window.clock=window.clock||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([403,1]),n()}({403:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(54),s=n.n(o),i=n(169),l=n.n(i),c=(n(179),n(189),n(67),n(112),n(114),n(193),n(195),[{fontName:"Orbitron",fontsizelist:"4,5,6,7,8,9"},{fontName:"Wallpoet",fontsizelist:"4"},{fontName:"Roboto",fontsizelist:"1,3,7,9"},{fontName:"Oswald",fontsizelist:"2,3,4,6,7,5"},{fontName:"Balsamiq Sans",fontsizelist:"4,7"},{fontName:"Anton",fontsizelist:"4"},{fontName:"Barlow Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Patrick Hand",fontsizelist:"4"},{fontName:"Sacramento",fontsizelist:"4"},{fontName:"Poiret One",fontsizelist:"4"},{fontName:"Press Start 2P",fontsizelist:"4"},{fontName:"Saira Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Chakra Petch",fontsizelist:"3,4,5,6,7"},{fontName:"Baloo Chettan 2",fontsizelist:"4,5,6,7,8"},{fontName:"Coda",fontsizelist:"4,8"},{fontName:"Saira Semi Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Saira Extra Condensed",fontsizelist:"1,2,3,4,5,6,7,8,9"},{fontName:"Aldrich",fontsizelist:"4"},{fontName:"Stardos Stencil",fontsizelist:"4,7"},{fontName:"Megrim",fontsizelist:"4"},{fontName:"Iceland",fontsizelist:"4"},{fontName:"Sarpanch",fontsizelist:"4,5,6,7,8,9"},{fontName:"Shojumaru",fontsizelist:"4"},{fontName:"Londrina Outline",fontsizelist:"4"},{fontName:"Geo",fontsizelist:"4"},{fontName:"Libre Barcode 39 Extended Text",fontsizelist:"4"},{fontName:"Tulpen One",fontsizelist:"4"}]),u=Array.prototype.concat([{fontName:"sans-serif",fontsizelist:"4,5,6,7,8,9"},{fontName:"serif",fontsizelist:"4,5,6,7,8,9"},{fontName:"monospace",fontsizelist:"4,5,6,7,8,9"}],c),f=c.map((function(e){return e.fontName+":"+e.fontsizelist.replace(/(\d)/g,"$100")})),m=u.map((function(e){return""+e.fontName})),d=function(e){var t=u.filter((function(t){return t.fontName===e}));if(t.length)return t[0].fontsizelist.replace(/(\d)/g,"$100").split(",").map((function(e){return parseInt(e,10)}))},g=n(17),p=(n(30),n(68),n(200),n(216),n(170)),b=n.n(p);function v(e,t,n,a,r,o,s){try{var i=e[o](s),l=i.value}catch(e){return void n(e)}i.done?t(l):Promise.resolve(l).then(a,r)}function E(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var o=e.apply(t,n);function s(e){v(o,a,r,s,i,"next",e)}function i(e){v(o,a,r,s,i,"throw",e)}s(void 0)}))}}var h=Object(g.b)("servertime/head",E(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.head("./");case 2:return t=e.sent,e.next=5,new Promise((function(e){setTimeout((function(){e()}),5e3)}));case 5:return e.abrupt("return",{date:t.headers.date});case 6:case"end":return e.stop()}}),e)})))),N=Object(g.c)({name:"test",initialState:{text:"first impression",apiEndpoint:"",apiResult:""},reducers:{setText:function(e,t){return Object.assign({},e,{text:t.payload})}},extraReducers:function(e){e.addCase(h.pending,(function(e,t){return Object.assign({},e)})),e.addCase(h.fulfilled,(function(e,t){return Object.assign({},e,{apiResult:t.payload.date})})),e.addCase(h.rejected,(function(e,t){return Object.assign({},e)}))}}),S=N.actions.setText,O=N.reducer,y=Object(g.c)({name:"screen",initialState:{},reducers:{}}).reducer,j=Object(g.c)({name:"screenSetting",initialState:{fontSize:28,fontFamily:"sans-serif",fontWeight:400,fontColor:{r:0,g:0,b:0,a:1},backgroundColor:{r:255,g:255,b:255,a:1},enabledShowMilliseconds:!0},reducers:{setFontSize:function(e,t){var n=t.payload,a="string"==typeof n?parseInt(n,10):n;return Object.assign({},e,{fontSize:a})},setFontFamily:function(e,t){var n=t.payload;return Object.assign({},e,{fontFamily:n})},setFontWeight:function(e,t){var n=t.payload,a="string"==typeof n?parseInt(n,10):n;return Object.assign({},e,{fontWeight:a})},setFontColor:function(e,t){var n=t.payload;return Object.assign({},e,{fontColor:n})},setBackgroundColor:function(e,t){var n=t.payload;return Object.assign({},e,{backgroundColor:n})},setEnabledShowMilliseconds:function(e,t){var n=t.payload;return Object.assign({},e,{enabledShowMilliseconds:n})}}}),z=j.actions,C=z.setFontSize,F=z.setFontFamily,w=z.setFontWeight,k=z.setFontColor,x=z.setBackgroundColor,P=z.setEnabledShowMilliseconds,M=j.reducer,W=Object(g.a)({reducer:{test:O,screen:y,screenSetting:M}}),B=n(23),D=n(174),T=r.a.memo((function(e){var t=e.type,n=e.num;return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"screen-panel-"+t},n))})),_=(n(134),function(e){var t,n=e.num,a=e.minimamDisit;switch(typeof n){case"string":t=n;break;case"number":t=n.toString();break;default:return!1}for(;t.length<a;)t="0"+t;return t}),R=function(e){return"rgba( "+e.r+","+e.g+","+e.b+","+e.a+")"},A=function(e){var t=e.fontSize,n=e.fontFamily,o=e.fontWeight,s=e.fontColor,i=e.backgroundColor,l=e.enabledShowMilliseconds,c=Object(a.useState)({}),u=c[0],f=c[1],m=Object(a.useState)(0),d=m[0],g=m[1],p=Object(a.useState)(0),b=p[0],v=p[1],E=Object(a.useState)(0),h=E[0],N=E[1],S=Object(a.useState)(0),O=S[0],y=S[1],j=Object(a.useState)(0),z=j[0],C=j[1],F=Object(a.useState)(0),w=F[0],k=F[1],x=Object(a.useState)(0),P=x[0],M=x[1],W=Object(a.useState)(0),B=W[0],A=W[1],I=Object(a.useState)(0),V=I[0],G=I[1],H=Object(a.useState)(new Date),L=H[0],$=H[1];return Object(D.a)((function(e,t){$(new Date),t()}),{increment:.5,startAt:0,finishAt:-1})((function(){})),Object(a.useEffect)((function(){f(Object.assign({},u,{fontSize:t+"px",fontFamily:n,fontWeight:o,color:R(s),backgroundColor:R(i)}))}),[t,n,o,s,i]),Object(a.useEffect)((function(){var e=_({num:L.getHours(),minimamDisit:2}),t=_({num:L.getMinutes(),minimamDisit:2}),n=_({num:L.getSeconds(),minimamDisit:2}),a=_({num:L.getMilliseconds(),minimamDisit:3});g(e[0]),v(e[1]),N(t[0]),y(t[1]),C(n[0]),k(n[1]),M(a[0]),A(a[1]),G(a[2])}),[L]),r.a.createElement("div",{className:"screen",style:u},r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"hh1",num:d})),r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"hh2",num:b})),r.a.createElement("div",{className:"screen-colon"},":"),r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"mm1",num:h})),r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"mm2",num:O})),r.a.createElement("div",{className:"screen-colon"},":"),r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"ss1",num:z})),r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"ss2",num:w})),l?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"sss1",num:P})),r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"sss2",num:B})),r.a.createElement("div",{className:"screen-panel"},r.a.createElement(T,{type:"sss3",num:V}))):null)},I=Object(B.b)((function(e){return Object.assign({},e.screenSetting)}))(A),V=(n(237),n(91)),G=(n(402),function(e){var t=e.title,n=e.name,o=e.defaultValue,s=e.options,i=e.onChange,l=Object(a.useState)(t);l[0],l[1];return r.a.createElement(r.a.Fragment,null,s.length>0?r.a.createElement(r.a.Fragment,null,r.a.createElement("dt",{className:"setting-font_title"},t),r.a.createElement("dd",{className:"setting-font_detail"},r.a.createElement("div",{className:"setting-font-family"},r.a.createElement("select",{defaultValue:o.value,name:n,onChange:i},s.map((function(e){var t=e.value,n=e.valueName;return r.a.createElement("option",{value:t,key:t},n)})))))):null)}),H=function(e){e.fontSize;var t=e.fontFamily,n=e.fontWeight,o=e.fontColor,s=e.backgroundColor,i=e.enabledShowMilliseconds,l=e.setFontSize,c=e.setFontFamily,u=e.setFontWeight,f=e.setFontColor,g=e.setBackgroundColor,p=e.setEnabledShowMilliseconds,b=Object(a.useState)(28),v=b[0],E=(b[1],Object(a.useState)(100)),h=E[0],N=(E[1],Object(a.useState)([])),S=N[0],O=N[1],y=Object(a.useState)([]),j=y[0],z=y[1],C=Object(a.useState)([]),F=C[0],w=C[1];!function(){for(var e=[],t=v;t<h;t++)e.push({value:t.toString(),valueName:t.toString()})}();Object(a.useEffect)((function(){O(m.map((function(e){return{value:e,valueName:e}}))),z((function(){for(var e=[],t=v;t<h;t++)e.push({value:t.toString(),valueName:t.toString()});return e}))}),[]),Object(a.useEffect)((function(){S.length&&c(S[0].value)}),[S]),Object(a.useEffect)((function(){w((function(){return d(t).map((function(e){return{value:e.toString(),valueName:e.toString()}}))}));var e=d(t);-1===e.indexOf(n)&&u(e[0])}),[t]),Object(a.useEffect)((function(){l(28)}),[]);return r.a.createElement("div",{className:"setting"},r.a.createElement("fieldset",{className:"setting-fieldset"},r.a.createElement("legend",{className:"setting-legend"},"font"),r.a.createElement("dl",{className:"setting-font"},r.a.createElement(G,{title:"font-family",defaultValue:S[0],options:S,name:"font-family",onChange:function(e){var t=e.target.value;c(t)}}),r.a.createElement(G,{title:"font-size",defaultValue:j[0],options:j,name:"font-size",onChange:function(e){l(e.target.value)}}),r.a.createElement(G,{title:"font-weight",defaultValue:F[0],options:F,name:"font-weight",onChange:function(e){u(e.target.value)}}))),r.a.createElement("fieldset",{className:"setting-fieldset"},r.a.createElement("legend",{className:"config"},"Color"),r.a.createElement("div",{className:"font-color"},r.a.createElement("label",null,r.a.createElement("span",null,"font-color"),r.a.createElement(V.SketchPicker,{color:o,onChange:function(e){f(e.rgb)}}))),r.a.createElement("div",{className:"background-color"},r.a.createElement("label",null,r.a.createElement("span",null,"background-color"),r.a.createElement(V.SketchPicker,{color:s,onChange:function(e){g(e.rgb)}})))),r.a.createElement("fieldset",{className:"setting-fieldset"},r.a.createElement("legend",{className:"config"},"field"),r.a.createElement("div",{className:"field"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",value:"milliseconds",checked:i,onChange:function(e){p(e.target.checked)}}),r.a.createElement("span",null,"show milliseconds")))))},L=Object(B.b)((function(e){return Object.assign({},e.screenSetting)}),(function(e){return{setFontSize:function(t){return e(C(t))},setFontFamily:function(t){return e(F(t))},setFontWeight:function(t){return e(w(t))},setFontColor:function(t){return e(k(t))},setBackgroundColor:function(t){return e(x(t))},setEnabledShowMilliseconds:function(t){return e(P(t))}}}))(H),$=function(e){var t=e.text,n=e.setText,o=e.apiResult,s=e.asyncGetData,i=Object(a.useState)(t),l=i[0],c=i[1];return Object(a.useEffect)((function(){s()}),[]),Object(a.useEffect)((function(){n(l)}),[l]),r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{type:"text",value:l,onChange:function(e){return c(e.target.value)}}),r.a.createElement("p",null,t),r.a.createElement("hr",{className:"hr"}),r.a.createElement("p",null,"サーバタイム：",o))},q=Object(B.b)((function(e){return Object.assign({},e.test)}),(function(e){return{setText:function(t){e(S(t))},asyncGetData:function(t){e(h())}}}))($),J=function(){return r.a.createElement(B.a,{store:W},r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement("hr",{className:"hr"}),r.a.createElement(L,null),r.a.createElement("hr",{className:"hr"}),r.a.createElement(q,null)))};l.a.load({google:{families:f}}),s.a.render(r.a.createElement(J,null),document.getElementById("app"))}});