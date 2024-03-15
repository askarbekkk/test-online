import {useState} from "react";
import tamaktar from "./data";

// деструктуризация
// синтаксический сахар
//
// const Example = (props) => {
//     console.log(props)
//     return (
//         <div>
//             <h1>{props.user}</h1>
//             <h1>{props.email}</h1>
//             <h1>{props.number}</h1>
//             <h1>{props.gender}</h1>
//         </div>
//     )
//
// }

// object


const user = {
    name: "Bob",
    surname: "Samuel",
    age: 20,
    job: "programmer",
    hobbies: {
        sports: ["football", "basketball"],
        tableGames: ["chess"]
    }
}

console.log(user.name, user["name"])


const {
    job,
    name,
    surname,
    age,
    hobbies
} = user

// const {sports, tableGames} = hobbies
//
//
//
// console.log(job, name, surname, age)
//
// console.log(sports)
// console.log(tableGames)
//
// const [a, b] = sports
//
// console.log(a)





const Example = ({ number, email, user, gender}) => {

    const [meals, setMeals] = useState(tamaktar)


    return (
        <div>
            <h1>{user}</h1>

            {
                meals.map(el => (
                    <div>
                        <h2>{el.name}</h2>
                        <h3>баасы: {el.price}</h3>
                        <img src={el.image} alt=""/>
                    </div>
                ))
            }
        </div>
    )

}


export default Example