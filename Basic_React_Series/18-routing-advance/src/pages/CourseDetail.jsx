import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams();

    return (
        <div>
            <h1 className='font-bold'>{params.courseId} Course Details</h1>
        </div>
    )
}

export default CourseDetail;