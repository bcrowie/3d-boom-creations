import React, { useState } from 'react';
import FormInput from '../../components/FormInput/FormInput'
import { ContactForm, QuoteForm } from '../../types';
import { QUOTE_HEADER,
    QUOTE_INITIAL_STATE,
    QUOTE_SELECTORS,
    QUOTE_SUMMARY_ONE,
    QUOTE_SUMMARY_TWO,
    QUOTE_WEBSITE_LIST } from "../../constants/constants";

import "../../styles/Pages/Quotes.scss"
import Selector from '../../components/FormSelector/FormSelector';

const Quotes: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm | QuoteForm>(QUOTE_INITIAL_STATE)

    const submitRequest = (e: React.MouseEvent):void => {
        e.preventDefault();
        // Submit form data logic here
    }

    return (
        <div className="quotes">
           <div className="summary">
              <h1>{QUOTE_HEADER}</h1>
              <p>{QUOTE_SUMMARY_ONE}</p>
              <p>{QUOTE_SUMMARY_TWO}</p>
              <ul>
                {Object.entries(
                    QUOTE_WEBSITE_LIST).map(([title, url]) => (
                    <li><a href={url} target="_blank" rel="noreferrer" >{title}</a></li>
                ))}
              </ul>
           </div>
            <div className="quote-form">
                <form action="submit">
                    <div className="input-row">
                        <FormInput id="first-name"
                            label="First Name:"
                            name="FirstName"
                            setData={setFormData} />
                        <FormInput id="last-name"
                            label="Last Name:"
                            name="LastName"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormInput id="contact-email"
                            label="Contact Email:"
                            name="ContactEmail"
                            setData={setFormData} />
                        <FormInput id="contact-phone"
                            label="Contact Phone:"
                            name="ContactPhone"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormInput id="model-url"
                            label="Link to model:"
                            name="LinkToModel"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <Selector id="color"
                            label="Color:"
                            name="Color"
                            options={QUOTE_SELECTORS.COLOR}
                            setData={setFormData} />
                        <Selector id="material"
                            label="Material:"
                            name="Material"
                            options={QUOTE_SELECTORS.MATERIAL}
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <Selector id="priority"
                            label="Priority:"
                            name="Priority"
                            options={QUOTE_SELECTORS.PRIORITY}
                            setData={setFormData} />
                        <FormInput id="size"
                            label="Size: ( width x height x depth )"
                            name="Size"
                            setData={setFormData} />
                    </div>
                    <div className="more-info">
                        <label htmlFor="MoreInfo">More Info:</label>
                        <textarea name="MoreInfo" id="more-info" cols={30} rows={10}></textarea>
                    </div>
                </form>
                <button type="submit" onClick={e => submitRequest(e)}>Submit</button>
            </div>
        </div>
    );
};

export default Quotes;
