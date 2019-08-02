const passport = require ('passport');


//route to google user profile
module.exports = (app)=> {
app.get('/auth/google',passport.authenticate('google',{
    scope: ['profile', 'email']
}))

// redirect route back to our server after user permission.
app.get('/auth/google/callback', passport.authenticate('google'))

}