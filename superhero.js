
    let heroCard = document.querySelector('#herocard');
    let searchForm = document.querySelector('#searchForm');
    let searchButton = document.querySelector('#searchButton');
    console.log(searchForm);
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let loading = document.createElement('h1');
        loading.innerText = 'Loading...'
        loading.id = 'loading';

        heroCard.appendChild(loading);
        let query = document.getElementById('search');

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function(){
            if(this.readyState == 4 && this.status == 200){
                updatePage(this.response);
            }
        }

        xhr.open('GET', `https://www.superheroapi.com/api.php/10219711144872268/search/${query.value}`, true);
        
        xhr.send();

    })

    function updatePage(res){
        let response = JSON.parse(res);

        heroCard.innerHTML = '';

        let supeName = document.createElement('h1');
        supeName.innerText = response.results[0].name;
        supeName.id = 'supeName';


        let supeImage = document.createElement('img');
        supeImage.id = 'supeImage';
        supeImage.src = response.results[0].image.url;

        let cardLabel = document.createElement('div');
        cardLabel.appendChild(supeName);
        cardLabel.appendChild(supeImage);

        let statList = document.createElement('div');
        statList.id = 'statList';


        for(let stat in response.results[0].powerstats){
            let statBlock = document.createElement('div');
            statBlock.classList.add('stat');
            let statTitle = document.createElement('h2');
            statTitle.innerText = stat;
            let statValue = document.createElement('h4');
            statValue.innerText = response.results[0].powerstats[stat];
            
            statBlock.appendChild(statTitle);
            statBlock.appendChild(statValue);
            statList.appendChild(statBlock);
        }

        heroCard.appendChild(cardLabel);
        heroCard.appendChild(statList);
    }