import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({    
    message:String,
    name:String,  
    creator:String,
    createdAt:{
        type:Date,
        default:new Date()
    },
});

const commentMessage = mongoose.model('commentMessage',commentSchema);

export default commentMessage;