import React from 'react';
import CommentIcon from '@material-ui/icons/Comment';
import { Paper } from "@material-ui/core";

export default function Comments({ comments }) {
    return (
        <>
            {
                comments.map((comment, i) => {
                    return (
                        <Paper key={i.toString()} className="col-2 p-5">
                            <CommentIcon />
                            <p>{comment.name}</p>
                            <p>{comment.email}</p>
                            <p>{comment.body}</p>
                        </Paper>
                    )
                })
            }
        </>
    )
}