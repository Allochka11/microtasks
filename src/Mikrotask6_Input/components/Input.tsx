import React from "react";

type InputPropsType = {
    title: string
    setTitle: (title: string) => void
}

export const Input = (props: InputPropsType) => {

    let onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.target.value);
    }

    return (
        <input type="text" value={props.title} onChange={onChangeInputHandler}/>
    );
};