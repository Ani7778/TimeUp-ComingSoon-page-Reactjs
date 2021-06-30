import React from 'react';
import classes from './ContactButton.module.css';

const ContactButton = ({openHandler})=> {
    return (
        <div>
            <button className={classes.menu_btn} onClick={openHandler}>CONTACT US</button>
        </div>
    );
};

export default ContactButton;
