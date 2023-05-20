import React from 'react';
import css from './Contact.module.css';


const Contact = ({ phone }) => {
    return (
        <button className={css.button}>
            <a href={`tel:${phone}`} className={css.contactLink}>
        Contact
        </a>
            </button>
    )
}

export default Contact;