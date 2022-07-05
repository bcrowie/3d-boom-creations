import PrinterFarm from '../../assets/slides/printer-farm.jpg'
import { homeImgAlt } from '../../constants/constants';
import "../../styles/Pages/Home/Home.scss"

const Home: React.FC = () => {
    return <div className='home'>
        <div className="img-container">
            <img src={PrinterFarm} alt={homeImgAlt} />
        </div>
        <div className="text-container">
            <h1>This is home</h1>
            <p>this is the home page</p>
        </div>
    </div>;
};

export default Home;
