 var data = {}
 let numberOfItems = 20;
 let firstIndex = 0;
 let currentPage = 1;
 let max = 563;
 let maxPages = Math.ceil(max / numberOfItems);

 function getSelectedValue() {
     var select = document.getElementById("select");
     var value = select.value
     console.log(value);
 }
 getSelectedValue();

 async function getAll(obj) {
     var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
     var heroData = await hero.json()
     Object.assign(obj, heroData)
     return obj
 }

 let data2 = getAll(data)

 function showPage() {
     data2.then(function first(result) {
         console.log(result[559])
         showData(result, numberOfItems)
     })
     showPageInfo();
 }

 showPage();

 function showData(data, numberOfItems) {
     for (let i = firstIndex; i < firstIndex + numberOfItems; i++) {
         addRow(top, data[i])
     }
 }

 function nextPage() {
     if (firstIndex + numberOfItems <= max) {
         var table = document.getElementById("tableData");
         table.innerHTML = ""
         firstIndex += numberOfItems;
         currentPage++;
         showPage();
     }
 }

 function previous() {
     if (firstIndex - numberOfItems > 0) {
         var table = document.getElementById("tableData");
         table.innerHTML = ""
         firstIndex -= numberOfItems
         currentPage--;
         showPage();
     }
 }

 function firstPage() {
     var table = document.getElementById("tableData");
     table.innerHTML = ""
     firstIndex = 0
     currentPage = 1;
     showPage();
 }
 console.log(currentPage)
 console.log(maxPages)

 function lastPage() {
     var table = document.getElementById("tableData");
     table.innerHTML = ""
     firstIndex = (maxPages * numberOfItems) - numberOfItems;
     currentPage = maxPages;
     showPage();
 }

 function showPageInfo() {
     var span = document.getElementById("pageNo");
     span.innerHTML = ` Page ${currentPage} / ${maxPages} `
 }

 function addRow(top, heroes) {
     // GET TABLE
     var table = document.getElementById("tableData");

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
 showData();