'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setSubmitMessage('Thank you for your message! We will get back to you soon.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    })
    setIsSubmitting(false)

    setTimeout(() => {
      setSubmitMessage('')
    }, 5000)
  }

  return (
    <div style={{ fontFamily: 'var(--font-inter), sans-serif', background: '#fff' }}>

      {/* Hero Section */}
      <section style={{
        padding: isMobile ? '85px 0 40px 0' : '100px 0 60px 0',
        background: '#ebfcfc',
        overflow: 'hidden',
        position: 'relative'
      }}>
        {/* Decorative Circle */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(18, 220, 250, 0.1) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>

        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 24px',
          textAlign: 'center',
          position: 'relative',
          zIndex: 2
        }}>
          <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}>
            <span style={{
              backgroundColor: '#ffd700',
              color: '#204572',
              padding: '10px 24px',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: '800',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              display: 'inline-block',
              fontFamily: "'Arial Black', 'Arial Bold', sans-serif"
            }}>
              Contact Us
            </span>
          </div>

          <h1 style={{
            fontSize: isMobile ? '36px' : '56px',
            fontWeight: '900',
            color: '#1a3d5c',
            marginBottom: '24px',
            fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
            letterSpacing: '-1px',
            lineHeight: '1.2'
          }}>
            Let's Start a Conversation.
          </h1>
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: '#204572',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6',
            fontWeight: '500'
          }}>
            Whether you have a question about our courses, need assistance with enrollment, or just want to explore partnership opportunities, we're here to help.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section style={{ padding: '60px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.5fr', gap: '40px' }}>

            {/* Contact Info Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{
                background: '#f8fafc',
                padding: '32px',
                borderRadius: '20px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px rgba(0,0,0,0.02)'
              }}>
                <h2 style={{
                  fontSize: '22px',
                  fontWeight: '800',
                  color: '#1a3d5c',
                  marginBottom: '24px',
                  fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
                }}>
                  Get In Touch
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                  {/* Phone */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '40px', height: '40px', borderRadius: '10px', background: '#eff6ff',
                      color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                    }}>
                      <FaPhone />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>Phone</h3>
                      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>+91 78128 76787</p>
                      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>04566 359495</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '40px', height: '40px', borderRadius: '10px', background: '#f0fdf4',
                      color: '#16a34a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                    }}>
                      <FaEnvelope />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>Email</h3>
                      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>learn@darecentre.in</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '40px', height: '40px', borderRadius: '10px', background: '#fff7ed',
                      color: '#ea580c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                    }}>
                      <FaMapMarkerAlt />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>Visit Us</h3>
                      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>
                        Durkkas Academy of Research and Education,<br />
                        58/2, MDR Nagar North, SBK College Road,<br />
                        Aruppukottai - 626101.<br />
                        Virudhunagar District, Tamilnadu
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{
                      minWidth: '40px', height: '40px', borderRadius: '10px', background: '#f5f3ff',
                      color: '#7c3aed', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px'
                    }}>
                      <FaClock />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '15px', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>Working Hours</h3>
                      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Mon - Fri: 9:00 AM - 6:00 PM</p>
                      <p style={{ color: '#64748b', fontSize: '14px', lineHeight: '1.5' }}>Saturday: 9:00 AM - 4:00 PM</p>
                    </div>
                  </div>

                </div>

                {/* Social Links */}
                <div style={{ marginTop: '30px', paddingTop: '24px', borderTop: '1px solid #e2e8f0' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {[FaFacebook, FaInstagram, FaLinkedin, FaYoutube].map((Icon, idx) => (
                      <a key={idx} href="#" style={{
                        width: '36px', height: '36px', borderRadius: '8px', border: '1px solid #e2e8f0',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#64748b',
                        transition: 'all 0.2s', background: '#fff'
                      }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = '#204572'
                          e.currentTarget.style.color = '#204572'
                          e.currentTarget.style.background = '#ebfcfc'
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = '#e2e8f0'
                          e.currentTarget.style.color = '#64748b'
                          e.currentTarget.style.background = '#fff'
                        }}
                      >
                        <Icon size={14} />
                      </a>
                    ))}
                  </div>
                </div>

              </div>



            </div>

            {/* Contact Form */}
            <div>
              <div style={{
                background: '#fff',
                padding: isMobile ? '0' : '0 10px',
              }}>
                <h2 style={{
                  fontSize: isMobile ? '28px' : '32px',
                  fontWeight: '900',
                  color: '#1a3d5c',
                  marginBottom: '16px',
                  fontFamily: "'Arial Black', 'Arial Bold', sans-serif"
                }}>
                  Send us a Message
                </h2>
                <p style={{
                  color: '#64748b', fontSize: '16px', marginBottom: '32px'
                }}>
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your Name"
                        style={{
                          width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0',
                          outline: 'none', fontSize: '14px', color: '#1e293b', background: '#f8fafc',
                          transition: 'all 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#204572'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        style={{
                          width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0',
                          outline: 'none', fontSize: '14px', color: '#1e293b', background: '#f8fafc',
                          transition: 'all 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#204572'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Phone</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91"
                        style={{
                          width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0',
                          outline: 'none', fontSize: '14px', color: '#1e293b', background: '#f8fafc',
                          transition: 'all 0.2s'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#204572'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Subject</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        style={{
                          width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0',
                          outline: 'none', fontSize: '14px', color: '#1e293b', background: '#f8fafc',
                          transition: 'all 0.2s', cursor: 'pointer'
                        }}
                        onFocus={(e) => e.target.style.borderColor = '#204572'}
                        onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                      >
                        <option value="">Select a subject</option>
                        <option value="admissions">Admissions</option>
                        <option value="workshop">Workshops</option>
                        <option value="internship">Internships</option>
                        <option value="campus_visit">Campus Visit</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={{ display: 'block', fontSize: '13px', fontWeight: '700', color: '#334155', marginBottom: '6px' }}>Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us how we can help you..."
                      style={{
                        width: '100%', padding: '12px', borderRadius: '8px', border: '1px solid #e2e8f0',
                        outline: 'none', fontSize: '14px', color: '#1e293b', background: '#f8fafc',
                        transition: 'all 0.2s', resize: 'vertical'
                      }}
                      onFocus={(e) => e.target.style.borderColor = '#204572'}
                      onBlur={(e) => e.target.style.borderColor = '#e2e8f0'}
                    />
                  </div>

                  {/* Campus Visit Checkbox */}
                  <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input type="checkbox" id="tour" style={{ width: '16px', height: '16px', accentColor: '#204572' }} />
                    <label htmlFor="tour" style={{ fontSize: '14px', color: '#475569', fontWeight: '500', cursor: 'pointer' }}>
                      I am interested in scheduling a campus tour
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    style={{
                      width: '100%',
                      background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                      color: '#ffffff',
                      padding: '14px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      boxShadow: '0 4px 12px rgba(32, 69, 114, 0.3)',
                      transition: 'all 0.3s ease',
                      opacity: isSubmitting ? 0.8 : 1
                    }}
                    onMouseEnter={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(-2px)'
                        e.currentTarget.style.boxShadow = '0 6px 16px rgba(32, 69, 114, 0.4)'
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isSubmitting) {
                        e.currentTarget.style.transform = 'translateY(0)'
                        e.currentTarget.style.boxShadow = '0 4px 12px rgba(32, 69, 114, 0.3)'
                      }
                    }}
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>

                  {submitMessage && (
                    <div style={{
                      marginTop: '20px',
                      padding: '12px',
                      borderRadius: '8px',
                      background: '#f0fdf4',
                      color: '#16a34a',
                      fontSize: '14px',
                      textAlign: 'center',
                      fontWeight: '600'
                    }}>
                      {submitMessage}
                    </div>
                  )}
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ height: '400px', width: '100%', background: '#e2e8f0' }}>
        <iframe
          src="https://maps.google.com/maps?q=Durkkas+Academy+of+Research+and+Education+(A+Division+of+Durkkas+Innovations+Pvt.+Ltd)&t=&z=15&ie=UTF8&iwloc=&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, filter: 'grayscale(0%)' }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="DARE Centre Location"
        ></iframe>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
      <section style={{ padding: '80px 24px', background: '#ebfcfc' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{
              fontSize: isMobile ? '28px' : '40px',
              fontWeight: '900',
              color: '#1a3d5c',
              marginBottom: '16px',
              fontFamily: "'Arial Black', 'Arial Bold', sans-serif"
            }}>
              Frequently Asked Questions
            </h2>
            <p style={{ color: '#204572', fontSize: '18px', fontWeight: '500' }}>Common questions about our campus and admissions</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '32px' }}>
            {[
              { q: 'What courses do you offer?', a: 'We offer specialized courses in AI, Robotics, Logistics 4.0, and various VAC programs tailored for college students.' },
              { q: 'How do I enroll?', a: 'You can apply directly through our website using the forms on the Internship or Workshop pages, or visit our campus for spot admission.' },
              { q: 'Do you provide certifications?', a: 'Yes, all our programs include industry-recognized certifications upon successful completion of projects and assessments.' },
              { q: 'Can I visit the campus?', a: 'Absolutely. We encourage students and parents to visit DARE Centre. Please call us ahead to schedule a guided tour.' },
            ].map((item, index) => (
              <div key={index} style={{
                background: '#fff',
                padding: '32px',
                borderRadius: '16px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
              }}>
                <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '12px' }}>{item.q}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '15px' }}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
