window.dzsprx_self_options={};
(function(c){c.fn.dzsparallaxer=function(b){if("undefined"==typeof b&&"undefined"!=typeof c(this).attr("data-options")&&""!=c(this).attr("data-options")){var h=c(this).attr("data-options");eval("window.dzsprx_self_options = "+h);b=c.extend({},window.dzsprx_self_options);window.dzsprx_self_options=c.extend({},{})}b=c.extend({settings_mode:"scroll",mode_scroll:"normal",easing:"easeIn",animation_duration:"20",direction:"normal",js_breakout:"off",breakout_fix:"off",is_fullscreen:"off",settings_movexaftermouse:"off",
    init_delay:"0",init_functional_delay:"0",settings_substract_from_th:0,init_functional_remove_delay_on_scroll:"off",settings_makeFunctional:!1,settings_scrollTop_is_another_element_top:null},b);Math.easeIn=function(b,c,h,p){return-h*(b/=p)*(b-2)+c};Math.easeOutQuad=function(b,c,h,p){b/=p;return-h*b*(b-2)+c};Math.easeInOutSine=function(b,c,h,p){return-h/2*(Math.cos(Math.PI*b/p)-1)+c};this.each(function(){function h(){if(1==b.settings_makeFunctional){var d=!1,e=document.URL,x=e.indexOf("://")+3,k=e.indexOf("/",
    x),e=e.substring(x,k);-1<e.indexOf("l")&&-1<e.indexOf("c")&&-1<e.indexOf("o")&&-1<e.indexOf("l")&&-1<e.indexOf("a")&&-1<e.indexOf("h")&&(d=!0);-1<e.indexOf("d")&&-1<e.indexOf("i")&&-1<e.indexOf("g")&&-1<e.indexOf("d")&&-1<e.indexOf("z")&&-1<e.indexOf("s")&&(d=!0);-1<e.indexOf("o")&&-1<e.indexOf("z")&&-1<e.indexOf("e")&&-1<e.indexOf("h")&&-1<e.indexOf("t")&&(d=!0);-1<e.indexOf("e")&&-1<e.indexOf("v")&&-1<e.indexOf("n")&&-1<e.indexOf("a")&&-1<e.indexOf("t")&&(d=!0);if(0==d)return}b.settings_scrollTop_is_another_element_top&&
(w=b.settings_scrollTop_is_another_element_top);l=a.find(".dzsparallaxer--target").eq(0);0<a.find(".dzsparallaxer--blackoverlay").length&&(F=a.find(".dzsparallaxer--blackoverlay").eq(0));0<a.find(".dzsparallaxer--fadeouttarget").length&&(T=a.find(".dzsparallaxer--fadeouttarget").eq(0));a.hasClass("wait-readyall")||setTimeout(function(){y=Number(b.animation_duration)},300);f=a.height();"on"==b.settings_movexaftermouse&&(m=a.width());l&&(g=l.height(),"on"==b.settings_movexaftermouse&&(G=l.width()));
    b.settings_substract_from_th&&(g-=b.settings_substract_from_th);U=f;"2"==b.breakout_fix&&console.info(a.prev());a.attr("data-responsive-reference-width")&&(H=Number(a.attr("data-responsive-reference-width")));a.attr("data-responsive-optimal-height")&&(M=Number(a.attr("data-responsive-optimal-height")));0<a.find(".dzsprxseparator--bigcurvedline").length&&a.find(".dzsprxseparator--bigcurvedline").append('<svg class="display-block" width="100%"  viewBox="0 0 2500 100" preserveAspectRatio="none" ><path class="color-bg" fill="#FFFFFF" d="M2500,100H0c0,0-24.414-1.029,0-6.411c112.872-24.882,2648.299-14.37,2522.026-76.495L2500,100z"/></svg>');
    0<a.find(".dzsprxseparator--2triangles").length&&a.find(".dzsprxseparator--2triangles").append('<svg class="display-block" width="100%"  viewBox="0 0 1500 100" preserveAspectRatio="none" ><polygon class="color-bg" fill="#FFFFFF" points="1500,100 0,100 0,0 750,100 1500,0 "/></svg>');0<a.find(".dzsprxseparator--triangle").length&&a.find(".dzsprxseparator--triangle").append('<svg class="display-block" width="100%"  viewBox="0 0 2200 100" preserveAspectRatio="none" ><polyline class="color-bg" fill="#FFFFFF" points="2200,100 0,100 0,0 2200,100 "/></svg>');
    a.get(0)&&(a.get(0).api_set_scrollTop_is_another_element_top=function(a){w=a});0<a.find(".divimage").length||0<a.find("img").length?(d=a.children(".divimage, img").eq(0),d.attr("data-src")?(V=d.attr("data-src"),c(window).bind("scroll",t),t()):E()):E()}function E(){if(!I){I=!0;is_ie11()&&a.addClass("is-ie-11");c(window).bind("resize",ea);ea();a.hasClass("wait-readyall")&&setTimeout(function(){t()},700);setTimeout(function(){a.addClass("dzsprx-readyall");t();a.hasClass("wait-readyall")&&(y=Number(b.animation_duration))},
    1E3);0<a.find("*[data-parallaxanimation]").length&&a.find("*[data-parallaxanimation]").each(function(){var a=c(this);if(a.attr("data-parallaxanimation")){null==D&&(D=[]);D.push(a);var b=a.attr("data-parallaxanimation");try{eval("window.aux_opts2 = "+b)}catch(e){console.info(e),window.aux_opts2=null}if(window.aux_opts2){for(n=0;n<window.aux_opts2.length;n++)0==isNaN(Number(window.aux_opts2[n].initial))&&(window.aux_opts2[n].initial=Number(window.aux_opts2[n].initial)),0==isNaN(Number(window.aux_opts2[n].mid))&&
(window.aux_opts2[n].mid=Number(window.aux_opts2[n].mid)),0==isNaN(Number(window.aux_opts2[n]["final"]))&&(window.aux_opts2[n]["final"]=Number(window.aux_opts2[n]["final"]));a.data("parallax_options",window.aux_opts2)}}});W&&(N=!0,setTimeout(function(){N=!1},W));a.hasClass("simple-parallax")?l.wrap('<div class="simple-parallax-inner"></div>'):O();fa=setInterval(p,1E3);setTimeout(function(){},1500);if(a.hasClass("use-loading")){if(0<a.find(".divimage").length||0<a.children("img").length){if(0<a.find(".divimage").length){V&&
a.find(".divimage").eq(0).css("background-image","url("+V+")");var d=String(a.find(".divimage").eq(0).css("background-image")).split('"')[1];void 0==d&&(d=String(a.find(".divimage").eq(0).css("background-image")).split("url(")[1],d=String(d).split(")")[0]);var e=new Image;e.onload=function(b){a.addClass("loaded")};e.src=d}}else a.addClass("loaded");setTimeout(function(){a.addClass("loaded");ga()},1E4)}a.get(0).api_set_update_func=function(a){C=a};a.get(0).api_handle_scroll=t;a.get(0).api_destroy=
    la;a.get(0).api_destroy_listeners=ma;"scroll"==b.settings_mode&&(c(window).unbind("scroll",t),c(window).bind("scroll",t),t(),setTimeout(t,1E3),document&&document.addEventListener&&document.addEventListener("touchmove",X,!1));"mouse_body"!=b.settings_mode&&"on"!=b.settings_movexaftermouse||c(document).bind("mousemove",X)}}function la(){C=null;ha=!0;C=null;c(window).unbind("scroll",t);document&&document.addEventListener&&document.removeEventListener("touchmove",X,!1)}function p(){Y=!0}function ma(){clearInterval(fa)}
    function ea(){m=a.width();r=c(window).height();Z=c(window).width();!1!==I&&(H&&M&&(m<H?a.height(m/H*M):a.height(M)),760>m?a.addClass("under-760"):a.removeClass("under-760"),aa&&clearTimeout(aa),aa=setTimeout(ga,700),"on"==b.js_breakout&&(a.css("width",Z+"px"),a.css("margin-left","0"),0<a.offset().left&&a.css("margin-left","-"+a.offset().left+"px")))}function ga(){f=a.height();g=l.height();r=c(window).height();b.settings_substract_from_th&&(g-=b.settings_substract_from_th);0==a.hasClass("allbody")&&
    0==a.hasClass("dzsparallaxer---window-height")&&0==H&&(g<=U&&0<g?(a.height(g),f=a.height(),is_ie()&&10>=version_ie()?l.css("top","0"):l.css("transform","translate3d(0,0px,0)"),F&&F.css("opacity","0")):a.height(U));l.attr("data-forcewidth_ratio")&&(l.width(Number(l.attr("data-forcewidth_ratio"))*l.height()),l.width()<a.width()&&l.width(a.width()))}function X(a){if("mouse_body"==b.settings_mode){d=a.pageY;var c=0;if(0==g)return;c=d/r*(f-g);z=d/f;0<c&&(c=0);c<f-g&&(c=f-g);1<z&&(z=1);0>z&&(z=0);P=c}"on"==
    b.settings_movexaftermouse&&(c=0,c=a.pageX/Z*(m-G),0<c&&(c=0),c<m-G&&(c=m-G),ia=c)}function t(h,e){d=c(window).scrollTop();q=0;w&&(d=-parseInt(w.css("top"),10));isNaN(d)&&(d=0);h&&"on"==b.init_functional_remove_delay_on_scroll&&(N=!1);var x={force_vi_y:null,from:"",force_ch:null,force_th:null};e&&(x=c.extend(x,e));null!=x.force_ch&&(f=x.force_ch);null!=x.force_th&&(g=x.force_th);!1===I&&(r=c(window).height(),d+r>=a.offset().top&&E());if(0!=g&&!1!==I&&"scroll"==b.settings_mode){"fromtop"==b.mode_scroll&&
    (q=d/f*(f-g),"on"==b.is_fullscreen&&(q=d/(c("body").height()-r)*(f-g),w&&(q=d/(w.height()-r)*(f-g))),"reverse"==b.direction&&(q=(1-d/f)*(f-g),"on"==b.is_fullscreen&&(q=(1-d/(c("body").height()-r))*(f-g),w&&(q=(1-d/(w.height()-r))*(f-g)))));A=a.offset().top;w&&(A=-parseInt(w.css("top"),10));var k=(d-(A-r))/(A+f-(A-r));"on"==b.is_fullscreen&&(k=d/(c("body").height()-r),w&&(k=d/(w.outerHeight()-r)));1<k&&(k=1);0>k&&(k=0);if(D)for(n=0;n<D.length;n++){var t=D[n],m=t.data("parallax_options");if(m)for(var B=
        0;B<m.length;B++){if(.5>=k){var p=2*k,u=2*k-1;0>u&&(u=-u);p=u*m[B].initial+p*m[B].mid}else p=2*(k-.5),u=p-1,0>u&&(u=-u),p=u*m[B].mid+p*m[B]["final"];u=m[B].value;u=u.replace("{{val}}",p);t.css(m[B].property,u)}}"normal"==b.mode_scroll&&(q=k*(f-g),"reverse"==b.direction&&(q=(1-k)*(f-g)),a.hasClass("debug-target")&&console.info(b.mode_scroll,d,A,r,f,A+f,k));T&&(k=Math.abs((d-A)/a.outerHeight()-1),1<k&&(k=1),0>k&&(k=0),T.css("opacity",k));z=d/f;0<q&&(q=0);q<f-g&&(q=f-g);1<z&&(z=1);0>z&&(z=0);x.force_vi_y&&
    (q=x.force_vi_y);P=q;ja=z;0===y&&(v=P,is_ie()&&10>=version_ie()?l.css("top",""+v+"px"):l.css("transform","translate3d(0,"+v+"px,0)"))}}function O(){if(N)return requestAnimFrame(O),!1;isNaN(v)&&(v=0);Y&&(Y=!1);if(0===y)return C&&C(v),requestAnimFrame(O),!1;J=v;Q=P-J;K=L;R=ja-K;"easeIn"==b.easing&&(v=Number(Math.easeIn(1,J,Q,y).toFixed(5)),L=Number(Math.easeIn(1,K,R,y).toFixed(5)));"easeOutQuad"==b.easing&&(v=Math.easeOutQuad(1,J,Q,y),L=Math.easeOutQuad(1,K,R,y));"easeInOutSine"==b.easing&&(v=Math.easeInOutSine(1,
        J,Q,y),L=Math.easeInOutSine(1,K,R,y));S=0;"on"==b.settings_movexaftermouse&&(ba=S,ka=ia-ba,S=Math.easeIn(1,ba,ka,y));is_ie()&&10>=version_ie()?l.css("top",""+v+"px"):l.css("transform","translate3d("+S+"px,"+v+"px,0)");F&&F.css("opacity",L);C&&C(v);if(ha)return!1;requestAnimFrame(O)}var a=c(this),l=null,F=null,T=null,n=0,G=0,g=0,f=0,m=G=0,Z=0,r=0,U=0,aa=0,y=0,v=0,S=0,L=0,J=0,ba=0,K=0,P=0,ia=0,ja=0,Q=0,ka=0,R=0,C=null,w=null,d=0,q=0,z=0,A=0,V="",I=!1,Y=!1,D=null,ha=!1,N=!1,ca=0,W=0,fa=0,H=0,M=0,ca=
        Number(b.init_delay),W=Number(b.init_functional_delay);ca?setTimeout(h,ca):h()})};window.dzsprx_init=function(b,h){if("undefined"!=typeof h&&"undefined"!=typeof h.init_each&&1==h.init_each){var da=0,E;for(E in h)da++;1==da&&(h=void 0);c(b).each(function(){c(this).dzsparallaxer(h)})}else c(b).dzsparallaxer(h)}})(jQuery);function is_touch_device(){return!!("ontouchstart"in window)}
window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(c){window.setTimeout(c,1E3/60)}}();function is_ie(){var c=window.navigator.userAgent,b=c.indexOf("MSIE ");if(0<b)return parseInt(c.substring(b+5,c.indexOf(".",b)),10);if(0<c.indexOf("Trident/"))return b=c.indexOf("rv:"),parseInt(c.substring(b+3,c.indexOf(".",b)),10);b=c.indexOf("Edge/");return 0<b?parseInt(c.substring(b+5,c.indexOf(".",b)),10):!1}
function is_ie11(){return!window.ActiveXObject&&"ActiveXObject"in window}function version_ie(){return parseFloat(navigator.appVersion.split("MSIE")[1])}jQuery(document).ready(function(c){c(".dzsparallaxer---window-height").each(function(){function b(){var b=c(window).height();h.height(b)}var h=c(this);c(window).bind("resize",b);b()});dzsprx_init(".dzsparallaxer.auto-init",{init_each:!0})});