'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import HeroSection from '../components/HeroSection'
import WhyChooseUs3D from '../components/WhyChooseUs3D'

export default function AboutPage() {

  const [activeSection, setActiveSection] = useState('mission')
  const [isMobile, setIsMobile] = useState(false)

  // Animation Observer Logic
  useEffect(() => {
    const observerOptions = {
      threshold: 0.15,
      rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)

    // Auto-slide effect for hero slider
    const slideInterval = setInterval(() => {
      setAboutHeroSlide(prev => (prev + 1) % aboutSlides.length)
    }, 5000)

    return () => {
      window.removeEventListener('resize', checkMobile)
      clearInterval(slideInterval)
    }
  }, [])

  const handleLocationClick = () => {
    window.open('https://www.google.com/maps', '_blank')
  }

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const whyChooseUs = [
    {
      text: 'Expert Mentorship from Industry Professionals',
      description: 'Learn from experts bringing real-world insights and career guidance.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      )
    },
    {
      text: 'Practical, Hands-on Learning in AI & Robotics',
      description: 'Build robots and train AI models in our state-of-the-art labs. Move beyond theory.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22 9V7h-2V5c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v2H2v2h2v2H2v2h2v2c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-2h2v-2h-2V9h2zm-4 10H6V5h12v14zM7.5 11.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5zM16 17H8v-2h8v2zm-1-5.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5.67-1.5 1.5-1.5 1.5.67 1.5 1.5z" />
        </svg>
      )
    },
    {
      text: 'ISO 9001:2015 Certified Standardized Curriculum',
      description: 'Study under a globally recognized framework ensuring consistent, high-quality education.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      )
    },
    {
      text: 'Holistic Growth: Tech, Business & Languages',
      description: 'Combine tech expertise with business acumen and languages for complete career readiness.',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
      )
    }
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }


  const [aboutHeroSlide, setAboutHeroSlide] = useState(0)

  // Frameworks data removed but array kept if needed or can be removed too. 
  // Since we are removing the section, we don't strictly need the array, 
  // but keeping it doesn't hurt. I will remove the section JSX.

  const aboutSlides = [
    {
      title: 'Real Projects. Real Impact.',
      subtitle: 'Hands-on labs in AI, Robotics, Business and Finance',
      image: 'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1920&q=80',
      alt: 'Students working on robotics project',
      description:
        'Learners build real projects in AI, Robotics, Finance and Business, guided by mentors inside our labs.'
    },
    {
      title: 'Modern Classrooms',
      subtitle: 'Immersive, tech-enabled learning experiences',
      image: 'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?w=1920&q=80',
      alt: 'Modern classroom with technology',
      description:
        'Smart classrooms, STEM/STEAM kits and discussion circles that keep every learner actively involved.'
    },
    {
      title: 'Mentors From Industry',
      subtitle: 'Guidance from experts to shape your career path',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80',
      alt: 'Mentor guiding students',
      description:
        'Experienced mentors help learners connect concepts with real-world careers and opportunities.'
    }
  ]
  const learnerBenefits = [
    { title: 'Future-ready learning', desc: 'AI, robotics, languages and skills designed for 21st-century careers.' },
    { title: 'Structured programs', desc: 'ISO 9001:2015 aligned planning, clear milestones and measurable outcomes.' },
    { title: 'Guided mentorship', desc: 'Classroom support, workshops and personalised guidance from trained tutors.' },
    { title: 'Real-world exposure', desc: 'Projects, workshops, internships and events that move beyond textbooks.' },
    { title: 'Access from any city', desc: 'Tier-2 and tier-3 learners get a gateway to premier-quality education.' }
  ]

  const ecosystemFeatures = [
    { title: 'Edukoot community', desc: 'Harkness-style peer learning circles with focus, feedback and improvement.' },
    { title: 'NxtGen Coders track', desc: 'AI-assisted coding, automation and deployment for modern tech roles.' },
    { title: 'Trusted certificates', desc: 'Online verification to validate learner achievements instantly.' },
    { title: 'Event & certificate engine', desc: 'EMS-driven events with automated certificate generation.' },
    { title: 'Master/Admin/Tutor panels', desc: 'Controlled publishing workflow so nothing goes live without approval.' }
  ]


  return (
    <div className="about-page-wrapper" style={{ overflowX: 'hidden' }}>
      <style jsx global>{`
        /* Custom Animation Classes */
        .animate-on-scroll {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.2, 0.8, 0.2, 1), transform 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
          will-change: opacity, transform;
        }

        .animate-on-scroll.in-view {
          opacity: 1;
          transform: translateY(0);
        }

        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }

        .scale-up-anim {
          transition: transform 0.4s ease;
        }
        .scale-up-anim:hover {
          transform: scale(1.03);
        }

        /* Unique Framework Card Styles */
        .framework-unique-card {
          position: relative;
          height: 320px;
          perspective: 1000px;
          cursor: pointer;
        }
        .framework-unique-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
        }
        .framework-unique-card:hover .framework-unique-inner {
          transform: rotateY(180deg);
        }
        .framework-front, .framework-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 15px 35px rgba(0,0,0,0.2);
        }
        .framework-front {
          background-size: cover;
          background-position: center;
        }
        .framework-overlay {
           position: absolute;
           top: 0; left: 0; right: 0; bottom: 0;
           background: linear-gradient(to top, #0a1f3d 0%, rgba(10,31,61,0.6) 50%, rgba(10,31,61,0.3) 100%);
           display: flex;
           flex-direction: column;
           justify-content: flex-end;
           padding: 24px;
        }
        .framework-back {
          background: #ffffff;
          color: #0a1f3d;
          transform: rotateY(180deg);
          padding: 30px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          border: 1px solid #e2e8f0;
        }
        
        /* Floating Shapes for Backgrounds */
        .bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.1;
          z-index: 0;
        }
        .bg-shape-1 { background: var(--primary-blue); width: 300px; height: 300px; top: 10%; left: -50px; }
        .bg-shape-2 { background: var(--secondary-blue); width: 400px; height: 400px; bottom: 10%; right: -100px; }

        /* Creative Sections Styles */
        .mv-creative-container, .impact-creative-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .mission-vision-creative-section {
          position: relative;
          z-index: 1;
        }

        .mv-cards-container {
          display: grid;
          gap: 40px;
          margin-top: 40px;
        }

        .mv-creative-card {
          padding: 40px;
          border-radius: 24px;
          background: #ffffff;
          box-shadow: 0 20px 40px rgba(0,0,0,0.05);
          transition: all 0.3s ease;
        }

        .mission-style {
          border: 1px solid rgba(18, 220, 250, 0.2);
        }

        .vision-style {
          border: 1px solid rgba(220, 38, 38, 0.2);
        }

        .impact-creative-section {
          background: #ffffff;
          padding: 80px 0;
        }

        .persona-grid {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .persona-card {
          display: flex;
          gap: 20px;
          padding: 24px;
          background: #f8fafc;
          border-radius: 16px;
          border-left: 4px solid #204572;
          transition: all 0.3s ease;
        }

        /* Video Showcase Specific Styles */
        .video-showcase-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 40px;
          padding: 0 32px;
        }

        .video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
        }

        .video-iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        @media (max-width: 768px) {
          .video-showcase-container {
            padding: 0 20px !important;
            gap: 30px !important;
          }

          .video-content-left {
            min-width: 100% !important;
            padding: 0 !important;
          }

          .video-player-right {
            min-width: 100% !important;
            padding: 0 !important;
          }

          .video-section-title {
            font-size: 28px !important;
          }

          .impact-creative-container {
            padding: 0 20px !important;
            gap: 40px !important;
          }

          .impact-column {
            padding: 30px 20px !important;
          }

          .impact-title {
            font-size: 26px !important;
          }

          .manifesto-heading {
            font-size: 20px !important;
          }

          .manifesto-text {
            font-size: 15px !important;
          }
        }
      `}</style>

      {/* Top Header - Blue Bar */}
      {/* Top Header and Main Navigation removed - now handled by layout */}

      <HeroSection
        tagline="INNOVATING MINDS • TRANSFORMING LIVES"
        title="We Build The <span style='color: #dc2626'>Future</span> Of Education"
        description="Durkkas Academy of Research and Education (DARE) is a pioneering institution dedicated to democratizing world-class education. We bridge the gap between academic theory and industry reality, empowering learners with the specialized skills, confidence, and global exposure needed to lead in an ever-evolving digital landscape. Join our mission to transform curiosity into capability and build a future-ready career, no matter where you are."
        backgroundType="gradient"
        customMedia={
          <div style={{ transform: 'scale(0.85)', transformOrigin: 'center center' }}>
            <WhyChooseUs3D items={whyChooseUs} />
          </div>
        }
      />

      {/* Impact Strategy Section - REMOVED */}

      {/* Professional Video Showcase Section - REVAMPED */}
      <section className="professional-video-section" style={{ padding: '40px 0', background: '#ffffff' }}>
        <div className="video-showcase-container" style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '40px' }}>

          <div className="video-content-left" style={{ flex: '1', minWidth: '350px', padding: '0 20px' }}>
            <div className="video-section-header" style={{ marginBottom: '30px' }}>
              <span style={{
                color: '#DC2626', fontWeight: 'bold', fontSize: '14px', letterSpacing: '2px', textTransform: 'uppercase', display: 'block', marginBottom: '10px'
              }}>Experience The Difference</span>
              <h2 className="video-section-title" style={{ fontSize: '36px', fontWeight: '900', color: '#0a1f3d', lineHeight: '1.2' }}>Where Innovation <br />Meets Education</h2>
              <div style={{ width: '80px', height: '6px', background: '#12DCFA', marginTop: '20px', borderRadius: '3px' }}></div>
            </div>

            <div className="video-features" style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
              {[
                { title: "State-of-the-Art Facilities", text: "Modern robotics labs, AI workstations, and collaborative spaces." },
                { title: "Expert Mentorship", text: "Learn from industry professionals and academic experts." },
                { title: "Project-Based Learning", text: "Engage in real-world projects and competitions." }
              ].map((feature, i) => (
                <div key={i} className={`video-feature-item delay-${(i + 1) * 100} animate-on-scroll`} style={{ display: 'flex', gap: '15px' }}>
                  <div className="feature-marker" style={{
                    minWidth: '12px', height: '12px', background: '#DC2626', borderRadius: '50%', marginTop: '8px'
                  }}></div>
                  <div className="feature-content">
                    <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#204572', marginBottom: '6px' }}>{feature.title}</h4>
                    <p style={{ fontSize: '15px', color: '#64748b', margin: 0 }}>{feature.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="video-player-right animate-on-scroll delay-200" style={{ flex: '1.2', minWidth: '400px', padding: '20px' }}>
            <div className="video-container" style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 30px 60px rgba(0,0,0,0.15)' }}>
              {/* Decorative border */}
              <div style={{ position: 'absolute', inset: '0', border: '8px solid rgba(255,255,255,0.2)', pointerEvents: 'none', zIndex: 10, borderRadius: '24px' }}></div>

              <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.youtube.com/embed/JPXHYOauey8?autoplay=0&mute=0&loop=1&playlist=JPXHYOauey8"
                  title="DARE Centre - Robotics & AI Summer Boot Camp 2023"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="video-iframe"
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                ></iframe>
              </div>
            </div>

            <div className="video-caption" style={{
              marginTop: '24px', padding: '24px', background: '#F8F9FA', borderRadius: '16px', borderLeft: '4px solid #0EA5C0'
            }}>
              <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#0a1f3d', marginBottom: '8px' }}>Robotics & AI Summer Boot Camp</h4>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.6', margin: 0 }}>
                Watch our students dive into the world of AI/ML. Our boot camps combine theory with intense practical application.
              </p>
            </div>
          </div>
        </div>
      </section >

      {/* Mission & Vision - CREATIVE CARDS - HERO BACKGROUND */}
      <section className="mission-vision-creative-section" id="mission" style={{
        padding: '40px 0',
        background: 'linear-gradient(to bottom, #ebfcfc, #ffffff)',
        color: '#0a1f3d',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', opacity: 0.6, background: 'radial-gradient(circle at 70% 30%, rgba(18, 220, 250, 0.15) 0%, transparent 60%)' }}></div>

        <div className="mv-creative-container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px', margin: '0 auto', padding: '0 32px' }}>

          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <h2 style={{ fontSize: '40px', fontWeight: '900', marginBottom: '16px', color: '#0a1f3d' }}>Driven By Purpose</h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>Our guiding principles that shape every decision we make.</p>
          </div>

          <div className="mv-cards-container" style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '40px' }}>
            {/* Mission Card */}
            <div className="mv-creative-card mission-style scale-up-anim" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 100%)',
              borderRadius: '24px',
              padding: '40px',
              border: '2px solid rgba(18, 220, 250, 0.3)',
              boxShadow: '0 20px 60px rgba(18, 220, 250, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(18, 220, 250, 0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #12DCFA, #0EA5C0)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>🚀</div>
                <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #12DCFA, #0EA5C0)', marginBottom: '20px', borderRadius: '2px' }}></div>
                <h3 className="mv-card-title" style={{ fontSize: '28px', fontWeight: '900', marginBottom: '16px', color: '#0a1f3d', letterSpacing: '-0.5px' }}>Our Mission</h3>
                <p className="mv-card-text" style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                  To transform curiosity into capability by combining world-class education, advanced technology,
                  and hands-on innovation. We build a unified platform for communication, financial literacy,
                  and business readiness.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['Innovation', 'Excellence', 'Impact'].map((tag, i) => (
                    <span key={i} style={{
                      padding: '6px 14px',
                      background: 'rgba(18, 220, 250, 0.1)',
                      color: '#0EA5C0',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                      border: '1px solid rgba(18, 220, 250, 0.2)'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="mv-creative-card vision-style scale-up-anim" style={{
              background: 'linear-gradient(135deg, #ffffff 0%, #fef2f2 100%)',
              borderRadius: '24px',
              padding: '40px',
              border: '2px solid rgba(220, 38, 38, 0.3)',
              boxShadow: '0 20px 60px rgba(220, 38, 38, 0.15)',
              position: 'relative',
              overflow: 'hidden'
            }}>
              <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '150px', height: '150px', background: 'rgba(220, 38, 38, 0.1)', borderRadius: '50%', filter: 'blur(40px)' }}></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontSize: '48px',
                  marginBottom: '20px',
                  background: 'linear-gradient(135deg, #DC2626, #991b1b)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  display: 'inline-block'
                }}>👁️</div>
                <div style={{ width: '60px', height: '4px', background: 'linear-gradient(90deg, #DC2626, #991b1b)', marginBottom: '20px', borderRadius: '2px' }}></div>
                <h3 className="mv-card-title" style={{ fontSize: '28px', fontWeight: '900', marginBottom: '16px', color: '#0a1f3d', letterSpacing: '-0.5px' }}>Our Vision</h3>
                <p className="mv-card-text" style={{ fontSize: '16px', lineHeight: '1.8', color: '#475569', marginBottom: '24px' }}>
                  To become the mostly trusted learning ecosystem for emerging cities.
                  We enable learners to compete globally through accessible, structured,
                  and innovation-driven education that knows no boundaries.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {['Global', 'Accessible', 'Trusted'].map((tag, i) => (
                    <span key={i} style={{
                      padding: '6px 14px',
                      background: 'rgba(220, 38, 38, 0.1)',
                      color: '#DC2626',
                      borderRadius: '20px',
                      fontSize: '12px',
                      fontWeight: '700',
                      border: '1px solid rgba(220, 38, 38, 0.2)'
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frameworks Section Removed */}

      {/* Impact & Audience Section - MODERN SPLIT */}
      <section className="impact-creative-section" style={{ background: '#ffffff', padding: '80px 0' }}>
        <div className="impact-creative-container" style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '60px', padding: '0 32px' }}>

          {/* Column 1: Who We Empower */}
          <div className="impact-column learners-column">
            <div className="impact-header-left" style={{ marginBottom: '40px' }}>
              <h2 className="impact-title" style={{ fontSize: '32px', fontWeight: '900', color: '#0a1f3d' }}>Who We <span className="highlight-text-blue" style={{ color: '#0EA5C0' }}>Empower</span></h2>
              <div style={{ width: '60px', height: '4px', background: '#0EA5C0', marginTop: '10px' }}></div>
            </div>

            <div className="persona-grid" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { num: "01", title: "School Students (K-12)", text: "We build strong foundations in logic, coding, and creative tech through hands-on robotics and AI projects specially designed for young minds." },
                { num: "02", title: "University Learners", text: "We bridge the gap between academic theory and industry reality by providing real-world internships, capstone project guidance, and advanced workshops." },
                { num: "03", title: "Working Professionals", text: "We help you upskill for the next big leap in your career with executive programs in Business, Finance, and Leadership designed for busy schedules." }
              ].map((item, idx) => (
                <div key={idx} className="persona-card scale-up-anim" style={{
                  display: 'flex', gap: '20px', padding: '24px', background: '#F8FAFC', borderRadius: '16px', borderLeft: '4px solid #204572'
                }}>
                  <div className="persona-number" style={{ fontSize: '24px', fontWeight: '900', color: 'rgba(32, 69, 114, 0.2)' }}>{item.num}</div>
                  <div className="persona-content">
                    <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#204572', marginBottom: '8px' }}>{item.title}</h3>
                    <p style={{ fontSize: '14px', color: '#64748b', lineHeight: '1.6', margin: 0 }}>{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Our Promise */}
          <div className="impact-column commitment-column" style={{ background: '#fef2f2', padding: '40px', borderRadius: '24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', background: '#DC2626', opacity: '0.05', borderRadius: '50%' }}></div>

            <div className="impact-header-left" style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
              <h2 className="impact-title" style={{ fontSize: '32px', fontWeight: '900', color: '#0a1f3d' }}>Our <span className="highlight-text-red" style={{ color: '#DC2626' }}>Promise</span></h2>
              <div style={{ width: '60px', height: '4px', background: '#DC2626', marginTop: '10px' }}></div>
            </div>

            <div className="commitment-manifesto" style={{ position: 'relative', zIndex: 1 }}>
              <h3 className="manifesto-heading" style={{ fontSize: '24px', fontStyle: 'italic', color: '#7f1d1d', marginBottom: '24px', fontFamily: 'serif' }}>"Commitment to Excellence"</h3>
              <p className="manifesto-text" style={{ fontSize: '16px', lineHeight: '1.8', color: '#7f1d1d', marginBottom: '40px' }}>
                To make advanced learning accessible, structured, and capable of transforming curiosity into real-world capability. We pledge to treat every learner's ambition with the seriousness it deserves.
              </p>

              <div className="manifesto-points" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '16px' }}>
                {['Global Standards', 'Ethical Innovation', 'Measurable Growth', 'Community First', 'Lifelong Support'].map((point, i) => (
                  <div key={i} className="m-point" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '20px', height: '2px', background: '#DC2626' }}></div>
                    <span style={{ fontWeight: '700', color: '#991b1b', textTransform: 'uppercase', fontSize: '14px', letterSpacing: '1px' }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Refined FAQ Accordion Section - LIGHT FOOTER STYLE */}
      <section className="key-insights-section" style={{ backgroundColor: '#F0F4F8', padding: '40px 0', color: '#0a1f3d' }}>
        <div className="key-insights-container animate-on-scroll" style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <div className="section-header-centered" style={{ textAlign: 'center', marginBottom: '40px' }}>
            <span style={{
              color: '#0EA5C0', fontWeight: 'bold', fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase'
            }}>Discover More</span>
            <h2 className="section-title-centered about-faq-title" style={{ fontWeight: '900', color: '#0a1f3d', marginTop: '16px', fontSize: '32px' }}>
              Frequently Asked <span style={{ color: '#DC2626' }}>Questions</span>
            </h2>
          </div>

          <div className="accordion-container">
            {[
              {
                id: 'goal',
                q: 'What is the goal of the DARE Centre for students in third-tier cities?',
                a: 'The DARE Centre aims to offer top-notch educational and skill development opportunities that are usually only available in premier cities. This program closes the gap and gives students in small towns the tools they need to successfully compete globally.'
              },
              {
                id: 'gamechanger',
                q: 'How is DARE Centre considered a game-changer in education?',
                a: 'The DARE Centre is regarded as a game-changer because it removes obstacles to accessibility, offers top-notch instruction, and uses contemporary teaching strategies that equip students for possibilities throughout the world and real-world issues.'
              },
              {
                id: 'groundbreaking',
                q: 'Why does the DURKKAS Group view DARE Centre as ground-breaking?',
                a: 'The DARE Centre is ground-breaking because it uses Harkness method teaching techniques, makes the best education available in areas of need, and makes use of the DURKKAS Group’s resources to offer unparalleled support and educational possibilities.'
              }
            ].map((item) => (
              <div
                key={item.id}
                onClick={() => setActiveSection(activeSection === item.id ? '' : item.id)}
                style={{
                  backgroundColor: '#ffffff',
                  borderRadius: '16px',
                  marginBottom: '16px',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  border: `1px solid ${activeSection === item.id ? '#DC2626' : '#e2e8f0'}`,
                  boxShadow: '0 4px 6px rgba(0,0,0,0.02)',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  padding: '24px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  background: activeSection === item.id ? 'rgba(220, 38, 38, 0.05)' : 'transparent'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '700',
                    color: '#0a1f3d',
                    margin: 0,
                    paddingRight: '20px',
                    lineHeight: '1.4'
                  }}>
                    {item.q}
                  </h3>
                  <span style={{
                    fontSize: '24px',
                    fontWeight: '300',
                    color: activeSection === item.id ? '#DC2626' : '#94a3b8',
                    transform: activeSection === item.id ? 'rotate(45deg)' : 'rotate(0)',
                    transition: 'transform 0.3s ease'
                  }}>+</span>
                </div>
                {activeSection === item.id && (
                  <div style={{
                    padding: '0 24px 24px',
                    color: '#475569',
                    fontSize: '16px',
                    lineHeight: '1.8',
                    animation: 'fadeIn 0.4s ease'
                  }}>
                    {item.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div >
  )
}
