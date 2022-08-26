const express = require('express')
const router = express.Router()
const path = require('path')
const fs = require('fs')
const busboy = require('busboy')
const bodyParser = require('body-parser')


const baseDir = path.resolve(__dirname, '../../')
const uploadDir = path.join(baseDir, 'static_files')

/**
 * get
 * /api/uploader/single
 */
router.get('/single', function (req, res, next) {
    res.send('/api/uploader/single');
});

const load_file = function (req) {
    return new Promise(async (resolve, reject) => {
        const bb = busboy({ headers: req.headers })
        bb.on('file', (name, file, info) => {
            const saveTo = path.join(uploadDir, info.filename)
            file.pipe(fs.createWriteStream(saveTo))
        });
        bb.on('close', () => {
            resolve({
                file: 'success'
            })
        })
        req.pipe(bb)
    })
}

/**
 * post
 * /api/uploader/upload_single
 */
router.post('/upload_single', async (req, res) => {
    try {
        let { files, fields } = await load_file(req, true)
        let file = (files.file && files.file[0]) || {}
        console.log('file: ', file, fields)
        res.send({
            code: 0,
            codeText: '上传成功',
            originFilename: file.originFilename,
        })
    } catch (err) {
        res.send({
            code: 1,
            codeText: err
        })
    }
})

module.exports = router
