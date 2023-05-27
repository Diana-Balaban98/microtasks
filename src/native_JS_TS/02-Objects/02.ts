// @ts-ignore



type TechnologiesType = {
    id: number
    title: string
}

type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}




const student: StudentType = {
    id: 1,
    name: "Diana",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "CSS"
        },
        {
            id: 2,
            title: "HTML"
        },
        {
            id: 3,
            title: "JS"
        },
    ]
}

console.log(student.technologies[0].title)
