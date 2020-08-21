const functions = require('firebase-functions');

const app = require('express')();

const FBAuth = require('./utility/fbAuth');

const {
  getAllPosts,
  createNewPost,
  getPost,
  commentOnPost
} = require('./handlers/posts');

const {
  signup,
  login,
  uploadImage,
  addUserDetails,
  getAuthenticatedUser
} = require('./handlers/users');

// posts routes
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, createNewPost);
app.get('/post/:postId', getPost);
// TODO
// delete a post
// like a post
// unlika a post
app.post('/post/:postId/comment', FBAuth, commentOnPost);

// users routes
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
app.get('/user', FBAuth, getAuthenticatedUser);

exports.api = functions.region('asia-southeast2').https.onRequest(app);
