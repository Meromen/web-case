(function(e){function t(t){for(var r,o,c=t[0],i=t[1],u=t[2],d=0,f=[];d<c.length;d++)o=c[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==a[i]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"21bb":function(e,t,n){"use strict";n("2dad")},"2dad":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"d-flex",attrs:{id:"nav"}},[n("router-link",{staticClass:"p-2",attrs:{to:"/"}},[e._v("Главная")]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:e.isLoggedIn,expression:"isLoggedIn"}],staticClass:"mr-auto p-2",attrs:{to:"/profile"}},[e._v("Профиль")]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:!e.isLoggedIn,expression:"!isLoggedIn"}],staticClass:"p-2",attrs:{to:"/sign-in"}},[e._v("Авторизироваться")]),n("router-link",{directives:[{name:"show",rawName:"v-show",value:!e.isLoggedIn,expression:"!isLoggedIn"}],staticClass:"p-2",attrs:{to:"/sign-up"}},[e._v("Зарегестрироваться")]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.isLoggedIn,expression:"isLoggedIn"}],staticClass:" btn p-2",on:{click:e.logOut}},[e._v("Выход")])],1),n("router-view")],1)},s=[],o=(n("b0c0"),{name:"Home",data:function(){return{}},created:function(){var e=this.$cookies.get("userdata");null!=e&&this.$store.commit("setUser",e)},updated:function(){this.isLoggedIn||"sign-in"!=this.$route.name&&"sign-up"!=this.$route.name&&this.$router.push("/sign-in"),this.$store.dispatch("fetchVacancies"),this.$store.dispatch("fetchRequests")},methods:{logOut:function(){this.$cookies.remove("userdata"),this.$store.commit("setUser",void 0),this.$router.push("/"),this.userData=void 0}},computed:{isLoggedIn:function(){return void 0!==this.$store.getters.getUserData},userData:function(){return this.$store.getters.getUserData}}}),c=o,i=(n("5c0b"),n("2877")),u=Object(i["a"])(c,a,s,!1,null,null,null),l=u.exports,d=n("8c4f"),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home p-5"},[n("b-row",[n("b-col",{attrs:{md:"auto"}},[n("b-calendar",{attrs:{block:"","date-info-fn":e.dateClass,locale:"en-US"},on:{context:e.onContext},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("div",{staticClass:"d-flex w-50"},e._l(e.vacancies,(function(t,r){return n("div",{key:r,staticClass:"d-flex flex-column align-items-center justify-content-center v-block h-50 w-50"},[n("p",[e._v("Дата: "+e._s(t.date))]),n("p",[e._v("Подразделение: "+e._s(t.code))]),n("p",[e._v("Вакансия: "+e._s(t.vacancy))]),n("button",{directives:[{name:"show",rawName:"v-show",value:e.isAdmin,expression:"isAdmin"}],staticClass:"btn bg-danger",on:{click:function(n){return e.delVac(t.vacancy)}}},[e._v("Удалить")]),n("button",{directives:[{name:"show",rawName:"v-show",value:!e.isAdmin,expression:"!isAdmin"}],staticClass:"btn bg-success",on:{click:function(n){return e.newReq(t.id)}}},[e._v("Отклинуться")])])})),0)],1)],1)},m=[],p=n("1da1"),v=(n("96cf"),n("d3b7"),n("159b"),n("4de4"),{name:"Home",data:function(){return{value:"",context:null}},methods:{newReq:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("/request/add",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({user_id:t.userData.id,vacancy_id:e})});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,200==a.code&&t.$store.commit("addRequest",a.data);case 7:case"end":return n.stop()}}),n)})))()},delVac:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,fetch("/vacancy/delete",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({vacancy_id:e})});case 2:return r=n.sent,n.next=5,r.json();case 5:a=n.sent,200==a.code&&t.$store.commit("deleteVacancy",e);case 7:case"end":return n.stop()}}),n)})))()},onContext:function(e){this.context=e},dateClass:function(e){var t=!1,n=!1,r=!1;return this.$store.getters.getVacancies.forEach((function(a){a.opened&&("СМО"!=a.vacancy&&"ВМО"!=a.vacancy&&"МО"!=a.vacancy||a.date!=e||(t=!0),"СКМ"!=a.vacancy&&"КМ"!=a.vacancy||a.date!=e||(n=!0),"К"==a.vacancy&&a.date==e&&(r=!0))})),t&&n&&r?"v-7":t&&n?"v-6":t&&r?"v-5":n&&r?"v-4":r?"v-3":n?"v-2":t?"v1":""}},created:function(){void 0==this.$store.getters.getUserData&&this.$router.push("/sign-in"),this.$store.dispatch("fetchVacancies")},updated:function(){this.value=this.context.activeYMD},computed:{isAdmin:function(){return this.$store.getters.getIsAdmin},userData:function(){return this.$store.getters.getUserData},vacancies:function(){var e=this;return this.$store.getters.getVacancies.filter((function(t){var n=e.value,r=e.userData.vacancy,a=e.userData.code;if(t.opened){if(("СМО"==r||"ВМО"==r||"МО"==r)&&("СМО"==t.vacancy||"ВМО"==t.vacancy||"МО"==t.vacancy)&&n==t.date&&a==t.code)return t;if(("СКМ"==r||"КМ"==r)&&("СКМ"==t.vacancy||"КМ"==t.vacancy)&&n==t.date&&a==t.code)return t;if("К"==r&&"К"==t.vacancy&&n==t.date&&a==t.code)return t}}))}}}),b=v,h=(n("21bb"),Object(i["a"])(b,f,m,!1,null,null,null)),g=h.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 d-flex align-items-center flex-column"},[n("div",{staticClass:"p-3 w-50"},[e.show?n("b-form",{attrs:{autocomplete:"off"},on:{submit:e.onSubmit,reset:e.onReset}},[n("b-alert",{attrs:{variant:"danger"},model:{value:e.wrongUsername,callback:function(t){e.wrongUsername=t},expression:"wrongUsername"}},[e._v(" Проверте введенные данные ")]),n("b-form-group",{attrs:{id:"login-group",label:"Логин:","label-for":"login-input"}},[n("b-form-input",{attrs:{id:"login-input",autocomplete:"off",placeholder:"Введите логин",type:"text",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("b-form-group",{attrs:{id:"password-group",label:"Пароль:","label-for":"password-input"}},[n("b-form-input",{attrs:{id:"password-input",type:"password",autocomplete:"new-password",placeholder:"Введите пароль",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("b-form-group",{attrs:{id:"input-group-4"},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.ariaDescribedby;return[n("b-form-checkbox-group",{attrs:{id:"checkboxes-4","aria-describedby":r},model:{value:e.form.checked,callback:function(t){e.$set(e.form,"checked",t)},expression:"form.checked"}},[n("b-form-checkbox",{model:{value:e.rememberMe,callback:function(t){e.rememberMe=t},expression:"rememberMe"}},[e._v("Запомнить")])],1)]}}],null,!1,3976312111)}),n("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[e._v("Авторизироваться")]),n("br"),n("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[e._v("Зарегестрироваться")])],1):e._e()],1)])},y=[],x={data:function(){return{form:{username:"",password:""},wrongUsername:!1,codes:[{text:"Выберите подразделение",value:null},"4157 Биробиджанское отделение","9070 ГО по Хабаровскому краю","8635 Приморское отделение","8636 Благовещенское отделение","8567 Ю.-Сахалинское отделение","8645 С.-Восточное отделение","8557 Чукотское отделение","8556 Камчатское отделение"],vacancies:[{text:"Выберите вакансию",value:null},"СМО (Старший менеджер по обслуживанию)","ВМО (Ведущий менеджер по обслуживанию)","МО (Менеджер по обслуживанию)","СКМ (Старший клиентский менеджер)","КМ (клиентский менеджер)","К (консультант)"],show:!0,rememberMe:!1}},methods:{onSubmit:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.preventDefault(),n.next=3,fetch("/sing_in",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(t.form)});case 3:return r=n.sent,n.next=6,r.json();case 6:a=n.sent,400==a.code&&(t.wrongUsername=!0),200==a.code&&(t.$store.commit("setUser",a.data),t.rememberMe&&t.$cookies.set("userdata",a.data),t.$router.push("/"));case 9:case"end":return n.stop()}}),n)})))()},onReset:function(){this.$router.push("/sign-up")}}},_=x,$=Object(i["a"])(_,w,y,!1,null,null,null),k=$.exports,C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 d-flex align-items-center flex-column"},[n("div",{staticClass:"p-3 w-50"},[e.show?n("b-form",{attrs:{autocomplete:"off"},on:{submit:e.onSubmit,reset:e.onReset}},[n("b-alert",{attrs:{variant:"danger"},model:{value:e.wrongUsername,callback:function(t){e.wrongUsername=t},expression:"wrongUsername"}},[e._v(" Имя пользователя занято ")]),n("b-form-group",{attrs:{id:"login-group",label:"Логин:","label-for":"login-input"}},[n("b-form-input",{attrs:{id:"login-input",autocomplete:"off",placeholder:"Введите логин",type:"text",required:""},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),n("b-form-group",{attrs:{id:"password-group",label:"Пароль:","label-for":"password-input"}},[n("b-form-input",{attrs:{id:"password-input",type:"password",autocomplete:"new-password",placeholder:"Введите пароль",required:""},model:{value:e.form.password,callback:function(t){e.$set(e.form,"password",t)},expression:"form.password"}})],1),n("b-form-group",{attrs:{id:"firstname-group",label:"Имя:","label-for":"firstname-input"}},[n("b-form-input",{attrs:{id:"firstname-input",placeholder:"Введите имя",required:""},model:{value:e.form.first_name,callback:function(t){e.$set(e.form,"first_name",t)},expression:"form.first_name"}})],1),n("b-form-group",{attrs:{id:"secondname-group",label:"Фамилия:","label-for":"secondname-input"}},[n("b-form-input",{attrs:{id:"secondname-input",placeholder:"Введите фамилию",required:""},model:{value:e.form.second_name,callback:function(t){e.$set(e.form,"second_name",t)},expression:"form.second_name"}})],1),n("b-form-group",{attrs:{id:"vacancy-group",label:"Вакансия:","label-for":"vacancy-select"}},[n("b-form-select",{staticClass:"form-select",attrs:{id:"vacancy-select",options:e.vacancies,required:""},model:{value:e.form.vacancy,callback:function(t){e.$set(e.form,"vacancy",t)},expression:"form.vacancy"}})],1),n("b-form-group",{attrs:{id:"code-group",label:"Подразделение:","label-for":"code-select"}},[n("b-form-select",{staticClass:"form-select",attrs:{id:"code-select",options:e.codes,required:""},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1),n("b-button",{staticClass:"m-1",attrs:{type:"submit",variant:"primary"}},[e._v("Зарегестрироваться")]),n("br"),n("b-button",{staticClass:"m-1",attrs:{type:"reset",variant:"danger"}},[e._v("Авторизироваться")])],1):e._e()],1)])},O=[],j=(n("ac1f"),n("1276"),{data:function(){return{form:{username:"",password:"",first_name:"",second_name:"",code:null,vacancy:null},wrongUsername:!1,codes:[{text:"Выберите подразделение",value:null},"4157 Биробиджанское отделение","9070 ГО по Хабаровскому краю","8635 Приморское отделение","8636 Благовещенское отделение","8567 Ю.-Сахалинское отделение","8645 С.-Восточное отделение","8557 Чукотское отделение","8556 Камчатское отделение"],vacancies:[{text:"Выберите вакансию",value:null},"СМО (Старший менеджер по обслуживанию)","ВМО (Ведущий менеджер по обслуживанию)","МО (Менеджер по обслуживанию)","СКМ (Старший клиентский менеджер)","КМ (клиентский менеджер)","К (консультант)","РО (Руководителя офиса)"],show:!0}},methods:{onSubmit:function(e){var t=this;return Object(p["a"])(regeneratorRuntime.mark((function n(){var r,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.preventDefault(),r={},r.username=t.form.username,r.password=t.form.password,r.first_name=t.form.first_name,r.second_name=t.form.second_name,r.code=t.form.code.split(" ")[0],r.vacancy=t.form.vacancy.split(" ")[0],n.next=10,fetch("/sing_up",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify(r)});case 10:return a=n.sent,n.next=13,a.json();case 13:s=n.sent,400==s.code&&(t.wrongUsername=!0),200==s.code&&(t.$store.commit("setUser",s.data),t.rememberMe&&t.$cookies.set("userdata",s.data),t.$router.push("/"));case 16:case"end":return n.stop()}}),n)})))()},onReset:function(){this.$router.push("/sign-in")}}}),R=j,q=Object(i["a"])(R,C,O,!1,null,null,null),D=q.exports,U=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-100 d-flex align-items-center flex-column"},[n("b-card",{staticClass:"overflow-hidden",staticStyle:{"max-width":"540px"},attrs:{"no-body":""}},[n("b-row",{attrs:{"no-gutters":""}},[n("b-col",{attrs:{md:"6"}},[n("b-card-img",{staticClass:"rounded-0",attrs:{src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-9xI0BOEVOJACng2CblMXYPCidOUoPI67BA&usqp=CAU",alt:"Image"}})],1),n("b-col",{attrs:{md:"6"}},[n("b-card-body",{attrs:{title:e.userData.first_name+" "+e.userData.second_name}},[n("b-card-text",[e._v(" Подразделение: "+e._s(e.userData.code)+" Должность: "+e._s(e.userData.vacancy)+" ")])],1)],1)],1)],1),n("div",{staticClass:"w-75 d-flex flex-column"},[n("h2",[e._v("Отклики")]),e._l(e.activeReqs,(function(t,r){return n("div",{key:r,staticClass:"w-100 d-flex m-1"},[n("div",{staticClass:"w-25"},[e._v(e._s(t.date))]),n("div",{staticClass:"w-25"},[e._v(e._s(t.vacancy))]),n("div",{staticClass:"w-50 d-flex justify-content-center"},[n("button",{staticClass:"btn bg-danger",on:{click:e.delReq}},[e._v("Отменить")])])])}))],2)],1)},S=[],A=n("b85c"),I={data:function(){return{}},methods:{delReq:function(){return Object(p["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()}},created:function(){void 0==this.$store.getters.getUserData&&this.$router.push("/sign-in"),this.$store.dispatch("fetchRequests")},computed:{isAdmin:function(){return this.$store.getters.getIsAdmin},userData:function(){return this.$store.getters.getUserData},activeReqs:function(){var e,t=[],n=Object(A["a"])(this.$store.getters.getReqs);try{for(n.s();!(e=n.n()).done;){var r,a=e.value,s=Object(A["a"])(this.$store.getters.getVacancies);try{for(s.s();!(r=s.n()).done;){var o=r.value;a.vacancy_id==o.id&&t.push(o)}}catch(c){s.e(c)}finally{s.f()}}}catch(c){n.e(c)}finally{n.f()}return t}}},T=I,P=Object(i["a"])(T,U,S,!1,null,null,null),V=P.exports;r["default"].use(d["a"]);var M=[{path:"/",name:"Home",component:g},{path:"/sign-in",name:"sign-in",component:k},{path:"/sign-up",name:"sign-up",component:D},{path:"/profile",name:"profile",component:V}],N=new d["a"]({mode:"history",base:"/",routes:M}),L=N,J=(n("a434"),n("d81d"),n("2f62"));r["default"].use(J["a"]);var E=new J["a"].Store({state:{userData:void 0,vacancies:[],requests:[],isAdmin:!1},mutations:{setUser:function(e,t){e.userData=t,"РО"==e.userData.vacancy?e.isAdmin=!0:e.isAdmin=!1},setVacancy:function(e,t){e.vacancies=t},setRequests:function(e,t){e.requests=t},addRequest:function(e,t){e.requests.push(t)},deleteVacancy:function(e,t){e.vacancies.splice(e.vacancies.map((function(e){return e.id})).indexOf(t),1)}},actions:{fetchVacancies:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/vacancy/get",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:{}});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,200==r.code&&e.commit("setVacancy",r.data);case 7:case"end":return t.stop()}}),t)})))()},fetchRequests:function(e){return Object(p["a"])(regeneratorRuntime.mark((function t(){var n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("/request/get",{method:"POST",headers:{"Content-Type":"application/json;charset=utf-8"},body:JSON.stringify({user_id:e.state.userData.id})});case 2:return n=t.sent,t.next=5,n.json();case 5:r=t.sent,200==r.code&&e.commit("setRequests",r.data);case 7:case"end":return t.stop()}}),t)})))()}},modules:{},getters:{getUserData:function(e){return e.userData},getVacancies:function(e){return e.vacancies},getIsAdmin:function(e){return e.isAdmin},getReqs:function(e){return e.requests}}}),H=n("5f5b"),B=n("b1e0"),Y=n("2b27"),G=n.n(Y);n("f9e3"),n("2dd8");r["default"].use(H["a"]),r["default"].use(B["a"]),r["default"].use(G.a),r["default"].$cookies.config("7d"),r["default"].config.productionTip=!1,new r["default"]({router:L,store:E,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});