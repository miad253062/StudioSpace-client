import Image from "next/image";
import Link from "next/link";

function Navbar () {
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
                            <li><Link href={'/'}>Home</Link></li>
                            <li><Link href={'/studios'}>Explore Studios</Link></li>
                            <li><Link href={'#'}>How It Works</Link></li>
                            <li><Link href={'#'}>About Us</Link></li>
                        </ul>
                    </div>

                    <div>
                        <div className="flex items-center gap-2">
                            <Link href={'/sign-in'}>Sign In</Link>
                            <Link href={'/sign-up'} className="px-2 py-1 bg-[#262f49] text-white rounded-xl font-bold">Sign Up</Link>
                        </div>
                    </div>
                </div>   
            </nav>
        </div>
    )
}

export default Navbar;