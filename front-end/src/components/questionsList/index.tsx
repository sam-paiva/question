import React, { FC, useState } from 'react';
import { Question } from '../../types/questions';
import { Card, CardContent, Typography, CardActions, Button } from '@material-ui/core';
import styles from './styles';
import QuestionDialog from '../../components/questionDialog';
import { useDispatch } from 'react-redux';
import { getAnswersByQuestionId } from '../../store/actions/answerActions';


interface Props {
    questions: Question[];
}

const QuestionsList: FC<Props> = (props: Props) => {

    const dispatch = useDispatch();
    const [openDialog, setOpenDialog] = useState<boolean>(false);
    const [questionId, setQuestionId] = useState(0);
    const classes = styles();

    function dialogOpen(id: number) {

        dispatch(getAnswersByQuestionId(id));
        setOpenDialog(true);
    }

    function dialogClose() {
        setOpenDialog(false);
        setQuestionId(0);
    }

    return (
        <>
            {props.questions.map((question: Question, key: number) => {
                return <Card key={key} className={classes.root}>
                    <CardContent>
                        <Typography className={classes.title} color="textPrimary" gutterBottom>
                            {question.description}
                        </Typography>
                        <Typography className={classes.text} color="textSecondary" gutterBottom>
                            Perguntada por: {question.user.username}
                        </Typography>
                        <Typography className={classes.text} color="textSecondary" gutterBottom>
                            Tipo: {question.type.title}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button onClick={() => dialogOpen(question.id)} className={classes.text} size="small">Ver Respostas</Button>
                        <Button onClick={() => dialogOpen(question.id)} className={classes.text} size="small">Respostas</Button>
                    </CardActions>
                </Card>
            })}
            <QuestionDialog open={openDialog} questionId={questionId} closeDialog={dialogClose} />
        </>
    );
}

export default QuestionsList;