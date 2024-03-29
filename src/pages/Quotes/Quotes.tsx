import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com'
import * as SECRETS from '../../secrets/secrets'
import FormInput from '../../components/FormInput/FormInput'
import { ContactForm, QuoteForm } from '../../types';
import { QUOTE_HEADER,
    QUOTE_INITIAL_STATE,
    QUOTE_SELECTORS,
    QUOTE_SUMMARY_ONE,
    QUOTE_SUMMARY_TWO,
    QUOTE_WEBSITE_LIST } from "../../constants/constants";
import FormSelector from '../../components/FormSelector/FormSelector';
import "../../styles/Pages/Quotes.scss"

const Quotes: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm | QuoteForm>(QUOTE_INITIAL_STATE)
    const navigate = useNavigate()

    const submitRequest = (e: React.FormEvent):void => {
        e.preventDefault();
        emailjs.send(SECRETS.emailJsServiceID,
            SECRETS.emailJsQuoteTemplateID,
            formData,
            SECRETS.emailJsPublicKey)
        navigate("/confirmed")
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
                <form action="submit" >
                    <div className="input-row">
                        <FormInput id="first-name"
                            data={formData}
                            label="First Name:"
                            name="FIRST_NAME"
                            setData={setFormData} />
                        <FormInput id="last-name"
                            data={formData}
                            label="Last Name:"
                            name="LAST_NAME"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormInput id="contact-email"
                            data={formData}
                            label="Contact Email:"
                            name="CONTACT_EMAIL"
                            setData={setFormData} />
                        <FormInput id="contact-phone"
                            data={formData}
                            label="Contact Phone: (Optional)"
                            name="CONTACT_PHONE"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormInput id="model-url"
                            data={formData}
                            label="Link to model:"
                            name="MODEL_URL"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormSelector id="color"
                            data={formData}
                            label="Color:"
                            name="COLOR"
                            options={QUOTE_SELECTORS.COLOR}
                            setData={setFormData} />
                        <FormSelector id="material"
                            data={formData}
                            label="Material:"
                            name="MATERIAL"
                            options={QUOTE_SELECTORS.MATERIAL}
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormSelector id="priority"
                            data={formData}
                            label="Priority:"
                            name="PRIORITY"
                            options={QUOTE_SELECTORS.PRIORITY}
                            setData={setFormData} />
                        <FormInput id="quantity"
                            data={formData}
                            label="Quantity:"
                            name="QUANTITY"
                            setData={setFormData} />
                    </div>
                    <div className="more-info">
                        <label htmlFor="MoreInfo">More Info:</label>
                        <textarea name="MORE_INFO"
                            id="more-info"
                            cols={30}
                            rows={10}
                            onChange={e => {
                                setFormData({...formData,
                                    MORE_INFO: e.target.value})
                            }}></textarea>
                    </div>
                    <button type="submit" onClick={e => submitRequest(e)}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Quotes;
