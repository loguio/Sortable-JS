export function Search(search) {
    const searchLowerCase = search.toLowerCase() //we put it in lower case so that it is not case sensitive
    let FilteredCharacters = data.filter((objet) => { //Search for text in all categories
        return (
            objet.name.toLowerCase().includes(searchLowerCase) ||
            objet.biography.fullName.toLowerCase().includes(searchLowerCase) ||
            ((objet.appearance.race !== null) && objet.appearance.race.toLowerCase().includes(searchLowerCase)) ||
            ((objet.biography.placeOfBirth !== null) &&
                objet.biography.placeOfBirth.toLowerCase().includes(searchLowerCase)
            )

        )
    });
    return FilteredCharacters
}