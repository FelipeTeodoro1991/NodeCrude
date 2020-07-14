const Restaurant = require('./db')

function setup (app){
app.get('/resurantes', (request,response) => {
    response.send('Wello Word')
})
}