"use client"
import { ArrowRight } from 'lucide-react';
import { useRouter } from 'next/navigation';

const RedirectButton = () => {
    const router = useRouter();  

    const handleRedirect = () => {
        router.push('https://docs.google.com/forms/d/e/1FAIpQLSfnot0tojIeiEI6wD9QelgNDjmgyiDuheMTCdenWFlx9q5Ejg/viewform');
    };

    return (
        <button onClick={handleRedirect} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
            <p>Join Us</p>
            <ArrowRight></ArrowRight>
        </button>
    );
};

export default RedirectButton;
