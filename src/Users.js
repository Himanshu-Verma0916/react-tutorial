// :) functional component

// export default function Users(){
//     return (
//         <div><h1>Hello Users,I,The CEO of The Company</h1></div>
//     )
// }
// // export default Users;

//:)Class Component

// import React,{Component} from 'react';
// class Users extends Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello Users,I,The CEO of The Company</h1>
//             </div>
//         )
//     }
// }
// export default Users;

// :) component inside component 

export default function Users() {
    function User1() {
        return (
            <div>
                <h1>hello User1, you're hired as management director and your salary is {45 + 56}</h1>
            </div>
        );
    }
    return (
        <div>
            <h1>Hello Users, I, The CEO of The Company</h1>
            <User1 />
        </div>
    );
}

// Named export for Officer
export function Officer() {
    return (
        <div>
            <h1>hello officer, you're hired as management director and your salary is {45 + 56}</h1>
        </div>
    );
}


