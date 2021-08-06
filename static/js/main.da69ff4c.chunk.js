(this["webpackJsonpmovie-list"]=this["webpackJsonpmovie-list"]||[]).push([[0],{18:function(e,t,n){},32:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n.n(a),r=n(25),c=n.n(r),s=(n(32),n(13)),o=(n(18),n(11)),l=n(6),u=n(14),d=n.n(u),h=n(17),b=n(16),j=n(2),m=n(3),v=n(8),p=n(5),O=n(4),f=n(0),g=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("section",{className:"loading-container",children:[Object(f.jsx)("h1",{className:"loading-h1",children:"Loading..."}),Object(f.jsx)("div",{className:"loading-div"})]})}}]),n}(a.Component),x=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state=Object(s.a)({},e.movie),a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(m.a)(n,[{key:"handleSubmit",value:function(){(0,this.props.onSubmit)(this.state)}},{key:"updateMovie",value:function(e,t){this.setState(Object(b.a)({},e,t))}},{key:"renderTitleInput",value:function(){var e=this,t=this.state.title;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_title",children:["Title",Object(f.jsx)("input",{placeholder:"Add the title",id:"movie_title",type:"text",className:"validate",value:t,onChange:function(t){return e.updateMovie("title",t.target.value)}})]})})}},{key:"renderSubtitleInput",value:function(){var e=this,t=this.state.subtitle;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_subtitle",children:["Subtitle",Object(f.jsx)("input",{placeholder:"Add the subtitle",id:"movie_subtitle",type:"text",value:t,onChange:function(t){return e.updateMovie("subtitle",t.target.value)}})]})})}},{key:"renderImagePathInput",value:function(){var e=this,t=this.state.imagePath;return Object(f.jsx)("div",{className:"row",children:Object(f.jsxs)("label",{htmlFor:"movie_image",children:["Image path",Object(f.jsx)("input",{placeholder:"Insert image path",id:"movie_image",type:"text",value:t,onChange:function(t){return e.updateMovie("imagePath",t.target.value)}})]})})}},{key:"renderStorylineInput",value:function(){var e=this,t=this.state.storyline;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_storyline",children:["Storyline",Object(f.jsx)("textarea",{id:"movie_storyline",value:t,onChange:function(t){return e.updateMovie("storyline",t.target.value)}})]})})}},{key:"renderGenreSelection",value:function(){var e=this,t=this.state.genre;return Object(f.jsx)("div",{children:Object(f.jsxs)("label",{htmlFor:"movie_genre",children:["Genre",Object(f.jsxs)("select",{id:"movie_genre",value:t,onChange:function(t){return e.updateMovie("genre",t.target.value)},children:[Object(f.jsx)("option",{value:"action",children:"Action"}),Object(f.jsx)("option",{value:"comedy",children:"Comedy"}),Object(f.jsx)("option",{value:"thriller",children:"Thriller"}),Object(f.jsx)("option",{value:"fantasy",children:"Fantasy"})]})]})})}},{key:"renderRatingInput",value:function(){var e=this,t=this.state.rating;return Object(f.jsx)("div",{className:"movie-form",children:Object(f.jsxs)("label",{htmlFor:"movie_rating",children:["Rating",Object(f.jsx)("input",{placeholder:"Movie rating",id:"movie_rating",type:"number",step:.1,min:0,max:5,value:t,onChange:function(t){return e.updateMovie("rating",t.target.value)}})]})})}},{key:"renderSubmitButton",value:function(){return Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"button",onClick:this.handleSubmit,children:"Submit"})})}},{key:"render",value:function(){return Object(f.jsx)("div",{children:Object(f.jsxs)("form",{className:"movies-form",children:[this.renderTitleInput(),this.renderSubtitleInput(),this.renderImagePathInput(),this.renderStorylineInput(),this.renderGenreSelection(),this.renderRatingInput(),this.renderSubmitButton()]})})}}]),n}(i.a.Component),y=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.rating;return Object(f.jsx)("div",{className:"rating","data-testid":"rating",children:Object(f.jsx)("span",{className:"rating",children:e})})}}]),n}(i.a.Component),k=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.subtitle,a=e.storyline,i=e.imagePath,r=e.rating,c=e.id;return Object(f.jsxs)("div",{className:"movie-card movie-card-body","data-testid":"movie-card",children:[Object(f.jsx)("h4",{className:"movie-card-title","data-testid":"movie-card-title",children:t}),Object(f.jsx)("h5",{className:"movie-card-subtitle",children:n}),Object(f.jsx)("p",{className:"movie-card-storyline",children:a}),Object(f.jsx)("img",{src:i,alt:"",className:"movie-card-image"}),Object(f.jsx)(o.b,{to:"/movies/".concat(c),className:"link-button",children:" More info "}),Object(f.jsx)(y,{rating:r})]})}}]),n}(i.a.Component),S=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props,t=e.searchText,n=e.onSearchTextChange,a=e.bookmarkedOnly,i=e.onBookmarkedChange,r=e.selectedGenre,c=e.onSelectedGenreChange;return Object(f.jsxs)("form",{"data-testid":"search-bar-form",className:"search-bar",children:[Object(f.jsxs)("label",{htmlFor:"textInput","data-testid":"text-input-label",children:["Search",Object(f.jsx)("input",{type:"text",name:"searchText",id:"textInput","data-testid":"text-input",value:t,onChange:n})]}),Object(f.jsxs)("label",{htmlFor:"bookmarkedOnly","data-testid":"checkbox-input-label",children:["Favorite only",Object(f.jsx)("input",{type:"checkbox","data-testid":"checkbox-input",name:"bookmarkedOnly",id:"bookmarkedOnly",checked:a,onChange:i})]}),Object(f.jsxs)("label",{htmlFor:"select-input","data-testid":"select-input-label",children:["Genre",Object(f.jsxs)("select",{name:"selectedGenre",id:"select-input","data-testid":"select-input",value:r,onChange:c,children:[Object(f.jsx)("option",{value:"","data-testid":"select-option",children:"All"}),Object(f.jsx)("option",{value:"action","data-testid":"select-option",children:"Action"}),Object(f.jsx)("option",{value:"comedy","data-testid":"select-option",children:"Comedy"}),Object(f.jsx)("option",{value:"thriller","data-testid":"select-option",children:"Thriller"})]})]})]})}}]),n}(i.a.Component),C=n(27),M=[{id:1,title:"Kingsglaive",subtitle:"Final Fantasy XV",storyline:"King Regis, who oversees the land of Lucis, commands his army of soldiers to protect the kingdom from the Niflheim empire's plans to steal the sacred crystal.",rating:4.5,imagePath:n.p+"static/media/Kingsglaive_Final_Fantasy_XV.ec78b774.jpg",bookmarked:!0,genre:"action"},{id:2,title:"Final Fantasy",subtitle:"Spirits Within",storyline:"A scientist makes a last stand on Earth with the help of a ragtag team of soldiers against an invasion of alien phantoms.",rating:4.5,imagePath:n.p+"static/media/Final_Fantasy_Spirits_Within.b8097429.jpg",bookmarked:!1,genre:"fantasy"},{id:3,title:"Ghost In The Shell",subtitle:"Ghost In The Shell",storyline:"A hacker known as the Puppet Master is hunted by a female cyborg cop and her partner. This film is a revised version of Ghost in the Shell (1995).",rating:5,imagePath:n.p+"static/media/Ghost_In_The_Shell_2_0.2cabe5f9.jpg",bookmarked:!1,genre:"comedy"},{id:4,title:"Appleseed Alpha",subtitle:"Appleseed Alpha",storyline:"A young female soldier Deunan and her cyborg partner Briareos survive through the post World War 3 apocalyptic New York in search of human's future hope, the legendary city of Olympus.",rating:3.8,imagePath:n.p+"static/media/Appleseed_Alpha.30ae10ef.jpg",bookmarked:!0,genre:"action"},{id:5,title:"Resident Evil",subtitle:"Vendetta",storyline:"Chris Redfield enlists the help of Leon S. Kennedy and Rebecca Chambers to stop a death merchant, with a vengeance, from spreading a deadly virus in New York.",rating:4.2,imagePath:n.p+"static/media/Resident_Evil_Vendetta.ffeb1d1b.jpg",bookmarked:!0,genre:"fantasy"}];localStorage.setItem("movies",JSON.stringify(M));var N=function(){return JSON.parse(localStorage.getItem("movies"))},w=function(e){return localStorage.setItem("movies",JSON.stringify(e))},A="OK",I=function(e){return function(t){setTimeout((function(){t(e)}),2e3)}},_=function(e){var t=N().find((function(t){return t.id===parseInt(e,10)}));return new Promise((function(e){I(t)(e)}))},T=function(e){return new Promise((function(t){var n=N(),a=n[n.length-1].id+1,i=Object(s.a)(Object(s.a)({},e),{},{id:a});n=[].concat(Object(C.a)(n),[i]),w(n),I(A)(t)}))},F=function(e){var t=N();return t=t.filter((function(t){return t.id!==parseInt(e,10)})),w(t),new Promise((function(e){I({status:A})(e)}))},G=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){var e;return Object(j.a)(this,n),(e=t.call(this)).handleData=function(t){var n=t.target.name,a="checkbox"===t.target.type?t.target.checked:t.target.value;e.setState(Object(b.a)({},n,a))},e.filterBookmarked=function(t){var n=t;return Object(v.a)(e).state.bookmarkedOnly&&(n=t.filter((function(e){return!0===e.bookmarked}))),n},e.filterGenre=function(t){var n=Object(v.a)(e).state.selectedGenre,a=t;return""!==n&&(a=t.filter((function(e){return e.genre===n}))),a},e.filterSearchText=function(t){var n=Object(v.a)(e).state.searchText,a=t;return""!==n&&(a=t.filter((function(e){return"".concat(e.title," ").concat(e.subtitle," ").concat(e.storyline).includes(n)}))),a},e.state={movies:["no-movies"]},e.getMoviesArray=e.getMoviesArray.bind(Object(v.a)(e)),e.handleData=e.handleData.bind(Object(v.a)(e)),e}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMoviesArray()}},{key:"getMoviesArray",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){var t=N();I(t)(e)}));case 2:t=e.sent,this.setState({movies:t,searchText:"",bookmarkedOnly:!1,selectedGenre:""});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movies,t=this.state,n=t.searchText,a=t.bookmarkedOnly,i=t.selectedGenre;return e=this.filterBookmarked(e),e=this.filterGenre(e),e=this.filterSearchText(e),Object(f.jsxs)("div",{className:"movie-list","data-testid":"movie-list",children:[Object(f.jsx)(S,{searchText:n,onSearchTextChange:this.handleData,bookmarkedOnly:a,onBookmarkedChange:this.handleData,selectedGenre:i,onSelectedGenreChange:this.handleData}),"no-movies"===e[0]?Object(f.jsx)(g,{}):e.map((function(e){return Object(f.jsx)(k,{movie:e},e.title)}))]})}}]),n}(a.Component),P=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a}return Object(m.a)(n,[{key:"handleSubmit",value:function(e){var t=T,n=this.props.history;t(e).then(n.push("/movie-list"))}},{key:"render",value:function(){return Object(f.jsx)("div",{"data-testid":"new-movie",children:Object(f.jsx)(x,{onSubmit:this.handleSubmit})})}}]),n}(a.Component),D=(n(40),function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){var e=this.props.movie,t=e.title,n=e.storyline,a=e.imagePath,i=e.genre,r=e.rating,c=e.subtitle,s=e.id;return Object(f.jsxs)("div",{"data-testid":"movie-details",children:[Object(f.jsx)("img",{alt:"Movie Cover",src:"".concat(a),className:"img-details"}),Object(f.jsx)("p",{children:"Title: ".concat(t)}),Object(f.jsx)("p",{children:"Subtitle: ".concat(c)}),Object(f.jsx)("p",{children:"Storyline: ".concat(n)}),Object(f.jsx)("p",{children:"Genre: ".concat(i)}),Object(f.jsx)("p",{children:"Rating: ".concat(r)}),Object(f.jsxs)("nav",{className:"details-buttons-container",children:[Object(f.jsx)(o.b,{to:"/movie-list",className:"details-button",children:"Back"}),Object(f.jsx)(o.b,{to:"/movies/".concat(s,"/edit"),className:"details-button",children:" Edit "}),Object(f.jsx)(o.b,{to:"/movies/".concat(s,"/delete"),className:"details-button",children:"Delete"})]})]})}}]),n}(a.Component)),B=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={movie:void 0},a.getMovieArray=a.getMovieArray.bind(Object(v.a)(a)),a.deleteMovie=a.deleteMovie.bind(Object(v.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovieArray()}},{key:"getMovieArray",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,n=t.params,a=n.id,console.log(a),e.next=6,_(a);case 6:i=e.sent,this.setState({movie:i});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"deleteMovie",value:function(){var e=this.props,t=e.match,n=e.history,a=t.params.id;F(a).then(n.push("/"))}},{key:"render",value:function(){var e=this.state.movie;return Object(f.jsx)("div",{children:void 0===e?Object(f.jsx)(g,{}):Object(f.jsx)(D,{movie:e})})}}]),n}(a.Component),R=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={movie:void 0},a.handleSubmit=a.handleSubmit.bind(Object(v.a)(a)),a.getMovieArray=a.getMovieArray.bind(Object(v.a)(a)),a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){this.getMovieArray()}},{key:"handleSubmit",value:function(e){var t=this,n=e;this.setState((function(){return{movie:n}}),(function(){var e=t.props,a=e.history,i=e.match.params.id;(function(e){return new Promise((function(t){var n=N().map((function(t){return t.id===parseInt(e.id,10)?Object(s.a)(Object(s.a)({},t),e):t}));w(n),I(A)(t)}))})(n).then(a.push("/movies/".concat(i)))}))}},{key:"getMovieArray",value:function(){var e=Object(h.a)(d.a.mark((function e(){var t,n,a,i;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.props.match,n=t.params,a=n.id,e.next=5,_(a);case 5:i=e.sent,this.setState({movie:i});case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state.movie;return Object(f.jsx)("div",{"data-testid":"edit-movie",children:e?Object(f.jsx)(x,{movie:e,onSubmit:this.handleSubmit}):Object(f.jsx)(g,{})})}}]),n}(a.Component),E=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsx)("div",{"data-testid":"404-error",children:"P\xe1gina n\xe3o encontrada"})}}]),n}(a.Component),W=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(e){var a;return Object(j.a)(this,n),(a=t.call(this,e)).state={},a}return Object(m.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.id;F(e)}},{key:"render",value:function(){return Object(f.jsx)(l.d,{children:Object(f.jsx)(l.a,{to:"/movie-list"})})}}]),n}(a.Component),J=function(e){Object(p.a)(n,e);var t=Object(O.a)(n);function n(){return Object(j.a)(this,n),t.apply(this,arguments)}return Object(m.a)(n,[{key:"render",value:function(){return Object(f.jsxs)("header",{className:"movie-card-header",children:[Object(f.jsx)("h1",{className:"page-title",children:"Movie Cards Library"}),Object(f.jsxs)("nav",{className:"header-buttons-container",children:[Object(f.jsx)(o.b,{to:"/movie-list",className:"header-link",children:"HOME"}),Object(f.jsx)(o.b,{to:"/movies/new",className:"header-link",children:"ADD MOVIE"})]})]})}}]),n}(i.a.Component);var K=function(){return Object(f.jsxs)(o.a,{children:[Object(f.jsx)(J,{}),Object(f.jsxs)(l.d,{children:[Object(f.jsx)(l.b,{exact:!0,path:"/movie-list",component:G}),Object(f.jsx)(l.b,{exact:!0,path:"/movies/new",component:P}),Object(f.jsx)(l.b,{exact:!0,path:"/movies/:id",render:function(e){return Object(f.jsx)(B,Object(s.a)({},e))}}),Object(f.jsx)(l.b,{exact:!0,path:"/movies/:id/edit",render:function(e){return Object(f.jsx)(R,Object(s.a)({},e))}}),Object(f.jsx)(l.b,{path:"/movies/:id/delete",component:W}),Object(f.jsx)(l.b,{component:E})]})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(Object(f.jsx)(K,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[41,1,2]]]);
//# sourceMappingURL=main.da69ff4c.chunk.js.map