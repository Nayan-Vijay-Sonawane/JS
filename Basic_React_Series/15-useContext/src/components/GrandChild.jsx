import { useContext } from "react";
import UserContext from "../context/UserContext";

const GrandChild = () => {

    const user = useContext(UserContext);
    // Step-4 : Consume the data from the consumer
    return (
        <div>
            <h1>Hello this is {user.name}</h1>
        </div>
    )
};

export default GrandChild;