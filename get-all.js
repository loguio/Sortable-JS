 var data = {}
 let numberOfItems = 20;
 let firstIndex = 0;
 async function getAll(obj) {
     var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
     var heroData = await hero.json()
     Object.assign(obj, heroData)
     return obj
 }

 let data2 = getAll(data)

 data2.then(function first(result) {
     showData(result, numberOfItems)
 })


 function showData(data, numberOfItems) {
     for (let i = firstIndex; i < firstIndex + numberOfItems; i++) {
         addRow(top, data[i])
     }
 }

 //  function nextPage() {
 //      if firstIndex + numberOfItems <=
 //          firstIndex += numberOfItems;
 //      showData(data, numberOfItems)
 //  }


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
 //showData();