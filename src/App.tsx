import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Quotes from './pages/Quotes/Quotes';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

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
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
