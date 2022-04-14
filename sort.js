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

