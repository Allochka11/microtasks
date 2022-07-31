import React, {useState} from 'react';
import {Button} from './components/Button';
import {Input} from "./components/Input";


export const App = () => {
    let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message2'},
        {message: 'message3'},
    ]);

    const [title, setTitle] = useState('');
    // console.log(title)

    const addNewMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message]);
    }

    const callbackButtonHandler = () => {
        addNewMessage(title);
        setTitle('');
    }

    return (
        <>
            <Input title={title} setTitle={setTitle}/>
            <Button name={'Add'} callback={callbackButtonHandler}/>

            {message.map((el, i) => {
                return <div key={i}>{el.message}</div>
            })}

        </>
    )
}
