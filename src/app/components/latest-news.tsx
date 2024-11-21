"use client"
import { Trophy, Award  } from 'lucide-react'
export default function LatestNews() {
    return (
        <div className="sticky top-10 left-0 w-full z-20">
            <main>

                <section id="news" className="py-16">
                    <div className="container mx-auto px-6">
                        <h2 className="text-3xl font-bold text-white mb-12 text-center">Latest Achievements</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="bg-gradient-to-r from-red-500 to-orange-500 dark:from-red-700 dark:to-orange-700 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <Trophy className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-red-500">
                                    SAE
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg font-medium opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Team Vahak grabbed AIR 17 under the captaincy of G.S Abhrant Singh
                                </p>
                                <p className="text-red-500 text-lg font-semibold">
                                    August,2024
                                </p>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl text-center transition-transform transform hover:scale-105 duration-300 ease-in-out">
                                <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 dark:from-yellow-700 dark:to-yellow-800 rounded-full p-4 w-20 h-20 flex items-center justify-center mx-auto mb-4">
                                    <Award className="h-10 w-10 text-white" />
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-yellow-500">
                                    CII-Majestic
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4 text-lg font-medium opacity-80 hover:opacity-100 transition-opacity duration-200">
                                    Students won a total prize pool of Rs 60,000 in the CII-Majestic Competition
                                </p>
                                <p className="text-yellow-500 text-lg font-semibold">
                                    September,2024
                                </p>
                            </div>


                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}