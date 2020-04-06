(this.webpackJsonpcovid19=this.webpackJsonpcovid19||[]).push([[0],{177:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(60),c=t.n(r),o=t(25),i=t(11),u=(t(12),t(178)),m=t(179),s=t(180),d=t(181);function E(e){return l.a.createElement(u.a,{className:"CovidKasus text-white",color:"primary"},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("h5",null,"Terdampak")),l.a.createElement(d.a,null,l.a.createElement("div",{className:"text-white"},l.a.createElement("span",{id:"value"},e.kasus),l.a.createElement("span",null,"  Kasus ")))))}function g(e){return l.a.createElement(u.a,{className:"CovidSembuh text-white",color:"success"},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("h5",null,"Sembuh")),l.a.createElement(d.a,null,l.a.createElement("div",{className:"text-white"},l.a.createElement("span",{id:"value"},e.sembuh),l.a.createElement("span",null,"  Orang ")))))}function h(e){return l.a.createElement(u.a,{className:"CovidMeninggalDunia text-white",color:"danger"},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("h5",null,"Meninggal Dunia")),l.a.createElement(d.a,null,l.a.createElement("div",{className:"text-white"},l.a.createElement("span",{id:"value"},e.meninggalDunia),l.a.createElement("span",null," Orang ")))))}var v=t(24);function b(e){var a={labels:["Terdampak","Sembuh","Meninggal Dunia"],datasets:[{label:"Covid 19",data:[e.kasus,e.sembuh,e.meninggalDunia],backgroundColor:["Blue","Green","Red"],hoverBackgroundColor:["Blue","Green","Red"]}]};return l.a.createElement(v.b,{data:a})}var p=t(182),f=t(187);function k(e){return l.a.createElement(u.a,{className:"CovidCountry text-white",color:"dark"},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("h5",{className:"text-center"},"Negara")),l.a.createElement("div",{style:{"margin-top":"25px","overflow-y":"scroll",height:"250px"}},l.a.createElement(d.a,null,l.a.createElement(p.a,{responsive:!0,className:"text-white"},void 0!==e.negara?l.a.createElement(S,{SIW:e.SIW,negara:e.negara}):null)))))}function S(e){return Object.keys(e.negara).length>0?l.a.createElement(l.a.Fragment,null,e.negara.map((function(a,t){return void 0!==a.iso3?l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(f.a,{color:"info",value:a.name+"?"+a.iso3,onClick:e.SIW},t+1,".",a.name))):null}))):l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement(f.a,{color:"info"},"Indonesia")))}function w(e){var a=[],t=[];Object.keys(e.daily).length>0&&e.daily.forEach((function(e,n){void 0!==e.provinceState&&void 0!==e.confirmed&&(a.push(e.provinceState),t.push(e.confirmed))}));var n={labels:a,datasets:[{label:e.waktu?e.waktu:"Hari ini",data:t,color:"Black",fill:!1,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinStyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,1)",pointHoverBorderWidth:2,pointRadius:1,pointHitRadius:10}]};return l.a.createElement(u.a,{className:"CovidHarian text-dark",color:"link"},l.a.createElement(m.a,null,l.a.createElement(s.a,null,l.a.createElement("h5",{className:"text-center"},"Statistik")),l.a.createElement(d.a,null,l.a.createElement(v.a,{style:{color:"white"},data:n}))))}var y=Object(n.createContext)("https://covid19.mathdro.id/api"),O=Object(n.createContext)({}),x=t(6),C=t.n(x),j=t(183),D=t(184),N=t(185),T=t(186);function I(e){var a;if(void 0!==e.updateTgl){var t=new Date(e.updateTgl);a="Tanggal : ".concat(["Ahad","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"][t.getDay()],", ").concat(t.getDate()-e.dates,"-").concat(["Januari","Febuari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"][t.getMonth()]," ").concat(t.getFullYear(),", \n Jam : ").concat(t.toLocaleTimeString())}return l.a.createElement(j.a,{fluid:!0},l.a.createElement(D.a,null,l.a.createElement(N.a,{xs:"12",sm:"10",md:"8",lg:"8",xl:"8"},l.a.createElement(u.a,{className:"CovidWorld"},l.a.createElement(T.a,null,l.a.createElement(s.a,{color:"warning"},l.a.createElement("h5",null,"Informasi Kasus Covid 19 Seluruh ",e.identitas),l.a.createElement("br",null),l.a.createElement("span",null,"Informasi Terakhir, ",void 0!==a?a:"Belum Update"),l.a.createElement("br",null),l.a.createElement("span",null,"Realtime data : ",l.a.createElement("span",{ref:e.timerSet},"10")," Detik")),l.a.createElement(f.a,{color:"success",onClick:e.WIS},"Show Information World")),l.a.createElement(m.a,null,l.a.createElement(d.a,null,l.a.createElement(D.a,null,l.a.createElement(N.a,{className:"m-3"},l.a.createElement(E,{kasus:e.kasus})),l.a.createElement(N.a,{className:"m-3"},l.a.createElement(b,{kasus:e.kasus,sembuh:e.sembuh,meninggalDunia:e.meninggalDunia}))),l.a.createElement(D.a,null,l.a.createElement(N.a,{className:"m-3"},l.a.createElement(g,{sembuh:e.sembuh})),l.a.createElement(N.a,{className:"m-3"},l.a.createElement(h,{meninggalDunia:e.meninggalDunia}))))))),l.a.createElement(N.a,null,l.a.createElement(D.a,null,l.a.createElement(N.a,{xs:"12",sm:"10",md:"12",lg:"8",xl:"11"},l.a.createElement(k,{SIW:e.SIW,negara:e.negara}))),l.a.createElement(D.a,null,l.a.createElement(N.a,{xs:"12",sm:"10",md:"12",lg:"8",xl:"11"},l.a.createElement(w,{daily:e.daily,waktu:void 0!==a?a:void 0}))))))}var W=function(e){var a=Object(n.useContext)(y),t=Object(n.useContext)(O),r=Object(n.useState)(a),c=Object(i.a)(r,1)[0],E=Object(n.useState)(t),g=Object(i.a)(E,2),h=g[0],v=g[1],b=Object(n.useState)({path:"/countries/",label:"Indonesia",idNegara:"IDN",data:{}}),p=Object(i.a)(b,2),f=p[0],k=p[1],S=Object(n.useState)({}),w=Object(i.a)(S,2),x=w[0],j=w[1],D=Object(n.useState)({}),N=Object(i.a)(D,2),T=N[0],W=N[1],B=Object(n.useState)(!1),G=Object(i.a)(B,2),J=G[0],M=G[1],R=Object(n.useRef)(),A=10,H=new Date,F="".concat(H.getFullYear(),"-").concat(H.getMonth(),"-").concat(H.getDate()-1);function K(){var e=new Date,a="".concat(e.getDate()-1,"-").concat(e.getMonth(),"-").concat(e.getFullYear()),t=C()({url:"".concat(c).concat(f.path).concat(f.idNegara),method:"GET"}),n=C()({url:"".concat(c).concat(f.path),method:"GET"}),l="".concat(c,"/daily/").concat(a),r=C()({url:"".concat(l),method:"GET"});C.a.all([t,n,r]).then(C.a.spread((function(){for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];v(a[0].data),j(a[1].data),W(a[2].data)}))).catch((function(e){v({}),j({}),W({}),console.error("UpdateCovid2 "+e)}))}return Object(n.useEffect)((function(){function e(){var e=C()({url:"".concat(c).concat(f.path).concat(f.idNegara),method:"GET"}),a=C()({url:"".concat(c).concat(f.path),method:"GET"}),t="".concat(c,"/daily/").concat(F),n=C()({url:"".concat(t),method:"GET"});C.a.all([e,a,n]).then(C.a.spread((function(){M(!1);for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];v(a[0].data),j(a[1].data),W(a[2].data)}))).catch((function(e){M(!0),v({}),j({}),W({}),console.error("UpdateCovid "+e)}))}e(),setInterval((function(){A<=0?(A=10,e()):A--,null!==R.current&&void 0!==R.current&&(R.current.innerText=A)}),5500)}),[c,f.path,f.idNegara]),J?l.a.createElement(u.a,{color:"primary"},l.a.createElement(m.a,{className:"text-white"},l.a.createElement(s.a,null,l.a.createElement("h4",null,"Sedang dalam perbaikan")),l.a.createElement(d.a,null,"Website ini aspek ketersediaan informasinya terganggu, mohon maaf atas ketidaknyamanan ini",l.a.createElement("br",null),"Kami akan perbaiki secepatnya"))):Object.keys(h).length>0?l.a.createElement(I,{WIS:function(){var e=C()({url:"".concat(c),method:"GET"});C.a.all([e]).then(C.a.spread((function(){k(Object(o.a)({},f,{label:"Dunia"}));for(var e=arguments.length,a=new Array(e),t=0;t<e;t++)a[t]=arguments[t];v(a[0].data)}))).catch((function(e){v({}),K()}))},timerSet:R,dates:1,updateTgl:h.lastUpdate?h.lastUpdate:"0",SIW:function(e){var a=e.target.value.split("?"),t=C()({url:"".concat(c).concat(f.path).concat(a[1]),method:"GET"});C.a.all([t]).then(C.a.spread((function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];v(t[0].data),k(Object(o.a)({},f,{data:t[0].data,label:a[0]}))}))).catch((function(e){alert(e.response.data.error.message),v({}),k(Object(o.a)({},f,{data:{}})),K()}))},daily:void 0!==T?T:"",identitas:f.label,negara:void 0!==x.countries?x.countries:"",kasus:void 0!==h.confirmed?h.confirmed.value:"0",sembuh:void 0!==h.recovered?h.recovered.value:"0",meninggalDunia:h.deaths?h.deaths.value:"0"}):l.a.createElement(I,{SIW:"",daily:"",negara:void 0!==x.countries?x.countries:"",identitas:"",kasus:"0",sembuh:"0",meninggalDunia:"0"})};var B=function(){return l.a.createElement(W,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},62:function(e,a,t){e.exports=t(177)}},[[62,1,2]]]);
//# sourceMappingURL=main.e23c4b70.chunk.js.map