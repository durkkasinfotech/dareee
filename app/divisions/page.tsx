'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FaRobot, FaGlobe, FaDollarSign, FaBriefcase, FaCheckCircle, FaCalendarAlt, FaClock, FaGraduationCap, FaBook, FaCertificate, FaUsers, FaLightbulb, FaCode, FaCog, FaChartLine, FaHandshake, FaRocket, FaLanguage, FaFlag, FaStar, FaAward, FaGem, FaBuilding, FaChalkboardTeacher, FaArrowRight } from 'react-icons/fa'
import HeroSection from '../components/HeroSection'

export default function DivisionsPage() {
    // Initialize activeSchool from hash if present, otherwise default to 'ai-robotics'
    const [activeSchool, setActiveSchool] = useState<string>('ai-robotics') // Default for SSR
    const [currentImageIndices, setCurrentImageIndices] = useState<{ [key: string]: number }>({}) // Track image index for each school
    const [isMobile, setIsMobile] = useState(false) // Start as false to match SSR
    const [hasMounted, setHasMounted] = useState(false) // Track if component has mounted
    const [expandedPanel, setExpandedPanel] = useState<string | null>(null) // NEW: Track expanded panel on mobile

    // Hero Carousel State
    const [heroCurrentSlide, setHeroCurrentSlide] = useState(0)
    const [heroSlideDirection, setHeroSlideDirection] = useState<'left' | 'right'>('right')
    const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)
    const autoScrollCountRef = useRef(0)
    const [isAutoScrollStopped, setIsAutoScrollStopped] = useState(false)
    const touchStartXRef = useRef(0)
    const touchEndXRef = useRef(0)

    const heroSlides = [
        {
            id: 'ai-robotics',
            name: 'School of Ai & robotics',
            tagline: 'Think. Build. Innovate.',
            image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80'
        },
        {
            id: 'finance',
            name: 'School of finance',
            tagline: 'Earn. Save. Grow. Secure.',
            image: '/finance.jpg'
        },
        {
            id: 'business',
            name: 'School of business',
            tagline: 'Lead. Communicate. Strategize. Succeed.',
            image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80'
        },
        {
            id: 'languages',
            name: 'School of languages',
            tagline: 'Connect. Express. Globalize.',
            image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1920&q=80'
        }
    ]

    const handleExploreMore = (schoolId: string) => {
        // Update URL hash
        window.history.pushState(null, '', `#${schoolId}`)
        // Scroll to school section
        setTimeout(() => {
            const element = document.getElementById(schoolId)
            if (element) {
                const navHeight = 120
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - navHeight - 30

                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                })
            }
        }, 100)
    }

    const goToHeroSlide = (index: number) => {
        setHeroSlideDirection(index > heroCurrentSlide ? 'right' : 'left')
        setHeroCurrentSlide(index)
    }

    // Auto-play functionality for Hero Carousel - Only 5 times, then stop and allow manual scroll/swipe
    useEffect(() => {
        if (isAutoScrollStopped) return

        autoPlayIntervalRef.current = setInterval(() => {
            setHeroSlideDirection('right')
            setHeroCurrentSlide((prev) => {
                const nextSlide = (prev + 1) % heroSlides.length
                autoScrollCountRef.current += 1

                // Stop auto-scroll after 5 times
                if (autoScrollCountRef.current >= 5) {
                    if (autoPlayIntervalRef.current) {
                        clearInterval(autoPlayIntervalRef.current)
                        setIsAutoScrollStopped(true)
                    }
                    return prev // Stay on current slide
                }

                return nextSlide
            })
        }, 2500)

        return () => {
            if (autoPlayIntervalRef.current) {
                clearInterval(autoPlayIntervalRef.current)
            }
        }
    }, [heroSlides.length, isAutoScrollStopped])

    // Touch/Swipe handlers for manual navigation
    const handleTouchStart = (e: React.TouchEvent) => {
        touchStartXRef.current = e.touches[0].clientX
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        touchEndXRef.current = e.touches[0].clientX
    }

    const handleTouchEnd = () => {
        if (!touchStartXRef.current || !touchEndXRef.current) return

        const distance = touchStartXRef.current - touchEndXRef.current
        const minSwipeDistance = 50

        if (Math.abs(distance) > minSwipeDistance) {
            if (distance > 0) {
                // Swipe left - next slide
                setHeroSlideDirection('right')
                setHeroCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            } else {
                // Swipe right - previous slide
                setHeroSlideDirection('left')
                setHeroCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
            }
        }

        touchStartXRef.current = 0
        touchEndXRef.current = 0
    }

    // Mouse wheel handler for desktop
    const handleWheel = (e: React.WheelEvent) => {
        // Only allow wheel navigation after auto-scroll stops
        if (!isAutoScrollStopped) return

        e.preventDefault()
        const delta = e.deltaY

        if (Math.abs(delta) > 50) {
            if (delta > 0) {
                // Scroll down - next slide
                setHeroSlideDirection('right')
                setHeroCurrentSlide((prev) => (prev + 1) % heroSlides.length)
            } else {
                // Scroll up - previous slide
                setHeroSlideDirection('left')
                setHeroCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
            }
        }
    }


    const schools = [
        {
            id: 'ai-robotics',
            name: 'School of AI & Robotics',
            shortName: 'Robotics',
            tagline: 'Think. Build. Innovate.',
            description: 'In partnership with STEMpedia, we revolutionize K-12 education by introducing students to cutting-edge technologies including Artificial Intelligence, Robotics, IoT, and STEM concepts. Our comprehensive programs, meticulously designed for students aged 4 to 18, foster critical 21st-century skills through hands-on learning experiences. Students engage in real-world projects, building robots from scratch, programming intelligent systems, and developing problem-solving abilities that prepare them for the future of technology.',
            icon: FaRobot,
            images: [
                '/IMG_2099.JPG',
                '/IMG_2108.JPG',
                '/IMG_2120.JPG'
            ],
            features: [
                '21st Century Skills Development - Critical thinking, creativity, collaboration, and communication',
                'Activity-Based Learning with DIY Projects - Build robots, create AI models, and develop IoT solutions',
                'STEAM Education Methodology - Integrating Science, Technology, Engineering, Arts, and Mathematics',
                'Hands-on Robotics Assembly - Physical construction and programming of robots',
                'AI & Machine Learning Fundamentals - Introduction to neural networks and intelligent systems',
                'Coding & Programming Skills - Python, Scratch, Arduino, and block-based programming',
                'Project-Based Learning - Real-world applications and problem-solving challenges',
                'Innovation & Entrepreneurship - Developing creative solutions and presentation skills'
            ],
            courses: [
                {
                    title: 'Junior Robotics Explorer',
                    description: 'A fun introduction to robotics using LEGO® WeDo and simple mechanics. Kids learn to build and program basic robots, understanding sensors and motors in an engaging, playful environment.',
                    duration: '8 weeks',
                    level: 'Beginner (Ages 6-9)',
                    topics: 'Mechanics, Sensors, Visual Coding, Building Structures'
                },
                {
                    title: 'AI & Python for Innovators',
                    description: 'Dive into the world of Artificial Intelligence and Python programming. Students learn syntax, data structures, and build their first AI chatbots and image recognition models.',
                    duration: '12 weeks',
                    level: 'Intermediate (Ages 10-14)',
                    topics: 'Python Basics, Chatbots, Computer Vision, Logic'
                },
                {
                    title: 'Advanced IoT & Automation',
                    description: 'Master the Internet of Things (IoT) using Arduino and ESP32. Design smart home systems, automated gardens, and remote-controlled devices with real hardware.',
                    duration: '12 weeks',
                    level: 'Advanced (Ages 13+)',
                    topics: 'Arduino C++, Sensors, Cloud Connectivity, Circuit Design'
                },
                {
                    title: 'Drone Technology & Aviation',
                    description: 'Understand the physics of flight and drone mechanics. Students assemble, calibrate, and pilot drones, learning about aerodynamics and safety regulations.',
                    duration: '6 weeks',
                    level: 'Intermediate',
                    topics: 'Aerodynamics, Flight Control, Assembly, Regulations'
                },
                {
                    title: 'Humanoid Robotics Workshop',
                    description: 'The ultimate challenge: Programming humanoid robots to walk, dance, and interact. Explore kinematics, balance algorithms, and human-robot interaction.',
                    duration: '10 weeks',
                    level: 'Advanced',
                    topics: 'Kinematics, Servo Control, Interaction, Choreography'
                }
            ]
        },
        {
            id: 'languages',
            name: 'School of Languages',
            shortName: 'Languages',
            tagline: 'Connect. Express. Globalize.',
            description: 'Our comprehensive language programs are designed to develop proficiency in multiple languages through innovative and immersive learning methodologies. We focus on all four essential language skills - Listening, Speaking, Reading, and Writing (LSRW) - ensuring students achieve complete fluency and cultural understanding. From regional Indian languages to international foreign languages, our curriculum combines traditional teaching methods with modern interactive approaches, including conversation practice with native speakers, multimedia resources, and real-world communication scenarios.',
            icon: FaGlobe,
            images: [
                '/tamilhome.jpg',
                '/englishhome.jpg',
                '/french.jpg',
                '/languagehindi.jpg',
                '/jerman.jpg',
                '/japanese.jpg'
            ],
            features: [
                'Comprehensive LSRW Skills Development - Listening, Speaking, Reading, and Writing mastery',
                'Native Speaker Sessions - Regular interaction with fluent speakers for authentic pronunciation',
                'Cultural Immersion Programs - Understanding customs, traditions, and cultural contexts',
                'Multimedia Learning Resources - Videos, audio materials, and interactive digital content',
                'Personalized Learning Paths - Customized curriculum based on individual proficiency levels',
                'International Certification Preparation - IELTS, TOEFL, DELF, Goethe-Zertifikat, JLPT',
                'Real-world Communication Practice - Practical scenarios and conversational fluency building'
            ],
            regionalLanguages: [
                {
                    name: 'Tamil',
                    flag: 'https://flagcdn.com/w320/in.png',
                    level: 'Beginner to Advanced',
                    isImage: true,
                    description: 'Classical language with rich literary heritage, spoken by over 75 million people worldwide'
                },
                {
                    name: 'English',
                    flag: 'https://flagcdn.com/w320/gb.png',
                    level: 'Fluency Programs',
                    isImage: true,
                    description: 'Global communication language - Business English, Academic English, and Conversational fluency'
                },
                {
                    name: 'Hindi',
                    flag: 'https://flagcdn.com/w320/in.png',
                    level: 'Comprehensive Training',
                    isImage: true,
                    description: 'Official language of India, essential for national communication and cultural understanding'
                }
            ],
            foreignLanguages: [
                {
                    name: 'French',
                    flag: 'https://flagcdn.com/w320/fr.png',
                    partner: 'ISFL',
                    isImage: true,
                    description: 'Language of diplomacy and culture, spoken in 29 countries across 5 continents',
                    levels: 'A1, A2, B1, B2, C1, C2 (CEFR Framework)'
                },
                {
                    name: 'German',
                    flag: 'https://flagcdn.com/w320/de.png',
                    partner: 'ISFL',
                    isImage: true,
                    description: 'Language of innovation and engineering, gateway to European opportunities',
                    levels: 'A1, A2, B1, B2, C1, C2 (CEFR Framework)'
                },
                {
                    name: 'Japanese',
                    flag: 'https://flagcdn.com/w320/jp.png',
                    partner: 'ISFL',
                    isImage: true,
                    description: 'Language of technology and tradition, essential for Asian business and culture',
                    levels: 'N5, N4, N3, N2, N1 (JLPT Levels)'
                }
            ]
        },
        {
            id: 'finance',
            name: 'School of Finance',
            shortName: 'Finance',
            tagline: 'Earn. Save. Grow. Secure.',
            description: 'Master the art of managing money, investments, and financial planning with DARE\'s comprehensive financial literacy curriculum. We go beyond basic budgeting to teach advanced concepts like portfolio diversification, algorithmic trading basics, risk assessment, and global economic trends. Our program acts as a bridge between academic theory and real-world wealth creation, empowering students to make informed financial decisions, understand market psychology, and secure their economic future from an early age.',
            icon: FaDollarSign,
            images: [
                '/finance.jpg',
                '/finance1.jpg',
                '/finance2.jpg'
            ],
            features: [
                'Digital Banking & FinTech Revolution - Mastering mobile banking, secure UPI transactions, digital wallets, and understanding the architecture of modern payment gateways.',
                'Personal Budgeting & Wealth Architecting - Strategic expense tracking, emergency fund creation, and the 50/30/20 rule for sustainable wealth building.',
                'Investment Mastery & Market Logic - Deep dives into Stocks, Bonds, Mutual Funds, SIPs, and understanding the "Power of Compounding" and market psychology.',
                'Advanced Financial Planning - Setting SMART financial goals, retirement planning basics, and tax-efficient saving strategies for long-term security.',
                'Cryptocurrency, Blockchain & Web3 - demystifying decentralized finance (DeFi), NFTs, smart contracts, and the future of digital assets.',
                'Taxation & Compliance - Navigating the tax landscape, understanding income tax slabs, deductions, and the importance of financial compliance.',
                'Risk Management & Strategic Insurance - Evaluating life, health, and asset insurance to mitigate life\'s financial risks effectively.',
                'Global Economics & Market Dynamics - Understanding inflation, interest rate cycles, GDP impact, and how global events influence local wallets.'
            ],
            courses: [
                {
                    title: 'Financial Literacy Basics',
                    description: 'Comprehensive introduction to money management, banking systems, financial institutions, and basic economic concepts. Learn about savings accounts, fixed deposits, and the importance of financial planning from an early age.',
                    duration: '8 weeks',
                    level: 'Beginner',
                    topics: 'Money basics, Banking, Savings, Financial institutions'
                },
                {
                    title: 'Smart Budgeting & Money Management',
                    description: 'Master the art of creating and maintaining personal budgets, tracking income and expenses, setting financial goals, and developing healthy spending habits. Includes practical tools and apps for budget management.',
                    duration: '6 weeks',
                    level: 'Beginner',
                    topics: 'Budget creation, Expense tracking, Financial goals, Money habits'
                },
                {
                    title: 'Investment Fundamentals',
                    description: 'Deep dive into investment vehicles including stocks, bonds, mutual funds, ETFs, and real estate. Learn about portfolio diversification, risk assessment, market analysis, and long-term wealth building strategies.',
                    duration: '10 weeks',
                    level: 'Intermediate',
                    topics: 'Stocks, Bonds, Mutual funds, Portfolio management, Risk analysis'
                },
                {
                    title: 'Digital Finance & Cryptocurrency',
                    description: 'Explore the future of finance with digital currencies, blockchain technology, NFTs, and decentralized finance (DeFi). Understand cryptocurrency trading, digital wallets, and the impact of fintech on traditional banking.',
                    duration: '8 weeks',
                    level: 'Advanced',
                    topics: 'Cryptocurrency, Blockchain, DeFi, Digital wallets, Fintech innovations'
                }
            ]
        },
        {
            id: 'business',
            name: 'School of Business',
            shortName: 'Business',
            tagline: 'Lead. Communicate. Strategize. Succeed.',
            description: 'Prepare for the dynamic world of business with our comprehensive programs that develop essential professional skills and entrepreneurial mindset. From effective communication and leadership to digital marketing and startup fundamentals, we equip students with the knowledge and confidence to excel in corporate environments or launch their own ventures. Our curriculum combines theoretical business concepts with practical applications, case studies from real companies, and hands-on projects that simulate real-world business challenges. Students learn to think strategically, communicate professionally, lead teams effectively, and navigate the complexities of modern business operations.',
            icon: FaBriefcase,
            images: [
                'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
                'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
                'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=800&q=80'
            ],
            features: [
                'Professional Communication Skills - Business writing, presentations, email etiquette, and interpersonal communication',
                'Leadership & Team Management - Motivating teams, conflict resolution, and decision-making strategies',
                'Entrepreneurship & Startup Basics - Business planning, pitching ideas, and launching ventures',
                'Digital Marketing & Operations - SEO, social media marketing, content strategy, and analytics',
                'Business Strategy & Planning - SWOT analysis, competitive analysis, and strategic thinking',
                'Project Management - Agile methodologies, timeline management, and resource allocation',
                'Negotiation & Sales Skills - Persuasion techniques, deal-making, and customer relationship management',
                'Corporate Etiquette & Professionalism - Workplace behavior, networking, and personal branding'
            ],
            courses: [
                {
                    title: 'Business Communication Excellence',
                    description: 'Master professional communication across all business contexts - from writing compelling emails and reports to delivering impactful presentations. Learn active listening, persuasive speaking, cross-cultural communication, and how to adapt your message for different audiences and platforms.',
                    duration: '8 weeks',
                    level: 'Beginner',
                    topics: 'Professional writing, Presentations, Email etiquette, Interpersonal skills, Public speaking'
                },
                {
                    title: 'Leadership Essentials & Team Dynamics',
                    description: 'Develop core leadership competencies including team building, motivation strategies, conflict resolution, and effective decision-making. Explore different leadership styles, emotional intelligence, and how to inspire and guide teams toward achieving organizational goals.',
                    duration: '10 weeks',
                    level: 'Intermediate',
                    topics: 'Leadership styles, Team building, Conflict resolution, Decision making, Emotional intelligence'
                },
                {
                    title: 'Entrepreneurship 101: From Idea to Launch',
                    description: 'Transform your business ideas into reality with comprehensive training in business planning, market research, financial projections, and pitching to investors. Learn about startup ecosystems, funding options, legal structures, and the essential steps to launch and scale a successful business.',
                    duration: '12 weeks',
                    level: 'Intermediate',
                    topics: 'Business planning, Market research, Pitching, Funding, Legal structures, Startup operations'
                },
                {
                    title: 'Digital Business Operations & Marketing',
                    description: 'Navigate the digital business landscape with expertise in e-commerce, digital marketing strategies, social media management, SEO, content marketing, and data analytics. Learn to build online presence, drive customer engagement, and measure digital marketing ROI using modern tools and platforms.',
                    duration: '10 weeks',
                    level: 'Advanced',
                    topics: 'E-commerce, Digital marketing, SEO, Social media, Content strategy, Analytics, Online business models'
                }
            ]
        }
    ]

    // Mobile state detection and initial setup
    useEffect(() => {
        setHasMounted(true)
        const checkMobile = () => setIsMobile(window.innerWidth < 768)
        checkMobile()

        // Handle initial hash
        const hash = window.location.hash.replace('#', '')
        const validSchoolIds = ['ai-robotics', 'languages', 'finance', 'business']
        if (hash && validSchoolIds.includes(hash)) {
            setActiveSchool(hash)
        }

        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    // Auto-rotate images for each school
    useEffect(() => {
        const intervals: NodeJS.Timeout[] = []
        schools.forEach(school => {
            if (school.images) {
                const interval = setInterval(() => {
                    setCurrentImageIndices(prev => ({
                        ...prev,
                        [school.id]: ((prev[school.id] || 0) + 1) % school.images.length
                    }))
                }, 3000)
                intervals.push(interval)
            }
        })
        return () => intervals.forEach(interval => clearInterval(interval))
    }, [])

    // Handle hash navigation from URL
    useEffect(() => {
        if (!hasMounted) return;

        const scrollToHashSection = (hash: string, attempt = 0) => {
            const validSchoolIds = ['ai-robotics', 'languages', 'finance', 'business']
            if (!hash || !validSchoolIds.includes(hash)) return

            // Set active school first
            setActiveSchool(hash)

            // Try to find and scroll to element
            const element = document.getElementById(hash)
            if (element) {
                const navHeight = 120 // Navigation bar height
                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
                const offsetPosition = elementPosition - navHeight - 30

                window.scrollTo({
                    top: Math.max(0, offsetPosition),
                    behavior: 'smooth'
                })
            } else if (attempt < 10) {
                // Retry with exponential backoff (up to 10 attempts)
                setTimeout(() => scrollToHashSection(hash, attempt + 1), 100 * (attempt + 1))
            }
        }

        const handleHashChange = () => {
            if (typeof window !== 'undefined') {
                const hash = window.location.hash.replace('#', '')
                if (hash) {
                    setTimeout(() => scrollToHashSection(hash), 100)
                }
            }
        }

        if (hasMounted) {
            handleHashChange()
        }

        // Listen for hash changes
        window.addEventListener('hashchange', handleHashChange)

        // Also listen for popstate (back/forward button)
        window.addEventListener('popstate', handleHashChange)

        return () => {
            window.removeEventListener('hashchange', handleHashChange)
            window.removeEventListener('popstate', handleHashChange)
        }
    }, [])


    return (
        <div className="divisions-page">
            <style jsx global>{`
                .expand-gateway {
                    display: flex;
                    flex-direction: row; /* Stack horizontally for vertical panels */
                    width: 100%;
                    height: 500px;
                    gap: 10px;
                    perspective: 1000px;
                }
                
                .gateway-panel {
                    flex: 1;
                    position: relative;
                    border-radius: 20px;
                    overflow: hidden;
                    cursor: pointer;
                    transition: all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1);
                    display: flex;
                    flex-direction: column; 
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                    height: 100%;
                }
                
                .gateway-panel::before {
                    content: '';
                    position: absolute;
                    inset: 0;
                    background: linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%);
                    z-index: 1;
                    opacity: 0.6;
                    transition: opacity 0.4s ease;
                }

                .gateway-panel:hover, .gateway-panel.expanded {
                    flex: 3; /* Expand horizontally */
                    box-shadow: 0 20px 40px rgba(0,0,0,0.25);
                }
                
                .gateway-panel:hover::before, .gateway-panel.expanded::before {
                    opacity: 0.8;
                }

                .gateway-bg {
                    position: absolute;
                    inset: 0;
                    background-size: cover;
                    background-position: center;
                    transition: transform 0.6s ease;
                    z-index: 0;
                }

                .gateway-panel:hover .gateway-bg, .gateway-panel.expanded .gateway-bg {
                    transform: scale(1.05);
                }

                .gateway-content {
                    position: relative;
                    z-index: 2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    width: 100%;
                    height: 100%;
                    color: white;
                    padding: 20px;
                    transition: all 0.5s ease;
                }
                
                .gateway-panel:hover .gateway-content, .gateway-panel.expanded .gateway-content {
                    justify-content: flex-end;
                    align-items: flex-start;
                    padding: 40px;
                    text-align: left;
                }

                .gateway-icon {
                    font-size: 32px;
                    transition: all 0.5s ease;
                    margin-bottom: 20px;
                    background: rgba(255,255,255,0.2);
                    padding: 12px;
                    border-radius: 12px;
                    backdrop-filter: blur(4px);
                }
                
                .gateway-panel:hover .gateway-icon, .gateway-panel.expanded .gateway-icon {
                   font-size: 48px;
                   background: rgba(255,255,255,0.3);
                   margin-bottom: 24px;
                }

                .gateway-title {
                    font-size: 18px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 4px;
                    white-space: nowrap;
                    transition: all 0.4s ease;
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    height: 150px;
                    display: flex;
                    align-items: center;
                }

                .gateway-panel:hover .gateway-title, .gateway-panel.expanded .gateway-title {
                    writing-mode: horizontal-tb;
                    transform: rotate(0deg);
                    height: auto;
                    font-size: 32px;
                    letter-spacing: 1px;
                    margin-bottom: 16px;
                }
                
                .gateway-click-hint {
                    font-size: 10px;
                    text-transform: uppercase;
                    letter-spacing: 2px;
                    color: rgba(255,255,255,0.7);
                    writing-mode: vertical-rl;
                    transform: rotate(180deg);
                    margin-top: 20px;
                    transition: all 0.3s ease;
                    opacity: 1;
                    animation: pulse 2s infinite;
                }

                .gateway-panel:hover .gateway-click-hint, .gateway-panel.expanded .gateway-click-hint {
                    opacity: 0;
                    margin-top: 0;
                    height: 0;
                    overflow: hidden;
                }

                .gateway-details {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.5s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                }

                .gateway-panel:hover .gateway-details, .gateway-panel.expanded .gateway-details {
                    max-height: 200px;
                    opacity: 1;
                }

                .gateway-desc {
                    font-size: 14px;
                    line-height: 1.6;
                    color: rgba(255,255,255,0.95);
                    margin-bottom: 20px;
                    max-width: 90%;
                }

                .gateway-arrow {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    font-weight: 700;
                    font-size: 14px;
                    background: rgba(255,255,255,0.2);
                    padding: 10px 20px;
                    border-radius: 30px;
                    backdrop-filter: blur(4px);
                    transform: translateX(-20px);
                    opacity: 0;
                    transition: all 0.5s ease 0.1s;
                    cursor: pointer;
                    pointer-events: auto; /* Ensure clickable */
                }

                .gateway-panel:hover .gateway-arrow, .gateway-panel.expanded .gateway-arrow {
                    transform: translateX(0);
                    opacity: 1;
                }

                @media (max-width: 768px) {
                     .expand-gateway {
                        flex-direction: column;
                        height: 600px;
                     }
                    .gateway-panel {
                        flex-direction: row;
                        padding: 0 20px;
                        justify-content: flex-start;
                    }
                     .gateway-panel:hover .gateway-content, .gateway-panel.expanded .gateway-content {
                        justify-content: center;
                        align-items: flex-start;
                        padding: 20px;
                     }
                     .gateway-title {
                        writing-mode: horizontal-tb;
                        transform: rotate(0deg);
                        height: auto;
                        font-size: 16px;
                        margin-left: 20px;
                        margin-bottom: 0;
                     }
                     .gateway-click-hint {
                        writing-mode: horizontal-tb;
                        transform: rotate(0deg);
                        margin-top: 0;
                        margin-left: auto;
                        margin-right: 10px;
                     }
                     .gateway-panel:hover .gateway-title, .gateway-panel.expanded .gateway-title {
                        font-size: 20px;
                        margin-left: 0;
                        margin-bottom: 10px;
                     }
                     .gateway-icon {
                        margin-bottom: 0;
                        font-size: 24px;
                     }
                     .gateway-panel:hover .gateway-icon, .gateway-panel.expanded .gateway-icon {
                        margin-bottom: 10px;
                     }
                }

            `}</style>

            {/* Unified Hero Section - Synced with About Us Theme */}
            <HeroSection
                tagline="EXCELLENCE IN SPECIALIZED LEARNING"
                title="Explore Our <span style='color: #dc2626'>Specialized</span> Divisions"
                description="The DARE Centre is home to four distinct, world-class schools, each meticulously designed to bridge the critical gap between academic theory and practical industry application. Whether you are delving into the future of technology with AI & Robotics, mastering global communication in our School of Languages, navigating complex economic landscapes in Finance, or leading the next generation of enterprises in Business, our specialized divisions offer a pathway to excellence. We equip learners with the cutting-edge skills, real-world experience, and confidence needed to not just adapt to the future, but to actively shape it."
                backgroundType="gradient"
                customMedia={
                    <div className="expand-gateway">
                        {
                            [
                                { id: 'ai-robotics', icon: <FaRobot />, label: 'AI & Robotics', color: '#dc2626', bg: 'linear-gradient(135deg, #ef4444, #7f1d1d)', desc: 'Build the future with intelligent machines.' },
                                { id: 'languages', icon: <FaGlobe />, label: 'Languages', color: '#0EA5C0', bg: 'linear-gradient(135deg, #06b6d4, #0e7490)', desc: 'Connect with the world through global fluency.' },
                                { id: 'finance', icon: <FaChartLine />, label: 'Finance', color: '#204572', bg: 'linear-gradient(135deg, #3b82f6, #1e3a8a)', desc: 'Master wealth creation and economic strategy.' },
                                { id: 'business', icon: <FaBriefcase />, label: 'Business', color: '#D97706', bg: 'linear-gradient(135deg, #f59e0b, #b45309)', desc: 'Lead confidently in the corporate world.' }
                            ].map((item) => (
                                <div
                                    key={item.id}
                                    className={`gateway-panel ${expandedPanel === item.id ? 'expanded' : ''}`}
                                    onClick={(e) => {
                                        if (isMobile) {
                                            // On Mobile: Only expand if not already expanded. Do NOT redirect on card tap.
                                            if (expandedPanel !== item.id) {
                                                setExpandedPanel(item.id);
                                            }
                                        } else {
                                            // Desktop: Stick to existing click-to-navigate for the whole card
                                            const element = document.getElementById(item.id);
                                            if (element) {
                                                const navHeight = 120;
                                                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                                const offsetPosition = elementPosition - navHeight - 30;
                                                window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
                                            }
                                        }
                                    }}
                                >
                                    {/* Background - Using Gradient instead of Image for crispness */}
                                    <div className="gateway-bg" style={{ background: item.bg }}></div>

                                    <div className="gateway-content">
                                        <div className="gateway-icon">{item.icon}</div>
                                        <div className="gateway-title">{item.label}</div>
                                        <div className="gateway-click-hint">Click Here</div>

                                        <div className="gateway-details">
                                            <div className="gateway-desc">{item.desc}</div>
                                            <div
                                                className="gateway-arrow"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent panel 'expanded' toggle logic from interfering
                                                    const element = document.getElementById(item.id);
                                                    if (element) {
                                                        const navHeight = 120;
                                                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                                        const offsetPosition = elementPosition - navHeight - 30;
                                                        window.scrollTo({ top: Math.max(0, offsetPosition), behavior: 'smooth' });
                                                    }
                                                }}
                                            >
                                                Explore <FaArrowRight />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                }
            />

            {/* All Schools Displayed One by One */}
            {schools.map((school) => {
                const schoolImageIndex = currentImageIndices[school.id] || 0

                const nextImage = (schoolId: string) => {
                    const schoolData = schools.find(s => s.id === schoolId)
                    if (schoolData?.images) {
                        setCurrentImageIndices(prev => ({
                            ...prev,
                            [schoolId]: ((prev[schoolId] || 0) + 1) % schoolData.images.length
                        }))
                    }
                }

                const prevImage = (schoolId: string) => {
                    const schoolData = schools.find(s => s.id === schoolId)
                    if (schoolData?.images) {
                        setCurrentImageIndices(prev => ({
                            ...prev,
                            [schoolId]: ((prev[schoolId] || 0) - 1 + schoolData.images.length) % schoolData.images.length
                        }))
                    }
                }

                return (
                    <section key={school.id} id={school.id} className="school-overhaul-section" style={{ position: 'relative', overflow: 'hidden' }}>
                        {/* Dynamic Background Accents */}
                        <div style={{
                            position: 'absolute',
                            top: '10%',
                            right: '-5%',
                            width: '400px',
                            height: '400px',
                            background: school.id === 'ai-robotics' ? 'rgba(220, 38, 38, 0.03)' :
                                school.id === 'finance' ? 'rgba(32, 69, 114, 0.03)' :
                                    school.id === 'business' ? 'rgba(255, 215, 0, 0.05)' : 'rgba(78, 205, 196, 0.05)',
                            borderRadius: '50%',
                            filter: 'blur(80px)',
                            zIndex: 0
                        }}></div>

                        <div className="school-details-container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto' }}>
                            {/* NEW: Top Info Bar with School Identity */}
                            <div className="school-details-info-row">
                                <div style={{ flex: 1, width: '100%' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
                                        <div style={{
                                            width: '64px',
                                            height: '64px',
                                            background: school.id === 'ai-robotics' ? '#dc2626' :
                                                school.id === 'finance' ? '#204572' :
                                                    school.id === 'business' ? '#FFD700' : '#4ECDC4',
                                            borderRadius: '16px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            fontSize: '32px',
                                            color: school.id === 'business' ? '#0a1f3d' : '#ffffff',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        }}>
                                            <school.icon />
                                        </div>
                                        <div>
                                            <h2 className="school-title-main" style={{ fontWeight: '900', color: '#0a1f3d', margin: 0 }}>{school.name}</h2>
                                            <p className="school-tagline-main" style={{ margin: 0, color: school.id === 'ai-robotics' ? '#dc2626' : '#64748b', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '1px' }}>{school.tagline}</p>
                                        </div>
                                    </div>
                                    <p className="school-desc-main" style={{ lineHeight: '1.7', color: '#475569' }}>{school.description}</p>

                                    {/* Transforming Features into Colorful Cards */}
                                    <div className="school-features-grid">
                                        {school.features.slice(0, 4).map((feat, i) => (
                                            <div key={i} style={{
                                                padding: '20px',
                                                background: '#ffffff',
                                                borderRadius: '16px',
                                                border: '1px solid #e2e8f0',
                                                boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                                                display: 'flex',
                                                gap: '12px'
                                            }}>
                                                <div style={{ color: '#dc2626', marginTop: '4px' }}><FaCheckCircle /></div>
                                                <div style={{ fontSize: '14px', fontWeight: '700', color: '#0a1f3d' }}>{feat.split(' - ')[0]}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Animated Image Gallery Panel */}
                                <div className="school-image-panel-wrapper" style={{ width: '100%' }}>
                                    <div className="school-image-container" style={{
                                        position: 'relative',
                                        borderRadius: '30px',
                                        overflow: 'hidden',
                                        aspectRatio: '16/10',
                                        boxShadow: '0 30px 60px rgba(0,0,0,0.12)',
                                        border: '8px solid #ffffff',
                                        width: '100%'
                                    }}>
                                        <div className="image-carousel">
                                            {school.images.map((img, index) => (
                                                <div
                                                    key={index}
                                                    className={'carousel-image ' + (index === schoolImageIndex ? 'active' : '')}
                                                    style={{ backgroundImage: 'url(' + img + ')' }}
                                                ></div>
                                            ))}
                                        </div>
                                        <div className="carousel-controls" style={{ position: 'absolute', bottom: '20px', left: '0', right: '0', display: 'flex', justifyContent: 'center', gap: '10px' }}>
                                            {school.images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className={'dot ' + (index === schoolImageIndex ? 'active' : '')}
                                                    style={{
                                                        width: index === schoolImageIndex ? '24px' : '8px',
                                                        height: '8px',
                                                        borderRadius: '8px',
                                                        border: 'none',
                                                        background: '#ffffff',
                                                        opacity: index === schoolImageIndex ? 1 : 0.5,
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onClick={() => setCurrentImageIndices(prev => ({ ...prev, [school.id]: index }))}
                                                ></button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {school.id === 'languages' && (
                                <div style={{ marginTop: '20px' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                                        <div style={{ height: '4px', width: '60px', background: '#3b82f6', borderRadius: '2px' }}></div>
                                        <h3 style={{ fontSize: '24px', fontWeight: '900', color: '#0a1f3d', textTransform: 'uppercase', letterSpacing: '1px' }}>Global & Regional Programs</h3>
                                    </div>
                                    <div className="school-features-grid" style={{ gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)' }}>
                                        {[...(school.regionalLanguages || []), ...(school.foreignLanguages || [])].map((lang, i) => (
                                            <div key={i} style={{
                                                background: 'linear-gradient(135deg, #ffffff 0%, #f8faff 100%)',
                                                padding: '24px',
                                                borderRadius: '20px',
                                                border: '1px solid #e2e8f0',
                                                textAlign: 'center',
                                                transition: 'all 0.3s ease'
                                            }}>
                                                <div style={{ width: '48px', height: '32px', margin: '0 auto 16px', borderRadius: '4px', overflow: 'hidden', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
                                                    <img src={lang.flag} alt={lang.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                                </div>
                                                <h4 style={{ fontSize: '18px', fontWeight: '900', color: '#0a1f3d' }}>{lang.name}</h4>
                                                <p style={{ fontSize: '12px', color: '#64748b' }}>
                                                    {(lang as any).level || (lang as any).levels}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </section>
                )
            })}

        </div>
    )
}
