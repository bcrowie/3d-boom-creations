import React, { useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import FormSelector from "../../components/FormSelector/FormSelector";
import { ContactForm, QuoteForm }from "../../types"
import { CONTACT_CUSTOMER_SELECT,
    CONTACT_HEADER,
    CONTACT_INITIAL_STATE,
    CONTACT_INQUIRY_SELECT,
    CONTACT_SUMMARY } from "../../constants/constants";
import "../../styles/Pages/Contact.scss"



const Contact: React.FC = () => {
    const [formData, setFormData] = useState<ContactForm | QuoteForm>(CONTACT_INITIAL_STATE)

    const submitRequest = (e: React.MouseEvent):void => {
        e.preventDefault()
        // Send email with formdata to service@3dboom.org
    }

    return (
        <div className="contact">
            <div className="summary">
                <h1>{CONTACT_HEADER}</h1>
                <p>{CONTACT_SUMMARY}</p>
            </div>
            <div className="contact-form">
                <form action="submit">
                    <div className="input-row">
                        <FormInput id="first-name"
                            data={formData}
                            label="First Name:"
                            name="FIRST_NAME"
                            setData={setFormData}/>
                        <FormInput id="last-name"
                            data={formData}
                            label="Last Name:"
                            name="LAST_NAME"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormInput id="email"
                            data={formData}
                            label="Email Address:"
                            name="CONTACT_EMAIL"
                            setData={setFormData}/>
                        <FormInput id="phone-number"
                            data={formData}
                            label="Phone Number (Optional):"
                            name="CONTACT_PHONE"
                            setData={setFormData}/>
                    </div>
                    <div className="input-row">
                        <FormSelector id="current-customer"
                            data={formData}
                            label="Are you a current customer?"
                            name="CURRENT_CUSTOMER"
                            options={CONTACT_CUSTOMER_SELECT}
                            setData={setFormData} />
                        <FormSelector id="inquiry-type"
                            data={formData}
                            label="What is this inquiry related to?"
                            name="INQUIRY_TYPE"
                            options={CONTACT_INQUIRY_SELECT}
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <div className="contact-more-info">
                            <label htmlFor="more-info">
                                Provide more info here!</label>
                            <textarea name="more-info"
                                id="more-info"
                                cols={25} rows={30}
                                onChange={e => {
                                    setFormData({...formData,
                                        MORE_INFO: e.target.value})
                                }}></textarea>
                        </div>
                    </div>
                    <button type="submit" onClick={(e) => submitRequest(e)}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
