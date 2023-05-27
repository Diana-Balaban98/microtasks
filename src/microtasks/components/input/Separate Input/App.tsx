import React, {useState} from "react";
import {Input} from "./Input";
import {Button} from "./Button";


const App = () => {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    let [newMessage, setNewMassage] = useState<string>("")

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewMassage(event.currentTarget.value)
    }

    const addMessage = () => {
        setMessage([{message: newMessage}, ...message])
        setNewMassage("")
    }


    const renderMessages = message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )
    })

    return (
        <div className={"App"}>
            <div>
                <Input callBack={onChangeInputHandler} value={newMessage}/>
                <Button name={"+"} callBack={addMessage}/>
            </div>
            {renderMessages}
        </div>
    )
}

export default App;