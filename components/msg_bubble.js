"use client";
import React from "react";

const AboutSection = () => {
    return (
        <div className="flex flex-col w-full h-full mt-20 p-4"> {/* Adjusted margin-top to account for navbar */}
            <div className="collapse bg-base-200 w-full mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium bg-white text-black"> {/* Ensure title remains white */}
                    What are your favorite Hobbies?
                </div>
                <div className="collapse-content bg-white">
                    <p>
                        I do not have an extensive amount of hobbies if I am going to be honest.
                        But I always love to hang out with my friends whenever I get the chance to.
                        Often, I would never turn down any opportunity to explore new places with them. However,
                        recently I have taken up a hobby in playing piano (not all too well) and biking!
                    </p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium bg-white text-black"> {/* Ensure title remains white */}
                    Why Data Science?
                </div>
                <div className="collapse-content bg-white">
                    <p>
                        Initially entering college, I was a biology major looking to enter the field of medicine that way. However,
                        I had a change of heart when I discover biostatistics, computational biology, bioinformatics, and chemoinfromatics.
                        These fields have truly opened my eyes on the beatuy of data science and the innovation it generates when applied to
                        these domains. I knew from there that data was my passion and manipulating and interpreting it for good is what I wanted to do.
                    </p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium bg-white text-black"> {/* Ensure title remains white */}
                    Other than Data Science, What are some of your other passions?
                </div>
                <div className="collapse-content bg-white">
                    <p>
                        Other than data science, I would say that one of my greater passions is music.
                        Ever since elementary school, I have taken an interest in music. I have participated
                        in bands throughout my childhood and I have always loved playing, listening, and learning the artistry of music.
                        My favorite genre I always love to disect is jazz, looking at its evolution, cultural impact, and its influence in
                        music today. However, I would never say that I have a favorite genre to listen to. I love listening to many
                        different genres of music and picking one just seems to unfair.
                    </p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium bg-white text-black"> {/* Ensure title remains white */}
                    What's your hometown?
                </div>
                <div className="collapse-content bg-white">
                    <p>
                        I was raised in Torrance California which is just 30 minutes south of Los Angeles.
                        It's truly a great place to live, it is near beaches and there's pretty good food in the city as well.
                        Since LA is also close by, there would always be something to do there. However, currently I live in Irvine
                        where I go to school.
                    </p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full mb-4">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium bg-white text-black"> {/* Ensure title remains white */}
                    Click to open this one and close others
                </div>
                <div className="collapse-content bg-white">
                    <p>hello</p>
                </div>
            </div>
            <div className="collapse bg-base-200 w-full">
                <input type="radio" name="my-accordion-1" />
                <div className="collapse-title text-xl font-medium bg-white text-black"> {/* Ensure title remains white */}
                    Click to open this one and close others
                </div>
                <div className="collapse-content bg-white">
                    <p>hello</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
