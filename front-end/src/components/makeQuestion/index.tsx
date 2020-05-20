import React, { FC, useState } from 'react';
import { Paper, TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { isLogged } from '../../utils/utils';
import { QuestionType } from '../../types/questionType';
import { User } from '../../types/user';
import { createNewQuestion } from '../../store/actions/questionsActions';

interface Props {
    questionTypes: QuestionType[]
}

const MakeQuestion: FC<Props> = (props: Props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const token: string = useSelector<RootState, string>(state => state.user.token);
    const user: User = useSelector<RootState, User>(state => state.user.user);
    const [description, setDescription] = useState<string>('');
    const [questionType, setQuestionType] = useState<string>('');

    const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        setQuestionType(event.target.value as string);
    };

    const createQuestion = () => {

        if (isLogged(token) === false) {
            console.log('por favor faça login');
            return;
        }

        if (!description || !questionType) {
            console.log('preencha todos os campos');
            return;
        }

        const question = {
            user_id: user.id,
            description: description,
            type_id: questionType
        }

        dispatch(createNewQuestion(question));
    }

    return (
        <>
            <Paper className={classes.root} elevation={3}>
                <Grid xs={12} className={classes.title} container>
                    <Grid item xs={12}>
                        <Typography className={classes.typography}>Faça uma pergunta</Typography>
                    </Grid>
                    <Grid className={classes.gridButton} item xs={12}>
                        <TextField onChange={(e: any) => setDescription(e.target.value)} variant={'filled'} multiline={true} fullWidth={true} placeholder={'...'} />
                    </Grid>
                    <Grid className={classes.gridButton} item xs={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Tipo</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                onChange={handleChange}
                            >
                                {props.questionTypes.map((element: QuestionType, key: number) => {
                                    return <MenuItem key={key} value={element.id}>{element.title}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} className={classes.gridButton}>
                        <Button
                            size={'small'}
                            variant="contained"
                            color="secondary"
                            onClick={createQuestion}
                            disabled={isLogged(token) === true ? false : true}
                        >
                            Postar
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
        </>
    );
}

export default MakeQuestion;