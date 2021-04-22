// https://www.superheroapi.com/api.php/10219711144872268/
/*
Full Name
		Alter-Egos
		alignment

		intelligence
		strength
		speed
		durability
		power
		combat

		height
		weight*/

window.onload = function() {
	document.querySelector('#bouton').addEventListener("click",GetHero);
}

function GetHero() {
	let xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if(this.readystate == 4 && this.status == 200) {
			let hero = JSON.parse(this.response);

			// document.querySelector("#fullname").innerHTML = hero.species.name;
		}
	}

	xhr.open("GET","https://swapi.dev/api/people/4/",true);
	xhr.send();
}