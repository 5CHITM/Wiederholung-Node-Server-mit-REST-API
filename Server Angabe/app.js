const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const path = require('path');
const routes = require('./routes');
require('colors');
require('dotenv').config();
const { errorHandler, notFoundHandler } = require('./middleware/errorHandler');

const app = express();

app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '/public')));
app.use(helmet());

app.use(express.json());

app.use('/', routes);

app.use(errorHandler);

app.use(notFoundHandler);

const PORT = process.env.PORT ?? 5000;

app.listen(PORT);
