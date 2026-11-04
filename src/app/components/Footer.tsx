import Link from 'next/link';
import { FaFacebook, FaInstagram, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

export default function Footer() {
  return (
    <footer className="bg-[#262f49] text-white pt-16 pb-8 mt-auto">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12 mb-12">

        <div>
          <h1 className="font-bold text-2xl mb-4">Studio<span className="text-gray-400">Space</span></h1>
          <p className="text-gray-300 text-sm">Empowering creators with professional studio spaces tailored for every vision.</p>
        </div>

        <div>
          <h3 className="font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/studios">Explore Studios</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Categories</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link href="/studios?category=Photo+Studios">Photo Studios</Link></li>
            <li><Link href="/studios?category=Sound+Stages">Sound Stages</Link></li>
            <li><Link href="/studios?category=Podcast+Rooms">Podcast Rooms</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Newsletter</h3>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className="w-full p-2 mb-2 rounded bg-white/10 border border-white/20 text-sm"
          />
          <button className="w-full bg-white text-[#262f49] font-bold py-2 rounded text-sm">Subscribe</button>
        </div>
      </div>


      <div className="container mx-auto px-4 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-gray-400">© 2026 StudioSpace. All rights reserved. | Terms & Privacy</p>
        <div className="flex gap-4 text-xl">
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaInstagram /></Link>
          <Link href="#"><FaXTwitter /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </div>
      </div>
    </footer>
  );
}
