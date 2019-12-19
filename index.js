document.addEventListener("DOMContentLoaded", () => {
    let url = 'https://ghibliapi.herokuapp.com/films';
    
    const populateSelect = async () => {
        let res = await axios.get(url);
        let films = res.data;
        films.forEach(film => {
            let option = document.createElement('option');
            option.innerText = film.title;
            document.querySelector("select").appendChild(option);
        })
    }

    populateSelect();

    let select = document.querySelector("select");
    select.addEventListener("change", async (e) => {
        let res = await axios.get(url);
        let films = res.data;
        debugger
        let title = document.querySelector("#title");
        let releaseYear = document.querySelector("#releaseYear");
        films.forEach(film => {
            if(e.target.value === film.title){
                title.innerText = film.title;
                releaseYear.innerText = film.release_date;
                description.innerText = film.description;
            } 
        })
    })


    
})