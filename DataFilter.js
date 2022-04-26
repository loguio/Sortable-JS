import { sort_Alpha_Num } from './sort.js'
let url = "https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/"


 export async function GetData(url, id) {
    try {
        var hero = await fetch(url + id.toString() + '.json')
        var heroData = await hero.json()
        heroData.id = id
        return heroData
    } catch {
        return false
    }
}

export async function filterFullName(url, nb = 50) {
    url += 'biography/'
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
                result.push({ id: data[i].id, value: data[i].fullName })
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

export async function filterRace(url, nb = 50) {
    url += 'appearance/'
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
                result.push({ id: data[i].id, value: data[i].race })
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
export async function filterGender(url, nb = 50) {
    url += 'appearance/'
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
                result.push({ id: data[i].id, value: data[i].gender })
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

export async function filterHeight(url, nb = 50) {
    url += 'appearance/'
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
            if (data.length > 0 && data[i] !== false) {
                if (data[i].height[1] != null) {
                    result.push({
                        id: i,
                        value: Number(data[i].height[1].split(" ")[0])
                    })
                } else {
                    result.push({ id: i, value: data[i].height[0] })
                }
            } else {
                fail++
            }
        }
        i++
        if (i > 5) {
            break
        }
    }
    return result
}

export async function filterWeight(url, nb = 50) {
    url += 'appearance/'
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
            if (data.length > 0 && data[i] !== false) {
                if (data[i].height[1] != null) {
                    result.push({
                        id: i,
                        value: Number(data[i].height[1].split(" ")[0])
                    })
                } else {
                    result.push({ id: i, value: data[i].weight[0] })
                }
            } else {
                fail++
            }
        }
        i++
        if (i > 5) {
            break
        }
    }
    return result
}

export async function filterPlaceOfBirth(url, nb = 50) {
    url += 'biography/'
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
                result.push({ id: data[i].id, value: data[i].placeOfBirth })
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

export async function filterAlignment(url, nb = 50) {
    url += 'biography/'
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
                result.push({ id: data[i].id, value: data[i].alignment })
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

export async function filterIntelligence(url, nb = 50) {
    url += 'powerstats/'
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
                result.push({ id: data[i].id, value: data[i].intelligence })
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

export async function filterStrength(url, nb = 50) {
    url += 'powerstats/'
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
                result.push({ id: data[i].id, value: data[i].strength })
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

export async function filterSpeed(url, nb = 50) {
    url += 'powerstats/'
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
                result.push({ id: data[i].id, value: data[i].speed })
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

export async function filterDurability(url, nb = 50) {
    url += 'powerstats/'
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
                result.push({ id: data[i].id, value: data[i].durability })
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
export async function filterpower(url, nb = 50) {
    url += 'powerstats/'
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
                result.push({ id: data[i].id, value: data[i].power })
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

export async function filterCombat(url, nb = 50) {
    url += 'powerstats/'
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
                result.push({ id: data[i].id, value: data[i].combat })
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