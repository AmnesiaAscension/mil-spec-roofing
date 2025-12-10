import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { SectionId } from '../types';

const Contact: React.FC = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
          
          {/* Info Side */}
          <div className="lg:w-1/3 bg-slate-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-3xl font-bold mb-2">Contact HQ</h2>
              <p className="text-slate-400 mb-8">Ready to secure your roof? Deploy our team today.</p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="text-blue-500 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-slate-300">(555) 123-4567</p>
                    <p className="text-slate-500 text-sm">Mon-Fri 0800-1800</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <Mail className="text-blue-500 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-slate-300">ops@milspecroofing.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="text-blue-500 h-6 w-6 mt-1" />
                  <div>
                    <h3 className="font-semibold">Base of Operations</h3>
                    <p className="text-slate-300">123 Construction Blvd<br/>Fort Worth, TX 76102</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <div className="w-full h-40 bg-slate-800 rounded-lg flex items-center justify-center text-slate-500 text-sm">
                 [Interactive Map Placeholder]
               </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12">
             <h2 className="text-2xl font-bold text-slate-900 mb-6">Request Briefing (Estimate)</h2>
             <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="John" />
                 </div>
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                   <input type="text" className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Doe" />
                 </div>
               </div>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                   <input type="email" className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="john@example.com" />
                 </div>
                 <div>
                   <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                   <input type="tel" className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="(555) 123-4567" />
                 </div>
               </div>

               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Service Type</label>
                 <select className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all text-slate-600">
                   <option>Roof Replacement</option>
                   <option>Repair / Leak</option>
                   <option>Inspection</option>
                   <option>Commercial Project</option>
                 </select>
               </div>

               <div>
                 <label className="block text-sm font-semibold text-slate-700 mb-2">Mission Details</label>
                 <textarea rows={4} className="w-full px-4 py-3 rounded-md bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" placeholder="Describe your project needs..."></textarea>
               </div>

               <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-md uppercase tracking-wider transition-all shadow-lg hover:shadow-blue-500/30">
                 Send Request
               </button>
             </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;