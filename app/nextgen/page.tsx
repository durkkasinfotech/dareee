'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { FaCode, FaServer, FaSitemap, FaLaptopCode, FaClock, FaUsers, FaGraduationCap, FaCheckCircle, FaArrowRight, FaRocket, FaBrain, FaDatabase, FaCloud, FaCog, FaCalendarAlt, FaRobot, FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'

const FutureCodingVisual = () => {
    return (
        <div className="future-coding-container" style={{
            position: 'relative',
            width: '100%',
            height: '450px',
            background: '#0a1f3d',
            borderRadius: '32px',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 25px 60px rgba(18, 220, 250, 0.3)',
            border: '2px solid rgba(18, 220, 250, 0.15)',
            perspective: '1000px'
        }}>
            {/* Background Infinite Grid */}
            <div style={{
                position: 'absolute',
                inset: '-100%',
                backgroundImage: `
                    linear-gradient(rgba(18, 220, 250, 0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(18, 220, 250, 0.1) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                transform: 'rotateX(60deg) translateY(0)',
                animation: 'gridScroll 20s linear infinite'
            }} />

            {/* Glowing Orbs */}
            <div style={{
                position: 'absolute',
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(18, 220, 250, 0.15) 0%, transparent 70%)',
                top: '-50px',
                right: '-50px',
                filter: 'blur(30px)'
            }} />

            {/* Holographic Code Terminal */}
            <div style={{
                width: '85%',
                height: '75%',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(12px)',
                borderRadius: '20px',
                padding: '24px',
                border: '1px solid rgba(18, 220, 250, 0.4)',
                fontFamily: "'Fira Code', 'JetBrains Mono', monospace",
                fontSize: '15px',
                color: '#12DCFA',
                overflow: 'hidden',
                position: 'relative',
                zIndex: 2,
                boxShadow: '0 0 40px rgba(18, 220, 250, 0.1), inset 0 0 20px rgba(18, 220, 250, 0.05)',
                transform: 'rotateY(-5deg) rotateX(5deg)'
            }}>
                {/* Terminal Header */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', opacity: 0.7 }}>
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f56' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ffbd2e' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#27c93f' }} />
                    <span style={{ marginLeft: '10px', fontSize: '11px', letterSpacing: '2px', color: '#64748b', textTransform: 'uppercase' }}>nxtzen-main.py</span>
                </div>

                <div style={{ lineHeight: '1.6' }}>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ opacity: 0.3 }}>01</span>
                        <p style={{ margin: 0, fontWeight: 700 }}><span style={{ color: '#c678dd' }}>import</span> nxtzen_ai</p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ opacity: 0.3 }}>02</span>
                        <p style={{ margin: 0 }}><span style={{ color: '#c678dd' }}>class</span> <span style={{ color: '#e5c07b' }}>FutureBuilder</span>:</p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ opacity: 0.3 }}>03</span>
                        <p style={{ margin: '0 0 0 25px' }}><span style={{ color: '#c678dd' }}>def</span> <span style={{ color: '#61afef' }}>__init__</span>(self):</p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ opacity: 0.3 }}>04</span>
                        <p style={{ margin: '0 0 0 50px' }}>self.mode = <span style={{ color: '#98c379' }}>"VIBE_CODING"</span></p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ opacity: 0.3 }}>05</span>
                        <p style={{ margin: '0 0 0 50px' }}>self.vision = <span style={{ color: '#98c379' }}>"NXTZEN"</span></p>
                    </div>
                    <br />
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ opacity: 0.3 }}>06</span>
                        <p style={{ margin: '0' }}><span style={{ color: '#e06c75' }}>@automate</span></p>
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                        <span style={{ opacity: 0.3 }}>07</span>
                        <p style={{ margin: '0' }}>build_future(innovation_level=<span style={{ color: '#d19a66' }}>10.0</span>)</p>
                    </div>
                </div>

                {/* Blinking Cursor */}
                <div style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '60px',
                    width: '10px',
                    height: '2px',
                    backgroundColor: '#12DCFA',
                    animation: 'blink 1s step-end infinite'
                }} />

                {/* Scanning Light Effect */}
                <div style={{
                    position: 'absolute',
                    top: '-150%',
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(to bottom, transparent, rgba(18, 220, 250, 0.15), transparent)',
                    animation: 'scan 5s ease-in-out infinite'
                }} />
            </div>

            {/* Floating Tech Icons / Particles */}
            <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
                {[...Array(12)].map((_, i) => (
                    <div key={i} style={{
                        position: 'absolute',
                        width: '4px',
                        height: '4px',
                        background: '#12DCFA',
                        borderRadius: '50%',
                        top: `${10 + Math.random() * 80}%`,
                        left: `${10 + Math.random() * 80}%`,
                        opacity: 0.4,
                        boxShadow: '0 0 10px #12DCFA',
                        animation: `float ${3 + Math.random() * 4}s ease-in-out infinite alternate`,
                        animationDelay: `${i * 0.2}s`
                    }} />
                ))}
            </div>

            <style jsx>{`
                @keyframes gridScroll {
                    from { transform: rotateX(60deg) translateY(0); }
                    to { transform: rotateX(60deg) translateY(40px); }
                }
                @keyframes scan {
                    0% { top: -100%; }
                    100% { top: 120%; }
                }
                @keyframes blink {
                    50% { opacity: 0; }
                }
                @keyframes float {
                    from { transform: translate(0, 0); }
                    to { transform: translate(${Math.random() * 30 - 15}px, ${Math.random() * 30 - 15}px); }
                }
            `}</style>
        </div>
    )
}

export default function NXTZENPage() {
    const [isMobile, setIsMobile] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null)
    const [showCourseModal, setShowCourseModal] = useState(false)
    const [activeSlide, setActiveSlide] = useState(0)
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollAmount = 400 // Approximate card width + gap
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            })
        }
    }
    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const scrollLeft = container.scrollLeft;
            const containerWidth = container.offsetWidth;
            const newIndex = Math.round(scrollLeft / (containerWidth * 0.9));
            if (newIndex !== activeSlide) {
                setActiveSlide(newIndex);
            }
        }
    };

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    const courses = [
        {
            id: 1,
            title: 'NxtZen AI Frontend Developer',
            level: 1,
            color: '#12DCFA',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For Beginner to Intermediate Level',
            icon: FaCode,
            image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80'
        },
        {
            id: 2,
            title: 'NxtZen AI Backend Developer',
            level: 2,
            color: '#204572',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For Intermediate to Advanced Level',
            icon: FaServer,
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80'
        },
        {
            id: 3,
            title: 'NxtZen AI Software Architect',
            level: 3,
            color: '#0EA5C0',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For Advanced Level (Team Leads, Developers, Solution Architects)',
            icon: FaSitemap,
            image: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?w=800&q=80'
        },
        {
            id: 4,
            title: 'NxtZen AI FullStack Developer',
            level: 4,
            color: '#12DCFA',
            batchDate: 'March 2026 - January 2027',
            schedule: 'Mon-Fri (10 AM - 1 PM) • Sat-Sun (9 AM - 12 PM)',
            eligibility: 'For Advanced Level',
            icon: FaLaptopCode,
            image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
        }
    ]

    const dbfSteps = [
        { step: 'Data', icon: FaDatabase, description: 'Collect and organize information' },
        { step: 'Understand', icon: FaBrain, description: 'Analyze and comprehend patterns' },
        { step: 'Recommend', icon: FaCheckCircle, description: 'Suggest optimal solutions' },
        { step: 'Keep', icon: FaCloud, description: 'Store and maintain data' },
        { step: 'KPI', icon: FaCog, description: 'Measure performance metrics' },
        { step: 'Automate', icon: FaRocket, description: 'Streamline processes' },
        { step: 'Scale', icon: FaSitemap, description: 'Grow and expand systems' }
    ]

    return (
        <div style={{ fontFamily: "'Inter', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>

            {/* Hero Section */}
            <HeroSection
                tagline="LEARN. CODE. AUTOMATE."
                title="NXTZEN Coders. <span style='color: #dc2626'>Build</span> the Future."
                description="Step into the future of software engineering with NXTZEN Coders. We go beyond traditional coding by integrating AI-powered development, intelligent automation, and scalable architecture into your learning path. Master the latest tech stacks, leverage AI copilots for 10x productivity, and apply our proprietary Durkkas Business Framework (DBF) to build real-world solutions that matter."
                buttonText="Explore Courses"
                buttonAction={() => document.querySelector('.courses-section')?.scrollIntoView({ behavior: 'smooth' })}
                customMedia={<FutureCodingVisual />}
                backgroundType="gradient"
            />

            {/* DBF Framework Section - Sticky Stacking Cards */}
            <section style={{ padding: '40px 0 20px 0', background: '#f8fafc' }}>
                <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{
                            fontSize: isMobile ? '32px' : '48px',
                            fontWeight: '900',
                            color: '#0a1f3d',
                            marginBottom: '24px',
                            fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
                            textTransform: 'uppercase',
                            letterSpacing: '2px',
                            lineHeight: '1.2'
                        }}>
                            <span style={{ color: '#204572' }}>Durkkas</span> Business <br />
                            <span style={{
                                background: 'linear-gradient(135deg, #12DCFA 0%, #204572 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                fontSize: isMobile ? '40px' : '64px'
                            }}>Framework</span>
                        </h2>
                        <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
                            Our proprietary 7-step model (D.U.R.K.K.A.S) designed to transform raw code into scalable business value.
                        </p>
                    </div>

                    <div style={{ position: 'relative' }}>
                        {[
                            {
                                step: 'Data',
                                letter: 'D',
                                icon: FaDatabase,
                                title: 'Data Aggregation',
                                description: 'Data is the foundation. We teach you how to architect systems that gather, clean, and structure raw intelligence from multiple touchpoints, creating a robust data lake ready for AI processing.',
                                color1: '#1e40af', color2: '#3b82f6'
                            },
                            {
                                step: 'Understand',
                                letter: 'U',
                                icon: FaBrain,
                                title: 'Understand Patterns',
                                description: 'Turn noise into signals. Using advanced ML algorithms and statistical models, we decode hidden patterns in user behavior to understand what truly drives engagement.',
                                color1: '#0f766e', color2: '#14b8a6'
                            },
                            {
                                step: 'Recommend',
                                letter: 'R',
                                icon: FaCheckCircle,
                                title: 'Recommendation Engine',
                                description: 'Personalization at scale. Build intelligent engines that predict user needs and generate hyper-personalized recommendations to maximize conversion rates.',
                                color1: '#059669', color2: '#10b981'
                            },
                            {
                                step: 'Keep',
                                letter: 'K',
                                icon: FaCloud,
                                title: 'Keep & Retain',
                                description: 'Retention engineering. Implement technical strategies to "Keep" the value locked in. We focus on low-latency storage and high-availability systems to ensure data sustainability.',
                                color1: '#ea580c', color2: '#f97316'
                            },
                            {
                                step: 'KPI',
                                letter: 'K',
                                icon: FaCog,
                                title: 'KPI Optimization',
                                description: 'Measure what matters. Define and track technical Key Performance Indicators. Learn to build real-time dashboards that visualize system health and business impact.',
                                color1: '#c026d3', color2: '#d946ef'
                            },
                            {
                                step: 'Automate',
                                letter: 'A',
                                icon: FaRocket,
                                title: 'Automate Workflows',
                                description: 'Efficiency through code. Deploy intelligent bots, CI/CD pipelines, and AI agents to automate repetitive tasks, freeing up human creativity for high-value problem solving.',
                                color1: '#7c3aed', color2: '#8b5cf6'
                            },
                            {
                                step: 'Scale',
                                letter: 'S',
                                icon: FaSitemap,
                                title: 'Scale Globally',
                                description: 'Growth without limits. Architect systems built for exponential scale. from microservices to serverless, ensure your technology stack never becomes the bottleneck.',
                                color1: '#0891b2', color2: '#06b6d4'
                            }
                        ].map((item, index) => (
                            <div
                                key={index}
                                className="dbf-sticky-card"
                                style={{
                                    position: 'sticky',
                                    top: `${isMobile ? 100 + (index * 25) : 100 + (index * 40)}px`,
                                    // Calculated margin: enough room to stack subsequent cards, but no huge gaps
                                    marginBottom: index === 6 ? '60px' : (isMobile ? '30px' : '60px'),
                                    minHeight: isMobile ? '380px' : '320px',
                                    zIndex: 10 + index,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div className="dbf-card-content" style={{
                                    background: `linear-gradient(145deg, ${item.color1}, ${item.color2})`,
                                    borderRadius: '32px',
                                    padding: isMobile ? '32px' : '48px',
                                    color: 'white',
                                    boxShadow: '0 20px 50px rgba(0,0,0,0.2)',
                                    display: 'flex',
                                    flexDirection: isMobile ? 'column' : 'row',
                                    alignItems: 'center',
                                    gap: isMobile ? '20px' : '40px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    position: 'relative',
                                    overflow: 'hidden'
                                }}>
                                    {/* Giant Letter Watermark */}
                                    <div className="dbf-letter-watermark" style={{
                                        position: 'absolute',
                                        right: isMobile ? '-10px' : '-20px',
                                        bottom: isMobile ? '-20px' : '-30px',
                                        fontSize: isMobile ? '180px' : '280px',
                                        fontWeight: '900',
                                        opacity: '0.15',
                                        fontFamily: 'var(--font-inter), sans-serif',
                                        pointerEvents: 'none',
                                        lineHeight: 1
                                    }}>
                                        {item.letter}
                                    </div>

                                    {/* Icon Box */}
                                    <div className="dbf-icon-box" style={{
                                        minWidth: isMobile ? '80px' : '100px',
                                        height: isMobile ? '80px' : '100px',
                                        background: 'rgba(255,255,255,0.1)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: isMobile ? '32px' : '40px',
                                        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                                        transition: 'transform 0.3s ease'
                                    }}>
                                        <item.icon color="#ffffff" />
                                    </div>

                                    {/* Content */}
                                    <div style={{ flex: 1, position: 'relative', zIndex: 2, textAlign: isMobile ? 'center' : 'left' }}>
                                        <div className="dbf-step-label" style={{
                                            fontSize: '14px',
                                            fontWeight: '700',
                                            opacity: 0.8,
                                            marginBottom: '8px',
                                            textTransform: 'uppercase',
                                            letterSpacing: '2px'
                                        }}>
                                            Step 0{index + 1}
                                        </div>
                                        <h3 style={{
                                            fontSize: isMobile ? '24px' : '36px',
                                            fontWeight: '800',
                                            marginBottom: '16px',
                                            fontFamily: "var(--font-inter), sans-serif"
                                        }}>
                                            {item.title}
                                        </h3>
                                        <p style={{
                                            fontSize: '16px',
                                            lineHeight: '1.7',
                                            opacity: 0.9,
                                            fontWeight: '400',
                                            maxWidth: '600px'
                                        }}>
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>            {/* Courses Section - Professional & Creative Redesign */}
            <section className="courses-section" style={{ padding: '40px 24px', background: '#f8fafc' }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '30px' }}>
                        <h2 style={{
                            fontSize: isMobile ? '28px' : '42px',
                            fontWeight: '900',
                            color: '#0a1f3d',
                            marginBottom: '16px',
                            fontFamily: "'Arial Black', 'Arial Bold', sans-serif",
                            textTransform: 'uppercase',
                            letterSpacing: '1px'
                        }}>
                            <span style={{ color: '#204572' }}>NXTZEN</span> <span style={{ color: '#12DCFA' }}>Courses</span>
                        </h2>
                        <p style={{ fontSize: '18px', color: '#475569', fontWeight: '500', maxWidth: '600px', margin: '0 auto' }}>
                            Master the technologies of tomorrow with our industry-aligned curriculum designed for future innovators.
                        </p>
                    </div>

                    <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>

                        {/* Left Navigation Button - Desktop Indicator */}
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

                        <div className="nxt-courses-scroll-container" ref={scrollContainerRef} onScroll={handleScroll}>
                            {courses.map((course) => (
                                <div
                                    key={course.id}
                                    className="nxt-creative-card"
                                    onClick={() => {
                                        setSelectedCourse(course)
                                        setShowCourseModal(true)
                                    }}
                                >
                                    {/* Media Section */}
                                    <div className="nxt-card-media">
                                        <img
                                            src={course.image}
                                            alt={course.title}
                                            className="nxt-card-img"
                                        />
                                        <div className="nxt-media-overlay" />

                                        {/* Level Badge */}
                                        <div className="nxt-level-tag">
                                            <div
                                                className="nxt-level-dot"
                                                style={{ background: course.color }}
                                            />
                                            Level {course.level}
                                        </div>

                                        {/* Floating Icon */}
                                        <div className="nxt-floating-icon" style={{ color: course.color }}>
                                            <course.icon />
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="nxt-card-content">
                                        <h4 className="nxt-card-title">
                                            {course.title}
                                        </h4>

                                        <div style={{ marginTop: 'auto' }}>
                                            <div className="nxt-meta-row">
                                                <FaCalendarAlt className="nxt-meta-icon" />
                                                <span>{course.batchDate}</span>
                                            </div>
                                            <div className="nxt-meta-row">
                                                <FaClock className="nxt-meta-icon" />
                                                <span>{course.schedule}</span>
                                            </div>
                                        </div>

                                        {/* Actions */}
                                        <div className="nxt-actions-wrapper">
                                            <button
                                                className="nxt-btn-details"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setSelectedCourse(course);
                                                    setShowCourseModal(true);
                                                }}
                                            >
                                                View Details
                                            </button>
                                            <button
                                                className="nxt-btn-enroll"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    // Handle enroll logic
                                                    alert(`Enrolling in ${course.title}`);
                                                }}
                                            >
                                                Enroll Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Right Navigation Button - Desktop Indicator */}
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

                    {/* Mobile Scroll Indicator Dots */}
                    {isMobile && (
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '20px' }}>
                            {courses.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        if (scrollContainerRef.current) {
                                            const cardWidth = scrollContainerRef.current.offsetWidth * 0.9
                                            scrollContainerRef.current.scrollTo({
                                                left: index * cardWidth,
                                                behavior: 'smooth'
                                            })
                                        }
                                    }}
                                    style={{
                                        width: activeSlide === index ? '24px' : '8px',
                                        height: '8px',
                                        borderRadius: '4px',
                                        background: activeSlide === index ? '#204572' : '#cbd5e1',
                                        border: 'none',
                                        padding: 0,
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease'
                                    }}
                                    aria-label={`Go to course ${index + 1}`}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Course Details Modal */}
            {showCourseModal && selectedCourse && (
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
                            <img
                                src={selectedCourse.image}
                                alt={selectedCourse.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
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
                                Level {selectedCourse.level}
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
                                        {selectedCourse.title}
                                    </h2>
                                    <p style={{ margin: '4px 0 0 0', fontSize: '14px', color: '#475569', fontWeight: 600 }}>
                                        {selectedCourse.eligibility}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setShowCourseModal(false)}
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
                                    <span>{selectedCourse.batchDate}</span>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#64748b' }}>
                                    <FaClock color="#64748b" />
                                    <span>{selectedCourse.schedule}</span>
                                </div>
                            </div>

                            <p style={{ fontSize: '14px', color: '#1e3a8a', fontWeight: 600, lineHeight: 1.7, marginTop: '8px' }}>
                                {selectedCourse.eligibility}
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
                                    onClick={() => setShowCourseModal(false)}
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
                                        alert(`Enrolling in ${selectedCourse.title}`)
                                        setShowCourseModal(false)
                                    }}
                                >
                                    Enroll
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
