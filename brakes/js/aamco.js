var mobile = false;
var mobileBreak = 768;
if($(window).width() <= mobileBreak){mobile = true;}
var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
var path;
function freezePage(){$('body').css({'width':'100%','height':'100%','overflow':'hidden'});}
function unfreezePage(){$('body').css({'width':'','height':'','overflow':''});}
function animScroll(sec, speed, offset){
	activeOffset = $(sec).offset().top;	
	TweenMax.to('html,body', speed, {scrollTop:activeOffset, ease:Expo.easeInOut});
}





//! WINDOW RESIZE

var winW;
var winH;
$(window).resize(function(){
	winW = $(window).width();
	winH = $(window).height();
	//console.log(winW);
})
$(window).resize();




//! ANIMATIONS

function isScrolledIntoView(elem, dif){
	vT = $(elem).offset().top-dif;
	if(sT >= vT){
		return true;
	}
}

var hasPlayed = [];
/*var startingT = $('.dash').offset().top - winH;
var pspeed = 2;*/

$(window).scroll(function(){
	
	sT = Number($(document).scrollTop());
	
	$('.hasAnim').each(function(){
		if(isScrolledIntoView($(this), 400) && hasPlayed.indexOf($(this).attr('id')) == -1){
			hasPlayed.push($(this).attr('id'));
			goAnim($(this).attr('id'));
		}
	})
	
	$('.hasAnim2').each(function(){
		bDel = -200;
		if(winW<1000){bDel = 0;}
		if(winW<768){bDel = 200;}
		
		if(isScrolledIntoView($(this), bDel) && hasPlayed.indexOf($(this).attr('id')) == -1){
			hasPlayed.push($(this).attr('id'));
			TweenMax.to($('#frame8').find('.sign'), 1, {delay:0, startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})
			TweenMax.to($('#frame8').find('.clouds'), 1, {delay:.5, opacity:1});
		}
	})
	
	
	// parallax
	
	/*	
	moveAmt = Math.round(($(window).scrollTop()-startingT)/pspeed);
	if(moveAmt<0){moveAmt = 0;}	
	$('.dash').css('transform', 'translate3d(0px,' + moveAmt + 'px, 0px)');	
	*/
	
})

