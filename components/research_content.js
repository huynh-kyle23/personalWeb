"use client";
import React from "react";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards"

const posts = [
    {
        id: 1,
        title: 'PFAS for Public Health',
        description: 'Responsibilities as a research assistant include: data cleaning, data collection, and feature engineering with pre-built machine learning algorithms',
        date: 'Current Research',
        datetime: '2020-03-16',
        category: { title: 'Environmental Science', href: '#' },
        author: {
            name: 'Prof. Alvarez',
            role: 'Primary Investigator',
            href: '#',
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: "CATALYST Project",
        description: "A research project that looks at the impact community health workers during the COVID-19 Pandemic. Responsibilities include data wrangling and data cleaning along with data collection.",
        date: "2022 - 2023",
        datetime: "2020-03-16",
        category: { title: "Public Health", href: "#" },
        author: {
            name: "Proj. Alvarez",
            role: "Primary Investigator",
            href: "#",
            imageUrl: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    // More posts...
];

// Transform the posts data to match the structure required by InfiniteMovingCards
const transformedPosts = posts.map(post => ({
    quote: post.description,
    name: post.author.name,
    title: post.title,
}));

const ResearchSection = () => {
    return (
        <div className="bg-white min-h-screen py-24 sm:py-32 w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center justify-between">
                <div className="max-w-2xl lg:w-2/3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research & Experience</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Here lists out all of the research that I have participated in to date.
                        Feel free to scroll around and see a general overview of the projects. Feeling curious?
                        Click on the projects that interests you the most to learn more about it and its impact!
                    </p>
                </div>
                <div className="max-w-2xl lg:w-1/3 ml-8">
                    <img
                        src="/microscope-one-svgrepo-com.png"
                        alt="Research Image"
                        className="w-48 lg:w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>
            <div className="mx-auto mt-10 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none">
                <InfiniteMovingCards
                    items={transformedPosts}
                    direction="left"
                    speed="normal"
                    pauseOnHover={true}
                    className="w-full"
                />
            </div>
        </div>
    );
};

export default ResearchSection;