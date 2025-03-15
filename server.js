const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/:filename', (req, res) => {
    const filename = req.params.filename;
    res.sendFile(path.join(__dirname, 'public', `${filename}.html`));
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});