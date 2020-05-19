import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    root: {
        // marginTop: 30,
        // marginBottom: 30,
        // marginLeft: 300,
        // marginRight: 300,
        // minWidth: 275,
        backgroundColor: '#FFF',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
        color: '#black'
    },
    text: {
        color: '#black'
    },
    pos: {
        marginBottom: 12,
    },
});

export default useStyles;