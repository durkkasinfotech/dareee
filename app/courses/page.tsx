'use client'

import { useState, useEffect, useRef } from 'react'
import HeroSection from '../components/HeroSection'
import { FaRobot, FaLanguage, FaChartLine, FaBusinessTime, FaCertificate, FaArrowRight, FaCheckCircle, FaUserGraduate, FaClock, FaBook, FaChevronDown, FaChevronUp, FaInfoCircle, FaGraduationCap, FaTimes, FaCalendarAlt, FaChevronLeft, FaChevronRight, FaRocket, FaUserTie, FaLightbulb, FaCode, FaBrain, FaGlobe, FaStar, FaAward } from 'react-icons/fa'
import Image from 'next/image'

// Type definitions
interface Course {
    title: string;
    subtitle: string;
    overview: string;
    learnings: string[];
    outcome: string;
    image: string;
    category?: string;
    color?: string;
    icon?: JSX.Element;
}

// Robotics Data with Icons
const roboticsCourses: Course[] = [
    {
        title: "Robotics ABC",
        subtitle: "Class: K–2 | Age: 4-7",
        overview: "Early exposure program introducing robotics through play-based activity-oriented learning.",
        learnings: ["Understanding machines", "Shapes & patterns", "Basic logic", "Simple sensors", "Toy robotics"],
        outcome: "Curiosity & Logical Thinking",
        image: "/ai&robotics (4).png",
        color: "#DC2626",
        icon: <FaRocket />
    },
    {
        title: "Preparatory Level",
        subtitle: "Class: 3-5 | Age: 8-10",
        overview: "Moving from playful learning to structured understanding of robotics components and basic coding.",
        learnings: ["Component basics", "Block-based coding", "Simple circuits", "Mini projects", "Team activities"],
        outcome: "Logic & Creativity",
        image: "/ai&robotics (3).png",
        color: "#DC2626",
        icon: <FaLightbulb />
    },
    {
        title: "Basic Level",
        subtitle: "Class: 6-8 | Age: 11-13",
        overview: "Hands-on robotics combined with real coding concepts and electronics fundamentals.",
        learnings: ["Electronics basics", "Microcontrollers", "Coding logic", "Project building", "AI intro"],
        outcome: "Problem Solving",
        image: "/ai&robotics (2).png",
        color: "#DC2626",
        icon: <FaCode />
    },
    {
        title: "Intermediate Level",
        subtitle: "Class: 9-10 | Age: 14-15",
        overview: "Career-oriented foundation for engineering, AI, and advanced technology fields.",
        learnings: ["Advanced systems", "Python/C basics", "AI & ML", "IoT & Automation", "Real projects"],
        outcome: "Pre-Engineering Skills",
        image: "/ai&robotics (1).png",
        color: "#DC2626",
        icon: <FaBrain />
    },
    {
        title: "Senior Level",
        subtitle: "Class: 11-12 | Age: 15+",
        overview: "Industry-aligned specialization with project-based education for career readiness.",
        learnings: ["Advanced AI", "Python Automation", "Data Logic", "Capstone Projects", "Portfolio"],
        outcome: "Career Readiness",
        image: "/ai&robotics (5).png",
        color: "#DC2626",
        icon: <FaAward />
    }
]

// AICRA Data
const aicraCourses: Course[] = [
    {
        title: "RLP 'O' LEVEL",
        subtitle: "Beginners & Schools",
        overview: "Foundation in Digital Literacy covering computer fundamentals and essential office tools.",
        learnings: ["Computer fundamentals", "Digital literacy", "MS Office / Workspace", "Cyber safety"],
        outcome: "Digital Basics",
        image: "/rlpo.jpg",
        color: "#FFD700",
        icon: <FaBook />
    },
    {
        title: "RLP 'A' LEVEL",
        subtitle: "IT Aspirants",
        overview: "Intermediate Programming & Web Technologies for students aiming for tech careers.",
        learnings: ["Programming foundations", "Database basics", "Web Development", "Logical solving"],
        outcome: "Tech Foundation",
        image: "/rlpa.jpg",
        color: "#FFD700",
        icon: <FaCode />
    },
    {
        title: "RLP 'B' LEVEL",
        subtitle: "Professionals",
        overview: "Advanced Computing & Specialization tracks for career-focused development.",
        learnings: ["Advanced programming", "Project development", "Specializations", "Industry skills"],
        outcome: "Professional Mastery",
        image: "/rlpb.jpg",
        color: "#FFD700",
        icon: <FaUserTie />
    }
]

