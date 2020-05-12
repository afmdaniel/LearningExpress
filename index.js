const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Learning app listening on port 3000!')
})

app.use((req, res) => {
    res.send('use method')
})