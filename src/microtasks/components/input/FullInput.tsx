import React, {useState} from "react";

type FullInputPropsType = {
    handleMessageChange: (newMessage: string) => void
}

export const FullInput = ({handleMessageChange}: FullInputPropsType) => {
    let [title, setTitle] = useState<string>("")

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const callBackHandler = () => {
        handleMessageChange(title)
        setTitle("")
    }

    const onClickButtonHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        callBackHandler()
    }

    const onKeyDownInputHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "Enter") {
            callBackHandler()
        }
    }

    return (
        <div>
            <input
                value={title}
                onKeyDown={onKeyDownInputHandler}
                onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}

