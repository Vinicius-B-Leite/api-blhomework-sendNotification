require('dotenv').config()
var admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASECONFIG)),
});


module.exports = admin