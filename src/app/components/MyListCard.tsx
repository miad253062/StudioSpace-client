'use client'
import Image from "next/image";
import { StudioType } from "../types/types";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "../lib/auth-client";

interface UserListDataProps {
    userlist: StudioType;
    onDelete: (id: string) => void;
}

function MyListCard ({userlist, onDelete}: UserListDataProps) {
    
    const handleDelete = async(id: string) => {
        const { data: tokenData, error: tokenError } = await authClient.token();
        const jwtToken = tokenData?.token;
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_ADDRESS}/delete/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${jwtToken}`,
            },
        })

        const data = await res.json()
        if(data.deletedCount > 0){
            toast.success("Successfully Deleted.")
            onDelete(id);
        }
    }
    
    return (
        <div>
            <div className="flex items-center justify-between border p-4 rounded-2xl border-gray-300">
                <Link href={`/studios/${userlist._id}`}>
                    <div className="flex items-center gap-4">
                        <Image src={userlist.imageURL} alt={userlist.name} width={50} height={50}/>
                        <div>
                            <h1 className="text-xl font-semibold">Title: {userlist.title}</h1>
                            <p className="text-gray-500 max-w-150">Description: {userlist.overview}</p>
                        </div>
                    </div>
                </Link>
                
                <div className="flex items-center gap-4">
                    <Link href={`/studios/edit/${userlist._id}`} className="p-2 rounded-2xl bg-[#262f49] text-white font-semibold cursor-pointer">Update</Link>
                    
                    <button className="p-2 rounded-2xl border border-red-600 text-red-600 font-semibold cursor-pointer" popoverTarget={`modal-${userlist._id}`}>Delete</button>

                    <div className="modal" id={`modal-${userlist._id}`} popover="auto">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Are you really want to delete!</h3>
                            <div className="modal-action">
                            <button onClick={() => {handleDelete(userlist._id)}} className="p-2 rounded-2xl font-semibold cursor-pointer" popoverTarget={`modal-${userlist._id}`} popoverTargetAction="hide">Yes</button>
                            <button className="p-2 rounded-2xl  font-semibold cursor-pointer" popoverTarget={`modal-${userlist._id}`} popoverTargetAction="hide">No</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyListCard;