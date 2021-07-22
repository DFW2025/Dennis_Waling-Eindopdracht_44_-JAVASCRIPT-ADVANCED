// JAVASCRIPT Filters


// All Movies 

movies.map(getAllMovieDetails);

function getAllMovieDetails(item) {

    let newLi = document.createElement("li");
    let newA = document.createElement("a");
    let newImage = document.createElement("img");
    let newH1 = document.createElement("h1");
    let movieList = document.getElementById("moviegallery").getElementsByTagName("ul")[0];
    movieList.appendChild(newLi);
    newLi.appendChild(newH1);
    newLi.appendChild(newA);
    newA.appendChild(newImage);
    newA.setAttribute("href", "https://www.imdb.com/title/" + item.imdbID);
    newImage.setAttribute("src", item.Poster);
    newH1.innerHTML = item.Title;
};


// Clear Movie List


const movieFilters = document.getElementById("moviefilters");
const parent2 = document.getElementById("movies");

const removeMovieList = function () {
    while (parent2.firstChild) {
        parent2.removeChild(parent2.firstChild);
    }

};


// Movie Filters

function filterMovies(wordInMovieTitle) {

    const filteredMovies = movies.filter(item => item.Title.toLowerCase().includes(wordInMovieTitle));
    filteredMovies.map(getAllMovieDetails);
    console.log(filteredMovies);

};

// Movie Filter Latest Movies

function filterLatestMovies() {
    const filter = movies.filter((item) => {
        return item.Year > 2014
    });
    filter.map(getAllMovieDetails);
    console.log(filter);

};

// Menu Event Listeners with switch event

const handleOnChangeEvent = movieFilters.addEventListener('change', (e) => {
    const searchValue = e.target.value;
    removeMovieList();

    switch (searchValue) {
        case "latestmovies":
            console.log(searchValue)
            filterLatestMovies()
            break;
        case "avengers":
            console.log(searchValue)
            filterMovies(searchValue)
            break;
        case "x-men":
            console.log(searchValue)
            filterMovies(searchValue)
            break;
        case "princess":
            console.log(searchValue)
            filterMovies(searchValue)
            break;
        case "batman":
            console.log(searchValue)
            filterMovies(searchValue)
            break;
        case "reset":
            console.log(searchValue)
            movies.map(getAllMovieDetails);
            break;

        default:
            text = "No movies found.....";

    }


});





