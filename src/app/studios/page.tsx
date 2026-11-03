import Link from "next/link";
import StudioCard from "../components/StudioCard"
import { StudioType } from "../types/types"


interface StudiosProps {
  searchParams: Promise<{ category?: string }>;
}
async function Studios ({searchParams}: StudiosProps) {
    const params = await searchParams;
    const categoryName = params.category;
    let url = `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/studios`
    if(categoryName){
        url = `${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/studios?category=${categoryName}`
    }
    const res = await fetch(url, {cache: 'no-store'})
    const data: StudioType[] = await res.json()
    return (
        <div className="container mx-auto p-4">
            <div>
                <h1 className="text-2xl md:text-4xl font-semibold my-10 text-center">All Studios</h1>
                <div className="text-center">
                    {
                     data.length === 0&& <div className="border p-4 border-gray-300 rounded-2xl space-y-4">
                        <h1 className="text-xl md:text-2xl text-gray-500">No Data Found!</h1>
                        <Link href={'/'} className="border p-2 rounded-2xl bg-[#262f49] text-white font-semibold">Go back to home</Link>
                     </div>
                    }
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    
                    data.map(studio => <StudioCard key={studio._id} studio={studio}></StudioCard>)
                }
            </div>
        </div>
        
    )
}

export default Studios