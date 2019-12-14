// Code DelayedButton Component Here
import React, {Component } from 'react'
export default class DelayedButton extends Component{
    onClick = (a) => {a.persist()
    setTimeout(()=>{this.props.onDelayedClick(a)},this.props.delay)}
render(){return(<button onClick={this.onClick} />)}
}