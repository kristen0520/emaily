const express = require("express");
const passportConfig = require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

var PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("app listening on port " + PORT))
