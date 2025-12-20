'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import HeroSection from '../components/HeroSection'

// Creative Visual Component for Gallery Hero - 3D Floating Gallery Cube
const GalleryHeroVisual = () => {
    return (
        <div className="hero-visual-wrapper">
            <div className="cube-scene">
                <div className="cube">
                    {[
                        '/gallery1.jpeg',
                        '/gallery8.JPG',
                        '/gallery2.JPG',
                        '/gallery7.JPG',
                        '/gallery5.JPG',
                        '/gallery9.JPG'
                    ].map((src, i) => (
                        <div key={i} className={`cube-face face-${i}`}>
                            <div className="face-inner">
                                <Image
                                    src={src}
                                    alt={`Gallery ${i}`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="face-img"
                                    unoptimized
                                />
                                <div className="face-overlay">
                                    <div className="face-border"></div>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="cube-glow"></div>
                </div>

                {/* Orbiting Particles */}
                <div className="orbit-ring ring-1"><div className="orb-dot"></div></div>
                <div className="orbit-ring ring-2"><div className="orb-dot"></div></div>

                <div className="floor-shadow"></div>
            </div>

            <style jsx>{`
                .hero-visual-wrapper {
                    position: relative;
                    width: 100%;
                    height: 500px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    perspective: 1000px;
                    overflow: hidden;
                }

                .cube-scene {
                    position: relative;
                    width: 260px;
                    height: 260px;
                    transform-style: preserve-3d;
                    animation: float-cube 6s ease-in-out infinite;
                }

                .cube {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    transform-style: preserve-3d;
                    animation: rotate-cube 20s linear infinite;
                }

                .cube-face {
                    position: absolute;
                    width: 260px;
                    height: 260px;
                    background: #fff;
                    border: 4px solid #fff;
                    box-shadow: 0 0 15px rgba(0,0,0,0.1);
                    backface-visibility: hidden; /* Actually we want to see them */
                    backface-visibility: visible;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transform-style: preserve-3d;
                }

                .face-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                    background: #f1f5f9;
                }

                .face-0 { transform: rotateY(0deg) translateZ(130px); }
                .face-1 { transform: rotateY(90deg) translateZ(130px); }
                .face-2 { transform: rotateY(180deg) translateZ(130px); }
                .face-3 { transform: rotateY(-90deg) translateZ(130px); }
                .face-4 { transform: rotateX(90deg) translateZ(130px); }
                .face-5 { transform: rotateX(-90deg) translateZ(130px); }

                .face-border {
                    position: absolute;
                    inset: 10px;
                    border: 1px solid rgba(255,255,255,0.5);
                    box-shadow: inset 0 0 20px rgba(0,0,0,0.2);
                }

                .cube-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100px;
                    height: 100px;
                    background: radial-gradient(circle, rgba(18, 220, 250, 0.8) 0%, transparent 70%);
                    filter: blur(20px);
                    box-shadow: 0 0 40px rgba(18, 220, 250, 0.6);
                }

                .floor-shadow {
                    position: absolute;
                    bottom: -100px;
                    left: 50%;
                    transform: translateX(-50%) rotateX(90deg);
                    width: 300px;
                    height: 300px;
                    background: radial-gradient(circle, rgba(0,0,0,0.2) 0%, transparent 70%);
                    filter: blur(15px);
                    animation: shadow-pulse 6s ease-in-out infinite;
                }

                .orbit-ring {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    border: 1px solid rgba(18, 220, 250, 0.2);
                    border-radius: 50%;
                    transform-style: preserve-3d;
                }

                .ring-1 {
                    width: 400px;
                    height: 400px;
                    margin-left: -200px;
                    margin-top: -200px;
                    animation: spin-ring-1 10s linear infinite;
                }

                .ring-2 {
                    width: 340px;
                    height: 340px;
                    margin-left: -170px;
                    margin-top: -170px;
                    border-color: rgba(220, 38, 38, 0.15);
                    animation: spin-ring-2 14s linear infinite;
                }

                .orb-dot {
                    position: absolute;
                    top: -4px;
                    left: 50%;
                    width: 8px;
                    height: 8px;
                    background: #fff;
                    border-radius: 50%;
                    box-shadow: 0 0 10px #fff;
                }

                @keyframes rotate-cube {
                    0% { transform: rotateX(0deg) rotateY(0deg); }
                    100% { transform: rotateX(360deg) rotateY(360deg); }
                }

                @keyframes float-cube {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-30px); }
                }

                @keyframes shadow-pulse {
                    0%, 100% { transform: translateX(-50%) rotateX(90deg) scale(1); opacity: 0.2; }
                    50% { transform: translateX(-50%) rotateX(90deg) scale(0.8); opacity: 0.1; }
                }

                @keyframes spin-ring-1 {
                    0% { transform: rotateX(70deg) rotateY(-10deg) rotateZ(0deg); }
                    100% { transform: rotateX(70deg) rotateY(-10deg) rotateZ(360deg); }
                }

                @keyframes spin-ring-2 {
                    0% { transform: rotateX(-20deg) rotateY(20deg) rotateZ(0deg); }
                    100% { transform: rotateX(-20deg) rotateY(20deg) rotateZ(360deg); }
                }

                @media (max-width: 768px) {
                    .hero-visual-wrapper { height: 400px; }
                    .cube-scene { width: 200px; height: 200px; }
                    .cube-face { width: 200px; height: 200px; }
                    .face-0 { transform: rotateY(0deg) translateZ(100px); }
                    .face-1 { transform: rotateY(90deg) translateZ(100px); }
                    .face-2 { transform: rotateY(180deg) translateZ(100px); }
                    .face-3 { transform: rotateY(-90deg) translateZ(100px); }
                    .face-4 { transform: rotateX(90deg) translateZ(100px); }
                    .face-5 { transform: rotateX(-90deg) translateZ(100px); }
                    .ring-1 { width: 300px; height: 300px; margin-left: -150px; margin-top: -150px; }
                    .ring-2 { width: 260px; height: 260px; margin-left: -130px; margin-top: -130px; }
                }
            `}</style>
        </div>
    )
}

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
    const [filter, setFilter] = useState<string>('all')
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // Simulate loading
        setTimeout(() => setIsLoading(false), 500)
    }, [])
    const [currentEventSlide, setCurrentEventSlide] = useState(0)
    const [itemsPerSlide, setItemsPerSlide] = useState(3)
    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerSlide(1)
                setIsMobile(true)
            } else if (window.innerWidth < 1024) {
                setItemsPerSlide(2)
                setIsMobile(false)
            } else {
                setItemsPerSlide(3)
                setIsMobile(false)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const pastEvents = [
        { src: '/front page.jpg', title: 'Brochure Front' },
        { src: '/final backside.jpg', title: 'Brochure Back' },
        { src: '/online competitions 2024.jpg', title: 'Online Competitions 2024' },
        { src: '/robotics fast track course- 2024.jpg', title: 'Robotics Fast Track 2024' },
        { src: '/robotics summer camp-2024.jpg', title: 'Summer Camp 2024' },
        { src: '/Robotics winter boot camp.jpg', title: 'Winter Boot Camp' },
    ]

    // Gallery images from public folder
    const galleryImages = [
        { id: 1, src: '/gallery1.jpeg', category: 'projects', title: 'Workshop Session' },
        { id: 2, src: '/gallery2.JPG', category: 'projects', title: 'Learning Environment' },
        { id: 3, src: '/gallery3.jpeg', category: 'projects', title: 'Student Activity' },
        { id: 4, src: '/gallery4.jpeg', category: 'projects', title: 'Activity Showcase' },
        { id: 5, src: '/gallery5.JPG', category: 'projects', title: 'Interactive Session' },
        { id: 6, src: '/gallery6.JPG', category: 'projects', title: 'Team Collaboration' },
        { id: 7, src: '/gallery7.JPG', category: 'projects', title: 'Hands-on Training' },
        { id: 8, src: '/gallery8.JPG', category: 'projects', title: 'Innovation Lab' },
        { id: 9, src: '/gallery9.JPG', category: 'projects', title: 'Group Discussion' },
        { id: 10, src: '/gallery10.JPG', category: 'projects', title: 'Learning Session' },
        { id: 11, src: '/IMG_2099.JPG', category: 'projects', title: 'Student Engagement' },
        { id: 12, src: '/IMG_2108.JPG', category: 'projects', title: 'Practical Learning' },
        { id: 13, src: '/IMG_2109.JPG', category: 'projects', title: 'Activity Development' },
        { id: 14, src: '/IMG_2110.JPG', category: 'projects', title: 'Workshop Activity' },
        { id: 15, src: '/IMG_2111.JPG', category: 'projects', title: 'Classroom Session' },
        { id: 16, src: '/IMG_2114.JPG', category: 'projects', title: 'Technical Training' },
        { id: 17, src: '/IMG_2120.JPG', category: 'projects', title: 'Event Highlights' },
        { id: 18, src: '/IMG_2121.JPG', category: 'projects', title: 'Study Session' },
        { id: 19, src: '/IMG_2122.JPG', category: 'projects', title: 'Innovation Workshop' },
        { id: 20, src: '/IMG_2128.JPG', category: 'projects', title: 'Team Building' },
        { id: 21, src: '/IMG_2129.JPG', category: 'projects', title: 'Interactive Class' },
        { id: 22, src: '/IMG_2130.JPG', category: 'projects', title: 'Activity Presentation' },
        { id: 23, src: '/edukoot (1).jpg', category: 'edukoot', title: 'Edukoot Session' },
        { id: 24, src: '/edukoot (2).jpg', category: 'edukoot', title: 'Community Learning' },
        { id: 25, src: '/edukoot (3).jpg', category: 'edukoot', title: 'Collaborative Study' },
        // New Workshop Images
        { id: 26, src: '/workshop (1).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 27, src: '/workshop (2).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 28, src: '/workshop (3).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 29, src: '/workshop (4).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 30, src: '/workshop(1).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 31, src: '/workshop(2).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 32, src: '/workshop(3).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 33, src: '/workshop(4).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 34, src: '/workshop(5).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 35, src: '/workshop(6).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 36, src: '/workshop(7).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 37, src: '/workshop(8).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 38, src: '/workshop(9).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 39, src: '/workshop(10).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 40, src: '/workshop(11).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 41, src: '/workshop(12).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 42, src: '/workshop(13).jpg', category: 'workshop', title: 'AI Workshop' },
        { id: 43, src: '/edukoot (1).jpg', category: 'edukoot', title: 'Edukoot Session' },
        { id: 44, src: '/edukoot (2).jpg', category: 'edukoot', title: 'Community Learning' },
        { id: 45, src: '/edukoot (3).jpg', category: 'edukoot', title: 'Collaborative Study' },
        { id: 46, src: '/edukoot.png', category: 'edukoot', title: 'Edukoot Logo/Banner' },
        { id: 47, src: '/edukoot(4).jpg', category: 'edukoot', title: 'Interactive Learning' },
        { id: 48, src: '/edukoot(5).jpg', category: 'edukoot', title: 'Group Session' },
        // Past Events Images
        { id: 101, src: '/front page.jpg', category: 'past-events', title: 'Brochure Front' },
        { id: 102, src: '/final backside.jpg', category: 'past-events', title: 'Brochure Back' },
        { id: 103, src: '/online competitions 2024.jpg', category: 'past-events', title: 'Online Competitions 2024' },
        { id: 104, src: '/robotics fast track course- 2024.jpg', category: 'past-events', title: 'Robotics Fast Track 2024' },
        { id: 105, src: '/robotics summer camp-2024.jpg', category: 'past-events', title: 'Summer Camp 2024' },
        { id: 106, src: '/Robotics winter boot camp.jpg', category: 'past-events', title: 'Winter Boot Camp' },
    ]

    const filteredImages = filter === 'all'
        ? galleryImages
        : galleryImages.filter(img => img.category === filter)

    const categories = [
        { id: 'all', label: 'All', icon: '🔍' },
        { id: 'projects', label: 'Our Activities', icon: '💡' },
        { id: 'workshop', label: 'Workshops', icon: '🤖' },
        { id: 'edukoot', label: 'Edukoot', icon: '🎓' },
        { id: 'past-events', label: 'Past Events', icon: '🕰️' },
    ]

    const openLightbox = (id: number) => {
        setSelectedImage(id)
        document.body.style.overflow = 'hidden'
    }

    const closeLightbox = () => {
        setSelectedImage(null)
        document.body.style.overflow = 'auto'
    }

    const navigateImage = (direction: 'prev' | 'next') => {
        if (selectedImage === null) return
        const currentIndex = filteredImages.findIndex(img => img.id === selectedImage)
        let newIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1

        if (newIndex >= filteredImages.length) newIndex = 0
        if (newIndex < 0) newIndex = filteredImages.length - 1

        setSelectedImage(filteredImages[newIndex].id)
    }

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (selectedImage === null) return
            if (e.key === 'Escape') closeLightbox()
            if (e.key === 'ArrowRight') navigateImage('next')
            if (e.key === 'ArrowLeft') navigateImage('prev')
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [selectedImage, filteredImages])

    return (
        <div className="gallery-page" style={{ width: '100%', overflowX: 'hidden', position: 'relative' }}>
            {/* Hero Section */}
            <HeroSection
                tagline="VISUAL JOURNEY"
                title="Our <span style='color: #dc2626'>Gallery</span>"
                description="Step into the vibrant world of DARE Centre. Our gallery captures the moments of innovation, collaboration, and student success that define our unique learning journey."
                buttonText="Explore Gallery"
                buttonAction={() => document.querySelector('.gallery-filter-section')?.scrollIntoView({ behavior: 'smooth' })}
                customMedia={<GalleryHeroVisual />}
                backgroundType="gradient"
            />

            {/* Ambient Background Elements */}
            <div className="gallery-creative-orbit" style={{ top: '20%', left: '-10%', opacity: 0.15 }}></div>
            <div className="gallery-creative-orbit" style={{ bottom: '20%', right: '-10%', opacity: 0.1 }}></div>

            {/* Past Events Section - REDESIGNED */}
            <section style={{
                padding: isMobile ? '40px 16px' : '60px 24px',
                background: 'linear-gradient(to bottom, #f8fafc 0%, #ffffff 100%)',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1400px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
                    <div style={{ textAlign: 'center', marginBottom: '50px' }}>
                        <span style={{
                            color: '#dc2626',
                            fontWeight: '800',
                            fontSize: '14px',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '12px'
                        }}>Our Recent Milestones</span>
                        <h2 style={{
                            fontSize: isMobile ? '32px' : '48px',
                            fontWeight: '900',
                            color: '#1a3d5c',
                            marginBottom: '20px',
                            textTransform: 'uppercase',
                            fontFamily: "'Arial Black', sans-serif"
                        }}>Legacy of <span style={{ color: '#dc2626' }}>Events</span></h2>
                        <div style={{ width: '100px', height: '6px', background: 'linear-gradient(to right, #dc2626, #12DCFA)', margin: '0 auto', borderRadius: '3px' }}></div>
                    </div>

                    <div style={{ position: 'relative', overflow: 'hidden' }}>
                        <div style={{
                            display: 'flex',
                            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1)',
                            transform: `translateX(-${currentEventSlide * (100 / itemsPerSlide)}%)`,
                        }}>
                            {pastEvents.map((event, index) => (
                                <div key={index} style={{
                                    flex: `0 0 ${100 / itemsPerSlide}%`,
                                    padding: '0 20px',
                                    boxSizing: 'border-box'
                                }}>
                                    <div
                                        className="gallery-glass-card"
                                        style={{
                                            borderRadius: '24px',
                                            overflow: 'hidden',
                                            transition: 'all 0.5s ease',
                                            position: 'relative',
                                            border: '1px solid rgba(18, 220, 250, 0.2)',
                                            height: '100%',
                                            display: 'flex',
                                            flexDirection: 'column'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-15px) scale(1.02)';
                                            e.currentTarget.style.boxShadow = '0 30px 60px rgba(32, 69, 114, 0.15)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'translateY(0) scale(1)';
                                            e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.07)';
                                        }}
                                    >
                                        <div style={{ position: 'relative', paddingTop: '141.4%', overflow: 'hidden' }}>
                                            <Image
                                                src={event.src}
                                                alt={event.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{
                                                    objectFit: 'cover',
                                                    transition: 'transform 0.6s ease'
                                                }}
                                                className="event-image-zoom"
                                                unoptimized
                                            />
                                            <div style={{
                                                position: 'absolute',
                                                top: '20px',
                                                left: '20px',
                                                background: 'rgba(220, 38, 38, 0.9)',
                                                color: '#fff',
                                                padding: '6px 14px',
                                                borderRadius: '20px',
                                                fontSize: '12px',
                                                fontWeight: '800',
                                                letterSpacing: '1px'
                                            }}>FEATURED</div>
                                        </div>
                                        <div style={{
                                            padding: '25px',
                                            textAlign: 'center',
                                            flexGrow: 1,
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}>
                                            <h3 style={{
                                                fontSize: '20px',
                                                fontWeight: '900',
                                                color: '#1a3d5c',
                                                margin: 0,
                                                lineHeight: '1.4'
                                            }}>{event.title}</h3>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Styled Carousel Controls */}
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '30px', marginTop: '40px' }}>
                        <button
                            onClick={() => setCurrentEventSlide(prev => Math.max(0, prev - 1))}
                            disabled={currentEventSlide === 0}
                            style={{
                                width: '54px', height: '54px', borderRadius: '50%', border: '2px solid transparent',
                                background: currentEventSlide === 0 ? '#f1f5f9' : 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                                color: currentEventSlide === 0 ? '#94a3b8' : '#fff',
                                cursor: currentEventSlide === 0 ? 'not-allowed' : 'pointer',
                                boxShadow: currentEventSlide === 0 ? 'none' : '0 10px 20px rgba(18, 220, 250, 0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                fontSize: '20px'
                            }}
                        >
                            ←
                        </button>

                        <div style={{ display: 'flex', gap: '12px' }}>
                            {Array.from({ length: Math.ceil(pastEvents.length / itemsPerSlide) }).map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setCurrentEventSlide(idx * itemsPerSlide)}
                                    style={{
                                        width: Math.floor(currentEventSlide / itemsPerSlide) === idx ? '30px' : '12px',
                                        height: '12px', borderRadius: '6px',
                                        background: Math.floor(currentEventSlide / itemsPerSlide) === idx ? '#dc2626' : '#cbd5e1',
                                        border: 'none', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                    }}
                                />
                            ))}
                        </div>

                        <button
                            onClick={() => setCurrentEventSlide(prev => Math.min(pastEvents.length - itemsPerSlide, prev + 1))}
                            disabled={currentEventSlide >= pastEvents.length - itemsPerSlide}
                            style={{
                                width: '54px', height: '54px', borderRadius: '50%', border: '2px solid transparent',
                                background: currentEventSlide >= pastEvents.length - itemsPerSlide ? '#f1f5f9' : 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                                color: currentEventSlide >= pastEvents.length - itemsPerSlide ? '#94a3b8' : '#fff',
                                cursor: currentEventSlide >= pastEvents.length - itemsPerSlide ? 'not-allowed' : 'pointer',
                                boxShadow: currentEventSlide >= pastEvents.length - itemsPerSlide ? 'none' : '0 10px 20px rgba(18, 220, 250, 0.3)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                transition: 'all 0.3s ease',
                                fontSize: '20px'
                            }}
                        >
                            →
                        </button>
                    </div>
                </div>
            </section>

            {/* Gallery Overview Section - CREATIVE SPLIT */}
            <section style={{
                padding: isMobile ? '40px 16px' : '80px 24px',
                background: '#fff',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', gap: isMobile ? '40px' : '80px', alignItems: 'center' }}>

                    {/* Visual Card Side */}
                    <div style={{ position: 'relative' }}>
                        <div style={{
                            position: 'absolute',
                            top: '-20px',
                            left: '-20px',
                            width: '100px',
                            height: '100px',
                            background: '#ffd700',
                            opacity: 0.1,
                            borderRadius: '50%',
                            zIndex: 0
                        }}></div>

                        <div className="gallery-glass-card" style={{
                            padding: isMobile ? '24px' : '40px',
                            borderRadius: '32px',
                            position: 'relative',
                            zIndex: 1,
                            border: '1px solid rgba(18, 220, 250, 0.3)'
                        }}>
                            <h2 style={{
                                fontSize: isMobile ? '28px' : '42px',
                                fontWeight: '900',
                                color: '#1a3d5c',
                                marginBottom: '24px',
                                lineHeight: '1.1'
                            }}>
                                Capturing <span style={{ color: '#12DCFA' }}>Excellence</span> <br />In Every Frame
                            </h2>
                            <p style={{
                                fontSize: isMobile ? '16px' : '18px',
                                color: '#4b5563',
                                lineHeight: '1.8',
                                marginBottom: '32px',
                                fontWeight: '500'
                            }}>
                                Our visual story is a comprehensive chronicle of the DARE Centre's legacy. This collection is more than just images; it is a catalog of ambition, perseverance, and breakthrough. Explore the fusion of technology and education.
                            </p>

                            {/* Stylized Stats Area */}
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                gap: '16px'
                            }}>
                                {[
                                    { count: `${galleryImages.length}+`, label: 'Moments Captured' },
                                    { count: '100%', label: 'Hands-on Learning' },
                                    { count: 'Active', label: 'Ecosystem' }
                                ].map((stat, i) => (
                                    <div key={i} className="gallery-stat-pill">
                                        <span style={{ fontWeight: '900', color: '#1a3d5c', fontSize: '18px', marginRight: '8px' }}>{stat.count}</span>
                                        <span style={{ fontWeight: '600', color: '#64748b', fontSize: '13px', textTransform: 'uppercase' }}>{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highlights List Side */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
                            <div style={{ width: '30px', height: '2px', background: '#dc2626' }}></div>
                            <h3 style={{ fontSize: '16px', fontWeight: '800', color: '#dc2626', textTransform: 'uppercase', letterSpacing: '2px', margin: 0 }}>Latest Showcases</h3>
                        </div>

                        <div style={{ display: 'grid', gap: '20px' }}>
                            {[
                                {
                                    title: 'AI & Machine Learning Bootcamps',
                                    date: 'Winter 2024',
                                    count: '42 Assets',
                                    category: 'workshop',
                                    icon: '🤖'
                                },
                                {
                                    title: 'Creative Engineering Expo',
                                    date: 'Fall 2024',
                                    count: '28 Assets',
                                    category: 'projects',
                                    icon: '⚙️'
                                },
                                {
                                    title: 'Global Speakers Forum',
                                    date: 'Autumn 2024',
                                    count: '15 Assets',
                                    category: 'business',
                                    icon: '🎤'
                                }
                            ].map((highlight, index) => (
                                <div key={index} style={{
                                    background: '#fff',
                                    padding: '24px',
                                    borderRadius: '20px',
                                    border: '1px solid #f1f5f9',
                                    boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
                                    cursor: 'pointer',
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '20px'
                                }}
                                    className="hover-highlight-card"
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.transform = 'translateX(10px)';
                                        e.currentTarget.style.borderColor = '#12DCFA';
                                        e.currentTarget.style.boxShadow = '0 10px 30px rgba(18, 220, 250, 0.15)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.transform = 'translateX(0)';
                                        e.currentTarget.style.borderColor = '#f1f5f9';
                                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.03)';
                                    }}
                                    onClick={() => {
                                        setFilter(highlight.category);
                                        document.querySelector('.gallery-filter-section')?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    <div style={{
                                        width: '60px',
                                        height: '60px',
                                        background: '#f8fafc',
                                        borderRadius: '16px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontSize: '24px'
                                    }}>{highlight.icon}</div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                                            <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#1e293b', margin: 0 }}>{highlight.title}</h4>
                                        </div>
                                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                                            <span style={{ fontSize: '13px', color: '#94a3b8', fontWeight: '600' }}>{highlight.date}</span>
                                            <span style={{ width: '4px', height: '4px', background: '#cbd5e1', borderRadius: '50%' }}></span>
                                            <span style={{ fontSize: '13px', color: '#12DCFA', fontWeight: '700' }}>{highlight.count}</span>
                                        </div>
                                    </div>
                                    <div style={{ fontSize: '20px', color: '#cbd5e1' }}>→</div>
                                </div>
                            ))}
                        </div>

                        <div style={{ marginTop: '40px' }}>
                            <button style={{
                                width: '100%',
                                background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                                color: '#fff',
                                padding: '18px 32px',
                                borderRadius: '16px',
                                fontSize: '18px',
                                fontWeight: '800',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                boxShadow: '0 10px 25px rgba(32, 69, 114, 0.2)',
                                textTransform: 'uppercase',
                                letterSpacing: '1px'
                            }}
                                onClick={() => document.querySelector('.gallery-filter-section')?.scrollIntoView({ behavior: 'smooth' })}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.transform = 'translateY(-3px)';
                                    e.currentTarget.style.boxShadow = '0 15px 35px rgba(32, 69, 114, 0.3)';
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.transform = 'translateY(0)';
                                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(32, 69, 114, 0.2)';
                                }}
                            >
                                Discover All Assets
                            </button>
                        </div>
                    </div>
                </div>
            </section>


            {/* Filter Section */}
            <section className="gallery-filter-section">
                <div className="gallery-filter-container">
                    <h2 className="filter-heading">Explore Our Moments</h2>
                    <div className="gallery-filters">
                        {categories.map((cat) => (
                            <button
                                key={cat.id}
                                className={`filter-btn ${filter === cat.id ? 'active' : ''}`}
                                onClick={() => setFilter(cat.id)}
                            >
                                <span className="filter-icon">{cat.icon}</span>
                                <span className="filter-label">{cat.label}</span>
                                <span className="filter-count">
                                    {cat.id === 'all' ? galleryImages.length : galleryImages.filter(img => img.category === cat.id).length}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="gallery-grid-section">
                <div className="gallery-grid-container">
                    {isLoading ? (
                        <div className="gallery-loading">
                            <div className="loading-spinner"></div>
                            <p>Loading gallery...</p>
                        </div>
                    ) : (
                        <div className={`gallery-grid ${filter === 'workshop' ? 'workshop-creative-layout' : ''}`}>
                            {filteredImages.map((image, index) => (
                                <div
                                    key={image.id}
                                    className="gallery-item"
                                    style={{ animationDelay: `${index * 0.05}s` }}
                                    onClick={() => openLightbox(image.id)}
                                >
                                    <div className="gallery-item-inner">
                                        <div className="gallery-image-wrapper">
                                            <Image
                                                src={image.src}
                                                alt={image.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{ objectFit: 'cover' }}
                                                className="gallery-image"
                                                unoptimized
                                            />
                                            <div className="gallery-overlay">
                                                <div className="gallery-overlay-content">
                                                    <div className="overlay-icon">🔍</div>
                                                    <h3 className="overlay-title">{image.title}</h3>
                                                    <span className="overlay-category">
                                                        {image.category === 'projects' ? 'Our Activities' :
                                                            image.category.charAt(0).toUpperCase() + image.category.slice(1)}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div className="gallery-lightbox" onClick={closeLightbox}>
                    <button className="lightbox-close" onClick={closeLightbox}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    </button>

                    <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); navigateImage('prev'); }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </button>

                    <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); navigateImage('next'); }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                    </button>

                    <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                        {filteredImages.find(img => img.id === selectedImage) && (
                            <>
                                <div className="lightbox-image-wrapper">
                                    <Image
                                        src={filteredImages.find(img => img.id === selectedImage)!.src}
                                        alt={filteredImages.find(img => img.id === selectedImage)!.title}
                                        fill
                                        sizes="100vw"
                                        style={{ objectFit: 'contain' }}
                                        className="lightbox-image"
                                        unoptimized
                                    />
                                </div>
                                <div className="lightbox-info">
                                    <h3>{filteredImages.find(img => img.id === selectedImage)!.title}</h3>
                                    <span className="lightbox-category">
                                        {selectedImage !== null && (() => {
                                            const img = filteredImages.find(i => i.id === selectedImage);
                                            if (!img) return '';
                                            return img.category === 'projects' ? 'Our Activities' :
                                                img.category.charAt(0).toUpperCase() + img.category.slice(1);
                                        })()}
                                    </span>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}
