import React from 'react';
import {Button} from '../components/Button';

type MoneyType = {
    banknots: string
    value: number
    number: string
}

type NewComponentType = {
    currentMoney: Array<MoneyType>
    onClickFilterHandler: (nameButton: 'All' | 'UAH' | 'Dollars') => void
}


export const NewComponent = (props: NewComponentType) => {

    return (
        <>
            <ul>
                {props.currentMoney.map((objFromMoneyArray, i) => {
                    return <li key={i}>
                        <span>{objFromMoneyArray.banknots} </span>
                        <span>{objFromMoneyArray.value} </span>
                        <span>{objFromMoneyArray.number} </span>
                    </li>
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>

                <Button name={'All'} callBack={() => props.onClickFilterHandler('All')}/>
                <Button name={'UAH'} callBack={() => props.onClickFilterHandler('UAH')}/>
                <Button name={'Dollars'} callBack={() => props.onClickFilterHandler('Dollars')}/>
            </div>
        </>
    )
}
