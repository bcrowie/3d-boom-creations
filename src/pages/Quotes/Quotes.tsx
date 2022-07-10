import { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput'
import { quoteHeader, quoteSummary } from "../../constants/constants";

import "../../styles/Pages/Quotes.scss"

const Quotes: React.FC = () => {
    const [formData, setFormData] = useState({})

    return (
        <div className="quotes">
           <div className="quote-summary">
              <h1>{quoteHeader}</h1>
              <p>{quoteSummary}</p>
           </div>
            <div className="quote-form">
                <form action="submit">
                    <div className="input-row">
                        <FormInput id="" label="" name="" setData={setFormData} />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Quotes;
