'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'

export default function WorkshopPage() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const vacModes = [
    {
      title: 'Online Learning',
      icon: '💻',
      description: 'Access our state-of-the-art DARE Learning Portal from anywhere. Master concepts at your own pace with expert-curated content.',
      features: [
        'Full access to Learning Management System (LMS)',
        'Recorded sessions & Live mentorship',
        'Digital assignments & assessments',
        'E-Certificate upon completion'
      ]
    },
    {
      title: 'Offline Intensive',
      icon: '🏛️',
      description: 'Immersive hands-on training at our centre or your campus. Experience the perfect blend of digital learning and physical practice.',
      features: [
        'Integrated Portal Access + In-Person Training',
        'Flexible Durations: 3 Days, 5 Days, 14 Days, or 6 Months',
        'Real-time hardware/software interaction',
        'Physical Certificate & Project Verification'
      ]
    }
  ]

  return (
    <div style={{ fontFamily: 'var(--font-inter), sans-serif', background: '#fff' }}>
      {/* Hero Section */}
      <HeroSection
        tagline="SKILL DEVELOPMENT & VAC"
        title="Expert-Led <span style='color: #dc2626'>Workshops & Value Added</span> Courses"
        description="Empowering college students with industry-relevant skills through our comprehensive Value Added Courses (VAC). Choose from online or offline modes with flexible durations specifically designed to bridge the gap between academia and industry."
        buttonText="Apply Now"
        buttonAction={() => document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })}
        imageSrc="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&q=80"
        imageAlt="Workshop Session"
        backgroundType="gradient"
      />

      {/* VAC Modes Section */}
      <section style={{ padding: '80px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <h2 style={{
            textAlign: 'center',
            fontSize: isMobile ? '28px' : '36px',
            fontWeight: '900',
            color: '#1a3d5c',
            marginBottom: '16px',
            fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}>
            Flexible Learning Modes
          </h2>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '800px',
            margin: '0 auto 60px auto',
            lineHeight: '1.6'
          }}>
            Whether you prefer self-paced innovative learning or intensive hands-on bootcamps, we have the right structure for you.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '40px'
          }}>
            {vacModes.map((mode, index) => (
              <div key={index} style={{
                padding: '40px',
                borderRadius: '24px',
                background: index === 0 ? '#eff6ff' : '#f0fdf4', // Light blue and light green tints
                border: '1px solid rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ fontSize: '64px', marginBottom: '24px' }}>{mode.icon}</div>
                <h3 style={{
                  fontSize: '28px',
                  fontWeight: '800',
                  color: '#1e293b',
                  marginBottom: '16px',
                  fontFamily: "'Arial Black', 'Arial Bold', sans-serif"
                }}>
                  {mode.title}
                </h3>
                <p style={{ fontSize: '16px', color: '#475569', marginBottom: '32px', lineHeight: '1.7' }}>
                  {mode.description}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, width: '100%', textAlign: 'left' }}>
                  {mode.features.map((feature, idx) => (
                    <li key={idx} style={{
                      borderBottom: '1px solid rgba(0,0,0,0.05)',
                      padding: '12px 0',
                      color: '#334155',
                      fontWeight: '600',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px'
                    }}>
                      <span style={{ color: index === 0 ? '#2563eb' : '#16a34a', fontSize: '18px' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Curriculum - Updated Theme */}
      <section style={{ padding: '80px 24px', background: '#ebfcfc', color: '#1a3d5c' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
              marginBottom: '24px',
              fontFamily: "'Arial Black', 'Arial Bold', sans-serif"
            }}>
              Signature Curriculum
            </span>
            <h2 style={{
              fontSize: isMobile ? '28px' : '40px',
              fontWeight: '900',
              color: '#1a3d5c',
              marginBottom: '20px',
              fontFamily: "'Arial Black', 'Arial Bold', sans-serif"
            }}>
              Logistics 4.0 & AI Integration
            </h2>
            <p style={{ maxWidth: '700px', margin: '0 auto', color: '#204572', fontSize: '18px', lineHeight: '1.7', fontWeight: '600' }}>
              Experience the future of industry with our flagship workshop module covering the evolution from basic automation to full-scale AI deployment.
            </p>
          </div>

          {/* Timeline / Evolution */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(4, 1fr)',
            gap: '20px',
            marginBottom: '80px'
          }}>
            {[
              { num: '01', title: 'Steam', subtitle: 'Mechanization' },
              { num: '02', title: 'Electricity', subtitle: 'Mass Production' },
              { num: '03', title: 'Digital', subtitle: 'Computing' },
              { num: '04', title: 'AI & Data', subtitle: 'Logistics 4.0', active: true }
            ].map((item, index) => (
              <div key={index} style={{
                background: item.active ? 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)' : '#ffffff',
                padding: '30px',
                borderRadius: '16px',
                position: 'relative',
                boxShadow: item.active ? '0 10px 25px rgba(32, 69, 114, 0.2)' : '0 4px 12px rgba(0,0,0,0.05)',
                border: item.active ? 'none' : '1px solid #e2e8f0',
                transition: 'transform 0.3s ease',
              }}
                onMouseEnter={(e) => {
                  if (!item.active) {
                    e.currentTarget.style.transform = 'translateY(-5px)'
                    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)'
                  }
                }}
                onMouseLeave={(e) => {
                  if (!item.active) {
                    e.currentTarget.style.transform = 'translateY(0)'
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)'
                  }
                }}
              >
                <div style={{
                  fontSize: '48px',
                  fontWeight: '900',
                  color: item.active ? '#fff' : '#cbd5e1',
                  marginBottom: '10px',
                  lineHeight: 1
                }}>{item.num}</div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', marginBottom: '5px', color: item.active ? '#fff' : '#1e293b' }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: item.active ? '#e0f2fe' : '#64748b', fontWeight: '500' }}>{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Durkkas Business Framework (DBF) */}
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            padding: isMobile ? '30px' : '50px',
            marginBottom: '60px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '16px', color: '#1a3d5c' }}>
                Durkkas Business Framework (DBF)
              </h3>
              <p style={{ color: '#475569', maxWidth: '700px', margin: '0 auto', fontSize: '16px', lineHeight: '1.6' }}>
                A 7-stage methodology to drive continuous improvement using data. We teach students how to apply each stage to real-world scenarios.
              </p>
            </div>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              alignItems: 'center'
            }}>
              {['Data', 'Understand', 'Recommend', 'Keep', 'KPI', 'Automate', 'Scale'].map((stage, i, arr) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center' }}>
                  <div style={{
                    padding: '12px 24px',
                    borderRadius: '50px',
                    background: i === arr.length - 1 ? '#0ea5e9' : '#f1f5f9',
                    color: i === arr.length - 1 ? '#fff' : '#334155',
                    fontWeight: '700',
                    fontSize: '14px',
                    border: i === arr.length - 1 ? 'none' : '1px solid #e2e8f0',
                    boxShadow: i === arr.length - 1 ? '0 4px 12px rgba(14, 165, 233, 0.3)' : 'none'
                  }}>
                    {stage}
                  </div>
                  {i < arr.length - 1 && (
                    <div style={{ margin: '0 8px', color: '#cbd5e1', fontSize: '20px' }}>→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Recent Workshop Highlight - Subbulakshmi College */}
          <div style={{
            background: '#fff',
            borderRadius: '24px',
            padding: isMobile ? '30px' : '60px',
            marginBottom: '60px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
            border: '1px solid #e2e8f0'
          }}>
            <div style={{ marginBottom: '40px', textAlign: 'center' }}>
              <span style={{
                background: '#dbeafe', color: '#1e40af', padding: '6px 16px', borderRadius: '50px',
                fontSize: '12px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px'
              }}>
                Recent Highlight
              </span>
              <h3 style={{ fontSize: '32px', fontWeight: '900', color: '#1a3d5c', margin: '16px 0 8px 0' }}>
                SLCS (Subbalakshmi Lakshmipathy College of Science)
              </h3>
              <p style={{ fontSize: '18px', color: '#64748b', fontWeight: '500' }}>
                AI-Powered Logistics Practitioner (Foundation Level)
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1.2fr', gap: '40px', alignItems: 'center' }}>
              <div>
                <h4 style={{ fontSize: '20px', fontWeight: '800', color: '#1e293b', marginBottom: '16px' }}>
                  Course Structure: The 2:2:2 Model
                </h4>
                <p style={{ color: '#475569', marginBottom: '24px', lineHeight: '1.7' }}>
                  We delivered a comprehensive session aligned with the DURKKAS Business Framework, structured to maximize learning retention.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { label: 'Teaching Session', desc: 'Core Concepts & Theories', color: '#3b82f6' },
                    { label: 'Hands-on Session', desc: 'Tool Training & Simulation', color: '#a855f7' },
                    { label: 'Practical Session', desc: 'Real-world Project Implementation', color: '#22c55e' }
                  ].map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '16px', background: '#f8fafc', padding: '16px', borderRadius: '12px' }}>
                      <div style={{
                        width: '40px', height: '40px', borderRadius: '50%', background: item.color,
                        color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800'
                      }}>2hr</div>
                      <div>
                        <div style={{ fontWeight: '700', color: '#1e293b' }}>{item.label}</div>
                        <div style={{ fontSize: '13px', color: '#64748b' }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dummy Gallery Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {[
                  '/workshop (1).jpg',
                  '/workshop (2).jpg',
                  '/workshop (3).jpg',
                  '/workshop (4).jpg'
                ].map((img, i) => (
                  <div key={i} style={{
                    aspectRatio: '4/3',
                    background: '#e2e8f0',
                    borderRadius: '12px',
                    backgroundImage: `url('${img}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
                  }}></div>
                ))}
              </div>
            </div>
          </div>

          {/* Analytics & KPIs */}
          <div style={{
            background: '#ffffff',
            borderRadius: '24px',
            padding: isMobile ? '30px' : '60px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.05)'
          }}>
            <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '60px', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '28px', fontWeight: '800', marginBottom: '20px', color: '#1a3d5c' }}>From Data to Knowledge</h3>
                <p style={{ color: '#475569', marginBottom: '30px', lineHeight: '1.7', fontSize: '16px' }}>
                  We teach the three critical levels of analytics to turn raw numbers into actionable business insights.
                </p>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {[
                    { type: 'Descriptive', q: '"What happened?"', desc: 'Understanding past events and data patterns.' },
                    { type: 'Predictive', q: '"What might happen?"', desc: 'Forecasting future trends using ML.' },
                    { type: 'Prescriptive', q: '"What should we do?"', desc: 'AI-driven recommendations for optimal action.' }
                  ].map((level, i) => (
                    <li key={i} style={{ marginBottom: '24px', paddingLeft: '20px', borderLeft: '3px solid #2563eb' }}>
                      <strong style={{ color: '#1e293b', fontSize: '18px', display: 'block' }}>{level.type} <span style={{ color: '#2563eb' }}>— {level.q}</span></strong>
                      <span style={{ color: '#64748b', fontSize: '14px' }}>{level.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <div style={{ background: '#f8fafc', padding: '30px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
                  <h4 style={{ color: '#64748b', marginBottom: '20px', fontSize: '16px', textTransform: 'uppercase', letterSpacing: '1px', fontWeight: '800' }}>Focus on KPIs</h4>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    {[
                      { label: 'OTIF Score', value: '94%' },
                      { label: 'Efficiency', value: '99.9%' },
                      { label: 'Turnaround', value: '45m' },
                      { label: 'Rating', value: '4.8/5' }
                    ].map((kpi, j) => (
                      <div key={j} style={{ background: '#fff', padding: '15px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' }}>
                        <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '5px', fontWeight: '600' }}>{kpi.label}</div>
                        <div style={{ fontSize: '24px', fontWeight: '800', color: '#0ea5e9' }}>{kpi.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Partnership Section */}
      <section id="apply-section" style={{
        padding: '80px 24px',
        background: '#ebfcfc',
        color: '#1a3d5c',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorative Elements */}
        <div style={{
          position: 'absolute',
          top: '-50%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(32, 69, 114, 0.05) 0%, rgba(0,0,0,0) 70%)',
          borderRadius: '50%',
          zIndex: 1
        }}></div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 2 }}>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.5fr 1fr', gap: '60px', alignItems: 'center' }}>

            {/* Left Content */}
            <div>
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
                marginBottom: '24px',
                fontFamily: "'Arial Black', 'Arial Bold', sans-serif"
              }}>
                Institutional Partnership
              </span>
              <h2 style={{
                fontSize: isMobile ? '32px' : '48px',
                fontWeight: '900',
                color: '#1a3d5c',
                marginBottom: '24px',
                fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
                lineHeight: '1.2'
              }}>
                Bring the Future to <br /> Your Classroom.
              </h2>
              <p style={{
                fontSize: '18px',
                color: '#204572',
                marginBottom: '40px',
                lineHeight: '1.7',
                maxWidth: '600px',
                fontWeight: '600'
              }}>
                Partner with DARE to establish a <span style={{ color: '#dc2626', fontWeight: 'bold' }}>Center of Excellence</span> on your campus. We customize our expert-led workshops to align with your academic goals, bridging the gap between curriculum and industry demands.
              </p>

              <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                <a href="mailto:collaborate@darecentre.in" style={{
                  background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                  color: '#ffffff',
                  padding: '16px 32px',
                  borderRadius: '8px',
                  fontSize: '16px',
                  fontWeight: '700',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 4px 12px rgba(32, 69, 114, 0.4)',
                  transition: 'all 0.3s ease'
                }}>
                  Start a Collaboration <span>→</span>
                </a>
              </div>
            </div>

            {/* Right Feature Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr',
              gap: '24px'
            }}>
              {[
                { title: 'Custom Curriculum', desc: 'Tailored syllabus that complements your semester subjects.', icon: '📚' },
                { title: 'Faculty Development', desc: 'Training sessions to keep your staff updated with Industry 4.0.', icon: '👨‍🏫' },
                { title: 'Certification', desc: 'Globally recognized certification for every participant.', icon: '📜' }
              ].map((feature, idx) => (
                <div key={idx} style={{
                  background: '#fff',
                  padding: '24px',
                  borderRadius: '16px',
                  border: '1px solid #e2e8f0',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start'
                }}>
                  <div style={{ fontSize: '24px', background: '#f1f5f9', width: '50px', height: '50px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {feature.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#1e293b', marginBottom: '8px' }}>{feature.title}</h4>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
