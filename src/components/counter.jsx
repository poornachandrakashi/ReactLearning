import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count:0
    }; 

    render() { 
        return (
        <React.Fragment>
            <span>{this.formatCount()}</span>
            <button>Increment</button>
        </React.Fragment>
        );
    }

    formatCount(){
        const {count} = this.state;
        return count=== 0?<h1>This is Zero</h1>:count;
    }
}

 
export default Counter;