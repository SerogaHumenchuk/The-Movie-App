(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(28),c=a.n(o),i=a(10),s=a(20),_=a(14),l=(a(72),a(52)),m=a.n(l),p=a(5),u=a(6),d=a(8),E=a(7),h=a(9),v=a(21),f=a.n(v),C={FETCH_REQUEST_POPULAR:"FETCH_REQUEST_POPULAR",FETCH_SUCCESS_POPULAR:"FETCH_SUCCESS_POPULAR",FETCH_ERROR_POPULAR:"FETCH_ERROR_POPULAR",FETCH_REQUEST_MOVIE_BY_ID:"FETCH_REQUEST_MOVIE_BY_ID",FETCH_SUCCESS_MOVIE_BY_ID:"FETCH_SUCCESS_MOVIE_BY_ID",FETCH_ERROR_MOVIE_BY_ID:"FETCH_ERROR_MOVIE_BY_ID",FETCH_REQUEST_GENRES:"FETCH_REQUEST_GENRES",FETCH_SUCCESS_GENRES:"FETCH_SUCCESS_GENRES",FETCH_ERROR_GENRES:"FETCH_ERROR_GENRES",FETCH_REQUEST_SEARCH_MOVIE:"FETCH_REQUEST_SEARCH_MOVIE",FETCH_SUCCESS_SEARCH_MOVIE:"FETCH_SUCCESS_SEARCH_MOVIE",FETCH_ERROR_SEARCH_MOVIE:"FETCH_ERROR_SEARCH_MOVIE",FETCH_REQUEST_REACOMMENDATIONS:"FETCH_REQUEST_REACOMMENDATIONS",FETCH_SUCCESS_REACOMMENDATIONS:"FETCH_SUCCESS_REACOMMENDATIONS",FETCH_ERROR_REACOMMENDATIONS:"FETCH_ERROR_REACOMMENDATIONS",FETCH_REQUEST_ACTORS_INFO:"FETCH_REQUEST_ACTORS_INFO",FETCH_SUCCESS_ACTORS_INFO:"FETCH_SUCCESS_ACTORS_INFO",FETCH_ERROR_ACTORS_INFO:"FETCH_ERROR_ACTORS_INFO"},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"popularity.desc",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(n){n({type:C.FETCH_REQUEST_POPULAR}),f.a.get("https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&sort_by=".concat(e,"&include_adult=false&page=").concat(a).concat(t)).then(function(e){n(function(e){return{type:C.FETCH_SUCCESS_POPULAR,payload:{data:e}}}(e.data)),console.log(e.request.responseURL)}).catch(function(e){return n(function(e){return{type:C.FETCH_ERROR_POPULAR,payload:{error:e}}}(e))})}},S=function(e){return e.movies.results},O=function(e){return e.movieById},b=function(e){return e.genres},R=function(e){return e.recommendations.results},y=function(e){return e.movieById.videos},T=function(e){return e.movieById.credits},M=function(e){return e.actor.person},N=a(40),I=a(32),k=a(53),H=a.n(k),A=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!!a.props.open&&a.props.open,color:a.props.color?a.props.color:"black"},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState(function(e){return{open:!e.open}})}},{key:"render",value:function(){var e=this,t={line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return r.a.createElement("button",{type:"button",className:H.a.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},r.a.createElement("div",{style:Object(I.a)({},t.line,t.lineTop)}),r.a.createElement("div",{style:Object(I.a)({},t.line,t.lineMiddle)}),r.a.createElement("div",{style:Object(I.a)({},t.line,t.lineBottom)}))}}]),t}(n.Component),F=a(23),U=a.n(F),P=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!!a.props.open&&a.props.open},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e=this.props,t=e.search,a=e.handleSubmit,n=e.handleChange,o=e.children,c=e.open;return r.a.createElement("div",null,r.a.createElement("div",{className:c?U.a.container__open:U.a.container__close},this.state.open?r.a.createElement("div",{className:U.a.menu__list},r.a.createElement("form",{onSubmit:a,className:U.a.form__search},r.a.createElement("input",{className:U.a.search__input,onChange:n,type:"text",placeholder:"Search",value:t})),o):null))}}]),t}(n.Component),j=a(19),w=a.n(j),B=a(54),D=a.n(B),x=[{name:"Popularity",sortUrl:"popularity.desc"},{name:"Top rated",sortUrl:"vote_count.desc"},{name:"Latest",sortUrl:"release_date.desc"},{name:"Now playing",sortUrl:"revenue.desc"}],L=function(e){var t=e.genres,a=e.search,n=e.handleSubmit,o=e.handleChange,c=e.handleMenuClick,s=e.menuOpen,_=e.getId,l=x.map(function(e){return r.a.createElement(i.b,{key:e.name,className:w.a.link,onClick:function(){c(),_(e.id)},to:"/movie/".concat(e.sortUrl)},e.name)}),m=t.map(function(e){return r.a.createElement(i.b,{key:e.id,className:w.a.link,onClick:function(){c(),_(e.id)},to:"/genre/".concat(e.id)},e.name)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:w.a.container},r.a.createElement(A,{open:s,onClick:function(){return c()},color:"white"}),r.a.createElement("a",{href:"/The-Movie-App/",className:w.a.logo},r.a.createElement("img",{src:D.a,alt:""}))),r.a.createElement(P,{open:s,search:a,handleSubmit:n,handleChange:o},r.a.createElement("div",{className:w.a.categories__container},r.a.createElement("div",{className:w.a.categories__sort}," ",r.a.createElement("h3",null,"Sort By:"),Object(N.a)(l)),r.a.createElement("div",{className:w.a.categories__sort},r.a.createElement("h3",null,"Genres:"),Object(N.a)(m)))))},V=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",menuOpen:!1},a.handleMenuClick=function(){a.setState(function(e){return{menuOpen:!e.menuOpen}})},a.handleLinkClick=function(){return a.setState({menuOpen:!1})},a.handleChange=function(e){return a.setState({search:e.target.value})},a.handleSubmit=function(e){var t=a.state.search;e.preventDefault(),a.props.fetchSuccessSearchMovie(t),a.setState({search:""}),a.handleMenuClick()},a.getId=function(e){return a.props.fetchSuccessMovies("&with_genres=".concat(e))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSuccessGenres(),this.props.fetchSuccessSearchMovie(this.state.search)}},{key:"render",value:function(){var e=this.state,t=e.search,a=e.menuOpen,n=this.props,o=n.genres,c=n.searchMovie,i=n.movies;return r.a.createElement(L,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,search:t,searchMovie:c,movies:i,getId:this.getId,genres:o,handleMenuClick:this.handleMenuClick,handleLinkClick:this.handleLinkClick,menuOpen:a})}}]),t}(n.Component),Q={fetchSuccessGenres:function(){return function(e){e({type:C.FETCH_REQUEST_GENRES}),f.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=5874acfd11651a28c55771624f7021f4&language=en-US").then(function(t){var a=t.data;return e(function(e){return{type:C.FETCH_SUCCESS_GENRES,payload:{data:e}}}(a))}).catch(function(t){return e(function(e){return{type:C.FETCH_ERROR_GENRES,payload:{error:e}}}(t))})}},fetchSuccessSearchMovie:function(e){return function(t){t({type:C.FETCH_REQUEST_SEARCH_MOVIE}),f.a.get("https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then(function(e){var a=e.data;return t(function(e){return{type:C.FETCH_SUCCESS_SEARCH_MOVIE,payload:{data:e}}}(a))}).catch(function(e){return t(function(e){return{type:C.FETCH_ERROR_SEARCH_MOVIE,payload:{error:e}}}(e))})}},fetchSuccessMovies:g},G=Object(_.b)(function(e){return{genres:b(e),movies:S(e)}},Q)(V),Y=a(30),J=a.n(Y),W=a(56),z=a.n(W),K=a(15),q=a.n(K),X=a(22),Z=a.n(X),$=function(e){return e<5?"orangered":e<8?"#55dd44":"blue"},ee=function(e){var t=e.movies;return r.a.createElement("ul",{className:q.a.list},t&&t.map(function(e){return r.a.createElement("li",{className:q.a.item,key:e.id},r.a.createElement(i.b,{className:q.a.moreInfo,to:"/movieId/".concat(e.id)},r.a.createElement("div",{className:q.a.topInfo},r.a.createElement("div",{className:q.a.titleContainer},r.a.createElement("h2",{className:q.a.title}," ",e.title),r.a.createElement("p",null,e.release_date)),r.a.createElement("div",{className:q.a.CircularProgressbar__container},r.a.createElement(J.a,{percentage:10*e.vote_average,variant:"determinate",text:"".concat(e.vote_average),background:!0,backgroundPadding:5,styles:{background:{fill:"transparent"},text:{fill:$(e.vote_average),fontSize:"25px",transform:"translate(-18px, 6px)",fontWeight:"700"},path:{stroke:$(e.vote_average)},trail:{stroke:"transparent"}}}))),e.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:""}):r.a.createElement("img",{className:q.a.myPhoto,src:Z.a,alt:""})))}),t&&t.length?null:r.a.createElement("div",{className:q.a.notFounded__container},r.a.createElement(z.a,{type:"Oval",color:"#ff4400",height:"150",width:"150"})))},te=a(57),ae=a.n(te),ne=a(26),re=a.n(ne),oe=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.id;return r.a.createElement("div",null,r.a.createElement(ae.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:re.a.breakMe,pageCount:99,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(a){return e.props.fetchSuccessMovies(t&&t,a.selected)},containerClassName:re.a.container,subContainerClassName:re.a.pages,activeClassName:re.a.active}))}}]),t}(n.Component),ce={fetchSuccessMovies:g},ie=Object(_.b)(null,ce)(oe),se=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSuccessMovies("popularity.desc")}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.match.params.id&&this.props.fetchSuccessMovies("&with_genres=".concat(this.props.match.params.id)),this.props.match.params.id!==e.match.params.id&&this.props.fetchSuccessMovies("&with_genres=".concat(this.props.match.params.id)),this.props.match.params.sort!==e.match.params.sort&&this.props.fetchSuccessMovies(this.props.match.params.sort)}},{key:"render",value:function(){return r.a.createElement("div",{className:q.a.container},r.a.createElement(G,null),r.a.createElement(ee,{movies:this.props.movies}),r.a.createElement(ie,{id:this.props.match.params.id,sort:this.props.match.params.sort}))}}]),t}(n.Component),_e={fetchSuccessMovies:g},le=Object(_.b)(function(e){return{movies:S(e),genres:b(e)}},_e)(se),me=a(58),pe=a(39),ue=a.n(pe),de=(a(146),a(3)),Ee=a.n(de),he=function(e){var t=e.movieById,a=e.recommendations,n=e.trailers,o=e.actors,c=e.choseOption,s=e.option,_=n&&n.results.map(function(e){return r.a.createElement(me.a,{className:Ee.a.video,videoId:e.key})});return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},className:Ee.a.background__container},r.a.createElement("div",{className:Ee.a.shadow},r.a.createElement(i.b,{to:"/",className:Ee.a.btnComeBack},"\u2190 Back to main"),r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("h3",null,t.tagline)),r.a.createElement("p",{className:Ee.a.overview},t.overview)))),r.a.createElement("div",{className:Ee.a.content__container},r.a.createElement("h2",{className:Ee.a.title_container},"Top Billed Cast"),r.a.createElement("ul",{className:Ee.a.actors__list},o&&o.cast.slice(0,10).map(function(e){return r.a.createElement("li",{key:e.credit_id},r.a.createElement(i.b,{to:"/actor/".concat(e.credit_id),className:Ee.a.actor__navlink},r.a.createElement("h4",null,e.name),r.a.createElement("h5",null,e.character),e.profile_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:""}):r.a.createElement("img",{src:Z.a,alt:""})))})),r.a.createElement("div",{className:Ee.a.video__container},r.a.createElement("h2",{className:Ee.a.title_container},"Videos"),r.a.createElement(ue.a,{className:Ee.a.carusel,items:_,responsive:{0:{items:0},767:{items:1}},fadeOutAnimation:!0,mouseDragEnabled:!0,buttonsDisabled:!0})),r.a.createElement("div",{className:Ee.a.btn__container},r.a.createElement("button",{className:"recommendations"===s?Ee.a.btnOption__after:Ee.a.btnOption__afterTransparent,type:"button","data-partUrl":"recommendations",onClick:c},"Recommendations"),r.a.createElement("button",{className:"similar"===s?Ee.a.btnOption__after:Ee.a.btnOption__afterTransparent,type:"button","data-partUrl":"similar",onClick:c},"Similar")),a&&r.a.createElement("div",{className:Ee.a.video__container},r.a.createElement(ue.a,{className:Ee.a.carusel,items:a.map(function(e){return r.a.createElement("div",{className:Ee.a.recommend__item,key:e.id},r.a.createElement(i.b,{to:"/movieId/".concat(e.id)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:""})))}),responsive:{0:{items:0},600:{items:2},1023:{items:3},1439:{items:4},1679:{items:5}},fadeOutAnimation:!0,mouseDragEnabled:!0,buttonsDisabled:!0,autoPlayInterval:3e3,autoPlayDirection:"lrt",autoPlay:!0}))))},ve=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={option:"recommendations"},a.handleChoseOption=function(e){return a.setState({option:e.target.attributes.getNamedItem("data-partUrl").value})},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSuccessMovieById(this.props.match.params.id),this.props.fetchRecommendationsById(this.props.match.params.id,this.state.option)}},{key:"componentDidUpdate",value:function(e,t){var a=this.state.option;this.props.match.params.id!==e.match.params.id&&(this.props.fetchSuccessMovieById(this.props.match.params.id),this.props.fetchRecommendationsById(this.props.match.params.id,a)),a!==t.option&&this.props.fetchRecommendationsById(this.props.match.params.id,a)}},{key:"render",value:function(){var e=this.props,t=e.movieById,a=e.recommendations,n=e.trailers,o=e.actors,c=this.state.option;return r.a.createElement("div",{className:Ee.a.main__container},r.a.createElement(he,{movieById:t,recommendations:a,trailers:n,actors:o,choseOption:this.handleChoseOption,option:c}))}}]),t}(n.Component),fe={fetchSuccessMovieById:function(e){return function(t){t({type:C.FETCH_REQUEST_MOVIE_BY_ID}),f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=5874acfd11651a28c55771624f7021f4&append_to_response=credits,videos&language=en-US")).then(function(e){var a=e.data;return t(function(e){return{type:C.FETCH_SUCCESS_MOVIE_BY_ID,payload:{data:e}}}(a))}).catch(function(e){return t(function(e){return{type:C.FETCH_ERROR_MOVIE_BY_ID,payload:{error:e}}}(e))})}},fetchRecommendationsById:function(e,t){return function(a){a({type:C.FETCH_REQUEST_REACOMMENDATIONS}),f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/").concat(t,"?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&page=1")).then(function(e){var t=e.data;return a(function(e){return{type:C.FETCH_SUCCESS_REACOMMENDATIONS,payload:{data:e}}}(t))}).catch(function(e){return a(function(e){return{type:C.FETCH_ERROR_REACOMMENDATIONS,payload:{error:e}}}(e))})}}},Ce=Object(_.b)(function(e){return{movieById:O(e),recommendations:R(e),trailers:y(e),actors:T(e)}},fe)(ve),ge=a(4),Se=a.n(ge),Oe=function(e){return e<5?"orangered":e<8?"#55dd44":"blue"},be=function(e){var t=e.actor;return r.a.createElement(r.a.Fragment,null,r.a.createElement(G,null),r.a.createElement("div",{className:Se.a.wrapper},t&&r.a.createElement("div",{className:Se.a.container},r.a.createElement("div",{className:Se.a.actor__topInfo},r.a.createElement("h1",{className:Se.a.actor__name},t.name),r.a.createElement("img",{className:Se.a.actor__img,src:"https://image.tmdb.org/t/p/w300".concat(t.profile_path),alt:""})),r.a.createElement("section",{className:Se.a.moives__section},r.a.createElement("h2",{className:Se.a.moives__section__title},"Known For"),r.a.createElement("ul",{className:Se.a.list},t.known_for.map(function(e){return r.a.createElement("li",{className:Se.a.item,key:e.id},r.a.createElement(i.b,{className:Se.a.item__navlink,to:"/movieId/".concat(e.id)},r.a.createElement("div",{className:Se.a.topInfo},r.a.createElement("div",{className:Se.a.titleContainer},r.a.createElement("h2",{className:Se.a.title}," ",e.title),r.a.createElement("p",null,e.release_date)),r.a.createElement("div",{className:Se.a.CircularProgressbar__container},r.a.createElement(J.a,{percentage:10*e.vote_average,variant:"determinate",text:"".concat(e.vote_average),background:!0,backgroundPadding:5,styles:{background:{fill:"transparent"},text:{fill:Oe(e.vote_average),fontSize:"25px",transform:"translate(-18px, 6px)",fontWeight:"700"},path:{stroke:Oe(e.vote_average)},trail:{stroke:"transparent"}}}))),e.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:""}):r.a.createElement("img",{className:Se.a.myPhoto,src:Z.a,alt:""})))}))))))},Re=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchActorInfoById(this.props.match.params.credit_id)}},{key:"render",value:function(){var e=this.props.actor;return r.a.createElement(be,{actor:e})}}]),t}(n.Component),ye={fetchActorInfoById:function(e){return function(t){t({type:C.FETCH_REQUEST_ACTORS_INFO}),f.a.get("https://api.themoviedb.org/3/credit/".concat(e,"?api_key=5874acfd11651a28c55771624f7021f4")).then(function(e){var a=e.data;return t(function(e){return{type:C.FETCH_SUCCESS_ACTORS_INFO,payload:{data:e}}}(a))}).catch(function(e){return t(function(e){return{type:C.FETCH_ERROR_ACTORS_INFO,payload:{error:e}}}(e))})}}},Te=Object(_.b)(function(e){return{actor:M(e)}},ye)(Re),Me=a(31),Ne=a.n(Me),Ie=function(){return r.a.createElement("footer",{className:Ne.a.footer},r.a.createElement("p",null,"This app was designed by"," ",r.a.createElement("a",{href:"https://github.com/SerogaHumenchuk",className:Ne.a.name}," ","Serhiy Humenchuk")," ","for"," ",r.a.createElement("a",{href:"https://morbax.com/",className:Ne.a.company}," ","Morbax"," ")," ","in 2019"))},ke=function(){return r.a.createElement("div",{className:m.a.wrapper},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/actor/:credit_id",component:Te}),r.a.createElement(s.a,{path:"/movieId/:id",component:Ce}),r.a.createElement(s.a,{path:"/movie/:sort",component:le}),r.a.createElement(s.a,{path:"/genre/:id",component:le}),r.a.createElement(s.a,{path:"/",component:le})),r.a.createElement(Ie,null))},He=a(18),Ae=a(61),Fe=a(62),Ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C.FETCH_SUCCESS_POPULAR:case C.FETCH_SUCCESS_SEARCH_MOVIE:return n.data;default:return e}},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C.FETCH_SUCCESS_MOVIE_BY_ID:return n.data;default:return e}},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C.FETCH_SUCCESS_GENRES:return n.data.genres;default:return e}},we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C.FETCH_SUCCESS_REACOMMENDATIONS:return n.data;default:return e}},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case C.FETCH_SUCCESS_ACTORS_INFO:return n.data;default:return e}},De=Object(He.combineReducers)({movies:Ue,movieById:Pe,genres:je,recommendations:we,actor:Be}),xe=Object(He.applyMiddleware)(Ae.a),Le=Object(Fe.composeWithDevTools)(xe),Ve=Object(He.createStore)(De,Le);c.a.render(r.a.createElement(_.a,{store:Ve},r.a.createElement(i.a,null,r.a.createElement(s.a,{component:ke}))),document.getElementById("root"))},15:function(e,t,a){e.exports={container:"Movies_container__2-j5t",list:"Movies_list__32yBb",item:"Movies_item__1_O1R",topInfo:"Movies_topInfo__7LMPq",titleContainer:"Movies_titleContainer__2jD9Y",title:"Movies_title__3LTvk",vote_average:"Movies_vote_average__3zwVJ",moreInfo:"Movies_moreInfo__mMNua",overview:"Movies_overview__2YiUL",notFounded__container:"Movies_notFounded__container__2g7dn",CircularProgressbar__container:"Movies_CircularProgressbar__container__33dGQ"}},19:function(e,t,a){e.exports={container:"Header_container__2ANfA",categories__container:"Header_categories__container__34npf",categories__sort:"Header_categories__sort__14786",link:"Header_link__1xOnB",appear:"Header_appear__3DGaS",slideIn:"Header_slideIn__15JaK",shrink:"Header_shrink__1W0nS"}},22:function(e,t,a){e.exports=a.p+"static/media/my.da9e48fb.jpg"},23:function(e,t,a){e.exports={Maincontainer:"Menu_Maincontainer__1acqi",menu__list:"Menu_menu__list__2ziZf",form__search:"Menu_form__search__2eaNn",search__input:"Menu_search__input__3nSwX",container__open:"Menu_container__open__L8NC0",container__close:"Menu_container__close__26uN0"}},26:function(e,t,a){e.exports={container:"Pagination_container__2_aiB",active:"Pagination_active__2YlDj",pages:"Pagination_pages__3GRT9"}},3:function(e,t,a){e.exports={background__container:"MoviePage_background__container__3U6RC",shadow:"MoviePage_shadow__2-AoK",btnComeBack:"MoviePage_btnComeBack__31Lo0",overview:"MoviePage_overview__2pbyr",content__container:"MoviePage_content__container__1k9RD",video:"MoviePage_video__30vS6",recommend__item:"MoviePage_recommend__item__2XqJ9",loader:"MoviePage_loader__2U2Sh",actors__list:"MoviePage_actors__list__2N5zt",actor__navlink:"MoviePage_actor__navlink__3djtx",title_container:"MoviePage_title_container__226HV",btn__container:"MoviePage_btn__container__1ei4Y",btnOption__after:"MoviePage_btnOption__after__2ShxM",btnOption__afterTransparent:"MoviePage_btnOption__afterTransparent__240Ji",video__container:"MoviePage_video__container__39TLL"}},31:function(e,t,a){e.exports={footer:"Footer_footer__7frTr"}},4:function(e,t,a){e.exports={wrapper:"Actor_wrapper__g2FCQ",container:"Actor_container__30vwz",actor__name:"Actor_actor__name__36MeT",actor__img:"Actor_actor__img__29Gku",list:"Actor_list__3b8IW",item:"Actor_item__KfbJA",topInfo:"Actor_topInfo__1K9-V",titleContainer:"Actor_titleContainer__2nmoY",vote_average:"Actor_vote_average__3P5rc",moreInfo:"Actor_moreInfo__2KOg8",overview:"Actor_overview__1aI01",item__navlink:"Actor_item__navlink__3lnP5",CircularProgressbar__container:"Actor_CircularProgressbar__container__3HUsX",actor__topInfo:"Actor_actor__topInfo__1STPy"}},52:function(e,t,a){e.exports={wrapper:"App_wrapper__3caOh"}},53:function(e,t,a){e.exports={container:"MenuButton_container__1BYY7",launch:"MenuButton_launch__30mh0"}},54:function(e,t,a){e.exports=a.p+"static/media/logo.875e4174.svg"},63:function(e,t,a){e.exports=a(147)},72:function(e,t,a){}},[[63,1,2]]]);
//# sourceMappingURL=main.1ed39290.chunk.js.map