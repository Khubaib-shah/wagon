import Link from "next/link";

const cols = [
  {
    title: "Our top cities",
    links: ["San Francisco", "Miami", "San Diego", "East Bay", "Long Beach"],
  },
  {
    title: "Connect with us",
    links: ["Los Angeles", "Washington DC", "Seattle", "Portland", "Nashville"],
  },
  {
    title: "Learn more",
    links: ["New York City", "Orange County", "Atlanta", "Charlotte", "Denver"],
  },
  {
    title: "Service Regions",
    links: ["Chicago", "Phoenix", "Las Vegas", "Sacramento", "Oklahoma City"],
  },
  {
    title: "Help Center",
    links: ["Columbus", "New Mexico", "Albuquerque", "Sacramento", "New Orleans"],
  },
];

export const Footer = () => (
  <footer className="bg-[#1e1e1e] text-white pt-16 pb-8">
    <div className="max-w-7xl !mx-auto px-4 sm:px-6 lg:px-8">
      {/* Main columns */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 border-b border-white/10 pb-14">
        {cols.map((col) => (
          <div key={col.title}>
            <h4 className="text-sm font-bold text-white mb-4">{col.title}</h4>
            <ul className="flex flex-col gap-2.5">
              {col.links.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/50 hover:text-orange-400 text-sm transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Second row */}
      <div className="mt-12 flex flex-col lg:flex-row gap-12 border-b border-white/10 pb-12">
        {/* Company */}
        <div className="flex-1">
          <h4 className="text-sm font-bold text-white mb-4">Company</h4>
          <ul className="flex flex-col gap-2.5">
            {["About us", "Team", "Careers", "Blog"].map((l) => (
              <li key={l}>
                <Link href="#" className="text-white/50 hover:text-orange-400 text-sm transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex-1">
          <h4 className="text-sm font-bold text-white mb-4">Contact</h4>
          <ul className="flex flex-col gap-2.5">
            {["Help & Support", "Partner with us", "Ride with us"].map((l) => (
              <li key={l}>
                <Link href="#" className="text-white/50 hover:text-orange-400 text-sm transition-colors">{l}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="flex-1 lg:max-w-xs">
          <h4 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-4">
            Receive offers, promotions and professional advice.
          </h4>
          <div className="flex items-center bg-[#2e2e2e] rounded-xl overflow-hidden pl-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent text-white placeholder-white/30 text-sm outline-none flex-1 py-3"
            />
            <button
              className="text-white text-sm font-bold px-5 py-3 shrink-0 transition-opacity hover:opacity-90"
              style={{ background: "#FFB800" }}
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/40">
        <p>All rights Reserved © <strong className="text-white/60">FoodWagon</strong>, 2025</p>
        <p>Made with ❤️ by <strong className="text-white/60">Themewagon</strong></p>
      </div>
    </div>
  </footer>
);
