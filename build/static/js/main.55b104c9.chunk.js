(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"1",image:"https://baseballhall.org/sites/default/files/styles/large/public/1986%20WS%201694-88_Carter_NBL-186p.jpg?itok=wji8-y2m"},{id:2,name:"2",image:"https://baseballhall.org/sites/default/files/styles/large/public/bagwell%20updated%20thumb.jpg?itok=UKm7Wl4L"},{id:3,name:"3",image:"https://baseballhall.org/sites/default/files/styles/large/public/Berra%20Yogi%204267-68HTa_Misc_NBL-186p.jpg?itok=M8dwgoTw"},{id:4,name:"4",image:"https://baseballhall.org/sites/default/files/styles/large/public/Biggio-186x220.jpg?itok=xwjJyGvU"},{id:5,name:"5",image:"https://baseballhall.org/sites/default/files/styles/large/public/chipper%20thumb.jpg?itok=7zMXL0uq"},{id:6,name:"6",image:"https://baseballhall.org/sites/default/files/styles/large/public/Cobb%20Ty%209973.95%20act_PD-186p.jpg?itok=kkENJk2H"},{id:7,name:"7",image:"https://baseballhall.org/sites/default/files/styles/large/public/DiMaggio%20Joe%207570.90_H%26A_NBL-254.jpg?itok=L_4b_5pc"},{id:8,name:"8",image:"https://baseballhall.org/sites/default/files/styles/large/public/Gehrig%20Lou%201489-68WTFL_PD-186.jpg?itok=L2m1OBfx"},{id:9,name:"9",image:"https://baseballhall.org/sites/default/files/styles/story_related_hof_254_x_220/public/hoffman.thumb_.jpg?itok=yxW4lLy9"},{id:10,name:"10",image:"https://baseballhall.org/sites/default/files/styles/large/public/reggie%20new%20thumbnail.jpg?itok=EzEFjJEu"},{id:11,name:"11",image:"https://baseballhall.org/sites/default/files/styles/large/public/Ruth-Babe-4065.99_HS_PD_0.jpg?itok=hv73OuMy "},{id:12,name:"12",image:"https://baseballhall.org/sites/default/files/styles/large/public/Appling%20Luke%203956.73%20NBL-186p.jpg?itok=D0od6vEo"}]},,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(0),l=a.n(s),i=a(3),n=a.n(i),o=(a(16),a(7)),r=a(4),c=a(5),g=a(8),h=a(6),u=a(9);a(17);var m=function(e){return l.a.createElement("div",{className:"container"},e.children)};a(18);var p=function(e){return l.a.createElement("span",{onClick:function(){return e.scoring(e.name)},className:"scoring"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"img-container"},l.a.createElement("img",{alt:e.name,src:e.image}))))};a(19);var f=function(e){return l.a.createElement("h1",{className:"title"},e.children)},b=a(1);var d=function(e){function t(){var e,a;Object(r.a)(this,t);for(var s=arguments.length,l=new Array(s),i=0;i<s;i++)l[i]=arguments[i];return(a=Object(g.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(l)))).state={pic:b,chosen:[],score:0,highScore:0,status:"Click on each hall of famer once and only once."},a.scoring=function(e){console.log("I Clicked on ",{name:e}),!0===function(e,t){return e.some(function(e){return t===e})}(a.state.chosen,e)?(a.setState({score:0}),a.setState({chosen:[]}),a.setState({status:"You already chose that one.  Start over!"}),console.log(a.state.chosen)):(a.setState({score:a.state.score+1}),a.setState({status:"Valid Answer!"}),a.setState({chosen:[].concat(Object(o.a)(a.state.chosen),[e])}),console.log("this is score",a.state.score),console.log("this is HIGH score",a.state.highScore),console.log(a.state.chosen),a.state.score+1>a.state.highScore&&a.setState({highScore:a.state.score+1}),a.state.score+1===12&&a.setState({status:"YOU WON!  Click any hall of famer to play again."}))},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=function(e){for(var t=e.length-1;t>0;t--){var a=Math.floor(Math.random()*(t+1)),s=e[t];e[t]=e[a],e[a]=s}return e}(b);return l.a.createElement(m,null,l.a.createElement(f,null,"The History of Baseball"),l.a.createElement("div",{className:"scoreDiv"},l.a.createElement("h3",{className:"score"},this.state.status),l.a.createElement("h2",{className:"score"},"Current Score: ",this.state.score),l.a.createElement("h2",{className:"score"},"High Score: ",this.state.highScore),l.a.createElement("h2",null,"Winning Score: 12")),t.map(function(t){return l.a.createElement(p,{scoring:e.scoring,id:t.id,key:t.id,name:t.name,image:t.image})}))}}]),t}(s.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n.a.render(l.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.55b104c9.chunk.js.map