document.addEventListener("DOMContentLoaded", () => {

    let url = "https://ghibliapi.herokuapp.com/films";
    let title = document.querySelector("#title");
    
    const populateSelect = async () => {
        let res = await axios.get(url);
        let films = res.data;
        films.forEach(film => {
            let option = document.createElement("option");
            option.innerText = film.title;
            document.querySelector("select").appendChild(option);
        })
    }

    populateSelect();

    let select = document.querySelector("select");
    select.addEventListener("change", async (e) => {
        let res = await axios.get(url);
        let films = res.data;
        let releaseYear = document.querySelector("#releaseYear");
        films.forEach(film => {
            if(e.target.value === film.title){
                title.innerText = film.title;
                releaseYear.innerText = film.release_date;
                description.innerText = film.description;
            } 
        })
    })

    let form = document.querySelector("form");
    let userInput = document.querySelector("#userInput");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        let li = document.createElement("li");
        li.innerHTML = `<strong>${title.innerText}:</strong> ${userInput.value}`;
        document.querySelector("ul").appendChild(li);
        userInput.value = "";
    })

})