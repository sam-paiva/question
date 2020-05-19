import React, { FC } from 'react';
import { Paper, TextField, Typography, Grid, Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { isLogged } from '../../utils/utils';
import { QuestionType } from '../../types/questionType';

interface Props {
    questionTypes: QuestionType[]
}

const MakeQuestion: FC<Props> = (props: Props) => {

    const classes = useStyles();
    const token: string = useSelector<RootState, string>(state => state.user.token);

    return (
        <>
            <Paper className={classes.root} elevation={3}>
                <Grid xs={12} className={classes.title} container>
                    <Grid item xs={12}>
                        <Typography className={classes.typography}>Faça uma pergunta</Typography>
                    </Grid>
                    <Grid className={classes.gridButton} item xs={12}>
                        <TextField variant={'filled'} multiline={true} fullWidth={true} placeholder={'...'} />
                    </Grid>
                    <Grid className={classes.gridButton} item xs={12}>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Escolha o tipo da pergunta</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={'teste'}
                            //onChange={handleChange}
                            >
                                {props.questionTypes.map((element: QuestionType, key: number) => {
                                    return <MenuItem>{element.title}</MenuItem>
                                })}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={4} className={classes.gridButton}>
                        <Button
                            size={'small'}
                            variant="contained"
                            color="secondary"
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