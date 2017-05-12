

	function scrollClick() {
   window.scrollTo(0,0);
}

function scrollClick2() {
    var target = $(".section1");
   

   $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
   

   
}

function scrollClick3() {
    var target = $(".section2");
   

   $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
   $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
   
   
}

function scrollClick4() {
    var target = $(".section3");
   

   $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
    
}


// function scrollClick5() {
//    // window.scrollTo(0,5350);

//    var target = $(".section4");
   

//    $('html, body').animate({
//           scrollTop: target.offset().top
//         }, 1000);
   
// }
function scrollClick5() {
   // window.scrollTo(0,5350);

   var target = $(".section5");
   

   $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
   
}function scrollClick6() {
   // window.scrollTo(0,5350);

   var target = $(".section6");
   

   $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
   
}



var myPlayer;
var data;
var howMuchIsDownloaded 
var golf_vid;


$(window).load(function(){

  $('body').imagesLoaded()
    .done( function( instance ) {
    $(".part1").addClass('show');
  $(".part2").addClass('show');
  $(".new_lg").css("display","none");
  setTimeout(
  function() 
  {
   
  $(".whole").css("display","none");
 
  }, 1000);

 
  });


	

});


$(document).ready(function(){




// Create cross browser requestAnimationFrame method:
window.requestAnimationFrame = window.requestAnimationFrame
 || window.mozRequestAnimationFrame
 || window.webkitRequestAnimationFrame
 || window.msRequestAnimationFrame
 || function(f){setTimeout(f, 1000/60)}
 
var bubble1 = document.getElementById('pic')
var bubble2 = document.getElementById('after_content')
var fish = document.getElementById('fish')
 
var scrollheight = document.body.scrollHeight // height of entire document
var windowheight = window.innerHeight // height of browser window
 
function parallaxbubbles(){
 var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically 
 var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
 bubble1.style.top = -scrolltop * .2 + 'px' // move bubble1 at 20% of scroll rate
 bubble2.style.top = -scrolltop * 4 + 'px' // move bubble2 at 50% of scroll rate
 // fish.style.left = -100 + scrollamount + '%' // set position of fish in percentage (starts at -100%)
}
 
window.addEventListener('scroll', function(){ // on page scroll
 requestAnimationFrame(parallaxbubbles) // call parallaxbubbles() on next available screen paint
}, false)
 
// window.addEventListener('resize', function(){ // on window resize
//  var scrolltop = window.pageYOffset // get number of pixels document has scrolled vertically
//  var scrollamount = (scrolltop / (scrollheight-windowheight)) * 100 // get amount scrolled (in %)
//  fish.style.left = -100 + scrollamount + '%' // set position of fish in percentage (starts at -100%)
// }, false)

data =document.getElementById("data").getAttribute("class");

videojs("copmressn", { loop: true, techOrder: ['flash','html5'] }).ready(function() {
   golf_vid = this;
   golf_vid.on("ended", replay_video);
   golf_vid.play();
});

if($(this).width() < 700)
		{
			$("div").removeClass("fadeInDown");
		}	





});





	


// $(window).scroll(function(){
// 	if($(this).width() > 700)
// 		{
			

// if(  $(window).height() > 500 )
// {
// 	$('#buttonb').addClass('show');
// }
// else 
// {
// 	$('#buttonb').removeClass('show');
// }


// if(data=="home")
// {

// 			if($(this).scrollTop()>700)
// 			{
// 				$('.navbar-inverse').addClass('small');
// 				// $('a.box-show').css('color','black');
// 				// $('a.box-show1').css('color','black');
// 			} 
// 			else 
// 			{
// 				$('.navbar-inverse').removeClass('small');
// 				// $('a.box-show').css('color','black');
// 				// $('a.box-show1').css('color','black');
				
// 				$('a.dropdown-toggle').css('color','black');
// 			}

// 			if($(this).scrollTop()>700 && $(this).scrollTop()<=1300)
// 			{
// 				$('#bulletb.one').addClass('active');
// 					$('a.box-show').css('color','black');
// 				    $('a.box-show1').css('color','black');
// 			}
// 			else
// 				{
					
// 					$('#bulletb.one').removeClass('active');
// 				// 	$('a.box-show').css('color','black');
// 				// $('a.box-show1').css('color','black');
// 				}


// 				if($(this).scrollTop()>1300 && $(this).scrollTop()<=3600)
// 			{

// 				$('.navbar-inverse').addClass('color');
// 				$('a').addClass('hovercolor1');
// 				$('#bulletb.two').addClass('active');
// 				 $('a.box-show').css('color','white');
// 				 $('a.box-show1').css('color','white');
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('color');
// 					$('a').removeClass('hovercolor1');
// 					$('#bulletb.two').removeClass('active');
					
// 				}

// 				if($(this).scrollTop()>3600 && $(this).scrollTop()<=5200)
// 			{
// 				$('.navbar-inverse').addClass('color2');
// 				$('a').addClass('box-show1');
// 				$('#bulletb.three').addClass('active');
// 				 $('a.box-show').css('color','white');
// 				 $('a.box-show1').css('color','white');
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('color2');
// 					$('a').removeClass('box-show1');
// 					$('#bulletb.three').removeClass('active');
// 				}



// 				if($(this).scrollTop()>5200 && $(this).scrollTop()<=6300 )
// 			{
// 				$('.navbar-inverse').addClass('color4');
// 				$('#bulletb.four').addClass('active');
// 				$('a.box-show').css('color','black');
// 				 $('a.box-show1').css('color','black');
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('color4');
// 					$('#bulletb.four').removeClass('active');
// 				}
// 				if($(this).scrollTop()>6300)
// 			{
// 				$('.navbar-inverse').addClass('color3');
// 				$('#bulletb.five').addClass('active');
// 				$('a.box-show').css('color','white');
// 				 $('a.box-show1').css('color','white');
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('color3');
// 					$('#bulletb.five').removeClass('active');
// 				}
	
// }

// else if(data=="cars")
// {

// 	alert("enter");

// 			if($(this).scrollTop()>700)
// 			{
// 				$('.navbar-inverse').addClass('small');
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('small');
// 				}


// 				if($(this).scrollTop()>1500)
// 			{
// 				$('.navbar-inverse').addClass('color');
// 				$('a').addClass('hovercolor1')
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('color');
// 					$('a').removeClass('hovercolor1')
// 				}

// 				if($(this).scrollTop()>3850)
// 			{
// 				$('.navbar-inverse').addClass('color2');
// 				$('a').addClass('box-show1');
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('color2');
// 					$('a').removeClass('box-show1');
// 				}

// 				if($(this).scrollTop()>5300)
// 			{
// 				$('.navbar-inverse').addClass('color3');
// 			}
// 			else
// 				{
// 					$('.navbar-inverse').removeClass('color3');
// 				}

	
// }


// else if(data=="about")
// {
// 	if($(this).scrollTop()>700)
// 			{
// 				$('.navbar-inverse').addClass('small');
				
// 			} 
// 			else 
// 			{
// 				$('.navbar-inverse').removeClass('small');
				
// 			}

// 			if($(this).scrollTop()>700 && $(this).scrollTop()<=1300)
// 			{
// 				$('#bulletb.one').addClass('active');
					
// 			}
// 			else
// 				{
					
// 					$('#bulletb.one').removeClass('active');
				
// 				}

// }
// else
// 	{
// 		// alert('Data element wrong');
// 	}


// }

// });


 
