import mongoose from 'mongoose';
import CommentMessage from '../models/commentMessage.js';


export const getComments = async (req, res) => {
    try {
        const commentMessage = await CommentMessage.find();
        res.status(200).json(commentMessage);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createComment = async (req, res) => {
    const comment = req.body;
    // console.log(Comment);
    const newCommentMessage = new CommentMessage({...comment,creator:req.userId,createdAt:new Date().toISOString()});
    try {
        await newCommentMessage.save();
        res.status(201).json(newCommentMessage)
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}


export const deleteComment = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No comment with that id');
    await CommentMessage.findByIdAndRemove(id);
    res.json({ message: 'Comment deleted successfully' });

}

// export const likeComment = async (req, res) => {

//     const { id } = req.params;
//     if(!req.userId) return res.json({message:"Unauthorizaticated"});
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No comment with that id');
//     const comment = await CommentMessage.findById(id);

//     const index = comment.likes.findIndex((id)=>id===String(req.userId));
//     if(index===-1) {
//         //like the Comment
//         comment.likes.push(req.userId);
//     }else{
//         //dislike a Comment
//         comment.likes=comment.likes.filter((id)=>id!==String(req.userId));
//     }
//     const updatedComment = await CommentMessage.findByIdAndUpdate(id,comment,{new:true});
//     res.json(updatedComment);
// }

