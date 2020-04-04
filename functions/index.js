const functions = require("firebase-functions");

const app = require("express")();

const FBAuth = require("./util/FBAuth");

const { getAllScreams, postOneScream } = require("./handlers/screams");
const { signup, login, uploadImage, addUserDetails, getAuthenticationUser } = require("./handlers/user");

// Scream routes
app.get("/screams", getAllScreams);
app.post("/scream", FBAuth, postOneScream);
app.post('/user', FBAuth, addUserDetails)
app.post("/user/image", FBAuth, uploadImage)
app.get('/user', FBAuth, getAuthenticationUser)

// User routes
app.post("/signup", signup);
app.post("/login", login);

exports.api = functions.region("asia-northeast1").https.onRequest(app);
