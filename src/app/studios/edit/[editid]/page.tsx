'use client'

import { FormEvent, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { StudioType } from '@/app/types/types';
import { use } from 'react';

interface EditProps {
    params: Promise<{ editid: string }>;
}

export default function EditStudio({ params }: EditProps) {
    const { editid } = use(params);
    const router = useRouter();

    const [data, setData] = useState<StudioType | null>(null);

    useEffect(() => {
        const fetchStudioData = async () => {
            try {
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/studios/edit/${editid}`);
                const result = await res.json();
                setData(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        if (editid) {
            fetchStudioData();
        }
    }, [editid]);
    if (!data) {
    return <div className="text-center mt-20 text-xl font-semibold">Loading data...</div>;
}

    const handleEditStudio = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formdata = new FormData(e.currentTarget);
        const userData = Object.fromEntries(formdata) as unknown as StudioType;
        userData.amenities = formdata.getAll('amenities') as string[];

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/studios/edit/${editid}`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            
            const responseData = await res.json();
            
            if (responseData.acknowledged || responseData.modifiedCount > 0) {
                toast.success('Studio updated successfully');
                router.push('/my-listings'); 
            } else {
                toast.error('Something went wrong or no changes were made!');
            }
        } catch (error) {
            toast.error('Server error occurred!');
        }
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className='text-2xl md:text-4xl font-semibold text-center my-10'>Update Studio</h1>
            <div className="border border-gray-200 p-4 rounded-2xl m-4 max-w-fit mx-auto">
                <form onSubmit={handleEditStudio} className="flex flex-col max-w-fit space-y-2">
                    <label>Name</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="name" defaultValue={data.name} readOnly/>
                    
                    <label>Email</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="email" name="email" defaultValue={data.email} readOnly required/>
                    
                    <label>Title</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="title" defaultValue={data.title} required/>
                    
                    <label>Category</label>
                    <select className="p-2 border border-gray-300 rounded-2xl" name="category" defaultValue={data.category} required>
                        <option value="Photo Studios">Photo Studios</option>
                        <option value="Sound Stages">Sound Stages</option>
                        <option value="Podcast Rooms">Podcast Rooms</option>
                        <option value="Music Suites">Music Suites</option>
                        <option value="Art Workshops">Art Workshops</option>
                    </select>
                    
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        <div className='flex flex-col space-y-2'>
                            <label>Hourly Rate</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="number" name="rate" defaultValue={data.rate} required/>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Security Deposit</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="number" name="deposit" defaultValue={data.deposit} required/>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Max Capacity</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="number" name="capacity" defaultValue={data.capacity} required/>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Rating (out of 5)</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="rating" defaultValue={data.rating} required/>
                        </div>
                    </div>
                    
                    <label>Location</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="location" defaultValue={data.location} required/>
                    
                    <label>Image URL</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="imageURL" defaultValue={data.imageURL} required/>
                    
                    <label>Detailed Overview</label>
                    <textarea 
                        name="overview" 
                        className="p-2 border border-gray-300 rounded-2xl resize-none" 
                        placeholder="Write a detailed description of your studio..." 
                        defaultValue={data.overview}
                    ></textarea>
                    
                    <label>Amenities List:</label>
                    <div className="p-2 border border-gray-300 rounded-2xl items-center gap-4 justify-around grid grid-cols-3 md:grid-cols-5">
                            <label><input type="checkbox" name="amenities" value="Wi-Fi" defaultChecked={data.amenities?.includes("Wi-Fi")} /> Wi-Fi</label>
                            <label><input type="checkbox" name="amenities" value="AC" defaultChecked={data.amenities?.includes("AC")} /> AC</label>
                            <label><input type="checkbox" name="amenities" value="Lighting" defaultChecked={data.amenities?.includes("Lighting")} /> Lighting</label>
                            <label><input type="checkbox" name="amenities" value="Green Screen" defaultChecked={data.amenities?.includes("Green Screen")} /> Green Screen</label>
                            <label><input type="checkbox" name="amenities" value="Parking" defaultChecked={data.amenities?.includes("Parking")} /> Parking</label>
                    </div>
                    
                    <button className="bg-[#262f40] p-4 text-xl font-semibold rounded-2xl text-white my-4 active:scale-95" type="submit">
                        Update Studio
                    </button>
                </form>
            </div>
        </div>
    );
}