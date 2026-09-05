import React, { useState, useEffect } from 'react';
import { Send, CheckCircle, Mail, Phone, MapPin, Calendar, Clock } from 'lucide-react';

interface ContactFormProps {
  selectedService?: string;
  prefillMessage?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ selectedService = 'custom-software', prefillMessage = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: selectedService,
    date: '',
    timeSlot: 'morning',
    message: prefillMessage,
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [scheduledDetails, setScheduledDetails] = useState({ date: '', timeSlot: '' });

  useEffect(() => {
    setFormData(prev => ({ ...prev, service: selectedService, message: prefillMessage }));
  }, [selectedService, prefillMessage]);

  const services = [
    { id: 'custom-software', name: 'Custom Software Development' },
    { id: 'ai-bots', name: 'AI Bots & Chatbots Setup' },
    { id: 'crm-dev', name: 'CRM Integration & Setup' },
    { id: 'mobile-app', name: 'Mobile App Development' },
    { id: 'web-dev', name: 'Website Design & SEO' },
    { id: 'cloud-infra', name: 'Cloud Setup & Core Infra' },
    { id: 'it-support', name: 'IT Asset & Migration Support' },
  ];

  const timeSlots = [
    { id: 'morning', name: 'Morning (9 AM–12 PM)' },
    { id: 'afternoon', name: 'Afternoon (12 PM–4 PM)' },
    { id: 'evening', name: 'Evening (4 PM–7 PM)' },
  ];

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Enter a valid email';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.date) errs.date = 'Please select a callback date';
    if (!formData.message.trim()) errs.message = 'Please describe your requirements';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    const chosenSlot = timeSlots.find(s => s.id === formData.timeSlot)?.name || '';
    setScheduledDetails({ date: formData.date, timeSlot: chosenSlot });
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', email: '', phone: '', service: 'custom-software', date: '', timeSlot: 'morning', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="w-full py-24 px-6 md:px-12" style={{ background: '#eef3ff' }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

