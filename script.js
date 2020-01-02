// Jelle Braaksma
// CMV1G, 318174 
// http://318174.cmd15a.cmi.hanze.nl/JS/ 

// VOOR ELKE BEREKENING DIE WORDT INGEVOERD OP DE REKENMACHINE TOT DE 'C' KNOP WORDT INGEDRUKT GELDT; 

// Als eerste heb ik variabelen gedefinieerd door middel van een functie. 
// Hierdoor wijst de rekenmachine de locatie van invoer, uitkomst en clear aan en is begint het geheugen altijd met 0.

window.onload = function () {
  var knop = document.getElementsByTagName('span'),
      uitkomst = document.querySelectorAll('.resultaat p')[0],
      clear = document.getElementsByClassName('clear')[0],
	  mem = 0;
	  
// Na het definieren van de variabelen heb ik een loop gemaakt. 
// Deze loop kijkt of er op = oftewel uitrekenen wordt gedrukt.
// Is dit niet het geval dan wordt er een teken of nummer toegevoegd aan het scherm. 

// ik heb in deze 'for loop' het = teken, M+, M-, MR en MC gedefiniëerd. 
  
	for (var i = 0; i < knop.length; i += 1) {
		if (knop[i].innerHTML === '=') {
		  knop[i].addEventListener("click", calculate);
		}
		else if (knop[i].innerHTML === 'M+'){
			knop[i].addEventListener("click", memPlus);
		}
		else if (knop[i].innerHTML === 'M-'){
			knop[i].addEventListener("click", memMin);
		}
		else if (knop[i].innerHTML === 'MC'){
			knop[i].addEventListener("click", memClear);
		}
		else if (knop[i].innerHTML === 'MR'){
			knop[i].addEventListener("click", memRecall);
		}
		else {knop[i].addEventListener("click", addValue(i));  
		}
	}
  
// Vervolgens heb ik  de clear functie gedifinieerd. 
// Als er op clear wordt gedrukt, wordt de huidige sessie afgebroken,
// En begint de rekenmachine automatisch weer boven aan.   

	clear.onclick = function () {
		uitkomst.innerHTML = '';	
	};  
  
// Daarna heb ik de symbolen gedefinieerd door middel van een functie. 
// Deze functie doet twee dingen binnen een if/else if/else statement. 
// Als eerste vergelijkt de if/else if/else statement het ingevoerde symbool met de mogelijkheden, 
// Dat wil zeggen dat er eerst gekeken wordt of het / is, als dit niet zo is wordt er gekeken of het x is,
// Als dat niet zo is wordt er gekeken of het plus is, wanneer het ook geen plus is, kan het alleen nog maar - zijn. 
// Als tweede maakt de if/else if/else statement een herkenbaar symbool voor de browser, bijvoorbeeld x wordt *. 
  
	function addValue(i) {
		return function () {
			if (knop[i].innerHTML === '/') {uitkomst.innerHTML  += '/';
			}
			else if (knop[i].innerHTML === 'x') {uitkomst.innerHTML  += '*';
			}
			else {uitkomst.innerHTML += knop[i].innerHTML;
			}
		};
	}

// De laatste functie die ik heb toegevoegd zorgt voor het uitkomst. 
// In deze functie bevindt zich nog een bugfix functie. 
// Deze functie zorgt ervoor dat wanneer men een 0 voor de betreffende getallen zet zonder '.' 
// dan slaat de rekenmachine deze over. 

	function calculate(i) {
            var final_res = uitkomst.innerHTML;
            var bugFix = final_res.replace(/\d+/g, function(numb){return parseInt(numb, 10);
            });
              
			uitkomst.innerHTML = eval;
	}
	
// Hieronder staat de functie om een getal bij het geheugen op te tellen.
	function memPlus() {
		if (uitkomst !== ""){
			mem = mem + parseFloat(uitkomst.innerHTML);
		} 
	}
	
 // Hieronder staat de functie om een getal van het geheugen af te trekken. 
	function memMin() {
		if (uitkomst !== ""){
			mem = mem - parseFloat(uitkomst.innerHTML);
		}
	}
	
 // Hieronder staat de functie om het geheugen leeg te maken. 
	function memClear() {
		mem = 0;
	}
	
// Hieronder staat de functie om het getal uit het geheugen op te roepen. 
	function memRecall() {
		uitkomst.innerHTML = mem.toString();
	}
};




