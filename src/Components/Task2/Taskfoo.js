import React from 'react';

var Taskfoo=(props)=>{
    console.log(props);
    return(
        <div>
            Age:{props.age}|
            Name:{props.children}
            
        </div>
    );
}
export default Taskfoo;