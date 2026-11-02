'use client'
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut, useSession } from "../lib/auth-client";
import { VscSignOut } from "react-icons/vsc";
import { MdArrowDropDown } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";

function Navbar () {
    const session = useSession()
    const pathname = usePathname();
    const {data, isPending} = session

    const handleSignOut = () => {
        signOut()
    }

    const isActive = (path: string) => pathname === path;

    return (
        <div className="border-b border-gray-200 p-2">
            <nav className="container mx-auto">
                <div className="flex items-center justify-between">
                    <Link href={'/'}>
                        <div className="flex items-center">
                            <Image src={'/logo.png'} alt="logo" width={50} height={50}></Image>
                            <div>
                                <h1 className="font-bold text-xl hidden md:inline">Studio<span className="text-[#262f49]">Space</span></h1>
                            </div>
                        </div>
                    </Link>
                
                    <div className="hidden md:inline">
                        <ul className="flex items-center gap-4 text-[#262f49]">
                            <li><Link href={'/'} className={isActive('/') ? "font-bold text-black border-b-2 border-[#262f49]" : ""}>Home</Link></li>
                            <li><Link href={'/studios'} className={isActive('/studios') ? "font-bold text-black border-b-2 border-[#262f49]" : ""}>Explore Studios</Link></li>
                            <li><Link href={'/#'} className={isActive('/how-it-works') ? "font-bold text-black border-b-2 border-[#262f49]" : ""}>How It Works</Link></li>
                            <li><Link href={'/#'} className={isActive('/about-us') ? "font-bold text-black border-b-2 border-[#262f49]" : ""}>About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        { isPending? (<span className="loading loading-spinner text-neutral"></span>) : data?.user.name as string? <div className="flex items-center gap-2">
                            <div className="avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind-CSS-Avatar-component" src={`${data?.user.image? data.user.image : "https://img.daisyui.com/images/profile/demo/yellingcat@192.webp"}`} />
                                </div>
                                </div>
                                <div className="dropdown dropdown-end dropdown-bottom">
                                        <div tabIndex={0} role="button" className="m-1">
                                            <MdArrowDropDown />
                                        </div>

                                        <ul
                                            tabIndex={0}
                                            className="dropdown-content menu bg-base-100 rounded-box z-50 w-52 max-w-[calc(100vw-2rem)] p-2 shadow-sm"
                                        >
                                            <li className="font-semibold">{data?.user.name}</li>
                                            <li className="text-xs text-gray-500">{data?.user.email}</li>
                                            <li><Link href={'#'}>Deshboard</Link></li>
                                            <li><Link href={'/add-studio'}>Add New Studio</Link></li>
                                            <li><Link href={'/my-listing'}>My Studio Listings</Link></li>
                                            <li><Link href={'/my-bookings'}>My Bookings</Link></li>
                                            <li><button onClick={handleSignOut} className="text-red-600"><VscSignOut />Logout</button></li>
                                        </ul>
                                        </div>
                                
                        </div> :
                            <div className="flex items-center gap-4">
                                <Link href={'/sign-in'} className="active:scale-98">Sign in</Link>
                                <Link className="px-3 py-1 bg-[#262f40] text-white rounded hover:bg-[#171e2c] active:scale-98" href={'/sign-up'}>Sign Up</Link>
                            </div>

                        }
                        
                    </div>
                </div>   
            </nav>
        </div>
    )
}

export default Navbar;