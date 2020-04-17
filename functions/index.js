const functions = require('firebase-functions');
const app = require('express')();

const {
    signup,
    login,
    uploadImage
} = require('./api/users');

const FBAuth = require('./util/fbAuth');

//User Routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);


exports.api = functions.https.onRequest(app);