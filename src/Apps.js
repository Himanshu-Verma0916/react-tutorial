import React, { Component } from 'react';
import { CommonContext } from './component/CommonContext';
import Main from './component/Main';
import UpdateButton from './component/UpdateButton';
import Header from './component/Header';
import Footer from './component/Footer';

export default class App extends Component {
    constructor() {
        super();
        this.updateColor = (color) => {
            this.setState({
                color: color
            });
        };
        this.state = {
            color: "green",
            updateColor: this.updateColor
        };
        
    }

    render() {
        return (
            <div>
                <CommonContext.Provider value={this.state}>
                    <Header/>
                    <h1>This is Apps.js, This is a complete and easy example of Context API</h1>
                    <Main />
                    <UpdateButton/>
                    <Footer/>
                </CommonContext.Provider>
            </div>
        );
    }
}