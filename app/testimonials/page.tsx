'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { FaGoogle, FaStar, FaQuoteLeft, FaCheckCircle, FaUsers, FaAward, FaLightbulb } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'

interface Testimonial {
    id: number
    name: string
    role: string
    content: string
    rating: number
    date: string
    image: string
    isVerified: boolean
    category: 'Student' | 'Professional' | 'Parent'
}

// Google "G" Logo SVG Component
const GoogleGLogo = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
)

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Saju .B",
        role: "Student",
        content: "I had a great experience at Durkkas Academy! The teaching methods are clear, practical, and easy to understand. The teachers are very supportive and patient — they make sure every student gets proper guidance. I highly recommend DARE for anyone looking to learn new skills.",
        rating: 5,
        date: "1 month ago",
        image: "https://images.unsplash.com/photo-1544717297-fa95b3d09204?w=400&q=80",
        isVerified: true,
        category: "Student"
    },
    {
        id: 2,
        name: "Muthu Pandian",
        role: "Parent",
        content: "Best place to learn Robotics in Aruppukkottai. My son learned a lot about how to build and code robots. Excellent mentor guidance and very systematic approach to teaching complex technology.",
        rating: 5,
        date: "2 weeks ago",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        isVerified: true,
        category: "Parent"
    },
    {
        id: 3,
        name: "Sivakumar",
        role: "Engineering Student",
        content: "The Artificial Intelligence and Deep Learning courses are very practical. We worked on real-world datasets which helped me understand AI better than my college curriculum. Best for technical career growth.",
        rating: 5,
        date: "3 months ago",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
        isVerified: true,
        category: "Student"
    },
    {
        id: 4,
        name: "Devi Shri",
        role: "Language Learner",
        content: "Learned German A1 here at DARE School of Languages. The classes are very interactive with a focus on LSRW skills. The tutors are highly qualified and make global languages easy for local students.",
        rating: 5,
        date: "1 month ago",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
        isVerified: true,
        category: "Student"
    },
    {
        id: 5,
        name: "Bala Murugan",
        role: "AI Intern",
        content: "Completed my internship on AI & Data Science. I got real hands-on experience working on live projects under professional mentors. It was an intensive and very useful learning phase for my career.",
        rating: 5,
        date: "5 months ago",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
        isVerified: true,
        category: "Professional"
    },
    {
        id: 6,
        name: "Kavitha R.",
        role: "Parent",
        content: "The robotics workshop was amazing for the kids. My daughter developed a great interest in technology and logical thinking after these sessions. Highly appreciate the DARE team for their efforts.",
        rating: 5,
        date: "4 months ago",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
        isVerified: true,
        category: "Parent"
    },
    {
        id: 7,
        name: "Selvam Ganapathy",
        role: "Working Professional",
        content: "Excellent digital skills training hub. I learned Advanced Excel and Python which have been immensely helpful for my office operations. The curriculum is industry-aligned and very effective.",
        rating: 5,
        date: "2 months ago",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
        isVerified: true,
        category: "Professional"
    },
    {
        id: 8,
        name: "Anitha S.",
        role: "Career Professional",
        content: "Great environment and the best mentors for students in Aruppukkottai. They provide continuous support even after course completion. Truly bridging the gap between local education and global standards.",
        rating: 5,
        date: "6 months ago",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
        isVerified: true,
        category: "Professional"
    }
]

