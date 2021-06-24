$(function(){
	
	var
	  winW = $(window).width(),
		winH = $(window).height(),
		nav = $('#mainnav ul a'),
		curPos = $(this).scrollTop();
	
	if (winW > 800){
		var headerH =0;
	}
	else{
		var headerH =70;
	}
	
	$(nav).on('click', function(){
  	var $el = $(this),
		id = $el.attr('href');
		if (id.charAt(0) === "#"){
			$('html, body').animate({
				scrollTop: $(id).offset().top - headerH
			  }, 500);
			 if (winW < 890){
				 $('#menuWrap').next().slideToggle();
				 $('#menuBtn').removeClass('close');
			 }
			 return false;
		} 		
	});
	
	$("#menu").click(function() {
		$(".panel").toggle(function(){
			$(this).next().slideToggle();
			$('#menuBtn').toggleClass('close');
		});
	});
});
