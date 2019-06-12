import React,{Component} from 'react';
import Taskfoo from './Taskfoo';
class Taskfo extends Component{
    render(){
        return(
            <div>
                <h1> {this.props.title}</h1>
                <Taskfoo age="20">vin</Taskfoo>
                <Taskfoo age="30">cha</Taskfoo>
                <Taskfoo age="40">bha</Taskfoo>
            </div>

        )
    }
}
export default Taskfo;