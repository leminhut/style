function toggleOverlay(){var e=document.getElementById(&quot;overlay&quot;),l=document.getElementById(&quot;search_mobile&quot;);e.style.opacity=1,&quot;block&quot;==e.style.display?(e.style.display=&quot;none&quot;,l.style.display=&quot;none&quot;):(e.style.display=&quot;block&quot;,l.style.display=&quot;block&quot;,document.forms.search_blogcnit.elements.s.focus(500))}
//<![CDATA[
$(document).ready(function(){$("a").on('click',function(event){if(this.hash!==""){event.preventDefault();var hash=this.hash;$('html, body').animate({scrollTop:$(hash).offset().top},800,function(){window.location.hash=hash})}})});
$(document).ready(function () {$('.PopularPosts .item-thumbnail img').attr('src', function (i, src) {return src.replace('w72-h72-p-k-no-nu', 's1600')})});
/* ]]> */
