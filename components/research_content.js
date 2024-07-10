"use client";
import React from "react";

const posts = [
    {
        id: 1,
        title: 'PFAS for Public Health',
        href: '#',
        description:
            'Responsibilities as a research assistant include: data cleaning, data collection, and feature engineering with pre-built machine learning algorithms',
        date: 'Current Research',
        datetime: '2020-03-16',
        category: { title: 'Environmental Science', href: '#' },
        author: {
            name: 'Prof. Alvarez',
            role: 'Primary Investigator',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: "CATALYST Project",
        href: "#",
        description:
            "A research project that looks at the impact community health workers during the COVID-19 Pandemic. Responsibilities include data wrangling and data cleaning along with data collection.",
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

const ResearchSection = () => {
    return (
        <div className="bg-white min-h-screen py-24 sm:py-32 w-full">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 w-full flex items-center justify-between">
                <div className="max-w-2xl lg:w-2/3">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Research</h2>
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
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {posts.map((post) => (
                    <article key={post.id} className="flex max-w-xl flex-col items-start justify-between mx-auto">
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                                {post.date}
                            </time>
                            <a
                                href={post.category.href}
                                className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                            >
                                {post.category.title}
                            </a>
                        </div>
                        <div className="group relative mt-3 lg:mt-0 lg:ml-8"> {/* Adjusted margin for larger screens */}
                            <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                <a href={post.href}>
                                    <span className="absolute inset-0" />
                                    {post.title}
                                </a>
                            </h3>
                            <p className="mt-2 lg:mt-3 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                            <div className="relative mt-3 flex items-center gap-x-4">
                                <img alt="" src={post.author.imageUrl} className="h-10 w-10 rounded-full bg-gray-50" />
                                <div className="text-sm leading-6">
                                    <p className="font-semibold text-gray-900">
                                        <a href={post.author.href}>
                                            <span className="absolute inset-0" />
                                            {post.author.name}
                                        </a>
                                    </p>
                                    <p className="text-gray-600">{post.author.role}</p>
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default ResearchSection;
