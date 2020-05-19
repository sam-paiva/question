import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import { Popover } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { logoutAction } from '../../store/actions/userActions';
import { isLogged } from '../../utils/utils';
import { User } from '../../types/user';

const Header = () => {

    const dispatch = useDispatch();
    const classes = useStyles();
    const token = useSelector<RootState, string>(state => state.user.token);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);
    const user: User = useSelector<RootState, User>(state => state.user.user);

    function logout() {
        dispatch(logoutAction());
    }

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div className={classes.root}>
            <AppBar className={classes.root} position="static">
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        Question!
                    </Typography>
                    {isLogged(token) ? <Typography variant="subtitle1" className={classes.subtitle}>
                        Bem vindo {user.username}
                    </Typography> : null}
                    {isLogged(token) ? <Button onClick={logout} color="inherit">Sair</Button> :
                        <Button onClick={handleClick} color="inherit">Entrar</Button>}
                </Toolbar>
            </AppBar>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >
                <Link className={classes.link} to={'/sign-in'}><Typography className={classes.typography}>Entrar</Typography></Link>
            </Popover>
        </div>
    );
}

export default Header;