const express = require('express');
const app = express();

let PORT = 3001;

app.listen(3001, () => {
    console.log(`App now listening on port ${PORT}`);
});