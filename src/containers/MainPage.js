import React, {useCallback, useState} from 'react';
import ComingSoon from "../components/ComingSoon";
import TimeUp from "../components/TimeUp";
import ContentText from "../components/ContentText";
import Countdown from "../components/Countdown";
import SocialMedia from "../components/SocialMedia";
import AboutButton from "../components/AboutButton";
import ContactButton from "../components/ContactButton";
import classes from './MainPage.module.css';
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";

const MainPage = ()=> {
    const [isAboutVisible, setIsAboutVisible]=useState(false);
    const [isContactVisible, setIsContactVisible]=useState(false);

    const showAboutComponent = useCallback(()=> {
        setIsAboutVisible(true);
    },[])

    const hideAboutComponent = useCallback(()=> {
        setIsAboutVisible(false);
    },[])

    const showContactComponent = useCallback(()=> {
        setIsContactVisible(true);
    },[]);

    const hideContactComponent = useCallback(()=> {
        setIsContactVisible(false);
    },[]);

    return (
        <div className={classes.container}>
            <ComingSoon />
            <TimeUp />
            <ContentText />
            <Countdown />
            <SocialMedia />
            <AboutUs
                isVisible={isAboutVisible}
                closeHandler={hideAboutComponent}
            />
            <AboutButton
                openHandler={showAboutComponent}
            />
            <ContactUs
                isVisible={isContactVisible}
                closeHandler={hideContactComponent}
            />
            <ContactButton
                openHandler={showContactComponent}
            />
        </div>
    )
}


export default MainPage;
