const express = require('express')
const app = express()
const errorHandler = require('./common/middleware/error-handler.middleware');
app.listen(3000, () => {console.log("Server is running")});

const citiesController = require('./cities/cities.controller');
app.use('/cities', citiesController);
app.use(errorHandler);