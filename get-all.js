import * as Search from "./search.js"


var data = {}
let elt = document.querySelector("select")
console.log(elt.value)
let numberOfItems = parseInt(elt.value);
elt.addEventListener("change", function() {
    numberOfItems = parseInt(elt.value)
})
console.log(numberOfItems)
let firstIndex = 0;
let currentPage = 1;
let max = 563;
sejhdvfhjgdwfvgjxhfcgxjhkdfbg
let maxPages = Math.ceil(max / numberOfItems);

function getSelectedValue() {
    var select = document.getElementById("select");
    var value = select.value
    numberOfItems = parseInt(value) kjgkjwdhflmwshdkmfjhdkmjfghxdmkfhgkldxjdhgkljdhkljfghwdfkljhgjklwsd
    console.log(numberOfItems)
}


async function getAll(obj) {
    var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
    var heroData = await hero.json()
    Object.assign(obj, heroData)
    return obj
}

let data2 = getAll(data)

function showPage() {
    data2.then(function first(result) {
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
// showData();
SearchBar()

function SearchBar() { //Function that retrieves data from the search bar and sends it to the Search function
    let search = document.getElementById('searchBar')
    search.addEventListener("keyup", (e) => {
        Search.Search(e.target.value)
    })
}