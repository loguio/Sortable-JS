export function sort_Alpha_Num(arrayObjet) {
    function compare(firstValue, secondValue) {
        if (secondValue.value == "" && firstValue.value !== null) return -1;
        if (firstValue.value == "" && secondValue.value !== null) return 1;
        if (secondValue.value == '' || firstValue.value < secondValue.value)
            return -1;
        if (firstValue.value == '' || firstValue.value > secondValue.value)
            return 1;
        return 0;
    }
    let sorted = arrayObjet.sort(compare)
    return sorted
}