const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001

// parse app to JSON
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json());

//panggil route
var route = require("./router");
route(app);




app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
