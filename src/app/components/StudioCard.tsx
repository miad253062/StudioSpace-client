import Image from "next/image";
import { StudioType } from "../types/types";
import Link from "next/link";
import { GoStarFill } from "react-icons/go";

interface StudioProp {
    studio: StudioType
}

function StudioCard ({studio}: StudioProp) {

    return (
        <div>
            <div className="border border-gray-200 rounded-2xl p-4 bg-white relative">
                <Image src={studio.imageURL} alt={studio.title} height={400} width={450} className="rounded-2xl mx-auto"></Image>
                <div className="p-2 space-y-4">
                    <h1 className="text-xl font-semibold md:text-2xl">{studio.title}</h1>
                    <div className="flex items-center gap-2 absolute top-5 left-7 bg-[#262f40] rounded-2xl p-1 text-white">
                        <GoStarFill className="text-yellow-500"/>
                        <p>{studio.rating}</p>
                    </div>
                    <p className="absolute top-5 right-7 font-semibold bg-[#262f40] rounded-xl text-white p-2">{studio.category}</p>
                    <p className="text-gray-600">{studio.location}</p>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <h1 className="text-2xl md:text-4xl font-bold">${studio.rate}</h1>
                            <sub className="text-gray-500">/ Hours</sub>
                        </div>
                        <Link href={`/studios/${studio._id}`} className="border rounded-xl bg-[#262f40] p-2 text-white">View Details</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudioCard