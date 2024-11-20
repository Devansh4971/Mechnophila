"use client "
import Image from 'next/image';
import Route1 from './redirect-linkedin';
export default function TeamMembers() {
    return (
        <div>
            <main>
            <div>    
                <section className="px-4 md:px-6 lg:px-8 ">
                    <section id="team" className="py-8 md:py-16 ">
                        <div className="container mx-auto px-4 md:px-6">
                            <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Club Coordinators</h2>
                            {/* Changed grid to be responsive */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
                                {/* Updated card styling for better visibility on mobile */}
                                <div className="bg-white p-4 md:p-6 rounded-lg shadow-xl text-center text-white transform transition-transform duration-300 hover:scale-105">
                                    {/* Made image size responsive */}
                                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
                                        <Image
                                            src="/profile-pics/mn.jpg"
                                            alt="Manish Mangal"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full shadow-md"
                                        />
                                    </div>
                                    {/* Made text sizes responsive */}
                                    <h3 className="text-xl md:text-2xl text-black font-semibold mb-2">Manish Mangal</h3>
                                    <p className=" text-black mb-2 md:mb-4">Assistant Professor at ABES Engineering College</p>
                                    <p className="text-sm text-black md:text-lg mb-4">MTech , Fluids Engineering</p>
                                    <Route1 url="https://www.linkedin.com/in/manish-mangal-8b2706155/"></Route1>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-xl text-center text-black transform transition-transform duration-300 hover:scale-105">
                                    <div className="relative w-32 h-32 mx-auto mb-6">
                                        <Image
                                            src="/profile-pics/sir-3.jpg"
                                            alt="Ankur Dixit"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full shadow-md"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2">Ankur Dixit</h3>
                                    <p className="text-black mb-4">Assistant Professor at ABES Engineering College</p>
                                    <p className="text-lg text-black mb-4">MTech , Automobile Engineering</p>
                                    <Route1 url="https://www.linkedin.com/in/ankur-dixit-35981b15b/"></Route1>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="team2" className='py-8 md:py-16  '>
                        <div className='container mx-auto px-4 md:px-6'>
                            <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center"> Leads of Club</h2>
                            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-12'>
                                <div className="bg-white p-6 rounded-lg shadow-xl text-center text-black transform transition-transform duration-300 hover:scale-105">
                                    <div className="relative w-32 h-32 mx-auto mb-6">
                                        <Image
                                            src="/profile-pics/abh.jpg"
                                            alt="Abhrant"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full shadow-md"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2">Abhrant Singh</h3>
                                    <p className="text-gray-600 mb-4">General Secetary</p>
                                    <p className="text-lg mb-4">Mechanical Engineering,Class of 2026</p>
                                    <Route1 url="https://www.linkedin.com/in/singhabhrant?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "></Route1>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-xl text-center text-black transform transition-transform duration-300 hover:scale-105">
                                    <div className="relative w-32 h-32 mx-auto mb-6">
                                        <Image
                                            src="/profile-pics/boo.jpg"
                                            alt="Gyan"
                                            layout="fill"
                                            objectFit="cover"
                                            className="rounded-full shadow-md"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-semibold mb-2">Gyanendra Jha</h3>
                                    <p className="text-gray-600 mb-4">Joint Secretary</p>
                                    <p className="text-lg mb-4">Mechanical Engineering, Class of 2026</p>
                                    <Route1 url="https://www.linkedin.com/in/gyanendra-jha-747b4b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "></Route1>
                                </div>
                            </div>
                        </div>
                    </section>
                </section>
                </div>
            </main>
        </div>
    )
}