const express = require('express');
const _ =require("lodash");
const router = express.Router();
const axios = require("axios"); 
//LES DIFFERENTES ROUTES 

// recuperation avec l'API  
let Movies=[];  

/*PUT movies */
router.put("/", (req, res) => {
    const {title}= req.body;
    
    axios({
        method: "get", 
        url : `http://www.omdbapi.com/?t=${title}&apikey=ac9e4ca5`,
        responseType : "json"
    })
    .then(function(response) {
        const data = response.data; 
        const id = data.imdbId;
        const movie= data.Title; 
        const yearOfRelease = data.Year; 
        const duration = data.Runtime; 
        const actors = data.Actors;
        const poster = data.Poster; 
        const boxOffice = data.BoxOffice; 
        const rottenTomatoesScore = data.Rating[1].Value; 
    })

    Movies.push({id, movie, yearOfRelease, duration, actors,  poster,  boxOffice,rottenTomatoesScore
        
    })
    console.log(`just add ${title} on {yearOfRelease}`); 
    res.status(200).json({
      message : "film ajout"
    }) 
});

/*GET all movies */
router.get("/", (req, res) => { 
    res.status(200).json({Movies : Movies});
     
});

/* GET one movie */
router.get("/:id", (req, res) => {
    const{id} = req.params; 
    const Movie= _.find(Movies, ["id",id]);
    res.status(200).json({
        Movies: [
            {
                id: Movie.id, 
                movie: Movie.movie, 
                yearOfRelease : Movie.yearOfRelease, 
                duration : Movie.duration, 
                actors: Movie.actors, 
                poster : Movie.poster, 
                boxOffice : Movie.boxOffice, 
                rottenTomatoesScore : Movie.rottenTomatoesScore
            }]

    }); 
}); 

/*UPDATE movies */
router.post("/:id", (req, res) => {
    const{id} = req.params;
    const {movie} = req.body; 
    const movieToUpdate = _.find(movies, ["id", id]); 
    movieToUpdate.movie = movie; 
    
    res.json({
        message: `mise à jour du film ${id} avec titre ${movie}`
    }); 
});

/*DELETE movies */
router.delete("/:id", (req, res) => {
    const{id} = req.params; 
    _.remove(movies, ["id", id]); 
    res.json({
        message: `le film ${id} est efface`
    })
}); 
 
//DECLARATION DE LA LISTE DE FILMS

let movies = [
    {
    id:"tt1375666",    
    movie:"Inception",
    yearOfRelease:"2010", 
    duration: 148, 
    actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page", "Tom Hardy"], 
    poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg", 
    boxOffice: 292568851, 
    rottenTomatoesScore: 87 
}, 
    {
        id:"tt0446029",    
        movie: "Scott Pilgrim vs. the World",
        yearOfRelease:"2010", 
        duration: 112, 
        actors: ["Michael Cera", "Kieran Culkin", "Anna Kendrick", "Alison Pill"], 
        poster: "https://m.media-amazon.com/images/M/MV5BMTkwNTczNTMyOF5BMl5BanBnXkFtZTcwNzUxOTUyMw@@._V1_SX300.jpg" , 
        boxOffice: 31494270, 
        rottenTomatoesScore: 81 
    }]; 

module.exports = router;