function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
  loadCSS("https://fonts.googleapis.com/css?family=Roboto:400,400italic,700");loadCSS("https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css");loadCSS("https://fonts.googleapis.com/icon?family=Material+Icons");loadCSS("https://fonts.googleapis.com/css?family=Bitter");
$(document).ready(function(){$("#showsearch,#showkacatikus").click(function(){$("#showsearch,#search-blanter").toggleClass("aktif");});});
$(document).ready(function(){$("#showjalantikus").click(function(){$("#menu-wrapper").toggleClass("aktif");});});
$(document).ready(function(){$("#showmenu").click(function(){$("#jtheadermenu").toggleClass("shows");});});
