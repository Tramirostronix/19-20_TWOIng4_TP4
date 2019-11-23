const express= require("express"); 
const hostname = "localhost"; 
const port = 3000; 

const app= express(); 
app.listen(port, hostname, () => {
    console.log(`mon server fonctionne sur http://${hostname}:${port}`)
}); 