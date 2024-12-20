!function(e,t){"function"==typeof define&&define.amd?define(["exports","module"],t):"undefined"!=typeof exports&&"undefined"!=typeof module?t(0,module):(t(t={exports:{}},t),e.autosize=t.exports)}(this,function(e,t){"use strict";var n,u="function"==typeof Set?new Set:(n=[],{has:function(e){return Boolean(-1<n.indexOf(e))},add:function(e){n.push(e)},delete:function(e){n.splice(n.indexOf(e),1)}});function o(e){var t;e&&e.nodeName&&"TEXTAREA"===e.nodeName&&((t=document.createEvent("Event")).initEvent("autosize:destroy",!0,!1),e.dispatchEvent(t))}function i(e){var t;e&&e.nodeName&&"TEXTAREA"===e.nodeName&&((t=document.createEvent("Event")).initEvent("autosize:update",!0,!1),e.dispatchEvent(t))}var r=null;"undefined"==typeof window||"function"!=typeof window.getComputedStyle?((r=function(e){return e}).destroy=function(e){return e},r.update=function(e){return e}):((r=function(e,t){return e&&Array.prototype.forEach.call(e.length?e:[e],function(e){return function(i,e){var r,n,o,e=void 0===e?{}:e,t=void 0===(t=e.setOverflowX)||t,e=e.setOverflowY,d=void 0===e||e;function s(e){var t=i.style.width;i.style.width="0px",i.offsetWidth,i.style.width=t,n=e,d&&(i.style.overflowY=e),l()}function l(){var e=window.pageYOffset,t=document.body.scrollTop,n=i.style.height,o=(i.style.height="auto",i.scrollHeight+r);0!==i.scrollHeight?(i.style.height=o+"px",document.documentElement.scrollTop=e,document.body.scrollTop=t):i.style.height=n}function a(){var e=i.style.height;l(),window.getComputedStyle(i,null).height!==i.style.height?"visible"!==n&&s("visible"):"hidden"!==n&&s("hidden"),e!==i.style.height&&((e=document.createEvent("Event")).initEvent("autosize:resized",!0,!1),i.dispatchEvent(e))}i&&i.nodeName&&"TEXTAREA"===i.nodeName&&!u.has(i)&&(r=null,n="hidden",o=function(t){window.removeEventListener("resize",a),i.removeEventListener("input",a),i.removeEventListener("keyup",a),i.removeEventListener("autosize:destroy",o),u.delete(i),Object.keys(t).forEach(function(e){i.style[e]=t[e]})}.bind(i,{height:i.style.height,resize:i.style.resize,overflowY:i.style.overflowY,overflowX:i.style.overflowX,wordWrap:i.style.wordWrap}),i.addEventListener("autosize:destroy",o),"onpropertychange"in i&&"oninput"in i&&i.addEventListener("keyup",a),window.addEventListener("resize",a),i.addEventListener("input",a),i.addEventListener("autosize:update",a),u.add(i),d&&(i.style.overflowY="hidden"),t&&(i.style.overflowX="hidden",i.style.wordWrap="break-word"),"vertical"===(e=window.getComputedStyle(i,null)).resize?i.style.resize="none":"both"===e.resize&&(i.style.resize="horizontal"),r="content-box"===e.boxSizing?-(parseFloat(e.paddingTop)+parseFloat(e.paddingBottom)):parseFloat(e.borderTopWidth)+parseFloat(e.borderBottomWidth),isNaN(r)&&(r=0),a())}(e,t)}),e}).destroy=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],o),e},r.update=function(e){return e&&Array.prototype.forEach.call(e.length?e:[e],i),e}),t.exports=r});
!function(r){r.burger=function(e,t){var s={isMobile:!1,isOpen:!0,selectorMenu:".megamenu",classItem:"accessible-megamenu-top-nav-item",breakpoint:543,timeout:!1},i=this,n=(i.settings={},r(e)),a=(i.init=function(){i.settings=r.extend({},s,t),a(),o(),i.settings.isMobile=window.matchMedia("(max-width:"+i.settings.breakpoint+"px)").matches,i.settings.isOpen=!i.settings.isMobile,r(i.settings.selectorMenu).addClass("mobile-hidden"),n.removeClass("js-hidden")},function(){var e,t=n.data();for(e in t)i.settings[e]=t[e]}),o=function(){n.off("click.ham").on("click.ham",i.switchMenu),r(window).on("resize",i.windowResize),i.switchStates()};i.windowResize=function(){clearTimeout(i.timeout),i.timeout=setTimeout(function(){i.settings.isMobile=window.matchMedia("(max-width:"+i.settings.breakpoint+"px)").matches,i.settings.isMobile||i.settings.isOpen||i.switchMenu(!0)},50)},i.switchStates=function(){var e=i.settings.classItem,t=e+"disabled";i.settings.isMobile?r("."+e).removeClass(e).addClass(t):r("."+t).removeClass(t).addClass(e),r(i.settings.selectorMenu).attr("aria-hidden",!i.settings.isOpen)},i.switchMenu=function(e){i.settings.isOpen="boolean"==typeof e?e:!i.settings.isOpen;var e=i.settings.isOpen,t=r(i.settings.selectorMenu);t.attr("aria-hidden",!e),e?t.slideDown("fast"):t.slideUp("fast"),r(this).attr("aria-expanded",e).attr("aria-pressed",e).toggleClass("active",e),i.switchStates()},i.init()},r.fn.burger=function(t){return this.each(function(){var e;void 0===r(this).data("burger")&&(e=new r.burger(this,t),r(this).data("burger",e))})},r(".js-burger").burger()}(jQuery);
!function(x,y,u){"use strict";var a,T,n,N,l,D,E,i,o,r,c,f,d,h,p,b,s="accessibleMegaMenu",g={uuidPrefix:"accessible-megamenu",menuClass:"accessible-megamenu",topNavItemClass:"accessible-megamenu-top-nav-item",panelClass:"accessible-megamenu-panel",panelGroupClass:"accessible-megamenu-panel-group",hoverClass:"hover",focusClass:"focus",openClass:"open"},k={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38,keyMap:{48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",96:"0",97:"1",98:"2",99:"3",100:"4",101:"5",102:"6",103:"7",104:"8",105:"9",190:"."}};function I(e,t){this.element=e,this.settings=x.extend({},g,t),this._defaults=g,this._name=s,this.mouseTimeoutID=null,this.focusTimeoutID=null,this.mouseFocused=!1,this.justFocused=!1,this.init()}function m(e){return x.expr.filters.visible(e)&&!x(e).parents().addBack().filter(function(){return"hidden"===x.css(this,"visibility")}).length}function C(e,t){var s,a,i=e.nodeName.toLowerCase();return"area"===i?(s=(a=e.parentNode).name,!(!e.href||!s||"map"!==a.nodeName.toLowerCase())&&(!!(a=x("img[usemap=#"+s+"]")[0])&&m(a))):(/input|select|textarea|button|object/.test(i)?!e.disabled:"a"===i&&e.href||t)&&m(e)}I.prototype=(a=0,T="",n="function"==typeof y.hasOwnProperty&&!!y.hasOwnProperty("ontouchstart"),N=function(e){return x(e).closest(":data(plugin_"+s+")").data("plugin_"+s)},l=function(e){e=x(e);var t=this.settings;e.attr("id")||e.attr("id",t.uuidPrefix+"-"+(new Date).getTime()+"-"+ ++a)},D=function(e,t){var s,a=x(e.target),i=this,n=this.settings,l=this.menu,o=a.closest("."+n.topNavItemClass),r=a.hasClass(n.panelClass)?a:a.closest("."+n.panelClass);b.call(this,!0),t?(o=l.find("."+n.topNavItemClass+" ."+n.openClass+":first").closest("."+n.topNavItemClass)).is(e.relatedTarget)||0<o.has(e.relatedTarget).length?0===o.length&&l.find("[aria-expanded=true]").attr("aria-expanded","false").removeClass(n.openClass).filter("."+n.panelClass).attr("aria-hidden","true"):("mouseout"===e.type||"focusout"===e.type)&&0<o.has(u.activeElement).length||(o.find("[aria-expanded]").attr("aria-expanded","false").removeClass(n.openClass).filter("."+n.panelClass).attr("aria-hidden","true"),("keydown"===e.type&&e.keyCode===k.ESCAPE||"DOMAttrModified"===e.type)&&(s=o.find(":tabbable:first"),setTimeout(function(){l.find("[aria-expanded]."+i.settings.panelClass).off("DOMAttrModified.accessible-megamenu"),s.focus(),i.justFocused=!1},99))):(clearTimeout(i.focusTimeoutID),o.siblings().find("[aria-expanded]").attr("aria-expanded","false").removeClass(n.openClass).filter("."+n.panelClass).attr("aria-hidden","true"),o.find("[aria-expanded]").attr("aria-expanded","true").addClass(n.openClass).filter("."+n.panelClass).attr("aria-hidden","false"),"mouseover"===e.type&&a.is(":tabbable")&&1===o.length&&0===r.length&&0<l.has(u.activeElement).length&&(a.focus(),i.justFocused=!1),b.call(i))},E=function(e){var t=x(e.currentTarget),s=t.closest("."+this.settings.topNavItemClass),a=t.closest("."+this.settings.panelClass);1===s.length&&0===a.length&&1===s.find("."+this.settings.panelClass).length&&(t.hasClass(this.settings.openClass)?this.justFocused?(e.preventDefault(),e.stopPropagation(),this.justFocused=!1):n&&(e.preventDefault(),e.stopPropagation(),D.call(this,e,t.hasClass(this.settings.openClass))):(e.preventDefault(),e.stopPropagation(),D.call(this,e),this.justFocused=!1))},i=function(e){0===x(e.target).closest(this.menu).length&&(e.preventDefault(),e.stopPropagation(),D.call(this,e,!0))},o=function(e){"aria-expanded"===e.originalEvent.attrName&&"false"===e.originalEvent.newValue&&x(e.target).hasClass(this.settings.openClass)&&(e.preventDefault(),e.stopPropagation(),D.call(this,e,!0))},r=function(e){clearTimeout(this.focusTimeoutID);var t=x(e.target),s=t.closest("."+this.settings.panelClass);t.addClass(this.settings.focusClass).on("click.accessible-megamenu",x.proxy(E,this)),this.justFocused=!this.mouseFocused,this.mouseFocused=!1,this.panels.not(s).filter("."+this.settings.openClass).length&&D.call(this,e)},c=function(t){this.justFocused=!1;var s=this,e=x(t.target),a=e.closest("."+this.settings.topNavItemClass);e.removeClass(this.settings.focusClass).off("click.accessible-megamenu"),y.cvox?s.focusTimeoutID=setTimeout(function(){y.cvox.Api.getCurrentNode(function(e){a.has(e).length?clearTimeout(s.focusTimeoutID):s.focusTimeoutID=setTimeout(function(e,t,s){D.call(e,t,s)},275,s,t,!0)})},25):s.focusTimeoutID=setTimeout(function(){D.call(s,t,!0)},300)},f=function(e){var c,f,t,d,h,p,s=this.constructor===I?this:N(this),a=s.settings,i=x(x(this).is("."+a.hoverClass+":tabbable")?this:e.target),b=s.menu,n=s.topnavitems,l=i.closest("."+a.topNavItemClass),o=b.find(":tabbable"),b=i.hasClass(a.panelClass)?i:i.closest("."+a.panelClass),g=b.find("."+a.panelGroupClass),m=i.closest("."+a.panelGroupClass),C=e.keyCode||e.which,r=!1,v=k.keyMap[e.keyCode]||"",u=1===l.length&&0===b.length;if(!i.is("input:focus, select:focus, textarea:focus, button:focus")){switch(i.is("."+a.hoverClass+":tabbable")&&x("html").off("keydown.accessible-megamenu"),C){case k.ESCAPE:D.call(s,e,!0);break;case k.DOWN:e.preventDefault(),!(r=u?(D.call(s,e),1===l.find("."+a.panelClass+" :tabbable:first").focus().length):1===o.filter(":gt("+o.index(i)+"):first").focus().length)&&y.opera&&"[object Opera]"===opera.toString()&&(e.ctrlKey||e.metaKey)&&(t=(o=x(":tabbable")).index(i),r=1===x(":tabbable:gt("+x(":tabbable").index(i)+"):first").focus().length);break;case k.UP:e.preventDefault(),u&&i.hasClass(a.openClass)?(D.call(s,e,!0),(c=n.filter(":lt("+n.index(l)+"):last")).children("."+a.panelClass).length&&(r=1===c.children().attr("aria-expanded","true").addClass(a.openClass).filter("."+a.panelClass).attr("aria-hidden","false").find(":tabbable:last").focus())):u||(r=1===o.filter(":lt("+o.index(i)+"):last").focus().length),!r&&y.opera&&"[object Opera]"===opera.toString()&&(e.ctrlKey||e.metaKey)&&(t=(o=x(":tabbable")).index(i),r=1===x(":tabbable:lt("+x(":tabbable").index(i)+"):first").focus().length);break;case k.RIGHT:e.preventDefault(),r=u?1===n.filter(":gt("+n.index(l)+"):first").find(":tabbable:first").focus().length:(r=g.length&&m.length?1===g.filter(":gt("+g.index(m)+"):first").find(":tabbable:first").focus().length:r)||1===l.find(":tabbable:first").focus().length;break;case k.LEFT:e.preventDefault(),r=u?1===n.filter(":lt("+n.index(l)+"):last").find(":tabbable:first").focus().length:(r=g.length&&m.length?1===g.filter(":lt("+g.index(m)+"):last").find(":tabbable:first").focus().length:r)||1===l.find(":tabbable:first").focus().length;break;case k.TAB:t=o.index(i),e.shiftKey&&u&&i.hasClass(a.openClass)?(D.call(s,e,!0),(c=n.filter(":lt("+n.index(l)+"):last")).children("."+a.panelClass).length&&(r=c.children().attr("aria-expanded","true").addClass(a.openClass).filter("."+a.panelClass).attr("aria-hidden","false").find(":tabbable:last").focus())):e.shiftKey&&0<t?r=1===o.filter(":lt("+t+"):last").focus().length:!e.shiftKey&&t<o.length-1?r=1===o.filter(":gt("+t+"):first").focus().length:y.opera&&"[object Opera]"===opera.toString()&&(t=(o=x(":tabbable")).index(i),r=e.shiftKey?1===x(":tabbable:lt("+x(":tabbable").index(i)+"):last").focus().length:1===x(":tabbable:gt("+x(":tabbable").index(i)+"):first").focus().length),r&&e.preventDefault();break;case k.SPACE:if(!u)return!0;e.preventDefault(),E.call(s,e);break;case k.ENTER:return!0;default:if(clearTimeout(this.keydownTimeoutID),0===(T+=v!==T?v:"").length)return;for(this.keydownTimeoutID=setTimeout(function(){T=""},1e3),o=u&&!i.hasClass(a.openClass)?o.filter(":not(."+a.panelClass+" :tabbable)"):l.find(":tabbable"),e.shiftKey&&(o=x(o.get().reverse())),t=0;t<o.length;t++)if((d=o.eq(t)).is(i)){f=1===T.length?t+1:t;break}for(p=new RegExp("^"+T.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&"),"i"),t=f;t<o.length;t++)if(d=o.eq(t),h=x.trim(d.text()),p.test(h)){r=!0,d.focus();break}if(!r)for(t=0;t<f;t++)if(d=o.eq(t),h=x.trim(d.text()),p.test(h)){d.focus();break}}s.justFocused=!1}},d=function(e){(x(e.target).is(this.settings.panelClass)||x(e.target).closest(":focusable").length)&&(this.mouseFocused=!0),this.mouseTimeoutID=setTimeout(function(){clearTimeout(this.focusTimeoutID)},1)},h=function(e){clearTimeout(this.mouseTimeoutID),x(e.target).addClass(this.settings.hoverClass),D.call(this,e),x(e.target).is(":tabbable")&&x("html").on("keydown.accessible-megamenu",x.proxy(f,e.target))},p=function(e){var t=this;x(e.target).removeClass(t.settings.hoverClass),t.mouseTimeoutID=setTimeout(function(){D.call(t,e,!0)},250),x(e.target).is(":tabbable")&&x("html").off("keydown.accessible-megamenu")},b=function(e){var t=this.menu;e?(x("html").off("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu"),t.find("[aria-expanded]."+this.settings.panelClass).off("DOMAttrModified.accessible-megamenu")):(x("html").on("mouseup.outside-accessible-megamenu, touchend.outside-accessible-megamenu, mspointerup.outside-accessible-megamenu,  pointerup.outside-accessible-megamenu",x.proxy(i,this)),t.find("[aria-expanded=true]."+this.settings.panelClass).on("DOMAttrModified.accessible-megamenu",x.proxy(o,this)))},{constructor:I,init:function(){var e=this.settings,t=x(this.element),s=t.children().first(),a=s.children();this.start(e,t,s,a)},start:function(a,e,t,s){var i=this;this.settings=a,this.menu=t,this.topnavitems=s,e.attr("role","navigation"),t.addClass(a.menuClass),s.each(function(e,t){var s;(t=x(t)).addClass(a.topNavItemClass),s=t.find(":tabbable:first"),t=t.children(":not(:tabbable):last"),l.call(i,s),t.length&&(l.call(i,t),s.attr({"aria-haspopup":!0,"aria-controls":t.attr("id"),"aria-expanded":!1}),t.attr({role:"group","aria-expanded":!1,"aria-hidden":!0}).addClass(a.panelClass).not("[aria-labelledby]").attr("aria-labelledby",s.attr("id")))}),this.panels=t.find("."+a.panelClass),t.on("focusin.accessible-megamenu",":focusable, ."+a.panelClass,x.proxy(r,this)).on("focusout.accessible-megamenu",":focusable, ."+a.panelClass,x.proxy(c,this)).on("keydown.accessible-megamenu",x.proxy(f,this)).on("mouseover.accessible-megamenu",x.proxy(h,this)).on("mouseout.accessible-megamenu",x.proxy(p,this)).on("mousedown.accessible-megamenu",x.proxy(d,this)),n&&t.on("touchstart.accessible-megamenu",x.proxy(E,this)),t.find("hr").attr("role","separator"),x(u.activeElement).closest(t).length&&x(u.activeElement).trigger("focusin.accessible-megamenu")},getDefaults:function(){return this._defaults},getOption:function(e){return this.settings[e]},getAllOptions:function(){return this.settings},setOption:function(e,t,s){this.settings[e]=t,s&&this.init()}}),x.fn[s]=function(e){return this.each(function(){x.data(this,"plugin_"+s)||x.data(this,"plugin_"+s,new x.fn[s].AccessibleMegaMenu(this,e))})},x.fn[s].AccessibleMegaMenu=I,x.extend(x.expr[":"],{data:x.expr.createPseudo?x.expr.createPseudo(function(t){return function(e){return!!x.data(e,t)}}):function(e,t,s){return!!x.data(e,s[3])},focusable:function(e){return C(e,!isNaN(x.attr(e,"tabindex")))},tabbable:function(e){var t=x.attr(e,"tabindex"),s=isNaN(t);return(s||0<=t)&&C(e,!s)}})}(jQuery,window,document);
jQuery(function(e){"use strict";var t=e(".megamenu"),t=(0<t.length&&t.accessibleMegaMenu(),setTimeout(function(){e("body").removeClass("init")},500),e(".autosize"));"undefined"!=typeof autosize&&0<t.length&&autosize(t)});