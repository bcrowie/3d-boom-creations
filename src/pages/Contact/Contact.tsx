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

    const submitRequest = (event: React.MouseEvent):void => {
        event.preventDefault()
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
                            label="First Name:"
                            name="FirstName"
                            setData={setFormData}/>
                        <FormInput id="last-name"
                            label="Last Name:"
                            name="LastName"
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormInput id="email"
                            label="Email Address:"
                            name="EmailAddress"
                            setData={setFormData}/>
                        <FormInput id="phone-number"
                            label="Phone Number (Optional):"
                            name="PhoneNumber"
                            setData={setFormData}/>
                    </div>
                    <div className="input-row">
                        <FormSelector id="current-customer"
                            label="Are you a current customer?"
                            name="CurrentCustomer"
                            options={CONTACT_CUSTOMER_SELECT}
                            setData={setFormData} />
                        <FormSelector id="inquiry-type"
                            label="What is this inquiry related to?"
                            name="InquiryType"
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
                                    setFormData({...formData, MORE_INFO: e.target.value})
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
