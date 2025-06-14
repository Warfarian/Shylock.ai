import React, { useState } from 'react';
import { Download, Share2, Copy, Sparkles } from 'lucide-react';

const TicketGenerator: React.FC = () => {
  const [ticketData, setTicketData] = useState({
    friend: '',
    amount: '',
    reason: '',
    style: 'classic'
  });

  const [generatedTicket, setGeneratedTicket] = useState<any>(null);

  const ticketStyles = [
    { id: 'classic', name: 'Classic IOU', description: 'Traditional and formal' },
    { id: 'theatrical', name: 'Theatrical', description: 'Dramatic and artistic' },
    { id: 'humorous', name: 'Humorous', description: 'Light-hearted and funny' },
    { id: 'minimalist', name: 'Minimalist', description: 'Clean and simple' },
  ];

  const generateTicket = () => {
    if (!ticketData.friend || !ticketData.amount || !ticketData.reason) return;
    
    const ticket = {
      ...ticketData,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toLocaleDateString(),
      qrCode: `shylock.ai/debt/${Math.random().toString(36).substr(2, 9)}`
    };
    
    setGeneratedTicket(ticket);
  };

  const getTicketContent = () => {
    if (!generatedTicket) return null;

    switch (generatedTicket.style) {
      case 'theatrical':
        return {
          title: '⚖️ PROMISSORY PERFORMANCE',
          subtitle: 'A Theatrical Debt Declaration',
          body: `Hear ye! Let it be known across all realms that ${generatedTicket.friend} owes the sum of ${generatedTicket.amount} for the noble cause of "${generatedTicket.reason}". This debt shall echo through the halls of friendship until justice is served.`,
          footer: 'Witnessed by the Court of Shylock'
        };
      case 'humorous':
        return {
          title: '🎭 OFFICIAL FRIENDSHIP FINE',
          subtitle: 'Department of Unpaid Favors',
          body: `CITATION: ${generatedTicket.friend} has been caught red-handed owing ${generatedTicket.amount} for "${generatedTicket.reason}". Penalty for ignoring this notice: Eternal guilt and possible friendship probation.`,
          footer: 'Issued by the Bureau of Broke Friends'
        };
      case 'minimalist':
        return {
          title: 'DEBT RECORD',
          subtitle: 'Simple. Clear. Owed.',
          body: `${generatedTicket.friend} → ${generatedTicket.amount}\nReason: ${generatedTicket.reason}\nDate: ${generatedTicket.date}`,
          footer: 'shylock.ai'
        };
      default:
        return {
          title: 'I.O.U.',
          subtitle: 'Official Debt Certificate',
          body: `I, ${generatedTicket.friend}, acknowledge that I owe the amount of ${generatedTicket.amount} for ${generatedTicket.reason}. This debt was incurred on ${generatedTicket.date} and remains outstanding.`,
          footer: 'Powered by Shylock.ai'
        };
    }
  };

  const ticketContent = getTicketContent();

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="section-padding container-max">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            TICKET
            <br />
            <span className="font-serif italic text-gray-400">GENERATOR</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300">
            Create shareable IOUs with theatrical flair
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold mb-3 tracking-wide">
                FRIEND'S NAME
              </label>
              <input
                type="text"
                value={ticketData.friend}
                onChange={(e) => setTicketData({...ticketData, friend: e.target.value})}
                placeholder="Who owes you?"
                className="w-full p-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 tracking-wide">
                AMOUNT OWED
              </label>
              <input
                type="text"
                value={ticketData.amount}
                onChange={(e) => setTicketData({...ticketData, amount: e.target.value})}
                placeholder="$35 or 1 pizza"
                className="w-full p-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 tracking-wide">
                REASON
              </label>
              <textarea
                value={ticketData.reason}
                onChange={(e) => setTicketData({...ticketData, reason: e.target.value})}
                placeholder="What was it for?"
                rows={3}
                className="w-full p-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-white/30 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 tracking-wide">
                STYLE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {ticketStyles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setTicketData({...ticketData, style: style.id})}
                    className={`p-3 sm:p-4 border text-left transition-all ${
                      ticketData.style === style.id
                        ? 'bg-white text-black border-white'
                        : 'bg-white/5 border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <div className="font-semibold mb-1">{style.name}</div>
                    <div className="text-sm opacity-70">{style.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generateTicket}
              className="w-full bg-white text-black py-4 font-bold tracking-wide hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
            >
              <Sparkles size={20} />
              GENERATE TICKET
            </button>
          </div>

          {/* Preview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-black">PREVIEW</h2>
            
            {generatedTicket && ticketContent ? (
              <div className="bg-white text-black p-4 sm:p-8 border-4 border-dashed border-gray-300 relative">
                {/* Ticket Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl sm:text-3xl font-black mb-2">{ticketContent.title}</h3>
                  <p className="text-gray-600 font-serif italic">{ticketContent.subtitle}</p>
                </div>

                {/* Ticket Body */}
                <div className="mb-8">
                  <div className="bg-gray-100 p-6 border-l-4 border-black">
                    <p className="leading-relaxed whitespace-pre-line">{ticketContent.body}</p>
                  </div>
                </div>

                {/* Ticket Footer */}
                <div className="border-t-2 border-dashed border-gray-300 pt-6 flex flex-col sm:flex-row justify-between items-center">
                  <div className="mb-4 sm:mb-0">
                    <div className="text-xs text-gray-500">TICKET ID</div>
                    <div className="font-mono text-sm">{generatedTicket.id}</div>
                  </div>
                  <div className="text-center sm:text-right">
                    <div className="text-xs text-gray-500">{ticketContent.footer}</div>
                    <div className="font-mono text-xs text-gray-400">{generatedTicket.qrCode}</div>
                  </div>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-black"></div>
                <div className="absolute top-2 right-2 w-4 h-4 border-r-2 border-t-2 border-black"></div>
                <div className="absolute bottom-2 left-2 w-4 h-4 border-l-2 border-b-2 border-black"></div>
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-black"></div>
              </div>
            ) : (
              <div className="bg-white/5 border border-white/10 p-12 text-center">
                <p className="text-gray-400">Fill out the form to generate your ticket</p>
              </div>
            )}

            {/* Actions */}
            {generatedTicket && (
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 bg-white/5 border border-white/10 py-3 px-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Download size={16} />
                  DOWNLOAD
                </button>
                <button className="flex-1 bg-white/5 border border-white/10 py-3 px-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Share2 size={16} />
                  SHARE
                </button>
                <button className="flex-1 bg-white/5 border border-white/10 py-3 px-4 hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                  <Copy size={16} />
                  COPY LINK
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketGenerator;