import printerFarm from '../../../assets/slides/printer-farm.jpg'

import "../../../styles/Pages/Home/Slideshow/Slide.scss"

const SlideOne: React.FC = () => {
    return (
        <div className="slide-img-container">
            <div className="slide-text-container">
                <h1>This is slide one</h1>
                <p>This is Slide One</p>
            </div>
            <img src={printerFarm} alt="" />
        </div>
    )
}

export default SlideOne
