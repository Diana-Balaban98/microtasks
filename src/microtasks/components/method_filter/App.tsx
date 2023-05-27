import React, {useState} from "react";
import '../../../App.css'
import {NewComponent} from "./New Component";

export type Filtertype = "all" | "dollar" | "rubels"


export const App = () => {
    const [money, setMoney] = useState([
        {banknots: 'Dollars', value: 100, number: ' a1234567890'},
        {banknots: 'Dollars', value: 50, number: ' z1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' w1234567890'},
        {banknots: 'Dollars', value: 100, number: ' e1234567890'},
        {banknots: 'Dollars', value: 50, number: ' c1234567890'},
        {banknots: 'RUBLS', value: 100, number: ' r1234567890'},
        {banknots: 'Dollars', value: 50, number: ' x1234567890'},
        {banknots: 'RUBLS', value: 50, number: ' v1234567890'},
    ])


    const [filter, setFilter] = useState<Filtertype>("all")


    let currentMoney = money;
    if (filter === "dollar") {
        currentMoney = money.filter((filtredMoney) => {
            return filtredMoney.banknots === "Dollars"
        })
    }
    if (filter === "rubels") {
        currentMoney = money.filter((filtredMoney) => {
            return filtredMoney.banknots === "RUBLS"
        })
    }

    const onClickFiltredMoney = (name: Filtertype) => {
        setFilter(name)
    }

    return (
        <NewComponent money={currentMoney} callBack={onClickFiltredMoney}/>
        /*<>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return <li key={index}>
                        <span> {objFromMoneyArr.banknots} </span>
                        <span> {objFromMoneyArr.value} </span>
                        <span> {objFromMoneyArr.number} </span>
                    </li>
                })}
            </ul>
            <div style={{marginLeft: "35px"}}>
                <Button name="Выдать доллары" callBack={() => onClickFiltredMoney("dollar")}/>
                <Button name="Выдать рубли" callBack={() => onClickFiltredMoney("rubels")}/>
                <Button name="Выдать все деньги" callBack={() => onClickFiltredMoney("all")}/>
            </div>
        </> )*/
    )
}

export default App;