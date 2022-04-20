let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

export function sort_Alpha_Num(arrayObjet, descending) {
    if (descending) {
        return arrayObjet.sort(compare)
    }else {
        return arrayObjet.sort(compare).reverse()
    }
    function compare(firstValue, secondValue) {
        if (secondValue.value == "" && firstValue.value !== null) return -1;
        if (firstValue.value == "" && secondValue.value !== null) return 1;
        if (secondValue.value == '' || firstValue.value < secondValue.value)
            return -1;
        if (firstValue.value == '' || firstValue.value > secondValue.value)
            return 1;
        return 0;
    }
}

export function TrieObjetID(arrayObjet) {
    let arrayId = []
    for (let index = 0; index < arrayObjet.length; index++) {
        const element = arrayObjet[index];
        arrayId.push(element.id)
    }
    return data.sort(function(a, b) {
        return arrayId.indexOf(b.id) - arrayId.indexOf(a.id);
    })
}
console.log(TrieObjetID(sort_Alpha_Num([
    {"id": 1, "value": "Marius"},
    {"id": 2, "value": "Yassine"},
    {"id": 3, "value": "Nathan"},
    {"id": 4, "value": "Alfred"},
    {"id": 5, "value": "Pierre"}
], false)))

/*
    _______TEST_______
    {"id": 1, "value": 10},
    {"id": 2, "value": 6},
    {"id": 3, "value": 8},
    {"id": 4, "value": 1},
    {"id": 5, "value": 7}
False 4, 2, 5, 3, 1
True 1, 3, 5, 2, 4

    {"id": 1, "value": "Marius"},
    {"id": 2, "value": "Yassine"},
    {"id": 3, "value": "Nathan"},
    {"id": 4, "value": "Alfred"},
    {"id": 5, "value": "Pierre"}
False 4, 1, 3, 5, 2
True 2, 5, 3, 1, 4
*/
