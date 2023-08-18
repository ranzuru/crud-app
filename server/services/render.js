const axios = require('axios');

exports.homeRoutes = (req, res) => {
    // make a get request to /api/users
    // kuhaon tanan data sa database
    axios.get('http://localhost:3000/api/users').then(function(response){
        // ang response kay naa sa terminal mugawas
        // console.log(response.data)
        res.render('index', {users: response.data});
    })
    .catch(err => {
        res.send(err);
    })
    // res.render("index", {users: response.data});
}

exports.addUserRoutes = (req, res) => {
    res.render("add-user");
}

exports.updateUser = (req, res) => {
    // kuhaon ra ang specific data sa database
    axios.get('http://localhost:3000/api/users', {params: {id: req.query.id}}).then(function(userData) {
        res.render("update-user", {user:userData.data})
    })
    // res.render("update-user");
    .catch(err => {
        res.send(err);
    })
}

