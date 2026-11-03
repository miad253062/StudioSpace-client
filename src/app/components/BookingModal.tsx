'use client'

import { FormEvent, useRef } from "react";
import { toast } from "react-toastify";
import { StudioType } from "../types/types";
import { useSession } from "../lib/auth-client";

interface BookingModalProps {
    studio: StudioType;
    title: string;
    rate: string;
    status: string
}

export default function BookingModal({ studio, title, rate, status }: BookingModalProps) {
    const modalRef = useRef<HTMLDialogElement>(null);
    const session = useSession()
    const {data} = session

    const handleBooking = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const formData = new FormData(e.currentTarget);
        const bookingData = {
            status: status,
            user: data?.user.name,
            email: data?.user.email,
            studio,
            date: formData.get("date"),
            duration: formData.get("duration"),
            totalCost: Number(formData.get("duration")) * Number(rate),
        };

        try {

            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/bookings`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(bookingData),
            });

            if (res.ok) {
                toast.success("Booking confirmed successfully!");
                modalRef.current?.close(); 
            } else {
                toast.error("Failed to confirm booking.");
            }
        } catch (error) {
            console.error("Booking Error:", error);
            toast.error("An error occurred while booking.");
        }
    };

    return (
        <>

            <button 
                onClick={() => modalRef.current?.showModal()}
                className="w-full bg-[#262f40] text-white p-4 rounded-2xl text-xl font-semibold hover:bg-gray-800 active:scale-95 transition-transform"
            >
                Book Workspace Now
            </button>


            <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-2xl mb-4">Book {title}</h3>
                    <p className="text-gray-600 mb-4">Select your dates and time to confirm your booking.</p>
                    
                    <form onSubmit={handleBooking} className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Date</label>
                            <input type="date" name="date" className="p-2 border rounded-xl" required />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-semibold">Duration (Hours)</label>
                            <input type="number" name="duration" min="1" className="p-2 border rounded-xl" placeholder="E.g., 2" required />
                        </div>

                        <div className="modal-action mt-6 flex gap-4 w-full">
                            <button 
                                type="button" 
                                onClick={() => modalRef.current?.close()} 
                                className="flex-1 border border-gray-300 p-3 rounded-xl hover:bg-gray-100"
                            >
                                Cancel
                            </button>
                            <button 
                                type="submit" 
                                className="flex-1 bg-[#262f49] text-white p-3 rounded-xl active:scale-98"
                            >
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
}