// import React, { Component } from 'react';
// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <h1>Hello World</h1>
//             </div>
//         );
//     }
// }
// export default App;

//Stateless Example

import React from 'react';

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Content />
            </div>
        );
    }
}
class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}
class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>This is the content!!!</p>
            </div>
        );
    }
}
export default App;