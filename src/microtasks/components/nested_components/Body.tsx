import React from "react";

type TopCarsType = {
    manufacturer: string,
    model: string
}

type BodyType = {
    titleForBody: string,
    cars: Array<TopCarsType>
}

export const Body = (props: BodyType) => {
    const count: number = props.cars.length

    return <div>
        <div> {props.titleForBody} </div>
        <div>
            У меня есть {count} вида автомобилей таких как:
            <ul>
                {props.cars.map(car => {
                    return <li>{car.manufacturer}</li>
                })}
                {/*<li>{props.cars.map(car => car.manufacturer)}</li>*/}
                {/*<li>{props.cars[1].manufacturer}</li>*/}
                {/*<li>{props.cars[2].manufacturer}</li>*/}
            </ul>
        </div>

    </div>
}