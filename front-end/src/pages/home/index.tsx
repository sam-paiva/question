import React, { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/header';
import styles from './styles';
import QuestionsList from '../../components/questionsList';
import { RootState } from '../../store/store';
import { Question } from '../../types/questions';
import * as actions from '../../store/actions/questionsActions';

const Home = () => {

    const classes = styles();
    const questions = useSelector<RootState, Question[]>(state => state.question.questions);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllQuestions());
    }, []);

    return (
        <Grid className={classes.root} md={12} xs={12}>
            <Header />
            <Grid>
                <QuestionsList questions={questions} />
            </Grid>
        </Grid>
    );
};

export default Home;