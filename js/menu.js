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

function createLoop() {
	var value = document.getElementById("value").value;
  if(!isNaN(value)){
	  var text = "";

	  for(var i=0; i<value;i++){  					
		  text+= "this is a loop with the numbers you entered N°: " + (i+1) + "<br>";
	  }
	  document.getElementById("demo").innerHTML = text;
  }else{
	  document.getElementById("demo").innerHTML = "please type a number in this option";
  }
}

function loop10Times(){
	var value = document.getElementById("value").value;
	var text = "";
	for(var i=0; i<7;i++){  					
		text+= value + ": #" + (i+1) +  "<br>";
	}
	document.getElementById("demo").innerHTML = text;
}