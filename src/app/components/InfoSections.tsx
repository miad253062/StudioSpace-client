import { FaSearch, FaClock, FaCheckCircle, FaRocket } from 'react-icons/fa';
import { MdVerifiedUser, MdSupportAgent, MdSecurity, MdShield } from 'react-icons/md';

export default function InfoSections() {
  return (
    <div className="py-16 bg-white">
      <section className="container mx-auto mb-20 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How Booking Works</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { icon: FaSearch, title: 'Discover Spaces', desc: 'Browse our curated collection' },
            { icon: FaClock, title: 'Select Shoot Hours', desc: 'Choose your ideal timing' },
            { icon: FaCheckCircle, title: 'Book Instantly', desc: 'Secure your spot in seconds' },
            { icon: FaRocket, title: 'Create & Produce', desc: 'Bring your vision to life' },
          ].map((step, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#262f49]/10 rounded-full flex items-center justify-center mb-4 text-[#262f49]">
                <step.icon className="text-2xl" />
              </div>
              <h3 className="font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 bg-gray-50 py-12 rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-12">Host Guarantee & Creator Support</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: MdShield, title: 'Liability Protection', desc: 'Full coverage for your production' },
            { icon: MdVerifiedUser, title: 'Verified Profiles', desc: 'Trusted hosts and creators' },
            { icon: MdSecurity, title: 'Equipment Safety', desc: 'Secure environments for gear' },
            { icon: MdSupportAgent, title: '24/7 Support', desc: 'Always here to help you' },
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-4">
              <item.icon className="text-3xl text-[#262f49]" />
              <div>
                <h3 className="font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
