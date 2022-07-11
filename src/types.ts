type Form = {
    CONTACT_EMAIL: string,
    CONTACT_PHONE: string,
    FIRST_NAME: string,
    LAST_NAME: string,
    MORE_INFO: string
}

export type ContactForm = Form & {
    CURRENT_CUSTOMER: boolean,
    INQUIRY_TYPE: string,
}

export type QuoteForm = Form & {
    COLOR: string,
    MATERIAL: string,
    MODEL_URL: string,
    PRIORITY: string,
    SIZE: string,
}

export type Product = {
    DEFAULT_COLOR: string,
    DESCRIPTION: string,
    NAME: string,
    PRICE: number,
}
