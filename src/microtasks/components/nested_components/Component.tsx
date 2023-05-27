
import React from "react";
import {Header} from "./Header";
import {Body} from "./Body";
import Footer from "./Footer";


export const Component = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    return (
        <div>
            <Header title="New page"/>
            <Body titleForBody="New Body Page" cars={topCars}/>
            <Footer titleForFooter="New Footer"/>
        </div>
    )
}