(this.webpackJsonpfirst_project=this.webpackJsonpfirst_project||[]).push([[4],{34:function(e,t,a){"use strict";a.d(t,"d",(function(){return i})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return l})),a.d(t,"c",(function(){return u})),a.d(t,"e",(function(){return m}));var n=a(35),c=a.n(n),r="https://api.themoviedb.org/3",o="74deffb283af53f0c578a6d4e99eab77",i=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return fetch("".concat(r,"/search/movie?api_key=").concat(o,"&query=").concat(e,"&page=").concat(t)).then((function(e){return e.json()})).then((function(e){return e.results}))},s=function(e){return c.a.get("".concat(r,"/movie/").concat(e,"?api_key=").concat(o)).then((function(e){return e.data}))},l=function(e){return c.a.get("".concat(r,"/movie/").concat(e,"/credits?api_key=").concat(o)).then((function(e){return e.data.cast}))},u=function(e){return c.a.get("".concat(r,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1")).then((function(e){return e.data.results}))},m=function(){return fetch("".concat(r,"/trending/movie/day?api_key=").concat(o)).then((function(e){return e.json()})).then((function(e){return e.results}))}},79:function(e,t,a){},83:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var n=a(13),c=a(14),r=a(16),o=a(15),i=a(0),s=a.n(i),l=a(8),u=a(1),m=a(34),p=a(6),h=(a(79),Object(i.lazy)((function(){return a.e(1).then(a.bind(null,80))}))),f=Object(i.lazy)((function(){return a.e(6).then(a.bind(null,81))})),v=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(){var e;Object(n.a)(this,a);for(var c=arguments.length,r=new Array(c),o=0;o<c;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={movie:null},e.handleGoBack=function(){var t=e.props.location.state;if(t&&t.from)return e.props.history.push(t.from);e.props.history.push(p.a.home)},e.movieImgUrl=function(){return"https://image.tmdb.org/t/p/w400".concat(e.state.movie.poster_path)},e}return Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;Object(m.b)(this.props.match.params.movieId).then((function(t){return e.setState({movie:t})}))}},{key:"render",value:function(){var e=this.state.movie,t=this.props.match;return s.a.createElement("div",null,s.a.createElement("p",null,"Welcome on MovieDetailsPage component"),s.a.createElement("button",{className:"Button",onClick:this.handleGoBack,type:"button"},"Back to list"),s.a.createElement("hr",null),e&&s.a.createElement("div",{className:"Container"},s.a.createElement("img",{className:"ImageItem-image",src:"".concat(this.movieImgUrl()),alt:e.original_title}),s.a.createElement("div",{className:"Info"},s.a.createElement("h1",{className:"Title"},e.original_title),s.a.createElement("h2",{className:"Overview"},"Overview"),s.a.createElement("p",{className:"Overview-item"},e.overview),s.a.createElement("h2",{className:"Date "},"Release date"),s.a.createElement("p",{className:"Date-item "},e.release_date),s.a.createElement("h2",{className:"Rating "},"Rating"),s.a.createElement("p",{className:"Rating-item "},e.vote_average)),s.a.createElement("ul",{className:"Nav-list"},s.a.createElement("li",{className:"Nav-item"},s.a.createElement(l.c,{className:"Button",exact:!0,to:{pathname:"".concat(t.url,"/cast"),state:{from:this.props.location}}},"Cast")),s.a.createElement("li",{className:"Nav-item"},s.a.createElement(l.c,{className:"Button",to:{pathname:"".concat(t.url,"/reviews"),state:{from:this.props.location}}},"Reviews")))),s.a.createElement(i.Suspense,{fallback:s.a.createElement("h2",null,"Loading...")},s.a.createElement(u.d,null,s.a.createElement(u.b,{path:"".concat(t.path,"/cast"),component:h}),s.a.createElement(u.b,{path:"".concat(t.path,"/reviews"),component:f}))))}}]),a}(i.Component)}}]);
//# sourceMappingURL=movieDetailsPage-section.52ac6010.chunk.js.map