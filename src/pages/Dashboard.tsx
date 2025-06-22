import React from 'react';
import { Link } from 'react-router-dom';
import { DollarSign, Clock, CheckCircle, Phone, Users, TrendingUp } from 'lucide-react';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Owed', value: '$2,847', icon: DollarSign, change: '+12%' },
    { label: 'Debts Settled', value: '23', icon: CheckCircle, change: '+8%' },
    { label: 'Avg Response Time', value: '2.3 days', icon: Clock, change: '-15%' },
    { label: 'Active Calls', value: '7', icon: Phone, change: '+3%' },
  ];

  const recentFriends = [
    { name: 'Sarah Chen', amount: '$45', status: 'pending', lastCall: '2 days ago' },
    { name: 'Mike Rodriguez', amount: '$120', status: 'responded', lastCall: '1 week ago' },
    { name: 'Emma Thompson', amount: '$35', status: 'settled', lastCall: '3 days ago' },
    { name: 'David Kim', amount: '$89', status: 'pending', lastCall: '5 days ago' },
  ];

  const pendingCalls = [
    { friend: 'Alex Johnson', amount: '$67', scheduled: 'Today, 3:00 PM' },
    { friend: 'Lisa Park', amount: '$23', scheduled: 'Tomorrow, 11:00 AM' },
    { friend: 'Tom Wilson', amount: '$156', scheduled: 'Friday, 2:00 PM' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4">
            COMMAND
            <br />
            <span className="font-serif italic text-gray-400">CENTER</span>
          </h1>
          <p className="text-xl text-gray-300">
            Your theatrical debt collection headquarters
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <stat.icon size={32} className="text-white" />
                <span className={`text-sm font-mono ${
                  stat.change.startsWith('+') ? 'text-green-400' : 'text-red-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <div className="text-3xl font-black mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm tracking-wide">{stat.label.toUpperCase()}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Recent Friends */}
          <div className="bg-white/5 border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black">RECENT FRIENDS</h2>
              <Link to="/ledger" className="text-sm text-gray-400 hover:text-white transition-colors">
                VIEW ALL →
              </Link>
            </div>
            
            <div className="space-y-4">
              {recentFriends.map((friend, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-white/10 last:border-b-0">
                  <div>
                    <div className="font-semibold">{friend.name}</div>
                    <div className="text-sm text-gray-400">{friend.lastCall}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold">{friend.amount}</div>
                    <div className={`text-xs font-mono ${
                      friend.status === 'settled' ? 'text-green-400' :
                      friend.status === 'responded' ? 'text-yellow-400' : 'text-gray-400'
                    }`}>
                      {friend.status.toUpperCase()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Calls */}
          <div className="bg-white/5 border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black">PENDING CALLS</h2>
              <Link to="/activity" className="text-sm text-gray-400 hover:text-white transition-colors">
                VIEW ALL →
              </Link>
            </div>
            
            <div className="space-y-4">
              {pendingCalls.map((call, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-b border-white/10 last:border-b-0">
                  <div>
                    <div className="font-semibold">{call.friend}</div>
                    <div className="text-sm text-gray-400">{call.scheduled}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-mono font-bold">{call.amount}</div>
                    <div className="text-xs text-yellow-400 font-mono">SCHEDULED</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-16">
          <h2 className="text-3xl font-black mb-8">QUICK ACTIONS</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link to="/tickets" className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-2xl font-black mb-4 group-hover:text-gray-300">CREATE TICKET</div>
              <p className="text-gray-400">Generate a humorous IOU for friendly reminders</p>
            </Link>
            
            <Link to="/wall" className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-2xl font-black mb-4 group-hover:text-gray-300">DEBT WALL</div>
              <p className="text-gray-400">See who's generous and who's... forgetful</p>
            </Link>
            
            <Link to="/vault" className="bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 group">
              <div className="text-2xl font-black mb-4 group-hover:text-gray-300">MEMORY VAULT</div>
              <p className="text-gray-400">Browse your archive of past debts and stories</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;