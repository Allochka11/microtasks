import React, {ChangeEvent, useState} from "react";

type FullInputType = {
    addMessageHandler: (title: string) => void

}

export const FullInput = (props: FullInputType) => {
    const [title, setTitle] = useState('');
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        let newTitle = event.currentTarget.value;
        setTitle(newTitle);

    }

    const onClickButtonHandler = () => {
        props.addMessageHandler(title)
        setTitle('');

    }


    return (
        <div>
            <input value={title} onChange={onChangeInputHandler} type="text"/>
            <button onClick={onClickButtonHandler}>+
            </button>
        </div>
    );
};