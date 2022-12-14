let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

//This function aims to take the object array and sort it by alphabetical or numerical order with also in ascending and descending order
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

//sort based on the order of the object array that was sorted in Sort_Alpha_Num to return all API heroes in the correct order
export function SortObjectID(arrayObjet) {
    let arrayId = []
    for (let index = 0; index < arrayObjet.length; index++) { //Retrieval of sort IDs in the Sort_Alpha_Num
        const element = arrayObjet[index];
        arrayId.push(element.id)
    }
    return data.sort(function(a, b) { // Sorts data according to the sorted array of IDs
        return arrayId.indexOf(b.id) - arrayId.indexOf(a.id);
    })
}
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