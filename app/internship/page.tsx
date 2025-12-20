'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'

export default function InternshipPage() {
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const internships = [
        {
            title: 'AI & Data Science',
            icon: '🤖',
            desc: 'Gain experience working with real-world datasets and industry use cases. Interns learn the complete data lifecycle — from data collection and cleaning to model building and insight generation.',
            details: [
                'Sentiment Analysis on customer data',
                'Predictive Maintenance systems',
                'AI-powered Chatbots and automation tools',
                'ML model building & deployment basics'
            ]
        },
        {
            title: 'Full Stack Development',
            icon: '💻',
            desc: 'Build scalable, production-ready web applications using modern technologies. Interns work in full development cycles, following industry standards and best practices.',
            details: [
                'React, Next.js, Node.js',
                'REST APIs and backend logic',
                'Database management with MongoDB',
                'Application deployment and performance optimization'
            ]
        },
        {
            title: 'Robotics & IoT',
            icon: '⚙️',
            desc: 'Get hands-on exposure to hardware and automation systems. Interns work directly with sensors, microcontrollers, and real devices to create smart solutions.',
            details: [
                'Arduino & Raspberry Pi',
                'Sensor integration and data collection',
                'Automation and control systems',
                'IoT-based smart device development'
            ]
        },
        {
            title: 'Digital Marketing',
            icon: '📈',
            desc: 'Learn how brands grow in the digital space through data-driven marketing strategies. Interns work on real campaigns and analyze live performance metrics.',
            details: [
                'SEO optimization',
                'Social media strategy & content planning',
                'Campaign analysis and traffic insights',
                'Brand growth and performance tracking'
            ]
        },
        {
            title: 'Finance & Business Analytics',
            icon: '📊',
            desc: 'Develop strong analytical and strategic thinking skills by working with financial and business data. Improve decision-making through data-backed insights.',
            details: [
                'Financial modeling and forecasting',
                'Market research and competitor analysis',
                'Business performance evaluation',
                'Data-backed decision-making'
            ]
        },
        {
            title: 'Human Resources (HR)',
            icon: '👥',
            desc: 'Understand how organizations manage people, performance, and culture. Interns gain exposure to real HR workflows and team management practices.',
            details: [
                'Talent acquisition and onboarding',
                'Employee engagement strategies',
                'Organizational development',
                'HR operations and reporting'
            ]
        }
    ]

    return (
        <div style={{ fontFamily: 'var(--font-inter), sans-serif', background: '#fff' }}>
            {/* Hero Section */}
            <HeroSection
                tagline="CAREER ACCELERATOR PROGRAM"
                title="Industry-Focused Internship Programs with <span style='color: #dc2626'>Live Project</span> Experience"
                description="We offer hands-on internship programs for college students, designed to bridge the gap between academic learning and real-world industry requirements. Every intern works on live, real-time projects, gaining practical exposure, mentorship, and job-ready skills."
                buttonText="Apply Now"
                buttonAction={() => document.getElementById('apply-section')?.scrollIntoView({ behavior: 'smooth' })}
                videoEmbed="https://www.youtube.com/embed/TG4RNGlx1Q8?rel=0"
                backgroundType="gradient"
            />

            {/* Internships List */}
            <section style={{ padding: '80px 24px', background: '#fff' }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <h2 style={{
                        textAlign: 'center',
                        fontSize: isMobile ? '28px' : '36px',
                        fontWeight: '900', // Matching globals
                        color: '#1a3d5c', // Matching globals
                        marginBottom: '16px',
                        fontFamily: "'Arial Black', 'Arial Bold', 'Helvetica Neue', sans-serif",
                        textTransform: 'uppercase',
                        letterSpacing: '2.5px'
                    }}>
                        Available Internship Domains
                    </h2>
                    <p style={{
                        textAlign: 'center',
                        fontSize: '18px',
                        color: '#64748b',
                        maxWidth: '800px',
                        margin: '0 auto 60px auto'
                    }}>
                        Choose your path and gain expertise in high-demand fields.
                    </p>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '32px'
                    }}>
                        {internships.map((item, index) => (
                            <div key={index} style={{
                                padding: '32px',
                                borderRadius: '16px',
                                border: '1px solid #e2e8f0',
                                background: '#fff',
                                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                            }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-5px)'
                                    e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.1)'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)'
                                    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)'
                                }}
                            >
                                <div style={{ fontSize: '40px', marginBottom: '20px' }}>{item.icon}</div>
                                <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>{item.title}</h3>
                                <p style={{ color: '#475569', lineHeight: '1.6', marginBottom: '24px' }}>{item.desc}</p>

                                <div style={{ background: '#f1f5f9', padding: '20px', borderRadius: '12px' }}>
                                    <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#334155', marginBottom: '12px', textTransform: 'uppercase' }}>Focus Areas:</h4>
                                    <ul style={{ paddingLeft: '20px', margin: 0 }}>
                                        {item.details.map((detail, idx) => (
                                            <li key={idx} style={{ color: '#475569', fontSize: '14px', marginBottom: '8px' }}>{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certificate Section */}
            <section id="apply-section" style={{
                padding: '80px 24px',
                background: '#f8fafc',
                textAlign: 'center'
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
                    <h2 style={{
                        fontSize: isMobile ? '28px' : '36px',
                        fontWeight: '900',
                        color: '#1a3d5c',
                        marginBottom: '20px',
                        fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        Industry Recognized Certification
                    </h2>
                    <p style={{
                        fontSize: '18px',
                        color: '#334155',
                        marginBottom: '48px',
                        maxWidth: '800px',
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        lineHeight: '1.6'
                    }}>
                        Upon successful completion, you will receive a verified certificate specific to your internship domain. Whether you choose AI, Robotics, or Full Stack Development, your certification will validate the real-world skills and projects you mastered.
                    </p>

                    {/* Dummy Certificate Images Grid */}
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
                        gap: '32px',
                        marginTop: '48px'
                    }}>
                        {/* Dummy Image 1 */}
                        <div style={{
                            background: '#fff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                height: '240px',
                                background: '#cbd5e1',
                                backgroundImage: "url('/internship(2).jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>Course Completion</h3>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>Verified certificate of completion for your specific domain.</p>
                            </div>
                        </div>

                        {/* Dummy Image 2 */}
                        <div style={{
                            background: '#fff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                height: '240px',
                                background: '#cbd5e1',
                                backgroundImage: "url('/internship(1).jpg')",
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>Project Excellence</h3>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>Recognition for outstanding performance in live projects.</p>
                            </div>
                        </div>

                        {/* Dummy Image 3 */}
                        <div style={{
                            background: '#fff',
                            borderRadius: '16px',
                            overflow: 'hidden',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                            transition: 'transform 0.3s ease',
                        }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-8px)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                        >
                            <div style={{
                                height: '240px',
                                background: '#cbd5e1',
                                backgroundImage: 'url(https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=600&q=80)',
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}></div>
                            <div style={{ padding: '20px' }}>
                                <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', marginBottom: '8px' }}>Internship Experience</h3>
                                <p style={{ fontSize: '14px', color: '#64748b' }}>Proof of internship tenure and skills acquired.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
