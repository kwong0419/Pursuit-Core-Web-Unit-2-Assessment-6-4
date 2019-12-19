document.addEventListener("DOMContentLoaded", () => {
    let url = 'https://ghibliapi.herokuapp.com/films';
    
    const populateSelect = async (url) => {
        let res = await axios.get(url);
        let films = res.data;
        films.forEach(film => {
            let option = document.createElement('option');
            option.innerText = film.title;
            document.querySelector("select").appendChild(option);
        })
    }

    populateSelect(url);

    
})