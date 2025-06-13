import React, { useState } from 'react';
import { Crown, Zap, Clock, TrendingUp, Award, AlertTriangle } from 'lucide-react';

const DebtWall: React.FC = () => {
  const [activeTab, setActiveTab] = useState('generous');

  const generousUsers = [
    {
      name: 'Emma Thompson',
      avatar: 'ET',
      stat: '23 debts settled',
      amount: '$1,247',
      badge: 'The Reliable One',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      name: 'Mike Rodriguez',
      avatar: 'MR',
      stat: '18 debts settled',
      amount: '$892',
      badge: 'Quick Responder',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      name: 'Sarah Chen',
      avatar: 'SC',
      stat: '15 debts settled',
      amount: '$634',
      badge: 'Honest Friend',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
  ];

  const forgetfulUsers = [
    {
      name: 'David Kim',
      avatar: 'DK',
      stat: '7 overdue debts',
      amount: '$456',
      badge: 'The Procrastinator',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      name: 'Alex Johnson',
      avatar: 'AJ',
      stat: '5 ignored calls',
      amount: '$234',
      badge: 'Ghost Mode',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
    {
      name: 'Lisa Park',
      avatar: 'LP',
      stat: '3 months overdue',
      amount: '$123',
      badge: 'Time Traveler',
      color: 'text-red-400',
      bgColor: 'bg-red-400/10'
    },
  ];

  const fastestPayers = [
    {
      name: 'Tom Wilson',
      avatar: 'TW',
      stat: 'Avg: 2.3 hours',
      amount: '12 debts',
      badge: 'Lightning Fast',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      name: 'Rachel Green',
      avatar: 'RG',
      stat: 'Avg: 4.7 hours',
      amount: '8 debts',
      badge: 'Speed Demon',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
    {
      name: 'James Brown',
      avatar: 'JB',
      stat: 'Avg: 1.2 days',
      amount: '15 debts',
      badge: 'Efficient',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10'
    },
  ];

  const tabs = [
    { id: 'generous', label: 'GENEROUS', icon: Crown, data: generousUsers },
    { id: 'forgetful', label: 'FORGETFUL', icon: AlertTriangle, data: forgetfulUsers },
    { id: 'fastest', label: 'FASTEST', icon: Zap, data: fastestPayers },
  ];

  const activeData = tabs.find(tab => tab.id === activeTab)?.data || [];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4">
            THE DEBT
            <br />
            <span className="font-serif italic text-gray-400">WALL</span>
          </h1>
          <p className="text-xl text-gray-300">
            Fame or shame — where legends are made
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 border border-white/10 overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-8 py-4 font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
              >
                <tab.icon size={20} />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Wall Content */}
        <div className="max-w-4xl mx-auto">
          {/* Podium for top 3 */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {activeData.slice(0, 3).map((user, index) => (
              <div
                key={user.name}
                className={`relative ${
                  index === 0 ? 'md:order-2 transform md:scale-110' :
                  index === 1 ? 'md:order-1' : 'md:order-3'
                }`}
              >
                <div className={`${user.bgColor} border border-white/10 p-8 text-center relative overflow-hidden`}>
                  {/* Rank */}
                  <div className={`absolute top-4 right-4 w-8 h-8 ${
                    index === 0 ? 'bg-yellow-400 text-black' :
                    index === 1 ? 'bg-gray-300 text-black' : 'bg-orange-400 text-black'
                  } rounded-full flex items-center justify-center font-bold text-sm`}>
                    {index + 1}
                  </div>

                  {/* Avatar */}
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {user.avatar}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-2">{user.name}</h3>

                  {/* Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${user.bgColor} ${user.color} border border-current`}>
                    {user.badge}
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="font-mono text-lg font-bold">{user.amount}</div>
                    <div className="text-sm text-gray-400">{user.stat}</div>
                  </div>

                  {/* Crown for #1 */}
                  {index === 0 && (
                    <Crown className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-yellow-400" size={32} />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Commentary */}
          <div className="bg-white/5 border border-white/10 p-8 mb-12">
            <div className="text-center">
              <h2 className="text-2xl font-black mb-4">DRAMATIC COMMENTARY</h2>
              {activeTab === 'generous' && (
                <p className="text-lg font-serif italic text-gray-300">
                  "Behold! These noble souls who honor their debts with the swiftness of justice itself. 
                  They are the pillars upon which friendship stands, the guardians of trust, 
                  the ones who make Shylock weep tears of joy."
                </p>
              )}
              {activeTab === 'forgetful' && (
                <p className="text-lg font-serif italic text-gray-300">
                  "Ah, the forgetful ones... They drift through life like ghosts of unpaid promises, 
                  leaving trails of IOUs in their wake. Yet even they may find redemption, 
                  for memory can be awakened by the right theatrical intervention."
                </p>
              )}
              {activeTab === 'fastest' && (
                <p className="text-lg font-serif italic text-gray-300">
                  "Swift as mercury, sharp as steel! These champions of efficiency prove that 
                  debt collection need not be a prolonged drama. They settle accounts 
                  before the curtain even rises on Act II."
                </p>
              )}
            </div>
          </div>

          {/* Hall of Fame Quotes */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="font-black mb-4">LEGENDARY QUOTES</h3>
              <div className="space-y-4">
                <blockquote className="border-l-2 border-white/30 pl-4">
                  <p className="font-serif italic mb-2">"I got the call and paid immediately. Shylock's voice was... haunting."</p>
                  <cite className="text-sm text-gray-400">— Emma T., The Reliable One</cite>
                </blockquote>
                <blockquote className="border-l-2 border-white/30 pl-4">
                  <p className="font-serif italic mb-2">"That theatrical guilt trip worked better than any reminder app."</p>
                  <cite className="text-sm text-gray-400">— Mike R., Quick Responder</cite>
                </blockquote>
              </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-6">
              <h3 className="font-black mb-4">WALL STATISTICS</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Total Debts Tracked</span>
                  <span className="font-mono">1,247</span>
                </div>
                <div className="flex justify-between">
                  <span>Fastest Payment</span>
                  <span className="font-mono">23 minutes</span>
                </div>
                <div className="flex justify-between">
                  <span>Longest Overdue</span>
                  <span className="font-mono">2.3 years</span>
                </div>
                <div className="flex justify-between">
                  <span>Success Rate</span>
                  <span className="font-mono">87.3%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtWall;