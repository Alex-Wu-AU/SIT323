const express = require('express')
const app = express()
const port = 3000

// Basic route
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// Start the server

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
