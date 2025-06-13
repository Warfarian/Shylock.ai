import React, { useState } from 'react';
import { Trophy, Zap, Clock, Target, Medal, Star } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('collected');

  const categories = [
    { id: 'collected', name: 'Most Collected', icon: Trophy },
    { id: 'fastest', name: 'Fastest Paybacks', icon: Zap },
    { id: 'ignored', name: 'Most Ignored', icon: Clock },
  ];

  const leaderboards = {
    collected: [
      { rank: 1, name: 'Emma Thompson', score: '23 debts', amount: '$1,247', badge: 'Debt Collector Supreme', streak: '12 week streak' },
      { rank: 2, name: 'Mike Rodriguez', score: '18 debts', amount: '$892', badge: 'The Persistent One', streak: '8 week streak' },
      { rank: 3, name: 'Sarah Chen', score: '15 debts', amount: '$634', badge: 'Gentle Persuader', streak: '5 week streak' },
      { rank: 4, name: 'Tom Wilson', score: '12 debts', amount: '$456', badge: 'Steady Collector', streak: '3 week streak' },
      { rank: 5, name: 'Rachel Green', score: '10 debts', amount: '$378', badge: 'Rising Star', streak: '2 week streak' },
      { rank: 6, name: 'James Brown', score: '8 debts', amount: '$234', badge: 'Newcomer', streak: '1 week streak' },
    ],
    fastest: [
      { rank: 1, name: 'Tom Wilson', score: '2.3 hours', amount: '12 debts', badge: 'Lightning Fast', streak: 'Sub-day champion' },
      { rank: 2, name: 'Rachel Green', score: '4.7 hours', amount: '8 debts', badge: 'Speed Demon', streak: 'Same-day specialist' },
      { rank: 3, name: 'James Brown', score: '1.2 days', amount: '15 debts', badge: 'Quick Responder', streak: 'Next-day hero' },
      { rank: 4, name: 'Emma Thompson', score: '2.1 days', amount: '23 debts', badge: 'Reliable Payor', streak: 'Weekend warrior' },
      { rank: 5, name: 'Mike Rodriguez', score: '3.4 days', amount: '18 debts', badge: 'Steady Eddie', streak: 'Week-end closer' },
      { rank: 6, name: 'Sarah Chen', score: '5.2 days', amount: '15 debts', badge: 'Thoughtful Payor', streak: 'Careful considerer' },
    ],
    ignored: [
      { rank: 1, name: 'David Kim', score: '7 ignored', amount: '$456', badge: 'The Ghost', streak: '3 month silence' },
      { rank: 2, name: 'Alex Johnson', score: '5 ignored', amount: '$234', badge: 'Phantom Friend', streak: '2 month MIA' },
      { rank: 3, name: 'Lisa Park', score: '4 ignored', amount: '$123', badge: 'Selective Hearing', streak: '1 month quiet' },
      { rank: 4, name: 'Chris Taylor', score: '3 ignored', amount: '$89', badge: 'Avoider', streak: '3 week dodge' },
      { rank: 5, name: 'Jordan Lee', score: '2 ignored', amount: '$67', badge: 'Procrastinator', streak: '2 week delay' },
      { rank: 6, name: 'Casey Smith', score: '1 ignored', amount: '$45', badge: 'One-Time Offender', streak: '1 week lapse' },
    ],
  };

  const activeData = leaderboards[activeCategory as keyof typeof leaderboards];

  const getRankColor = (rank: number) => {
    switch (rank) {
      case 1:
        return 'text-yellow-400 bg-yellow-400/10';
      case 2:
        return 'text-gray-300 bg-gray-300/10';
      case 3:
        return 'text-orange-400 bg-orange-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy size={24} className="text-yellow-400" />;
      case 2:
        return <Medal size={24} className="text-gray-300" />;
      case 3:
        return <Star size={24} className="text-orange-400" />;
      default:
        return <div className="w-6 h-6 rounded-full bg-gray-600 flex items-center justify-center text-sm font-bold">{rank}</div>;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4">
            LEADER
            <br />
            <span className="font-serif italic text-gray-400">BOARD</span>
          </h1>
          <p className="text-xl text-gray-300">
            Where legends are ranked and reputations are made
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-white/5 border border-white/10 overflow-hidden">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-8 py-4 font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  activeCategory === category.id
                    ? 'bg-white text-black'
                    : 'bg-transparent text-white hover:bg-white/10'
                }`}
              >
                <category.icon size={20} />
                {category.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div className="max-w-4xl mx-auto">
          {/* Top 3 Podium */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {activeData.slice(0, 3).map((user, index) => (
              <div
                key={user.name}
                className={`relative ${
                  index === 0 ? 'md:order-2 transform md:scale-110' :
                  index === 1 ? 'md:order-1' : 'md:order-3'
                }`}
              >
                <div className={`bg-white/5 border border-white/10 p-8 text-center relative overflow-hidden ${
                  index === 0 ? 'border-yellow-400/30' :
                  index === 1 ? 'border-gray-300/30' : 'border-orange-400/30'
                }`}>
                  {/* Rank Icon */}
                  <div className="flex justify-center mb-4">
                    {getRankIcon(user.rank)}
                  </div>

                  {/* Avatar */}
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold mb-2">{user.name}</h3>

                  {/* Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 ${getRankColor(user.rank)}`}>
                    {user.badge}
                  </div>

                  {/* Stats */}
                  <div className="space-y-2">
                    <div className="font-mono text-lg font-bold">{user.score}</div>
                    <div className="text-sm text-gray-400">{user.amount}</div>
                    <div className="text-xs text-gray-500">{user.streak}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Full Rankings */}
          <div className="bg-white/5 border border-white/10 overflow-hidden">
            {/* Header */}
            <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-white/5">
              <div className="col-span-1 font-black text-sm tracking-wide">RANK</div>
              <div className="col-span-4 font-black text-sm tracking-wide">PLAYER</div>
              <div className="col-span-2 font-black text-sm tracking-wide">SCORE</div>
              <div className="col-span-2 font-black text-sm tracking-wide">AMOUNT</div>
              <div className="col-span-3 font-black text-sm tracking-wide">ACHIEVEMENT</div>
            </div>

            {/* Rows */}
            <div className="divide-y divide-white/10">
              {activeData.map((user) => (
                <div key={user.name} className="grid grid-cols-12 gap-4 p-6 hover:bg-white/5 transition-colors">
                  <div className="col-span-1 flex items-center">
                    {getRankIcon(user.rank)}
                  </div>
                  <div className="col-span-4">
                    <div className="font-semibold">{user.name}</div>
                    <div className="text-sm text-gray-400">{user.badge}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="font-mono font-bold">{user.score}</div>
                  </div>
                  <div className="col-span-2">
                    <div className="font-mono">{user.amount}</div>
                  </div>
                  <div className="col-span-3">
                    <div className="text-sm text-gray-400">{user.streak}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Stats */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="bg-white/5 border border-white/10 p-6 text-center">
              <div className="text-2xl font-black mb-2">
                {activeCategory === 'collected' ? '91' : 
                 activeCategory === 'fastest' ? '2.3h' : '4.2'}
              </div>
              <div className="text-sm text-gray-400">
                {activeCategory === 'collected' ? 'TOTAL DEBTS' : 
                 activeCategory === 'fastest' ? 'AVERAGE TIME' : 'AVG IGNORED'}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 text-center">
              <div className="text-2xl font-black mb-2">
                {activeCategory === 'collected' ? '$4,264' : 
                 activeCategory === 'fastest' ? '23m' : '3.2m'}
              </div>
              <div className="text-sm text-gray-400">
                {activeCategory === 'collected' ? 'TOTAL AMOUNT' : 
                 activeCategory === 'fastest' ? 'FASTEST TIME' : 'LONGEST SILENCE'}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 p-6 text-center">
              <div className="text-2xl font-black mb-2">
                {activeCategory === 'collected' ? '87%' : 
                 activeCategory === 'fastest' ? '94%' : '23%'}
              </div>
              <div className="text-sm text-gray-400">
                {activeCategory === 'collected' ? 'SUCCESS RATE' : 
                 activeCategory === 'fastest' ? 'SAME DAY RATE' : 'IGNORE RATE'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;