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
let maxPages = Math.ceil(max / numberOfItems);
let url = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/"
    // let data5 = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
    // data5 = await data5.json()



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
        showData(sort_Alpha_Num(result, 'biography', 'fullName'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'powerstats', 'intelligence'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'powerstats', 'strength'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'powerstats', 'speed'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'powerstats', 'durability'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'powerstats', 'power'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'powerstats', 'combat'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'appearance', 'race'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'appearance', 'gender'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'appearance', 'height'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'appearance', 'weight'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'biography', 'placeOfBirth'), numberOfItems)
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
        showData(sort_Alpha_Num(result, 'biography', 'alignment'), numberOfItems)
    })
    showPageInfo();
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
        switch (sorted) {
            case 'name':
                filterName()
                break;
            case 'intelligence':
                filterIntel()
                break;
            case 'strength':
                filterStrength()
                break;
            case 'speed':
                filterSpeed()
                break;
            case 'durability':
                filterDurability()
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
    return numberOfItems
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
    }
}

function previous() {
    if (!sortName) {
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
            filterName();
        }
    }
}

function firstPage() {
    if (!sortName) {
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
        filterName();
    }
}

function lastPage() {
    if (!sortName) {
        var table = document.getElementById("tableData");
        table.innerHTML = ""
        firstIndex = max - numberOfItems
        currentPage = maxPages;
        showPage();
    } else {
        var table = document.getElementById("tableData");
        table.innerHTML = ""
        firstIndex = (maxPages * numberOfItems) - numberOfItems;
        currentPage = maxPages;
        filterName();
    }
}

function showPageInfo() {
    var span = document.getElementById("pageNo");
    span.innerHTML = ` Page ${currentPage} / ${maxPages} `
}

function addRow(top, heroes) {
    // GET TABLE
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
// showData();

function sort_Alpha_Num(arrayObjet, value1, value2) {
    function compare(firstValue, secondValue) {
        if (secondValue[value1][value2] == "" && firstValue[value1][value2] !== null) return -1;
        if (firstValue[value1][value2] == "" && secondValue[value1][value2] !== null) return 1;
        if (secondValue[value1][value2] == '' || firstValue[value1][value2] < secondValue[value1][value2])
            return -1;
        if (firstValue[value1][value2] == '' || firstValue[value1][value2] > secondValue[value1][value2])
            return 1;
        return 0;
    }
    return arrayObjet.sort(compare)
}

function TrieObjetID(arrayObjet = sort_Alpha_Num(arrayObjet)) {
    let array = []
    for (let index = 0; index < arrayObjet.length; index++) {
        const element = arrayObjet[index];
        array.push(element.id)
    }
    return data5.sort(function(a, b) {
        return array.indexOf(a.id) - array.indexOf(b.id);
    })
}