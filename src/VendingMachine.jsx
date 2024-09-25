import { Link } from "react-router-dom";

const VendingMachine = () => {
    return (
        <div className="vending-machine">
            <h1>Welcome to the Vending Machine!</h1>
            <ul>
                <li>
                    <Link to="/snack/chips">Chips</Link>
                </li>
                <li>
                    <Link to="/snack/candy">Candy</Link>
                </li>
                <li>
                    <Link to="/snack/soda">Soda</Link>
                </li>
            </ul>
        </div>
    );
}

export default VendingMachine;