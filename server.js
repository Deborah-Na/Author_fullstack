const express = require('express');
const cors = require('cors') // This is new
const app = express();


app.use(cors()) // This is new
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./server/config/mongoose.config');
require('./server/routes/author.routes')(app);


app.listen(8000, () => {
    console.log("Listening at Port 8000")
})