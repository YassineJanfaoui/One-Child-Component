import React, { Component } from "react";
import { brotliDecompress } from "zlib";



class Box extends Component {
    render() {
        return (
            <div className="box">
                <p>{this.props.name}</p>
                <p style={this.props.style}>  {this.props.des}</p>
                <p style={this.props.style}> {this.props.desc}</p>
            </div>);
    }
}

export default Box;