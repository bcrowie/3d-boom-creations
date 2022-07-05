import printerFarm from '../../../assets/slides/printer-farm.jpg'

const SlideTwo: React.FC = () => {
    return (
        <div className="slide-img-container">
            <div className="slide-text-container">
                <h1>This is slide Two</h1>
                <p>This is slide Two</p>
            </div>
            <img src={printerFarm} alt="" />
        </div>
    )
}

export default SlideTwo
