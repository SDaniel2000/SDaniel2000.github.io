jQuery(function(){"use strict";$(".pmwrite #destname").on("keyup",function(){2<$(this).attr("value").length?$(".pmwrite #validation-login-exists").load("/ident/login_exists/",{name:$(this).attr("value"),type:"admin"}):$(".pmwrite #validation-login-exists").empty("")}),$(".pm-delete").on("click",function(){return confirm("Êtes-vous sûr de vouloir supprimer ce message ?")});var e=$("#pm_maxlength").val(),i=$(".pmwrite #maxlengthinfo span");i.text("0 / "+e),0<i.length&&$(".pmwrite #pagetext").on("keyup",function(){var t=$(this).val().length;e<=t?($(this).val($(this).val().substr(0,e)),t=e,i.addClass("warn")):i.removeClass("warn"),i.text(t+" / "+e)})});
jQuery(function(){"use strict";var e=!1;function t(){var e=$("#register_name").val();2<e.length?$("#validation-login-exists").load("/ident/login_exists/",{name:e}):$("#validation-login-exists").html('<p class="warn">Veuillez choisir plus de 2 caractères</p>')}$("#register_name").on("keyup",function(){clearTimeout(e),e=setTimeout(t,400)}),$("#newsletter_checkbox").on("change",function(){$("#newsletter_checkbox_heart").toggle($(this).is(":checked"))})});
var alsacreations={};jQuery(function(n){"use strict";n("#evitement a").on("focus",function(){n("#evitement").addClass("focused")}).on("keyup",function(e){27==e.keyCode&&n("#evitement").removeClass("focused")}),n("#evitement a:last").on("blur",function(){n("#evitement").removeClass("focused")}),n("#search-q").on({focus:function(){n("#search").addClass("focused")},blur:function(){n("#search").removeClass("focused")}}),n(".commentaire-repondre").on("click",function(e){var a=n("#commentaire");a.val()&&a.val(a.val()+"\n"),a.val(a.val()+"@"+n(this).data("user")+" : "),a.focus(),e.preventDefault()});var e=n(".barrating");0<e.length&&e.each(function(){n(this).barrating({theme:"css-stars"})})});