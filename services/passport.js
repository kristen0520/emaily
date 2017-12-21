const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const keys = require('../config/keys')

//trying to add promise
 mongoose.Promise = global.Promise;

const User = mongoose.model('users');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user)
  })
})

passport.use(
  new GoogleStrategy(
  {
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: "/auth/google/callback",
    proxy: true
  },
(accessToken, refreshToken, profile, done) => {
  User.findOne({ googleId: profile.id })
  .then( (existingUser) => {
    if(existingUser){
      //we already have a record witht he given profileid
      done(null, existingUser)
    } else {
      //we dont have record witht his id ake new
      new User({ googleId: profile.id }).save()
      .then(user => done(null, user))
    }
  })














  /*  .then((existingUser) => {
    if (existingUser) {
      //we laready have recorde with profileid
      done(null, existingUser);
    }
  else {
      //we dont have this id on record make new user
      User.findOne({ googleId: profile.id }).save()
      .then(user => done(null, user));
    }
  })
  ...this is where its messing up... */

})
);
