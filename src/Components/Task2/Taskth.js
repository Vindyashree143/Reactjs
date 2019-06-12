import React, {Component} from 'react';

import Taskthh from './Taskthh';
class Taskth extends Component{
    render(){
        return(
            <div>
                <h1> {this.props.title}</h1>
                <Taskthh Name="vindya">mysore</Taskthh>
                <Taskthh Name="charan">mandya</Taskthh>
                <Taskthh Name="bhagya">manglore</Taskthh>
            </div>

        );
    }
}
export default Taskth;