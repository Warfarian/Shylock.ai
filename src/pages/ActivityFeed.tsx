import React from 'react';
import { Phone, Clock, CheckCircle, MessageCircle, Calendar, AlertTriangle } from 'lucide-react';

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      id: 1,
      type: 'call',
      friend: 'Sarah Chen',
      amount: '$45',
      action: 'Call completed',
      time: '2 hours ago',
      details: 'Duration: 1:23 • Voice: The Poet',
      status: 'success'
    },
    {
      id: 2,
      type: 'response',
      friend: 'Mike Rodriguez',
      amount: '$120',
      action: 'Acknowledged debt',
      time: '1 day ago',
      details: 'Promised payment by Friday',
      status: 'pending'
    },
    {
      id: 3,
      type: 'payment',
      friend: 'Emma Thompson',
      amount: '$35',
      action: 'Debt settled',
      time: '3 days ago',
      details: 'Venmo payment received',
      status: 'success'
    },
    {
      id: 4,
      type: 'reminder',
      friend: 'David Kim',
      amount: '$89.50',
      action: 'Reminder scheduled',
      time: '5 days ago',
      details: 'Follow-up call set for tomorrow',
      status: 'scheduled'
    },
    {
      id: 5,
      type: 'call',
      friend: 'Lisa Park',
      amount: '$23.75',
      action: 'Call sent',
      time: '1 week ago',
      details: 'Duration: 0:45 • Voice: The Merchant',
      status: 'success'
    },
    {
      id: 6,
      type: 'overdue',
      friend: 'Alex Johnson',
      amount: '$67',
      action: 'Marked overdue',
      time: '1 week ago',
      details: 'No response after 3 attempts',
      status: 'warning'
    },
    {
      id: 7,
      type: 'call',
      friend: 'Tom Wilson',
      amount: '$156',
      action: 'Call completed',
      time: '2 weeks ago',
      details: 'Duration: 2:15 • Voice: The Storyteller',
      status: 'success'
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'call':
        return <Phone size={20} />;
      case 'response':
        return <MessageCircle size={20} />;
      case 'payment':
        return <CheckCircle size={20} />;
      case 'reminder':
        return <Calendar size={20} />;
      case 'overdue':
        return <AlertTriangle size={20} />;
      default:
        return <Clock size={20} />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success':
        return 'text-green-400 bg-green-400/10 border-green-400/20';
      case 'pending':
        return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
      case 'scheduled':
        return 'text-blue-400 bg-blue-400/10 border-blue-400/20';
      case 'warning':
        return 'text-red-400 bg-red-400/10 border-red-400/20';
      default:
        return 'text-gray-400 bg-gray-400/10 border-gray-400/20';
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-6xl font-black mb-4">
            ACTIVITY
            <br />
            <span className="font-serif italic text-gray-400">TIMELINE</span>
          </h1>
          <p className="text-xl text-gray-300">
            Every action, every response, every resolution.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-white/20"></div>
            
            <div className="space-y-8">
              {activities.map((activity, index) => (
                <div key={activity.id} className="relative flex items-start gap-8">
                  {/* Timeline dot */}
                  <div className={`relative z-10 w-16 h-16 rounded-full border-2 flex items-center justify-center ${getStatusColor(activity.status)}`}>
                    {getIcon(activity.type)}
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1 bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{activity.action}</h3>
                        <p className="text-gray-400">
                          <span className="font-semibold">{activity.friend}</span> • {activity.amount}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{activity.time}</div>
                        <div className={`text-xs font-mono mt-1 px-2 py-1 rounded border ${getStatusColor(activity.status)}`}>
                          {activity.status.toUpperCase()}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm">{activity.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {activities.filter(a => a.type === 'call').length}
            </div>
            <div className="text-sm text-gray-400">CALLS MADE</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {activities.filter(a => a.status === 'success').length}
            </div>
            <div className="text-sm text-gray-400">SUCCESSFUL ACTIONS</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {activities.filter(a => a.type === 'payment').length}
            </div>
            <div className="text-sm text-gray-400">DEBTS SETTLED</div>
          </div>
          <div className="bg-white/5 border border-white/10 p-6 text-center">
            <div className="text-2xl font-black mb-2">
              {activities.filter(a => a.type === 'response').length}
            </div>
            <div className="text-sm text-gray-400">RESPONSES RECEIVED</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;