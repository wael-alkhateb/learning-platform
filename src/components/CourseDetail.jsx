import { useParams } from 'react-router-dom';
import '../styles/CoursesDetails.css';
const CourseDetail = () => {
    const { id } = useParams();
    const courseDetails = {
        1: {
            title: "Introduction to React",
            description: "Learn the basics of React, a powerful library for building user interfaces.",
            videoUrl: "https://www.youtube.com/watch?v=Ke90Tje7VS0"
        },
        2: {
            title: "JavaScript Basics",
            description: "Understand the fundamentals of JavaScript, the language of the web.",
            videoUrl: "https://www.youtube.com/watch?v=W6NZfCO5SIk"
        },
        3: {
            title: "CSS Flexbox and Grid",
            description: "Master CSS layout techniques to create responsive designs.",
            videoUrl: "https://www.youtube.com/watch?v=JJSoEo8JSnc"
        },
    };
    const course = courseDetails[id];
    return (
        <div className="course-detail">
            {course ? (
                <>
                    <h2>{course.title}</h2>
                    <p>{course.description}</p>
                    <a href={course.videoUrl} target="_blank" rel="noopener noreferrer">
                        <button className="watch-button">Watch Video</button>
                    </a>
                </>
            ) : (
                <p>Course not found!</p>
            )}
        </div>
    );
};
export default CourseDetail;