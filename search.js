let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

function search (search) {
    let result = []
    for (let index = 0; index < data.length; index++) {
        let objet = data[index];
        objetArray.values(objet)
        for (let index = 0; index < objetArray.length; index++) {
            const element = objetArray[index];
            if (element.search(search) !== -1){
                result.push(objet)
                break
            }
        } 
    }
}

console.log(search("flash"))