let data = await fetch("https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/all.json")
data = await data.json()

function search(search) {
    const searchLowerCase = search.toLowerCase()
    let FilteredCharacters = data.filter((objet) => {
        return (
            objet.name.toLowerCase().includes(searchLowerCase) ||
            objet.biography.fullName.toLowerCase().includes(searchLowerCase) ||
            ((objet.appearance.race !== null) && objet.appearance.race.toLowerCase().includes(searchLowerCase)
            ) ||
            ((objet.biography.placeOfBirth !== null)
                && objet.biography.placeOfBirth.toLowerCase().includes(searchLowerCase)
            )

        )
    });
    return FilteredCharacters
}