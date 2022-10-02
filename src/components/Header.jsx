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
                {/* Make responsive to daytime/nighttime!! */}
                <div className="helloMessage card"><strong>Good Morning, Diana</strong></div>
            </div>
        );
    }
}

export default Header;