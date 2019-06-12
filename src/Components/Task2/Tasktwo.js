import React from 'react';

var Tasktwo=(props)=>{
    console.log(props);
    return(
        <div>
            Name:{props.children}|
            Age:{props.age}
        </div>
    );
}
export default Tasktwo;