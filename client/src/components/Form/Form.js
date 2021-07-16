//Form.js Form
import React, { useState, useEffect } from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles'
import { useDispatch, useSelector } from 'react-redux';
import { createComment } from '../../actions/comments';


const Form = ({ currentId, setCurrentId }) => {
    const [commentData, setCommentData] = useState({ title: '', message: '', tags: '', selectedFile: '' });
    const comment = useSelector((state) => currentId ? state.comments.find((p) => p._id === currentId) : null);
    const classes = useStyles();
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'));

    useEffect(() => {
        if (comment) setCommentData(comment);
    }, [comment])

    const handleSubmit = (e) => {

        e.preventDefault()


        dispatch(createComment({ ...commentData, name: user?.result?.name }));

        clear();

    }
    const clear = () => {
        setCurrentId(null);
        setCommentData({ title: '', message: '', tags: '', selectedFile: '' });
    }
    if (!user?.result?.name) {
        return (
            <Paper className={classes.paper}>
                <Typography variant="h6" align="center">
                    Please Sign In add to comment.
                </Typography>
            </Paper>
        )
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit} >      

                <TextField name="message" variant="outlined" label="Message" fullWidth value={commentData.message} onChange={(e) => setCommentData({ ...commentData, message: e.target.value })} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth> Add a comment</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;