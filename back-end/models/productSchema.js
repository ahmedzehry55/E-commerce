import mongoose from 'mongoose'
const reviewSchema = mongoose.Schema(
    {
        name: {
            type:String,
            required:true,
        },
        comment: {
            type:String,
            required:true,
        },
        rating:{
            type:Number,
            required:true,
        }
    }
)
const productSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        name: {
            type:String,
            required:true,
        },
        image: {
            type:String,
            required:true,
           
        },
        brand: {
            type:String,
            required:true,
        },
        category: {
            type:String,
            required:true,
        },
        desc: {
            type:String,
            required:true,
        },
        rating: {
            type:Number,
            required:true,
            default: 0
        },
       numOfStock: {
            type:Number,
            required:true,
            default: 0
        },
        reviews:[reviewSchema],
        price: {
            type:Number,
            required:true,
            default: 0
        },
        inStock: {
            type:Number,
            required:true,
            default: 0
        }
    },
    {
        timestamps:true
    }
)
const Product = mongoose.model('Product' , productSchema)
export default Product