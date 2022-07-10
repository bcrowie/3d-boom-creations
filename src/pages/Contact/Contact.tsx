import React, { Dispatch, SetStateAction, useState } from "react";
import FormInput from "../../components/FormInput/FormInput";
import FormSelector from "../../components/FormSelector/FormSelector";
import { FormState }from "../../types"
import { contactHeader,
    contactSummary,
    contactCustomerSelect,
    contactFormFields,
    contactInquirySelect } from "../../constants/constants";
import "../../styles/Pages/Contact.scss"



const Contact: React.FC = () => {
    const [formData, setFormData] = useState<FormState>({
        firstName: "",
        lastName: "",
        contactEmail: "",
        contactPhone: "",
        currentCustomer: false,
        inquiryType: "",
        moreInfo: ""
    })

    const onSubmit = (event: MouseEvent):void => {
        event.preventDefault()
        // Send email with formdata to service@3dboom.org
    }

    return (
        <div className="contact">
            <div className="contact-summary">
                <h1>{contactHeader}</h1>
                <p>{contactSummary}</p>
            </div>
            <div className="contact-form">
                <form action="submit">
                    <div className="input-row">
                        <FormInput id={contactFormFields.firstName.id}
                            label={contactFormFields.firstName.label}
                            name={contactFormFields.firstName.name}
                            setData={setFormData}/>
                        <FormInput id={contactFormFields.lastName.id}
                            label={contactFormFields.lastName.label}
                            name={contactFormFields.lastName.name}
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <FormInput id={contactFormFields.contactEmail.id}
                            label={contactFormFields.contactEmail.label}
                            name={contactFormFields.contactEmail.name}
                            setData={setFormData}/>
                        <FormInput id={contactFormFields.phoneNumber.id}
                            label={contactFormFields.phoneNumber.label}
                            name={contactFormFields.phoneNumber.name}
                            setData={setFormData}/>
                    </div>
                    <div className="input-row">
                        <FormSelector id={contactFormFields.currentCustomer.id}
                            label={contactFormFields.currentCustomer.label}
                            name={contactFormFields.currentCustomer.name}
                            options={contactCustomerSelect}
                            setData={setFormData} />
                        <FormSelector id={contactFormFields.inquiryType.id}
                            label={contactFormFields.inquiryType.label}
                            name={contactFormFields.inquiryType.name}
                            options={contactInquirySelect}
                            setData={setFormData} />
                    </div>
                    <div className="input-row">
                        <div className={contactFormFields.contactMoreInfo.id}>
                            <label htmlFor={contactFormFields.contactMoreInfo.id}>
                                {contactFormFields.contactMoreInfo.label}</label>
                            <textarea name={contactFormFields.contactMoreInfo.name}
                                id={contactFormFields.contactMoreInfo.id}
                                cols={25} rows={30}
                                onChange={e => {
                                    setFormData({...formData, moreInfo: e.target.value})
                                }}></textarea>
                        </div>
                    </div>
                    <button type="submit" onClick={(e) => onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
