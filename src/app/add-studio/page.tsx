'use client'

import { FormEvent } from 'react';
import { StudioType } from '../types/types';
import { authClient, useSession } from '../lib/auth-client';
import { toast } from 'react-toastify';
import { redirect } from 'next/navigation';




function AddStudio () {
    const session = useSession()
    const {data} = session
    const handleAddStudio = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formdata = new FormData(e.currentTarget)
        const userData = Object.fromEntries(formdata) as unknown as StudioType
        userData.amenities = formdata.getAll('amenities') as string[]

        const { data: tokenData, error: tokenError } = await authClient.token();
        const jwtToken = tokenData?.token;
        console.log(jwtToken);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/add-studio`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`,
            },
            body: JSON.stringify(userData)
        })
        
        const data = await res.json()
        if(data.acknowledged){
            toast.success('Studio added successfully')
            redirect('/my-listings')
        }else{
            toast.error('Someting went wrong!')
        }
    }
    return (
        <div className="container mx-auto p-4">
            <h1 className='text-2xl md:text-4xl font-semibold text-center my-10'>Add New Studio</h1>
            <div className="border border-gray-200 p-4 rounded-2xl m-4 max-w-fit mx-auto">
                <form onSubmit={handleAddStudio} className="flex flex-col max-w-fit space-y-2">
                    <label>Name</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="name" defaultValue={data?.user.name} readOnly/>
                    <label>Email</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="email" name="email" defaultValue={data?.user.email} readOnly required/>
                    <label>Title</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="title" required/>
                    <label>Category</label>
                    <select className="p-2 border border-gray-300 rounded-2xl" name="category" required>
                        <option value="Photo Studios">Photo Studios</option>
                        <option value="Sound Stages">Sound Stages</option>
                        <option value="Podcast Rooms">Podcast Rooms</option>
                        <option value="Music Suites">Music Suites</option>
                        <option value="Art Workshops">Art Workshops</option>
                    </select>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4'>
                        <div className='flex flex-col space-y-2'>
                            <label>Hourly Rate</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="number" name="rate" required/>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Security Deposit</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="number" name="deposit" required/>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Max Capacity</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="number" name="capacity" required/>
                        </div>
                        <div className='flex flex-col space-y-2'>
                            <label>Rating (out of 5)</label>
                            <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="rating" required/>
                        </div>
                    </div>
                    
                    <label>Location</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="location" required/>
                    <label>Image URL</label>
                    <input className="p-2 border border-gray-300 rounded-2xl" type="text" name="imageURL" required/>
                    <label>Detailed Overview</label>
                    <textarea 
                        name="overview" 
                        className="p-2 border border-gray-300 rounded-2xl resize-none" 
                        placeholder="Write a detailed description of your studio..."
                    ></textarea>
                    <label>Amenities List:</label>
                    <div className="p-2 border border-gray-300 rounded-2xl items-center gap-4 justify-around grid grid-cols-3 md:grid-cols-5">
                            <label><input  type="checkbox" name="amenities" value="Wi-Fi" /> Wi-Fi</label>
                            <label><input type="checkbox" name="amenities" value="AC" /> AC</label>
                            <label><input type="checkbox" name="amenities" value="Lighting" /> Lighting</label>
                            <label><input type="checkbox" name="amenities" value="Green Screen" /> Green Screen</label>
                            <label><input type="checkbox" name="amenities" value="Parking" /> Parking</label>
                    </div>
                    <button className="bg-[#262f40] p-4 text-xl font-semibold rounded-2xl text-white my-4 active:scale-95" type="submit">Add Studio</button>
                </form>
            </div>
        </div>
    )
}

export default AddStudio;