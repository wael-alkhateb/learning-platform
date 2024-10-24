import { Link } from 'react-router-dom';
import '../styles/PopularCourses.css';
const PopularCourses = () => {
  const courses = [
    { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.' },
    { id: 2, title: 'JavaScript Basics', description: 'Understand the fundamentals of JavaScript.' },
    { id: 3, title: 'CSS Flexbox and Grid', description: 'Master CSS layout techniques.' },
  ];
  return (
    <div className="popular-courses">
      <h2>Popular Courses</h2>
      <div className="courses-grid">
        {courses.map(course => (
          <div key={course.id} className="course-card">
            <Link to={`/courses/${course.id}`}>
            <h3>{course.title}</h3>
            </Link>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default PopularCourses;