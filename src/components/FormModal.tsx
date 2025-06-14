import React, { useEffect, useState } from 'react';
import { useForm } from '../context/FormContext';
import { X, ArrowLeft, Phone, AlertTriangle } from 'lucide-react';

const FormModal: React.FC = () => {
  const { isFormOpen, setIsFormOpen, formData, updateFormField } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isFormOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Map form data to the expected API structure
      const apiData = {
        collector_name: formData.collector_name,
        friend_name: formData.friend_name,
        phone_number: formData.phone_number,
        amount: formData.amount,
        reason: formData.reason,
        time_since: formData.time_since,
        tone: {
          serious: formData.tone.serious,
          aggressive: formData.tone.aggressive,
          guilt: formData.tone.guilt
        }
      };

      const response = await fetch('https://hook.eu2.make.com/6eyvi2c7dg84pvjxnmfk9xkb4khnbcq1', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData)
      });

      if (response.ok) {
        alert('Shylock has been summoned! Your theatrical intervention is being prepared...');
        setIsFormOpen(false);
      } else {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to summon Shylock. Please try again or check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setIsFormOpen(false)}
      />
      
      {/* Modal */}
      <div className="relative bg-white text-black w-full max-w-4xl max-h-[90vh] overflow-y-auto m-4">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
          <button
            onClick={() => setIsFormOpen(false)}
            className="flex items-center gap-2 text-gray-600 hover:text-black transition-colors"
          >
            <ArrowLeft size={20} />
            Return to Shylock
          </button>
          <button
            onClick={() => setIsFormOpen(false)}
            className="text-gray-600 hover:text-black transition-colors"
          >
            <X size={24} />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-8">
          {/* Twilio Disclaimer */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-8">
            <div className="flex items-start">
              <AlertTriangle className="text-yellow-400 mr-3 mt-1" size={20} />
              <div>
                <h3 className="text-lg font-bold text-yellow-800 mb-2">Demo Limitation Notice</h3>
                <p className="text-yellow-700 leading-relaxed mb-4">
                  <strong>Student Account Restriction:</strong> Due to Twilio's trial account restrictions, this demo currently works only with pre-verified phone numbers. As a student developer participating in the world's largest hackathon, I don't yet have access to the upgraded features needed to make real calls to unverified numbers.
                </p>
                
                <p className="text-yellow-700 leading-relaxed mb-4">
                  <strong>High Service Costs:</strong> Due to the high cost of voice, AI, and telephony services, this demo currently has limited call capacity. Each call uses advanced voice synthesis, language processing, and carrier-grade telephony — services powered by Retell AI and ElevenLabs — which cost real money per minute. As a student developer self-funding this project, I've capped the daily calls to stay within budget.
                </p>
                
                <p className="text-yellow-700 leading-relaxed mb-4">
                  You're welcome to try it out, but availability may reset every 24 hours. For the full experience, I recommend joining the waitlist or reaching out for early access once the app scales up.
                </p>
                
                <p className="text-yellow-700 leading-relaxed">
                  Additionally, bringing this experience to life relies on multiple paid services — including Retell AI for voice calling, ElevenLabs for custom voice synthesis, and Twilio for telephony infrastructure. Combined, these services can be prohibitively expensive, especially for an independent student builder like myself.
                </p>
                
                <p className="text-yellow-600 text-sm mt-4 font-medium">
                  Thanks for understanding — and testing the future of awkward debt recovery! Feel free to explore the interface and experience what could be Shylock.ai! Also vote for me!!
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-12">
            <h2 className="text-5xl font-black mb-4">
              CONFIGURE
            </h2>
            <p className="text-2xl font-serif italic text-gray-600 mb-6">
              your voice
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Craft the perfect theatrical intervention with surgical precision
            </p>
          </div>
          
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto space-y-8">
            {/* Basic Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 tracking-wide">
                  YOUR NAME
                </label>
                <input
                  type="text"
                  value={formData.collector_name}
                  onChange={(e) => updateFormField('collector_name', e.target.value)}
                  placeholder="John Carpenter"
                  className="w-full p-4 border-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 tracking-wide">
                  DEBTOR'S NAME
                </label>
                <input
                  type="text"
                  value={formData.friend_name}
                  onChange={(e) => updateFormField('friend_name', e.target.value)}
                  placeholder="Their name"
                  className="w-full p-4 border-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2 tracking-wide">
                THEIR CONTACT
              </label>
              <input
                type="tel"
                value={formData.phone_number}
                onChange={(e) => updateFormField('phone_number', e.target.value)}
                placeholder="+1 (555) 123-4567"
                className="w-full p-4 border-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                required
              />
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold mb-2 tracking-wide">
                  AMOUNT OWED
                </label>
                <input
                  type="text"
                  value={formData.amount}
                  onChange={(e) => updateFormField('amount', e.target.value)}
                  placeholder="$35"
                  className="w-full p-4 border-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold mb-2 tracking-wide">
                  OVERDUE FOR
                </label>
                <input
                  type="text"
                  value={formData.time_since}
                  onChange={(e) => updateFormField('time_since', e.target.value)}
                  placeholder="1 year"
                  className="w-full p-4 border-2 border-gray-300 focus:border-black focus:outline-none text-lg"
                  required
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold mb-2 tracking-wide">
                ORIGINAL TRANSACTION
              </label>
              <textarea
                value={formData.reason}
                onChange={(e) => updateFormField('reason', e.target.value)}
                placeholder="Paid for lunch at SS Hyderbadi Biryani"
                rows={4}
                className="w-full p-4 border-2 border-gray-300 focus:border-black focus:outline-none text-lg resize-none"
                required
              />
            </div>
            
            {/* Personality Matrix */}
            <div className="border-t-2 border-black pt-8">
              <div className="flex items-center gap-3 mb-12">
                <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center">
                  <div className="w-3 h-3 border border-white rounded-full" />
                </div>
                <h3 className="text-2xl font-black">PERSONALITY MATRIX</h3>
              </div>
              
              <div className="space-y-12">
                {/* Gravitas */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-xl font-bold">GRAVITAS</h4>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>CASUAL</span>
                        <span>FUNERAL</span>
                      </div>
                    </div>
                    <div className="bg-black text-white px-4 py-2 font-bold">
                      {formData.tone.serious}%
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.tone.serious}
                      onChange={(e) => updateFormField('tone.serious', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-300 appearance-none slider"
                    />
                    <div 
                      className="absolute top-0 h-2 bg-black pointer-events-none"
                      style={{ width: `${formData.tone.serious}%` }}
                    />
                    <div 
                      className="absolute top-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-y-1/2 pointer-events-none"
                      style={{ left: `calc(${formData.tone.serious}% - 8px)` }}
                    />
                  </div>
                </div>
                
                {/* Intensity */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-xl font-bold">INTENSITY</h4>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>GENTLE</span>
                        <span>INTIMIDATING</span>
                      </div>
                    </div>
                    <div className="bg-black text-white px-4 py-2 font-bold">
                      {formData.tone.aggressive}%
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.tone.aggressive}
                      onChange={(e) => updateFormField('tone.aggressive', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-300 appearance-none slider"
                    />
                    <div 
                      className="absolute top-0 h-2 bg-black pointer-events-none"
                      style={{ width: `${formData.tone.aggressive}%` }}
                    />
                    <div 
                      className="absolute top-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-y-1/2 pointer-events-none"
                      style={{ left: `calc(${formData.tone.aggressive}% - 8px)` }}
                    />
                  </div>
                </div>
                
                {/* Conscience */}
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <div>
                      <h4 className="text-xl font-bold">CONSCIENCE</h4>
                      <div className="flex justify-between text-sm text-gray-600 mt-2">
                        <span>FACTUAL</span>
                        <span>SOUL-CRUSHING</span>
                      </div>
                    </div>
                    <div className="bg-black text-white px-4 py-2 font-bold">
                      {formData.tone.guilt}%
                    </div>
                  </div>
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={formData.tone.guilt}
                      onChange={(e) => updateFormField('tone.guilt', parseInt(e.target.value))}
                      className="w-full h-2 bg-gray-300 appearance-none slider"
                    />
                    <div 
                      className="absolute top-0 h-2 bg-black pointer-events-none"
                      style={{ width: `${formData.tone.guilt}%` }}
                    />
                    <div 
                      className="absolute top-1/2 w-4 h-4 bg-white border-2 border-black rounded-full transform -translate-y-1/2 pointer-events-none"
                      style={{ left: `calc(${formData.tone.guilt}% - 8px)` }}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="pt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-6 text-xl font-bold tracking-wide flex items-center justify-center gap-3 transition-colors ${
                  isSubmitting 
                    ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                    : 'bg-black text-white hover:bg-gray-800'
                }`}
              >
                <Phone size={24} />
                {isSubmitting ? 'SUMMONING SHYLOCK...' : 'SUMMON SHYLOCK'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormModal;