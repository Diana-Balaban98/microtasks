import React, {useState} from 'react';


type InputPropsType = {
    value: string
    callBack: (event: React.ChangeEvent<HTMLInputElement> ) => void
}

export const Input = ({value, callBack}: InputPropsType) => {
    return (
        <input onChange={callBack} value={value}/>
    );
};

