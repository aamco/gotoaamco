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
// animScroll('#tier-contents',1,0);





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
		topX = -$('#frame2').find('.car').height();
		TweenMax.to($('#frame2').find('.car'), 1, {startAt:{'transform':'translate3d(0px, '+topX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				
		TweenMax.to($('#frame2').find('.txt'), 1, {delay:.5, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame2').find('.txtline'), 1, {delay:.65, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame2').find('.line'), .5, {delay:.85, opacity:1})
	}
	
	if(sec == 'frame3'){
		botX = $('#frame3').height() + $('#frame3').find('.machine').height();
		TweenMax.to($('#frame3').find('.machine'), 1, {startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				
		TweenMax.to($('#frame3').find('.txt'), 1, {delay:.5, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame3').find('.txtline'), 1, {delay:.65, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame4'){	
		topX = -$('#frame4').find('.car').height();	
		TweenMax.to($('#frame4').find('.roadlines'), .75, {height:'100%', ease:Expo.easeInOut})
		TweenMax.to($('#frame4').find('.car'), 1, {delay:.5, startAt:{'transform':'translate3d(0px, '+topX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})
		TweenMax.to($('#frame4').find('.txt'), 1, {delay:.75, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame4').find('.txtline'), 1, {delay:.9, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame5'){
		botX = $('#frame5').height() + $('#frame5').find('.shifter').height();
		TweenMax.to($('#frame5').find('.shifter'), 1, {startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				
		TweenMax.to($('#frame5').find('.txt'), 1, {delay:.5, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame5').find('.txtline'), 1, {delay:.65, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame6'){
		botX = $('#frame6').height() + $('#frame6').find('.car').height();
		TweenMax.to($('#frame6').find('.car'), 1, {startAt:{'transform':'translate3d(0px, '+botX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				
		TweenMax.to($('#frame6').find('.txt'), 1, {delay:.5, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame6').find('.txtline'), 1, {delay:.65, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
	}
	
	if(sec == 'frame7'){
		topX = -$('#frame7').find('.car').height();
		TweenMax.to($('#frame7').find('.car'), 1, {startAt:{'transform':'translate3d(0px, '+topX+'px, 0px)', 'visibility':'visible'}, 'transform':'translate3d(0px, 0px, 0px)', ease:Expo.easeOut})				
		TweenMax.to($('#frame7').find('.txt'), 1, {delay:.5, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		TweenMax.to($('#frame7').find('.txtline'), 1, {delay:.65, startAt:{'transform':'translate3d(-100px, 0px, 0px)'}, 'transform':'translate3d(0px, 0px, 0px)', opacity:1, ease:Expo.easeOut})
		
		TweenMax.to($('.smoke'), 1, {delay:.75, opacity:1, ease:Expo.easeOut})
		
		$('.smokecloud').each(function(i){
			TweenMax.to($(this), 1, {delay:(i*.25), startAt:{'marginLeft':500}, 'display':'block', 'marginLeft':0, onStartParams:[$(this)], onStart:function(trg){
				if(i%2 == 0){
					trg.addClass('bubble1');
				} else {
					trg.addClass('bubble2');
				}
			}})
		})
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



