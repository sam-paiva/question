import React, { FC, useEffect } from 'react';
import { QuestionType } from '../../types/questionType';
import {
    Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, Slide, AppBar,
    Toolbar, IconButton, Typography, List, ListItem, ListItemText, Divider
} from '@material-ui/core';
import { TransitionProps } from '@material-ui/core/transitions/transition';
import * as actions from '../../store/actions/answerActions';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import styles from './styles';
import { Answer } from '../../types/answers';

interface Props {
    questionId: number,
    open: boolean,
    closeDialog(): void
}

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement<any, any> },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const QuestionDialog: FC<Props> = (props: Props) => {
    const classes = styles();
    const dispatch = useDispatch();
    const answers = useSelector<RootState, Answer[]>(state => state.answers.answers);

    useEffect(() => {
        getAnswers();
    }, []);

    function getAnswers() {
        dispatch(actions.getAnswersByQuestionId(props.questionId));
    }

    return (
        <>
            <Dialog
                fullScreen
                open={props.open}
                TransitionComponent={Transition}
                keepMounted
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <AppBar className={classes.appBar}>
                    <Toolbar>
                        <IconButton edge="start" color="inherit" onClick={props.closeDialog} aria-label="close">
                            {/* <CloseIcon /> */}
                        </IconButton>
                        <Typography variant="h6" className={classes.title}>
                            Respostas
            </Typography>
                    </Toolbar>
                </AppBar>
                <DialogContent className={classes.dialog}>
                    <List>
                        {answers.map((answer: Answer) => {
                            return <>
                                <ListItem className={classes.text} button>
                                    <ListItemText
                                        disableTypography
                                        primary={<Typography style={{ color: '#FFFFFF' }}> Postada por: {answer.user.username}</Typography>}
                                        secondary={<Typography style={{ color: '#FFFFFF', marginTop: 10 }}>{answer.answer}</Typography>} />
                                </ListItem>
                                <Divider />
                            </>
                        })}
                    </List>

                </DialogContent>
                <DialogActions className={classes.dialog}>
                    <Button onClick={props.closeDialog} color="primary">
                        Fechar
                </Button>
                </DialogActions>
            </Dialog>
        </>
    );
}

export default QuestionDialog;