const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors())
app.post('/upload', (req, res) => {
    console.log('calling api');
    const writeStream = fs.createWriteStream('sample_file_with_excel_without_validation.xls');
    req.pipe(writeStream);

    req.on('end', () => {
        res.status(200).send('File uploaded successfully');
    });

    req.on('error', (err) => {
        res.status(500).send('Error uploading file');
    });
});

app.listen(3002, () => {
    console.log('Server started on http://localhost:3002');
});
