import { makeStyles, Theme, createStyles } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            position: 'relative',
            backgroundColor: '#379392'
        },
        title: {
            marginLeft: theme.spacing(2),
            flex: 1,
        },
        dialog: {
            backgroundColor: '#192124'
        },
        text: {
            color: '#fff'
        }
    }),
);

export default useStyles;