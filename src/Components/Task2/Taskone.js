import React,{Component} from 'react';
import Tasktwo from './Tasktwo';
class Taskone extends Component{
    render(){
        return(
            <div>
                <h1> {this.props.title}</h1>
                <Tasktwo age="20">abc</Tasktwo>
                <Tasktwo age="30">xyz</Tasktwo>
                <Tasktwo age="40">pqrs</Tasktwo>
            </div>

        )
    }
}
export default Taskone;