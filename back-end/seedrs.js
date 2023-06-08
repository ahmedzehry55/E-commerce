import mongoose from 'mongoose'
import dotenv from "dotenv";
import connentDb from './config/db.js';
import Product from './models/productSchema.js';
import Order from './models/orderSchema.js';
import User from './models/userSchama.js';
import Products from './data/Productes.js';
import Users from './data/Users.js';

dotenv.config()
connentDb()
const importData = async()=>{
    try{
        await Product.deleteMany()
        await User.deleteMany()
        await Order.deleteMany()
        const createUser = await User.insertMany(Users)
        const adminUser = createUser[0]._id
        const sampleProduct = Products.map((product) => {
            return {...product, user:adminUser}
        })
        await Product.insertMany(sampleProduct)
        console.log('data imported')
        process.exit()
    }catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
    
}
const destroyData = async () => {
    try{
        await Product.deleteMany()
        await User.deleteMany()
        await Order.deleteMany()
        console.log('data removed')
        process.exit()
    }catch(error){
        console.log(`${error}`)
        process.exit(1)
    }
}
if (process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}