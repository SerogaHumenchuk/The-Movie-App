(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports={container:"Movies_container__2Q67r",list:"Movies_list__v-Rmb",item:"Movies_item__3ezkU",topInfo:"Movies_topInfo__pfbAG",titleContainer:"Movies_titleContainer__1-WXF",title:"Movies_title__1rh5E",vote_average:"Movies_vote_average__1szjv",moreInfo:"Movies_moreInfo__37ELJ",overview:"Movies_overview__1_xty",notFounded__container:"Movies_notFounded__container__V8XAd",CircularProgressbar__container:"Movies_CircularProgressbar__container__3iycW"}},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),c=a.n(o),i=a(11),s=a(18),l=a(15),_=(a(71),a(50)),m=a.n(_),u=a(5),p=a(6),d=a(8),E=a(7),h=a(9),v=a(20),f=a.n(v),g={FETCH_REQUEST_POPULAR:"FETCH_REQUEST_POPULAR",FETCH_SUCCESS_POPULAR:"FETCH_SUCCESS_POPULAR",FETCH_ERROR_POPULAR:"FETCH_ERROR_POPULAR",FETCH_REQUEST_MOVIE_BY_ID:"FETCH_REQUEST_MOVIE_BY_ID",FETCH_SUCCESS_MOVIE_BY_ID:"FETCH_SUCCESS_MOVIE_BY_ID",FETCH_ERROR_MOVIE_BY_ID:"FETCH_ERROR_MOVIE_BY_ID",FETCH_REQUEST_GENRES:"FETCH_REQUEST_GENRES",FETCH_SUCCESS_GENRES:"FETCH_SUCCESS_GENRES",FETCH_ERROR_GENRES:"FETCH_ERROR_GENRES",FETCH_REQUEST_SEARCH_MOVIE:"FETCH_REQUEST_SEARCH_MOVIE",FETCH_SUCCESS_SEARCH_MOVIE:"FETCH_SUCCESS_SEARCH_MOVIE",FETCH_ERROR_SEARCH_MOVIE:"FETCH_ERROR_SEARCH_MOVIE",FETCH_REQUEST_REACOMMENDATIONS:"FETCH_REQUEST_REACOMMENDATIONS",FETCH_SUCCESS_REACOMMENDATIONS:"FETCH_SUCCESS_REACOMMENDATIONS",FETCH_ERROR_REACOMMENDATIONS:"FETCH_ERROR_REACOMMENDATIONS"},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"popularity.desc",t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return function(n){n({type:g.FETCH_REQUEST_POPULAR}),f.a.get("https://api.themoviedb.org/3/discover/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&sort_by=".concat(e,"&include_adult=false&page=").concat(a).concat(t)).then(function(e){var t=e.data;return n(function(e){return{type:g.FETCH_SUCCESS_POPULAR,payload:{data:e}}}(t))}).catch(function(e){return n(function(e){return{type:g.FETCH_ERROR_POPULAR,payload:{error:e}}}(e))})}},S=function(e){return e.movies.results},O=function(e){return e.movieById},y=function(e){return e.genres},b=function(e){return e.recommendations.results},R=function(e){return e.movieById.videos},M=function(e){return e.movieById.credits},T=a(38),k=a(30),N=a(51),I=a.n(N),H=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!!a.props.open&&a.props.open,color:a.props.color?a.props.color:"black"},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"handleClick",value:function(){this.setState({open:!this.state.open})}},{key:"render",value:function(){var e=this,t={line:{height:"2px",width:"20px",background:this.state.color,transition:"all 0.2s ease"},lineTop:{transform:this.state.open?"rotate(45deg)":"none",transformOrigin:"top left",marginBottom:"5px"},lineMiddle:{opacity:this.state.open?0:1,transform:this.state.open?"translateX(-16px)":"none"},lineBottom:{transform:this.state.open?"translateX(-1px) rotate(-45deg)":"none",transformOrigin:"top left",marginTop:"5px"}};return r.a.createElement("button",{type:"button",className:I.a.container,onClick:this.props.onClick?this.props.onClick:function(){e.handleClick()}},r.a.createElement("div",{style:Object(k.a)({},t.line,t.lineTop)}),r.a.createElement("div",{style:Object(k.a)({},t.line,t.lineMiddle)}),r.a.createElement("div",{style:Object(k.a)({},t.line,t.lineBottom)}))}}]),t}(n.Component),F=a(28),U=a.n(F),A=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={open:!!a.props.open&&a.props.open},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.open!==this.state.open&&this.setState({open:e.open})}},{key:"render",value:function(){var e=this.props,t=e.search,a=e.handleSubmit,n=e.handleChange,o=e.children,c={container:{position:"fixed",top:0,left:0,height:e.open?"100%":0,width:"100vw",display:"flex",flexDirection:"column",background:"black",opacity:.95,color:"#fafafa",transition:"height 0.3s ease",zIndex:2}};return r.a.createElement("div",null,r.a.createElement("div",{style:c.container},this.state.open?r.a.createElement("div",{className:U.a.menu__list},r.a.createElement("form",{onSubmit:a,className:U.a.form__search},r.a.createElement("input",{className:U.a.search__input,onChange:n,type:"text",placeholder:"Search",value:t})),o):null))}}]),t}(n.Component),P=a(17),j=a.n(P),w=a(52),B=a.n(w),D=[{name:"Popularity",sortUrl:"popularity.desc"},{name:"Top rated",sortUrl:"vote_count.desc"},{name:"Latest",sortUrl:"release_date.desc"},{name:"Now playing",sortUrl:"revenue.desc"}],x=function(e){var t=e.genres,a=e.search,n=e.handleSubmit,o=e.handleChange,c=e.handleMenuClick,s=e.menuOpen,l=e.getId,_=D.map(function(e){return r.a.createElement(i.b,{key:e.id,className:j.a.link,onClick:function(){c(),l(e.id)},to:"/movie/".concat(e.sortUrl)},e.name)}),m=t.map(function(e){return r.a.createElement(i.b,{key:e.id,className:j.a.link,onClick:function(){c(),l(e.id)},to:"/genre/".concat(e.id)},e.name)});return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:j.a.container},r.a.createElement(H,{open:s,onClick:function(){return c()},color:"white"}),r.a.createElement("a",{href:"/The-Movie-App/",className:j.a.logo},r.a.createElement("img",{src:B.a,alt:""}))),r.a.createElement(A,{open:s,search:a,handleSubmit:n,handleChange:o},r.a.createElement("div",{className:j.a.categories__container},r.a.createElement("div",{className:j.a.categories__sort}," ",r.a.createElement("h3",null,"Sort By:"),Object(T.a)(_)),r.a.createElement("div",{className:j.a.categories__sort},r.a.createElement("h3",null,"Genres:"),Object(T.a)(m)))))},V=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={search:"",menuOpen:!1},a.handleMenuClick=function(){a.setState({menuOpen:!a.state.menuOpen})},a.handleLinkClick=function(){return a.setState({menuOpen:!1})},a.handleChange=function(e){return a.setState({search:e.target.value})},a.handleSubmit=function(e){var t=a.state.search;e.preventDefault(),a.props.fetchSuccessSearchMovie(t),a.setState({search:""}),a.handleMenuClick()},a.getId=function(e){return a.props.fetchSuccessMovies("&with_genres=".concat(e))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSuccessGenres(),this.props.fetchSuccessSearchMovie(this.state.search)}},{key:"render",value:function(){var e=this.state,t=e.search,a=e.menuOpen,n=this.props,o=n.genres,c=n.searchMovie,i=n.movies;return r.a.createElement(x,{handleSubmit:this.handleSubmit,handleChange:this.handleChange,search:t,searchMovie:c,movies:i,getId:this.getId,genres:o,handleMenuClick:this.handleMenuClick,handleLinkClick:this.handleLinkClick,menuOpen:a})}}]),t}(n.Component),L={fetchSuccessGenres:function(){return function(e){e({type:g.FETCH_REQUEST_GENRES}),f.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=5874acfd11651a28c55771624f7021f4&language=en-US").then(function(t){var a=t.data;return e(function(e){return{type:g.FETCH_SUCCESS_GENRES,payload:{data:e}}}(a))}).catch(function(t){return e(function(e){return{type:g.FETCH_ERROR_GENRES,payload:{error:e}}}(t))})}},fetchSuccessSearchMovie:function(e){return function(t){t({type:g.FETCH_REQUEST_SEARCH_MOVIE}),f.a.get("https://api.themoviedb.org/3/search/movie?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&query=".concat(e,"&page=1&include_adult=false")).then(function(e){var a=e.data;return t(function(e){return{type:g.FETCH_SUCCESS_SEARCH_MOVIE,payload:{data:e}}}(a))}).catch(function(e){return t(function(e){return{type:g.FETCH_ERROR_SEARCH_MOVIE,payload:{error:e}}}(e))})}},fetchSuccessMovies:C},Q=Object(l.b)(function(e){return{genres:y(e),movies:S(e)}},L)(V),G=a(54),Y=a.n(G),W=a(55),z=a.n(W),J=a(10),X=a.n(J),K=a(27),q=a.n(K),Z=function(e){var t=e.movies;return r.a.createElement("ul",{className:X.a.list},console.log(t),t&&t.map(function(e){return r.a.createElement("li",{className:X.a.item,key:e.id},r.a.createElement(i.b,{className:X.a.moreInfo,to:"/movieId/".concat(e.id)},r.a.createElement("div",{className:X.a.topInfo},r.a.createElement("div",{className:X.a.titleContainer},r.a.createElement("h2",{className:X.a.title}," ",e.title),r.a.createElement("p",null,e.release_date)),r.a.createElement("div",{className:X.a.CircularProgressbar__container},r.a.createElement(Y.a,{percentage:10*e.vote_average,variant:"determinate",text:"".concat(e.vote_average),background:!0,backgroundPadding:5,styles:{background:{fill:"transparent"},text:{fill:e.vote_average<5?"orangered":e.vote_average<8?"#55dd44":"blue",fontSize:"25px",transform:"translate(-18px, 6px)",fontWeight:"700"},path:{stroke:e.vote_average<5?"orangered":e.vote_average<8?"#55dd44":"blue"},trail:{stroke:"transparent"}}}))),e.poster_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:""}):r.a.createElement("img",{className:X.a.myPhoto,src:q.a,alt:""})))}),t&&t.length?null:r.a.createElement("div",{className:X.a.notFounded__container},r.a.createElement(z.a,{type:"Oval",color:"#ff4400",height:"150",width:"150"})))},$=a(56),ee=a.n($),te=a(23),ae=a.n(te),ne=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.id;t.sort;return r.a.createElement("div",null,r.a.createElement(ee.a,{previousLabel:"<",nextLabel:">",breakLabel:"...",breakClassName:ae.a.breakMe,pageCount:99,marginPagesDisplayed:1,pageRangeDisplayed:3,onPageChange:function(t){return e.props.fetchSuccessMovies(a&&a,t.selected)},containerClassName:ae.a.container,subContainerClassName:ae.a.pages,activeClassName:ae.a.active}))}}]),t}(n.Component),re={fetchSuccessMovies:C},oe=Object(l.b)(null,re)(ne),ce=function(e){function t(){return Object(u.a)(this,t),Object(d.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSuccessMovies("popularity.desc")}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&this.props.fetchSuccessMovies("&with_genres=".concat(this.props.match.params.id)),this.props.match.params.sort!==e.match.params.sort&&this.props.fetchSuccessMovies(this.props.match.params.sort)}},{key:"render",value:function(){return r.a.createElement("div",{className:X.a.container},r.a.createElement(Q,null),r.a.createElement(Z,{movies:this.props.movies}),r.a.createElement(oe,{id:this.props.match.params.id,sort:this.props.match.params.sort}))}}]),t}(n.Component),ie={fetchSuccessMovies:C},se=Object(l.b)(function(e){return{movies:S(e),genres:y(e)}},ie)(ce),le=a(57),_e=a(37),me=a.n(_e),ue=(a(145),a(2)),pe=a.n(ue),de=function(e){var t=e.movieById,a=e.recommendations,n=e.trailers,o=e.actors,c=n&&n.results.map(function(e){return r.a.createElement(le.a,{className:pe.a.video,videoId:e.key})});return r.a.createElement(r.a.Fragment,null,t&&r.a.createElement("div",null,r.a.createElement("div",{style:{backgroundImage:"url(https://image.tmdb.org/t/p/original".concat(t.backdrop_path,")")},className:pe.a.background__container},r.a.createElement("div",{className:pe.a.shadow},r.a.createElement(i.b,{to:"/",className:pe.a.btnComeBack},"\u2190 Back to main"),r.a.createElement("div",null,r.a.createElement("h1",null,t.title),r.a.createElement("h3",null,t.tagline)),r.a.createElement("p",{className:pe.a.overview},t.overview)))),r.a.createElement("div",{className:pe.a.content__container},r.a.createElement("h2",{className:pe.a.title_container},"Top Billed Cast"),r.a.createElement("ul",{className:pe.a.actors__list},o&&o.cast.slice(0,10).map(function(e){return r.a.createElement("li",{key:e.credit_id},r.a.createElement("h4",null,e.name),r.a.createElement("h5",null,e.character),e.profile_path?r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.profile_path),alt:""}):r.a.createElement("img",{src:q.a,alt:""}))})),r.a.createElement("div",{className:pe.a.video__container},r.a.createElement("h2",{className:pe.a.title_container},"Videos"),r.a.createElement(me.a,{className:pe.a.carusel,items:c,responsive:{0:{items:0},767:{items:1}},fadeOutAnimation:!0,mouseDragEnabled:!0,buttonsDisabled:!0})),r.a.createElement("h2",{className:pe.a.title_container},"Recommendations"),a&&r.a.createElement("div",{className:pe.a.video__container},r.a.createElement(me.a,{className:pe.a.carusel,items:a.map(function(e){return r.a.createElement("div",{className:pe.a.recommend__item,key:e.id},r.a.createElement(i.b,{to:"/movieId/".concat(e.id)},r.a.createElement("img",{src:"https://image.tmdb.org/t/p/w300".concat(e.poster_path),alt:""})))}),responsive:{0:{items:0},600:{items:2},1023:{items:3},1439:{items:4},1679:{items:5}},fadeOutAnimation:!0,mouseDragEnabled:!0,buttonsDisabled:!0,autoPlayInterval:3e3,autoPlayDirection:"lrt",autoPlay:!0}))))},Ee=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(E.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchSuccessMovieById(this.props.match.params.id),this.props.fetchRecommendationsById(this.props.match.params.id)}},{key:"componentDidUpdate",value:function(e){this.props.match.params.id!==e.match.params.id&&(this.props.fetchSuccessMovieById(this.props.match.params.id),this.props.fetchRecommendationsById(this.props.match.params.id))}},{key:"render",value:function(){var e=this.props,t=e.movieById,a=e.recommendations,n=e.trailers,o=e.actors;return r.a.createElement("div",{className:pe.a.main__container},r.a.createElement(de,{movieById:t,recommendations:a,trailers:n,actors:o}))}}]),t}(n.Component),he={fetchSuccessMovieById:function(e){return function(t){t({type:g.FETCH_REQUEST_MOVIE_BY_ID}),f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"?api_key=5874acfd11651a28c55771624f7021f4&append_to_response=credits,videos&language=en-US")).then(function(e){var a=e.data;return t(function(e){return{type:g.FETCH_SUCCESS_MOVIE_BY_ID,payload:{data:e}}}(a))}).catch(function(e){return t(function(e){return{type:g.FETCH_ERROR_MOVIE_BY_ID,payload:{error:e}}}(e))})}},fetchRecommendationsById:function(e){return function(t){t({type:g.FETCH_REQUEST_REACOMMENDATIONS}),f.a.get("https://api.themoviedb.org/3/movie/".concat(e,"/recommendations?api_key=5874acfd11651a28c55771624f7021f4&language=en-US&page=1")).then(function(e){var a=e.data;return t(function(e){return{type:g.FETCH_SUCCESS_REACOMMENDATIONS,payload:{data:e}}}(a))}).catch(function(e){return t(function(e){return{type:g.FETCH_ERROR_REACOMMENDATIONS,payload:{error:e}}}(e))})}}},ve=Object(l.b)(function(e){return{movieById:O(e),recommendations:b(e),trailers:R(e),actors:M(e)}},he)(Ee),fe=a(29),ge=a.n(fe),Ce=function(){return r.a.createElement("footer",{className:ge.a.footer},r.a.createElement("p",null,"This app was designed by"," ",r.a.createElement("a",{href:"https://github.com/SerogaHumenchuk",className:ge.a.name}," ","Serhiy Hymenchuk")," ","for"," ",r.a.createElement("a",{href:"https://morbax.com/",className:ge.a.company}," ","Morbax"," ")," ","in 2019"))},Se=function(){return r.a.createElement("div",{className:m.a.wrapper},r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/movieId/:id",component:ve}),r.a.createElement(s.a,{path:"/movie/:sort",component:se}),r.a.createElement(s.a,{path:"/genre/:id",component:se}),r.a.createElement(s.a,{path:"/",component:se})),r.a.createElement(Ce,null))},Oe=a(16),ye=a(60),be=a(61),Re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g.FETCH_SUCCESS_POPULAR:case g.FETCH_SUCCESS_SEARCH_MOVIE:return n.data;default:return e}},Me=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g.FETCH_SUCCESS_MOVIE_BY_ID:return n.data;default:return e}},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g.FETCH_SUCCESS_GENRES:return n.data.genres;default:return e}},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g.FETCH_SUCCESS_REACOMMENDATIONS:return n.data;default:return e}},Ne=Object(Oe.combineReducers)({movies:Re,movieById:Me,genres:Te,recommendations:ke}),Ie=Object(Oe.applyMiddleware)(ye.a),He=Object(be.composeWithDevTools)(Ie),Fe=Object(Oe.createStore)(Ne,He);c.a.render(r.a.createElement(l.a,{store:Fe},r.a.createElement(i.a,null,r.a.createElement(s.a,{component:Se}))),document.getElementById("root"))},17:function(e,t,a){e.exports={container:"Header_container__2xW7f",categories__container:"Header_categories__container__-FCnv",categories__sort:"Header_categories__sort__3PdgB",link:"Header_link__1aqPL",appear:"Header_appear__1fKj3",slideIn:"Header_slideIn__egsh9",shrink:"Header_shrink__1Yi1T"}},2:function(e,t,a){e.exports={background__container:"MoviePage_background__container__BnDAz",shadow:"MoviePage_shadow__WOh9h",btnComeBack:"MoviePage_btnComeBack__1jOd-",overview:"MoviePage_overview__3HH2w",content__container:"MoviePage_content__container__2AfE4",video:"MoviePage_video__3j7JU",recommend__item:"MoviePage_recommend__item__F_foz",loader:"MoviePage_loader__1QLnV",actors__list:"MoviePage_actors__list__Cettn",title_container:"MoviePage_title_container__1V_DM",video__container:"MoviePage_video__container__1fkTh"}},23:function(e,t,a){e.exports={container:"Pagination_container__2yHMM",active:"Pagination_active__33Ed2",pages:"Pagination_pages__196K3"}},27:function(e,t,a){e.exports=a.p+"static/media/my.da9e48fb.jpg"},28:function(e,t,a){e.exports={Maincontainer:"Menu_Maincontainer__3YAci",menu__list:"Menu_menu__list__zo4M3",form__search:"Menu_form__search__QKFU7",search__input:"Menu_search__input__Slwfs"}},29:function(e,t,a){e.exports={footer:"Footer_footer__2O4ef"}},50:function(e,t,a){e.exports={wrapper:"App_wrapper__38aWi"}},51:function(e,t,a){e.exports={container:"MenuButton_container__jJ4YV",launch:"MenuButton_launch__C0PHL"}},52:function(e,t,a){e.exports=a.p+"static/media/logo.b5cb075a.svg"},62:function(e,t,a){e.exports=a(146)},71:function(e,t,a){}},[[62,1,2]]]);
//# sourceMappingURL=main.fcf7568e.chunk.js.map