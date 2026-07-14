import { useContext } from "react";
import UserContext from "../context/UserContext";

const GrandChild = () => {

    const user = useContext(UserContext);

    return (
        <div>
            <h1>Hello this is {user}</h1>
        </div>
    )
};

export default GrandChild;