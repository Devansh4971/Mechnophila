"use client "
import Image from 'next/image';
import Route1 from './redirect-linkedin';
export default function TeamMembers() {
    return (
        <div>
            <main>

                <section id="team" className="py-16 ">

                    <div className="container mx-56 px-6">
                        <h2 className="text-3xl sticky text-white mt-16 font-bold mb-12 mx-96">Club Coordinators</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

                            {/* Team Member 1 */}

                            <div className="bg-white p-6 rounded-lg  shadow-xl text-center text-black transform transition-transform duration-300 hover:scale-105">
                                <div className="relative w-32 h-32 mx-auto mb-6">
                                    <Image
                                        src="/profile-pics/mn.jpg"
                                        alt="Manish Mangal"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full shadow-md"
                                    />
                                </div>
                                <h3 className="text-2xl font-semibold mb-2">Manish Mangal</h3>
                                <p className="text-gray-600 mb-4">Assistant Professor at ABES Engineering College</p>
                                <p className="text-lg mb-4">MTech , Fluids Engineering</p>
                                <Route1 url="https://www.linkedin.com/in/manish-mangal-8b2706155/"></Route1>
                            </div>


                            {/* Team Member 2 */}

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
                                <p className="text-gray-600 mb-4">Assistant Professor at ABES Engineering College</p>
                                <p className="text-lg mb-4">MTech , Automobile Engineering</p>
                                <Route1 url="https://www.linkedin.com/in/ankur-dixit-35981b15b/"></Route1>
                            </div>





                        </div>
                    </div>
                </section>

                <section id="team1" className='py-16 '>
                    <div className='container mx-56 px-6'>
                        <h2 className="text-3xl sticky text-white mt-16 font-bold mb-12 mx-96"> Head of the Club</h2>
                        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
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
                                <Route1 url=""></Route1>
                            </div>


                            {/* Team Member 2 */}

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

            </main>
        </div>
    )
}