import Image from "next/image";
import { BookingType } from "../types/types";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";



interface UserListDataProps {
    userlist: BookingType
}

function MyBooking ({userlist}: UserListDataProps) {
    const handleBooking = async(bookingid: string) => {
        const updateData = { status: 'canceled' };
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/status/${bookingid}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updateData)
            });
            
            const responseData = await res.json();
            
            if (responseData.acknowledged || responseData.modifiedCount > 0) {
                toast.success('Booking Canceled');
                window.location.reload()
            } else {
                toast.error('Something went wrong or no changes were made!');
            }
        } catch (error) {
            toast.error('Server error occurred!');
        }
    }

    const handleDelete = async(bookingid: string) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/bookings/${bookingid}`, {
                method: "DELETE",
                
            });
            
            const responseData = await res.json();
            
            if (responseData.acknowledged || responseData.deletedCount > 0) {
                toast.success('Booking Deleted');
                window.location.reload()

            } else {
                toast.error('Something went wrong or no changes were made!');
            }
        } catch (error) {
            toast.error('Server error occurred!');
        }
    }
    return (
        <div>
            <div className="flex items-center justify-between border border-dashed rounded-2xl p-4 border-gray-300">
                
                <div className="flex items-center gap-5">
                    <Image className="rounded-2xl" src={userlist.studio.imageURL} alt={userlist.studio.title} height={80} width={80}></Image>
                    <div>
                        <Link href={`/studios/${userlist.studio._id}`}>
                            <small className="border px-2 py-1  border-blue-300 text-blue-300 rounded-xl">{userlist.status}</small>
                            <h1 className="font-semibold text-xl">{userlist.studio.title}</h1>
                            <p className="text-gray-500">{userlist.studio.overview}</p>
                        </Link>
                    </div>
                    
                </div>

                <div className="text-gray-500 text-xs space-y-1">
                    <p>{userlist.duration} Hour</p>
                    <p>Total Cost: {userlist.totalCost}$</p>
                    <p>Date: {userlist.date}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                    {
                        userlist.status ==='pending' && <div>
                            <button onClick={() => {handleBooking(userlist._id)}} className="border p-1 rounded-xl border-red-600 text-red-600 font-semibold active:scale-95">Cancel Booking</button>
                        </div>
                    }
                    <button onClick={() => {handleDelete(userlist._id)}} className="border p-1 rounded-xl border-red-600 text-red-600 font-semibold active:scale-95">Delete Booking</button>
                </div>
            </div>
        </div>
    )
}

export default MyBooking;