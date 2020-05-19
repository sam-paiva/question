import React, { useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import Header from '../../components/header';
import styles from './styles';
import QuestionsList from '../../components/questionsList';
import { RootState } from '../../store/store';
import { Question } from '../../types/questions';
import * as actions from '../../store/actions/questionsActions';
import TypesList from '../../components/typeQuestionsList';
import { getAllQuestionTypes } from '../../store/actions/questionTypesActions';
import { QuestionType } from '../../types/questionType';
import MakeQuestion from '../../components/makeQuestion';

const Home = () => {

    const classes = styles();
    const questions = useSelector<RootState, Question[]>(state => state.question.questions);
    const questionTypes = useSelector<RootState, QuestionType[]>(state => state.questionTypes.questionTypes);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.getAllQuestions());
        dispatch(getAllQuestionTypes());
    }, []);

    return (
        <div className={classes.root} >
            <Header />
            <Grid className={classes.gridQuestion} xs={12} container spacing={3}>
                <Grid item xs={3} className={classes.gridTypesList}>
                    <TypesList questionTypes={questionTypes} />
                </Grid>
                <Grid item xs={6}>
                    <Grid>
                        <MakeQuestion questionTypes={questionTypes} />
                    </Grid>
                    <Grid className={classes.grid}>
                        <QuestionsList questions={questions} />
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;