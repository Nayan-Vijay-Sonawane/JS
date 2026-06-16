import RightCard from "./RightCard";

const RightContent = () => {
    return (
        <div className="h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 w-2/3 p-6">
            <RightCard />
            <RightCard />
            <RightCard />
        </div>
    )
}

export default RightContent;