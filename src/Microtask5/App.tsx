import React, {useState} from 'react';
import {NewComponent} from './NewComponent';

type FilterType = 'All' | 'UAH' | 'Dollars';

export const App = () => {

    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'UAH', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'UAH', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'UAH', value: 50, number: ' v1234567890'},
    ])

    const [filter, setFilter] = useState<FilterType>('All');

    let currentMoney = money;
    if (filter === 'UAH') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'UAH');
    }

    if (filter === 'Dollars') {
        currentMoney = money.filter((filteredMoney) => filteredMoney.banknots === 'Dollars');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    };

    return (
        <>
            <NewComponent currentMoney={currentMoney} onClickFilterHandler={onClickFilterHandler}/>
        </>
    )
}
