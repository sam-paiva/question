import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0px 1px #888888',

        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
        title: {
            justifyContent: 'flex-start',
            padding: 20
        },
        typography: {
            color: 'grey'
        },
        gridButton: {
            marginTop: 30
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }),
);

export default useStyles;