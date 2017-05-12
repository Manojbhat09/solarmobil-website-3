var n=0;    var c=0;
var m=0;	var co=0;
var a=0;	var e=0;
var t=0;	var i=0;
var b=0;	var g=0;

//280 for 1

function btn2clk(){
	
	if(n<=2)
	{
		m+=1150;
		$('.slide').css({

                 '-webkit-transform':'translateX('+(-1)*m+'px)'
                ,'-moz-transform':'translateX('+(-1)*m+'px)'
                ,'transform':'translateX('+(-1)*m+'px)'
            });
		n++;
	}
	else {
		
	}
}
function btn1clk(){
	
	if(n>0)
	{
		m=m-1150;
		$('.slide').css({

                 '-webkit-transform':'translateX('+(-1)*m+'px)'
                ,'-moz-transform':'translateX('+(-1)*m+'px)'
                ,'transform':'translateX('+(-1)*m+'px)'
            });
		n--;
	}
	else {
		
	}
}

function mem1(){
	

	
	if (!$( ".team-data" ).hasClass( "hide" )) {
		a++;
		t--;
		b--;
		$('span.un').removeClass('hide');
		$('span.bi').addClass('hide');
		$('span.tri').addClass('hide');
	}
		else{
		$('span.un').removeClass('hide');
		$('span.bi').addClass('hide');
		$('span.tri').addClass('hide');
	$('.team-data').removeClass('hide');
	a=0;
	b=0;
	t=0;

	}
	$('.slide').css({
                 '-webkit-transform':'translateX('+0+'px)'
                ,'-moz-transform':'translateX('+0+'px)'
                ,'transform':'translateX('+0+'px)'
            });

if (a==2) {
		$('span.un').addClass('hide');
		$('.team-data').toggleClass('hide');
		a=0;
	};
	m=0;
	n=0;
}
function mem2(){
	if ($( ".team-data" ).hasClass( "hide" )) {
		$('span.bi').removeClass('hide');
		$('span.un').addClass('hide');
		$('span.tri').addClass('hide');
	$('.team-data').removeClass('hide');
	t=0;
	a=0;
	b=0;
	}
	else{
		t++;
		a--;
		b--;
		$('span.un').addClass('hide');
		$('span.tri').addClass('hide');
		$('span.bi').removeClass('hide');
	}
	$('.slide').css({
                 '-webkit-transform':'translateX('+(-1)*1150+'px)'
                ,'-moz-transform':'translateX('+(-1)*1150+'px)'
                ,'transform':'translateX('+(-1)*1150+'px)'
            });
	m=1150;
	n=1;
	if (t==2) {
		$('span.bi').addClass('hide');
		$('.team-data').addClass('hide');
		t=0;
	};
	

}
function mem3(){
	if ($( ".team-data" ).hasClass( "hide" )) {
		$('span.bi').addClass('hide');
		$('span.un').addClass('hide');
		$('span.tri').removeClass('hide');
	$('.team-data').removeClass('hide');
	t=0;
	a=0;
	b=0;
	}
	else{
		t--;
		a--;
		b++;
		$('span.un').addClass('hide');
		$('span.tri').removeClass('hide');
		$('span.bi').addClass('hide');
	}
	$('.slide').css({
                 '-webkit-transform':'translateX('+(-1)*3440+'px)'
                ,'-moz-transform':'translateX('+(-1)*3440+'px)'
                ,'transform':'translateX('+(-1)*3440+'px)'
            });
	m=2300;
	n=2;
	if (b==2) {
		$('span.tri').addClass('hide');
		$('.team-data').addClass('hide');
		b=0;
	};
	

}


function mem23(){
	

	
	if (!$( ".team-data" ).hasClass( "hide" )) {
		a++;
		t--;
		b--;
		$('span.un').removeClass('hide');
		$('span.bi').addClass('hide');
		$('span.tri').addClass('hide');
	}
		else{
		$('span.un').removeClass('hide');
		$('span.bi').addClass('hide');
		$('span.tri').addClass('hide');
	$('.team-data').removeClass('hide');
	a=0;
	b=0;
	t=0;
	}
	$('.slide').css({
                 '-webkit-transform':'translateX('+0+'px)'
                ,'-moz-transform':'translateX('+0+'px)'
                ,'transform':'translateX('+0+'px)'
            });

if (a==2) {
		$('span.un').addClass('hide');
		$('.team-data').toggleClass('hide');
		a=0;
	};
}










//next array
function btn2clk2(){
	
	if(c<=1)
	{
		co+=1150;
		$('.slide2').css({

                 '-webkit-transform':'translateX('+(-1)*co+'px)'
                ,'-moz-transform':'translateX('+(-1)*co+'px)'
                ,'transform':'translateX('+(-1)*co+'px)'
            });
		c++;
	}
	else {
		
	}
}
function btn1clk2(){
	
	if(c>0)
	{
		co=co-1150;
		$('.slide2').css({

                 '-webkit-transform':'translateX('+(-1)*co+'px)'
                ,'-moz-transform':'translateX('+(-1)*co+'px)'
                ,'transform':'translateX('+(-1)*co+'px)'
            });
		c--;
	}
	else {
		
	}
}

