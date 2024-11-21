"use client";
import { useState } from "react";
import {  Menu, X } from "lucide-react";
import RedirectButton from './redirect';
import Route2 from "./redirect-gallery";
import Route3 from "./redirect-home";

export default function Appbar() {
    
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    

    return (

            <div>
            
            <div className=" relative inset-0 top-0 left-0 w-full z-20">
                
                {/* Blended navbar with transparent and shadow for text readability */}
                <nav className="container mx-auto px-6 py-3 flex justify-between items-center bg-transparent backdrop-blur-md text-gray-900 ">
                    <Route3 url="/" label="Mechnophila"></Route3>
                    <div className="hidden md:flex space-x-6 items-center">
                        <Route2 url="events-list" label="Events"></Route2>
                        <Route2 url="/news" label="News"></Route2>
                        <Route2 url="team-members" label="Team Members"></Route2>
                        <Route2 url="/gallery" label="Gallery"></Route2>
                        <RedirectButton />
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2 rounded-md hover:bg-gray-800 dark:hover:bg-gray-200">
                            {mobileMenuOpen ? <X className="h-6 w-6 "></X> : <Menu className="h-6 bg-gray-400 w-6"></Menu>}
                        </button>
                    </div>
                    {
                        mobileMenuOpen && (
                            <div className="mt-4 space-y-4 bg-gray-800 p-4 rounded-md shadow-lg">
                                <div className="block text-lg text-white hover:text-blue-400">
                                    <Route2 url="events-list" label="Events" />
                                </div>
                                <div className="block text-lg text-white hover:text-blue-400">
                                    <Route2 url="/news" label="News" />
                                </div>
                                <div className="block text-lg text-white hover:text-blue-400">
                                    <Route2 url="team-members" label="Team Members" />
                                </div>
                                <div className="block text-lg text-white hover:text-blue-400">
                                    <Route2 url="/gallery" label="Gallery" />
                                </div>
                                <RedirectButton />
                            </div>
                        )
                    }

                </nav>
            </div>

            </div>        

    );
}
