const express = require("express");
const app = express();
var port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send({ hi: 'there'})
})


app.listen(port, console.log("app listening on port " + port))
