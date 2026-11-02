import { StudioType } from "../types/types";
import StudioCard from "./StudioCard";

async function FeaturedSection () {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/feature`)
    const data:StudioType[] = await res.json()
    console.log(data)
    return (
        <div className="bg-[#f5f5f5] p-4 my-10">
            <div className="p-10 space-y-4 text-center">
                <p className="text-xl">Studio Spaces</p>
                <h1 className="text-2xl font-semibold md:text-4xl">Discover Spaces That Inspire Creativity</h1>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        data.map(topstudio => <StudioCard key={topstudio._id} studio = {topstudio}></StudioCard>)
                    }
                </div>
            </div>
        </div>
        
        
    )
}

export default FeaturedSection;