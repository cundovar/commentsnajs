const mongoose=require('mongoose')

const commentSchema=new mongoose.Schema({

    content :{
        type:String,
        required: true

    },
    creatAt:{

        type:Date,
        dafault:Date.now
    }
})

module.exports = mongoose.model('Comment', commentSchema);