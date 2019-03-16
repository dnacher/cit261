$(document).ready(main);

var contador = 1;


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
	var ctx;
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

function createJson(){
	var jsonString = '{ "name":"Daniel","surname":"Nacher", "age":34, "country":"Uruguay", "hobbies": "to play the guitar"}';
	var info = JSON.parse(jsonString);
	var text = "My name is " + info.name + " " + info.surname + ". I'm " + info.age + " years old, I'm from " + info.country + " and I like " + info.hobbies + "<br>";		
	var text2 = JSON.stringify(jsonString);
	document.getElementById("text").innerHTML = text;		
	document.getElementById("text2").innerHTML = text2;		
}

function createObjectInformation(){
	var person = new Object();
	var name = document.getElementById("name").value;
	var lastname = document.getElementById("lastname").value;
	var age = document.getElementById("age").value;
	var hobbie = document.getElementById("hobbie").value;
	person.name= name;
	person.lastname = lastname;
	person.age = age;
	person.hobbie = hobbie;
	document.getElementById("objectInformation").innerHTML = person.name + " " + person.lastname + " is " + person.age + " years old and likes " + person.hobbie;
}


function modify(){
	var element = document.getElementById("shape");
	var pos = 0;
	var speed = setInterval(rotate, 5);
	function rotate() {
		  if (pos == 360) {
			clearInterval(speed);
		  } else {
			pos++; 
			element.style.transform = "rotate(" + pos + "deg)";
		  }
	}
}

function modify2(){
	var element = document.getElementById("shape2");
					var pos = 0;
					var speed = setInterval(move, 5);
					var moving = true;
					function move() {
						if(moving){
							pos++; 
							element.style.left = pos + 'px';
							if(pos==360){
								moving=false;
							}
						}else{
							pos--; 
							element.style.left = pos + 'px';
							if(pos==0){
								moving=true;
							}
						}					
					}
}

function handleClick(){
	var element = document.getElementById("shape");
	element.style.background = "transparent";
	element.style.height = "0px";
	element.style.width = "0px";
	element.style.borderLeft = "50px solid transparent";
	element.style.borderRight = "50px solid transparent";
	element.style.borderBottom = "100px solid #f25724";
}