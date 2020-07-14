const express = require('express');
const { response } = require('express');

const app = express();

app.get('/', (request,response) => {
    response.send('Wello Word')
})


app.listen(3000)