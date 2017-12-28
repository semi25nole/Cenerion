$(document).ready(function() {
    $("#searchForm").on("submit", function(event) {
        let searchText = ($("#searchText").val());
        getMovies(searchText);
        event.preventDefault();
    })
});

function getMovies(searchText) {
    axios.get('http://www.omdbapi.com?apikey=62009c58&s=' + searchText)
        .then(function(response) {
            console.log(response);
            let movies = response.data.Search;
            let output = '';
            $.each(movies, function(index, movie) {
                output += `
                                <div class="col-md-3">
                                <div class="well text-center">
                                <br>
                                <img src="${movie.Poster}">
                                <h5>${movie.Title}</h5>
                                <a onclick="movieSelected('${movie.imdbID}')" class="btn btn-primary" href="#">Movie Details</a>
                                </div>
                                </div>`
            });
            $("#movies").html(output);
        })
};

function movieSelected (id) {
    sessionStorage.setItem('movieID', id);
    window.location = 'movie.html';
    return false;
}

function getMovie(done) {
    let movieID = sessionStorage.getItem('movieID');
    axios.get('http://www.omdbapi.com?apikey=62009c58&i=' + movieID + '&r=json')
        .then(function(response) {
            let movie = response.data;

            let output = `
                        
                            <div class="row">
                                <div class="col-md-4" id="post">
                                    <img src="${movie.Poster}" class="thumbnail">
                                </div>
                        
                        
                            <div id="fixed" class="col-md-8">
                                    <h2>${movie.Title}</h2>
                                    <ul class="list-group">
                                        <li class="list-group-item"><strong>Genre: </strong>${movie.Genre}</li>
                                        <li class="list-group-item"><strong>Released: </strong>${movie.Released}</li>
                                        <li class="list-group-item"><strong>Rated: </strong>${movie.Rated}</li>
                                        <li class="list-group-item"><strong>IMDB: </strong>${movie.imdbRating}</li>
                                        <li class="list-group-item"><strong>Director: </strong>${movie.Director}</li>
                                        <li class="list-group-item"><strong>Writer: </strong>${movie.Writer}</li>
                                        <li class="list-group-item"><strong>Actors: </strong>${movie.Actors}</li>
                                        <br>
                                        </ul>
                                    <h3>Plot</h3>
                                    <p>${movie.Plot}</p>
                                    <hr>
                                    <a href="http://imdb.com/title/${movie.imdbID}" target="_blank" class="btn btn-primary">View IMDB</a>
                                    <br>
                                    <br>
                            </div>
                        
                            `
            $("#movie").html(output);
        })
}
