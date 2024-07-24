"use client";
import React, { useState } from "react";

const aboutTabs = {
    hobbies: {
        title: 'Hobbies',
        content: `I do not have an extensive amount of hobbies if I am going to be honest.
              But I always love to hang out with my friends whenever I get the chance to.
              Often, I would never turn down any opportunity to explore new places with them. However,
              recently I have taken up a hobby in playing piano (not all too well) and biking!`,
        image: "/next.svg"
    },
    dataScience: {
        title: 'Data Science',
        content: `Initially entering college, I was a biology major looking to enter the field of medicine that way. However,
              I had a change of heart when I discover biostatistics, computational biology, bioinformatics, and chemoinformatics.
              These fields have truly opened my eyes on the beauty of data science and the innovation it generates when applied to
              these domains. I knew from there that data was my passion and manipulating and interpreting it for good is what I wanted to do.`,
        image: "/stats-svgrepo-com.png"
    },
    otherPassions: {
        title: 'Other passions',
        content: `Other than data science, I would say that one of my greater passions is music.
              Ever since elementary school, I have taken an interest in music. I have participated
              in bands throughout my childhood and I have always loved playing, listening, and learning the artistry of music.
              My favorite genre I always love to dissect is jazz, looking at its evolution, cultural impact, and its influence in
              music today. However, I would never say that I have a favorite genre to listen to. I love listening to many
              different genres of music and picking one just seems too unfair.`,
        image: "https://via.placeholder.com/300/0000FF"
    },
    favoriteFood: {
        title: 'Favorite food',
        content: `I would not say that I have a favorite food or cuisine, but I tend to eat Asian food the most.
              However, I am always willing to try great food at any and all times. I am a huge foodie and would love
              recommendations in the greater southern California area. Feel free to click the button below to give me
              a food rec!`,
        image: "https://via.placeholder.com/300/FFFF00",
        button: true
    },
    goals: {
        title: 'Current Goals',
        content: `My goals right now are to eventually one day become a research scientist, data scientist,
              or ML engineer. However, more recently I have entertained the thoughts on graduate studies
              after my undergrad. I am currently learning deep learning and all things software throughout
              this summer and have been more interested in learning how neural networks work with techniques
              on how to build one from scratch!`,
        image: "/thinking-learning-svgrepo-com.png"
    },
    favoriteMovie: {
        title: 'Favorite movie',
        content: `My favorite movie is a tie between Whiplash and La La Land.
              I have always been a fan of music and these films utilize music
              to another level to drive the plot. I also have always been a fan of the composer
              of both these films. But I always am willing to have film recs so feel free to leave one!`,
        image: "/hollywood-landmark-mountain-svgrepo-com.png"
    }
};

const AboutSection = ({ onCollapseClick }) => {
    const [activeTab, setActiveTab] = useState('hobbies');

    return (
        <div className="flex flex-col w-full h-full mt-20 p-4 bg-white shadow-md rounded-lg">
            <div className="flex justify-center space-x-8 mb-8">
                {Object.keys(aboutTabs).map((tabKey) => (
                    <div
                        key={tabKey}
                        className={`cursor-pointer text-lg font-medium ${activeTab === tabKey
                            ? 'text-blue-500 border-b-2 border-blue-500'
                            : 'text-gray-700'
                            }`}
                        onClick={() => {
                            setActiveTab(tabKey);
                            onCollapseClick(aboutTabs[tabKey].image);
                        }}
                    >
                        {aboutTabs[tabKey].title}
                    </div>
                ))}
            </div>

            <div className="p-4">
                <h3 className="text-2xl leading-8 font-bold text-gray-900">
                    {aboutTabs[activeTab].title}
                </h3>
                <p className="mt-4 text-lg leading-6 text-gray-700">
                    {aboutTabs[activeTab].content}
                </p>
                {aboutTabs[activeTab].button && (
                    <div className="mt-4">
                        <button className="btn btn-sm btn-info">Give Me a food rec!</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AboutSection;
