import React,{ Component } from 'react'
export default class CoordinatesButton extends Component{
    onClick = (a) =>{this.props.onReceiveCoordinates([a.clientX,a.clientY]);}
    render(){return(<button onClick={this.onClick} />)}}
