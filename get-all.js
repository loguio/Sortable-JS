var data = {}
let elt = document.querySelector("select")
console.log(elt.value)
let numberOfItems = parseInt(elt.value);
// elt.addEventListener("change", function() {
//     numberOfItems = parseInt(elt.value)
// })
console.log(numberOfItems)
let listofSorted = ['name', 'intelligence', 'strength', 'speed', 'durability', 'power', 'combat', 'race', 'gender', 'height', 'weight', 'pob', 'alignment']
let firstIndex = 0;
let currentPage = 1;
let max = 563;
sejhdvfhjgdwfvgjxhfcgxjhkdfbg
let maxPages = Math.ceil(max / numberOfItems);
let url = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/"
let descending = false;


async function GetData(url, id) {
    try {
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
    console.log("oui")
    while (result.length <= nb) {
        let PromiseList = []
        while (count <= nb + fail) {
            PromiseList.push(GetData(url, count))
            count++
        }
        data = await Promise.all(PromiseList).then(function(values) {
            return values
        })
        for (let i = 0; i < data.length; i++) {
            if (data[i] !== false) {
                result.push(data[i])
            } else {
                fail += 1
            }
        }
        i++
        if (i > 5) {
            break
        }
    }
    return result
}

var sorted = ''

function filterName() {
    sorted = 'name'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'biography', 'fullName', descending), numberOfItems)
    })
    showPageInfo();
}

function filterIntel() {
    sorted = 'intelligence'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'intelligence', descending), numberOfItems)
    })
    showPageInfo();
}

function filterStrength() {
    sorted = 'strength'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'strength', descending), numberOfItems)
    })
    showPageInfo();
}

function filterSpeed() {
    sorted = 'speed'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'speed', descending), numberOfItems)
    })
    showPageInfo();
}

function filterDurability() {
    sorted = 'durability'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'durability', descending), numberOfItems)
    })
    showPageInfo();
}

function filterPower() {
    sorted = 'power'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'power', descending), numberOfItems)
    })
    showPageInfo();
}

function filterCombat() {
    sorted = 'combat'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'powerstats', 'combat', descending), numberOfItems)
    })
    showPageInfo();
}

function filterRace() {
    sorted = 'race'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'race', descending), numberOfItems)
    })
    showPageInfo();
}

function filterGender() {
    sorted = 'gender'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'gender', descending), numberOfItems)
    })
    showPageInfo();
}

function filterHeight() {
    sorted = 'height'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'height', descending), numberOfItems)
    })
    showPageInfo();
}

function filterWeight() {
    sorted = 'weight'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'appearance', 'weight', descending), numberOfItems)
    })
    showPageInfo();
}

function filterPoB() {
    sorted = 'pob'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'biography', 'placeOfBirth', descending), numberOfItems)
    })
    showPageInfo();
}

function filterAlignment() {
    sorted = 'alignment'
    console.log(sorted)
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    tmp = filterFullName(url)
    tmp.then(function(result) {
        showData(sort_Alpha_Num(result, 'biography', 'alignment', descending), numberOfItems)
    })
    showPageInfo();
}


function getSelectedValue() {
    var select = document.getElementById("select");
    var value = select.value
<<<<<<< HEAD
    numberOfItems = parseInt(value) kjgkjwdhflmwshdkmfjhdkmjfghxdmkfhgkldxjdhgkljdhkljfghwdfkljhgjklwsd
    console.log(numberOfItems)
=======
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
>>>>>>> 3aaa2076c78b19560bfaf2167f787ad94e2984df
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
    if (!listofSorted.includes(sorted)) {
        if (firstIndex + numberOfItems <= max) {
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex += numberOfItems;
            currentPage++;
            showPage();
        }
    } else {
        if (firstIndex + numberOfItems <= max) {
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex += numberOfItems;
            currentPage++;
            switcher();
        }
    }
}

function previous() {
    if (!listofSorted.includes(sorted)) {
        if (firstIndex - numberOfItems > 0) {
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex -= numberOfItems
            currentPage--;
            showPage();
        }
    } else {
        if (firstIndex - numberOfItems > 0) {
            var table = document.getElementById("tableData");
            table.innerHTML = ""
            firstIndex -= numberOfItems
            currentPage--;
            switcher();
        }
    }
}

function firstPage() {
    if (!listofSorted.includes(sorted)) {
        var table = document.getElementById("tableData");
        table.innerHTML = ""
        firstIndex = 0
        currentPage = 1;
        showPage();
    } else {
        var table = document.getElementById("tableData");
        table.innerHTML = ""
        firstIndex = 0
        currentPage = 1;
        switcher(); //switcher is a function that will switch between the different sorting methods
    }
}

function lastPage() {
    if (!listofSorted.includes(sorted)) {
        var table = document.getElementById("tableData");
        table.innerHTML = ""
            // firstIndex = max - numberOfItems
        firstIndex = (maxPages * numberOfItems) - numberOfItems;
        currentPage = maxPages;
        showPage();
    } else {
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

function switcher() {
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

function resetFilters() {
    sorted = '';
    var table = document.getElementById("tableData");
    table.innerHTML = ""
    firstIndex = 0
    currentPage = 1;
    showPage();
}


function ascendingOrder() {
    descending = false;
    console.log(descending);
}


function descendingOrder() {
    descending = true;
    console.log(descending);
}

function sort_Alpha_Num(arrayObjet, value1, value2, descending) {
    if (descending === false) { //ascending and descending order
        return arrayObjet.sort(compare)
    } else {
        return arrayObjet.sort(compare).reverse()
    }

    function compare(firstValue, secondValue) {
        if (secondValue[value1][value2] == "" && firstValue[value1][value2] !== null) return -1;
        if (firstValue[value1][value2] == "" && secondValue[value1][value2] !== null) return 1;
        if (secondValue[value1][value2] == '' || firstValue[value1][value2] < secondValue[value1][value2])
            return -1;
        if (firstValue[value1][value2] == '' || firstValue[value1][value2] > secondValue[value1][value2])
            return 1;
        return 0;
    }
}
<<<<<<< HEAD
// showData();
SearchBar()

function SearchBar() { //Function that retrieves data from the search bar and sends it to the Search function
    let search = document.getElementById('searchBar')
    search.addEventListener("keyup", (e) => {
        Search.Search(e.target.value)
=======

function TrieObjetID(arrayObjet = sort_Alpha_Num(arrayObjet)) {
    let array = []
    for (let index = 0; index < arrayObjet.length; index++) {
        const element = arrayObjet[index];
        array.push(element.id)
    }
    return data5.sort(function(a, b) {
        return array.indexOf(a.id) - array.indexOf(b.id);
>>>>>>> 3aaa2076c78b19560bfaf2167f787ad94e2984df
    })
}