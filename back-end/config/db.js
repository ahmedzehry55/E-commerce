import mongoose from 'mongoose'
const connentDb = async ()=> {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            // useNewUrlParsare:true,
            // useCreateIndex:true
        })
        console.log('connected')
    }catch(error){
        console.log(`message:${error.message}`)
        process.exit(1)
    }
}
export default connentDb;