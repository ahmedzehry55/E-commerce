import express from 'express'
import dotenv from "dotenv";
import connentDb from './config/db.js';
import productRoutes from './routes/productRoutes.js';
dotenv.config()
connentDb()

const App = express()
const PORT = process.env.PORT
App.listen(PORT, console.log('server running'))
App.get('/', (req,res) => {
    res.send('welcome')
})
App.use((err,res,req,next)=>{
    const statusCode = res.statusCode ===200?500 :res.statusCode
    res.status(statusCode)
    res.json(err.message)
})
// App.use((res,req,next)=>{
//     const error = new Error(`not found ${req.originalUrl}`)
//     res.status(404)
//     next(error)
// })

App.use('/api/products',productRoutes)