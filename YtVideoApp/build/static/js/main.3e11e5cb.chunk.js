(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{129:function(e,t,n){e.exports=n(267)},158:function(e,t,n){},267:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(20),c=n(51),s=n.n(c),o=n(4),l=n(9),u=n(11),d=n(5),m=n(10),p=n(18),h=n(1),v=n.n(h),E=n(2),f=n(108),b=n.n(f),y={youtubeApiKey:"AIzaSyA7riltTfgmnBGQvqApESGStVvEODTChh8"},g=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.props),this.props.videos.length>0?i.a.createElement("div",null,this.renderVideos()):this.props.isVideoFetching&&i.a.createElement("div",{className:"ui active centered inline loader large"})}},{key:"renderVideos",value:function(){var e=this;return this.props.videos.map(function(t){return i.a.createElement("div",{key:t.etag,className:"ui segment"},i.a.createElement("div",{className:"content"},i.a.createElement("h3",{className:"ui header"},t.snippet.title)),i.a.createElement("div",{className:"content",style:{position:"relative"}},i.a.createElement("div",{className:"video-play"},i.a.createElement("span",{className:"video-play-icon",onClick:function(n){return e.props.selectVideo(t)}})),i.a.createElement("img",{className:"ui image",src:t.snippet.thumbnails.high.url,onClick:function(n){return e.props.selectVideo(t)}})))})}}]),t}(a.Component),O=Object(p.b)(function(e){return{isVideoFetching:e.videos.isVideoFetching,videos:e.videos.videos}},{selectVideo:function(e){return{type:"VIDEO_SELECTED",payload:e}}})(g),V=n(270),T=(n(158),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.selectedVideo;return null!=e?i.a.createElement("div",null,i.a.createElement(V.a,{id:e.id.videoId,placeholder:e.snippet.thumbnails.high.url,source:"youtube"})):this.props.isVideoFetching?i.a.createElement("div",{className:"ui active centered inline loader large"}):null}}]),t}(a.Component)),N=Object(p.b)(function(e){return{selectedVideo:e.videos.selectedVideo,isVideoFetching:e.videos.isVideoFetching}})(T),S=n(71),j=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(S.a,null,i.a.createElement("div",{className:"ui container stackable two column grid"},i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"column eight wide"},i.a.createElement("form",{className:"ui form",onSubmit:function(t){return e.onSearchSubmit(t)}},i.a.createElement("div",{className:"field"},i.a.createElement("div",{className:"ui action input"},i.a.createElement("input",{type:"text",onChange:function(t){return e.onSearchTermChange(t)},placeholder:"Plase enter the phrase"}),i.a.createElement("button",{className:"ui button"},"Search")))),i.a.createElement("div",{className:"ui hidden divider"}))),i.a.createElement("div",{className:"ui row"},i.a.createElement("div",{className:"column ten wide"},i.a.createElement(N,null)),i.a.createElement("div",{className:"column six wide"},i.a.createElement(O,null)))))}},{key:"onSearchTermChange",value:function(e){this.props.onSearchTermChanged(e.target.value)}},{key:"onSearchSubmit",value:function(e){e.preventDefault(),this.props.setIsFetching(!0),this.props.fetchVideos()}}]),t}(a.Component),C=Object(p.b)(function(e){return{searchTerm:e.searchTerm}},{onSearchTermChanged:function(e){return{type:"SEARCH_TERM_CHANGED",payload:e}},fetchVideos:function(){return function(){var e=Object(E.a)(v.a.mark(function e(t,n){var a,i;return v.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a=n().videos.searchTerm)){e.next=7;break}return e.next=5,b.a.get("https://www.googleapis.com/youtube/v3/search?maxResults=5&part=snippet",{params:{key:y.youtubeApiKey,q:a}});case 5:return i=e.sent,e.abrupt("return",t({type:"FETCH_VIDEOS",payload:i.data.items}));case 7:case"end":return e.stop()}},e)}));return function(t,n){return e.apply(this,arguments)}}()},setIsFetching:function(e){return{type:"START_STOP_FETCHING",payload:e}}})(j),w=n(38),k=n.n(w),F={videos:[],selectedVideo:null,searchTerm:"",isVideoFetching:!1},_=Object(r.c)({videos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"START_STOP_FETCHING":return k()(e,{isVideoFetching:{$set:t.payload}});case"FETCH_VIDEOS":return k()(e,{videos:{$set:t.payload.filter(function(e,t){return t>0})},selectedVideo:{$set:t.payload[0]}});case"VIDEO_SELECTED":return k()(e,{selectedVideo:{$set:t.payload}});case"SEARCH_TERM_CHANGED":return k()(e,{searchTerm:{$set:t.payload}});default:return e}}}),A=n(117);s.a.render(i.a.createElement(p.a,{store:Object(r.d)(_,Object(r.a)(A.a))},i.a.createElement(C,null)),document.getElementById("root"))}},[[129,2,1]]]);
//# sourceMappingURL=main.3e11e5cb.chunk.js.map