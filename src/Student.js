// props in functional component

// function Student(props) {
//     console.log("Props received in Student:", props); // Debugging

//     return (
//         <div>
//             <h1>
//                 Hello {props.name}, your rollNo is {props.rollNo} with address: {props.others.Address }
//             </h1>
//         </div>
//     );
// }

// export default Student;

//props in class component
import React, { Component } from 'react';
export default class Student extends Component {
    render() {
        console.log("Props received in Student:", this.props); 
        return (
            <div>
                <h1>
                    Hello {this.props.name}, your rollNo is {this.props.rollNo} with address: {this.props.others.Address }
                </h1>
                {this.props.children}
            </div>
        );
    }
}