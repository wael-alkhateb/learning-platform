import HeroSection from '../components/HeroSection';
import PopularCourses from '../components/PopularCourses';
import '../styles/Home.css';
const Home = ()=> {
    return (
        <div className='home'>
            <HeroSection />
            <PopularCourses />
        </div>
    );
};
export default Home;