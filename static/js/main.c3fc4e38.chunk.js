(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var n,r,l=a(0),c=a.n(l),s=a(29),u=a.n(s),o=a(6),i=a(8),m=a(9),E=a.n(m),d=a(13),p=a(10),b=a(14),g=a.n(b),f=Object(l.createContext)(),h=a(12),v=function(e,t){switch(t.type){case"SET_LOADING":return Object(h.a)({},e,{loading:!0});case"GET_USER":return Object(h.a)({},e,{user:t.payload,loading:!1});case"GET_REPOS":return Object(h.a)({},e,{repos:t.payload,loading:!1});case"SEARCH_USERS":return Object(h.a)({},e,{users:t.payload,loading:!1});case"CLEAR_USERS":return Object(h.a)({},e,{users:[],loading:!1});default:return e}};n=Object({NODE_ENV:"production",PUBLIC_URL:"/github-finder"}).GITHUB_CLIENT_ID,r=Object({NODE_ENV:"production",PUBLIC_URL:"/github-finder"}).GITHUB_CLIENT_SECRET;var N=function(e){var t=Object(l.useReducer)(v,{users:[],user:{},repos:[],loading:!1}),a=Object(p.a)(t,2),s=a[0],u=a[1],o=function(){var e=Object(d.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,g.a.get("https://api.github.com/search/users?q=".concat(t,"&client_id=").concat(n,"&client_secret=").concat(r));case 3:a=e.sent,console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/github-finder"}).REACT_APP_GITHUB_CLIENT_ID),u({type:"SEARCH_USERS",payload:a.data.items});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),i=function(){var e=Object(d.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,g.a.get("https://api.github.com/users/".concat(t,"/repos?per_page=5&sort=created:asc&client_id=").concat(n,"&client_secret=").concat(r));case 3:a=e.sent,console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/github-finder"}).REACT_APP_GITHUB_CLIENT_ID),u({type:"GET_REPOS",payload:a.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(d.a)(E.a.mark(function e(t){var a;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return b(),e.next=3,g.a.get("https://api.github.com/users/".concat(t,"?client_id=").concat(n,"&client_secret=").concat(r));case 3:a=e.sent,console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/github-finder"}).REACT_APP_GITHUB_CLIENT_ID),u({type:"GET_USER",payload:a.data});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),b=function(){return u({type:"SET_LOADING"})};return c.a.createElement(f.Provider,{value:{users:s.users,user:s.user,repos:s.repos,loading:s.loading,searchUser:o,clearUsers:function(){return u({type:"CLEAR_USERS"})},getUser:m,getUserRepos:i}},e.children)},_=Object(l.createContext)(),y=function(e,t){switch(t.type){case"SET_ALERT":return t.payload;case"REMOVE_ALERT":return null;default:return e}},O=function(e){var t=Object(l.useReducer)(y,null),a=Object(p.a)(t,2),n=a[0],r=a[1];return c.a.createElement(_.Provider,{value:{alert:n,setAlert:function(e,t){r({type:"SET_ALERT",payload:{msg:e,type:t}}),setTimeout(function(){return r({type:"REMOVE_ALERT"})},5e3)}}},e.children)};function R(e){var t=e.icon,a=e.title;return c.a.createElement("nav",{className:"navbar bg-dark"},c.a.createElement("h2",null,c.a.createElement(o.b,{to:"/"},c.a.createElement("i",{className:t}),a)),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(o.b,{to:"/"},"Home")),c.a.createElement("li",null,c.a.createElement(o.b,{to:"/about"},"About"))))}R.defaultProps={title:"Github Finder",icon:"fab fa-github"};var U=R,C=function(e){e.alert;var t=Object(l.useContext)(_);return null!==t.alert&&c.a.createElement("div",{className:"alert alert-".concat(t.alert.type)},c.a.createElement("i",{className:"fas fa-info-circle"})," ",t.alert.msg)},j=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"hi this is abut page "))},x=function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"spinner-border",role:"status"},c.a.createElement("span",{className:"sr-only"})))},T=a(7),L=a.n(T),k=function(e){var t=e.repo;return c.a.createElement("div",{className:"card"},c.a.createElement("h3",null,c.a.createElement("a",{href:t.html_url},t.name)))};k.prototype={repo:L.a.object.isRequired};var w=k,I=function(e){return e.repos.map(function(e){return c.a.createElement(w,{repo:e,key:e.id})})};I.prototype={repos:L.a.array.isRequired};var S=I,A=function(e){var t=e.match,a=Object(l.useContext)(f),n=a.user,r=a.getUser,s=a.loading,u=a.repos,i=a.getUserRepos;Object(l.useEffect)(function(){r(t.params.login),i(t.params.login)},[]);var m=n.name,E=n.avatar_url,d=n.location,p=n.bio,b=n.blog,g=n.login,h=n.html_url,v=n.followers,N=n.following,_=n.hireable,y=n.company,O=n.public_repos,R=n.public_gists;return s?c.a.createElement("div",{className:"all-center"},c.a.createElement(x,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement(o.b,{to:"/",className:"btn btn-light"},"Back to home"),c.a.createElement("br",null),"Hireable:"," ",_?c.a.createElement("i",{className:"fas fa-check text-success"}):c.a.createElement("i",{className:"fas fa-times-circle text-danger"}),c.a.createElement("div",{className:"card grid-2"},c.a.createElement("div",{className:"all-center"},c.a.createElement("img",{src:E,className:"round-img",style:{width:"150px"},alt:""}),c.a.createElement("h1",null," ","",m||c.a.createElement("p",null,"No Name Provided!")),c.a.createElement("p",null,d)),c.a.createElement("div",null,p&&c.a.createElement(c.a.Fragment,null,c.a.createElement("h3",null,"Bio"),c.a.createElement("p",null,p)),c.a.createElement("a",{href:h,className:"btn btn-dark my-1",target:"blank"},"Visit Github page"),c.a.createElement("ul",null,c.a.createElement("li",null,g&&c.a.createElement(c.a.Fragment,null,c.a.createElement("strong",null,"Username:"),g)),c.a.createElement("li",null,y&&c.a.createElement(c.a.Fragment,null,c.a.createElement("strong",null,"Company:"),y)),c.a.createElement("li",null,b&&c.a.createElement(c.a.Fragment,null,c.a.createElement("strong",null,"Website:"),c.a.createElement("a",{href:b,target:"blank"}," ",b)))))),c.a.createElement("div",{className:"text-center"},c.a.createElement("div",{className:"badge badge-primary"},"Following:",N),c.a.createElement("div",{className:"badge badge-success"},"Followers:",v),c.a.createElement("div",{className:"badge badge-light"},"public repos:",O),c.a.createElement("div",{className:"badge badge-dark"},"public gist:",R)),c.a.createElement(S,{repos:u}))};var P=function(){var e=Object(l.useState)(""),t=Object(p.a)(e,2),a=t[0],n=t[1],r=Object(l.useContext)(f),s=Object(l.useContext)(_);return c.a.createElement("div",null,c.a.createElement("form",{action:"",onSubmit:function(e){e.preventDefault(),""===a?s.setAlert("Please enter text","danger"):(r.searchUser(a),n(""))},className:"form"},c.a.createElement("input",{type:"text",name:"text",value:a,onChange:function(e){n(e.target.value)},plac:!0,eholder:"search"}),c.a.createElement("input",{type:"submit",value:"Search",className:"btn btn-dark btn-block",id:"spin"}),r.users.length>0&&c.a.createElement("button",{className:"btn btn-light btn-block",onClick:r.clearUsers},"Clear")))},F=function(e){var t=e.user,a=t.login,n=t.avatar_url,r=t.html_url;return c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"card text-center"},c.a.createElement("div",{className:"card-img"},c.a.createElement("img",{src:n,alt:"",className:"round-img",style:{width:"60px"}})),c.a.createElement("div",{className:"card-body"},c.a.createElement("div",{className:"card-title"},c.a.createElement("h3",null,a))),c.a.createElement(o.b,{to:"/user/".concat(a),className:"btn btn-dark"},"User"),c.a.createElement("a",{href:r,className:"btn btn-dark",target:"blank"},"More")))},B=function(){var e=Object(l.useContext)(f);return e.loading?c.a.createElement("div",{className:"all-center"},c.a.createElement(x,null)):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"row"},e.users.map(function(e){return c.a.createElement(F,{key:e.id,user:e})})))},G=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement(P,null),c.a.createElement(B,null))},D=function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Not Found"),c.a.createElement("p",null,"The page you are looking for does not exist"))},H=(a(59),function(){return c.a.createElement(N,null,c.a.createElement(O,null,c.a.createElement(o.a,null,c.a.createElement(c.a.Fragment,null,c.a.createElement(U,{title:"Friend Finder",icon:"fab fa-github"}),c.a.createElement("div",{className:"container"},c.a.createElement(C,null),c.a.createElement("h2",{className:"font-weight-bold"},"Find your next friend"),c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",component:G}),c.a.createElement(i.a,{exact:!0,path:"/about",component:j}),c.a.createElement(i.a,{exact:!0,path:"/user/:login",component:A}),c.a.createElement(i.a,{component:D})))))))});u.a.render(c.a.createElement(H,null),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.c3fc4e38.chunk.js.map