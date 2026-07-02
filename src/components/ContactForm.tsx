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
  
  // Stored schedule details to show in success message
  const [scheduledDetails, setScheduledDetails] = useState({ date: '', timeSlot: '' });

  // Sync props to state when they change (e.g. when user clicks "Select Plan")
  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      service: selectedService,
      message: prefillMessage,
    }));
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
    { id: 'morning', name: 'Morning (9 AM - 12 PM)' },
    { id: 'afternoon', name: 'Afternoon (12 PM - 4 PM)' },
    { id: 'evening', name: 'Evening (4 PM - 7 PM)' },
  ];

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) newErrors.name = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s\-()]{8,16}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.date) {
      newErrors.date = 'Callback date selection is required';
    } else {
      const selected = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selected < today) {
        newErrors.date = 'Preferred Date cannot be in the past';
      }
    }

    if (!formData.message.trim()) newErrors.message = 'Please describe your project requirements';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error as user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Save scheduled details
    const chosenSlot = timeSlots.find(slot => slot.id === formData.timeSlot)?.name || '';
    setScheduledDetails({
      date: formData.date,
      timeSlot: chosenSlot
    });

    // Simulate server submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'custom-software',
        date: '',
        timeSlot: 'morning',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-visible">
      {/* Decorative gradients */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#6366f1]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Office details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl sm:text-5xl font-normal tracking-tight mt-6 mb-4">
                Schedule a <br />
                <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Tech Consult</span>
              </h2>
              <p className="text-hero-sub text-base leading-relaxed opacity-75 mb-8 font-medium animate-in fade-in duration-500">
                Ready to optimize your company workflows or set up robust custom AI chatbot agents? Book a consultation with Devendra Sharma and the Paramount engineering team in Ahmedabad today.
              </p>

              {/* Info Items */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-[#a855f7] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-foreground/40 block font-semibold uppercase tracking-wider">Email Address</span>
                    <a href="mailto:info@paramountindia.tech" className="text-sm font-semibold text-white hover:text-[#a855f7] transition-colors">
                      info@paramountindia.tech
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-[#a855f7] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-foreground/40 block font-semibold uppercase tracking-wider">Contact Number</span>
                    <a href="tel:+919724734308" className="text-sm font-semibold text-white hover:text-[#a855f7] transition-colors">
                      +91 97247 34308
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 text-[#a855f7] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-foreground/40 block font-semibold uppercase tracking-wider">Headquarters & City</span>
                    <span className="text-sm font-semibold text-white">
                      Ahmedabad, Gujarat, India
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* LLP Tag */}
            <div className="mt-12 p-4 rounded-xl bg-white/5 border border-white/5 text-xs text-hero-sub/70 leading-relaxed max-w-sm font-medium">
              <span className="font-bold text-white block mb-1">Paramount India Technologies LLP</span>
              Registered LLC. Owner: **Devendra Sharma**. Expertise in core IT infrastructure setup, software engineering, and artificial intelligence chatbot solutions.
            </div>
          </div>

          {/* Right Column: Glass Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass rounded-3xl p-8 sm:p-10 border border-white/5 shadow-2xl relative h-full flex flex-col justify-center">
              
              {isSuccess ? (
                <div className="text-center py-12 flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-500">
                  <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-white mb-2">Consultation Booked!</h3>
                  <p className="text-hero-sub max-w-md mx-auto opacity-80 text-sm mb-8 leading-relaxed font-medium">
                    Thank you. Your call has been scheduled for **{scheduledDetails.date}** during the **{scheduledDetails.timeSlot}**. Owner Devendra Sharma or a principal IT architect will contact you within that window.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="btn-hero-secondary rounded-xl px-5 py-2.5 text-xs font-semibold cursor-pointer"
                  >
                    Schedule Another Consult
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex items-center gap-2.5 mb-2">
                    <Calendar className="w-5 h-5 text-[#a855f7]" />
                    <span className="text-sm font-semibold text-white tracking-wide">Request a Callback</span>
                  </div>

                  {/* Name field */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Devendra Sharma"
                      className={`bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white placeholder-foreground/25 font-medium ${
                        errors.name ? 'border-red-500/50' : 'border-white/5'
                      }`}
                    />
                    {errors.name && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.name}</span>}
                  </div>

                  {/* Email & Phone side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={`bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white placeholder-foreground/25 font-medium ${
                          errors.email ? 'border-red-500/50' : 'border-white/5'
                        }`}
                      />
                      {errors.email && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.email}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 97247 34308"
                        className={`bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white placeholder-foreground/25 font-medium ${
                          errors.phone ? 'border-red-500/50' : 'border-white/5'
                        }`}
                      />
                      {errors.phone && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Preferred Date & Time Slot side-by-side */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-foreground/60 font-semibold uppercase tracking-wider flex items-center gap-1"><Calendar className="w-3.5 h-3.5 text-[#a855f7]" /> Callback Date</label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className={`bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white appearance-none cursor-pointer font-medium ${
                          errors.date ? 'border-red-500/50' : 'border-white/5'
                        }`}
                      />
                      {errors.date && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.date}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs text-foreground/60 font-semibold uppercase tracking-wider flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-[#a855f7]" /> Time Slot</label>
                      <div className="relative">
                        <select
                          name="timeSlot"
                          value={formData.timeSlot}
                          onChange={handleChange}
                          className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white appearance-none cursor-pointer font-medium"
                        >
                          {timeSlots.map((slot) => (
                            <option key={slot.id} value={slot.id} className="bg-[#0c0926] text-white">
                              {slot.name}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-white/60 w-0 h-0" />
                      </div>
                    </div>
                  </div>

                  {/* Service Selector */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Required Service</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white appearance-none cursor-pointer font-medium"
                      >
                        {services.map((svc) => (
                          <option key={svc.id} value={svc.id} className="bg-[#0c0926] text-white">
                            {svc.name}
                          </option>
                        ))}
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none border-l-4 border-r-4 border-t-4 border-transparent border-t-white/60 w-0 h-0" />
                    </div>
                  </div>

                  {/* Project description */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs text-foreground/60 font-semibold uppercase tracking-wider">Project Scope / Requirements</label>
                    <textarea
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please outline the custom software, mobile app, CRM, or chatbot support details..."
                      className={`bg-white/5 border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white placeholder-foreground/25 resize-none font-medium ${
                        errors.message ? 'border-red-500/50' : 'border-white/5'
                      }`}
                    />
                    {errors.message && <span className="text-red-400 text-xs mt-1 font-semibold">{errors.message}</span>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-hero-secondary rounded-xl py-4 mt-2 text-sm font-semibold flex items-center justify-center gap-2 cursor-pointer w-full"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        Confirm Consultation Callback <Send className="w-4 h-4" />
                      </>
                    )}
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
