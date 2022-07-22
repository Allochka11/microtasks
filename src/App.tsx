import React from 'react';
import './App.css';
import {Header} from "./site/Header";
import {Body} from "./site/Body";
import {Footer} from "./site/Footer";
import {NewComponent} from "./Microtask2/NewComponent";
import {Button} from './components/Button';

function App() {
    /* let students = [
         {id: 1, name: 'Alla', age: 30},
         {id: 2, name: 'Vladymyr', age: 31},
         {id: 3, name: 'Petya', age: 19},
         {id: 4, name: 'Anton', age: 37}
     ]*/
    const Button1Foo = (subscriber: string, age: number, city: string) => {
        console.log(subscriber, age, city);
    }
    const Button2Foo = (subscriber: string) => {
        console.log(subscriber);
    }
    const Button3Foo = () => {
        console.log('Nothing =)');
    }

    return (
        <>
            {/*microtask1
            <Header headerTitle={"New Header Title"}/>
            <Body bodyTitle={"New Body Title"}/>
            <Footer footerTitle={"New Footer Title"}/>*/}

            {/*microtask2
            <NewComponent students={students}/>*/}

            {/*microtask3*/}
            <Button name={'MyYouTubeChannel-1'} callBack={() => Button1Foo('I am Alla', 26, 'Kyiv')}/>
            <Button name={'MyYouTubeChannel-2'} callBack={() => Button2Foo('I am Vasya')}/>
            <Button name={'I am stupid button'} callBack={Button3Foo}/>
        </>
    );
}

export default App;
