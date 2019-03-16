$(document).ready(main);

var contador = 1;
var ctx;

function main () {
	$('.menu_bar').click(function(){
		if (contador == 1) {
			$('nav').animate({
				left: '0'
			});
			contador = 0;
		} else {
			contador = 1;
			$('nav').animate({
				left: '-100%'
			});
		}
	});

	// Mostramos y ocultamos submenus
	$('.submenu').click(function(){
		$(this).children('.children').slideToggle();
	});

	
}

function canvas(){
	var c = document.getElementById("myCanvas");
			ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(95,50,40,0,2*Math.PI);
            ctx.stroke();
}

function hello(){
	var c = document.getElementById("hello");
	ctx = c.getContext("2d");
	ctx.font = "30px Arial";
	ctx.fillText("Hello CIT-261", 10, 50);
}