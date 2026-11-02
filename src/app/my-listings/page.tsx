'use client'
import MyListCard from "../components/MyListCard";
import { useSession } from "../lib/auth-client";
import { useEffect, useState } from "react";


function MyListing () {
    const { data: sessionData } = useSession();
    const [listings, setListings] = useState([]); 
    useEffect(() => {
        const fetchUserListing = async (email: string) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/my-listing/${email}`);
                const listData = await res.json();
                
                setListings(listData); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (sessionData?.user?.email) {
            fetchUserListing(sessionData.user.email);
        }
    }, [sessionData]); 

    return (
        <div className="container mx-auto">
            <div className="my-10 p-4">
                {
                    listings.length === 0? <div>
                        <h1 className="text-center text-2xl font-semibold text-[#262f40]">No Data Found!</h1>
                    </div>:
                    listings.map(card => <MyListCard key={card} userlist={card}></MyListCard>)
                }
            </div>
            
        </div>
    )
}

export default MyListing;