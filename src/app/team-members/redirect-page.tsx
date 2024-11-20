"use client"
import { useRouter } from "next/navigation";
type Route2Props = {
    url: string;
    label:string;
};

const Route2 = ({ url , label}: Route2Props) => {
    const router = useRouter();

    const handleRedirectGallery = () => {
        router.push(url)

    }


    return (
        <a href="team" className="hover:text-blue-500 text-lg  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700  " onClick={(e) => {
             
            handleRedirectGallery();
        }}>
            {label}
        </a>
    );
}

export default Route2