import React,{forwardRef} from 'react';
const ForwardRef = forwardRef((props,ref)=>{
    return(
        <input type="text" ref={ref} />
    )
});
export default ForwardRef;