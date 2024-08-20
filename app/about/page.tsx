"use client";
import React, { useState } from 'react';
import AboutSection from '../../components/msg_bubble'; // Adjust the path as necessary
import ContactSection from "../../components/contact_section"
import {TypewriterEffectDemo} from "../../components/typewriter_component";
import {StickyScrollRevealDemo} from "../../components/stickscroll_reveal";
const About = () => {
    const [currentImage, setCurrentImage] = useState("/icons8-vinyl-player-66.png");

    const handleCollapseClick = (image: any) => {
        setCurrentImage(image);
    };

    return (
        <><><TypewriterEffectDemo></TypewriterEffectDemo><StickyScrollRevealDemo></StickyScrollRevealDemo></><ContactSection></ContactSection></>
    );
};

export default About;
