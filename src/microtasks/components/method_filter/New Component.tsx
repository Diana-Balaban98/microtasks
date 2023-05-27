import React from "react";
import Button from "../useState/Button";
import {Filtertype} from "./App";

type MoneyType = {
    banknots: string,
    value: number,
    number: string
}

type NewComponentType = {
    money: Array<MoneyType>
    callBack: (name: Filtertype) => void
}


export const NewComponent = (props: NewComponentType) => {
    return (
        <>
            <ul>
                {props.money.map((objFromMoneyArr, index) => {
                    return <li key={index}>
                        <span> {objFromMoneyArr.banknots} </span>
                        <span> {objFromMoneyArr.value} </span>
                        <span> {objFromMoneyArr.number} </span>
                    </li>
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <Button name="Выдать доллары" callBack={() => props.callBack("dollar")}/>
                <Button name="Выдать рубли" callBack={() => props.callBack("rubels")}/>
                <Button name="Выдать все деньги" callBack={() => props.callBack("all")}/>
            </div>
        </>
    )
}