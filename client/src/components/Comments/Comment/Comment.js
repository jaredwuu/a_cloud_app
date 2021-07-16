import React from 'react'
import useStyles from './styles'
import {Card, CardActions, CardContent, Button,Typography} from '@material-ui/core';
import moment from 'moment';
import {useDispatch} from 'react-redux'

const Comment = ({comment,setCurrentId}) => {
    const classes =useStyles();
    // const dispatch = useDispatch();
    // const user =JSON.parse(localStorage.getItem('profile'));

    return (
       <Card className = {classes.card}>                
           <CardContent>
                 <Typography variant = "body2"  color ="textSecondary" component="p">{comment.message}</Typography>
                 <Typography variant = "h6" style = {{color:'red'}}>{comment.name}</Typography>
                <Typography variant = "body2" style = {{color:'red'}}>{moment(comment.createdAt).fromNow()}</Typography> 
           </CardContent>
       </Card>
    );
}

export default Comment
