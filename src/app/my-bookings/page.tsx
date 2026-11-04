'use client'
import MyBooking from "../components/MyBookingCard";
import { useSession } from "../lib/auth-client";
import { useEffect, useState } from "react";
import { BookingType } from "../types/types";
import Link from "next/link";

function MyBookings () {
    const { data: sessionData } = useSession();
    const [bookings, setbookings] = useState<BookingType[]>([]); 
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        const fetchUserListing = async (email: string) => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/bookings/${email}`);
                const listData = await res.json();
                setbookings(listData); 
            } catch (error) {
                console.error(error);
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
        setbookings((prevBookings) => prevBookings.filter(booking => booking._id !== id));
    }

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <span className="loading loading-spinner text-neutral text-4xl"></span>
            </div>
        );
    }

    return (
        <div className="container mx-auto">
            <div className="text-center my-10">
                <h1 className="text-2xl font-semibold md:text-4xl">My Booking</h1>
            </div>
            <div className="my-10 p-4 grid grid-cols-1 items-center gap-4">
                {
                    bookings.length === 0 ? (
                        <div>
                            <h1 className="text-center text-2xl font-semibold text-[#262f40]">No Data Found!</h1>
                        </div>
                    ) : (
                        bookings.map(card => (
                            <MyBooking 
                                key={card._id} 
                                userlist={card} 
                                onDelete={handleRemoveItem}
                            />
                        ))
                    )
                }
                <Link href={'/studios'} className="text-center border bg-[#262f49] rounded-xl p-2 text-white font-semibold active:scale-97">Book a Studios</Link>
            </div>
        </div>
    )
}

export default MyBookings;