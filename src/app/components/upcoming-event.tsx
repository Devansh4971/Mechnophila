"use client"


import { CarFront,Users, Bot } from 'lucide-react'

export default function UpcomingSection() {
    return (
        <div className=" sticky top-10 left-0 w-full z-20">
            <main>
                <section id="events" className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl text-white mt-16 font-bold mb-12 text-center">Upcoming Events</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="bg-gradient-to-r from-blue-500 to-teal-500 dark:from-blue-700 dark:to-teal-700 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <CarFront className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-blue-500">
                                    Driftology
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg font-medium opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Join us for the journey of building your first automobile
                                </p>
                                <p className="text-blue-500 text-lg font-semibold">
                                    November, 2024
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="bg-gradient-to-r from-green-500 to-teal-500 dark:from-green-700 dark:to-teal-700 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    {/* Insert your icon here, example: */}
                                    <Bot className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-green-500">
                                    Robowar
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg font-medium opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Showcase your robotics skills and compete with teams from across the country.
                                </p>
                                <p className="text-green-500 text-lg font-semibold">
                                    December, 2024
                                </p>
                            </div>

                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="bg-gradient-to-r from-purple-500 to-indigo-500 dark:from-purple-700 dark:to-indigo-700 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <Users className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-purple-500">
                                    Industry Expert Talk
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg font-medium opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Learn from industry leaders about the latest trends in mechanical engineering.
                                </p>
                                <p className="text-purple-500 text-lg font-semibold">
                                    December, 2024
                                </p>
                            </div>

                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}