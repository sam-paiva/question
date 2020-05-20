import { makeStyles } from "@material-ui/core";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
    avatar: {
        backgroundColor: blue[600],
        color: blue[600]
    },
    progress: {
        textAlign: 'center',
        backgroundColor: 'black'
    },
    snackbar: {
        backgroundColor: '#4089D2 !important'
    }
});

export default useStyles;