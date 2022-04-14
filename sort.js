let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()
    
function sort_Alpha_Num (arrayObjet) {
    function compare(firstValue, secondValue) {
        if (firstValue.value < secondValue.value)
            return -1;
        if (firstValue.value > secondValue.value)
            return 1;
        return 0;
    }
    return arrayObjet.sort(compare)
}

function TrieObjetID (arrayObjet = sort_Alpha_Num(arrayObjet)) {
    let array = []
    for (let index = 0; index < arrayObjet.length; index++) {
        const element = arrayObjet[index];
        array.push(element.id)
    }
    return data.sort(function(a, b){  
        return array.indexOf(a.id) - array.indexOf(b.id);
    })
}
