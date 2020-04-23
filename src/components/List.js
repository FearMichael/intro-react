import React from 'react';
import { Paper } from "@material-ui/core";

function List() {

    const mockData = [
        {
            name: "George Costanza",
            note: "KRAMER!!"
        },
        {
            name: "Carrie Underwood",
            note: "I sing things!"
        },
        {
            name: "Freddie Mercury",
            note: "Welp..."
        },
        {
            name: "Drew Carrie",
            note: "Likes funny socks!"
        },

    ]

    return (
        <div className="row">
            {mockData.map((data, i) => {
                return (
                    <div className="col-3 pt-3" key={i.toString()}>
                        <Paper component="div" color="blue" elevation={6} className="p-5 m-2">
                            <p className="font-weight-bold text-center">My name is:{data.name}!</p>
                            <p className="text-center">Something about me: {data.note}</p>
                        </Paper>
                    </div>
                )
            })}
        </div>
    )
}
export default List;