(this["webpackJsonpmotivation-app"]=this["webpackJsonpmotivation-app"]||[]).push([[0],{15:function(t,e,a){t.exports=a.p+"static/media/audio.64370cf8.mp3"},16:function(t,e,a){t.exports=a(39)},21:function(t,e,a){},39:function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),o=a(12),s=a.n(o),i=a(2),l=(a(21),a(13)),u=a.n(l),r=a(14),p=a.n(r),m=a(15),d=a.n(m),h=function(){var t=Object(n.useState)("Quality is not an act, it is a habit"),e=Object(i.a)(t,2),a=e[0],o=e[1],s=Object(n.useState)(!1),l=Object(i.a)(s,2),r=l[0],m=l[1],h=Object(n.useState)("https://images.pexels.com/photos/902756/pexels-photo-902756.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"),b=Object(i.a)(h,2),f=b[0],g=(b[1],function(){u.a.get("https://api.adviceslip.com/advice").then((function(t){var e=t.data.slip.advice;o(e),console.log(e.length)})).catch((function(t){console.log(t)}))});return Object(n.useEffect)((function(){console.log("component did mount");var t=setInterval(g,200*a.length);console.log(t)}),[]),c.a.createElement("div",{className:"app",style:{background:"url(".concat(f,")")}},r&&c.a.createElement("audio",{src:d.a,autoPlay:!0}),c.a.createElement("div",{className:"card"},c.a.createElement("h1",{className:"header"},a),c.a.createElement(p.a,{textAsButton:!0,displayText:"Narrate",text:a}),c.a.createElement("button",{onClick:function(){m(!r)}},r?"Pause Music":"Play Music")))};s.a.render(c.a.createElement(h,null),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.182f04be.chunk.js.map