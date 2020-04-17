const admin = require('firebase-admin');
var serviceAccount = require('../util/CRUDKEY');
require('dotenv').config()
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: process.env.DB_URL
});
const db = admin.firestore();
module.exports = {
    admin,
    db
};