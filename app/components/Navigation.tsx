'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navigation.module.css'
import {
    FaHome,
    FaInfoCircle,
    FaShapes,
    FaBook,
    FaUsers,
    FaCode,
    FaImages,
    FaPhoneAlt,
    FaChevronDown,
    FaChevronUp,
    FaGraduationCap,
    FaBriefcase,
    FaCalendarAlt,
    FaCertificate
} from 'react-icons/fa'

export default function Navigation() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [divisionsOpen, setDivisionsOpen] = useState(false)
    const [othersOpen, setOthersOpen] = useState(false)
    const [loginOpen, setLoginOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Close mobile menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setMobileMenuOpen(false)
                setLoginOpen(false)
            }
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
    }, [mobileMenuOpen])

    return (
        <div className={`${styles.navbarContainer} ${scrolled ? styles.scrolled : ''}`}>

            {/* Main Bar */}
            <nav className={styles.mainNav}>
                <div className={styles.navContainer}>
                    {/* Logo */}
                    <Link href="/" className={styles.logoLink}>
                        <Image
                            src="/dare1.png"
                            alt="Dare Centre"
                            width={160}
                            height={55}
                            className={styles.logoImage}
                            priority
                        />
                    </Link>

                    {/* Desktop Menu */}
                    <div className={styles.desktopMenu}>
                        <Link href="/" className={styles.navLink}>Home</Link>
                        <Link href="/about" className={styles.navLink}>About Us</Link>

                        <div className={styles.dropdown}>
                            <Link href="/divisions" className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                                <span>Divisions</span>
                                <FaChevronDown className={styles.dropdownArrow} />
                            </Link>
                            <div className={styles.dropdownMenu}>
                                <div className={styles.dropdownTriangle}></div>
                                <Link href="/divisions#ai-robotics" className={styles.dropdownItem}>School of AI & Robotics</Link>
                                <Link href="/divisions#finance" className={styles.dropdownItem}>School of Finance</Link>
                                <Link href="/divisions#business" className={styles.dropdownItem}>School of Business</Link>
                                <Link href="/divisions#languages" className={styles.dropdownItem}>School of Languages</Link>
                            </div>
                        </div>

                        <Link href="/courses" className={styles.navLink}>Courses</Link>

                        <Link href="/edukoot" className={styles.navLink}>Edukoot</Link>
                        <Link href="/nextgen" className={styles.navLink}>NXTZEN</Link>

                        <div className={styles.dropdown}>
                            <div className={`${styles.navLink} ${styles.dropdownTrigger}`}>
                                <span>Resources</span>
                                <FaChevronDown className={styles.dropdownArrow} />
                            </div>
                            <div className={styles.dropdownMenu}>
                                <div className={styles.dropdownTriangle}></div>
                                <Link href="/gallery" className={styles.dropdownItem}>Gallery</Link>
                                <Link href="/testimonials" className={styles.dropdownItem}>Testimonials</Link>
                                <Link href="/internship" className={styles.dropdownItem}>Internships</Link>
                                <Link href="/workshop" className={styles.dropdownItem}>Workshops</Link>
                                <a href="https://event.darecentre.in" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>Events</a>
                                <a href="https://cv.darecentre.in" target="_blank" rel="noopener noreferrer" className={styles.dropdownItem}>Verify Certificate</a>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <Link href="/contact" className={styles.navLink}>Contact</Link>

                        <Link href="/login" className={styles.ctaButton} style={{ textDecoration: 'none' }}>
                            Login
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className={`${styles.mobileToggle} ${mobileMenuOpen ? styles.open : ''}`}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className={styles.hamburger}>
                            <span className={styles.hamburgerSpan}></span>
                            <span className={styles.hamburgerSpan}></span>
                            <span className={styles.hamburgerSpan}></span>
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Backdrop */}
            <div
                className={`${styles.mobileBackdrop} ${mobileMenuOpen ? styles.open : ''}`}
                onClick={() => setMobileMenuOpen(false)}
            />

            {/* Mobile Menu Overlay */}
            <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
                <div className={styles.mobileMenuContent}>
                    <Link href="/" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                        <FaHome className={styles.mobileIcon} /> <span>Home</span>
                    </Link>

                    <Link href="/about" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                        <FaInfoCircle className={styles.mobileIcon} /> <span>About Us</span>
                    </Link>

                    <div className={styles.mobileDropdownWrapper}>
                        <div className={styles.mobileDropdownHeader} onClick={() => setDivisionsOpen(!divisionsOpen)}>
                            <FaShapes className={styles.mobileIcon} />
                            <div className={styles.flexCenter} style={{ gap: '10px' }}>
                                <span>Divisions</span>
                                {divisionsOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                            </div>
                        </div>
                        <div className={`${styles.mobileDropdownContent} ${divisionsOpen ? styles.open : ''}`}>
                            <Link href="/divisions#ai-robotics" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>AI & Robotics</Link>
                            <Link href="/divisions#finance" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Finance</Link>
                            <Link href="/divisions#business" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Business</Link>
                            <Link href="/divisions#languages" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>Languages</Link>
                        </div>
                    </div>

                    <Link href="/courses" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                        <FaBook className={styles.mobileIcon} /> <span>Courses</span>
                    </Link>

                    <Link href="/edukoot" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                        <FaUsers className={styles.mobileIcon} /> <span>Edukoot Community</span>
                    </Link>

                    <Link href="/nextgen" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                        <FaCode className={styles.mobileIcon} /> <span>NXTZEN Coders</span>
                    </Link>

                    <div className={styles.mobileDropdownWrapper}>
                        <div className={styles.mobileDropdownHeader} onClick={() => setOthersOpen(!othersOpen)}>
                            <FaGraduationCap className={styles.mobileIcon} />
                            <div className={styles.flexCenter} style={{ gap: '10px' }}>
                                <span>Resources</span>
                                {othersOpen ? <FaChevronUp size={12} /> : <FaChevronDown size={12} />}
                            </div>
                        </div>
                        <div className={`${styles.mobileDropdownContent} ${othersOpen ? styles.open : ''}`}>
                            <Link href="/gallery" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                                <FaImages className={styles.subIcon} /> Gallery
                            </Link>
                            <Link href="/testimonials" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                                <FaUsers className={styles.subIcon} /> Testimonials
                            </Link>
                            <Link href="/internship" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                                <FaBriefcase className={styles.subIcon} /> Internship
                            </Link>
                            <Link href="/workshop" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                                <FaBook className={styles.subIcon} /> Workshop
                            </Link>
                            <a href="https://event.darecentre.in" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                                <FaCalendarAlt className={styles.subIcon} /> Events
                            </a>
                            <a href="https://cv.darecentre.in" className={styles.mobileSubLink} onClick={() => setMobileMenuOpen(false)}>
                                <FaCertificate className={styles.subIcon} /> Verify Certificate
                            </a>
                        </div>
                    </div>

                    <Link href="/contact" className={styles.mobileMenuLink} onClick={() => setMobileMenuOpen(false)}>
                        <FaPhoneAlt className={styles.mobileIcon} /> <span>Contact</span>
                    </Link>

                    <div style={{ padding: '20px 0' }}>
                        <Link
                            href="/login"
                            className={styles.mobileMenuCta}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textDecoration: 'none' }}
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

