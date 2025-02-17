import React, { Component } from "react";

class SimpleCounterComponent extends Component {
    constructor() {
        super();
        this.state = {
            count: 0,
            toggle: false,
        }
    }

    toggling = () => {
        this.setState((bool) => ({ toggle: !bool.toggle }))
    }

    incrementCount = () => {
        if (this.state.toggle) {

            this.setState((prev) => ({ count: prev.count + 1 }))
        }
    }

    render() {

        let { count, toggle } = this.state

        var changeStyle = null;
        if(toggle){
            changeStyle ={
                backgroundColor : "green"
            }
        }else{
            changeStyle ={
                backgroundColor : "red"
            }
        }

        var changeButtonStyle = null;

        if(toggle){
            changeButtonStyle ={
                cursor : "pointer"
            }
        }else{
            changeButtonStyle ={
                cursor : "not-allowed"
            }
        }


        return (
            <>
                <h1>Simple Counter Component</h1>
                <h3>Count : {count}</h3>
                <button style={changeStyle} onClick={this.toggling}>Set Toggle</button>
                <button style={changeButtonStyle} onClick={this.incrementCount} disabled={!toggle}>Counter</button>
            </>
        )
    }
}

export default SimpleCounterComponent;
