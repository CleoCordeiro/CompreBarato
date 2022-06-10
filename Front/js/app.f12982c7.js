(function(){"use strict";var t={997:function(t,e,r){r.d(e,{Y:function(){return Tt}});var a=r(144),n=r(9669),o=r.n(n);let i={};const s=o().create(i);s.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),s.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=s,window.axios=s,Object.defineProperties(t.prototype,{axios:{get(){return s}},$axios:{get(){return s}}})},a.Z.use(Plugin);Plugin;var c=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",[r("v-main",[r("router-view")],1)],1)},l=[],u={name:"App",data:()=>({})},d=u,m=r(1001),p=r(3453),g=r.n(p),v=r(7524),f=r(7877),h=(0,m.Z)(d,c,l,!1,null,null,null),b=h.exports;g()(h,{VApp:v.Z,VMain:f.Z});var P=r(8345),w=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{style:{background:t.$vuetify.theme.themes.dark.background}},[r("SideBar",{attrs:{toogle:t.toogle}}),r("v-btn",{staticClass:"d-lg-none d-xl-flex",attrs:{icon:"",dark:""},on:{click:function(e){t.toogle++}}},[r("v-icon",[t._v("mdi-menu")])],1),r("v-container",[r("Search"),r("h1",{staticClass:"white--text"},[t._v("Lista de Produtos")]),r("p",{staticClass:"grey--text"},[t._v(" Com Grandes Poderes Vêm Grandes Responsabilidades ")]),r("v-divider",{attrs:{color:"grey"}}),r("v-toolbar",{attrs:{flat:"",color:"rgba(0,0,0,0)"}},[r("v-spacer")],1),r("Products",{attrs:{page:t.page}})],1),r("Pagination")],1)},x=[],k=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"",color:"#000000","mini-variant":"","mini-variant-width":"110",right:""},model:{value:t.drawer1,callback:function(e){t.drawer1=e},expression:"drawer1"}},[r("v-avatar",{staticClass:"d-block text-center mx-auto mt-4 mb-10",attrs:{size:"80"}},[r("v-btn",{staticClass:"ma-2",attrs:{outlined:"",large:"",fab:"",color:"white"}},[t._v(" SH ")])],1),r("v-card",{staticClass:"rounded-xl mx-4 py-10 text-center top",attrs:{flat:"",color:"#6F0DFF"}},[r("v-btn",{staticClass:"mb-5",attrs:{icon:"",dark:""}},[r("v-icon",[t._v("fas fa-sort-amount-up-alt")])],1),r("span",{staticClass:"white--text"},[t._v("Create"),r("br"),t._v("Order")])],1),r("div",{staticStyle:{position:"absolute",bottom:"20px","margin-left":"auto","margin-right":"auto",left:"0",right:"0","text-align":"center"}},[r("v-btn",{staticClass:"changewith mb-3",attrs:{dark:""}},[r("v-icon",{},[t._v("mdi-bell")])],1),r("br"),r("v-badge",{attrs:{bordered:"",color:"#6F0DFF",dot:"",overlap:""}},[r("v-btn",{staticClass:"changewith",attrs:{dark:""}},[r("v-icon",{},[t._v("mdi-android-messages")])],1)],1)],1)],1)},Z=[],y={data:()=>({selectedItem:0,drawer1:null})},C=y,V=r(6370),_=r(4633),S=r(680),T=r(3237),$=r(6428),E=r(4338),A=(0,m.Z)(C,k,Z,!1,null,null,null),I=A.exports;g()(A,{VAvatar:V.Z,VBadge:_.Z,VBtn:S.Z,VCard:T.Z,VIcon:$.Z,VNavigationDrawer:E.Z});var F=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-navigation-drawer",{attrs:{app:"",color:"#000000","mini-variant":"","mini-variant-width":"100"},model:{value:t.isVisible,callback:function(e){t.isVisible=e},expression:"isVisible"}},[r("v-avatar",{staticClass:"d-block text-center mx-auto mt-4 mb-10",attrs:{size:"80"}}),r("v-list",{attrs:{flat:"",dark:""}},[r("v-list-item-group",{model:{value:t.selectedItem,callback:function(e){t.selectedItem=e},expression:"selectedItem"}},t._l(t.items,(function(e,a){return r("v-list-item",{key:a,attrs:{"active-class":"border",ripple:!1},scopedSlots:t._u([{key:"default",fn:function(a){var n=a.active;return[r("v-list-item-content",[r("v-icon",{attrs:{id:"ico",color:n?"white":"grey lighten-1"},domProps:{textContent:t._s(e.icon)}})],1)]}}],null,!0)})})),1)],1),r("div",{staticStyle:{position:"absolute",bottom:"20px","margin-left":"auto","margin-right":"auto",left:"0",right:"0","text-align":"center"}},[r("v-avatar",{attrs:{id:"avatar",size:"40"}},[r("v-img",{staticClass:"image",attrs:{src:"https://media-exp1.licdn.com/dms/image/C4D03AQHFrLVkF4RhAw/profile-displayphoto-shrink_800_800/0/1650468349337?e=1658361600&v=beta&t=yTr6mEI1msStE4_IEF6pJJcXXAZIcnYgJW1CRuhg4VE"}})],1)],1)],1)},O=[],j={props:{toogle:0},data:()=>({isVisible:!0,selectedItem:0,items:[{icon:"mdi-home-outline"},{icon:"mdi-cart-outline"},{icon:"mdi-store-outline"},{icon:"mdi-calendar-check-outline"},{icon:"mdi-apps"}]}),watch:{toogle:function(){this.isVisible=!this.isVisible}}},B=j,L=r(7047),q=r(6816),M=r(7620),D=r(4347),N=r(6651),R=(0,m.Z)(B,F,O,!1,null,null,null),z=R.exports;g()(R,{VAvatar:V.Z,VIcon:$.Z,VImg:L.Z,VList:q.Z,VListItem:M.Z,VListItemContent:D.km,VListItemGroup:N.Z,VNavigationDrawer:E.Z});var G=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{staticClass:"mt-n14"},t._l(t.products.content,(function(e){return r("v-col",{key:e.id,attrs:{cols:"12",xs:"12",sm:"6",md:"4",lg:"3"}},[r("v-card",{staticClass:"mx-auto my-12 rounded-xl",attrs:{"max-width":"374",color:"#151515"}},[r("v-img",{staticClass:"ImagemProduto",attrs:{height:"170",src:e.image},on:{click:function(r){return t.productLink(e.id)}}}),r("v-toolbar",{staticClass:"mt-n7",attrs:{color:"transparent",flat:""}},[r("v-avatar",{staticClass:"mr-2",attrs:{color:"white",rounded:""}},[r("v-img",{attrs:{src:"https://staticm.kabum.com.br/public/favicon.ico",contain:""}})],1)],1),r("v-card-title",{staticClass:"grey--text text-grey-darken-1 caption mt-n6",staticStyle:{"overflow-y":"auto",height:"150px"}},[t._v(t._s(e.name)+" ")]),r("v-card-title",{staticClass:"white--text caption justify-center"},[t._v(" R$ "+t._s(t.formatPrice(e.price))+" ")]),r("v-btn",{attrs:{block:"",color:"grey",elevation:"12"}},[t._v("Monitorar")])],1)],1)})),1)},H=[],W={mame:"Products",props:["page"],data(){return{products:[],searchTerm:"",currentPage:0,totalPages:0}},watch:{currentPage:function(t){t.getProducts(this.searchTerm)}},beforeMount(){this.getProducts()},mounted(){Tt.$on("changedPage",(t=>{this.currentPage=t,this.getProducts(this.searchTerm)})),this.$root.$on("searchEvent",(t=>{this.searchTerm=t,this.currentPage=0,this.getProducts(this.searchTerm)}))},methods:{async getProducts(t){let e={headers:{Accept:"text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9","Accept-Language":"pt-BR,pt;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6","Cache-Control":"max-age=0",Connection:"keep-alive","Sec-Fetch-Dest":"document","Sec-Fetch-Mode":"navigate","Sec-Fetch-Site":"none","Sec-Fetch-User":"?1","Upgrade-Insecure-Requests":"1","User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.64 Safari/537.36 Edg/101.0.1210.53","sec-ch-ua":'" Not A;Brand";v="99", "Chromium";v="101", "Microsoft Edge";v="101"',"sec-ch-ua-mobile":"?0","sec-ch-ua-platform":'"Windows"'}};const r=await o().get("https://compre-barato-api.herokuapp.com/products/",{params:{searchTerm:t??"",page:this.currentPage??0,size:"28",sort:"price,desc"},config:e});this.products=r.data,this.currentPage=r.data.number,this.totalPages=r.data.totalPages-1,Tt.$emit("totalPages",this.totalPages),Tt.$emit("currentPage",this.currentPage)},productLink(t){window.open("https://www.kabum.com.br/produto/"+t,"_blank").focus()},formatPrice(t){const e=Number(t.toString().replace(",","."));if(!e)return"0,00";const r=e.toFixed(2).replace(".",",");return r.replace(/\B(?=(\d{3})+(?!\d))/g,".")}}},U=W,J=r(7118),K=r(2102),X=r(2877),Y=r(6656),Q=(0,m.Z)(U,G,H,!1,null,"6ddda8d0",null),tt=Q.exports;g()(Q,{VAvatar:V.Z,VBtn:S.Z,VCard:T.Z,VCardTitle:J.EB,VCol:K.Z,VImg:L.Z,VRow:X.Z,VToolbar:Y.Z});var et=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-toolbar",{attrs:{flat:"",color:"rgba(0,0,0,0)"}},[r("v-spacer"),r("v-text-field",{staticClass:"pt-5 d-none d-sm-flex",attrs:{label:"Pesquise pelo Produto",dark:"",filled:"","prepend-inner-icon":"mdi-magnify",solo:"",flat:"","background-color":"transparent",rounded:"",outlined:""},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.Search.apply(null,arguments)}},model:{value:t.SearchTerm,callback:function(e){t.SearchTerm=e},expression:"SearchTerm"}}),r("v-spacer")],1)},rt=[],at={mame:"Search",data:function(){return{SearchTerm:""}},methods:{Search:function(){this.$root.$emit("searchEvent",this.SearchTerm)}}},nt=at,ot=r(9762),it=r(6571),st=(0,m.Z)(nt,et,rt,!1,null,"56c38377",null),ct=st.exports;g()(st,{VSpacer:ot.Z,VTextField:it.Z,VToolbar:Y.Z});var lt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-pagination",{attrs:{color:"#333",length:t.pagination.totalPages,"total-visible":7},on:{input:t.onPageChange},model:{value:t.pagination.currentPage,callback:function(e){t.$set(t.pagination,"currentPage",e)},expression:"pagination.currentPage"}})},ut=[],dt={mame:"pagination",data(){return{pagination:{currentPage:1,totalPages:0}}},created(){Tt.$on("totalPages",(t=>{console.log(t),this.pagination.totalPages=t})),Tt.$on("currentPage",(t=>{console.log(t),this.pagination.currentPage=t}))},methods:{onPageChange(){Tt.$on("totalPages",(t=>{console.log(t),this.totalPages=t})),Tt.$on("currentPage",(t=>{console.log(t),this.currentPage=t})),Tt.$emit("changedPage",this.pagination.currentPage)}}},mt=dt,pt=r(6325),gt=(0,m.Z)(mt,lt,ut,!1,null,"680de654",null),vt=gt.exports;g()(gt,{VPagination:pt.Z});var ft={name:"Home",emitis:["toogleDrawer"],components:{SideBar:z,RightSideBar:I,Products:tt,Search:ct,Pagination:vt},data:()=>({page:1,toogle:0}),methods:{ChangeDrawer(){this.drawer=!this.drawer}}},ht=ft,bt=r(9846),Pt=r(1418),wt=(0,m.Z)(ht,w,x,!1,null,"77ff228a",null),xt=wt.exports;g()(wt,{VApp:v.Z,VBtn:S.Z,VContainer:bt.Z,VDivider:Pt.Z,VIcon:$.Z,VSpacer:ot.Z,VToolbar:Y.Z}),a.Z.use(P.Z);const kt=[{path:"/",name:"Home",component:xt},{path:"/about",name:"About",component:()=>r.e(443).then(r.bind(r,2297))}],Zt=new P.Z({mode:"history",base:"/",routes:kt});var yt=Zt,Ct=r(629);a.Z.use(Ct.ZP);var Vt=new Ct.ZP.Store({state:{},mutations:{},actions:{},modules:{}}),_t=r(1910);a.Z.use(_t.Z);var St=new _t.Z({icons:{iconfont:"md"},theme:{themes:{dark:{background:"#000000"}}}});a.Z.config.productionTip=!1;const Tt=new a.Z;new a.Z({router:yt,store:Vt,vuetify:St,render:t=>t(b)}).$mount("#app")}},e={};function r(a){var n=e[a];if(void 0!==n)return n.exports;var o=e[a]={exports:{}};return t[a](o,o.exports,r),o.exports}r.m=t,function(){var t=[];r.O=function(e,a,n,o){if(!a){var i=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],o=t[u][2];for(var s=!0,c=0;c<a.length;c++)(!1&o||i>=o)&&Object.keys(r.O).every((function(t){return r.O[t](a[c])}))?a.splice(c--,1):(s=!1,o<i&&(i=o));if(s){t.splice(u--,1);var l=n();void 0!==l&&(e=l)}}return e}o=o||0;for(var u=t.length;u>0&&t[u-1][2]>o;u--)t[u]=t[u-1];t[u]=[a,n,o]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var a in e)r.o(e,a)&&!r.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){r.f={},r.e=function(t){return Promise.all(Object.keys(r.f).reduce((function(e,a){return r.f[a](t,e),e}),[]))}}(),function(){r.u=function(t){return"js/about.bd3f4ae0.js"}}(),function(){r.miniCssF=function(t){}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="comprebarato:";r.l=function(a,n,o,i){if(t[a])t[a].push(n);else{var s,c;if(void 0!==o)for(var l=document.getElementsByTagName("script"),u=0;u<l.length;u++){var d=l[u];if(d.getAttribute("src")==a||d.getAttribute("data-webpack")==e+o){s=d;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,r.nc&&s.setAttribute("nonce",r.nc),s.setAttribute("data-webpack",e+o),s.src=a),t[a]=[n];var m=function(e,r){s.onerror=s.onload=null,clearTimeout(p);var n=t[a];if(delete t[a],s.parentNode&&s.parentNode.removeChild(s),n&&n.forEach((function(t){return t(r)})),e)return e(r)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){r.p="/"}(),function(){var t={143:0};r.f.j=function(e,a){var n=r.o(t,e)?t[e]:void 0;if(0!==n)if(n)a.push(n[2]);else{var o=new Promise((function(r,a){n=t[e]=[r,a]}));a.push(n[2]=o);var i=r.p+r.u(e),s=new Error,c=function(a){if(r.o(t,e)&&(n=t[e],0!==n&&(t[e]=void 0),n)){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;s.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",s.name="ChunkLoadError",s.type=o,s.request=i,n[1](s)}};r.l(i,c,"chunk-"+e,e)}},r.O.j=function(e){return 0===t[e]};var e=function(e,a){var n,o,i=a[0],s=a[1],c=a[2],l=0;if(i.some((function(e){return 0!==t[e]}))){for(n in s)r.o(s,n)&&(r.m[n]=s[n]);if(c)var u=c(r)}for(e&&e(a);l<i.length;l++)o=i[l],r.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return r.O(u)},a=self["webpackChunkcomprebarato"]=self["webpackChunkcomprebarato"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=r.O(void 0,[998],(function(){return r(997)}));a=r.O(a)})();
//# sourceMappingURL=app.f12982c7.js.map