// Language Courses
// Indian Languages Data
const indianLanguageCourses: Course[] = [
    {
        title: "Tamil Mastery",
        subtitle: "Classical Indian Language",
        overview: "Deep dive into Tamil literature, grammar, and eloquent speech. Connect with heritage through the world's oldest language.",
        learnings: ["Literary appreciation", "Advanced grammar", "Creative writing", "Cultural history"],
        outcome: "Cultural Connection",
        image: "/tamilhome.jpg",
        color: "#12DCFA",
        icon: <FaLanguage />
    },
    {
        title: "Hindi Fundamentals",
        subtitle: "National Language",
        overview: "Learn Hindi for effective communication across India. Focus on conversational skills and formal grammar.",
        learnings: ["Conversational skills", "Devanagari script", "Official Hindi", "Literature basics"],
        outcome: "Pan-India Outreach",
        image: "/languagehindi.jpg",
        color: "#12DCFA",
        icon: <FaLanguage />
    }
]

// Foreign & Global Languages Data
const foreignLanguageCourses: Course[] = [
    {
        title: "Communicative English",
        subtitle: "LSRW & Grammar Mastery",
        overview: "Build a rock-solid foundation in English. Our curriculum focuses on the LSRW framework to ensure complete mastery of grammar, vocabulary, and confident articulation.",
        learnings: ["LSRW Framework", "Applied Grammar", "Vocabulary Building", "Confident Speaking"],
        outcome: "Core Communication",
        image: "/englishhome.jpg",
        color: "#12DCFA",
        icon: <FaGlobe />
    },
    {
        title: "French (A1-C2)",
        subtitle: "A1, A2, B1, B2, C1, C2 (CEFR)",
        overview: "Comprehensive French training following the CEFR framework. From absolute beginners (A1) to near-native mastery (C2).",
        learnings: ["Basic (A1-A2)", "Independent (B1-B2)", "Proficient (C1-C2)", "DELF/DALF Preparation"],
        outcome: "Global Proficiency",
        image: "/french.jpg",
        color: "#12DCFA",
        icon: <FaGlobe />
    },
    {
        title: "German (A1-C2)",
        subtitle: "A1, A2, B1, B2, C1, C2 (CEFR)",
        overview: "Master the German language across all six levels of the CEFR. Perfect for academic research and high-tech engineering careers.",
        learnings: ["Grammar & Syntax", "Business German", "Technical Specialization", "Goethe/TestDaF Prep"],
        outcome: "Academic/Pro Career",
        image: "/jerman.jpg",
        color: "#12DCFA",
        icon: <FaGlobe />
    },
    {
        title: "Japanese (N5-N1)",
        subtitle: "JLPT Certification",
        overview: "Connect with the land of the rising sun. Study Japanese for tourism, anime culture, or professional opportunities.",
        learnings: ["JLPT N5-N1 prep", "Hiragana & Katakana", "Kanji basics", "Japanese work culture"],
        outcome: "Tech & Cultural Hub",
        image: "/japanese.jpg",
        color: "#12DCFA",
        icon: <FaGlobe />
    }
]

// Business & Finance
const businessCourses: Course[] = [
    {
        title: "School of Finance",
        subtitle: "Accounting & Taxation",
        overview: "Targeted at college students & graduates. Learn practical bookkeeping, GST, Income Tax, and real-world finance case studies.",
        learnings: ["Accounting fundamentals", "GST & Income Tax", "Practical Filing", "Case Studies"],
        outcome: "Job Readiness",
        image: "/Finance.png",
        category: "Finance",
        color: "#204572",
        icon: <FaChartLine />
    },
    {
        title: "School of Business",
        subtitle: "Startup Blueprint",
        overview: "From idea to execution. Covers startup ideation, validation, business modeling, funding, and growth strategies.",
        learnings: ["Ideation & Validation", "Business Models", "Funding & Finance", "Scaling Strategies"],
        outcome: "Entrepreneurship",
        image: "/Business.png",
        category: "Business",
        color: "#204572",
        icon: <FaBusinessTime />
    }
]

