const express = require('express')
const server = express()
const apiLogger = require('../api_logger')

function routeLoggerMiddleware(req, res, next) {
    apiLogger.info(req.path, `I was ${req.method}'ed`)
    next()
}

server.get('/lol', (req, res, next) => {
    res.send('haha')
    next()
})

server.listen(8080, () => {
    console.log('LOUD AND CLEAR')
})




