import React, { Component } from 'react';
import { directive } from '@babel/types';

class LifecycleA extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'vindya'
        }
        console.log('LifecycleA constructor')
    }
    componentDidMount(){
        console.log('LifecycleA component Didmount')
    }
    render(){
        console.log('Lifecyclerender')
        // <div>LifecycleA</div> 
    }
    componentWillMount(){
        console.log('LifecycleA component Didmount')
    }
}

export default LifecycleA;