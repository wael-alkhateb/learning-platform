import { Link  } from 'react-router-dom'
import '../styles/HeroSection.css';

const HeroSection = () => {
    return (
        <div className='hero-section'>
            <h1>Welcome to Ultimate Learning platform</h1>
            <p>Explore hundreds of courses in programming ,deign ,and more. Start your learning journey today! </p>
               <Link to="/register">
                <button className='cta-button'> Get Started</button>
               </Link>
        </div>
    );
};

export default HeroSection;