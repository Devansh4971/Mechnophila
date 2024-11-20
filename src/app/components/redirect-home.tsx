"use client"
import { useRouter } from "next/navigation";
type Route3Props = {
    url: string;
    label: string;
};

const Route3 = ({ url, label }: Route3Props) => {
    const router = useRouter();

    const handleRedirectHome = () => {
        router.push(url)

    }


    return (
        <a className="hover:text-blue-500 text-3xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-700  " onClick={(e) => {

            handleRedirectHome()
        }}>
            {label}
        </a>
    );
}

export default Route3