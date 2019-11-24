const express = require('express');
const _ =require("lodash");
const router = express.Router();


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

/*PUT movies */
router.put("/", function (req, res) {
    const {movie}= req.body;
    const id= _.uniqueId(); 
    movies.push({id, movie}); 
    res.json({
        message: "le film est ajouté", 
        movie: {id, movie}
    }); 
});

/*GET all movies */
router.get("/", (req, res) => {
    res.status(200).json({movies}); 
});

/* GET one movie */
router.get("/:id", (req, res) => {
    const{id} = req.params; 
    const movie= _.find(movies, ["id",id]);
    res.status(200).json({movie})
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
 


module.exports = router;