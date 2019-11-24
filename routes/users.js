const express = require('express'); 
const router = express.Router();


let users= [{
  users: "Arthur", 
  id:"0"
}, 
{
  users:"gaetan", 
  id:"1"
}]; 

/* GET users listing. */
router.get('/', (req, res) => {
  res.status(200).json({users}); 
});


module.exports = router;
