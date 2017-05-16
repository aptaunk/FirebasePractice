const functions = require('firebase-functions');
const cors = require('cors')({origin: true});
const admin = require("firebase-admin");
const db = admin.database();

admin.initializeApp(functions.config().firebase);

exports.test = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
     res.send("Hello "+req.body.name);
   });
});

exports.createVolunteer = functions.auth.user().onCreate(event => {
  const user = event.data;
  return db.ref("volunteers").set({
    user.uid: {
      hours: 0
    }
  }).then(() => {
    console.log('New Volunteer Created!');
  });
});
