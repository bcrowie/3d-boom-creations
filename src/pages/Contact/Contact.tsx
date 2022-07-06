import Input from "../../components/Input/Input";
import Selector from "../../components/Selector/Selector";
import { contactHeader, contactSummary, inquirySelect } from "../../constants/constants";
import "../../styles/Pages/Contact.scss"

const onSubmit = () => {}

export interface InputPropsInterface {
    id: string
    label: string,
    name: string,
}

export interface SelectorPropsInterface {
    id: string,
    label: string,
    name: string,
    options: object
}

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <div className="contact-summary">
                <h1>{contactHeader}</h1>
                <p>{contactSummary}</p>
            </div>
            <div className="contact-form">
                <form action="submit">
                    <div className="input-row">
                        <Input id="first-name" label="First Name:" name="FirstName"/>
                        <Input id="last-name" label="Last Name:" name="LastName" />
                    </div>
                    <div className="input-row">
                        <Input id="email" label="Email Address:" name="Email" />
                        <Input id="phone-number" label="Phone Number: (Optional)" name="PhoneNumber" />
                    </div>
                    <div className="input-row">
                        <Selector id="current-customer"
                            label="Are you a current customer?"
                            name="Customer"
                            options={{"no": "no", "yes": "yes"}}/>
                        <Selector id="inquiry-type"
                            label="What is this inquiry related to?"
                            name="InquiryType"
                            options={inquirySelect}/>
                    </div>
                    <div className="input-row">
                        <div className="more-info">
                            <label htmlFor="contact-more-info">Provide more details here!</label>
                            <textarea name="more-info" id="contact-more-info" cols={25} rows={30}></textarea>
                        </div>
                    </div>
                    <button type="submit" onClick={onSubmit}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
