import LeftContent from './LeftContent';
import RightContent from './RightContent';

const Page1content = () => {
    return (
        <div className="px-10 flex items-center justify-between gap-10 h-[90vh] bg-amber-950 py-18">
            <LeftContent />
            <RightContent />
        </div>
    )
}

export default Page1content;