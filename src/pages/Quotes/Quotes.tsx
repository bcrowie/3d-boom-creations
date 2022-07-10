import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput'
import { ContactForm, QuoteForm } from '../../types';
import { quoteHeader, quoteSummary } from "../../constants/constants";

import "../../styles/Pages/Quotes.scss"

const Quotes: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm | QuoteForm>({
        firstName: "",
        lastName: "",
        contactEmail: "",
        contactPhone: "",
        color: "",
        material: "",
        size: "",
        moreInfo: ""
    })

    const submitRequest = (e: React.MouseEvent):void => {
        e.preventDefault();
        // Submit form data logic here
    }

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
                        <button type="submit" onClick={e => submitRequest(e)}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Quotes;
