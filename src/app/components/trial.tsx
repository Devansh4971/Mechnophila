import Appbar from "../components/appbar";
import Route1 from "../components/redirect-linkedin";
import Image from 'next/image';

export default function teamMembers() {
    return (
        // Added background color and min-height for better overall appearance
        <div className="bg-gray-900 text-white min-h-screen">
            <Appbar></Appbar>
            {/* Added responsive padding */}
            <section className="px-4 md:px-6 lg:px-8">
                {/* Added responsive padding and adjusted container */}
                <section id="team" className="py-8 md:py-16">
                    <div className="container mx-auto px-4 md:px-6">
                        {/* Made heading responsive and centered */}
                        <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Club Coordinators</h2>
                        {/* Changed grid to be responsive */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                            {/* Updated card styling for better visibility on mobile */}
                            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-xl text-center text-white transform transition-transform duration-300 hover:scale-105">
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
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Manish Mangal</h3>
                                <p className="text-gray-300 mb-2 md:mb-4">Assistant Professor at ABES Engineering College</p>
                                <p className="text-sm md:text-lg mb-4">MTech , Fluids Engineering</p>
                                <Route1 url="https://www.linkedin.com/in/manish-mangal-8b2706155/"></Route1>
                            </div>
                            {/* Repeated the same changes for the second card */}
                            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-xl text-center text-white transform transition-transform duration-300 hover:scale-105">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
                                    <Image
                                        src="/profile-pics/sir-3.jpg"
                                        alt="Ankur Dixit"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full shadow-md"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Ankur Dixit</h3>
                                <p className="text-gray-300 mb-2 md:mb-4">Assistant Professor at ABES Engineering College</p>
                                <p className="text-sm md:text-lg mb-4">MTech , Automobile Engineering</p>
                                <Route1 url="https://www.linkedin.com/in/ankur-dixit-35981b15b/"></Route1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Applied the same changes to all other sections */}
                <section id="team2" className='py-8 md:py-16'>
                    <div className='container mx-auto px-4 md:px-6'>
                        <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Leads of Club</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-xl text-center text-white transform transition-transform duration-300 hover:scale-105">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
                                    <Image
                                        src="/profile-pics/abh.jpg"
                                        alt="Abhrant"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full shadow-md"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Abhrant Singh</h3>
                                <p className="text-gray-300 mb-2 md:mb-4">General Secetary</p>
                                <p className="text-sm md:text-lg mb-4">Mechanical Engineering,Class of 2026</p>
                                <Route1 url="https://www.linkedin.com/in/singhabhrant?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "></Route1>
                            </div>
                            <div className="bg-gray-800 p-4 md:p-6 rounded-lg shadow-xl text-center text-white transform transition-transform duration-300 hover:scale-105">
                                <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto mb-4 md:mb-6">
                                    <Image
                                        src="/profile-pics/boo.jpg"
                                        alt="Gyan"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full shadow-md"
                                    />
                                </div>
                                <h3 className="text-xl md:text-2xl font-semibold mb-2">Gyanendra Jha</h3>
                                <p className="text-gray-300 mb-2 md:mb-4">Joint Secretary</p>
                                <p className="text-sm md:text-lg mb-4">Mechanical Engineering, Class of 2026</p>
                                <Route1 url="https://www.linkedin.com/in/gyanendra-jha-747b4b283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "></Route1>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Event Management Department */}
                <section id="team3" className='py-8 md:py-16'>
                    <div className='container mx-auto px-4 md:px-6'>
                        <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Event Management Department</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                            {/* Add team members here with the same structure as above */}
                        </div>
                    </div>
                </section>
                {/* Finance Department */}
                <section id="team4" className='py-8 md:py-16'>
                    <div className='container mx-auto px-4 md:px-6'>
                        <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Finance Department</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                            {/* Add team members here with the same structure as above */}
                        </div>
                    </div>
                </section>
                {/* Technical Department */}
                <section id="team5" className='py-8 md:py-16'>
                    <div className='container mx-auto px-4 md:px-6'>
                        <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Technical Department</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                            {/* Add team members here with the same structure as above */}
                        </div>
                    </div>
                </section>
                {/* Social Media Department */}
                <section id="team6" className='py-8 md:py-16'>
                    <div className='container mx-auto px-4 md:px-6'>
                        <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Social Media Department</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                            {/* Add team members here with the same structure as above */}
                        </div>
                    </div>
                </section>
                {/* Visual Media Department */}
                <section id="team7" className='py-8 md:py-16'>
                    <div className='container mx-auto px-4 md:px-6'>
                        <h2 className="text-2xl md:text-3xl text-white mt-8 md:mt-16 font-bold mb-8 md:mb-12 text-center">Visual Media Department</h2>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                            {/* Add team members here with the same structure as above */}
                        </div>
                    </div>
                </section>
            </section>
        </div>
    )
}