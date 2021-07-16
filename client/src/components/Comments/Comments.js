import React from 'react'
import {Grid, CircularProgress} from '@material-ui/core';

import {useSelector} from 'react-redux'

import Comment from './Comment/Comment.js'
import useStyles from './styles'

const Comments = ({setCurrentId}) => {
    const comments = useSelector(state => state.comments)
    const classes =useStyles();


    return (       
    
         !comments.length ? <CircularProgress />:(
            <Grid className = {classes.container} container alignItems = "stretch" spacing ={3} >
                 {comments.map((comment)=>(
                     <Grid key ={comment._id} item xs={12} sm={6}>
                         <Comment comment={comment} setCurrentId={setCurrentId}/> 
                    </Grid>
             ))}
           </Grid>
         )

    );
};

export default Comments
