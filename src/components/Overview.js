//Will display/render all our tasks

import React from "react";

const Overview = (props) => {
    const { tasks } = props; // takes tasks from the props

    return(
        <ul>
            {tasks.map((task) => {
                return <li key={task.id}>{task.number}. {task.title}</li>;
            })}
        </ul>
    );
};

export default Overview;