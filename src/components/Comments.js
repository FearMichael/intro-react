import React from 'react';
import CommentIcon from '@material-ui/icons/Comment';
import { Paper } from "@material-ui/core";

export default function Comments(props) {
    const comments = props.comments;
    const showEmail = props.showEmail;
    return (
        <>
            {
                comments.map((comment, i) => {
                    return (
                        <Paper key={i.toString()} className="col-4 p-5">
                            <CommentIcon />
                            <p>{comment.name}</p>
                            {showEmail &&
                                <p>{comment.email}</p>
                            }
                            <p>{comment.body}</p>
                        </Paper>
                    )
                })
            }
        </>
    )
}