export function Search(search, data) {
    
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