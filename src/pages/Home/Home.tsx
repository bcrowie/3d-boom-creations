import PrinterFarm from '../../assets/slides/printer-farm.jpg'
import { homeImgAlt, homeBulletPoints } from '../../constants/constants';
import "../../styles/Pages/Home/Home.scss"

const Home: React.FC = () => {
    return <div className='home'>
        <div className="img-container">
            <img src={PrinterFarm} alt={homeImgAlt} />
        </div>
        <div className="text-container">
            <h1>Professional, affordable and top quality 3D Printing!</h1>
            <ul>
                {homeBulletPoints.map(point => {
                    return (
                        <li>{point}</li>
                    )
                })}
            </ul>
        </div>
    </div>;
};

export default Home;
