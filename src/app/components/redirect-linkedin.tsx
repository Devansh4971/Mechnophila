"use client"
import { useRouter } from 'next/navigation';
import { Linkedin } from 'lucide-react';

type Route1Props = {
    url: string;
};

const Route1 = ({ url }: Route1Props) => {
    const router = useRouter();

    const handleRedirect = () => {
        router.push(url);
    };

    return (
        <a href="#" className="inline-block p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors" onClick={(e) => {
            e.preventDefault(); // Prevent default anchor behavior
            handleRedirect();
        }}>
            <Linkedin className="h-6 w-6 text-blue-600" />
            <span className="sr-only">LinkedIn</span>
        </a>
    );
};

export default Route1;
