import React, { useState } from 'react';
import { Search, Filter, CheckCircle, Clock, AlertCircle, Phone } from 'lucide-react';

const DebtLedger: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const debts = [
    {
      id: 1,
      name: 'Sarah Chen',
      amount: '$45.00',
      status: 'pending',
      timeSince: '2 weeks',
      lastAction: 'Call sent',
      reason: 'Lunch at SS Hyderbadi Biryani',
      date: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mike Rodriguez',
      amount: '$120.00',
      status: 'responded',
      timeSince: '1 month',
      lastAction: 'Acknowledged',
      reason: 'Concert tickets',
      date: '2023-12-20'
    },
    {
      id: 3,
      name: 'Emma Thompson',
      amount: '$35.00',
      status: 'settled',
      timeSince: '3 days',
      lastAction: 'Paid',
      reason: 'Coffee and pastries',
      date: '2024-02-01'
    },
    {
      id: 4,
      name: 'David Kim',
      amount: '$89.50',
      status: 'overdue',
      timeSince: '3 months',
      lastAction: 'No response',
      reason: 'Uber ride home',
      date: '2023-11-10'
    },
    {
      id: 5,
      name: 'Lisa Park',
      amount: '$23.75',
      status: 'pending',
      timeSince: '1 week',
      lastAction: 'Reminder sent',
      reason: 'Movie tickets',
      date: '2024-01-28'
    },
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'settled':
        return <CheckCircle size={20} className="text-green-400" />;
      case 'responded':
        return <Clock size={20} className="text-yellow-400" />;
      case 'overdue':
        return <AlertCircle size={20} className="text-red-400" />;
      default:
        return <Clock size={20} className="text-gray-400" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'settled':
        return 'text-green-400';
      case 'responded':
        return 'text-yellow-400';
      case 'overdue':
        return 'text-red-400';
      default:
        return 'text-gray-400';
    }
  };

  const filteredDebts = debts.filter(debt => {
    const matchesFilter = filter === 'all' || debt.status === filter;
    const matchesSearch = debt.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         debt.reason.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4">
            THE
            <br />
            <span className="font-serif italic text-gray-400">LEDGER</span>
          </h1>
          <p className="text-xl text-gray-300">
            Every debt tells a story. Here are yours.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search friends or reasons..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2">
            {['all', 'pending', 'responded', 'settled', 'overdue'].map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-6 py-4 font-semibold tracking-wide transition-all ${
                  filter === status
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {status.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Ledger Table */}
        <div className="bg-white/5 border border-white/10 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-4 p-6 border-b border-white/10 bg-white/5">
            <div className="col-span-3 font-black text-sm tracking-wide">FRIEND</div>
            <div className="col-span-2 font-black text-sm tracking-wide">AMOUNT</div>
            <div className="col-span-2 font-black text-sm tracking-wide">STATUS</div>
            <div className="col-span-2 font-black text-sm tracking-wide">TIME SINCE</div>
            <div className="col-span-2 font-black text-sm tracking-wide">LAST ACTION</div>
            <div className="col-span-1 font-black text-sm tracking-wide">ACTION</div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-white/10">
            {filteredDebts.map((debt) => (
              <div key={debt.id} className="grid grid-cols-12 gap-4 p-6 hover:bg-white/5 transition-colors group">
                <div className="col-span-3">
                  <div className="font-semibold">{debt.name}</div>
                  <div className="text-sm text-gray-400 mt-1">{debt.reason}</div>
                </div>
                <div className="col-span-2">
                  <div className="font-mono font-bold text-lg">{debt.amount}</div>
                  <div className="text-xs text-gray-400">{debt.date}</div>
                </div>
                <div className="col-span-2">
                  <div className="flex items-center gap-2">
                    {getStatusIcon(debt.status)}
                    <span className={`font-mono text-sm ${getStatusColor(debt.status)}`}>
                      {debt.status.toUpperCase()}
                    </span>
                  </div>
                </div>
                <div className="col-span-2">
                  <div className="font-mono">{debt.timeSince}</div>
                </div>
                <div className="col-span-2">
                  <div className="text-sm text-gray-400">{debt.lastAction}</div>
                </div>
                <div className="col-span-1">
                  <button className="opacity-0 group-hover:opacity-100 transition-opacity p-2 hover:bg-white/10 rounded">
                    <Phone size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              ${filteredDebts.reduce((sum, debt) => sum + parseFloat(debt.amount.replace('$', '')), 0).toFixed(2)}
            </div>
            <div className="text-sm text-gray-400">TOTAL AMOUNT</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">{filteredDebts.length}</div>
            <div className="text-sm text-gray-400">TOTAL DEBTS</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {filteredDebts.filter(d => d.status === 'settled').length}
            </div>
            <div className="text-sm text-gray-400">SETTLED</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {filteredDebts.filter(d => d.status === 'overdue').length}
            </div>
            <div className="text-sm text-gray-400">OVERDUE</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DebtLedger;