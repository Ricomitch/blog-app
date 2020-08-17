const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const postRoutes = require('./routes/posts')
const db = require('./db/connection')
const PORT = process.envPORT || 3000

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))

// app.use('/api', postRoutes)

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))