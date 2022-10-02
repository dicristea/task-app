import React, { Component } from "react";

class Header extends Component {
    constructor() {
        super()

        this.state = {
            time: '',
        }
    }


    render() {

        return( 
            <div className="header">
                <div className="helloMessage card"><strong>Good Morning, Diana</strong></div>

            </div>
        );
    }
}

export default Header;