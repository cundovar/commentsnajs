require('dotenv').config()

const mongoose=require('mongoose')


mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>{
    console.log('connected')
})
.catch((error)=>{
    console.error('errur connexion',error)
})