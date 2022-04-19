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
    let temp = {}
    data.forEach(element => {
        if (element.appearance.height[1] != null) {
            result.push({ id: element.id, value: Number(element.appearance.height[1].split(" ")[0]) })
        } else {
            temp = { id: element.id, value: element.appearance.height[0] }
        }
    })
    result.push(temp)
    return result
}

const filterWeight = (data) => {
    let result = []
    data.forEach(element => {
        if (element.appearance.weight[1].includes("kg")) {
            result.push({ id: element.id, value: Number(element.appearance.weight[1].split(" ")[0]) })
        } else if (element.appearance.weight[1].includes("lb")) {
            result.push({ id: element.id, value: Number(element.appearance.weight[1].split(" ")[0]) * 0.45359237 })
        } else if (element.appearance.weight[1].includes("tons")) {
            result.push({ id: element.id, value: Number(element.appearance.weight[1].split(" ")[0]) * 1016.04691 })
        }
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