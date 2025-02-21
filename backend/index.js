const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
app.use(cors());

app.get('/read-file', (req, res) => {
    fs.readFile('input.json', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read file' });
        }
        res.json({ content: data });
    });
});

app.listen(4000, () => console.log('Server running on port 4000'));
