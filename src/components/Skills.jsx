import React from 'react'
import Navbar from './Navbar'

const Skills = () => {
    return (
        <>
            <Navbar />
            {/* <h2 className='font-bold font-serif text-white text-center text-2xl py-20 mb-0 md:mb-6 hidden md:block'>
                <u>Tech stacks:</u></h2> */}
            <div className="skill-container text-white w-[90vw]  mx-auto  my-24 flex flex-col gap-8 bg-red-30 p-1 md:p-2">
                <div className="card w-full md:w-[80%] xl:w-[50%] bg-gray-800 rounded-lg shadow-lg p-6 text-white mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Frontend Tech Stack</h2>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/html.png" alt="HTML" className="w-6 h-6 mr-2 " />
                        <div className="flex-grow">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">HTML</p>
                                <p className="text-gray-400 text-[12px] md:text-sm text-right ">Markup language for structuring pages</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '98%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="technology mb-4 flex  items-center">
                        <img src="/images/css.png" alt="CSS" className="w-6 h-6 mr-2" />
                        <div className="flex-grow">
                            <div className="flex justify-between items-center">
                                <p className="font-semibold">CSS</p>
                                <p className="text-gray-400 md:text-sm text-[11px] text-right">For styling; using Tailwind for responsive design</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-green-400 h-2 rounded-full" style={{ width: '94%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/js.png" alt="JavaScript" className="w-6 h-6 mr-2" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">JavaScript</p>
                                <p className="text-gray-400 text-sm text-right">Core scripting for interactivity</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="frontend mb-4 flex items-center">
                        <img src="/images/react.png" alt="React" className="w-6 h-6 mr-2" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">React</p>
                                <p className="text-gray-400 text-sm text-right">Library for building UIs</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-indigo-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/next.png" alt="Next.js" className="w-6 h-6 mr-2 bg-white" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">Next.js</p>
                                <p className="text-gray-400 text-[11px] md:text-sm text-right">Framework for server-rendered React</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-full md:w-[80%] xl:w-[50%] bg-gray-800 rounded-lg shadow-lg p-6 text-white mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Backend Tech Stack</h2>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/node.png" alt="HTML" className="w-6 h-6 mr-2 bg-white rounded-sm" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">Node.js</p>
                                <p className="text-gray-400 text-[12px] md:text-sm text-right">JavaScript runtime for server-side</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/express.png" alt="CSS" className="w-6 h-6 mr-2 bg-white rounded-sm" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">Express.js</p>
                                <p className="text-gray-400 text-[12px] md:text-sm text-right">Minimalist web framework for Node.js</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-orange-500 h-2 rounded-full" style={{ width: '94%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-full md:w-[80%] xl:w-[50%] bg-gray-800 rounded-lg shadow-lg p-6 text-white mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Database Tech Stack</h2>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/mongodb.png" alt="HTML" className="w-6 h-6 mr-2 bg-white rounded-sm" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">MongoDB</p>
                                <p className="text-gray-400  text-sm text-right">NoSQL database for data storage</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-blue-800 h-2 rounded-full" style={{ width: '82%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/mongoose.png" alt="CSS" className="w-6 h-6 mr-2 bg-white rounded-sm" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">Mongoose</p>
                                <p className="text-gray-400  text-sm text-right">ODM for MongoDB and Node.js</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-orange-800 h-2 rounded-full" style={{ width: '94%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card w-full md:w-[80%] xl:w-[50%] bg-gray-800 rounded-lg shadow-lg p-6 text-white mx-auto">
                    <h2 className="text-2xl font-semibold mb-4 text-center">Other Tech Tools</h2>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/auth.jpg" alt="HTML" className="w-6 h-6 mr-2 bg-white rounded-sm" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">NextAuth.js</p>
                                <p className="text-gray-400 text-[11px] md:text-sm text-right">Authentication for Next.js applications</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-sky-600 h-2 rounded-full" style={{ width: '80%' }}></div>
                            </div>
                        </div>
                    </div>

                    <div className="technology mb-4 flex items-center">
                        <img src="/images/LS.jpg" alt="CSS" className="w-6 h-6 mr-2 bg-white rounded-sm" />
                        <div className="flex-grow">
                            <div className="flex justify-between">
                                <p className="font-semibold">LocalStorage</p>
                                <p className="text-gray-400 text-[11px] md:text-sm text-right">Client-side storage for web applications</p>
                            </div>
                            <div className="w-full bg-gray-700 h-2 rounded-full mt-1">
                                <div className="bg-yellow-600 h-2 rounded-full" style={{ width: '82%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
