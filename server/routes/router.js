const express = require("express");
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller');

/**
 * @description Root Route
 * @method GET/ 
 * @summary Routing Method 2
 */

route.get('/', services.homeRoutes);

// route.get('/', (req, res) => {
//     res.send("crud application");
//     res.render("index");
// })

/**
 * @description Add User Route
 * @method GET /add-user
 * @summary Routing Method 2
 */

route.get('/add-user', services.addUserRoutes);

// route.get('/add-user', (req, res) => {
//     res.send("crud application");
//     res.render("add-user");
// })

// routing method 1
route.get('/update-user', (req, res) => {
    // res.send("crud application");
    res.render("update-user");
})

// API route
// URL parameters
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);

module.exports = route;