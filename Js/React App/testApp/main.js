import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App.js';

// ReactDOM.render(<App />, document.getElementById('app'));

class Car extends React.Component {
    render() {
        return <h2>I am a {this.props.brand.model}!</h2>
    }
}

class Garage extends React.Component {
    render() {
        const carinfo = { name: "Ford", model: "Mustang" };
        return (
            <div>
                <h1>work , work, work</h1>
                <Car brand={carinfo} />
            </div>
        );
    }
}
ReactDOM.render(<Garage />, document.getElementById("root"))