import { makeStyles, createStyles, Theme } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 300,
            backgroundColor: theme.palette.background.paper,
            boxShadow: '0px 1px #888888',

        },
        nested: {
            paddingLeft: theme.spacing(4),
        },
    }),
);

export default useStyles;