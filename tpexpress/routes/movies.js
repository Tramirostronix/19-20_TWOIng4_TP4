var express = require('express');
var router = express.Router();

/*PUT movies */
router.put("/", function (req, res) {
    res.send("creation film");
});

/*GET movies */
router.get("/", function (req, res) {
    res.send("affichage film");
});

/*POST movies */
router.post("/", function (req, res) {
    res.send("mise à jour film");
});

/*DELETE movies */
router.delete("/", function (req, res) {
    res.send("suppression film");
}); 