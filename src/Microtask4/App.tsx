import React, {useState} from 'react';


export const App = () => {

    let [a, setA] = useState(1);

    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickRestartHandler = () => {
        setA(1);
    }

    return (
        <div>
            <div>{a}</div>
            <button onClick={onClickHandler}>+</button>
            <button onClick={onClickRestartHandler}>restart</button>

        </div>
    )
}
