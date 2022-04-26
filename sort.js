let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()


export function sort_Alpha_Num(arrayObjet, value1, value2, descending) {
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

export function TrieObjetID(arrayObjet = sort_Alpha_Num(arrayObjet)) {
    let array = []
    for (let index = 0; index < arrayObjet.length; index++) {
        const element = arrayObjet[index];
        array.push(element.id)
    }
    return data5.sort(function(a, b) {
        return array.indexOf(a.id) - array.indexOf(b.id);
    })
}