import "../../../styles/Pages/Home/Slideshow/Slideshow.scss"

interface IProps {
    children: JSX.Element[]
}

const Slideshow = ({children} : IProps ) => {
    const activeSlide = children.map(slide => (
        <>
            {slide}
        </>
    ))

    return (
        <div>
            <div className="slideshow">
                {activeSlide}
            </div>
        </div>
    )
}

export default Slideshow
