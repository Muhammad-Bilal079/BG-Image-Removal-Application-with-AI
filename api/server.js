import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import connectDB from './src/config/mongoDB.js'

// app config 
const PORT = process.env.PORT || 4000
const app = express()

// initialize midlewares 
app.use(cors())
app.use(express.json())
await connectDB()


// API routes 
app.get('/', (req, res) => {
    res.send('Hello  brother!')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
