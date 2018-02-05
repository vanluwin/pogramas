import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

export default class App extends Component {

    componentWillMount() {
        // Initialize Firebase
        const config = {
            apiKey: "AIzaSyC1mCgioCdi3UwCpV-qp7Xc2ZacyuJiwqA",
            authDomain: "whatsapp-clone-eee6e.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-eee6e.firebaseio.com",
            projectId: "whatsapp-clone-eee6e",
            storageBucket: "whatsapp-clone-eee6e.appspot.com",
            messagingSenderId: "999447595045"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={ createStore(reducers) } >
                <Routes/>
            </Provider>
        );
    }
}
