import React from "react";

type NewComponentType = {
    title: string,
    students: Array<StudentsType>
}

type StudentsType = {
    id: number,
    name: string,
    age: number
}

type TopCarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: NewComponentType) => {
    const topCars:Array<TopCarsType> = [
        {manufacturer: 'BMW', model: 'X5'},
        {manufacturer: 'Mersedes', model: 'MLS'},
        {manufacturer: 'Audi', model: 'Q7'}
    ]

    return (
        <table>
            <tr>
                <th>Id</th>
                <th>Manufacturer</th>
                <th>Model</th>
            </tr>
            { topCars.map((car, index) => {
                return <tr key={index}>
                    <td> {index + 1}</td>
                    <td> {car.manufacturer}</td>
                    <td> {car.model}</td>
                </tr>})
            }
        </table>
    )
}