const CourseSection = ({ title, desc, courses, sectionColor, id, icon }: { title: string, desc: string, courses: Course[], sectionColor: string, id: string, icon: JSX.Element }) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [isMobile, setIsMobile] = useState(false)
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null)
    const [showModal, setShowModal] = useState(false)

    const [activeIndex, setActiveIndex] = useState(0)

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollWidth = container.scrollLeft
            const cardWidth = container.offsetWidth * 0.85 // Approximate for mobile snap
            const index = Math.round(scrollWidth / (isMobile ? cardWidth : 404)) // 380px width + 24px gap
            setActiveIndex(index)
        }
    }

    const scrollToIndex = (index: number) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const cardWidth = isMobile ? container.offsetWidth * 0.85 + 24 : 404
            container.scrollTo({
                left: index * cardWidth,
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

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [showModal])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current
            const scrollAmount = isMobile ? window.innerWidth * 0.8 : 404
            const newScrollLeft = direction === 'left'
                ? container.scrollLeft - scrollAmount
                : container.scrollLeft + scrollAmount

            container.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id={id} style={{ padding: '30px 0', background: id === 'aicra' || id === 'business-finance' ? '#fcfdfe' : '#ffffff' }}>
            <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
                            <div style={{
                                width: '48px',
                                height: '48px',
                                background: sectionColor,
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '24px',
                                color: sectionColor === '#FFD700' ? '#0f172a' : '#ffffff',
                                boxShadow: `0 8px 20px ${sectionColor}30`
                            }}>
                                {icon}
                            </div>
                            <span style={{
                                fontSize: '14px',
                                fontWeight: '800',
                                color: sectionColor,
                                letterSpacing: '2px',
                                textTransform: 'uppercase'
                            }}>Professional School</span>
                        </div>
                        <h2 style={{
                            fontSize: 'clamp(28px, 4vw, 40px)',
                            fontWeight: '900',
                            color: '#0f172a',
                            margin: '0 0 12px 0',
                            letterSpacing: '-1px'
                        }}>{title}</h2>
                        <p style={{ color: '#64748b', fontSize: '16px', fontWeight: '500', maxWidth: '600px', margin: 0 }}>{desc}</p>
                    </div>

                    {!isMobile && courses.length > 3 && (
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <button
                                onClick={() => scroll('left')}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#0f172a',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = sectionColor
                                    e.currentTarget.style.color = sectionColor
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '#e2e8f0'
                                    e.currentTarget.style.color = '#0f172a'
                                }}
                            >
                                <FaChevronLeft />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '50%',
                                    background: '#ffffff',
                                    border: '1px solid #e2e8f0',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    color: '#0f172a',
                                    transition: 'all 0.2s ease'
                                }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.borderColor = sectionColor
                                    e.currentTarget.style.color = sectionColor
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.borderColor = '#e2e8f0'
                                    e.currentTarget.style.color = '#0f172a'
                                }}
                            >
                                <FaChevronRight />
                            </button>
                        </div>
                    )}
                </div>

                <div
                    ref={scrollContainerRef}
                    className="hide-scrollbar"
                    onScroll={handleScroll}
                    style={{
                        display: 'flex',
                        gap: '24px',
                        overflowX: 'auto',
                        scrollSnapType: 'x mandatory',
                        padding: '10px 4px 20px',
                        scrollBehavior: 'smooth'
                    }}
                >
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            onClick={() => {
                                setSelectedCourse(course)
                                setShowModal(true)
                            }}
                            style={{
                                minWidth: isMobile ? '85vw' : '380px',
                                scrollSnapAlign: 'start',
                                background: '#ffffff',
                                borderRadius: '24px',
                                border: '1px solid #e2e8f0',
                                overflow: 'hidden',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                position: 'relative'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.transform = 'translateY(-8px)'
                                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.08)'
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.transform = 'translateY(0)'
                                e.currentTarget.style.boxShadow = 'none'
                            }}
                        >
                            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                                <Image
                                    src={course.image}
                                    alt={course.title}
                                    fill
                                    style={{ objectFit: 'contain', transition: 'transform 0.5s ease' }}
                                    className="course-card-img"
                                    unoptimized
                                />
                                <div style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: sectionColor,
                                    color: sectionColor === '#FFD700' ? '#0f172a' : '#ffffff',
                                    padding: '6px 14px',
                                    borderRadius: '100px',
                                    fontSize: '11px',
                                    fontWeight: '900',
                                    letterSpacing: '1px',
                                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                                }}>{course.category || (id === 'school-of-ai' ? 'ROBOTICS' : id.toUpperCase())}</div>
                            </div>

                            <div style={{ padding: '32px' }}>
                                <h3 style={{
                                    fontSize: '22px',
                                    fontWeight: '900',
                                    color: '#0f172a',
                                    marginBottom: '12px',
                                    lineHeight: '1.2'
                                }}>{course.title}</h3>

                                <p style={{
                                    color: '#64748b',
                                    fontSize: '15px',
                                    lineHeight: '1.6',
                                    height: '48px',
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitLineClamp: 2,
                                    WebkitBoxOrient: 'vertical',
                                    marginBottom: '24px'
                                }}>{course.overview}</p>

                                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                                    <FaStar style={{ color: '#FFD700' }} />
                                    <span style={{ fontSize: '13px', fontWeight: '800', color: '#0f172a' }}>{course.outcome}</span>
                                </div>

                                <div style={{ display: 'flex', gap: '12px', marginTop: 'auto' }}>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedCourse(course);
                                            setShowModal(true);
                                        }}
                                        style={{
                                            flex: 1,
                                            padding: '12px 0',
                                            background: 'transparent',
                                            border: `2px solid ${sectionColor}`,
                                            color: sectionColor === '#FFD700' ? '#0f172a' : sectionColor,
                                            borderRadius: '12px',
                                            fontWeight: '800',
                                            fontSize: '13px',
                                            cursor: 'pointer',
                                            transition: 'all 0.2s ease',
                                            textTransform: 'uppercase'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = `${sectionColor}10`
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent'
                                        }}
                                    >
                                        View Details
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            window.location.href = '/contact';
                                        }}
                                        style={{
                                            flex: 1,
                                            padding: '12px 0',
                                            background: sectionColor,
                                            color: sectionColor === '#FFD700' ? '#0f172a' : '#ffffff',
                                            border: 'none',
                                            borderRadius: '12px',
                                            fontWeight: '800',
                                            fontSize: '14px',
                                            cursor: 'pointer',
                                            transition: 'all 0.3s ease',
                                            textTransform: 'uppercase',
                                            boxShadow: `0 8px 16px ${sectionColor}30`
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)'
                                            e.currentTarget.style.boxShadow = `0 12px 20px ${sectionColor}40`
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0)'
                                            e.currentTarget.style.boxShadow = `0 8px 16px ${sectionColor}30`
                                        }}
                                    >
                                        Enroll Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Scroll Indicator Dots */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginTop: '10px' }}>
                    {courses.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => scrollToIndex(index)}
                            style={{
                                width: activeIndex === index ? '24px' : '8px',
                                height: '8px',
                                borderRadius: '4px',
                                background: activeIndex === index ? sectionColor : '#e2e8f0',
                                border: 'none',
                                padding: 0,
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            title={`Go to course ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Premium Modal */}
            {showModal && selectedCourse && (
                <div
                    style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(15, 23, 42, 0.4)',
                        backdropFilter: 'blur(12px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 10000,
                        padding: '24px'
                    }}
                    onClick={() => setShowModal(false)}
                >
                    <div
                        style={{
                            maxWidth: '900px',
                            width: '100%',
                            background: '#ffffff',
                            borderRadius: '32px',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: isMobile ? 'column' : 'row',
                            maxHeight: '90vh',
                            boxShadow: '0 50px 100px -20px rgba(0,0,0,0.25)'
                        }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div style={{ flex: 1, position: 'relative', minHeight: isMobile ? '200px' : 'auto' }}>
                            <Image
                                src={selectedCourse.image}
                                alt={selectedCourse.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                unoptimized
                            />
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                background: `linear-gradient(to top, ${sectionColor}ee, transparent)`
                            }}></div>
                            <div style={{ position: 'absolute', bottom: '40px', left: '40px', right: '40px' }}>
                                <div style={{
                                    background: '#ffffff',
                                    color: sectionColor,
                                    padding: '6px 16px',
                                    borderRadius: '100px',
                                    fontSize: '12px',
                                    fontWeight: '900',
                                    marginBottom: '16px',
                                    width: 'fit-content'
                                }}>COURSE DETAILS</div>
                                <h3 style={{ color: '#ffffff', fontSize: '32px', fontWeight: '900', lineHeight: 1.1 }}>{selectedCourse.title}</h3>
                            </div>
                        </div>

                        <div style={{ flex: 1.2, padding: '48px', overflowY: 'auto' }}>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '8px' }}>
                                <button
                                    onClick={() => setShowModal(false)}
                                    style={{
                                        background: '#f8fafc',
                                        border: 'none',
                                        width: '40px',
                                        height: '40px',
                                        borderRadius: '50%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: '#64748b'
                                    }}
                                >
                                    <FaTimes />
                                </button>
                            </div>

                            <div style={{ marginBottom: '32px' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '16px', color: '#0f172a' }}>Overview</h4>
                                <p style={{ color: '#475569', lineHeight: '1.8', fontSize: '16px' }}>{selectedCourse.overview}</p>
                            </div>

                            <div style={{ marginBottom: '32px' }}>
                                <h4 style={{ fontSize: '18px', fontWeight: '900', marginBottom: '16px', color: '#0f172a' }}>Key Modules</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '12px' }}>
                                    {selectedCourse.learnings.map((item, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <FaCheckCircle style={{ color: sectionColor, flexShrink: 0 }} />
                                            <span style={{ color: '#475569', fontSize: '15px', fontWeight: '600' }}>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{
                                background: `${sectionColor}08`,
                                padding: '24px',
                                borderRadius: '20px',
                                border: `1px solid ${sectionColor}20`,
                                marginBottom: '40px'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                    <FaAward style={{ color: sectionColor }} />
                                    <span style={{ fontWeight: '900', fontSize: '14px', color: '#0f172a' }}>Certification Outcome</span>
                                </div>
                                <p style={{ color: '#64748b', fontSize: '14px', margin: 0, fontWeight: '700' }}>{selectedCourse.outcome}</p>
                            </div>

                            <button
                                onClick={() => window.location.href = '/contact'}
                                style={{
                                    width: '100%',
                                    padding: '20px',
                                    background: sectionColor,
                                    color: sectionColor === '#FFD700' ? '#0f172a' : '#ffffff',
                                    border: 'none',
                                    borderRadius: '16px',
                                    fontWeight: '900',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    boxShadow: `0 20px 40px ${sectionColor}30`,
                                    transition: 'transform 0.2s ease'
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                            >
                                Enroll Now <FaArrowRight />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

// Creative Visual Component for Courses Hero - Holographic 3D Carousel
const CourseHeroVisual = () => {
    return (
        <div className="hero-visual-wrapper">
            <div className="scene">
                <div className="carousel">
                    {/* Card 1: AI & Robotics */}
                    <div className="carousel-item item-1">
                        <div className="card-vis red-theme">
                            <div className="card-icon"><FaRobot /></div>
                            <div className="card-content">
                                <h3>AI & Robotics</h3>
                                <p>Future Tech</p>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    </div>

                    {/* Card 2: Languages */}
                    <div className="carousel-item item-2">
                        <div className="card-vis blue-theme">
                            <div className="card-icon"><FaGlobe /></div>
                            <div className="card-content">
                                <h3>Languages</h3>
                                <p>Global Fluency</p>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    </div>

                    {/* Card 3: Finance */}
                    <div className="carousel-item item-3">
                        <div className="card-vis gold-theme">
                            <div className="card-icon"><FaChartLine /></div>
                            <div className="card-content">
                                <h3>Finance</h3>
                                <p>Wealth Strategy</p>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    </div>

                    {/* Card 4: Business */}
                    <div className="carousel-item item-4">
                        <div className="card-vis dark-theme">
                            <div className="card-icon"><FaUserTie /></div>
                            <div className="card-content">
                                <h3>Business</h3>
                                <p>Leadership</p>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    </div>

                    {/* Card 5: Certifications */}
                    <div className="carousel-item item-5">
                        <div className="card-vis green-theme">
                            <div className="card-icon"><FaCertificate /></div>
                            <div className="card-content">
                                <h3>Certification</h3>
                                <p>Pro Validated</p>
                            </div>
                            <div className="card-glow"></div>
                        </div>
                    </div>
                </div>
                <div className="floor-glow"></div>
            </div>

            <style jsx>{`
                .hero-visual-wrapper {
                    position: relative;
                    width: 100%;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    perspective: 1200px;
                    overflow: visible;
                }

                .scene {
                    position: relative;
                    width: 240px;
                    height: 320px;
                    transform-style: preserve-3d;
                    transform: rotateX(-10deg);
                    animation: hue-rotate 20s infinite linear;
                }

                .carousel {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;
                    animation: spin-carousel 20s infinite linear;
                }

                .carousel-item {
                    position: absolute;
                    width: 240px;
                    height: 340px;
                    left: 0;
                    top: 0;
                    transform-style: preserve-3d;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                /* 5 Items arranged in a circle (72 degrees apart) with translateZ based on width */
                /* tan(36) = (width/2) / r  => r = (width/2) / tan(36) approx 120 / 0.72 = 166px */
                /* Let's push it a bit further out for spacing: 280px */
                
                .item-1 { transform: rotateY(0deg) translateZ(280px); }
                .item-2 { transform: rotateY(72deg) translateZ(280px); }
                .item-3 { transform: rotateY(144deg) translateZ(280px); }
                .item-4 { transform: rotateY(216deg) translateZ(280px); }
                .item-5 { transform: rotateY(288deg) translateZ(280px); }

                .card-vis {
                    width: 100%;
                    height: 100%;
                    background: rgba(255, 255, 255, 0.9);
                    border-radius: 24px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 20px;
                    padding: 30px;
                    box-shadow: 0 20px 50px rgba(0,0,0,0.15);
                    border: 1px solid rgba(255,255,255,0.8);
                    backdrop-filter: blur(20px);
                    transition: all 0.3s ease;
                    backface-visibility: visible; 
                }
                
                .card-vis {
                    backface-visibility: hidden; /* Hide back for cleaner look */
                }
                
                .red-theme { border-bottom: 6px solid #DC2626; box-shadow: 0 15px 40px rgba(220, 38, 38, 0.25); }
                .blue-theme { border-bottom: 6px solid #12DCFA; box-shadow: 0 15px 40px rgba(18, 220, 250, 0.25); }
                .gold-theme { border-bottom: 6px solid #FFD700; box-shadow: 0 15px 40px rgba(255, 215, 0, 0.25); }
                .dark-theme { border-bottom: 6px solid #204572; box-shadow: 0 15px 40px rgba(32, 69, 114, 0.25); }
                .green-theme { border-bottom: 6px solid #10b981; box-shadow: 0 15px 40px rgba(16, 185, 129, 0.25); }

                .card-icon {
                    font-size: 60px;
                    margin-bottom: 10px;
                }
                .red-theme .card-icon { color: #DC2626; filter: drop-shadow(0 0 10px rgba(220,38,38,0.4)); }
                .blue-theme .card-icon { color: #0891b2; filter: drop-shadow(0 0 10px rgba(8,145,178,0.4)); }
                .gold-theme .card-icon { color: #ca8a04; filter: drop-shadow(0 0 10px rgba(202,138,4,0.4)); }
                .dark-theme .card-icon { color: #204572; filter: drop-shadow(0 0 10px rgba(32,69,114,0.4)); }
                .green-theme .card-icon { color: #059669; filter: drop-shadow(0 0 10px rgba(5,150,105,0.4)); }

                .card-content h3 {
                    margin: 0;
                    font-size: 22px;
                    font-weight: 900;
                    color: #0f172a;
                    text-align: center;
                }
                
                .card-content p {
                    margin: 5px 0 0;
                    font-size: 14px;
                    font-weight: 600;
                    color: #64748b;
                    text-align: center;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                }

                .card-glow {
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 100%);
                    border-radius: 24px;
                    pointer-events: none;
                }

                .floor-glow {
                    position: absolute;
                    width: 400px;
                    height: 400px;
                    background: radial-gradient(circle, rgba(14, 165, 192, 0.2) 0%, transparent 70%);
                    transform: rotateX(90deg) translateZ(-200px);
                    border-radius: 50%;
                    filter: blur(40px);
                    animation: pulse-floor 4s ease-in-out infinite;
                }

                @keyframes spin-carousel {
                    0% { transform: rotateY(0deg); }
                    100% { transform: rotateY(-360deg); }
                }

                @keyframes pulse-floor {
                    0%, 100% { opacity: 0.5; transform: rotateX(90deg) translateZ(-200px) scale(1); }
                    50% { opacity: 0.8; transform: rotateX(90deg) translateZ(-200px) scale(1.1); }
                }

                @media (max-width: 768px) {
                    .hero-visual-wrapper { height: 400px; }
                    .scene { transform: scale(0.7); }
                }

            `}</style>
        </div>
    )
}
export default function CoursesPage() {
    return (
        <div style={{ background: '#ffffff' }}>
            {/* Themed Hero Section from Edukoot */}
            <HeroSection
                tagline="ELITE ACADEMIC ECOSYSTEM"
                title="Master the <span style='color: #dc2626'>Skills</span> that Power the <span style='color: #dc2626'>Modern</span> World"
                description="Step into a world-class learning ecosystem where technology meets practical expertise. From mastering Artificial Intelligence and Robotics to gaining fluency in Global Languages or Strategic Finance, our industry-aligned curriculum is designed to transform curious minds into future-ready professionals. Experience hands-on mentorship, state-of-the-art tools, and a community dedicated to your lifelong career growth."
                buttonText="Explore All Courses"
                buttonAction={() => document.getElementById('school-of-ai')?.scrollIntoView({ behavior: 'smooth' })}
                customMedia={<CourseHeroVisual />}
                backgroundType="gradient"
            />

            {/* Course Sections */}
            <CourseSection
                id="school-of-ai"
                title="School of AI & Robotics"
                desc="From play-based K-2 fundamentals to advanced industry-aligned specializations."
                courses={roboticsCourses}
                sectionColor="#DC2626"
                icon={<FaRobot />}
            />

            <CourseSection
                id="aicra"
                title="AICRA Certifications"
                desc="Nationally recognized professional tracks for digital literacy and tech careers."
                courses={aicraCourses}
                sectionColor="#FFD700"
                icon={<FaCertificate />}
            />

            <CourseSection
                id="indian-languages"
                title="Indian Regional Languages"
                desc="Master the heritage of the subcontinent with our specialized training in Indian languages."
                courses={indianLanguageCourses}
                sectionColor="#12DCFA"
                icon={<FaLanguage />}
            />

            <CourseSection
                id="foreign-languages"
                title="Foreign & Global Languages"
                desc="Master global communication with international certifications in European and Asian languages."
                courses={foreignLanguageCourses}
                sectionColor="#12DCFA"
                icon={<FaGlobe />}
            />

            <CourseSection
                id="business-finance"
                title="Business & Finance"
                desc="Transform your professional potential with specialized accounting and startup strategies."
                courses={businessCourses}
                sectionColor="#204572"
                icon={<FaChartLine />}
            />
        </div>
    )
}
