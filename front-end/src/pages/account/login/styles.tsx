import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    layout: {
        justifyContent: 'center',
        alignSelf: 'center',
        marginLeft: 400,
        marginRight: 400,
        marginTop: 100,

    },
    form: {
        backgroundColor: '#000',
        justifyItems: 'flex-start',
        padding: 20,
        color: '#FFF'
    },
    title: {
        marginTop: 20,
        color: 'white'
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        backgroundColor: '#379392'
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    action: {
        color: 'grey',
        marginTop: 10,
        justifyContent: 'space-between',
        flexDirection: 'row'
    }
}));

export default useStyles;