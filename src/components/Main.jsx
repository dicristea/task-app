import React, { Component } from "react";
import Task from "./Task";

class Main extends Component {
    constructor () {
        super()

        this.state = {}
    }

    render() {
        return(
            <div className="main-wrapper">
                <Task />
            </div>
        )
    }
}

export default Main;