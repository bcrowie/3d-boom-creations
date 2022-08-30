// Modules
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// Pages
import Contact from './pages/Contact/Contact';
import Home from './pages/Home/Home';
import Quotes from './pages/Quotes/Quotes';
import Testimonials from './pages/Testimonials/Testimonials';
import Products from './pages/Products/Products';
import MessageSent from './pages/MessageSent/MessageSent';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// Styles
import './styles/app.scss';
import NotFound from './pages/404/404';

const App: React.FC = () => {
    return (
        <div className='App'>
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/quotes' element={<Quotes />} />
                    <Route path='/testimonials' element={<Testimonials />} />
                    <Route path="/confirmed" element={<MessageSent />} />
                    <Route path="*" element={<NotFound/>} />
                </Routes>
                <Footer />
            </Router>
        </div>
    );
};

export default App;
