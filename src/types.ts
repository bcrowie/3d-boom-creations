type Form = {
    firstName: string,
    lastName: string,
    contactEmail: string,
    contactPhone: string,
    moreInfo: string
}

export type ContactForm = Form & {
    currentCustomer: false,
    inquiryType: string,
}

export type QuoteForm = Form & {
    material: string,
    color: string,
    size: string,
}
