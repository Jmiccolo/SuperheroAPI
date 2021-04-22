window.onload = function(){
    document.querySelector('#bouton').addEventListener("click", GetHero);
}

function GetHero(){
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200) {
            let hero = JSON.parse(this.response);

			document.querySelector("#heroimg").src = hero.image["url"];
			document.querySelector("#heroimg").style = "display:inline";

			document.querySelector("#name").innerHTML = hero.name;
			document.querySelector("#fullname").innerHTML = hero.biography["full-name"];
			document.querySelector("#aliases").innerHTML = hero.biography["aliases"];
			document.querySelector("#alignment").innerHTML = hero.biography["alignment"];
			document.querySelector("#height").innerHTML = hero.appearance["height"][0];
			document.querySelector("#weight").innerHTML = hero.appearance["weight"][0];

			document.querySelector("#intelligence").innerHTML = hero.powerstats["intelligence"];
			document.querySelector("#strength").innerHTML = hero.powerstats["strength"];
			document.querySelector("#speed").innerHTML = hero.powerstats["speed"];
			document.querySelector("#durability").innerHTML = hero.powerstats["durability"];
			document.querySelector("#power").innerHTML = hero.powerstats["power"];
			document.querySelector("#combat").innerHTML = hero.powerstats["combat"];

			document.querySelector("#bouton").value = "Gimme Another Hero!";
        }
    }
    
	let rNumber = Math.floor(Math.random() * 731) + 1;
	let heroURL = "https://www.superheroapi.com/api.php/10219711144872268/" + rNumber;

    xhr.open("GET", heroURL, true);
    xhr.send();
}
