const loadData = heroes => {
    console.log(heroes.images.xs) // write your code using the data in a function
        // note that you can not access heroes before this function is called.
        // const image = document.getElementById('image');
        // image.innerHTML = `<img src="${heroes.images.lg}" width="200"
        //     height="300"/>`

    function addRow(top) {
        // (B1) GET TABLE
        var table = document.getElementById("table");

        // (B2) INSERT ROW
        if (top) { var row = table.insertRow(0); } else { var row = table.insertRow(); }

        // (B3) INSERT CELLS
        var cell = row.insertCell();
        cell.innerHTML = `<img src="${heroes.images.xs}">`
        cell = row.insertCell();
        cell.innerHTML = heroes.name;
        cell = row.insertCell();
        cell.innerHTML = heroes.biography.fullName;
        cell = row.insertCell();
        cell.innerHTML = heroes.powerstats.combat;
        cell = row.insertCell();
        cell.innerHTML = heroes.appearance.race;
        cell = row.insertCell();
        cell.innerHTML = heroes.appearance.gender;
        cell = row.insertCell();
        cell.innerHTML = heroes.appearance.height;
        cell = row.insertCell();
        cell.innerHTML = heroes.appearance.weight;
        cell = row.insertCell();
        cell.innerHTML = heroes.biography.placeOfBirth;
        cell = row.insertCell();
        cell.innerHTML = heroes.biography.alignment;
    }
    addRow();
}

// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/1.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value