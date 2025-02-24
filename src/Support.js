import React from 'react';
class Support extends React.Component { 
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }
    render(){
        return(
            <div>
                <h1>Support Component</h1>
            </div>
        )
    }
}
export default Support;