import "../../styles/Pages/Testimonials.scss"
import { TESTIMONIALS } from "../../constants/constants";
import "../../styles/Pages/Testimonials.scss"

const Testimonials: React.FC = () => {
    return (
        <div className='testimonials'>
            <div className="summary">
                <h1>Testimonials</h1>
                <ul>
                    {Object.entries(TESTIMONIALS).map(([k,v]) => {
                        return Object.values(v).map((info) => {
                            return <li>{info}</li>
                        })
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Testimonials;
