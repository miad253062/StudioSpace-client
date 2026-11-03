import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-center px-4">
            <h1 className="text-7xl font-bold text-[#262f49] mb-2">404</h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
                Page Not Found!
            </h2>
            <p className="text-gray-600 max-w-md mb-8">
                Sorry, the page you are looking for might have been removed or the link is incorrect.
            </p>
            <Link 
                href="/" 
                className="bg-[#262f49] text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-800 active:scale-95 transition-transform"
            >
                Back to Home
            </Link>
        </div>
    );
}