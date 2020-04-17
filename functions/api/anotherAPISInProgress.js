//to each route you can add auth to check if user sign in like so app.get('/pass to firestore', FBAuth ,(req, res) => {
// if (req.body.doby.trim() === '') {
//     return res.status(400).json({
//         body: 'Body must not be empty'
//     });
// }
//TODO: make it for all routes

// Example of functions , change later when will create collections 
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

// exports.getScream = functions.https.onRequest((req, res) => {
//     db
//         .collection('name of colelction')
//         .get()
//         .then((data) => {
//             //do somethinn with data
//         })
//         .catch((err) => console.error(err));
// });

// exports.getScream = functions.https.onRequest((req, res) => {
// const newSomething = {
//     body: req.body.body
//     createdAt: admin.firestore.Timestamp.fromDate(new Date())
// }
//        db
//         .collection('name of colelction')
//         .add()
//         .then((data) => {
//             res.json(...)
//         })
//         .catch((err) => console.error(err));
// });

//example by using express 
// app.get('/pass to firestore', (req, res) => {
//              db
//     //         .collection('name of colelction')
//     //         .get()
//     //         .then((data) => {
//     //             //do somethinn with data
//     //         })
//     //         .catch((err) => console.error(err));
// });



// ///Route for uploading an Image

// app.post('uploadImage', (req, res) => {
//     const BusBoy = require('busboy');
//     const path = require('path');
//     const os = require('os');
//     const fs = require('fs');

//     const busboy = new BusBoy({
//         headers: req.headers
//     });

//     let imageFileName;
//     let imageToBeUploaded = {};

//     busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
//         if (mimetype !== 'image/jpeg' && mimetype !== 'image/png') {
//             return res.status(400).json({
//                 error: 'Wrong type file submited'
//             });
//         }
//         const imageExtension = filename.split('.')[filename.split('.').length - 1];
//         imageFileName = `${Math.round(Math.random() * 100000000000)}.${imageExtension}`;
//         const filepath = path.join(os.tmpdir(), imageFileName);
//         imageToBeUploaded = {
//             filepath,
//             mimetype
//         };
//         file.pipe(fs.createWriteStream(filepath));
//         busboy.on('finish', () => {
//             admin.storage().bucket.upload(imageToBeUploaded.filepath, {
//                     resumable: false,
//                     metadata: {
//                         metadata: {
//                             contentType: imageToBeUplaoded.mimetype
//                         }
//                     }
//                 })
//                 .then(() => {
//                     const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
//                     return db.doc(`/users/${req.user.handle}`).update({
//                         imageUrl
//                     });
//                 })
//                 .then(() => {
//                     return res.json({
//                         message: 'Image Uploaded Successfully'
//                     });
//                 })
//                 .catch(err => {
//                     console.error(err);
//                     return res.status(500).json({
//                         error: err.code
//                     });
//                 })
//         })
//     });
//     busboy.end(req.rawBody);
// });