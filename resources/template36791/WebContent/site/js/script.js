$(document).ready(function() { 
	$('ul.menu').superfish({ 
		delay:       600,                            // one second delay on mouseout 
		animation:   {opacity:'show',height:'show'},  // fade-in and slide-down animation 
		speed:       'normal',                          // faster animation speed 
		autoArrows:  true,                           // disable generation of arrow mark-up 
		dropShadows: false                            // disable drop shadows 
	});
	$('.button ')
	.hover(function(){
		$(this).find('span')
		.stop().animate({width:'100%', left:'0%', top:'0%',height:'100%'}, {duration:200})
	}, function(){
		$(this).find('span')
		.stop().animate({width:'0', left:'50%',top:'50%',height:'0'}, {duration:200})
	})
	$('.button-2 ')
	.hover(function(){
		$(this).find('span')
		.stop().animate({width:'100%', left:'0%', top:'0%',height:'100%'}, {duration:200})
	}, function(){
		$(this).find('span')
		.stop().animate({width:'0', left:'50%',top:'50%',height:'0'}, {duration:200})
	})
	 $('.button-2 strong').hover(function(){
	   $(this).stop(true,false).animate({color:"#F5F5F5"}, {duration: 250});
	  },function(){
	   $(this).stop(true,false).animate({color:"#252525"}, {duration: 250});
	 });
	 
	$('.button-3 ')
	.hover(function(){
		$(this).find('span')
		.stop().animate({width:'100%', left:'0%', top:'0%',height:'100%'}, {duration:200})
	}, function(){
		$(this).find('span')
		.stop().animate({width:'0', left:'50%',top:'50%',height:'0'}, {duration:200})
	})
	
}); 