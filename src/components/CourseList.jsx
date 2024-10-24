import { Link } from 'react-router-dom';
import '../styles/CourseList.css';
const CourseList = () => {
    const courses = [
        { id: 1, title: "Introduction to React"},
        { id: 2 ,title: "JavaScript Basics"},
        { id: 3 ,title: "css Flexbox and Grid"},
    ];
    return (
        <div className='courses'>
            <h2>Available Courses</h2>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <Link className='link' to={`/course/${course.id}`}>{course.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default  CourseList;