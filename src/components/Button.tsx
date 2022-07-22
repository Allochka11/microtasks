import React from 'react';

type ButtonType = {
    name: string
    callBack: () => void
}


export const Button = (props: ButtonType) => {

    const onClickHandler = () => {
        props.callBack();
    }

    console.log('props', props)

    return (
        <div>
            <button onClick={onClickHandler}>{props.name}</button>
        </div>
    )
}