function mem12(){
	

	
	if (!$( ".team-data2" ).hasClass( "hide" )) {
		e++;
		i--;
		g--;
		$('span.un2').removeClass('hide');
		$('span.bi2').addClass('hide');
		$('span.tri2').addClass('hide');
	}
		else{
		$('span.un2').removeClass('hide');
		$('span.bi2').addClass('hide');
		$('span.tri2').addClass('hide');
	$('.team-data2').removeClass('hide');
	e=0;
	g=0;
	i=0;
	}
	$('.slide2').css({
                 '-webkit-transform':'translateX('+0+'px)'
                ,'-moz-transform':'translateX('+0+'px)'
                ,'transform':'translateX('+0+'px)'
            });

if (e==2) {
		$('span.un2').addClass('hide');
		$('.team-data2').toggleClass('hide');
		e=0;
	};
	co=0;
	c=0;
}
function mem22(){
	if ($( ".team-data2" ).hasClass( "hide" )) {
		$('span.bi2').removeClass('hide');
		$('span.un2').addClass('hide');
		$('span.tri2').addClass('hide');
	$('.team-data2').removeClass('hide');
	i=0;
	e=0;
	g=0;
	}
	else{
		i++;
		e--;
		g--;
		$('span.un2').addClass('hide');
		$('span.tri2').addClass('hide');
		$('span.bi2').removeClass('hide');
	}
	$('.slide2').css({
                 '-webkit-transform':'translateX('+(-1)*1150+'px)'
                ,'-moz-transform':'translateX('+(-1)*1150+'px)'
                ,'transform':'translateX('+(-1)*1150+'px)'
            });
	co=1150;
	c=1;
	if (i==2) {
		$('span.bi2').addClass('hide');
		$('.team-data2').addClass('hide');
		i=0;
	};
	

}
function mem32(){
	if ($( ".team-data2" ).hasClass( "hide" )) {
		$('span.bi2').addClass('hide');
		$('span.un2').addClass('hide');
		$('span.tri2').removeClass('hide');
	$('.team-data2').removeClass('hide');
	i=0;
	e=0;
	g=0;
	}
	else{
		i--;
		e--;
		g++;
		$('span.un2').addClass('hide');
		$('span.tri2').removeClass('hide');
		$('span.bi2').addClass('hide');
	}
	$('.slide2').css({
                 '-webkit-transform':'translateX('+(-1)*2300+'px)'
                ,'-moz-transform':'translateX('+(-1)*2300+'px)'
                ,'transform':'translateX('+(-1)*2300+'px)'
            });
	co=2300;
	c=2;
	if (g==2) {
		$('span.tri2').addClass('hide');
		$('.team-data2').addClass('hide');
		g=0;
	};
	

}


//next next array

//next array
function btn2clk3(){
	
	if(c<=0)
	{
		co+=1150;
		$('.slide3').css({

                 '-webkit-transform':'translateX('+(-1)*co+'px)'
                ,'-moz-transform':'translateX('+(-1)*co+'px)'
                ,'transform':'translateX('+(-1)*co+'px)'
            });
		c++;
	}
	else {
		
	}
}
function btn1clk3(){
	
	if(c>0)
	{
		co=co-1150;
		$('.slide3').css({

                 '-webkit-transform':'translateX('+(-1)*co+'px)'
                ,'-moz-transform':'translateX('+(-1)*co+'px)'
                ,'transform':'translateX('+(-1)*co+'px)'
            });
		c--;
	}
	else {
		
	}
}

function mem23(){
	

	
	if (!$( ".team-data3" ).hasClass( "hide" )) {
		e++;
		i--;
		g--;
		$('span.un3').removeClass('hide');
		$('span.bi3').addClass('hide');
		$('span.tri3').addClass('hide');
	}
		else{
		$('span.un3').removeClass('hide');
		$('span.bi3').addClass('hide');
		$('span.tri3').addClass('hide');
	$('.team-data3').removeClass('hide');
	e=0;
	g=0;
	i=0;
	}
	$('.slide3').css({
                 '-webkit-transform':'translateX('+0+'px)'
                ,'-moz-transform':'translateX('+0+'px)'
                ,'transform':'translateX('+0+'px)'
            });

if (e==2) {
		$('span.un3').addClass('hide');
		$('.team-data3').toggleClass('hide');
		e=0;
	};
}

function mem33(){
	if ($( ".team-data3" ).hasClass( "hide" )) {
		$('span.bi3').addClass('hide');
		$('span.un3').addClass('hide');
		$('span.tri3').removeClass('hide');
	$('.team-data3').removeClass('hide');
	i=0;
	e=0;
	g=0;
	}
	else{
		i--;
		e--;
		g++;
		$('span.un3').addClass('hide');
		$('span.tri3').removeClass('hide');
		$('span.bi3').addClass('hide');
	}
	$('.slide3').css({
                 '-webkit-transform':'translateX('+(-1)*2300+'px)'
                ,'-moz-transform':'translateX('+(-1)*2300+'px)'
                ,'transform':'translateX('+(-1)*2300+'px)'
            });
	co=2300;
	c=2;
	if (g==2) {
		$('span.tri3').addClass('hide');
		$('.team-data3').addClass('hide');
		g=0;
	};
	

}
















