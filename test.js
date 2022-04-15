const loadData = heroes => {
    console.log(heroes.images.xs) // write your code using the data in a function
        // note that you can not access heroes before this function is called.
    const image = document.getElementById('image');
    image.innerHTML = `<img src="${heroes.images.lg}" width="200"
    height="300"/>`
}



// Request the file fetch, it will download it in your browser cache
fetch('https://rawcdn.githack.com/akabab/superhero-api/0.2.0/api/id/1.json')
    .then((response) => response.json()) // parse the response from JSON
    .then(loadData) // .then will call the function with the JSON value