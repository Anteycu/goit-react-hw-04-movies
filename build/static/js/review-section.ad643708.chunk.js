(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[6],{37:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(0),r=n.n(a);n(38);function c(e){var t=e.message;return window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"Container"},r.a.createElement("h1",{className:"Notification"},t)))}},38:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var a=n(13),r=n(14),c=n(16),o=n(15),l=n(0),i=n.n(l),u=n(34),s=n(37),m=function(e){Object(c.a)(n,e);var t=Object(o.a)(n);function n(){var e;Object(a.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={reviews:[]},e}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this;Object(u.c)(this.props.match.params.movieId).then((function(t){return e.setState({reviews:t})}))}},{key:"render",value:function(){var e=this.state.reviews;return i.a.createElement("div",null,e>0?i.a.createElement(i.a.Fragment,null,i.a.createElement("h2",null,"Welcome on Review component"),i.a.createElement("ul",null,e.map((function(e){return i.a.createElement("li",{key:e.id},i.a.createElement("p",null,e.author),i.a.createElement("p",null,e.content))})))):i.a.createElement(s.a,{message:"Sorry, but we haven't ".concat(Object.keys(this.state))}))}}]),n}(l.Component)}}]);
//# sourceMappingURL=review-section.ad643708.chunk.js.map