          {/* Left */}
          <div className="lg:col-span-4">
            <div className="eyebrow-tag mb-6">Contact</div>
            <h2 className="font-display font-semibold text-white tracking-tight mb-4" style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em' }}>
              Schedule a Tech Consultation
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: 'rgba(23,33,61,0.45)', lineHeight: 1.75 }}>
              Book a direct consultation with Devendra Sharma & Nikita Tejwani and the Paramount engineering team in Ahmedabad.
            </p>

            <div className="flex flex-col gap-5">
              {[
                { Icon: Mail, label: 'Email', value: 'info@paramountindia.tech', href: 'mailto:info@paramountindia.tech' },
                { Icon: Phone, label: 'Phone', value: '+91 76006 47428', href: 'tel:+917600647428' },
                { Icon: MapPin, label: 'Location', value: 'Ahmedabad, Gujarat, India', href: null },
              ].map(({ Icon, label, value, href }) => (
                <div key={label} className="flex items-center gap-3.5">
                  <div className="icon-box w-9 h-9 rounded-lg flex-shrink-0" style={{ width: 36, height: 36 }}>
                    <Icon style={{ width: 15, height: 15 }} />
                  </div>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-widest mb-0.5" style={{ color: 'rgba(23,33,61,0.3)', fontSize: 9 }}>{label}</p>
                    {href ? (
                      <a href={href} className="text-sm font-medium text-white hover:text-indigo-400 transition-colors">{value}</a>
                    ) : (
                      <span className="text-sm font-medium text-white">{value}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-xl text-xs" style={{ background: 'rgba(37,99,235,0.03)', border: '1px solid rgba(37,99,235,0.06)', color: 'rgba(23,33,61,0.4)', lineHeight: 1.7 }}>
              <strong className="text-white">Paramount India Technologies Pvt Ltd</strong><br />
              Founders: Devendra Sharma & Nikita Tejwani. Registered IT services company specializing in enterprise software, AI, and cloud engineering.
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-8">
            <div className="rounded-2xl p-8" style={{ background: '#ffffff', border: '1px solid rgba(37,99,235,0.07)' }}>
              {isSuccess ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{ background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.3)' }}>
                    <CheckCircle className="w-6 h-6 text-indigo-400" />
                  </div>
                  <h3 className="font-display font-semibold text-white mb-2" style={{ fontSize: 22 }}>Consultation Booked</h3>
                  <p className="text-sm mb-6" style={{ color: 'rgba(23,33,61,0.5)', maxWidth: 380, lineHeight: 1.75 }}>
                    Scheduled for <strong className="text-white">{scheduledDetails.date}</strong> during <strong className="text-white">{scheduledDetails.timeSlot}</strong>. Our team will reach out to confirm.
                  </p>
                  <button onClick={() => setIsSuccess(false)} className="btn-secondary">Schedule Another</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2.5 mb-1">
                    <Calendar className="w-4 h-4 text-indigo-400" />
                    <span className="text-sm font-semibold text-white">Book a Callback</span>
                  </div>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(23,33,61,0.4)', fontSize: 10 }}>Full Name *</label>
                    <input id="name" type="text" name="name" value={formData.name} onChange={handleChange}
                      placeholder="e.g. Devendra Sharma"
                      className={`neo-input ${errors.name ? 'border-red-500/40' : ''}`} />
                    {errors.name && <span className="text-xs text-red-400">{errors.name}</span>}
                  </div>

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(23,33,61,0.4)', fontSize: 10 }}>Email *</label>
                      <input id="email" type="email" name="email" value={formData.email} onChange={handleChange}
                        placeholder="you@company.com"
                        className={`neo-input ${errors.email ? 'border-red-500/40' : ''}`} />
                      {errors.email && <span className="text-xs text-red-400">{errors.email}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(23,33,61,0.4)', fontSize: 10 }}>Phone *</label>
                      <input id="phone" type="text" name="phone" value={formData.phone} onChange={handleChange}
                        placeholder="+91 76006 47428"
                        className={`neo-input ${errors.phone ? 'border-red-500/40' : ''}`} />
                      {errors.phone && <span className="text-xs text-red-400">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Date + Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="date" className="text-xs font-medium uppercase tracking-wider flex items-center gap-1" style={{ color: 'rgba(23,33,61,0.4)', fontSize: 10 }}>
                        <Calendar style={{ width: 10 }} /> Date *
                      </label>
                      <input id="date" type="date" name="date" value={formData.date} onChange={handleChange}
                        className={`neo-input appearance-none cursor-pointer ${errors.date ? 'border-red-500/40' : ''}`} />
                      {errors.date && <span className="text-xs text-red-400">{errors.date}</span>}
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="timeSlot" className="text-xs font-medium uppercase tracking-wider flex items-center gap-1" style={{ color: 'rgba(23,33,61,0.4)', fontSize: 10 }}>
                        <Clock style={{ width: 10 }} /> Time Window
                      </label>
                      <select id="timeSlot" name="timeSlot" value={formData.timeSlot} onChange={handleChange}
                        className="neo-input appearance-none cursor-pointer">
                        {timeSlots.map(s => <option key={s.id} value={s.id} className="bg-black">{s.name}</option>)}
                      </select>
                    </div>
                  </div>

                  {/* Service */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="service" className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(23,33,61,0.4)', fontSize: 10 }}>Service Required</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange}
                      className="neo-input appearance-none cursor-pointer">
                      {services.map(s => <option key={s.id} value={s.id} className="bg-black">{s.name}</option>)}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider" style={{ color: 'rgba(23,33,61,0.4)', fontSize: 10 }}>Project Requirements *</label>
                    <textarea id="message" name="message" rows={3} value={formData.message} onChange={handleChange}
                      placeholder="Briefly describe your project or what you need help with..."
                      className={`neo-input resize-none ${errors.message ? 'border-red-500/40' : ''}`} />
                    {errors.message && <span className="text-xs text-red-400">{errors.message}</span>}
                  </div>

                  <button type="submit" disabled={isSubmitting} aria-label="Submit consultation request" className="btn-primary justify-center mt-1">
                    {isSubmitting
                      ? <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      : <><Send className="w-3.5 h-3.5" /> Confirm Consultation</>}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
