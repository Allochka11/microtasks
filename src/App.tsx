import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";

function App() {
    return (
        <>
            <Header headerTitle={"New Header Title"}/>
            <Body bodyTitle={"New Body Title"}/>
            <Footer footerTitle={"New Footer Title"}/>
        </>
    );
}

export default App;
