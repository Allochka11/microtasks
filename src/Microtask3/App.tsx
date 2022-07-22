import React from 'react';

type AppType = {}


export const App = () => {
    /*const myFirstSubscriber = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log('My name is Vasya!')
    }
    const mySecondSubscriber = () => {
        console.log('My name is Ivan!')
    }*/
    const onClickHandler = (name: string) => {
        console.log(name);
    }

  /*  const foo1 = (event: React.MouseEvent<HTMLButtonElement>) => {
        console.log(100200)
    }
    const foo2 = (number:number) => {
        console.log("Number is " +number)
    }*/

    return (
        <div>
            {/*<button onClick={foo1}>1</button>
            <button onClick={()=>{foo2(100200)}}>2</button>*/}



            <button onClick={() => {onClickHandler('Vasya')}}>MyYouTubeChannel-1</button>
            <button onClick={() => {onClickHandler('Ivan')}}>MyYouTubeChannel-2</button>


        </div>
    )
}




