import { Link } from "react-router-dom"

const Candy = () => {

    return (
        <div className="snack-page">
            <h1>Candy</h1>
            <p>Enjoy some sweet, cavity-inducing candy!</p>
            <Link to="/">Go Back</Link>
        </div>
    )

}

const Chips = () => {

    return (
        <div className="snack-page">
            <h1>Chips</h1>
            <p>Enjoy a crispy, salty bag of crisps!</p>
            <Link to="/">Go Back</Link>
        </div>
    )

}

const Soda = () => {

    return (
        <div className="snack-page">
            <h1>Soda</h1>
            <p>Why waste effort eating your empty calories when you can chug them instead!</p>
            <Link to="/">Go Back</Link>
        </div>
    )

}

export { Candy, Chips, Soda };