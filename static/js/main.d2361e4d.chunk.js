(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{215:function(e,t,a){e.exports=a(233)},221:function(e,t,a){},233:function(e,t,a){"use strict";a.r(t);var n=a(80),r=a.n(n);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(0),l=a.n(o),c=a(38),s=a(19),i=a(250),u=(a(220),a(221),a(16)),m=a(77),d=a(198),p={user:null};if(localStorage.getItem("jwtToken")){var b=Object(d.a)(localStorage.getItem("jwtToken"));1e3*b.exp<Date.now()?localStorage.removeItem("jwtToken"):p.user=b}var E=Object(o.createContext)({user:null,login:function(e){},logout:function(){}});function g(e,t){switch(t.type){case"LOGIN":return Object(m.a)(Object(m.a)({},e),{},{user:t.payload});case"LOGOUT":return Object(m.a)(Object(m.a)({},e),{},{user:null});default:return e}}function f(e){var t=Object(o.useReducer)(g,p),a=Object(u.a)(t,2),n=a[0],r=a[1];return l.a.createElement(E.Provider,Object.assign({value:{user:n.user,login:function(e){localStorage.setItem("jwtToken",e.token),r({type:"LOGIN",payload:e})},logout:function(){localStorage.removeItem("jwtToken"),r({type:"LOGOUT"})}}},e))}var v=a(206);var h=function(e){var t=e.component,a=Object(v.a)(e,["component"]),n=Object(o.useContext)(E).user;return l.a.createElement(s.b,Object.assign({},a,{render:function(e){return n?l.a.createElement(s.a,{to:"/social-app/"}):l.a.createElement(t,e)}}))},j=a(253);var O=function(){var e=Object(o.useContext)(E),t=e.user,a=e.logout,n=window.location.pathname,r="/social-app/"===n?"home":n.substr(1),s=Object(o.useState)(r),i=Object(u.a)(s,2),m=i[0],d=i[1],p=function(e,t){var a=t.name;return d(a)};return t?l.a.createElement(j.a,{tabular:!0,color:"teal"},l.a.createElement(j.a.Item,{name:t.username,active:!0,as:c.b,to:"/social-app/"}),l.a.createElement(j.a.Item,{name:"favourite",active:!0,as:c.b,to:"/social-app/favourite"}),l.a.createElement(j.a.Menu,{position:"right"},l.a.createElement(j.a.Item,{name:"logout",onClick:a}))):l.a.createElement(j.a,{tabular:!0,color:"teal"},l.a.createElement(j.a.Item,{name:"home",active:"home"===m,onClick:p,as:c.b,to:"/social-app/"}),l.a.createElement(j.a.Menu,{position:"right"},l.a.createElement(j.a.Item,{name:"login",active:"login"===m,onClick:p,as:c.b,to:"/social-app/login"}),l.a.createElement(j.a.Item,{name:"register",active:"register"===m,onClick:p,as:c.b,to:"/social-app/register"})))},C=a(17),y=a(259),w=a(254),I=a(256),k=a(203),P=a(257),S=a(110),$=a(154),x=a(117),N=a.n(x),A=a(29),L=a(18),D=a.n(L),M=a(251);var R=function(e){var t=e.content,a=e.children;return l.a.createElement(M.a,{inverted:!0,content:t,trigger:a})};function Q(){var e=Object(A.a)(["\nmutation likePost($postId: ID!){\n  likePost(postId: $postId){\n    id\n    likes{\n      id username\n    }\n    likeCount\n  }\n}\n"]);return Q=function(){return e},e}var T=D()(Q()),U=function(e){var t=e.user,a=e.post,n=a.id,r=a.likeCount,s=a.likes,i=Object(o.useState)(!1),m=Object(u.a)(i,2),d=m[0],p=m[1];Object(o.useEffect)((function(){t&&s.find((function(e){return e.username===t.username}))?p(!0):p(!1)}),[t,s]);var b=Object(C.useMutation)(T,{variables:{postId:n}}),E=Object(u.a)(b,1)[0],g=t?d?l.a.createElement(P.a,{color:"teal"},l.a.createElement(S.a,{name:"heart"})):l.a.createElement(P.a,{color:"teal",basic:!0},l.a.createElement(S.a,{name:"heart"})):l.a.createElement(P.a,{as:c.b,to:"/social-app/login",color:"teal",basic:!0},l.a.createElement(S.a,{name:"heart"}));return l.a.createElement(P.a,{as:"div",labelPosition:"right",onClick:E},l.a.createElement(R,{content:d?"Unlike":"Like it!"},g),l.a.createElement($.a,{basic:!0,color:"teal",pointing:"left"},r))},G=a(255);function q(){var e=Object(A.a)(["\n{\ngetPosts{\n  id\n  body\n  createdAt\n  username\n  likeCount\n  likes{\n    username\n  }\n  commentCount\n  comments{\n    id\n    username\n    createdAt\n    body\n  }\n}\n}\n"]);return q=function(){return e},e}var B=D()(q());function H(){var e=Object(A.a)(["\nmutation deleteComment($postId: ID!, $commentId: ID!){\n  deleteComment(postId: $postId, commentId: $commentId){\n    id\n    comments{\n      id username createdAt body\n    }\n    commentCount\n  }\n}\n\n"]);return H=function(){return e},e}function z(){var e=Object(A.a)(["\nmutation deletePost($postId: ID!){\n  deletePost(postId: $postId)\n}\n"]);return z=function(){return e},e}var F=D()(z()),W=D()(H()),J=function(e){var t=e.postId,a=e.commentId,n=e.callback,r=Object(o.useState)(!1),c=Object(u.a)(r,2),s=c[0],i=c[1],m=a?W:F,d=Object(C.useMutation)(m,{update:function(e){if(i(!1),!a){var r=e.readQuery({query:B});e.writeQuery({query:B,data:{getPosts:r.getPosts.filter((function(e){return e.id!==t}))}})}n&&n()},variables:{postId:t,commentId:a}}),p=Object(u.a)(d,1)[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement(R,{content:a?"Delete comment":"Delete post"},l.a.createElement(P.a,{as:"div",color:"red",floated:"right",onClick:function(){return i(!0)}},l.a.createElement(S.a,{name:"trash",style:{margin:0}}))),l.a.createElement(G.a,{open:s,onCancel:function(){return i(!1)},onConfirm:p}))};var V=function(e){var t=e.post,a=t.body,n=t.createdAt,r=t.id,s=t.username,i=t.likeCount,u=t.commentCount,m=t.likes,d=Object(o.useContext)(E).user;return l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Content,null,l.a.createElement(k.a,{floated:"right",size:"mini",src:"https://react.semantic-ui.com/images/avatar/large/matthew.png"}),l.a.createElement(I.a.Header,null,s),l.a.createElement(I.a.Meta,{as:c.b,to:"/social-app/posts/".concat(r)},N()(n).fromNow(!0)),l.a.createElement(I.a.Description,null,a)),l.a.createElement(I.a.Content,{extra:!0},l.a.createElement(U,{user:d,post:{id:r,likes:m,likeCount:i}}),l.a.createElement(R,{content:"Comment post"},l.a.createElement(P.a,{labelPosition:"right",as:c.b,to:"/social-app/posts/".concat(r)},l.a.createElement(P.a,{color:"blue",basic:!0},l.a.createElement(S.a,{name:"comments"})),l.a.createElement($.a,{basic:!0,color:"blue",pointing:"left"},u))),d&&d.username===s&&l.a.createElement(J,{postId:r})))},K=a(204),X=a(252),Y=a(129),Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=Object(o.useState)(t),n=Object(u.a)(a,2),r=n[0],l=n[1],c=function(e){l(Object(m.a)(Object(m.a)({},r),{},Object(Y.a)({},e.target.name,e.target.value)))},s=function(t){t.preventDefault(),e()};return{onChange:c,onSubmit:s,values:r}};function _(){var e=Object(A.a)(["\n  mutation createPost($body: String!) {\n    createPost(body: $body) {\n      id\n      body\n      createdAt\n      username\n      likes {\n        id\n        username\n        createdAt\n      }\n      likeCount\n      comments {\n        id\n        body\n        username\n        createdAt\n      }\n      commentCount\n    }\n  }\n"]);return _=function(){return e},e}var ee=D()(_()),te=function(){var e=Z((function(){c()}),{body:""}),t=e.values,a=e.onChange,n=e.onSubmit,r=Object(C.useMutation)(ee,{variables:t,update:function(e,a){var n=e.readQuery({query:B});e.writeQuery({query:B,data:{getPosts:[a.data.createPost].concat(Object(K.a)(n.getPosts))}}),t.body=""},onError:function(e){return e}}),o=Object(u.a)(r,2),c=o[0],s=o[1].error;return l.a.createElement(l.a.Fragment,null,l.a.createElement(X.a,{onSubmit:n},l.a.createElement("h2",null,"Create a post:"),l.a.createElement(X.a.Field,null,l.a.createElement(X.a.Input,{placeholder:"Hi World",name:"body",onChange:a,value:t.body,error:!!s}),l.a.createElement(P.a,{type:"submit",color:"teal"},"Submit"))),s&&l.a.createElement("div",{className:"ui error message",style:{marginBottom:20}},l.a.createElement("ul",{className:"list"},l.a.createElement("li",null,s.graphQLErrors[0].message))))};var ae=function(){var e=Object(o.useContext)(E).user,t=Object(C.useQuery)(B),a=t.loading,n=t.data,r=(n=void 0===n?{}:n).getPosts;return l.a.createElement(y.a,{columns:3},l.a.createElement(y.a.Row,{className:"page-title"},l.a.createElement("h1",null,"Recent Posts")),l.a.createElement(y.a.Row,null,e&&l.a.createElement(y.a.Column,null,l.a.createElement(te,null)),a?l.a.createElement("h1",null,"Loading posts..."):l.a.createElement(w.a.Group,null,r&&r.map((function(e){return l.a.createElement(y.a.Column,{key:e.id,style:{marginBottom:20}},l.a.createElement(V,{post:e}))})))))};var ne=function(){var e=Object(o.useContext)(E).user,t=Object(C.useQuery)(B),a=t.loading,n=t.data,r=(n=void 0===n?{}:n).getPosts;return l.a.createElement(y.a,{columns:3},l.a.createElement(y.a.Row,{className:"page-title"},l.a.createElement("h1",null,"Recent Posts")),l.a.createElement(y.a.Row,null,a?l.a.createElement("h1",null,"Loading posts..."):l.a.createElement(w.a.Group,null,r&&r.filter((function(t){return t.likes.map((function(e){return e.username})).find((function(t){return t===e.username}))})).map((function(e){return l.a.createElement(y.a.Column,{key:e.id,style:{marginBottom:20}},l.a.createElement(V,{post:e}))})))))};function re(){var e=Object(A.a)(["\nmutation login(\n  $username: String!\n  $password: String!\n\n) {\n  login(\n      username: $username\n      password: $password\n\n  ){\n    id email username createdAt token\n  }\n}\n"]);return re=function(){return e},e}var oe=D()(re()),le=function(e){var t=Object(o.useContext)(E),a=Object(o.useState)({}),n=Object(u.a)(a,2),r=n[0],c=n[1],s=Z((function(){g()}),{username:"",password:""}),i=s.onChange,m=s.onSubmit,d=s.values,p=Object(C.useMutation)(oe,{update:function(a,n){var r=n.data.login;t.login(r),e.history.push("/social-app/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),b=Object(u.a)(p,2),g=b[0],f=b[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement(X.a,{onSubmit:m,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Login"),l.a.createElement(X.a.Input,{label:"Username",placehodler:"Username",name:"username",type:"text",value:d.username,error:!!r.username,onChange:i}),l.a.createElement(X.a.Input,{label:"Password",placehodler:"Password",name:"password",type:"password",value:d.password,error:!!r.password,onChange:i}),l.a.createElement(P.a,{type:"submit",primary:!0},"Login")),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return l.a.createElement("li",{key:e},e)})))))};function ce(){var e=Object(A.a)(["\nmutation register(\n  $username: String!\n  $email: String!\n  $password: String!\n  $confirmPassword: String!\n\n) {\n  register(\n    registerInput: {\n      username: $username\n      email: $email\n      password: $password\n      confirmPassword: $confirmPassword\n    }\n  ){\n    id email username createdAt token\n  }\n}\n"]);return ce=function(){return e},e}var se=D()(ce()),ie=function(e){var t=Object(o.useContext)(E),a=Object(o.useState)({}),n=Object(u.a)(a,2),r=n[0],c=n[1],s=Z((function(){g()}),{username:"",password:"",email:"",confirmPassword:""}),i=s.onChange,m=s.onSubmit,d=s.values,p=Object(C.useMutation)(se,{update:function(a,n){var r=n.data.register;t.login(r),e.history.push("/social-app/")},onError:function(e){c(e.graphQLErrors[0].extensions.exception.errors)},variables:d}),b=Object(u.a)(p,2),g=b[0],f=b[1].loading;return l.a.createElement("div",{className:"form-container"},l.a.createElement(X.a,{onSubmit:m,noValidate:!0,className:f?"loading":""},l.a.createElement("h1",null,"Register"),l.a.createElement(X.a.Input,{label:"Username",placehodler:"Username",name:"username",type:"text",value:d.username,error:!!r.username,onChange:i}),l.a.createElement(X.a.Input,{label:"Email",placehodler:"Email",name:"email",type:"email",value:d.email,error:!!r.email,onChange:i}),l.a.createElement(X.a.Input,{label:"Password",placehodler:"Password",name:"password",type:"password",value:d.password,error:!!r.password,onChange:i}),l.a.createElement(X.a.Input,{label:"Confirm Password",placehodler:"Confirm Password",name:"confirmPassword",type:"password",value:d.confirmPassword,error:!!r.confirmPassword,onChange:i}),l.a.createElement(P.a,{type:"submit",primary:!0},"Register")),Object.keys(r).length>0&&l.a.createElement("div",{className:"ui error message"},l.a.createElement("ul",{className:"list"},Object.values(r).map((function(e){return l.a.createElement("li",{key:e},e)})))))};function ue(){var e=Object(A.a)(["\nquery($postId: ID!){\n  getPost(postId: $postId){\n    id\n    body\n    createdAt\n    username\n    likeCount\n    likes{\n      username\n    }\n    commentCount\n    comments{\n      id\n      username\n      createdAt\n      body\n    }\n  }\n}\n"]);return ue=function(){return e},e}function me(){var e=Object(A.a)(["\nmutation($postId: ID!, $body: String!){\n  createComment(postId: $postId, body: $body){\n    id\n    comments {\n      id body createdAt username\n    }\n    commentCount\n  }\n}\n\n"]);return me=function(){return e},e}var de=D()(me()),pe=D()(ue()),be=function(e){var t,a=e.match.params.postId,n=Object(o.useContext)(E).user,r=Object(o.useRef)(null),c=Object(o.useState)(""),s=Object(u.a)(c,2),i=s[0],m=s[1],d=Object(C.useQuery)(pe,{variables:{postId:a}}).data,p=(d=void 0===d?{}:d).getPost,b=Object(C.useMutation)(de,{update:function(){m(""),r.current.blur()},variables:{postId:a,body:i}}),g=Object(u.a)(b,1)[0];if(p){var f=p.id,v=p.body,h=p.createdAt,j=p.username,O=p.comments,w=p.likes,x=p.likeCount,A=p.commentCount;t=l.a.createElement(y.a,null,l.a.createElement(y.a.Row,null,l.a.createElement(y.a.Column,{width:2},l.a.createElement(k.a,{src:"https://react.semantic-ui.com/images/avatar/large/matthew.png",size:"small",float:"right"})),l.a.createElement(y.a.Column,{width:10},l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Content,null,l.a.createElement(I.a.Header,null,j),l.a.createElement(I.a.Meta,null,N()(h).fromNow()),l.a.createElement(I.a.Description,null,v)),l.a.createElement("hr",null),l.a.createElement(I.a.Content,{extra:!0},l.a.createElement(U,{user:n,post:{id:f,likeCount:x,likes:w}}),l.a.createElement(R,{content:"Comment on post"},l.a.createElement(P.a,{as:"div",labelPosition:"right",onClick:function(){return console.log("Comment on Post")}},l.a.createElement(P.a,{basic:!0,color:"blue"},l.a.createElement(S.a,{name:"comments"})),l.a.createElement($.a,{basic:!0,color:"blue",pointing:"left"},A))),n&&n.username===j&&l.a.createElement(J,{postId:f,callback:function(){e.history.push("/social-app/")}}))),n&&l.a.createElement(I.a,{fluid:!0},l.a.createElement(I.a.Content,null,l.a.createElement("p",null,"Post a comment"),l.a.createElement(X.a,null,l.a.createElement("div",{className:"ui action input fluid"},l.a.createElement("input",{type:"text",placeholder:"Comment",name:"comment",value:i,onChange:function(e){return m(e.target.value)},ref:r}),l.a.createElement("button",{type:"submit",className:"ui button teal",disabled:""===i.trim(),onClick:g},"Submit"))))),O.map((function(e){return l.a.createElement(I.a,{fluid:!0,key:e.id},l.a.createElement(I.a.Content,null,n&&n.username===e.username&&l.a.createElement(J,{postId:f,commentId:e.id}),l.a.createElement(I.a.Header,null,e.username),l.a.createElement(I.a.Meta,null,N()(e.createdAt).fromNow()),l.a.createElement(I.a.Description,null,e.body)))})))))}else t=l.a.createElement("p",null,"Loading post...");return t};var Ee=function(){return l.a.createElement(f,null,l.a.createElement(c.a,null,l.a.createElement(i.a,null,l.a.createElement(O,null),l.a.createElement(s.b,{exact:!0,path:"/social-app/",component:ae}),l.a.createElement(s.b,{exact:!0,path:"/social-app/favourite",component:ne}),l.a.createElement(h,{exact:!0,path:"/social-app/login",component:le}),l.a.createElement(h,{exact:!0,path:"/social-app/register",component:ie}),l.a.createElement(s.b,{exact:!0,path:"/social-app/posts/:postId",component:be}))))},ge=a(205),fe=Object(C.createHttpLink)({uri:"https://warm-cove-91073.herokuapp.com/"}),ve=Object(ge.a)((function(){var e=localStorage.getItem("jwtToken");return{headers:{Authorization:e?"user ".concat(e):""}}})),he=new C.ApolloClient({link:ve.concat(fe),cache:new C.InMemoryCache}),je=l.a.createElement(C.ApolloProvider,{client:he},l.a.createElement(Ee,null));r.a.render(je,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[215,1,2]]]);
//# sourceMappingURL=main.d2361e4d.chunk.js.map