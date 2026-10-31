import { FaCamera, FaMicrophoneAlt, FaMusic, FaPaintBrush, FaVideo } from 'react-icons/fa';
import Link from 'next/link';

const categories = [
  { name: 'Photo Studios', icon: FaCamera },
  { name: 'Sound Stages', icon: FaVideo },
  { name: 'Podcast Rooms', icon: FaMicrophoneAlt },
  { name: 'Music Suites', icon: FaMusic },
  { name: 'Art Workshops', icon: FaPaintBrush },
];



export default function CategoryGrid() {
  return (
    <section className="py-16 container mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10">Browse by Studio Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            href={`/studios?category=${cat.name}`}
            className="flex flex-col items-center justify-center p-6 border rounded-xl"
          >
            <cat.icon className="text-4xl text-[#262f49] mb-4" />
            <span className="font-medium text-center">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
