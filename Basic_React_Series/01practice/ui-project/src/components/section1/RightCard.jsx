import RightCardContent from "./RightCardContent";

const RightCard = (props) => {
    return (
        <div className="h-full shrink-0 overflow-hidden relative rounded-4xl w-70 ">
            <img className="h-full w-full object-cover" src={props.img} alt=""></img>
            <RightCardContent color={props.color} id={props.id} tag={props.tag}/>
        </div>
    )
}

export default RightCard;