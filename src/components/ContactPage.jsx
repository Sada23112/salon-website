import { useState } from 'react';
import { MapPin, Clock, Phone, Mail, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { business } from '../config/business';
import AnimatedSection from './AnimatedSection';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would send to backend
    console.log('Contact form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (index) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
        ease: 'easeOut',
      },
    }),
  };

  return (
    <section className="py-20 sm:py-32 bg-background min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-20">
            <p className="text-accent text-xs font-medium tracking-widest uppercase mb-4">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
              Contact Us
            </h1>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed font-light">
              We'd love to hear from you. Reach out for appointments, questions, or just to say hello.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
            className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 sm:p-10"
          >
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">Send Us a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 rounded-lg bg-green-900/30 text-green-400 border border-green-800">
                Thank you for your message! We'll get back to you soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground placeholder:text-foreground/40"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground placeholder:text-foreground/40"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
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
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-foreground/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent bg-dark-bg text-foreground placeholder:text-foreground/40 resize-none"
                  placeholder="How can we help you?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg transition-all font-semibold text-lg shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Business Info */}
          <div className="space-y-6">
            <motion.div
              custom={0}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all group hover:translate-y-[-4px]"
            >
              <div className="flex items-start gap-4">
                <MapPin className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Our Location</h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
                    {business.address}
                    <br />
                    {business.city}
                  </p>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(`${business.address}, ${business.city}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 px-4 py-2 bg-accent hover:bg-accent-secondary text-white hover:text-white rounded-lg transition-all font-medium text-xs shadow-md"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all group hover:translate-y-[-4px]"
            >
              <div className="flex items-start gap-4">
                <Phone className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Phone</h3>
                  <a
                    href={`tel:${business.phone}`}
                    className="text-foreground/70 hover:text-accent transition-colors font-medium text-sm"
                  >
                    {business.phone}
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all group hover:translate-y-[-4px]"
            >
              <div className="flex items-start gap-4">
                <Clock className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Business Hours</h3>
                  <div className="space-y-1.5 text-foreground/70 text-sm">
                    <p><span className="font-semibold text-foreground/80">Mon - Thu:</span> {business.businessHours.monday}</p>
                    <p><span className="font-semibold text-foreground/80">Friday:</span> {business.businessHours.friday}</p>
                    <p><span className="font-semibold text-foreground/80">Saturday:</span> {business.businessHours.saturday}</p>
                    <p><span className="font-semibold text-foreground/80">Sunday:</span> {business.businessHours.sunday}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true, margin: '-50px' }}
              className="bg-dark-bg border border-foreground/10 rounded-lg shadow-lg p-8 hover:shadow-2xl transition-all group hover:translate-y-[-4px]"
            >
              <div className="flex items-start gap-4">
                <Mail className="text-accent flex-shrink-0 mt-1 group-hover:scale-110 transition-transform" size={24} />
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Follow Us</h3>
                  <div className="flex gap-3 mt-2">
                    <a href={business.socialLinks.instagram} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-foreground/10 hover:bg-accent text-white hover:text-white rounded-lg transition-all text-xs font-medium">
                      Instagram
                    </a>
                    <a href={business.socialLinks.facebook} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-foreground/10 hover:bg-accent text-white hover:text-white rounded-lg transition-all text-xs font-medium">
                      Facebook
                    </a>
                    <a href={business.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer"
                      className="px-4 py-2 bg-foreground/10 hover:bg-green-600 text-white hover:text-white rounded-lg transition-all text-xs font-medium">
                      WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Google Maps */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: true, margin: '-50px' }}
          className="mt-16 rounded-lg overflow-hidden shadow-lg border border-foreground/10"
        >
          <iframe
            src={business.googleMapsEmbedUrl}
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Salon location map"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
