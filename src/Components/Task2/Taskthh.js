import React from 'react';

var Taskthh=(props)=>{
    console.log(props);
    return(
        <div>
            Name:{props.Name}
            Place:{props.children}|
        </div>
    );
}
export default Taskthh;