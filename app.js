const express = require("express");
const path = require("path");
const app = express();
const port = 80;


//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'))


//PUG SPECIFIC STUFF
app.set('view engine', 'pug')

app.set('view', path.join(__dirname, 'views'))


//END POINTS
app.get('/',(req, res)=>{
      res.status(200).render('index.pug');
})


//START THE SERVER
app.listen(port, ()=>{
      console.log(`the application started succesfully on port ${port}`);
});
