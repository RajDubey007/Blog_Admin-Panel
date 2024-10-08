const express = require('express');
const app = express();
const path = require('path');
const env = require('dotenv').config();
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const reqPath = path.join(__dirname, 'views');
const router = require('./routes/index');
const cookieParser = require('cookie-parser');
const db = require('./db/db.js');

app.set('view engine', 'ejs');
app.set('views', reqPath);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cookieParser());

app.use(express.static(reqPath));
app.use("/public", express.static(path.join(__dirname, "/public")));
app.use(express.static(path.join(__dirname, 'views')));
app.use('/', router);

app.listen(port, (err) => {
    if (!err) {
        console.log(`Server running on port http://localhost:${port}`);
    }
})