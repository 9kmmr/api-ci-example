const express = require('express');
require('dotenv').config();

const port = process.env.PORT | 3000;

const app = express();
const mainRouter = require('./router');

const router = express.Router();
app.use('/', router);
mainRouter.route(router);

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    //console.log(`Example app listening on port ${port}!`);
});

module.exports = app
//Run app, then load http://localhost:port in a browser to see the output.