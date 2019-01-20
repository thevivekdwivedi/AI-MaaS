const express = require('express');
const router = express.Router();

/**
 * Method to upload a file to the uploads folder appended by the id.
 */
router.post('/uploadFile/:id', (req, res) => {
    if (req.files) {
        var file = req.files.file;
        var filename = req.params.id + '_' + file.name;
        console.log(req);
        file.mv('./uploads/' + filename, (err) => {
            if (err) {
                res.json(err);
            } else {
                res.json("Uploaded");
            }
        });
    }
});

/**
 * Method to delete a file from the uploads folder.
 */
router.delete('/deleteFile', (req, res) => {
    if (req.body.file) {
        cmd.get('cd ./uploads && rm ' + req.body.file + ' && cd ..', (err, data, stderr) => {
            if (err) {
                res.json(err);
            } else {
                res.json("Success");
            }
        });
    }
});

module.exports = router;