import React from 'react';
import './App.css';




function App() {
    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]
    const Button1Foo = (subscriber: string, age: number, adress: string) => {
        console.log(subscriber, age, adress)
    }

    const Button2Foo = (subscriber: string, age: number) => {
        console.log(subscriber, age)
    }

    const Button3Foo = () => {
        console.log("Я тупая кнопка")
    }


    return <div>
        {/*<NewComponent title={"MY NAME"} students={students}/>*/}
        <div className="App">
            <h1>Hello</h1>
            {/*<button>MyYoutubeChannel-1</button>*/}
            {/*<button>MyYoutubeChannel-2</button>*/}
             {/* <Button name="MyYoutubeChannel-1" callBack={() => Button1Foo("Diana", 25, "live in Minsk")}/>*/}
            {/* <Button name="MyYoutubeChannel-12" callBack={() => Button2Foo("Sasha", 24)}/>*/}
            {/* <Button name="Stupid BUTTON" callBack={Button3Foo}/>*/}
        </div>
    </div>
}

export default App;


