const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const router = require('./routes')

app.use(bodyParser.text())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(router)

app.listen(3000, () => {
    console.log('Learning app listening on port 3000!')
})