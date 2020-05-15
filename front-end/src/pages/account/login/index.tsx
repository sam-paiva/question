import React, { useState, useEffect } from 'react';
import {
    Grid, Typography, CssBaseline, AppBar, Toolbar, Paper, Stepper,
    Step, StepLabel, Button, TextField, InputAdornment, Input
} from '@material-ui/core';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import styles from './styles';
import { LoginViewModel } from '../../../types/user';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../../store/actions/userActions';
import { RootState } from '../../../store/store';
import { useHistory } from 'react-router-dom';


const Login = () => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const classes = styles();

    const token = useSelector<RootState, string>(state => state.user.token);

    useEffect(() => {
        if (token) {
            history.push('/home');
        }
    }, [token]);

    function login() {
        if (!email || !password)
            return;

        const login: LoginViewModel = {
            email: email,
            password: password
        }

        dispatch(loginAction(login));
    }

    return (
        <React.Fragment>
            <CssBaseline />
            <div className={classes.layout}>
                <Paper elevation={3}>
                    <React.Fragment>
                        <Grid className={classes.form}>
                            <Typography style={{ marginTop: 10, marginBottom: 50 }} component="h3" variant="h5" align="left">
                                Entrar
                            </Typography>
                            <div className={classes.title}>
                                <Input
                                    style={{ color: 'white' }}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MailOutlineIcon />
                                        </InputAdornment>
                                    }
                                    onChange={(e) => setEmail(e.target.value)}
                                    fullWidth
                                    placeholder={'e-mail'} />
                            </div>
                            <div className={classes.title}>
                                <Input
                                    style={{ color: 'white' }}
                                    type={'password'}
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <LockOutlinedIcon />
                                        </InputAdornment>
                                    }
                                    onChange={(e) => setPassword(e.target.value)}
                                    fullWidth placeholder={'senha'} />
                            </div>
                            <div className={classes.action}>
                                <div>
                                    <Typography>Criar Conta</Typography>
                                </div>
                                <div>
                                    <Typography>Esqueceu a senha?</Typography>
                                </div>
                            </div>
                            <React.Fragment>
                                <div className={classes.buttons}>
                                    <Button
                                        onClick={login}
                                        variant="contained"
                                        color="secondary"

                                        className={classes.button}
                                    >
                                        Entrar
                            </Button>
                                </div>
                            </React.Fragment>
                        </Grid>
                    </React.Fragment>
                </Paper>
                {/* <Copyright /> */}
            </div>
        </React.Fragment>
    );
}

export default Login;