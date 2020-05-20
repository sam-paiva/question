import React, { FC } from 'react';
import { Dialog, Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import useStyles from './styles';

interface Props {
    open: boolean
}

function Alert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />
}

const Loading: FC<Props> = (props: Props) => {
    return (
        <div>
            <Dialog open={props.open}>
                <Snackbar
                    className={useStyles().snackbar}
                    anchorOrigin={{ horizontal: 'center', vertical: 'top' }}
                    open={props.open}
                >
                    <Alert style={{ width: 600 }} severity="info">Por favor aguarde...</Alert>
                </Snackbar>
            </Dialog>
        </div>
    );
}

export default Loading;