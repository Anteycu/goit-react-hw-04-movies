(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[0],{77:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var a=n(0),r=n.n(a);n(78);function c(t){var e=t.message;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"Notification"},e)))}},78:function(t,e,n){},79:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return m}));var a=n(8),r=n(9),c=n(11),l=n(10),o=n(0),i=n.n(o),s=n(13),u=n(77),m=function(t){Object(c.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(t=e.call.apply(e,[this].concat(c))).state={cast:[]},t.castImgUrl=function(t){if(t)return"https://image.tmdb.org/t/p/w400".concat(t);console.log("Still havent imgPath")},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;Object(s.a)(this.props.match.params.movieId).then((function(e){return t.setState({cast:e})}))}},{key:"render",value:function(){var t=this,e=this.state.cast;return i.a.createElement("div",null,e.length>0?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Welcome on Cast component"),i.a.createElement("ul",null,e.map((function(n){return i.a.createElement("li",{key:n.id},i.a.createElement("img",{src:"".concat(t.castImgUrl(n.profile_path)),alt:e.original_title}),i.a.createElement("p",null,n.character),i.a.createElement("p",null,n.name))})))):i.a.createElement(u.a,{message:"Sorry, but we haven't ".concat(Object.keys(this.state))}))}}]),n}(o.Component)}}]);
//# sourceMappingURL=cast-section.fd422699.chunk.js.map