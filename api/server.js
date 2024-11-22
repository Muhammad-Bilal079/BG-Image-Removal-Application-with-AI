import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
import connectDB from './src/config/mongoDB.js'
import userRoute from './src/routes/userRoute.js'

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
app.use('/api/user',userRoute)
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
