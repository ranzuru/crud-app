var userDb = require('../model/model');

// create and save new user
exports.create = (req, res) => {
    // validate request
    if(!req.body){
        res.status(400).send({
            message: "content cannot be empty"
        });
        return;
    }

    // new user
    const user = new userDb({
        name: req.body.name,
        email: req.body.email,
        gender: req.body.gender,
        status: req.body.status
    })

    // save user in the DB
    user.save(user).then(data => {
            // ang ubos na code kay para ra sa API
            // res.send(data)
            res.redirect('/add-user');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "create operation creation error (some)"
            });
        });
}

// retrieve and return users
// exports.find = (req, res) => {
//     userDb.find().then(user => {
//         res.send(user);
//     })
//     .catch(err => {
//         res.status(500).send({message: err.message || "information retrieval error"})
//     })
// }
// retrieve and return specific user/s
exports.find = (req, res) => {

    if(req.query.id){
        const id = req.query.id;

        userDb.findById(id).then(data => {
            if(!data){
                res.status(404).send({
                    message: "user not found with id = " + id
                })
            } else {
                res.send(data); 
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "user information retrieval error on id = " + id
            })
        })
    } else {
        userDb.find().then(user => {
            res.send(user);
        })
        .catch(err => {
            res.status(500).send({message: err.message || "information retrieval error"})
        })
    }
}

// update user by user ID
exports.update = (req, res) => {
    if(!req.body) {
        return res.status(400).send({
            message: "data to update cannot be empty"
        });
    }

    const id = req.params.id;
    userDb.findByIdAndUpdate(id, req.body, {useFindAndModify: false}).then(data => {
        if(!data) {
            res.status(404).send({
                message: err.message || `cannot update user ${id}. maybe user not found`
            });
        } else {
            res.send(data);
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "information update error"
        });
    })
}

// delete user by user ID
exports.delete = (req, res) => {
    const id = req.params.id;

    userDb.findByIdAndDelete(id).then(data => {
        if(!data){
            res.status(404).send({
                message: err.message || `cannot delete user ${id}. maybe id is wrong`
            });
        } else {
            res.send({
                message: "user deleted successfully"
            })
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "user deletion error on id = " + id
        });
    });
}