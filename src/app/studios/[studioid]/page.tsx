import BookingModal from "@/app/components/BookingModal";
import { StudioType } from "@/app/types/types";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaLocationDot, FaStar } from "react-icons/fa6";




async function StudioDetailsPage({ params }: { params: Promise<{ studioid: string }> }) {
    const {studioid} = await params;


    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/studios/${studioid}`)
    const studio: StudioType = await res.json()

    




    return (
        <div className="container mx-auto p-4 lg:px-10 my-10">
            <div className="mb-8">
                <h1 className="text-3xl md:text-5xl font-bold mb-2">{studio.title}</h1>
                <p className="text-gray-500 text-lg flex items-center gap-2">
                    <FaLocationDot className="text-red-600"/> {studio.location} | <FaStar className="text-yellow-500"/> {studio.rating} Ratings | {studio.category}
                </p>
            </div>


            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                

                <div className="lg:col-span-2 space-y-8">

                    <div className="w-full h-100 md:h-125 relative rounded-3xl overflow-hidden shadow-lg">
                        <Image 
                            src={studio.imageURL} 
                            alt={studio.title} 
                            fill 
                            className="object-cover" 
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Workspace Overview</h2>
                        <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-wrap">
                            {studio.overview}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Amenities Provided</h2>
                        <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {studio.amenities?.map((amenity, index) => (
                                <li key={index} className="flex items-center gap-2 bg-gray-100 p-3 rounded-xl">
                                    <FaRegCheckCircle className="text-green-500" /> {amenity}
                                </li>
                            ))}
                        </ul>
                    </div>


                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
                        <div className="bg-gray-50 p-6 rounded-2xl border border-gray-200">
                            <p className="text-gray-500 italic">No reviews yet for this workspace.</p>
                        </div>
                    </div>
                </div>


                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-3xl shadow-xl border border-gray-100 sticky top-10">
                        <h3 className="text-3xl font-bold mb-4">${studio.rate} <span className="text-lg text-gray-500 font-normal">/ hour</span></h3>
                        
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-gray-600">
                                <span>Security Deposit:</span>
                                <span className="font-semibold">${studio.deposit}</span>
                            </div>
                            <div className="flex justify-between text-gray-600">
                                <span>Max Capacity:</span>
                                <span className="font-semibold">{studio.capacity} People</span>
                            </div>
                        </div>

                        <BookingModal 
                            studio={studio} 
                            title={studio.title} 
                            rate={studio.rate} 
                        />
                    </div>

                    <div className="bg-gray-50 p-6 rounded-3xl border border-gray-200">
                        <h3 className="text-xl font-semibold mb-4">Host Information</h3>
                        <div className="space-y-2">
                            <p className="text-lg font-medium">{studio.name}</p>
                            <p className="text-gray-600 break-all">{studio.email}</p>
                        </div>
                        <button className="mt-4 w-full border border-gray-400 p-2 rounded-xl hover:bg-gray-200 transition-colors">
                            Contact Host
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StudioDetailsPage