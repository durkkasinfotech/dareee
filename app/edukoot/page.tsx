'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaLightbulb, FaUsers, FaRocket, FaGraduationCap, FaHandshake, FaComments, FaProjectDiagram, FaUserTie, FaCalendarAlt, FaCheckCircle, FaArrowRight, FaClock, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'

export default function EdukootPage() {
    const [activeDesk, setActiveDesk] = useState<string | null>(null)

    const coreValues = [
        {
            icon: FaLightbulb,
            title: 'Nurturing Curiosity',
            description: 'Edukoot encourages learners to ask questions, explore new ideas, and engage in thoughtful discussions. This curiosity-driven environment supports both personal and academic growth.'
        },
        {
            icon: FaUsers,
            title: 'Encouraging Collaboration',
            description: 'We create opportunities for learners to work as teams, share perspectives, and build communication and teamwork skills.'
        },
        {
            icon: FaRocket,
            title: 'Empowering Individuals for Impact',
            description: 'Through peer-led learning and knowledge sharing, learners take ownership of their journey and contribute to community growth.'
        }
    ]

    const desks = [
        {
            id: 'junior',
            name: 'Junior Learners Desk',
            grade: 'Std 1–5',
            price: '499',
            level: 1,
            color: '#FF6B6B',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For Class Std 1–5 Studying',
            description: 'Younger learners attend sessions with their parents to ensure a secure, comforting learning environment. Fun, hands-on, creative activities encourage imagination, curiosity, and problem-solving.',
            image: '/junior_learners_desk.png'
        },
        {
            id: 'learners',
            name: 'Learners Desk',
            grade: 'Std 6–12',
            price: '799',
            level: 2,
            color: '#4ECDC4',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For Class Std 6–12 Studying',
            description: 'These encourage critical thinking, teamwork, and practical learning through structured weekly sessions.',
            image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=800&q=80'
        },
        {
            id: 'campus',
            name: 'Campus Desk',
            grade: 'College Students',
            price: '999',
            level: 3,
            color: '#45B7D1',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For College Students',
            description: 'Students receive structured guidance to plan, develop, and present their projects. Industry professionals provide insights aligned with students\' career goals.',
            image: '/campus_desk_students.png'
        },
        {
            id: 'creators',
            name: 'Creators Desk',
            grade: 'Creators & Professionals',
            price: '1499',
            level: 4,
            color: '#95E1D3',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For Creators & Professionals',
            description: 'Creators can present their innovations, receive feedback, and build their portfolios while connecting with industry professionals.',
            image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
        }
    ]

    const [isMobile, setIsMobile] = useState(false)
    const [selectedDesk, setSelectedDesk] = useState<typeof desks[0] | null>(null)
    const [showDeskModal, setShowDeskModal] = useState(false)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollAmount = 400
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            })
        }
    }

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }

        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    return (
        <div className="edukoot-page">
            {/* Hero Section */}
            <HeroSection
                tagline="COLLABORATE • INNOVATE • TRANSFORM"
                title="Edukoot: Where Minds <span style='color: #dc2626'>Connect</span> & Ideas <span style='color: #dc2626'>Flourish</span>"
                description="Welcome to Edukoot, a vibrant ecosystem designed to bridge the gap between curiosity and innovation. Be part of a community where learners, creators, and mentors come together to share knowledge, solve real-world problems, and build the future through collaborative excellence."
                buttonText="Enroll Now"
                buttonAction={() => {
                    const element = document.querySelector('.desks-section');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                imageSrc="/edu-crop.png"
                imageAlt="Edukoot Community"
                backgroundType="gradient"
            />

            {/* Core Values Section */}
            <section className="edukoot-section core-values-section">
                <div className="edukoot-container">
                    <h2 className="section-title">Our Core Values</h2>
                    <div className="core-values-grid">
                        {coreValues.map((value, index) => (
                            <div key={index} className="core-value-card slide-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                                <div className="core-value-image-wrapper">
                                    <Image
                                        src={index === 0
                                            ? "/edukootabout.png"
                                            : index === 1
                                                ? "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80"
                                                : "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80"
                                        }
                                        alt={value.title}
                                        width={300}
                                        height={200}
                                        className="core-value-image"
                                        unoptimized
                                    />
                                </div>
                                <div className="core-value-icon">
                                    <value.icon />
                                </div>
                                <h3 className="core-value-title">{value.title}</h3>
                                <p className="core-value-description">{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Who We Support Section */}
            <section className="edukoot-section support-section" style={{ marginTop: '0', paddingTop: '0' }}>
                <div className="edukoot-container">
                    <h2 className="section-title">Who We Support</h2>
                    <div className="support-grid">
                        <div className="support-card">
                            <div className="support-image-wrapper">
                                <Image
                                    src="/edukoot(4).jpg"
                                    alt="Young Learners"
                                    width={400}
                                    height={250}
                                    className="support-image"
                                    unoptimized
                                />
                            </div>
                            <div className="support-icon">
                                <FaGraduationCap />
                            </div>
                            <h3 className="support-title">1–12 Learners: Early Innovation & Teamwork</h3>
                            <p className="support-description">
                                Edukoot supports school students through safe parent-accompanied sessions (Std 1–5), creative workshops, early exposure to innovation, and team-based activities.
                            </p>
                        </div>
                        <div className="support-card">
                            <div className="support-image-wrapper">
                                <Image
                                    src="/edukoot (2).jpg"
                                    alt="College Students"
                                    width={400}
                                    height={250}
                                    className="support-image"
                                    unoptimized
                                />
                            </div>
                            <div className="support-icon">
                                <FaUserTie />
                            </div>
                            <h3 className="support-title">College Students & Creators: Engagement & Growth</h3>
                            <p className="support-description">
                                Weekly Harkness discussions, hands-on projects, peer activities, project guidance, mentoring, and internship opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Desks Section */}
            <section className="edukoot-section desks-section">
                <div className="edukoot-container">
                    <h2 className="section-title">Choose Your Desk</h2>
                    <p className="section-subtitle">Each desk is designed to meet the unique needs of different learner groups</p>
                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>

                        {/* Left Navigation Button */}
                        {!isMobile && (
                            <button
                                onClick={() => scroll('left')}
                                style={{
                                    position: 'absolute',
                                    left: '-20px',
                                    zIndex: 10,
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#204572',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)'
                                    e.currentTarget.style.color = '#12DCFA'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)'
                                    e.currentTarget.style.color = '#204572'
                                }}
                                aria-label="Scroll left"
                            >
                                <FaChevronLeft size={20} />
                            </button>
                        )}

                        <div className="nxt-courses-scroll-container" ref={scrollContainerRef}>
                            {desks.map((desk) => {
                                // Determine icon based on desk ID
                                const DeskIcon = desk.id === 'junior' ? FaLightbulb :
                                    desk.id === 'learners' ? FaGraduationCap :
                                        desk.id === 'campus' ? FaUserTie :
                                            FaRocket;

                                return (
                                    <div
                                        key={desk.id}
                                        className="nxt-creative-card"
                                        onClick={() => {
                                            setSelectedDesk(desk)
                                            setShowDeskModal(true)
                                        }}
                                    >
                                        {/* Media Section */}
                                        <div className="nxt-card-media">
                                            <img
                                                src={desk.image}
                                                alt={desk.name}
                                                className="nxt-card-img"
                                            />
                                            <div className="nxt-media-overlay" />

                                            {/* Level Badge */}
                                            <div className="nxt-level-tag">
                                                <div
                                                    className="nxt-level-dot"
                                                    style={{ background: desk.color }}
                                                />
                                                Level {desk.level}
                                            </div>

                                            {/* Floating Icon */}
                                            <div className="nxt-floating-icon" style={{ color: desk.color }}>
                                                <DeskIcon />
                                            </div>
                                        </div>

                                        {/* Content Section */}
                                        <div className="nxt-card-content">
                                            <h4 className="nxt-card-title">
                                                {desk.name}
                                            </h4>

                                            <div style={{ marginTop: 'auto' }}>
                                                <div className="nxt-meta-row">
                                                    <FaCalendarAlt className="nxt-meta-icon" />
                                                    <span>{desk.batchDate}</span>
                                                </div>
                                                <div className="nxt-meta-row">
                                                    <FaClock className="nxt-meta-icon" />
                                                    <span>{desk.schedule}</span>
                                                </div>
                                            </div>

                                            {/* Actions */}
                                            <div className="nxt-actions-wrapper">
                                                <button
                                                    className="nxt-btn-details"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setSelectedDesk(desk);
                                                        setShowDeskModal(true);
                                                    }}
                                                >
                                                    View Details
                                                </button>
                                                <button
                                                    className="nxt-btn-enroll"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        alert(`Enrolling in ${desk.name}`);
                                                    }}
                                                >
                                                    Enroll Now
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        {/* Right Navigation Button */}
                        {!isMobile && (
                            <button
                                onClick={() => scroll('right')}
                                style={{
                                    position: 'absolute',
                                    right: '-20px',
                                    zIndex: 10,
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#204572',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'scale(1.1)'
                                    e.currentTarget.style.color = '#12DCFA'
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'scale(1)'
                                    e.currentTarget.style.color = '#204572'
                                }}
                                aria-label="Scroll right"
                            >
                                <FaChevronRight size={20} />
                            </button>
                        )}
                    </div>
                </div>
            </section>

            {/* Desk Details Modal */}
            {showDeskModal && selectedDesk && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(15,23,42,0.55)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '16px'
                    }}
                >
                    <div
                        style={{
                            width: '100%',
                            maxWidth: '720px',
                            background: '#ffffff',
                            borderRadius: '24px',
                            overflow: 'hidden',
                            boxShadow: '0 24px 60px rgba(15,23,42,0.35)',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row'
                        }}
                    >
                        <div style={{ flex: 1, position: 'relative', minHeight: isMobile ? '200px' : '280px' }}>
                            <Image
                                src={selectedDesk.image}
                                alt={selectedDesk.name}
                                fill
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                            <div
                                style={{
                                    position: 'absolute',
                                    top: '16px',
                                    left: '16px',
                                    background: 'rgba(255,255,255,0.95)',
                                    padding: '6px 12px',
                                    borderRadius: '999px',
                                    fontSize: '11px',
                                    fontWeight: 700,
                                    color: '#204572',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.5px'
                                }}
                            >
                                {selectedDesk.grade}
                            </div>
                        </div>

                        <div
                            style={{
                                flex: 1.2,
                                padding: '24px 24px 20px 24px',
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px',
                                maxHeight: isMobile ? '60vh' : '70vh',
                                overflowY: 'auto'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '12px' }}>
                                <div>
                                    <h2
                                        style={{
                                            fontSize: '22px',
                                            fontWeight: 800,
                                            color: '#204572',
                                            margin: 0,
                                            fontFamily: "'Arial Black', 'Arial Bold', 'Helvetica Neue', sans-serif"
                                        }}
                                    >
                                        {selectedDesk.name}
                                    </h2>
                                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#475569', fontWeight: 600 }}>
                                        {selectedDesk.eligibility}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowDeskModal(false)}
                                    style={{
                                        border: 'none',
                                        background: 'transparent',
                                        color: '#64748b',
                                        cursor: 'pointer',
                                        fontSize: '20px',
                                        lineHeight: 1,
                                        padding: '4px'
                                    }}
                                >
                                    ×
                                </button>
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '8px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                                    <FaCalendarAlt color="#64748b" />
                                    <span>{selectedDesk.batchDate}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                                    <FaClock color="#64748b" />
                                    <span>{selectedDesk.schedule}</span>
                                </div>
                            </div>

                            <p style={{ fontSize: '14px', color: '#1e3a8a', fontWeight: 600, lineHeight: 1.7, marginTop: '8px' }}>
                                {selectedDesk.description}
                            </p>

                            <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                                <button
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        background: 'transparent',
                                        border: '2px solid #204572',
                                        color: '#204572',
                                        borderRadius: '999px',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        textTransform: 'uppercase'
                                    }}
                                    onClick={() => setShowDeskModal(false)}
                                >
                                    Close
                                </button>
                                <button
                                    style={{
                                        flex: 1,
                                        padding: '12px',
                                        background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                                        border: 'none',
                                        color: '#ffffff',
                                        borderRadius: '999px',
                                        fontWeight: 700,
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        textTransform: 'uppercase'
                                    }}
                                    onClick={() => {
                                        alert(`Enrolling in ${selectedDesk.name}`)
                                        setShowDeskModal(false)
                                    }}
                                >
                                    Enroll
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Weekly Structure Section */}
            <section className="edukoot-section structure-section">
                <div className="edukoot-container">
                    <h2 className="section-title">Weekly Learning Structure</h2>
                    <div className="structure-image-row">
                        <Image
                            src="/edukoot (1).jpg"
                            alt="Weekly Sessions"
                            width={350}
                            height={250}
                            className="structure-image"
                            unoptimized
                        />
                        <Image
                            src="/edukoot (2).jpg"
                            alt="Workshop Activities"
                            width={350}
                            height={250}
                            className="structure-image"
                            unoptimized
                        />
                        <Image
                            src="/edukoot (3).jpg"
                            alt="Peer Presentations"
                            width={350}
                            height={250}
                            className="structure-image"
                            unoptimized
                        />
                    </div>
                    <div className="structure-content">
                        <div className="structure-card">
                            <div className="structure-icon">
                                <FaCalendarAlt />
                            </div>
                            <h3 className="structure-title">Structured Weekly Sessions</h3>
                            <p className="structure-description">
                                Sessions occur every Saturday or Sunday, featuring Harkness discussions, hands-on workshops, and peer presentations.
                            </p>
                            <div className="structure-highlight">
                                <FaUsers className="highlight-icon" />
                                <span>12–15 participants per session for personalized attention</span>
                            </div>
                            <div className="structure-note">
                                <p>Each Desk conducts 1 core session per month.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

