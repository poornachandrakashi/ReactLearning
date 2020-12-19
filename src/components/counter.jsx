import React, { Component } from 'react';


class Counter extends Component {
    state = {
        count:0,
        // tags : []
    }; 

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    

    handleIncrement = ()=>{
        console.log("Increment Clicked",this);
    }

    render() { 
        return (
        <div>
            <span className= {this.getBadgeClass()}>{this.formatCount()}</span>
            <button 
                onClick = {this.handleIncrement}
                 className="btn btn-secondary btm-sm"
                 >Increment
                 </button>
        </div>
        );
    }

    getBadgeClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const {count} = this.state;
        return count=== 0?<h1>This is Zero</h1>:count;
    }
}

 
export default Counter;