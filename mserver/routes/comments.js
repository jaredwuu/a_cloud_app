import express from 'express';
import {createComment, deleteComment, getComments } from '../controllers/comments.js'
import auth from '../middleware/auth.js';

const router = express.Router();

//GET Comments/
router.get('/',getComments);
// //Comment Comment
router.post('/', auth,createComment);
// // router.patch('/:id',auth, updatedComment);
router.delete('/:id',auth,deleteComment);
// router.patch('/:id/likeComment',auth,likeComment);


export default router;
