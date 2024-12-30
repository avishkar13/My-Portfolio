import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const Skills = () => {
    const [progress, setProgress] = useState({
        HTML: 0,
        CSS: 0,
        JavaScript: 0,
        React: 0,
        NextJS: 0,
        NodeJS: 0,
        ExpressJS: 0,
        MongoDB: 0,
        Mongoose: 0,
        NextAuth: 0,
        LocalStorage: 0,
    });

    useEffect(() => {
        const targetProgress = {
            HTML: 98,
            CSS: 94,
            JavaScript: 95,
            React: 90,
            NextJS: 65,
            NodeJS: 92,
            ExpressJS: 94,
            MongoDB: 85,
            Mongoose: 94,
            NextAuth: 80,
            LocalStorage: 92,
        };

        const interval = setInterval(() => {
            setProgress((prev) => {
                const newProgress = { ...prev };
                let allFilled = true;
                Object.keys(targetProgress).forEach((key) => {
                    if (newProgress[key] < targetProgress[key]) {
                        newProgress[key] += 2;
                        allFilled = false;
                    }
                });
                if (allFilled) clearInterval(interval);
                return newProgress;
            });
        }, 70);
    }, []);

    const renderSkill = (name, width, description, image, color) => (
        <div className="technology mb-4 flex items-center">
            <img src={image} alt={name} className="w-6 h-6 mr-2 bg-white rounded-sm" />
            <div className="flex-grow">
                <div className="flex justify-between">
                    <p className="font-semibold">{name}</p>
                    <p className="text-gray-400 text-[12px] md:text-sm text-right">{description}</p>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                    <div
                        className="h-2 rounded-full"
                        style={{
                            width: `${progress[name]}%`,
                            backgroundColor: color,
                            transition: 'width 0.2s ease-in-out',
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="skill-container text-white w-[90vw] mx-auto my-24 flex flex-col gap-8 bg-red-30 p-1 md:p-2">
                <div className="card w-full md:w-[80%] xl:w-[50%] bg-gray-800 rounded-lg shadow-lg p-6 text-white mx-auto hover:scale-105 hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Frontend Tech Stack</h2>
                    {renderSkill('HTML', 98, 'Markup language for structuring pages', 'images/html.png', '#e34c26')}
                    {renderSkill('CSS', 94, 'For styling; using Tailwind for responsive design', 'images/css.png', '#264de4')}
                    {renderSkill('JavaScript', 90, 'Core scripting for interactivity', 'images/js.png', '#f7df1e')}
                    {renderSkill('React', 85, 'Library for building UIs', 'images/react.png', '#61dafb')}
                    {renderSkill('NextJS', 65, 'Framework for server-rendered React', 'images/next.png', '#752768')}
                </div>

                <div className="card w-full md:w-[80%] xl:w-[50%] bg-slate-800 rounded-lg shadow-lg p-6 text-white mx-auto hover:scale-105 hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Backend Tech Stack</h2>
                    {renderSkill('NodeJS', 92, 'JavaScript runtime for server-side', 'images/node.png', '#43853d')}
                    {renderSkill('ExpressJS', 94, 'Minimalist web framework for Node.js', 'images/express.png', '#787878')}
                </div>

                <div className="card w-full md:w-[80%] xl:w-[50%] bg-gray-800 rounded-lg shadow-lg p-6 text-white mx-auto hover:scale-105 hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Database Tech Stack</h2>
                    {renderSkill('MongoDB', 82, 'NoSQL database for data storage', 'images/mongodb.png', '#47a248')}
                    {renderSkill('Mongoose', 94, 'ODM for MongoDB and Node.js', 'images/mongoose.png', '#880000')}
                </div>

                <div className="card w-full md:w-[80%] xl:w-[50%] bg-gray-800 rounded-lg shadow-lg p-6 text-white mx-auto hover:scale-105 hover:bg-gray-900 transition-all duration-300 ease-in-out cursor-pointer">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Other Tech Tools</h2>
                    {renderSkill('NextAuth', 80, 'Authentication for Next.js applications', 'images/auth.jpg', '#ff6b6b')}
                    {renderSkill('LocalStorage', 82, 'Client-side storage for web applications', 'images/LS.jpg', '#ff8c00')}
                </div>
            </div>
        </>
    );
};

export default Skills;
