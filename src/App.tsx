// Modules
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Quotes from './pages/Quotes/Quotes';
import Testimonials from './pages/Testimonials/Testimonials';
import Work from './pages/Work/Work';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Styles
import './styles/app.scss';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/quotes' element={<Quotes />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path='/work' element={<Work />} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
