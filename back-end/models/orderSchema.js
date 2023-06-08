import mongoose from 'mongoose'
const OrderSchema = mongoose.Schema(
    {
        user:{
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:'User'
        },
        orderItems:[{
            product : {
                type: mongoose.Schema.Types.ObjectId,
                required:true,
                ref:'Product'
            },
            name:{
                type:String,
                required:true, 
            },
            image:{
                type:String,
                required:true, 
            },
            price: {
                type:Number,
                required:true,
                default: 0
            },
            qyt: {
                type:Number,
                required:true,
                default: 0
            },
        }],
        shippingAddress:[{
         
            address:{
                type:String,
                required:true, 
            },
            city:{
                type:String,
                required:true, 
            },
            postalcode: {
                type:Number,
                required:true,
                default: 0
            },
            cuntry: {
                type:String,
                required:true,
              
            },
        }],
        paymentResult:[{
         
            id:{
                type:String,
                required:true, 
            },
            status:{
                type:String,
              
            },
            upDateTime: {
                type:String,
               
            },
            emailAddress: {
                type:String,
              
              
            },
        }],
        paymentMethod: {
            type:String,
            required:true,
        },
       
        
        
        taxPrice: {
            type:Number,
            required:true,
            default: 0
        },
       shippingPrice: {
            type:Number,
            required:true,
            default: 0
        },
        
        isPaid: {
            type:Boolean,
            required:true,
            default: false
        },
        isdelivred: {
            type:Boolean,
            required:true,
            default: false
        },
        paidAt: {
            type:Date,
            
        },
        deliveredAt: {
            type:Date,
            
        }
    },
   
   
    {
        timestamps:true
    }
)
const Order = mongoose.model('Order' , OrderSchema)
export default Order