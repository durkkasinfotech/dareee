'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FaBullhorn, FaNewspaper, FaArrowRight, FaRobot, FaChartLine, FaBusinessTime, FaGlobe, FaGraduationCap, FaRocket, FaAward, FaUserTie, FaStar } from 'react-icons/fa'
import HeroSection from './components/HeroSection'

// Creative Visual Component for Home Hero - Infinity Orbit Version
const HomeHeroVisual = () => {
  return (
    <div className="hero-visual-wrapper">
      {/* Background decorative glowing layers */}
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* Orbit Container - This rotates everything */}
      <div className="orbit-system">
        {/* 1. AI & Robotics (Top - 0°) */}
        <div className="orbit-item item-0">
          <div className="float-card counter-rotate robotics-card">
            <div className="card-icon robotics-icon"><FaRobot size={20} /></div>
            <div className="card-tag robotics-tag">TECH</div>
            <div className="card-title">Robotics</div>
          </div>
        </div>

        {/* 2. Edukoot (Top-Right - 45°) */}
        <div className="orbit-item item-45">
          <div className="float-card counter-rotate edukoot-card">
            <div className="card-icon edukoot-icon"><FaGraduationCap size={20} /></div>
            <div className="card-tag edukoot-tag">PLATFORM</div>
            <div className="card-title">Edukoot</div>
          </div>
        </div>

        {/* 3. Languages (Right - 90°) */}
        <div className="orbit-item item-90">
          <div className="float-card counter-rotate languages-card">
            <div className="card-icon languages-icon"><FaGlobe size={20} /></div>
            <div className="card-tag languages-tag">GLOBAL</div>
            <div className="card-title">Languages</div>
          </div>
        </div>

        {/* 4. NextGen (Bottom-Right - 135°) */}
        <div className="orbit-item item-135">
          <div className="float-card counter-rotate nextgen-card">
            <div className="card-icon nextgen-icon"><FaRocket size={20} /></div>
            <div className="card-tag nextgen-tag">FUTURE</div>
            <div className="card-title">NextGen</div>
          </div>
        </div>

        {/* 5. Finance (Bottom - 180°) */}
        <div className="orbit-item item-180">
          <div className="float-card counter-rotate finance-card">
            <div className="card-icon finance-icon"><FaChartLine size={20} /></div>
            <div className="card-tag finance-tag">STRATEGIC</div>
            <div className="card-title">Finance</div>
          </div>
        </div>

        {/* 6. Workshop/VAC (Bottom-Left - 225°) */}
        <div className="orbit-item item-225">
          <div className="float-card counter-rotate workshop-card">
            <div className="card-icon workshop-icon"><FaAward size={20} /></div>
            <div className="card-tag workshop-tag">SKILLS</div>
            <div className="card-title">Workshop</div>
          </div>
        </div>

        {/* 7. Business (Left - 270°) */}
        <div className="orbit-item item-270">
          <div className="float-card counter-rotate business-card">
            <div className="card-icon business-icon"><FaUserTie size={20} /></div>
            <div className="card-tag business-tag">PRO</div>
            <div className="card-title">Business</div>
          </div>
        </div>

        {/* 8. Internship (Top-Left - 315°) */}
        <div className="orbit-item item-315">
          <div className="float-card counter-rotate internship-card">
            <div className="card-icon internship-icon"><FaStar size={20} /></div>
            <div className="card-tag internship-tag">CAREER</div>
            <div className="card-title">Internship</div>
          </div>
        </div>
      </div>

      {/* Fixed Central Hub */}
      <div className="pulse-center">
        <div style={{ position: 'relative', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px' }}>
          <Image
            src="/dare1.png"
            alt="DARE Centre"
            fill
            style={{ objectFit: 'contain' }}
          />
        </div>
      </div>

      <style jsx>{`
                @keyframes popInOut {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.05); }
                }

                .hero-visual-wrapper {
                    position: relative;
                    width: 100%;
                    height: 460px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    overflow: visible;
                }

                .bg-glow-1 {
                    position: absolute;
                    width: 450px;
                    height: 450px;
                    background: radial-gradient(circle, rgba(18, 220, 250, 0.1) 0%, transparent 70%);
                    border-radius: 50%;
                    filter: blur(60px);
                    z-index: 0;
                }

                .bg-glow-2 {
                    position: absolute;
                    width: 350px;
                    height: 350px;
                    background: radial-gradient(circle, rgba(220, 38, 38, 0.08) 0%, transparent 70%);
                    border-radius: 50%;
                    filter: blur(50px);
                    top: 10%;
                    right: 10%;
                    z-index: 0;
                }

                .orbit-system {
                    position: relative;
                    width: 400px;
                    height: 400px;
                    z-index: 2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    animation: main-orbit 40s linear infinite;
                }

                .orbit-item {
                    position: absolute;
                    transition: all 0.5s ease;
                }

                /* 8-Node Orbit Coordinates (Radius: 180px) */
                .item-0   { transform: translateY(-190px); }
                .item-45  { transform: translate(134px, -134px); }
                .item-90  { transform: translateX(190px); }
                .item-135 { transform: translate(134px, 134px); }
                .item-180 { transform: translateY(190px); }
                .item-225 { transform: translate(-134px, 134px); }
                .item-270 { transform: translateX(-190px); }
                .item-315 { transform: translate(-134px, -134px); }

                .float-card {
                    background: #ffffff;
                    padding: 15px;
                    border-radius: 18px;
                    width: 130px;
                    text-align: center;
                    transition: all 0.3s ease;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                /* Themed Styles for Node Cards */
                .robotics-card, .workshop-card { box-shadow: 0 15px 30px rgba(220, 38, 38, 0.1); border-color: rgba(220, 38, 38, 0.1); }
                .languages-card, .internship-card { box-shadow: 0 15px 30px rgba(18, 220, 250, 0.1); border-color: rgba(18, 220, 250, 0.1); }
                .edukoot-card, .finance-card { box-shadow: 0 15px 30px rgba(255, 215, 0, 0.1); border-color: rgba(255, 215, 0, 0.1); }
                .nextgen-card, .business-card { box-shadow: 0 15px 30px rgba(32, 69, 114, 0.1); border-color: rgba(32, 69, 114, 0.1); }

                .float-card:hover {
                    box-shadow: 0 25px 50px rgba(0,0,0,0.15) !important;
                    transform: scale(1.1) !important;
                    z-index: 20;
                }

                .card-icon {
                    width: 36px;
                    height: 36px;
                    border-radius: 10px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #ffffff;
                    margin: 0 auto 8px;
                }

                .robotics-icon, .workshop-icon { background: #DC2626; box-shadow: 0 8px 16px rgba(220, 38, 38, 0.2); }
                .languages-icon, .internship-icon { background: #12DCFA; box-shadow: 0 8px 16px rgba(18, 220, 250, 0.2); }
                .edukoot-icon, .finance-icon { background: #FFD700; color: #204572; box-shadow: 0 8px 16px rgba(255, 215, 0, 0.2); }
                .nextgen-icon, .business-icon { background: #204572; box-shadow: 0 8px 16px rgba(32, 69, 114, 0.2); }

                .card-tag { font-size: 9px; font-weight: 800; letter-spacing: 0.5px; margin-bottom: 2px; }
                .robotics-tag, .workshop-tag { color: #DC2626; }
                .languages-tag, .internship-tag { color: #12DCFA; }
                .edukoot-tag, .finance-tag { color: #B8860B; }
                .nextgen-tag, .business-tag { color: #204572; }

                .card-title { font-size: 13px; font-weight: 900; color: #204572; }

                .pulse-center {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 130px;
                    height: 130px;
                    background: rgba(255,255,255,0.95);
                    backdrop-filter: blur(15px);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 12px 30px rgba(0,0,0,0.12);
                    border: 2px solid rgba(255,255,255,0.8);
                    z-index: 10;
                    animation: pulse 4s ease-in-out infinite;
                }

                .counter-rotate {
                    animation: counter-orbit 40s linear infinite;
                }

                @keyframes main-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                @keyframes counter-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }

                @keyframes pulse {
                    0%, 100% { transform: translate(-50%, -50%) scale(1); box-shadow: 0 12px 30px rgba(0,0,0,0.12); }
                    50% { transform: translate(-50%, -50%) scale(1.06); box-shadow: 0 18px 40px rgba(18, 220, 250, 0.22); }
                }

                @media (max-width: 1024px) {
                    .hero-visual-wrapper { height: 450px; }
                    .item-0   { transform: translateY(-160px); }
                    .item-45  { transform: translate(113px, -113px); }
                    .item-90  { transform: translateX(160px); }
                    .item-135 { transform: translate(113px, 113px); }
                    .item-180 { transform: translateY(160px); }
                    .item-225 { transform: translate(-113px, 113px); }
                    .item-270 { transform: translateX(-160px); }
                    .item-315 { transform: translate(-113px, -113px); }
                    .float-card { width: 110px; padding: 12px; }
                }

                @media (max-width: 768px) {
                    :global(.dare-centre-pop) {
                        padding-left: 0 !important;
                    }
                    .hero-visual-wrapper { height: 400px; }
                    .item-0   { transform: translateY(-140px); }
                    .item-45  { transform: translate(99px, -99px); }
                    .item-90  { transform: translateX(140px); }
                    .item-135 { transform: translate(99px, 99px); }
                    .item-180 { transform: translateY(140px); }
                    .item-225 { transform: translate(-99px, 99px); }
                    .item-270 { transform: translateX(-140px); }
                    .item-315 { transform: translate(-99px, -99px); }
                    .float-card { width: 100px; padding: 10px; }
                    .card-title { font-size: 11px; }
                    .pulse-center { width: 85px; height: 85px; }
                }

                @media (max-width: 480px) {
                    .hero-visual-wrapper { height: 350px; }
                    .item-0   { transform: translateY(-120px); }
                    .item-45  { transform: translate(84px, -84px); }
                    .item-90  { transform: translateX(120px); }
                    .item-135 { transform: translate(84px, 84px); }
                    .item-180 { transform: translateY(120px); }
                    .item-225 { transform: translate(-84px, 84px); }
                    .item-270 { transform: translateX(-120px); }
                    .item-315 { transform: translate(-84px, -84px); }
                    .float-card { width: 85px; padding: 8px; }
                    .card-icon { width: 28px; height: 28px; }
                    .card-title { font-size: 10px; }
                    .pulse-center { width: 75px; height: 75px; }
                }
            `}</style>
    </div>
  )
}

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: ''
  })
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')

  const [activeSectionKey, setActiveSectionKey] = useState<string>('schools')
  const autoPlayIntervalRef = useRef<NodeJS.Timeout | null>(null)
  const autoScrollCountRef = useRef(0)
  const [isAutoScrollStopped, setIsAutoScrollStopped] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isBannerOpen, setIsBannerOpen] = useState(true)
  const [showSchoolsInline, setShowSchoolsInline] = useState(false)
  const [isConsultingModalOpen, setIsConsultingModalOpen] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    if (isBannerOpen) {
      const scrollY = window.scrollY
      document.body.classList.add('banner-lock')
      document.body.style.top = `-${scrollY}px`
      document.documentElement.style.overflow = 'hidden'
    } else {
      const scrollY = document.body.style.top
      document.body.classList.remove('banner-lock')
      document.body.style.top = ''
      document.documentElement.style.overflow = ''
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY) * -1)
      }
    }
    return () => {
      document.body.classList.remove('banner-lock')
      document.body.style.top = ''
      document.documentElement.style.overflow = ''
    }
  }, [isBannerOpen])

  const aboutSections = [
    {
      key: 'schools',
      title: 'Schools',
      subtitle: 'School of AI & Robotics · School of Finance · School of Business · School of Languages',
      cta: 'View All Schools',
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1600&q=80'
    },
    {
      key: 'edukoot',
      title: 'Edukoot',
      subtitle: 'Innovate. Excel. Transform.',
      cta: 'Join Edukoot',
      image: '/edu-crop.png'
    },
    {
      key: 'nxtgen',
      title: 'NXTZEN Coders',
      subtitle: 'Learn. Code. Automate. Deploy.',
      cta: 'Explore NXTZEN Coders',
      image: '/nxtzen-logo.JPG'
    },
    {
      key: 'workshops',
      title: 'Workshops',
      subtitle: 'Hands-on Training · Skill Building · Innovation Bootcamps',
      cta: 'Join Upcoming Workshops',
      image: '/workshop.JPG'
    },
    {
      key: 'internships',
      title: 'Internships',
      subtitle: 'Real-world Experience · Industry Projects · Mentorship',
      cta: 'Apply for Internship',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80'
    }
  ]

  const ecosystemDetails: Record<string, string> = {
    schools:
      'Four schools under one roof: AI & Robotics, Finance, Business, and Languages to build complete 21st century learners.',
    ai: 'Understand intelligent systems, AI fundamentals, automation logic, prompt engineering and real-world AI applications that shape industries.',
    robotics: 'Work with sensors, controllers and DIY kits using STEM/STEAM and Pictoblox projects to design, build and program robots.',
    finance: 'Learn digital banking, budgeting, investments and financial planning to build lifelong money confidence and awareness.',
    business: 'Develop communication, leadership, professional etiquette, entrepreneurship and digital operations for real-world careers.',
    k12: 'K12 robotics, coding and skill development programs that build computational thinking, creativity and problem solving.',
    languages: 'Tamil, Hindi and English communication using the LSRW method: Listening, Speaking, Reading and Writing.',
    digital: 'Digital skills from computer fundamentals to MS Office with AI, design tools, Google Workspace and AI productivity tools.',
    aicra: 'Advanced robotics and automation programs aligned with AICRA standards, including IoT, hardware and automation projects.',
    edukoot: 'A structured co-learning community built on the Harkness method with weekly sessions, peer learning and progress tracking.',
    nxtgen: 'Next-generation AI development tracks that teach AI-assisted coding, frontend, backend and full-stack application building.',
    workshops: 'Intensive hands-on sessions focusing on latest tech trends, robotics assembly, soft skills, and rapid prototyping.',
    internships: 'Immersive industry training programs where students work on live projects, gain corporate exposure, and build professional portfolios.',
    cv: 'A secure online system that verifies certificates issued by DARE Centre using unique IDs or QR codes.',
    eventgen: 'A platform to create events, upload participants, choose templates and auto-generate certificates in minutes.',
    gallery: 'A curated visual story of classrooms, labs, workshops, internships, community events and project demonstrations.',
    internship: 'Offline internship experiences inside DARE Centre with real tools, robotics assembly, automation tasks and project pitching.',
    testimonials: 'Real stories from learners and parents describing improvements in skills, confidence and career readiness.',
    announcements: 'Official DARE Centre updates from EMS covering new batches, workshops, training notices and academic communication.'
  }

  const announcements = [
    {
      id: 1,
      text: 'Mathematics Day 2025 - Where Mathematics Meets AI (Dec 22)',
      date: 'Dec 17',
      isNew: true,
      url: 'https://event.darecentre.in/math'
    },
    {
      id: 2,
      text: 'NxtZen Coders Winter Camp - Registration Open (Dec 29-31)',
      date: 'Dec 15',
      isNew: true,
      url: 'https://event.darecentre.in/nxtzenwinter2025'
    },
    {
      id: 3,
      text: 'Linguistic Tornado 2025 - English Learning Camp (Dec 26-28)',
      date: 'Dec 14',
      isNew: false,
      url: 'https://event.darecentre.in/linguistic2025'
    }
  ]

  const newsEvents = [
    {
      id: 1,
      text: 'Mathematics Day 2025: Registration Period Dec 17-20, Project Submission Dec 17-21',
      date: 'Dec 17',
      isNew: true,
      url: 'https://event.darecentre.in/math'
    },
    {
      id: 2,
      text: 'NxtZen Coders: Coding, Robotics & 3D/VR for Grades 1-12 - Limited Seats',
      date: 'Dec 15',
      isNew: true,
      url: 'https://event.darecentre.in/nxtzenwinter2025'
    },
    {
      id: 3,
      text: 'Linguistic Tornado at ISOD: Phonics, Vocabulary & Storytelling Activities',
      date: 'Dec 14',
      isNew: false,
      url: 'https://event.darecentre.in/linguistic2025'
    }
  ]

  const schools = [
    {
      id: 'ai-robotics',
      name: 'School of Ai & robotics',
      tagline: 'Think. Build. Innovate.',
      description: 'A unified approach to intelligent systems and mechanical engineering. Learn AI fundamentals, automation logic, and robotics assembly to build smart machines and future-ready solutions.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1920&q=80'
    },
    {
      id: 'finance',
      name: 'School of finance',
      tagline: 'Earn. Save. Grow. Secure.',
      description: 'This division covers digital banking, budgeting, investment basics, financial planning, economic awareness, and responsible decision-making. Students develop lifelong financial confidence and knowledge.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80'
    },
    {
      id: 'business',
      name: 'School of business',
      tagline: 'Lead. Communicate. Strategize. Succeed.',
      description: 'Students learn communication, leadership, professional etiquette, behavioural skills, entrepreneurship, digital operations, and marketing fundamentals. The School of Business prepares learners to function confidently in real-world professional environments.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80'
    },
    {
      id: 'languages',
      name: 'School of languages',
      tagline: 'Connect. Express. Globalize.',
      description: 'Master the art of communication with our comprehensive language programs. From English fluency to regional and foreign languages, we help you connect with the world confidently.',
      image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=1920&q=80'
    }
  ]

  const nextSlide = () => {
    setSlideDirection('right')
    setCurrentSlide((prev) => (prev + 1) % schools.length)
  }

  const prevSlide = () => {
    setSlideDirection('left')
    setCurrentSlide((prev) => (prev - 1 + schools.length) % schools.length)
  }

  const goToSlide = (index: number) => {
    setSlideDirection(index > currentSlide ? 'right' : 'left')
    setCurrentSlide(index)
  }

  // Auto-play functionality - Only 5 times, then stop and allow manual scroll/swipe
  useEffect(() => {
    if (isAutoScrollStopped) return

    autoPlayIntervalRef.current = setInterval(() => {
      setSlideDirection('right')
      setCurrentSlide((prev) => {
        const nextSlide = (prev + 1) % schools.length
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
  }, [schools.length, isAutoScrollStopped])

  const handleExploreMore = (schoolId: string) => {
    window.location.href = `/divisions#${schoolId}`
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
  }

  const handleLocationClick = () => {
    // Redirect to Google Maps
    window.open('https://www.google.com/maps', '_blank')
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="container">
      {/* Top Header - Blue Bar */}
      {/* Top Header and Main Navigation removed - now handled by layout */}


      {/* Hero Banner */}
      <HeroSection
        tagline="AN ISO 9001:2015 CERTIFIED INSTITUTION"
        title="DURKKAS ACADEMY OF <span style='white-space: nowrap;'><span style='color: #dc2626'>RESEARCH</span> AND <span style='color: #12DCFA'>EDUCATION</span></span><br/><span style='font-size: 0.75em; font-weight: 800; margin: 20px auto 0; display: block; letter-spacing: 4px; text-transform: uppercase; background: linear-gradient(90deg, #dc2626 0%, #204572 50%, #12DCFA 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: popInOut 3s ease-in-out infinite; line-height: 1.4; text-align: center; width: fit-content;'>EXPLORE | DISCOVER<br/>INVENT | CREATE</span>"
        description="<div style='margin-bottom: 25px; font-size: clamp(17px, 1.8vw, 21px); color: #1e293b; font-weight: 600; line-height: 1.8; max-width: 700px; text-align: justify;'>At DURKKAS ACADEMY OF RESEARCH AND EDUCATION (DARE), we bridge the gap between academic theory and industry excellence. Through our specialized schools of <span style='color: #dc2626; font-weight: 800;'>AI & Robotics</span>, <span style='color: #dc2626; font-weight: 800;'>Finance</span>, <span style='color: #dc2626; font-weight: 800;'>Business</span>, and <span style='color: #dc2626; font-weight: 800;'>Languages</span>, we provide learners with hands-on training and innovative learning frameworks designed to build confidence, capability, and a competitive global edge.</div><span style='display: flex; justify-content: flex-start; gap: 40px; width: 100%; font-weight: 900; font-size: clamp(16px, 1.8vw, 22px); letter-spacing: 1px; margin-top: 0; text-transform: uppercase; font-family: var(--font-montserrat), sans-serif;'><span style='color: #dc2626'>Driving Innovation</span><span style='color: #1a3d5c'>Inspiring Excellence</span></span>"
        buttonText="Book Consulting Session"
        buttonAction={() => setIsConsultingModalOpen(true)}
        customMedia={<HomeHeroVisual />}
        backgroundType="gradient"
        centered={true}
      />



      {/* Consulting Session Modal */}
      {
        isConsultingModalOpen && (
          <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
            padding: '20px'
          }} onClick={() => setIsConsultingModalOpen(false)}>
            <div style={{
              background: '#ffffff',
              borderRadius: '24px',
              width: '100%',
              maxWidth: '450px',
              maxHeight: '90vh',
              overflowY: 'auto',
              position: 'relative',
              animation: 'modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
            }} onClick={(e) => e.stopPropagation()}>
              <button
                onClick={() => setIsConsultingModalOpen(false)}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  background: 'rgba(0,0,0,0.1)',
                  border: 'none',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: '#1a3d5c',
                  zIndex: 10
                }}
              >
                ✕
              </button>

              <div style={{
                background: 'linear-gradient(135deg, #1a3d5c 0%, #12DCFA 100%)',
                padding: '40px 30px 30px',
                textAlign: 'center',
                color: '#ffffff'
              }}>
                <h3 style={{ margin: 0, fontSize: '24px', color: '#ffffff' }}>Consulting Session</h3>
                <p style={{ margin: '10px 0 0', opacity: 0.9, fontSize: '14px' }}>Register here for demo session worth <span style={{ textDecoration: 'line-through' }}>Rs.499</span> — now free</p>
              </div>

              <div style={{ padding: '30px' }}>
                <form onSubmit={(e) => { handleSubmit(e); setIsConsultingModalOpen(false); }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#1a3d5c' }}>Full Name</label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        outline: 'none',
                        fontSize: '15px',
                        transition: 'border-color 0.2s ease'
                      }}
                      required
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#1a3d5c' }}>Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        outline: 'none',
                        fontSize: '15px',
                        transition: 'border-color 0.2s ease'
                      }}
                      required
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <label style={{ fontSize: '13px', fontWeight: 700, color: '#1a3d5c' }}>Choose Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      style={{
                        padding: '14px 16px',
                        borderRadius: '12px',
                        border: '2px solid #e2e8f0',
                        outline: 'none',
                        fontSize: '15px',
                        background: '#fff',
                        cursor: 'pointer'
                      }}
                      required
                    >
                      <option value="">Select Category</option>
                      <option value="ai-robotics">AI & Robotics</option>
                      <option value="languages">Languages</option>
                      <option value="business">Business</option>
                      <option value="finance">Finance</option>
                    </select>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <input
                      type="checkbox"
                      id="modal-terms"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      required
                      style={{ width: '18px', height: '18px', cursor: 'pointer' }}
                    />
                    <label htmlFor="modal-terms" style={{ fontSize: '12px', color: '#64748b', cursor: 'pointer' }}>
                      I agree to the <Link href="/terms-and-conditions" style={{ color: '#dc2626', fontWeight: 600 }}>Terms & Conditions</Link>
                    </label>
                  </div>

                  <button
                    type="submit"
                    style={{
                      background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                      color: '#ffffff',
                      padding: '12px 24px',
                      borderRadius: '8px',
                      fontSize: '16px',
                      fontWeight: '700',
                      border: 'none',
                      cursor: 'pointer',
                      marginTop: '10px',
                      boxShadow: '0 4px 12px rgba(32, 69, 114, 0.4)',
                      transition: 'all 0.3s ease',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'translateY(-2px)'
                      e.currentTarget.style.boxShadow = '0 6px 16px rgba(32, 69, 114, 0.5)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'translateY(0)'
                      e.currentTarget.style.boxShadow = '0 4px 12px rgba(32, 69, 114, 0.4)'
                    }}
                  >
                    Confirm Booking
                  </button>
                </form>
              </div>
            </div>
            <style jsx>{`
            @keyframes modalSlideUp {
              from { opacity: 0; transform: translateY(40px) scale(0.95); }
              to { opacity: 1; transform: translateY(0) scale(1); }
            }
          `}</style>
          </div>
        )
      }

      <section className="about-main-section" style={{ padding: '20px 0' }}>
        <div className="about-main-container">
          <div className="about-intro-card">
            <div className="about-intro-content">
              <h2 className="section-heading">DARE CENTRE</h2>
              <h3 className="section-subheading" style={{ color: '#dc2626', textAlign: 'justify' }}>DURKKAS ACADEMY OF RESEARCH AND EDUCATION</h3>
              <p className="about-intro-text" style={{ textAlign: 'justify' }}>
                <strong>DARE Centre</strong> (DURKKAS ACADEMY OF RESEARCH AND EDUCATION), the educational division of the DURKKAS Group,
                is committed to bringing first-tier educational opportunities to second and third-tier cities.
              </p>
              <p className="about-intro-text" style={{ textAlign: 'justify' }}>
                With ISO 9001:2015 certification, we offer structured academic programs, skill-based training,
                technology-driven learning, and personalized mentorship that bridge the accessibility gap and
                help learners compete at a global level.
              </p>
            </div>
            <div className="about-intro-image" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe
                src="https://www.youtube.com/embed/qZiuShzVWYs?autoplay=0&mute=0&loop=1&playlist=qZiuShzVWYs&rel=0&modestbranding=1"
                title="DARE Centre Video"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)'
                }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>


      {/* Announcements & News Section - Creative Look */}
      <section className="announcements-news-section" style={{
        padding: '60px 0',
        backgroundColor: '#f8fafc',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Background Decorations to fill empty space */}
        <div style={{
          position: 'absolute',
          top: '0%',
          left: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(18, 220, 250, 0.12) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 1
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '0%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(32, 69, 114, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
          zIndex: 1
        }}></div>

        <div style={{ textAlign: 'center', marginBottom: '50px', position: 'relative', zIndex: 2 }}>
          <h2 style={{
            fontSize: '32px',
            fontWeight: '900',
            color: '#204572',
            marginBottom: '16px',
            textTransform: 'uppercase',
            letterSpacing: '2px'
          }}>Latest Updates</h2>
          <p style={{
            fontSize: '18px',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>Stay informed with our latest announcements, news, and upcoming events.</p>
        </div>

        <div className="announcements-news-container">
          {/* Announcements Panel */}
          <div className="announcement-panel">
            <div className="panel-title-wrapper">
              <div className="panel-icon-box">
                <FaBullhorn />
              </div>
              <h3>Announcements</h3>
            </div>

            <ul className="announcement-list">
              {announcements.map((item) => (
                <li
                  key={item.id}
                  className="announcement-item"
                  onClick={() => item.url && window.open(item.url, '_blank')}
                  style={{ cursor: item.url ? 'pointer' : 'default' }}
                >
                  <div className="item-meta">
                    <span className="date-badge">{item.date}</span>
                    {item.isNew && <span className="new-tag">New</span>}
                  </div>
                  <div className="item-content">
                    <span className="item-text" style={{ color: item.url ? '#204572' : 'inherit' }}>{item.text}</span>
                    <button className="item-action-btn">
                      <span>{item.url ? (item.text.toLowerCase().includes('event') ? 'Register' : 'View') : 'View'}</span>
                      <FaArrowRight fontSize="10px" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="panel-footer">
              <button
                className="check-more-btn"
                onClick={() => window.open('https://event.darecentre.in', '_blank')}
                style={{ cursor: 'pointer' }}
              >
                Check More Announcements
              </button>
            </div>
          </div>

          {/* News & Events Panel */}
          <div className="news-panel">
            <div className="panel-title-wrapper">
              <div className="panel-icon-box" style={{ background: 'linear-gradient(135deg, #0ea5e9 0%, #204572 100%)' }}>
                <FaNewspaper />
              </div>
              <h3>News & Events</h3>
            </div>

            <ul className="announcement-list">
              {newsEvents.map((item) => (
                <li
                  key={item.id}
                  className="announcement-item"
                  onClick={() => item.url && window.open(item.url, '_blank')}
                  style={{ cursor: item.url ? 'pointer' : 'default' }}
                >
                  <div className="item-meta">
                    <span className="date-badge">{item.date}</span>
                    {item.isNew && <span className="new-tag">New</span>}
                  </div>
                  <div className="item-content">
                    <span className="item-text" style={{ color: item.url ? '#204572' : 'inherit' }}>{item.text}</span>
                    <button className="item-action-btn">
                      <span>{item.url ? (item.text.toLowerCase().includes('event') ? 'Register' : 'View') : 'View'}</span>
                      <FaArrowRight fontSize="10px" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="panel-footer">
              <button
                className="check-more-btn"
                onClick={() => window.open('https://event.darecentre.in', '_blank')}
                style={{ cursor: 'pointer' }}
              >
                Check More News
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Creative Ecosystem Redesign - Sticky Scroll */}
      <section className="ecosystem-creative-section" id="divisions" style={{ padding: '10px 0', background: '#ffffff', marginTop: '-30px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{
              fontSize: '28px',
              fontWeight: '900',
              color: '#204572',
              marginBottom: '24px',
              textTransform: 'uppercase',
              letterSpacing: '2px',
              lineHeight: '1.2'
            }}>
              A Complete <br />
              <span style={{
                background: 'linear-gradient(135deg, #12DCFA 0%, #204572 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Learning Ecosystem</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#475569', maxWidth: '600px', margin: '0 auto', lineHeight: '1.8' }}>
              Explore our diverse divisions designed to foster innovation, leadership, and technical excellence.
            </p>
          </div>

          <div style={{ position: 'relative', paddingBottom: '60px' }}>
            {[
              {
                id: 'schools',
                title: 'Schools',
                subtitle: 'SPECIALIZED ACADEMIC DIVISIONS',
                description: 'Four specialized schools covering AI & Robotics, Finance, Business, and Languages. We provide a complete, future-ready learning ecosystem for students and professionals alike.',
                image: '/schools-indian.png',
                link: '/divisions'
              },
              {
                id: 'edukoot',
                title: 'Edukoot',
                subtitle: 'CO-LEARNING COMMUNITY',
                description: 'A global co-learning platform built on the Harkness method. Connect with peers, master new skills, and transform your career through collaborative educational excellence.',
                image: '/edukoot-hero.png',
                link: '/edukoot'
              },
              {
                id: 'nxtgen',
                title: 'NXTZEN Coders',
                subtitle: 'NEXT-GEN AI TRACKS',
                description: 'Cutting-edge AI development pathways. Master full-stack engineering, AI-assisted coding, and automation with industry-leading experts and modern tech stacks.',
                image: '/nxtzen-hero.png',
                link: '/nextgen'
              },
              {
                id: 'workshops',
                title: 'Workshops / VAC',
                subtitle: 'HANDS-ON BOOTCAMPS',
                description: 'Intensive practical training focusing on robotics assembly, tech trends, and rapid prototyping. Gain immediate, high-impact skills through our specialized bootcamps.',
                image: '/workshop-hero.png',
                link: '/workshop'
              },
              {
                id: 'internships',
                title: 'Internships',
                subtitle: 'INDUSTRIAL TRAINING',
                description: 'Immersive industry programs with live project experience. Build a professional portfolio and gain global career readiness through real-world corporate vertical exposure.',
                image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1600&q=80',
                link: '/internship'
              }
            ].map((item, index) => (
              <div
                key={item.id}
                className="ecosystem-sticky-wrapper"
              >
                <div className="ecosystem-card-3d ecosystem-card-inner" style={{
                  background: 'linear-gradient(to bottom, #204572 0%, #12DCFA 100%)',
                  padding: '0',
                  color: '#ffffff',
                  boxShadow: '0 25px 60px rgba(15, 23, 42, 0.4)',
                  display: 'flex',
                  overflow: 'hidden',
                  border: '1px solid rgba(255,255,255,0.1)',
                  position: 'relative',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}>


                  {/* Content Side */}
                  <div className="ecosystem-card-content" style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    position: 'relative',
                    zIndex: 2
                  }}>
                    <div style={{
                      height: '2px',
                      width: '40px',
                      backgroundColor: '#FFD700',
                      marginBottom: '16px'
                    }}></div>

                    <h3 style={{
                      fontSize: '13px',
                      fontWeight: '900',
                      textTransform: 'uppercase',
                      letterSpacing: '3px',
                      marginBottom: '10px',
                      color: '#12DCFA',
                      fontFamily: "'Arial Black', sans-serif"
                    }}>{item.subtitle}</h3>

                    <h4 className="ecosystem-card-title" style={{
                      fontWeight: '900',
                      marginBottom: '18px',
                      lineHeight: '1.1',
                      color: '#ffffff',
                      fontFamily: "'Arial Black', sans-serif",
                      textShadow: '2px 2px 0px rgba(0,0,0,0.2)'
                    }}>{item.title}</h4>

                    {item.id === 'schools' && showSchoolsInline ? (
                      <div style={{
                        display: 'grid',
                        gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
                        gap: '12px',
                        marginTop: '10px',
                        animation: 'fadeIn 0.5s ease'
                      }}>
                        {[
                          { id: 'ai-robotics', name: 'AI & Robotics', icon: <FaRobot />, color: '#dc2626' },
                          { id: 'finance', name: 'Finance', icon: <FaChartLine />, color: '#16a34a' },
                          { id: 'business', name: 'Business', icon: <FaBusinessTime />, color: '#2563eb' },
                          { id: 'languages', name: 'Languages', icon: <FaGlobe />, color: '#9333ea' }
                        ].map((school) => (
                          <Link
                            key={school.id}
                            href={`/divisions#${school.id}`}
                            style={{
                              textDecoration: 'none',
                              padding: '12px 16px',
                              backgroundColor: 'rgba(255, 255, 255, 0.1)',
                              backdropFilter: 'blur(5px)',
                              border: '1px solid rgba(255, 255, 255, 0.2)',
                              borderRadius: '12px',
                              display: 'flex',
                              alignItems: 'center',
                              gap: '12px',
                              transition: 'all 0.3s ease',
                              color: '#ffffff'
                            }}
                            className="school-inline-btn"
                          >
                            <div style={{
                              width: '32px',
                              height: '32px',
                              borderRadius: '8px',
                              backgroundColor: school.color,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '16px'
                            }}>
                              {school.icon}
                            </div>
                            <span style={{ fontSize: '13px', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{school.name}</span>
                          </Link>
                        ))}
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setShowSchoolsInline(false);
                          }}
                          style={{
                            gridColumn: isMobile ? 'auto' : 'span 2',
                            background: '#FFD700',
                            border: 'none',
                            color: '#dc2626',
                            fontSize: '11px',
                            fontWeight: '900',
                            cursor: 'pointer',
                            marginTop: '12px',
                            padding: '10px 22px',
                            borderRadius: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            width: 'fit-content',
                            boxShadow: '0 4px 0px #b78a00',
                            transition: 'all 0.3s ease'
                          }}
                          className="back-info-btn"
                        >
                          <FaArrowRight style={{ transform: 'rotate(180deg)', fontSize: '10px' }} />
                          Back to Description
                        </button>
                      </div>
                    ) : (
                      <>
                        <p style={{
                          fontSize: isMobile ? '16px' : '17px',
                          lineHeight: '1.7',
                          marginBottom: '32px',
                          opacity: 0.9,
                          color: '#e2e8f0',
                          maxWidth: '460px',
                          textAlign: 'justify'
                        }}>{item.description}</p>

                        <button
                          onClick={() => item.id === 'schools' ? setShowSchoolsInline(true) : window.location.href = item.link}
                          className="learn-more-btn"
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '14px 32px',
                            backgroundColor: '#FFD700',
                            color: '#dc2626',
                            borderRadius: '8px',
                            border: 'none',
                            cursor: 'pointer',
                            fontWeight: '900',
                            fontSize: '14px',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                            width: 'fit-content',
                            boxShadow: '0 6px 0px #b78a00',
                            margin: '10px 0',
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                          }}
                        >
                          Learn More
                          <FaArrowRight size={14} className="learn-more-arrow" />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image Side */}
                  <div style={{
                    flex: isMobile ? 'none' : 1.1,
                    position: 'relative',
                    height: isMobile ? '250px' : '100%',
                    minHeight: isMobile ? '250px' : '100%',
                    width: '100%',
                    backgroundColor: 'transparent'
                  }}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: 'cover', opacity: 0.85 }}
                    />
                    {/* Solid Dark Overlay for clean transition */}
                    <div style={{
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'rgba(32, 69, 114, 0.2)',
                      zIndex: 1
                    }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Statistics Section */}
      <section className="stats-section">
        <h2 className="stats-heading">Creating Impact Through Education</h2>
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">🎓</div>
            <div className="stat-number">15,000+</div>
            <div className="stat-label">Students Empowered</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">🏫</div>
            <div className="stat-number">50+</div>
            <div className="stat-label">Partner Institutions</div>
          </div>
          <div className="stat-card">
            <div className="stat-icon">👨‍🏫</div>
            <div className="stat-number">100+</div>
            <div className="stat-label">Expert Mentors</div>
          </div>
        </div>
      </section>



      {/* Floating Action Buttons */}

      {/* Welcome Banner Popup */}
      {
        isBannerOpen && (
          <div
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(0, 0, 0, 0.7)',
              backdropFilter: 'blur(5px)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              zIndex: 9999,
              padding: '20px'
            }}>
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '450px',
              background: 'transparent',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
            }}>
              <button
                onClick={() => setIsBannerOpen(false)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  border: 'none',
                  color: '#0f172a',
                  fontSize: '20px',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                }}
              >
                ×
              </button>
              <div style={{ width: '100%', height: 'auto', display: 'block', lineHeight: 0 }}>
                <img
                  src="/banner.gif"
                  alt="Welcome Banner"
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: '16px' }}
                />
              </div>
            </div>
          </div>
        )
      }
    </div >
  )
}
