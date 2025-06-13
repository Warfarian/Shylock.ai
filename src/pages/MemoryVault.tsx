import React, { useState } from 'react';
import { Search, Calendar, Tag, Image, Mic, FileText, Filter } from 'lucide-react';

const MemoryVault: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const memories = [
    {
      id: 1,
      friend: 'Sarah Chen',
      amount: '$45',
      reason: 'Lunch at SS Hyderbadi Biryani',
      date: '2024-01-15',
      status: 'settled',
      type: 'image',
      content: 'Photo of the receipt and our happy faces after that amazing biryani',
      tags: ['food', 'lunch', 'biryani'],
      note: 'Best biryani in town! Worth every penny, and she paid back with a smile.'
    },
    {
      id: 2,
      friend: 'Mike Rodriguez',
      amount: '$120',
      reason: 'Concert tickets',
      date: '2023-12-20',
      status: 'settled',
      type: 'voice',
      content: 'Voice memo: "Dude, thanks for getting those tickets! The show was incredible!"',
      tags: ['entertainment', 'concert', 'music'],
      note: 'Arctic Monkeys concert. He was so grateful, paid back the next day.'
    },
    {
      id: 3,
      friend: 'Emma Thompson',
      amount: '$35',
      reason: 'Coffee and pastries',
      date: '2024-02-01',
      status: 'settled',
      type: 'text',
      content: 'Text conversation about trying that new French bakery downtown',
      tags: ['coffee', 'pastries', 'bakery'],
      note: 'She introduced me to the best croissants ever. Fair trade!'
    },
    {
      id: 4,
      friend: 'David Kim',
      amount: '$89.50',
      reason: 'Uber ride home',
      date: '2023-11-10',
      status: 'overdue',
      type: 'text',
      content: 'Screenshots of the Uber receipt from that late night downtown',
      tags: ['transportation', 'uber', 'night'],
      note: 'After that crazy night out. He was too drunk to remember his wallet.'
    },
    {
      id: 5,
      friend: 'Lisa Park',
      amount: '$23.75',
      reason: 'Movie tickets',
      date: '2024-01-28',
      status: 'pending',
      type: 'image',
      content: 'Movie ticket stubs from "Oppenheimer" - IMAX experience',
      tags: ['movies', 'imax', 'entertainment'],
      note: 'She really wanted to see it in IMAX. Great movie, still waiting for payment.'
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'image':
        return <Image size={16} />;
      case 'voice':
        return <Mic size={16} />;
      default:
        return <FileText size={16} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'settled':
        return 'text-green-400 bg-green-400/10';
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10';
      case 'overdue':
        return 'text-red-400 bg-red-400/10';
      default:
        return 'text-gray-400 bg-gray-400/10';
    }
  };

  const filteredMemories = memories.filter(memory => {
    const matchesSearch = memory.friend.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memory.reason.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         memory.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesFilter = filterType === 'all' || memory.type === filterType;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4">
            MEMORY
            <br />
            <span className="font-serif italic text-gray-400">VAULT</span>
          </h1>
          <p className="text-xl text-gray-300">
            Every debt tells a story. Here's your archive.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row gap-6 mb-12">
          {/* Search */}
          <div className="relative flex-1">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search memories, friends, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
            />
          </div>

          {/* Type Filter */}
          <div className="flex gap-2">
            {['all', 'image', 'voice', 'text'].map((type) => (
              <button
                key={type}
                onClick={() => setFilterType(type)}
                className={`px-6 py-4 font-semibold tracking-wide transition-all flex items-center gap-2 ${
                  filterType === type
                    ? 'bg-white text-black'
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                {type !== 'all' && getTypeIcon(type)}
                {type.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Memory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredMemories.map((memory) => (
            <div key={memory.id} className="bg-white/5 border border-white/10 p-6 hover:bg-white/10 transition-all duration-300 group">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-lg">{memory.friend}</h3>
                  <p className="text-gray-400 text-sm">{memory.date}</p>
                </div>
                <div className="text-right">
                  <div className="font-mono font-bold">{memory.amount}</div>
                  <div className={`text-xs px-2 py-1 rounded ${getStatusColor(memory.status)}`}>
                    {memory.status.toUpperCase()}
                  </div>
                </div>
              </div>

              {/* Content Type */}
              <div className="flex items-center gap-2 mb-3">
                {getTypeIcon(memory.type)}
                <span className="text-sm text-gray-400 capitalize">{memory.type} Memory</span>
              </div>

              {/* Reason */}
              <h4 className="font-semibold mb-3">{memory.reason}</h4>

              {/* Content Preview */}
              <div className="bg-white/5 p-4 rounded mb-4 text-sm text-gray-300">
                {memory.content}
              </div>

              {/* Note */}
              <div className="mb-4">
                <p className="text-sm font-serif italic text-gray-400">
                  "{memory.note}"
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {memory.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-white/10 text-xs font-mono rounded"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">{memories.length}</div>
            <div className="text-sm text-gray-400">TOTAL MEMORIES</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {memories.filter(m => m.type === 'image').length}
            </div>
            <div className="text-sm text-gray-400">PHOTOS</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {memories.filter(m => m.type === 'voice').length}
            </div>
            <div className="text-sm text-gray-400">VOICE MEMOS</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {memories.filter(m => m.status === 'settled').length}
            </div>
            <div className="text-sm text-gray-400">RESOLVED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemoryVault;