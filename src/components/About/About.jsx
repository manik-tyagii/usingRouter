import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://permutable.ai/wp-content/uploads/2024/03/19301.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Aspiring Software Engineer
                        </h2>
                        <p className="mt-6 text-gray-600">

                            Technical Expertise: Knowledge of frontend technologies, with a focus on creating responsive and user-friendly interfaces.


                        </p>
                        <p className="mt-4 text-gray-600">
                            Career Goals: Aspiring to contribute to innovative projects while enhancing my skills in the dynamic tech industry.<br /><br />

                            Learning Mindset: Committed to continuous learning and staying updated with the latest technologies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}