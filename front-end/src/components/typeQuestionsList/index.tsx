import React, { FC } from 'react';
import { List, ListSubheader, ListItem, ListItemIcon, ListItemText, Collapse, Typography } from '@material-ui/core';
import styles from './styles';
import { QuestionType } from '../../types/questionType';

interface Props {
    questionTypes: QuestionType[]
}

export const TypesList: FC<Props> = (props: Props) => {

    const classes = styles();

    return (
        <>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        Tipos de perguntas
                    </ListSubheader>
                }
                className={classes.root}
            >
                {props.questionTypes.map((questionType: QuestionType, key) => {
                    return <ListItem button>
                        {/* <ListItemIcon>
                            <SendIcon />
                        </ListItemIcon> */}
                        <ListItemText primary={questionType.title} />
                    </ListItem>
                })}
            </List>
        </>
    );
}

export default TypesList;