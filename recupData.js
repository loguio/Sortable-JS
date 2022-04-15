import { sort_Alpha_Num } from './sort.js'
let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

const recupData = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.biography.fullName })
    })
    return result
}