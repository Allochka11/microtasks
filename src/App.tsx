import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Microtask2/NewComponent";

function App() {
    let students = [
        {id: 1, name: 'Alla', age: 30},
        {id: 2, name: 'Vladymyr', age: 31},
        {id: 3, name: 'Petya', age: 19},
        {id: 4, name: 'Anton', age: 37}
    ]
    return (
        <>
            <Header headerTitle={"New Header Title"}/>
            <Body bodyTitle={"New Body Title"}/>
            <NewComponent students={students}/>
            <Footer footerTitle={"New Footer Title"}/>
        </>
    );
}

export default App;
