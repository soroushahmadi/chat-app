const path = require('path');

const publicPath = path.join(__dirname, '../public');

const express = require('express');

const app = express()

//------------------------------------------------------------------

app.use(express.static(publicPath));












app.listen(3000, () => {
    console.log('server is up on port 3000')
});
