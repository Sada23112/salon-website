import { useState } from 'react';
import { motion } from 'framer-motion';
import { business } from '../config/business';
import { supabase } from '../lib/supabaseClient';
import AnimatedSection from './AnimatedSection';

export default function BookingForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: business.services[0]?.name || '',
    appointment_date: '',
    appointment_time: '',
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    setMessage({ type: '', text: '' });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { name, phone, service, appointment_date, appointment_time } = formData;

    if (!name || !phone || !service || !appointment_date || !appointment_time) {
      setMessage({ type: 'error', text: 'Please fill in all fields' });
      setLoading(false);
      return;
    }

    const phoneRegex = /^\+?1?\d{9,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s\-()]/g, ''))) {
      setMessage({ type: 'error', text: 'Please enter a valid phone number' });
      setLoading(false);
      return;
    }

    try {
      // Check if Supabase is properly configured
      if (!supabase || !supabase.from) {
        throw new Error('Supabase is not configured. Please contact support.');
      }

      // Create the appointment message combining date and time
      const appointmentMessage = `${appointment_date} at ${appointment_time}`;

      const { error } = await supabase.from('appointments').insert([
        {
          name: name.trim(),
          phone: phone.trim(),
          service,
          message: appointmentMessage,
          // Note: appointment_date and appointment_time are combined into message field
          // If your table has these separate columns, adjust accordingly
        },
      ]);

      if (error) {
        console.error('[v0] Supabase error:', error);
        throw error;
      }

      setMessage({
        type: 'success',
        text: 'Booking confirmed! We will contact you soon to confirm your appointment.',
      });
      
      // Reset form
      setFormData({
        name: '',
        phone: '',
        service: business.services[0]?.name || '',
        appointment_date: '',
        appointment_time: '',
      });

      // Auto-dismiss success message after 5 seconds
      setTimeout(() => setMessage({ type: '', text: '' }), 5000);
    } catch (error) {
      console.error('[v0] Booking error:', error);
      
      let errorMessage = 'Failed to book appointment. Please try again or call us directly.';
      
      if (error?.message?.includes('not configured')) {
        errorMessage = 'Booking system is not available. Please call us to book your appointment.';
      } else if (error?.message) {
        errorMessage = `Error: ${error.message}`;
      }
      
      setMessage({
        type: 'error',
        text: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="booking" className="py-20 sm:py-32 bg-background">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Reserve Your Spot</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
              Book Your Appointment
            </h2>
            <p className="text-lg text-foreground/70 leading-relaxed font-light">
              Reserve your spot and let us create your perfect look
            </p>
          </div>
        </AnimatedSection>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-10">
          {message.text && (
            <div
              className={`mb-6 p-4 rounded-sm ${
                message.type === 'success'
                  ? 'bg-green-100 text-green-800 border border-green-300'
                  : 'bg-red-100 text-red-800 border border-red-300'
              }`}
            >
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground placeholder:text-foreground/40"
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground placeholder:text-foreground/40"
                placeholder="(555) 123-4567"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Service
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground"
              >
                {business.services.map((service) => (
                  <option key={service.name} value={service.name}>
                    {service.name} ({service.price})
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Date
                </label>
                <input
                  type="date"
                  name="appointment_date"
                  value={formData.appointment_date}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground [color-scheme:dark]"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Time
                </label>
                <input
                  type="time"
                  name="appointment_time"
                  value={formData.appointment_time}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground [color-scheme:dark]"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg transition-all font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
            >
              {loading ? 'Booking...' : 'Confirm Booking'}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-foreground/10">
            <p className="text-foreground/70 text-center mb-6 text-sm">
              Prefer to reach out directly?
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${business.phone}`}
                className="px-6 py-2.5 bg-foreground/10 text-white hover:bg-foreground/20 hover:text-white rounded-lg transition-all font-medium text-center text-sm border border-foreground/20"
              >
                Call Us
              </a>
              <a
                href={business.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white hover:text-white rounded-lg transition-all font-medium text-center text-sm shadow-md"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
