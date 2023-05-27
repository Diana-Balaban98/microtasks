import React, {useState, MouseEvent} from "react";
import "../../../App.css"

function App() {
    // let a: number = 1

    let [a, setA] = useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickZeroing = () => {
        setA(0)
        console.log(a)
    }

    return (
        <div className="App">
            <h1>This okey!</h1>
            <h1>{a}</h1>
            <button onClick={onClickHandler}>Нажми меня</button>
            <button onClick={onClickZeroing}>0</button>

        </div>
    )
}

export default App;