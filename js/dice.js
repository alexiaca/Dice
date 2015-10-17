/*
* grrd's Dice
* Copyright (c) 2015 Gerard Tyedmers, grrd@gmx.net
* Licensed under the MPL License
*/
"use strict";!function(){function a(){if(!qa||!aa){Qa.popup("close"),Ra.popup("close"),Fa.hide(),Da.hide();for(var a=0;pa>a;++a)ca[a]||(O[a]=Math.round((O[a]+30*Math.random()-15)/Math.PI*2)*Math.PI/2,R[a]=Math.round((R[a]+30*Math.random()-15)/Math.PI*2)*Math.PI/2,U[a]=Math.round((U[a]+30*Math.random()-15)/Math.PI*2)*Math.PI/2);aa=!0}}function b(){Fa.hide(),Da.hide(),D=document.createElement("div"),document.getElementById("dice").appendChild(D),E=new THREE.PerspectiveCamera(35,window.innerWidth/window.innerHeight,1,15),E.position.set(0,0,2.2),F=new THREE.Vector3(0,-1,0),G=new THREE.Scene;var a=new THREE.STLLoader;a.load("./models/dice.stl",function(a){I=new THREE.MeshPhongMaterial({ambient:16711782,color:16711782,specular:1118481,shininess:200}),a.applyMatrix((new THREE.Matrix4).makeTranslation(0,0,-30)),N[0]=new THREE.Mesh(a,I),N[0].position.set(0,0,0),N[0].rotation.y=-Math.PI/2,O[0]=-Math.PI/2,N[0].scale.set(.01,.01,.01),G.add(N[0]),K=(Math.round(N[0].rotation.x%(2*Math.PI)/Math.PI*2)+4)%4,L=(Math.round(N[0].rotation.y%(2*Math.PI)/Math.PI*2)+4)%4,M=(Math.round(N[0].rotation.z%(2*Math.PI)/Math.PI*2)+4)%4}),G.add(new THREE.AmbientLight(7829367)),c(.5,1,-1,16777215,1),c(-1,1,1,16777215,1.35),H=new THREE.WebGLRenderer({antialias:!0,alpha:!0}),H.setClearColor(0,0),H.setPixelRatio(window.devicePixelRatio),H.setSize(window.innerWidth,window.innerHeight),H.gammaInput=!0,H.gammaOutput=!0,D.appendChild(H.domElement),D.addEventListener("mousedown",j,!1),D.addEventListener("touchstart",o,!1),D.addEventListener("touchmove",p,!1),D.addEventListener("touchend",q,!1),window.addEventListener("resize",d,!1)}function c(a,b,c,d,e){var f=new THREE.DirectionalLight(d,e);f.position.set(a,b,c),G.add(f),f.castShadow=!0;var g=1;f.shadowCameraLeft=-g,f.shadowCameraRight=g,f.shadowCameraTop=g,f.shadowCameraBottom=-g,f.shadowCameraNear=1,f.shadowCameraFar=4,f.shadowMapWidth=1024,f.shadowMapHeight=1024,f.shadowBias=-.005,f.shadowDarkness=.15}function d(){E.aspect=window.innerWidth/window.innerHeight,E.updateProjectionMatrix(),H.setSize(window.innerWidth,window.innerHeight)}function e(){oa&&(requestAnimationFrame(e),f())}function f(){var a,b;for(ja=0,a=0;pa>a;++a)N[a].rotation.y+=.05*(O[a]-N[a].rotation.y),N[a].rotation.x+=.05*(R[a]-N[a].rotation.x),N[a].rotation.z+=.05*(U[a]-N[a].rotation.z),ja=Math.max(ja,Math.abs(N[a].rotation.y-O[a])+Math.abs(N[a].rotation.x-R[a])+Math.abs(N[a].rotation.z-U[a]));if(.02>ja&&aa){for(aa=!1,ha=0,da=[0,0,0,0,0,0],b=0;2>b;b++)for(a=0;pa>a;++a)K=(Math.round(R[a]%(2*Math.PI)/Math.PI*2)+4)%4,L=(Math.round(O[a]%(2*Math.PI)/Math.PI*2)+4)%4,M=(Math.round(U[a]%(2*Math.PI)/Math.PI*2)+4)%4,ba[a]=0,0==K&&0==L||2==K&&2==L?ba[a]=1:3==K&&1==M||1==K&&3==M||0==K&&1==L&&0==M||2==K&&3==L&&0==M||2==K&&1==L&&2==M||0==K&&3==L&&2==M?ba[a]=2:3==K&&0==M||1==K&&2==M||0==K&&1==L&&3==M||0==K&&3==L&&1==M||2==K&&1==L&&1==M||2==K&&3==L&&3==M?ba[a]=3:1==K&&0==M||3==K&&2==M||0==K&&3==L&&3==M||2==K&&1==L&&3==M||0==K&&1==L&&1==M||2==K&&3==L&&1==M?ba[a]=4:3==K&&3==M||1==K&&1==M||0==K&&3==L&&0==M||2==K&&3==L&&2==M||0==K&&1==L&&2==M||2==K&&1==L&&0==M?ba[a]=5:(0==K&&2==L||2==K&&0==L)&&(ba[a]=6),ha+=ba[a],da[ba[a]-1]=da[ba[a]-1]+1;if(qa)xa||1!=va||ra||(Ra.popup("open"),Oa.mousedown(function(a){$(this).off("mousedown"),Ra.popup("close"),j(a)}),Oa.mouseup(function(a){$(this).off("mouseup"),l(a)}),xa=!0),ra?ra=!1:va++,Da.html(va+" / 3"),Da.show(),Fa.html(navigator.mozL10n.get("lbplayer")+" "+ua),va>3&&g();else{Fa.html(ha);var c=C("debug");if(c){var d="";for(a=0;pa>a;++a)K=(Math.round(R[a]%(2*Math.PI)/Math.PI*2)+4)%4,L=(Math.round(O[a]%(2*Math.PI)/Math.PI*2)+4)%4,M=(Math.round(U[a]%(2*Math.PI)/Math.PI*2)+4)%4,d=d+""+K+" - "+L+" - "+M+" : "+ba[a]+"<br>";Fa.html(d)}}Fa.show()}H.render(G,E)}function g(){var a,b=0;for(a=0;a<ea.length;++a)ea[a]=0;for(a=0;a<da.length;++a){if(ea[a]=da[a]*(a+1),da[a]>=3&&(ea[7]=3*(a+1)),da[a]>=4&&(ea[8]=4*(a+1)),da[a]>=5&&(ea[12]=50),da[a]>=5&&(ea[9]=25),3==da[a])for(var c=0;c<da.length;++c)2==da[c]&&(ea[9]=25);da[a]>=1?b++:b=0,b>=4&&(ea[10]=30),b>=5&&(ea[11]=40)}for(ea[13]=ha,a=0;a<ea.length;++a)if(null===fa[ua-1][a]){var d=$("#bt"+a+"p"+ua);$("#lb"+a+"p"+ua).css("display","none"),d.css("display","block");var e=$("#bt"+a+"p"+ua+" .ui-btn-text");e.length?e.text(ea[a]):d.html(ea[a])}La.hide(),$.mobile.changePage("#popupYahtzee",{transition:"pop",role:"dialog"})}function h(a){var b=!1;fa[ua-1][a]=ea[a],$("#lb"+a+"p"+ua).html(ea[a]),ha=0;for(var c=0;c<ea.length;++c)$("#bt"+c+"p"+ua).css("display","none"),$("#lb"+c+"p"+ua).css("display","inline"),ha+=fa[ua-1][c],5==c&&($("#lbsum1p"+ua).html(ha),ha>=63&&($("#lbbonusp"+ua).html(35),ha+=35),ia=ha,$("#lbsum2p"+ua).html(ha));for($("#lbsum3p"+ua).html(ha-ia),$("#lbsum4p"+ua).html(ha),na[ua-1]=ha,La.show(),c=0;c<ea.length;++c)null===fa[ua-1][c]&&6!=c&&(b=!0);b||ua!=ta?(ua++,ua>ta&&(ua=1),va=1,Da.html(va+" / 3"),Fa.html(navigator.mozL10n.get("lbplayer")+" "+ua),x(),z()):(c=na.indexOf(Math.max.apply(Math,na)),Ua.html(navigator.mozL10n.get("lbplayer")+" "+(c+1)+" "+navigator.mozL10n.get("lbwin")),Va.html(navigator.mozL10n.get("lbwith")+" "+na[c]+" "+navigator.mozL10n.get("lbpts")),Ta.popup("open"),za=!0)}function i(){var a,b;for(a=0;a<ea.length;++a)for(ea[a]=0,b=0;5>b;++b){fa[b][a]=null,$("#bt"+a+"p"+(b+1)).css("display","none");var c=$("#lb"+a+"p"+(b+1));c.css("display","inline"),c.html("")}for(b=0;5>b;++b)ta>b?($("#imgp"+(b+1)).attr("style","width:100%;background-color: #CC002F;"),$("#lbsum1p"+(b+1)).html(0),$("#lbsum2p"+(b+1)).html(0),$("#lbsum3p"+(b+1)).html(0),$("#lbsum4p"+(b+1)).html(0)):($("#imgp"+(b+1)).attr("style","width:100%;background-color: #AAAAAA;"),$("#lbsum1p"+(b+1)).html(""),$("#lbsum2p"+(b+1)).html(""),$("#lbsum3p"+(b+1)).html(""),$("#lbsum4p"+(b+1)).html("")),$("#lbbonusp"+(b+1)).html(""),na[b]=0;ua=1,va=1,x(),Fa.html(navigator.mozL10n.get("lbplayer")+" "+ua),Da.html(va+" / 3"),Fa.show(),Da.show()}function j(a){Fa.hide(),Da.hide(),a.preventDefault(),D.addEventListener("mousemove",k,!1),D.addEventListener("mouseup",l,!1),D.addEventListener("mouseout",m,!1),Y=a.clientX-Aa,_=a.clientY-Ba,J=new Date;for(var b=0;pa>b;++b)P[b]=O[b],S[b]=R[b],V[b]=U[b],b>0&&(Q[b]=Math.random()+.5,T[b]=Math.random()+.5,W[b]=Math.random()+.5)}function k(a){if(X=a.clientX-Aa,Z=a.clientY-Ba,!qa||!aa)for(var b=0;pa>b;++b)ca[b]||(O[b]=P[b]+.08*(X-Y)*Q[b],R[b]=S[b]+.08*(Z-_)*T[b],U[b]=V[b]+(.08*(X-Y)*W[b]+.08*(Z-_)*W[b])/2)}function l(a){n(a)}function m(a){n(a)}function n(a){if(X=a.clientX-Aa,Z=a.clientY-Ba,D.removeEventListener("mousemove",k,!1),D.removeEventListener("mouseup",l,!1),D.removeEventListener("mouseout",m,!1),!qa||!aa){Math.abs(X-Y)<5&&Math.abs(Z-_)<5&&qa&&(ra=!0,new Date-J<300&&r());for(var b=0;pa>b;++b)ca[b]||(O[b]=Math.round(O[b]/Math.PI*2)*Math.PI/2,R[b]=Math.round(R[b]/Math.PI*2)*Math.PI/2,U[b]=Math.round(U[b]/Math.PI*2)*Math.PI/2);aa=!0}}function o(a){if(J=new Date,sa=!1,1===a.touches.length){a.preventDefault(),Fa.hide(),Da.hide(),Y=a.touches[0].pageX-Aa,_=a.touches[0].pageY-Ba,J=new Date;for(var b=0;pa>b;++b)P[b]=O[b],S[b]=R[b],V[b]=U[b],b>0&&(Q[b]=Math.random()+.5,T[b]=Math.random()+.5,W[b]=Math.random()+.5)}}function p(a){if(sa=!0,1===a.touches.length){if(a.preventDefault(),X=a.touches[0].pageX-Aa,Z=a.touches[0].pageY-Ba,qa&&aa)return;for(var b=0;pa>b;++b)ca[b]||(O[b]=P[b]+.02*(X-Y)*Q[b],R[b]=S[b]+.02*(Z-_)*T[b],U[b]=V[b]+(.02*(X-Y)*W[b]+.02*(Z-_)*W[b])/2)}}function q(a){if(a.preventDefault(),!qa||!aa){0==sa&&qa&&(ra=!0,new Date-J<500&&(X=Y,Z=_,r()));for(var b=0;pa>b;++b)ca[b]||(O[b]=Math.round(O[b]/Math.PI*2)*Math.PI/2,R[b]=Math.round(R[b]/Math.PI*2)*Math.PI/2,U[b]=Math.round(U[b]/Math.PI*2)*Math.PI/2);aa=!0}}function r(){var a;for(a=0;pa>a;++a)ca[a]||(O[a]=P[a],R[a]=S[a],U[a]=V[a]);if(1!=va&&!aa)for(la>ma?(0>X&&Z>la/15&&(ca[4]=!ca[4],$("#imglock4").toggle()),X>0&&Z>la/15&&(ca[1]=!ca[1],$("#imglock1").toggle()),X>la/-15&&la/15>X&&Z>la/-15&&la/15>Z&&(ca[2]=!ca[2],$("#imglock2").toggle()),0>X&&la/-15>Z&&(ca[3]=!ca[3],$("#imglock3").toggle()),X>0&&la/-15>Z&&(ca[0]=!ca[0],$("#imglock0").toggle())):(0>Z&&X>la/15&&(ca[0]=!ca[0],$("#imglock0").toggle()),Z>0&&X>la/15&&(ca[1]=!ca[1],$("#imglock1").toggle()),Z>la/-15&&la/15>Z&&X>la/-15&&la/15>X&&(ca[2]=!ca[2],$("#imglock2").toggle()),0>Z&&la/-15>X&&(ca[3]=!ca[3],$("#imglock3").toggle()),Z>0&&la/-15>X&&(ca[4]=!ca[4],$("#imglock4").toggle())),a=0;pa>a&&ca[a];++a)a==pa-1&&g()}function s(){if(la=$(window).height(),ma=$(window).width(),Aa=window.innerWidth/2,Ba=window.innerHeight/2,la>ma){if(ka=la/7,Ja.attr("style","position:absolute; top:"+(Ba-2.4*ka)+"px; left:"+(Aa-1.4*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock3").css("display")),Ga.attr("style","position:absolute; top:"+(Ba-2.4*ka)+"px; left:"+(Aa+.4*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock0").css("display")),Ia.attr("style","position:absolute; top:"+(Ba-ka/2)+"px; left:"+(Aa-ka/2)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock2").css("display")),Ka.attr("style","position:absolute; top:"+(Ba+1.3*ka)+"px; left:"+(Aa-1.4*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock4").css("display")),Ha.attr("style","position:absolute; top:"+(Ba+1.3*ka)+"px; left:"+(Aa+.4*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock1").css("display")),$("#img_title").attr("style","width:100%;margin-top:-10px;"),$("#img_title2").attr("style","width:100%;margin-top:-20px;"),$("#img_title3h").show(),$("#img_title3q").hide(),Ma.css({width:"100%",position:"absolute",bottom:"0","margin-bottom":"16px"}),Na.css({width:ma/2-16+"px",height:""}),Pa.css({width:ma/2-16+"px",height:""}),$("#btdice_pad").attr("style",""),$("#btyahtzee_pad").attr("style",""),"undefined"!=typeof N[0]&&null!==N[0])switch(pa){case 1:N[0].position.set(0,0,0),E.position.set(0,0,2.2);break;case 2:N[0].position.set(0,.45,0),N[1].position.set(0,-.45,0),E.position.set(0,0,3);break;case 3:N[0].position.set(0,.9,0),N[1].position.set(0,0,0),N[2].position.set(0,-.9,0),E.position.set(0,0,4.2);break;case 4:N[0].position.set(.45,.45,0),N[1].position.set(-.45,.45,0),N[2].position.set(.45,-.45,0),N[3].position.set(-.45,-.45,0),E.position.set(0,0,4.2);break;case 5:N[0].position.set(.45,.9,0),N[1].position.set(.45,-.9,0),N[2].position.set(0,0,0),N[3].position.set(-.45,.9,0),N[4].position.set(-.45,-.9,0),E.position.set(0,0,5.6)}}else if(ka=la/6,Ja.attr("style","position:absolute; top:"+(Ba-1.7*ka)+"px; left:"+(Aa-2.8*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock3").css("display")),Ga.attr("style","position:absolute; top:"+(Ba-1.7*ka)+"px; left:"+(Aa+1.8*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock0").css("display")),Ia.attr("style","position:absolute; top:"+(Ba-ka/2)+"px; left:"+(Aa-ka/2)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock2").css("display")),Ka.attr("style","position:absolute; top:"+(Ba+.6*ka)+"px; left:"+(Aa-2.8*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock4").css("display")),Ha.attr("style","position:absolute; top:"+(Ba+.6*ka)+"px; left:"+(Aa+1.8*ka)+"px; pointer-events:none; width:"+ka+"px; height:"+ka+"px; display:"+$("#imglock1").css("display")),$("#img_title").attr("style","width:calc(46% - 15px);margin-bottom:20px;"),$("#img_title2").attr("style","width:calc(31% - 10px);margin-top:0px;margin-bottom:20px;margin-left:20px;"),$("#img_title3h").hide(),$("#img_title3q").show(),Ma.css({width:"100%",position:"absolute","margin-bottom":(la-.2*ma-100)/3.5+"px",bottom:"0"}),Na.css({width:ma/2-16+"px",height:Math.max((la-.2*ma-100)/2,40)+"px"}),Pa.css({width:ma/2-16+"px",height:Math.max((la-.2*ma-100)/2,40)+"px"}),$("#btdice_pad").attr("style","padding-top:"+Math.max((la-.2*ma-200)/4,0)+"px;"),$("#btyahtzee_pad").attr("style","padding-top:"+Math.max((la-.2*ma-200)/4,0)+"px;"),"undefined"!=typeof N[0]&&null!==N[0])switch(pa){case 1:N[0].position.set(0,0,0),E.position.set(0,0,1.8);break;case 2:N[0].position.set(.45,0,0),N[1].position.set(-.45,0,0),E.position.set(0,0,2.2);break;case 3:N[0].position.set(.9,0,0),N[1].position.set(0,0,0),N[2].position.set(-.9,0,0),E.position.set(0,0,3);break;case 4:N[0].position.set(.45,.45,0),N[1].position.set(-.45,.45,0),N[2].position.set(.45,-.45,0),N[3].position.set(-.45,-.45,0),E.position.set(0,0,3);break;case 5:N[0].position.set(.9,.45,0),N[1].position.set(.9,-.45,0),N[2].position.set(0,0,0),N[3].position.set(-.9,.45,0),N[4].position.set(-.9,-.45,0),E.position.set(0,0,4)}Qa.css("max-width",ma-10+"px"),Ra.css("max-width",ma-10+"px"),Sa.css("max-width",ma-10+"px"),Ta.css("max-width",ma-40+"px"),$("#start").css("width",ma-30+"px");for(var a=1;6>a;++a)$("#radio"+a).attr("style","width:"+(ma-50)/5.3+"px;max-width:92px;height:"+(ma-50)/5.3+"px;max-height:92px;"),$("#img_color"+a).css({"max-width":"80px",width:+(ma-90)/5.5+"px"}),$("#imganzahl"+a).css({"max-width":"9179px",width:+(ma-70)/5.1+"px",margin:"-5px -5px -5px -15px"})}function t(a){qa=a,Ca.html(qa?navigator.mozL10n.get("lbanzpl"):navigator.mozL10n.get("lbanz")),$("#btdiceyahtzee").slideToggle(),setTimeout(function(){$("#grpanzahl").slideToggle()},500)}function u(a){var b=$("input:radio[name=color]:checked");oa=!0,qa?(ta=a,v(5),$("input:radio[name=anzahl]").filter("[value=5]").prop("checked",!0),y(),i(),Ea.show()):(v(a),Fa.hide(),Da.hide(),Ea.hide(),x()),Wa.start(),e(),$.mobile.changePage("#dice",{transition:"slide"}),N[0].material.color.setHex(b.val()),N[0].material.ambient.setHex(b.val())}function v(a){if(a>pa)for(ga=pa;a>ga;++ga)("undefined"==typeof N[ga]||null==N[ga])&&A(ga),G.add(N[ga]);if(pa>a)for(ga=a;pa>ga;++ga)G.remove(N[ga]);pa=a,s()}function w(){for(Wa.stop(),oa=!1,Fa.hide(),Da.hide(),$("#btdiceyahtzee").show(),$("#grpanzahl").hide(),x(),$.mobile.changePage("#title",{transition:"slide",reverse:!0}),ga=0;pa>ga;++ga)N[ga].rotation.y=O[ga],N[ga].rotation.x=R[ga],N[ga].rotation.z=U[ga];aa=!1}function x(){var a;for(a=0;5>a;++a)ca[a]=!1,$("#imglock"+a).hide()}function y(){s(),$.mobile.changePage("#title",{transition:"pop",reverse:!0})}function z(){Wa.start(),oa=!0,e(),za?(za=!1,w()):$.mobile.changePage("#dice",{transition:"pop",reverse:!0})}function A(a){N[a]=N[0].clone(),N[a].rotation.y=-Math.PI/2,N[a].scale.set(.01,.01,.01),O[a]=Math.round((O[a]+30*Math.random()-15)/Math.PI*2)*Math.PI/2,R[a]=Math.round((R[a]+30*Math.random()-15)/Math.PI*2)*Math.PI/2,U[a]=Math.round((U[a]+30*Math.random()-15)/Math.PI*2)*Math.PI/2,N[a].rotation.y=O[a],N[a].rotation.x=R[a],N[a].rotation.z=U[a]}function B(a){Ua.html(navigator.mozL10n.get(a)),Va.html(navigator.mozL10n.get(a+"txt")),Ta.popup("open")}function C(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b="[\\?&]"+a+"=([^&#]*)",c=new RegExp(b),d=c.exec(window.location.href);return null!==d?d[1]:!1}for(var D,E,F,G,H,I,J,K,L,M,N=[],O=[0,0,0,0,0],P=[0,0,0,0,0],Q=[1,0,0,0,0],R=[0,0,0,0,0],S=[0,0,0,0,0],T=[1,0,0,0,0],U=[0,0,0,0,0],V=[0,0,0,0,0],W=[1,0,0,0,0],X=0,Y=0,Z=0,_=0,aa=!1,ba=[0,0,0,0,0],ca=[!1,!1,!1,!1,!1],da=[0,0,0,0,0,0],ea=new Array(14),fa=new Array(5),ga=0;ga<fa.length;++ga)fa[ga]=new Array(14);var ha,ia,ja,ka,la,ma,na=[0,0,0,0,0],oa=!1,pa=1,qa=!0,ra=!1,sa=!1,ta=2,ua=1,va=1,wa=!1,xa=!1,ya=!1,za=!1,Aa=window.innerWidth/2,Ba=window.innerHeight/2,Ca=$("#lbanz"),Da=$("#lbtry"),Ea=$("#bt_list"),Fa=$("#lbtotwert"),Ga=$("#imglock0"),Ha=$("#imglock1"),Ia=$("#imglock2"),Ja=$("#imglock3"),Ka=$("#imglock4"),La=$("#div_close_list"),Ma=$("#btdiceyahtzee"),Na=$("#btdice"),Oa=$("#dice"),Pa=$("#btyahtzee"),Qa=$("#popupSwipe"),Ra=$("#popupLock"),Sa=$("#popupWebGL"),Ta=$("#popupHelp"),Ua=$("#helptit"),Va=$("#helptxt");Na.click(function(a){t(!1),a.preventDefault()}),Pa.click(function(a){t(!0),a.preventDefault()}),Ea.click(function(a){$.mobile.changePage("#popupYahtzee",{transition:"pop",role:"dialog"}),a.preventDefault()}),$("#bt_quit").click(function(a){w(),a.preventDefault()}),$("#bt_closeSettings").click(function(a){y(),a.preventDefault()}),$("#popupYahtzee").mousedown(function(){$("#popupHelp").popup("close")}),$("#bt_close_list").click(function(a){z(),a.preventDefault()}),$("[id^=btanzahl]").click(function(a){u(Number($(this).attr("id").slice(-1))),a.preventDefault()}),$(".help").click(function(a){B($(this).attr("id")),a.preventDefault()}),$("[id^=bt0p]").click(function(a){h(0),a.preventDefault()}),$("[id^=bt1p]").click(function(a){h(1),a.preventDefault()}),$("[id^=bt2p]").click(function(a){h(2),a.preventDefault()}),$("[id^=bt3p]").click(function(a){h(3),a.preventDefault()}),$("[id^=bt4p]").click(function(a){h(4),a.preventDefault()}),$("[id^=bt5p]").click(function(a){h(5),a.preventDefault()}),$("[id^=bt7p]").click(function(a){h(7),a.preventDefault()}),$("[id^=bt8p]").click(function(a){h(8),a.preventDefault()}),$("[id^=bt9p]").click(function(a){h(9),a.preventDefault()}),$("[id^=bt10p]").click(function(a){h(10),a.preventDefault()}),$("[id^=bt11p]").click(function(a){h(11),a.preventDefault()}),$("[id^=bt12p]").click(function(a){h(12),a.preventDefault()}),$("[id^=bt13p]").click(function(a){h(13),a.preventDefault()});var Wa=new Shake({threshold:8,timeout:1e3});window.addEventListener("shake",a,!1),$(document).on("pageshow","#dice",function(){wa||(Qa.popup("open"),Oa.mousedown(function(a){$(this).off("mousedown"),$("#popupSwipe").popup("close"),j(a)}),Oa.mouseup(function(a){$(this).off("mouseup"),l(a)}),wa=!0)}),$(document).on("pageshow","#popupYahtzee",function(){Wa.stop(),oa=!1,ya||(Ua.html(navigator.mozL10n.get("lbhelp")),Va.html(""),Ta.popup("open"),ya=!0)}),Detector.webgl?b():setTimeout(function(){Sa.popup("open")},500),s(),setTimeout(function(){s()},500),$(window).resize(function(){s(),setTimeout(function(){s()},500)}),navigator.mozL10n.ready(function(){var a=C("lang");a&&a!==navigator.mozL10n.language.code&&(navigator.mozL10n.language.code=a)})}();