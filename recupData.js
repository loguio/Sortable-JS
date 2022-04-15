import { sort_Alpha_Num } from './sort.js'
let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

const filterFullName = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.biography.fullName })
    })
    return result
}

const filterRace = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.appearance.race })
    })
    return result
}

const filterGender = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.appearance.gender })
    })
    return result
}

const filterHeight = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.appearance.height })
    })
    return result
}
const filterWeight = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.appearance.weight })
    })
    return result
}

const filterPlaceOfBirth = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.biography.placeOfBirth })
    })
    return result
}

const filterAlignment = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.biography.alignment })
    })
    return result
}

const filterIntelligence = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.powerstats.intelligence })
    })
    return result
}
const filterStrength = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.powerstats.strength })
    })
    return result
}

const filterSpeed = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.powerstats.speed })
    })
    return result
}

const filterDurability = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.powerstats.durability })
    })
    return result
}

const filterPower = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.powerstats.power })
    })
    return result
}

const filterCombat = (data) => {
    let result = []
    data.forEach(element => {
        result.push({ id: element.id, value: element.powerstats.combat })
    })
    return result
}