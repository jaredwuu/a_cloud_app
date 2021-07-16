// Home.js Home
import React, { useEffect, useState } from 'react'
import { Container, Grow, Grid } from '@material-ui/core';
import Comments from '../Comments/Comments';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import { getComments } from '../../actions/comments';


const Home = () => {
    const [currentId, setCurrentId] = useState(null);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getComments());
    }, [currentId, dispatch]);
    return (
        <Grow in>
            <Container>
                <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                    <Grid item x2={12} sm={7}>
                        <Comments setCurrentId={setCurrentId} />                         
                    </Grid>
                    <Grid item x2={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>

    )
}


export default Home
