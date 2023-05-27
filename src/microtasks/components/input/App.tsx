import React, {useState} from "react";
import {FullInput} from "./FullInput";

const App = () => {
    let [message, setMessage] = useState([
        {message: "message1"},
        {message: "message2"},
        {message: "message3"},
    ])

    const handleMessageChange = (newMessage: string) => {
        setMessage([{message: newMessage}, ...message]);
    };

    const renderMessages = message.map((el, index) => {
        return (
            <div key={index}>{el.message}</div>
        )
    })

    return (
        <div className={"App"}>
            <FullInput handleMessageChange={handleMessageChange}/>
            {renderMessages}
        </div>
    )
}

export default App;