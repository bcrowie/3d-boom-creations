// Header
export const HEADER_PHONE = "Phone: (863) 606-8318"
export const HEADER_EMAIL = "Email: contact@3dboom.org"
export const LOGO_ALT = "3D Boom Creations Logo"

// Contact
export const CONTACT_HEADER = "Contact Us"
export const CONTACT_SUMMARY = `If you have any questions, concerns, would like an update to your order or would
                            just like to chat, please do not hesitate to contact us using the form below or by
                            contacting us via the email address or phone number at the top of this page. We will
                            contact you within 24-48 hours... but most of the time within only a couple of hours :)`
export const CONTACT_CUSTOMER_SELECT = {
    "undefined": "",
    "no": "No",
    "yes": "Yes"
}
export const CONTACT_INITIAL_STATE = {
    CONTACT_EMAIL: "",
    CONTACT_PHONE: "",
    CURRENT_CUSTOMER: false,
    FIRST_NAME: "",
    INQUIRY_TYPE: "",
    LAST_NAME: "",
    MORE_INFO: ""
}
export const CONTACT_INQUIRY_SELECT = {
    "pick-one": "",
    "print-quote": "Looking to get something printed!",
    "model-quote": "Looking to get something modeled!",
    "general": "General Questions about Services",
    "customer-service": "Customer Support Inquiry"
}

// Home
export const HOME_IMG_ALT = "3D Printer Farm"
export const HOME_BULLET_POINTS = [
    "Fast turnaround!",
    "Top quality material!",
    "All 3D Prints inspected for accuracy and quality!",
    "Filament and Resin printing services!"
]

// Links
export const LINKS = {
    ABOUT: {
        LINK: "/about",
        TEXT: "About"
    },
    CONTACT: {
        LINK: "/contact",
        TEXT: "Contact"
    },
    HOME: {
        LINK: "/",
        TEXT: "Home"
    },
    PRODUCTS: {
        LINK: "/products",
        TEXT: "Products"
    },
    QUOTES: {
        LINK: "/quotes",
        TEXT: "Quotes"
    },
    TESTIMONIALS: {
        LINK: "/testimonials",
        TEXT: "Testimonials"
    },
}

// Quote
export const QUOTE_HEADER = "Get a Quote!"
export const QUOTE_SUMMARY_ONE = `Use the form below to request a quote! We love printing
    things! You'll love when we print things! Especially when we print things for
    you!! Excellent quality, blazingly fast turn around time from the printers to
    the shippers, we will make sure you are satisfied from the start of your
    adventure, onward!!`
export const QUOTE_SUMMARY_TWO = `If you're new to 3D Printing and don't know where to start but would like to try
    our services, there are many websites to get models from. Many of those models are
    FREE! See the list of websites below to get started exploring the vast world of
    3D Printing models! Feel free to search anything you'd like. If you find something
    return here, paste the URL and fill in your info and we will get in touch with you
    as soon as possible!`
export const QUOTE_WEBSITE_LIST = {
    Cults3D: "https://www.cults3d.com",
    MyMiniFactory: "https://www.myminifactory.com",
    Thingiverse: "https://www.thingiverse.com",
}
export const QUOTE_INITIAL_STATE = {
    FIRST_NAME: "",
    LAST_NAME: "",
    CONTACT_EMAIL: "",
    CONTACT_PHONE: "",
    COLOR: "",
    MATERIAL: "",
    MODEL_URL: "",
    MORE_INFO: "",
    PRIORITY: "",
    SIZE: "",
}
export const QUOTE_SELECTORS = {
    COLOR: {
        BLANK: "",
        BLACK: "Black",
        BLUE: "Blue",
        BROWN: "Brown",
        GREEN: "Green",
        ORANGE: "Orange",
        PINK: "Pink",
        RED: "Red",
        YELLOW: "Yellow"
    },
    MATERIAL: {
        BLANK: "",
        ABS: "ABS",
        ASA: "ASA",
        PETG: "PETG",
        PLA: "PLA",
        NYLON: "NYLON",
        TPU: "TPU"
    },
    PRIORITY: {
        BLANK: "",
        NORMAL: "Normal",
        FAST: "Fast!",
        YESTERDAY: "YESTERDAY!"
    }
}
