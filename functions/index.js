const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./utility/fbAuth');

const { getAllPosts, createNewPost } = require('./handlers/posts');
const {
  signup,
  login,
  uploadImage,
  addUserDetails
} = require('./handlers/users');

// posts routes
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, createNewPost);

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);

exports.api = functions.region('asia-southeast2').https.onRequest(app);
