(function(){"use strict";var n={7292:function(n,e,t){var a=t(9242),o=t(3396),r=t(7139);const l=(0,o._)("ul",null,[(0,o._)("li",null,"Создать компонент кнопка, в который передается пропсом disabled, loading. Также этот компонент должен уметь рендерить переданный дефолтный слот, который по умолчанию рендерит текст “OK”"),(0,o._)("li",null,[(0,o.Uk)(" Компонент таблица "),(0,o._)("ul",null,[(0,o._)("li",null," Компонент принимает параметром columns - массив из объектов типа {name: ‘Название колонки’, key: ‘name’, slot: ‘nameSlot’} "),(0,o._)("li",null," Компонент принимаем параметров dataSource - массив из объектов типа {name: ‘John’, age: 27, avatar: ‘https://www.meme-arsenal.com/memes/43c9c30bdd5378c3555ce700cad6637f.jpg’} "),(0,o._)("li",null," Компонент рендерит наименование колонок "),(0,o._)("li",null," Компонент рендерит данные, которые соответствуют ключам колонок "),(0,o._)("li",null," Если в объекте колонки есть slot, то вместо данных из dataSource рендерим slot ")])])],-1),u={key:0},i={key:0},c=["src"];function s(n,e,t,a,s,d){const m=(0,o.up)("app-button"),f=(0,o.up)("app-table");return(0,o.wg)(),(0,o.iD)(o.HY,null,[l,(0,o.Wm)(m,{disabled:a.disabled,loading:a.loading},null,8,["disabled","loading"]),(0,o.Wm)(f,{columns:a.columns,dataSource:a.dataSource},{header:(0,o.w5)((({nameColumn:n})=>[(0,o.Uk)((0,r.zw)(n),1)])),name:(0,o.w5)((({item:n})=>[n?((0,o.wg)(),(0,o.iD)("span",u,(0,r.zw)(n),1)):(0,o.kq)("",!0)])),age:(0,o.w5)((({item:n})=>[n?((0,o.wg)(),(0,o.iD)("span",i,(0,r.zw)(n),1)):(0,o.kq)("",!0)])),avatar:(0,o.w5)((({item:n})=>[n?((0,o.wg)(),(0,o.iD)("img",{key:0,src:n},null,8,c)):(0,o.kq)("",!0)])),_:1},8,["columns","dataSource"])],64)}var d=t(4870);const m=(0,o.Uk)("OK");function f(n,e,t,a,r,l){return(0,o.wg)(),(0,o.iD)("button",null,[(0,o.WI)(n.$slots,"default",{},(()=>[m]))])}var p={props:{disabled:Boolean,loading:Boolean}},w=t(89);const g=(0,w.Z)(p,[["render",f]]);var v=g;function b(n,e,t,a,l,u){return(0,o.wg)(),(0,o.iD)("table",null,[(0,o._)("tr",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.columns,(e=>((0,o.wg)(),(0,o.iD)("th",{key:e.key},[(0,o.WI)(n.$slots,"header",{nameColumn:e.name})])))),128))]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.dataSource,(e=>((0,o.wg)(),(0,o.iD)("tr",{key:e.id},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(t.columns,(t=>((0,o.wg)(),(0,o.iD)("td",{key:t.key},[(0,o.WI)(n.$slots,t.key,{item:e[t.key]},(()=>[(0,o.Uk)((0,r.zw)(t.slot),1)]))])))),128))])))),128))])}var k={props:{columns:Array,dataSource:Array}};const y=(0,w.Z)(k,[["render",b]]);var h=y,_={setup(){const n=(0,d.iH)(!1),e=(0,d.iH)(!1),t=(0,d.qj)([{name:"Имя",key:"name",slot:"name"},{name:"Возраст",key:"age"},{name:"Аватар",key:"avatar",slot:"avatarImage"}]),a=(0,d.qj)([{id:1,name:"John",age:27,avatar:"https://www.meme-arsenal.com/memes/43c9c30bdd5378c3555ce700cad6637f.jpg"},{id:2,name:"Peter",age:30,avatar:"https://www.meme-arsenal.com/memes/43c9c30bdd5378c3555ce700cad6637f.jpg"}]);return{disabled:n,loading:e,columns:t,dataSource:a}},components:{AppButton:v,AppTable:h}};const O=(0,w.Z)(_,[["render",s]]);var D=O;(0,a.ri)(D).mount("#app")}},e={};function t(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return n[a](r,r.exports,t),r.exports}t.m=n,function(){var n=[];t.O=function(e,a,o,r){if(!a){var l=1/0;for(s=0;s<n.length;s++){a=n[s][0],o=n[s][1],r=n[s][2];for(var u=!0,i=0;i<a.length;i++)(!1&r||l>=r)&&Object.keys(t.O).every((function(n){return t.O[n](a[i])}))?a.splice(i--,1):(u=!1,r<l&&(l=r));if(u){n.splice(s--,1);var c=o();void 0!==c&&(e=c)}}return e}r=r||0;for(var s=n.length;s>0&&n[s-1][2]>r;s--)n[s]=n[s-1];n[s]=[a,o,r]}}(),function(){t.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return t.d(e,{a:e}),e}}(),function(){t.d=function(n,e){for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={143:0};t.O.j=function(e){return 0===n[e]};var e=function(e,a){var o,r,l=a[0],u=a[1],i=a[2],c=0;if(l.some((function(e){return 0!==n[e]}))){for(o in u)t.o(u,o)&&(t.m[o]=u[o]);if(i)var s=i(t)}for(e&&e(a);c<l.length;c++)r=l[c],t.o(n,r)&&n[r]&&n[r][0](),n[r]=0;return t.O(s)},a=self["webpackChunkvue_components_4"]=self["webpackChunkvue_components_4"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=t.O(void 0,[998],(function(){return t(7292)}));a=t.O(a)})();
//# sourceMappingURL=app.8bc19e73.js.map