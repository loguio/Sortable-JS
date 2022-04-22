 function getSelectedValue() {
     var selectedValue = document.getElementById("select").value;
     return selectedValue;
 }


 function addRow(top, heroes) {
     // GET TABLE
     var table = document.getElementById("table");

     // INSERT ROW
     if (top) { var row = table.insertRow(); } else { var row = table.insertRow(); }

     // INSERT CELLS
     var cell = row.insertCell();
     cell.innerHTML = `<img src="${heroes.images.xs}">`
     cell = row.insertCell();
     cell.innerHTML = heroes.name;
     cell = row.insertCell();
     cell.innerHTML = heroes.biography.fullName;
     cell = row.insertCell();
     cell.innerHTML = heroes.powerstats.intelligence;
     cell = row.insertCell();
     cell.innerHTML = heroes.powerstats.strength;
     cell = row.insertCell();
     cell.innerHTML = heroes.powerstats.speed;
     cell = row.insertCell();
     cell.innerHTML = heroes.powerstats.durability;
     cell = row.insertCell();
     cell.innerHTML = heroes.powerstats.power;
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


 const loadData = heroes1 => {
     heroes1.forEach(heroes => {
         addRow(top, heroes);
     })
 }

 // Request the file fetch, it will download it in your browser cache
 fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json')
     .then((response) => response.json()) // parse the response from JSON
     .then(loadData) // .then will call the function with the JSON value
 loadData();