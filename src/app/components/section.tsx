"use client";

import RedirectButton from "./redirect";


export default function Section1() {
    return (
        <div className=" sticky top-5 left-0 w-full z-25">
            <main >
                <section className="container mx-auto mt-12 px-6 py-16 text-center">
                    <h1 className="text-4xl mt-28 text-white md:text-6xl font-bold mb-4 ">Welcome to Mechnophila</h1>
                    <p className="text-xl mb-8 text-white">The Technical Club of Mechanical Engineering Department</p>
                    <div className="flex items-center justify-center">
                        <RedirectButton></RedirectButton>
                    </div>
                </section>

            </main>
        </div>
    )
}