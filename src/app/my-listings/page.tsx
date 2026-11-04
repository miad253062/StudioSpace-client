'use client'
import Link from "next/link";
import MyListCard from "../components/MyListCard";
import { useSession } from "../lib/auth-client";
import { useEffect, useState } from "react";
import { StudioType } from "../types/types";

function MyListing () {
    const { data: sessionData } = useSession();
    const [listings, setListings] = useState<StudioType[]>([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchUserListing = async (email: string) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/my-listing/${email}`);
                const listData = await res.json();
                
                setListings(listData); 
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false); 
            }
        };

        if (sessionData?.user?.email) {
            fetchUserListing(sessionData.user.email);
        } else if (sessionData === null) {
            setLoading(false); 
        }
    }, [sessionData]); 

    const handleRemoveItem = (id: string) => {
        setListings((prevListings) => prevListings.filter(item => item._id !== id));
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner text-neutral text-4xl"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto p-4">
            <div className="text-center my-10">
                <h1 className="text-2xl md:text-4xl font-semibold">My Listing</h1>
            </div>
            <div className="my-10 flex flex-col gap-4">
                {
                    listings.length === 0 ? (
                        <div>
                            <h1 className="text-center text-2xl font-semibold text-[#262f40]">No Data Found!</h1>
                        </div>
                    ) : (
                        listings.map(card => (
                            <MyListCard 
                                key={card._id} 
                                userlist={card}
                                onDelete={handleRemoveItem}
                            />
                        ))
                    )
                }
            </div>
            <Link href={'/add-studio'} className="flex justify-center border bg-[#262f49] rounded-xl p-2 text-white font-semibold active:scale-97">Add One</Link>
        </div>
    )
}

export default MyListing;