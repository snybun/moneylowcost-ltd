import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, Search, Building2, CheckCircle2 } from 'lucide-react';

export default function BranchLocator() {
  const [selectedCity, setSelectedCity] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const branches = [
    {
      id: 1,
      city: 'Tel Aviv',
      name: 'Tel Aviv Central Branch',
      address: 'Levinsky St 108, Central Bus Station Area, Tel Aviv',
      phone: '054-2025386',
      hours: 'Sun - Thu: 08:30 - 19:30 | Fri: 08:30 - 14:00',
      status: 'Open Today',
      lat: 32.056,
      lng: 34.778
    },
    {
      id: 2,
      city: 'Haifa',
      name: 'Haifa Bay Hub',
      address: 'HaNevi\'im St 22, Hadar HaCarmel, Haifa',
      phone: '054-2025386',
      hours: 'Sun - Thu: 09:00 - 19:00 | Fri: 09:00 - 13:30',
      status: 'Open Today',
      lat: 32.815,
      lng: 34.998
    },
    {
      id: 3,
      city: 'Jerusalem',
      name: 'Jerusalem City Center',
      address: 'Jaffa St 45, Near Zion Square, Jerusalem',
      phone: '054-2025386',
      hours: 'Sun - Thu: 09:00 - 19:00 | Fri: 08:30 - 13:00',
      status: 'Open Today',
      lat: 31.782,
      lng: 35.218
    },
    {
      id: 4,
      city: 'Netanya',
      name: 'Netanya Coastal Office',
      address: 'Herzl St 15, Netanya City Center',
      phone: '054-2025386',
      hours: 'Sun - Thu: 09:00 - 18:30 | Fri: 09:00 - 13:00',
      status: 'Open Today',
      lat: 32.329,
      lng: 34.856
    },
    {
      id: 5,
      city: 'Ashdod',
      name: 'Ashdod Port Branch',
      address: 'HaBanim St 10, City Center, Ashdod',
      phone: '054-2025386',
      hours: 'Sun - Thu: 09:00 - 18:30 | Fri: 09:00 - 13:00',
      status: 'Open Today',
      lat: 31.801,
      lng: 34.643
    }
  ];

  const cities = ['All', 'Tel Aviv', 'Haifa', 'Jerusalem', 'Netanya', 'Ashdod'];

  const filteredBranches = branches.filter(b => {
    const matchesCity = selectedCity === 'All' || b.city === selectedCity;
    const matchesQuery = searchQuery === '' || 
      b.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      b.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
      b.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCity && matchesQuery;
  });

  return (
    <section id="branches" className="py-24 relative z-10">
      <div className="apple-container">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="apple-spec-tag inline-block mb-3">Branch Locator & Help Desk</div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
            Visit Our Service Offices
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Prefer in-person service? Visit any of our nationwide branches for instant cash deposits, beneficiary registration, and personalized support.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="max-w-4xl mx-auto mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* City Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 overflow-x-auto w-full sm:w-auto">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                  selectedCity === city
                    ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900 text-slate-400 border border-slate-800 hover:text-white'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search branch or street..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-full pl-9 pr-4 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-all"
            />
          </div>

        </div>

        {/* Branch Cards List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBranches.map((branch) => (
            <div 
              key={branch.id}
              className="apple-glass-card p-6 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[10px] font-bold uppercase">
                    {branch.city}
                  </span>
                  <span className="flex items-center gap-1.5 text-[10px] font-semibold text-emerald-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    {branch.status}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {branch.name}
                </h3>

                <div className="flex items-start gap-2.5 text-xs text-slate-300 mb-4 leading-relaxed">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{branch.address}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-slate-400 mb-6">
                  <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                  <span>{branch.hours}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <a
                  href={`tel:${branch.phone.replace(/-/g, '')}`}
                  className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{branch.phone}</span>
                </a>

                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(branch.name + ' ' + branch.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="apple-btn-secondary text-[11px] !py-1.5 !px-3"
                >
                  <Navigation className="w-3 h-3 text-cyan-400" />
                  <span>Directions</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
