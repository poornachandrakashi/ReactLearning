import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count:0
    }; 

    styles = {
        fontSize:1,
        fontWeight:'bold'
    };

    render() { 
        return (
        <div>
            <span style = { this.styles } className="badge badge-danger m-5">{this.formatCount()}</span>
            <button className="btn btn-secondary btm-sm">Increment</button>
        </div>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count=== 0?<h1>This is Zero</h1>:count;
    }
}

 
export default Counter;