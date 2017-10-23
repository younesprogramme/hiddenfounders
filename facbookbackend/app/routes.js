var User       = require('../app/models/user');
module.exports = function(app) {


    app.post('/createaccount', function(req, res) {
        var u = new User({
        'local.password': req.body.password,
        'local.email' :  req.body.email
    });
    u.save(function(err) {
        if (err)
           throw err;
        else 
        res.send('save user successfully...');
    })
    });
    app.post('/login', function(req, res) {
       var  profil;
        User.findOne({
            'local.email': req.body.email,'local.password': req.body.password
        }, function(err, user) {
           profil = user;
           res.send(profil.local.email);
        });

        
    });

}