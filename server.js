const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

var http = require('http')

http.createServer(onrequest).listen(8000)

function onrequest(req, res) {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html')
    res.send('Hello World!/n')
}