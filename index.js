const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

exports.test = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
     res.send("Hello "+req.body.name);
   });
});
