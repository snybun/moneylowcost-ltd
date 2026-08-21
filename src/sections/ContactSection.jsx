import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, MapPin, Mail, Send, CheckCircle2, Clock } from 'lucide-react';
import Container from '../components/Container';
import Button from '../components/Button';
import { Parallax, ParallaxGlow, ParallaxTilt } from '../components/Parallax';

export default function ContactSection() {
  const sectionRef = useRef(null);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 4000);
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="bg-[#FFFFFF] py-24 md:py-36 border-b border-[#E5E5E7] relative overflow-hidden"
    >
      {/* Parallax Ambient Glow */}
      <ParallaxGlow
        color="from-[#0071E3]/10 via-[#34C759]/8 to-transparent"
        size="w-[600px] h-[600px]"
        speed={-0.15}
        className="top-1/3 -right-24"
      />
      <ParallaxGlow
        color="from-[#34C759]/10 via-[#0071E3]/8 to-transparent"
        size="w-[500px] h-[500px]"
        speed={0.2}
        className="bottom-10 -left-20"
      />

      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="text-xs font-bold tracking-widest text-[#0071E3] uppercase block mb-3">
            Get In Touch
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-[#1D1D1F] mb-4">
            We would love to hear from you.
          </h2>
          <p className="text-base sm:text-lg text-[#6E6E73] font-normal leading-relaxed">
            Have questions or need assistance? Reach out to our team anytime.
          </p>
        </motion.div>

        {/* 2-Column Desktop Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Apple-Style Contact Form (7 cols) */}
          <div className="lg:col-span-7 w-full">
            <Parallax speed={0.08} className="w-full">
              <ParallaxTilt maxTilt={3} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#F5F5F7] border border-[#E5E5E7] rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 shadow-xs"
                >
                  <h3 className="text-2xl font-bold text-[#1D1D1F] mb-2 tracking-tight">
                    Send us a message
                  </h3>
                  <p className="text-xs text-[#6E6E73] mb-8 font-normal">
                    Fill out the form below and we will get back to you promptly.
                  </p>

                  {submitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="py-12 text-center bg-[#FFFFFF] rounded-2xl border border-[#E5E5E7] space-y-3"
                    >
                      <CheckCircle2 className="w-12 h-12 text-[#34C759] mx-auto" />
                      <h4 className="text-lg font-bold text-[#1D1D1F]">Message Sent Successfully</h4>
                      <p className="text-xs text-[#6E6E73] max-w-sm mx-auto">
                        Thank you for reaching out to Money Low Cost. Our support team will get in touch with you shortly.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Name Fields Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                            First Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            placeholder="Jane"
                            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7] text-sm text-[#1D1D1F] placeholder-[#6E6E73]/50 focus:outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                            Last Name *
                          </label>
                          <input
                            type="text"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            placeholder="Doe"
                            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7] text-sm text-[#1D1D1F] placeholder-[#6E6E73]/50 focus:outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Contact Fields Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="jane@example.com"
                            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7] text-sm text-[#1D1D1F] placeholder-[#6E6E73]/50 focus:outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            placeholder="054-2025386"
                            className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7] text-sm text-[#1D1D1F] placeholder-[#6E6E73]/50 focus:outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all"
                          />
                        </div>
                      </div>

                      {/* Message Field */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1D1D1F] mb-1.5">
                          Message *
                        </label>
                        <textarea
                          rows={5}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          placeholder="How can we help you today?"
                          className="w-full px-4 py-3 rounded-xl bg-[#FFFFFF] border border-[#E5E5E7] text-sm text-[#1D1D1F] placeholder-[#6E6E73]/50 focus:outline-none focus:border-[#0071E3] focus:ring-2 focus:ring-[#0071E3]/20 transition-all resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <Button type="submit" variant="primary" className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold justify-center">
                          <span>Submit Message</span>
                          <Send className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </form>
                  )}
                </motion.div>
              </ParallaxTilt>
            </Parallax>
          </div>

          {/* Right Column: Office Contact Details Card (5 cols) */}
          <div className="lg:col-span-5 w-full">
            <Parallax speed={-0.08} className="w-full">
              <ParallaxTilt maxTilt={3} className="w-full">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="bg-[#F5F5F7] border border-[#E5E5E7] rounded-[28px] sm:rounded-[32px] p-7 sm:p-10 flex flex-col justify-between space-y-8"
                >
                  <div>
                    <span className="text-[10px] font-bold tracking-widest text-[#0071E3] uppercase bg-[#FFFFFF] px-3 py-1 rounded-full border border-[#E5E5E7] inline-block mb-4">
                      Headquarters
                    </span>

                    <h3 className="text-xl font-bold tracking-tight text-[#1D1D1F] uppercase mb-6">
                      Israel Office Contact Details
                    </h3>

                    <div className="space-y-4">
                      {/* Telephone */}
                      <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] flex items-center gap-4 transition-transform duration-200 hover:scale-[1.01]">
                        <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] shrink-0">
                          <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-medium text-[#6E6E73] block">Telephone</span>
                          <a href="tel:0542025386" className="text-sm font-bold text-[#1D1D1F] hover:text-[#0071E3] transition-colors">
                            054-2025386
                          </a>
                        </div>
                      </div>

                      {/* Office Address */}
                      <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] flex items-center gap-4 transition-transform duration-200 hover:scale-[1.01]">
                        <div className="w-10 h-10 rounded-xl bg-[#34C759]/10 flex items-center justify-center text-[#34C759] shrink-0">
                          <MapPin className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-medium text-[#6E6E73] block">Office Address</span>
                          <span className="text-sm font-bold text-[#1D1D1F]">
                            10 Trumpeldor St. Bnei-Brak
                          </span>
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="p-4 rounded-2xl bg-[#FFFFFF] border border-[#E5E5E7] flex items-center gap-4 transition-transform duration-200 hover:scale-[1.01]">
                        <div className="w-10 h-10 rounded-xl bg-[#0071E3]/10 flex items-center justify-center text-[#0071E3] shrink-0">
                          <Mail className="w-5 h-5" />
                        </div>
                        <div>
                          <span className="text-[11px] font-medium text-[#6E6E73] block">Email Address</span>
                          <a href="mailto:moneylowcost@gmail.com" className="text-sm font-bold text-[#0071E3] hover:underline break-all">
                            moneylowcost@gmail.com
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Quick Response Support Pill */}
                  <div className="pt-4 border-t border-[#E5E5E7] flex items-center gap-3 text-xs text-[#6E6E73]">
                    <Clock className="w-4 h-4 text-[#34C759] shrink-0" />
                    <span>Fast response time & dedicated support agents.</span>
                  </div>
                </motion.div>
              </ParallaxTilt>
            </Parallax>
          </div>

        </div>
      </Container>
    </section>
  );
}
