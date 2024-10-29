import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import adminRouter from './routes/adminRoute.js'
import doctorRouter from './routes/doctorRoute.js'

// App config
const app = express()
const port = process.env.PORT || 5000
connectDB()
connectCloudinary()

// middlewares
app.use(express.json())
app.use(cors())

// api endpoints
app.use('/api/admin', adminRouter) //localhost:5000/api/admin/add-doctor
app.use('/api/doctor', doctorRouter) 

app.get('/', (req, res)=>{
    res.send('Api working')
})

app.listen(port, ()=> console.log("Server started"))