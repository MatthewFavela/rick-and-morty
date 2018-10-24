const resultDiv = document.querySelector('#result');

axios.get('https://rickandmortyapi.com/api/character/?page=1')
    .then(function(response){
        console.log('*****ALL_DATA******', response.data.results);
        resultDiv.innerHTML = response.data.results.map(function(val) {
            return `
            <br>
            <div id = "characterBox">
                <div class="name">${val.name}</div>
                <img class="image"src='${val.image}' width="100px" height="auto">
                <div class="species">${val.species}</div>
                <div class="origin-name">${val.origin.name}</div>
                <div class="status">${val.status}</div>
            </div>
            <br>
            `
        }).join(' ');

    })
    .catch(function(err){
        console.log('err', err);
    })

    

            