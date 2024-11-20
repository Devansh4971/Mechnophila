"use client"
import {ArrowRight} from "lucide-react"
import { useRouter } from 'next/navigation';

const RedirectButtonEvent = () => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push('/events-list');
    };

    return (
        <div className="flex items-center">
            <button onClick={handleRedirect} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 flex items-center justify-center">
                <p>View in Detail</p>
                <ArrowRight></ArrowRight>
            </button>
            
        </div>
    );
};

export default RedirectButtonEvent;
