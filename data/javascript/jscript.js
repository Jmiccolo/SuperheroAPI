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
			document.querySelector("#name").style = "display:block";
			document.querySelector("#intro").style = "display:block";
			document.querySelector("#bouton").value = "Gimme Another Hero!";

			document.querySelector("#name").innerHTML = hero.name;
			document.querySelector("#fullname").innerHTML = hero.biography["full-name"];
			document.querySelector("#aliases").innerHTML = hero.biography["aliases"];
			document.querySelector("#alignment").innerHTML = hero.biography["alignment"];
			document.querySelector("#height").innerHTML = hero.appearance["height"][0];
			document.querySelector("#weight").innerHTML = hero.appearance["weight"][0];

			(hero.powerstats["intelligence"] == "null" ? document.querySelector("#intelligence").innerHTML = "No data" : document.querySelector("#intelligence").innerHTML = hero.powerstats["intelligence"]);
			(hero.powerstats["strength"] == "null" ? document.querySelector("#strength").innerHTML = "No data" : document.querySelector("#strength").innerHTML = hero.powerstats["strength"]);
			(hero.powerstats["speed"] == "null" ? document.querySelector("#speed").innerHTML = "No data" : document.querySelector("#speed").innerHTML = hero.powerstats["speed"]);
			(hero.powerstats["durability"] == "null" ? document.querySelector("#durability").innerHTML = "No data" : document.querySelector("#durability").innerHTML = hero.powerstats["durability"]);
			(hero.powerstats["power"] == "null" ? document.querySelector("#power").innerHTML = "No data" : document.querySelector("#power").innerHTML = hero.powerstats["power"]);
			(hero.powerstats["combat"] == "null" ? document.querySelector("#combat").innerHTML = "No data" : document.querySelector("#combat").innerHTML = hero.powerstats["combat"]);
        }
    }
    
	let rNumber = Math.floor(Math.random() * 731) + 1;
	let heroURL = "https://www.superheroapi.com/api.php/10219711144872268/" + rNumber;

    xhr.open("GET", heroURL, true);
    xhr.send();
}
