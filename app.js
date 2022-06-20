const express = require('express');
const app = express();
const port = 3030;

app.listen(port,() =>console.log('server running in http://localhost:' +port))

