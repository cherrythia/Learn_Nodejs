var movies = require('./movies');

var buckyMovies = movies();
buckyMovies.favMovie = "My fav movie";
console.log("Bucky fav movie is " + buckyMovies.favMovie);