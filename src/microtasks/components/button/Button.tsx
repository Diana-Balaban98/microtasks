import React from "react";


type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = (): void => {
        props.callBack()
    }


    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}


// Алгоритм по созданию универсальной кнопки:
// 1. Создаем универсальную компоненту
// 2. Передает в пропсы входные данные: name и callBack () => void (логика нажатия на кнопку)