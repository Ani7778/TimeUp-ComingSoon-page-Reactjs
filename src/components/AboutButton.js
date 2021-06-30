import React from 'react';
import classes from './AboutButton.module.css';

const AboutButton = ({openHandler})=> {
    return (
        <div>
            <button className={classes.menu_btn} onClick={openHandler}>ABOUT US</button>
        </div>
    );
};

export default AboutButton;
