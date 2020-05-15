import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import useStyles from './styles';
import { Popover } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

const Header = () => {
    const classes = useStyles();
    const token = useSelector<RootState, string>(state => state.user.token);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

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
                    {token === '' || token === null ? <Button onClick={handleClick} color="inherit">Entrar</Button> :
                        <Button onClick={handleClick} color="inherit">Sair</Button>}
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