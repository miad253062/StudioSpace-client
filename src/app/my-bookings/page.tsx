'use client'
import MyListCard from "../components/MyListCard";
import { useSession } from "../lib/auth-client";
import { useEffect, useState } from "react";


function MyBookings () {
    const { data: sessionData } = useSession();
    const [bookings, setbookings] = useState([]); 
    useEffect(() => {
        const fetchUserListing = async (email: string) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/bookings/${email}`);
                const listData = await res.json();
                
                setbookings(listData); 
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
                    bookings.length === 0? <div>
                        <h1 className="text-center text-2xl font-semibold text-[#262f40]">No Data Found!</h1>
                    </div>:
                    bookings.map(card => <MyListCard key={card} userlist={card}></MyListCard>)
                }
            </div>
            
        </div>
    )
}

export default MyBookings;