import React from 'react';
import AboutSection from '../../components/msg_bubble'; // Adjust the path as necessary

const About = () => {
    return (
        <div className="flex-grow mt-20 p-6"> {/* Added margin-top to account for navbar */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start mt-6"> {/* Adjust layout for larger screens */}
                <div className="w-full lg:w-2/3 p-4 bg-white shadow-md rounded-lg">
                    <h1 className="text-3xl font-bold mb-4">All About Me!</h1>
                    <h2 className = "text-3x1  mb-4">
                         Get to know me more! While the other pages are dedicated to my professional experience,
                         This page serves as a way to get to know the other aspects of my day-to-day life. Each question
                         is a list of FAQs that I usaully get when I meet a new friend! Feel free to explore and see my hobbies,
                         inspirations, and more! 
                    </h2>
                    <AboutSection />
                </div>
            </div>
        </div>
    );
};

export default About;
