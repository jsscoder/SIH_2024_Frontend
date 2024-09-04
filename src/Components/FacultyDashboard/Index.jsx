
import Sidebar from './FacultyComponents/sidebar/Sidebar';
import Home from './FacultyComponents/home/Home';
import About from './FacultyComponents/about/About';
import Services from './FacultyComponents/services/Services';
import Resume from './FacultyComponents/resume/Resume';
import Portfolio from './FacultyComponents/portfolio/Portfolio';
import Testimonials from './FacultyComponents/testimonials/Testimonials';
import Blog from './FacultyComponents/blog/Blog';
import Contact from './FacultyComponents/contact/Contact';
import useLocalStorage from 'use-local-storage'
import './faculty.css';


const Index = () => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

    const switchTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
    }
    

    return (
        <div className="app" data-theme={theme}>
            <Sidebar theme={theme} switchTheme={switchTheme} />
            <main className='ml-[110px] md:ml-0'>
                <Home />
                <About />
                <Services />
                <Resume />
                <Portfolio />
                <Testimonials />
                <Blog />
                <Contact theme={theme} />
            </main>
        </div>
    );
}

export default Index;
