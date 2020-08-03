//rfce
import React, { useState } from 'react'
import './Todo.css';
import { ListItem, List, ListItemText, Modal, Button } from '@material-ui/core';
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function Todo(props) {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState();
    const classes = useStyles();

    const deleteMe = () => {
        db.collection('todos').doc(props.todo.id).delete();
    }

    const updateTodo = () => {
        db.collection('todos').doc(props.todo.id).set({
            todo: input
        }, { merge: true })
        setOpen(false);
    }
    return (
        <>
            <Modal
                open={open}
                onClose={e => setOpen(false)}
            >
                <div className={classes.paper}>
                    <h1>I am a modal</h1>
                    <input
                        placeholder={props.todo.todo}
                        value={input} onChange={event => setInput(event.target.value)} />
                    <Button onClick={updateTodo}>Update Todo</Button>
                </div>

            </Modal>
            <List className="todo__list">
                <ListItem>
                    <ListItemText primary={props.todo.todo} secondary="Dummy deadline" />
                </ListItem>
                <Button onClick={e => setOpen(true)}>Edit</Button>
                <DeleteIcon onClick={deleteMe} />
            </List>
        </>
    )
}

export default Todo