function goAnim(sec){
	//console.log(sec)
	
	if(sec == 'frame1'){
		leftX = - $('#frame1').find('.car').width();
		TweenMax.to($('#frame1').find('.car'), 1, {delay:0, startAt:{'transform':'translate3d('+leftX+'px, 0px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})
		TweenMax.to($('#frame1').find('.clouds'), 1, {delay:0, opacity:1})
		TweenMax.to($('#frame1').find('.logo'), 1, {delay:.5, startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
		TweenMax.to($('#frame1').find('.txt'), .5, {delay:.75, opacity:1})
	}
	
	if(sec == 'frame2'){
		botX = $('#frame2').height() + $('#frame2').find('.dash>div').height();
		TweenMax.to($('#frame2').find('.dash>div'), 1, {startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				

		TweenMax.to($('#frame2').find('.txt'), 1, {delay:.5, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame2').find('.txtline'), 1, {delay:.65, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame3'){
		botX1 = $('#frame3').height() + $('#frame3').find('.city>div').height();
		TweenMax.to($('#frame3').find('.city>div'), 1, {startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				

		botX2 = $('#frame3').height() + $('#frame3').find('.car>div').height();
		TweenMax.to($('#frame3').find('.car>div'), 1, {delay:.5, startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				

		TweenMax.to($('#frame3').find('.txt'), 1, {delay:.75, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame3').find('.txtline'), 1, {delay:.9, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame4'){	
		topX = -$('#frame4').find('.pedals').height();
		TweenMax.to($('#frame4').find('.pedals>div'), 1, {startAt:{'transform':'translate3d(0px, '+topX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				

		botX = $('#frame4').height() + $('#frame4').find('.foot>div').height();
		TweenMax.to($('#frame4').find('.foot>div'), 1, {delay:.3, startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				
		TweenMax.to($('#frame4').find('.circles'), .5, {delay:1, opacity:1, onStart:function(){
			$('#frame4').find('.circles>div').addClass('growfader');
		}})

		TweenMax.to($('#frame4').find('.num'), 1, {delay:.5, startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
		TweenMax.to($('#frame4').find('.txt h2'), 1, {delay:.75, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame4').find('.txtline'), 1, {delay:1, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame5'){
		botX = $('#frame5').height() + $('#frame5').find('.base').height();
		TweenMax.to($('#frame5').find('.base'), 1, {startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				

		topX = -$('#frame5').find('.wheel-parts').height();
		if(winW<768){topX = -1600;}
		TweenMax.to($('#frame5').find('.wheel-parts'), 1, {delay:.25, startAt:{'transform':'translate3d(0px, '+topX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				

		topX2 = -$('#frame5').find('.wheelbg').height();
		if(winW<768){topX2 = -1600;}
		TweenMax.to($('#frame5').find('.wheelbg'), 1, {delay:.25, startAt:{'transform':'translate3d(0px, '+topX2+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut, onStart:function(){
			$('#frame5').find('.wheel>div').addClass('spinonce');
			$('#frame5').find('.brake>div').addClass('brakes');
			$('#frame5').find('.bolts>div').addClass('blink');
		}})				

		TweenMax.to($('#frame5').find('.num'), 1, {delay:.75, startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
 		TweenMax.to($('#frame5').find('.txt h2'), 1, {delay:1, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame5').find('.txtline'), 1, {delay:1.25, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame6'){
		leftX = -1400;
		TweenMax.to($('#frame6').find('.car>div'), 2, {startAt:{'transform':'translate3d('+leftX+'px, 0px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})

		TweenMax.to($('#frame6').find('.num'), 1, {delay:1, startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
		TweenMax.to($('#frame6').find('.txt h2'), 1, {delay:1.25, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame6').find('.txtline'), 1, {delay:1.5, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})

		$('#frame6').find('.car>div>div').addClass('slowstop');
		$('#frame6').find('.wheel').addClass('spinstop');
		TweenMax.to($('#frame6').find('.brakelight'), .5, {delay:.5, opacity:1})
	}
	
	if(sec == 'frame7'){
		topX = -$('#frame7').find('.warning').height();
		if(winW<768){topX = -1600;}
		TweenMax.to($('#frame7').find('.warning>div'), 1, {startAt:{'transform':'translate3d(0px, '+topX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				
		TweenMax.to($('#frame7').find('.bgcircle'), .75, {delay:.5, opacity:1})
		TweenMax.to($('#frame7').find('.lines'), .5, {delay:.75, opacity:1})
		$('#frame7').find('.lines>div').addClass('blink2');

		TweenMax.to($('#frame7').find('.num'), 1, {delay:.75, startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
		TweenMax.to($('#frame7').find('.txt h2'), 1, {delay:1, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame7').find('.txtline'), 1, {delay:1.25, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})		
	}
	
	if(sec == 'frame8'){
		botX = $('#frame8').height() + $('#frame8').find('.sign').height();
		TweenMax.to($('#frame8').find('.txt.top'), .5, {delay:.5, opacity:1})
		TweenMax.to($('#frame8').find('.cta-btn'), 1, {delay:.75, startAt:{scaleX:.5, scaleY:.5}, scaleX:1, scaleY:1, opacity:1, ease:Elastic.easeOut, easeParams:[2,2]})
		TweenMax.to($('#frame8').find('.txt.bot'), .5, {delay:.95, opacity:1})

	}
}

$(document).ready(function(){
	setTimeout(function(){
		goAnim('frame1');
	}, 200)	
})



$('#frame8').find('.cta-btn').mouseenter(function(){
	TweenMax.to($(this), .5, {scaleX:1.1, scaleY:1.1, ease:Expo.easeOut})
})
$('#frame8').find('.cta-btn').mouseleave(function(){
	TweenMax.to($(this), .75, {scaleX:1, scaleY:1, ease:Elastic.easeOut, easeParams:[2,2]})
})



