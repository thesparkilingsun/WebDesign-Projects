
$(document).ready(function(){
  $('#slides').superslides({
         animation:"fade",
         play:4500,
         pagination:false,
         animation_easing:'linear',


  });

  var typed = new Typed(".typed",{
     strings:["Loving.","Caring.","Goals.","Passion.","Power.","Courage.","Humbleness."],
     typeSpeed:120,
     loop:true,
     startDelay:2500,
     showCursor:false
  });

$("[data-fancybox]").fancybox();


$(function(){
			$("#quotes").scrollText({
				'duration': 4200
			});
		});



$(".vPlayer").videoBox();

$(".vPlayer").videoBox({
  width: '422',
  height: '360',
  loop: false,
  autoplay: false,
  byline: true,
  color: "0A0A0A",
  maxheight: '',
  maxwidth: '',
  portrait: true,
  title: ''
});



});
