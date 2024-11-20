"use client"
import Image from 'next/image';

import {  Clock,  PartyPopper } from 'lucide-react'
import RedirectButtonEvent from './redirect-event';
export default function ConductedEvents() {
    return (
        <div className=" sticky top-10 left-0 w-full z-20">
            <main>
                <section id="upcomingEvents" className='py-16'>

                    <div className="container mx-auto px-6 py-16">
                        <h2 className="text-4xl font-bold text-center text-white dark:text-white mb-12">
                            Conducted Events
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                                <Image
                                    src="/profile-pics/inaguration.jpg"
                                    alt="Innauguration"
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md mb-4 border-4 border-transparent hover:border-yellow-500 transition-all duration-300"
                                />
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-yellow-500">
                                    Innauguration
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                                    Grand inauguration of Mechnophila, the technical club of the Mechanical Engineering Department at ABES Engineering College.
                                </p>
                                <div className='flex items-center gap-16'>
                                    <p className="text-gray-500 dark:text-gray-400 flex items-center text-sm">
                                        <PartyPopper className="h-4 w-4 mr-2 text-yellow-500" /> November,2023
                                    </p>
                                    <RedirectButtonEvent></RedirectButtonEvent>
                                </div>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                                <Image
                                    src="/profile-pics/kyd.jpg"
                                    alt="Know Your Department"
                                    width={400}
                                    height={200}
                                    className="w-full h-48 object-cover rounded-md mb-4 border-4 border-transparent hover:border-blue-500 transition-all duration-300"
                                />
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-blue-500">
                                    Know Your Department
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                                    Delved into the world of Mechanical Engineering , by understanding different Machines and Technologies.
                                </p>
                                <div className='flex items-center gap-16'>
                                    <p className="text-gray-500 dark:text-gray-400 flex items-center text-sm">
                                        <PartyPopper className="h-4 w-4 mr-2 text-yellow-500" /> June,2024
                                    </p>
                                    <RedirectButtonEvent></RedirectButtonEvent>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>

            </main>
        </div>
    )
}