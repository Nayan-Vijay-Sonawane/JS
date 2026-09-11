import { useParams } from "react-router-dom";

const ParamComp = () => {

    const {id} = useParams();

    return ( 
        <div className="text-2xl text-white">
            Params: {id}
        </div>
    )
}

export default ParamComp;
