var express = require('express');
var multer = require('multer');
var router = express.Router();
var path = require('path');
var db = require('./models/index');

var storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads');
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname)
    }

})

// if we use .single instead of .array data will recevie in req.files
var upload = multer({ storage: storage }).array('image')



// single file upload api
router.post('/single/fileUpload', (req, res) => {
    console.log('in router');
    console.log(req.file)
    upload(req, res, (err) => {
        if (err) res.json({ status: false, message: "Something Went Wrong " });
        console.log(req.files[0].originalname); // req.files will work only in upload function
        db.file_upload.create({
            fileName: req.files[0].originalname
        }).then(data => {
            res.json({ status: true, message: "data saved successfully", result: data });
        }).catch(err => res.json({ status: false, message: "Something Went Wrong " }))
    })

});

// single file upload api
// router.post('/save/pdf', (req, res) => {
//     console.log('in router');
//     console.log(req.files)
//     upload(req, res, (err) => {
//         if (err) res.json({ status: false, message: "Something Went Wrong " });
//         console.log(req.files[0].originalname); // req.files will work only in upload function
//         db.file_upload.create({
//             fileName: req.files[0].originalname
//         }).then(data => {
//             res.json({ status: true, message: "data saved successfully", result: data });
//         }).catch(err => res.json({ status: false, message: "Something Went Wrong " }))
//     })

//});
router.post('/save/pdf', (req, res) => {
    console.log('in router');
    console.log(req.files)
    upload(req, res, (err) => {
        if (err) res.json({ status: false, message: "Something Went Wrong " });
        console.log(req.files[0].originalname); // req.files will work only in upload function
        db.file_upload.create({
            fileName: req.files[0].originalname
        }).then(data => {
            res.json({ status: true, message: "data saved successfully", result: data });
        }).catch(err => res.json({ status: false, message: "Something Went Wrong " }))
    })

});


// multiple file upload api
router.post('/multy/fileUpload', (req, res) => {
    console.log('in router');
    // req.file is used for single file upload
    // req.files is used for multiple file upload`s
    upload(req, res, (err) => {
        if (err) res.json({ status: false, message: "Something Went Wrong " });
        console.log(req.files);
    })

    res.send('fileUpload page');
});

router.post('/enum', (req, res) => {

    // req.file is used for single file upload
    // req.files is used for multiple file upload`s
    console.log(req.body.gender);

    db.registration.create({ gender: req.body.gender, name: req.body.name }).then((result) => {
        console.log(result)
        res.json({ data: result })
    }).catch((err) => {
        console.log(err)
        res.json({ status: err })
    })
});


module.exports = router;