import React from 'react';
import { Paper } from "@material-ui/core";

function List(props) {

    return (
        <div className="row px-5">
            {props.mockData.map((data, i) => {
                return (
                    <div className="col-3 pt-3" key={i.toString()}>
                        <Paper component="div" color="blue" elevation={24} className="p-5 m-2">
                            <h3 className="font-weight-bold text-center">
                                My name is: <br />
                                {data.name}!
                            </h3>
                            <p className="text-center">
                                Something about me: <br />
                                {data.note}
                            </p>
                            {/* <p>{props.showComment === true ? "TRUE!" : "FALSE"}</p> */}
                            {/* <p>{props.config && "TRUE!"}</p> */}
                        </Paper>
                    </div>
                )
            })}
        </div>
    )
}
export default List;