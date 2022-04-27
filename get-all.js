import * as Search from "./search.js"

var data = {}
let elt = document.querySelector("select")
let numberOfItems = parseInt(elt.value);
// elt.addEventListener("change", function() {
//     numberOfItems = parseInt(elt.value)
// })

//initialisation des variables
let listofSorted = ['name', 'intelligence', 'strength', 'speed', 'durability', 'power', 'combat', 'race', 'gender', 'height', 'weight', 'pob', 'alignment']
let firstIndex = 0;
let currentPage = 1;
let max = 563;
let maxPages = Math.ceil(max / numberOfItems);
let url = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/"
let descending = false;


async function GetData(url, id) {
    try {
        //récupération de la ddata sur l'api via fetch
        var hero = await fetch(url + id.toString() + '.json')
        var heroData = await hero.json()
        heroData.id = id
        return heroData
    } catch {
        return false
    }
}


async function filterFullName(url, nb = max) {
    url += 'id/'
    let data = {}
    let i = 0
    let result = []
    let count = 1
    let fail = 0
    while (result.length <= nb) { //boucle qui se répète jusqu'à on ait un tableau d'objet du nombre que l'on veux afficher sur la page
        let PromiseList = []
        while (count <= nb + fail) {
            PromiseList.push(GetData(url, count)) //ajouter au tableau de promesse l'objet de l'api
            count++
        }
        data = await Promise.all(PromiseList).then(function(values) { //résolution des promesses
            return values
        })
        for (let i = 0; i < data.length; i++) { //vérifie si il n'y a pas d'erreur pour remettre dans le vrai tableau a renvoyer
            if (data[i] !== false) {
                result.push(data[i])
            } else {
                fail += 1
            }
        }
        i++
        if (i > 5) { //arrete la boucle si il fais 5 fois la boucle ou plus 
            break
        }
    }
    return result
}

var sorted = ''

function filterName() {
    sorted = 'name'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'biography', 'fullName', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo(); //récupere le numéro de la page sur laquelle on se trouve
}