export default function TestimonialsPage() {
    const [filter, setFilter] = useState<'All' | 'Student' | 'Professional' | 'Parent'>('All')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const filteredTestimonials = filter === 'All'
        ? testimonials
        : testimonials.filter(t => t.category === filter)

    return (
        <div className="testimonials-page" style={{ background: '#fcfdfe', minHeight: '100vh', paddingBottom: '100px' }}>
            <HeroSection
                tagline="WALL OF LOVE • STUDENT SUCCESS"
                title="Hear it from our <span style='color: #dc2626'>Global</span> Community"
                description="Real stories from real learners based on Google Reviews. Explore how DARE Centre is transforming lives in Aruppukkottai through innovation and personalized mentorship."
                backgroundType="gradient"
                customMedia={
                    <div className="google-rating-card" style={{
                        background: '#ffffff',
                        padding: '32px',
                        borderRadius: '28px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.08)',
                        border: '1px solid #f1f5f9',
                        textAlign: 'center',
                        maxWidth: '380px',
                        margin: '0 auto'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                            <span style={{ fontWeight: '800', color: '#64748b', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase' }}>GOOGLE REVIEWS</span>
                        </div>
                        <div style={{ fontSize: '56px', fontWeight: '900', color: '#1e293b', marginBottom: '4px', lineHeight: 1 }}>4.9</div>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '12px' }}>
                            {[1, 2, 3, 4, 5].map(s => <FaStar key={s} color="#FFD700" size={20} />)}
                        </div>
                        <div style={{ color: '#64748b', fontSize: '15px', fontWeight: '600', marginBottom: '8px' }}>Based on Verified Community Reviews</div>

                        <a
                            href="https://search.google.com/local/writereview?placeid=0x3b01311784863fc9:0x5589fd70c1be2b38"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '12px',
                                marginTop: '24px',
                                padding: '14px 24px',
                                background: '#ffffff',
                                color: '#1e293b',
                                fontWeight: '700',
                                fontSize: '14px',
                                textDecoration: 'none',
                                borderRadius: '100px',
                                border: '1px solid #e2e8f0',
                                boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-2px)'
                                e.currentTarget.style.boxShadow = '0 8px 15px rgba(0,0,0,0.1)'
                                e.currentTarget.style.background = '#f8fafc'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.05)'
                                e.currentTarget.style.background = '#ffffff'
                            }}
                        >
                            <GoogleGLogo />
                            WRITE A REVIEW
                        </a>
                    </div>
                }
            />

            {/* Stats Section */}
            <div style={{ maxWidth: '1280px', margin: '-40px auto 60px', padding: '0 24px', position: 'relative', zIndex: 10 }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '24px',
                    background: '#204572',
                    padding: '40px',
                    borderRadius: '24px',
                    color: '#ffffff',
                    boxShadow: '0 20px 50px rgba(32, 69, 114, 0.3)'
                }}>
                    <div style={{ textAlign: 'center' }}>
                        <FaUsers size={32} style={{ color: '#12DCFA', marginBottom: '15px' }} />
                        <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>5000+</div>
                        <div style={{ fontSize: '14px', opacity: 0.8, fontWeight: '600' }}>Happy Students</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <FaAward size={32} style={{ color: '#FFD700', marginBottom: '15px' }} />
                        <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>ISO Certified</div>
                        <div style={{ fontSize: '14px', opacity: 0.8, fontWeight: '600' }}>Quality Education</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <FaLightbulb size={32} style={{ color: '#12DCFA', marginBottom: '15px' }} />
                        <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>98%</div>
                        <div style={{ fontSize: '14px', opacity: 0.8, fontWeight: '600' }}>Success Rate</div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <FaStar size={32} style={{ color: '#FFD700', marginBottom: '15px' }} />
                        <div style={{ fontSize: '28px', fontWeight: '900', marginBottom: '5px' }}>4.9/5</div>
                        <div style={{ fontSize: '14px', opacity: 0.8, fontWeight: '600' }}>Avg Rating</div>
                    </div>
                </div>
            </div>

            {/* Filter Tabs */}
            <div style={{ maxWidth: '1280px', margin: '0 auto 40px', padding: '0 24px', display: 'flex', justifyContent: 'center', gap: '12px', flexWrap: 'wrap' }}>
                {['All', 'Student', 'Professional', 'Parent'].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat as any)}
                        style={{
                            padding: '10px 24px',
                            borderRadius: '50px',
                            border: '1px solid #e2e8f0',
                            background: filter === cat ? '#dc2626' : '#ffffff',
                            color: filter === cat ? '#ffffff' : '#475569',
                            fontWeight: '800',
                            fontSize: '14px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: filter === cat ? '0 8px 16px rgba(220, 38, 38, 0.2)' : 'none'
                        }}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Testimonials Grid */}
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '30px'
                }}>
                    {filteredTestimonials.map((t) => (
                        <div
                            key={t.id}
                            style={{
                                background: '#ffffff',
                                padding: '40px',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                position: 'relative',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={e => {
                                e.currentTarget.style.transform = 'translateY(-10px)'
                                e.currentTarget.style.boxShadow = '0 30px 60px rgba(15, 23, 42, 0.1)'
                                e.currentTarget.style.borderColor = '#dc2626'
                            }}
                            onMouseLeave={e => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                                e.currentTarget.style.borderColor = '#e2e8f0'
                            }}
                        >
                            <FaQuoteLeft size={40} style={{ position: 'absolute', top: '20px', right: '40px', opacity: 0.05, color: '#dc2626' }} />

                            <div style={{ display: 'flex', gap: '4px', marginBottom: '20px' }}>
                                {[...Array(t.rating)].map((_, i) => <FaStar key={i} color="#FFD700" size={16} />)}
                            </div>

                            <p style={{
                                fontSize: '17px',
                                lineHeight: '1.8',
                                color: '#475569',
                                fontWeight: '500',
                                marginBottom: '30px',
                                fontStyle: 'italic'
                            }}>&quot;{t.content}&quot;</p>

                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                                <div style={{ position: 'relative', width: '56px', height: '56px', borderRadius: '50%', overflow: 'hidden', border: '2px solid #e2e8f0' }}>
                                    <Image src={t.image} alt={t.name} fill style={{ objectFit: 'cover' }} unoptimized />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <h4 style={{ margin: 0, fontSize: '16px', fontWeight: '900', color: '#0f172a' }}>{t.name}</h4>
                                        {t.isVerified && <FaCheckCircle color="#4285F4" size={14} title="Verified Reviewer" />}
                                    </div>
                                    <p style={{ margin: 0, fontSize: '13px', fontWeight: '600', color: '#94a3b8' }}>{t.role}</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <div style={{ fontSize: '11px', fontWeight: '800', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '4px' }}>{t.date}</div>
                                    <a
                                        href="https://www.google.com/search?q=Durkkas+Academy+of+Research+and+Education#lrd=0x3b01311784863fc9:0x5589fd70c1be2b38,1"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '10px', fontWeight: '800', color: '#4285F4', textDecoration: 'none', justifyContent: 'flex-end' }}
                                    >
                                        <FaGoogle size={10} /> VIEW
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA */}
            <div style={{ maxWidth: '1000px', margin: '100px auto 0', padding: '0 24px' }}>
                <div style={{
                    background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                    borderRadius: '24px',
                    padding: '60px',
                    textAlign: 'center',
                    color: '#ffffff',
                    boxShadow: '0 30px 60px rgba(32, 69, 114, 0.2)'
                }}>
                    <h2 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: '900', marginBottom: '20px' }}>Join Our Community of Success</h2>
                    <p style={{ fontSize: '18px', opacity: 0.9, marginBottom: '40px', maxWidth: '600px', margin: '0 auto 40px' }}>Ready to start your own success story? Join DARE Centre today and bridge the gap between education and industry.</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        <button style={{
                            padding: '16px 32px',
                            background: '#ffffff',
                            color: '#204572',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: '900',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}>ENROLL NOW</button>
                        <button style={{
                            padding: '16px 32px',
                            background: 'transparent',
                            color: '#ffffff',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderRadius: '12px',
                            fontWeight: '900',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                        }}>CONTACT US</button>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .testimonials-page {
                    animation: fadeIn 0.8s ease;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    )
}