function filterIntel() {
    sorted = 'intelligence'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'intelligence', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterStrength() {
    sorted = 'strength'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'strength', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterSpeed() {
    sorted = 'speed'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'speed', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterDurability() {
    sorted = 'durability'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'durability', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterPower() {
    sorted = 'power'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'power', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterCombat() {
    sorted = 'combat'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'combat', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterRace() {
    sorted = 'race'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'race', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterGender() {
    sorted = 'gender'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'gender', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterHeight() {
    sorted = 'height'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'height', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterWeight() {
    sorted = 'weight'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'weight', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterPoB() {
    sorted = 'pob'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'biography', 'placeOfBirth', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo();
}

function filterAlignment() {
    sorted = 'alignment'
    console.log(sorted)
    var table = document.getElementById("tableData"); //recupere le tableau sur la page
    table.innerHTML = "" //efface le tableau
    tmp = filterFullName(url) //execute la fonction filterFullName qui récupere les données 
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'biography', 'alignment', descending), numberOfItems) //execute la fonction qui affiche sur la page les objets
    })
    showPageInfo(); //récupere le numéro de la page sur laquelle on se trouve
}


function getSelectedValue() {
    var select = document.getElementById("select");
    var value = select.value
    numberOfItems = parseInt(value)
    maxPages = Math.ceil(max / numberOfItems);
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    firstIndex = 0
    currentPage = 1;
    if (!listofSorted.includes(sorted)) {
        showPage();
    } else {
        switcher();
    }
    return numberOfItems
}


async function getAll(obj) { //récupere l'api entière
    var hero = await fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json');
    var heroData = await hero.json()
    Object.assign(obj, heroData)
    return obj
}

let data2 = getAll(data) //assigne les donnée de l'api a la variable data2

function showPage() {
    data2.then(function first(result) {
        showData(result, numberOfItems)
    })
    showPageInfo();
}

showPage(); //execute la fonction sur la page

function showData(data, numberOfItems) {
    for (let i = firstIndex; i < firstIndex + numberOfItems; i++) {
        addRow(top, data[i])
    }
}

function nextPage() { //fonction pour la pagination
    if (!listofSorted.includes(sorted)) { //vérifie si la page est trier
        if (firstIndex + numberOfItems <= max) { //affiche sur la page le tableau
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex += numberOfItems;
            currentPage++;
            showPage();
        }
    } else {
        if (firstIndex + numberOfItems <= max) { //affiche sur la page le tableau en fonction du filtre
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex += numberOfItems;
            currentPage++;
            switcher();
        }
    }
}

function previous() { //fonction pour la pagination
    if (!listofSorted.includes(sorted)) { //vérifie si la page est trier
        if (firstIndex - numberOfItems > 0) { //affiche sur la page le tableau
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex -= numberOfItems
            currentPage--;
            showPage();
        }
    } else {
        if (firstIndex - numberOfItems > 0) { //affiche sur la page le tableau en fonction du filtre
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex -= numberOfItems
            currentPage--;
            switcher();
        }
    }
}

function firstPage() { //fonction pour la pagination
    if (!listofSorted.includes(sorted)) { //vérifie si la page est trier
        var table = document.getElementById("tableData");
        table.innerHTML = ""
        firstIndex = 0
        currentPage = 1;
        showPage();
    } else { //affiche sur la page le tableau en fonction du filtre
        var table = document.getElementById("tableData");
        table.innerHTML = ""
        firstIndex = 0
        currentPage = 1;
        switcher(); //switcher is a function that will switch between the different sorting methods
    }
}

function lastPage() { //fonction pour la pagination
    if (!listofSorted.includes(sorted)) { //vérifie si la page est trier
        var table = document.getElementById("tableData");
        table.innerHTML = ""
            // firstIndex = max - numberOfItems
        firstIndex = (maxPages * numberOfItems) - numberOfItems;
        currentPage = maxPages;
        showPage();
    } else { //affiche sur la page le tableau en fonction du filtre
        var table = document.getElementById("tableData");
        table.innerHTML = ""
        firstIndex = (maxPages * numberOfItems) - numberOfItems;
        currentPage = maxPages;
        switcher(); //switcher is a function that will switch between the different sorting methods
    }
}

function showPageInfo() {
    var span = document.getElementById("pageNo");
    span.innerHTML = ` Page ${currentPage} / ${maxPages} `
}

function addRow(top, heroes) {
    // GET TABLE
    if (heroes != null) {
        var table = document.getElementById("tableData");

        // INSERT ROW
        var row = table.insertRow()
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
}
// showData();

function switcher() { //execute la fonction associer au filtre récupéré
    switch (sorted) {
        case 'name':
            filterName();
            break;
        case 'intelligence':
            filterIntel();
            break;
        case 'strength':
            filterStrength();
            break;
        case 'speed':
            filterSpeed();
            break;
        case 'durability':
            filterDurability();
            break;
        case 'power':
            filterPower()
            break;
        case 'combat':
            filterCombat()
            break;
        case 'race':
            filterRace()
            break;
        case 'gender':
            filterGender()
            break;
        case 'height':
            filterHeight()
            break;
        case 'weight':
            filterWeight()
            break;
        case 'pob':
            filterPoB()
            break;
        case 'alignment':
            filterAlignment()
            break;

    }
}

function resetFilters() { //fonction pour reset le filtre
    sorted = '';
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    firstIndex = 0
    currentPage = 1;
    showPage();
}


function ascendingOrder() { //fonction pour trier le tableau par ordre croissant
    descending = false;
    console.log(descending);
}


function descendingOrder() { //fonction pour trier le tableau par ordre décroissant
    descending = true;
    console.log(descending);
}

function sort_Alpha_Num(arrayObjet, value1, value2, descending) { //fonction pour trier le tableau par ordre alphabétique et numérique
    if (descending === false) { //ascending and descending order
        return arrayObjet.sort(compare)
    } else {
        return arrayObjet.sort(compare).reverse()
    }

    function compare(firstValue, secondValue) { //trie deux valeurs
        if (secondValue[value1][value2] == "" && firstValue[value1][value2] !== null) return -1;
        if (firstValue[value1][value2] == "" && secondValue[value1][value2] !== null) return 1;
        if (secondValue[value1][value2] == '' || firstValue[value1][value2] < secondValue[value1][value2])
            return -1;
        if (firstValue[value1][value2] == '' || firstValue[value1][value2] > secondValue[value1][value2])
            return 1;
        return 0;
    }
}

function TrieObjetID(arrayObjet = sort_Alpha_Num(arrayObjet)) { //récuperer les objet avec leur ID
    let array = []
    for (let index = 0; index < arrayObjet.length; index++) {
        const element = arrayObjet[index];
        array.push(element.id)
    }
    return data5.sort(function(a, b) {
        return array.indexOf(a.id) - array.indexOf(b.id);
    })
}

SearchBar()

function SearchBar() { //Function that retrieves data from the search bar and sends it to the Search function
    let search = document.getElementById('searchBar')
    search.addEventListener("keyup", (e) => {
        console.log(Search.Search(e.target.value))
    })
}