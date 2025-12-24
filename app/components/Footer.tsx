'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaYoutube,
    FaTwitter,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaEnvelope,
    FaPaperPlane,
    FaGlobe,
    FaShieldAlt
} from 'react-icons/fa'

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const [email, setEmail] = useState('')

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        setEmail('')
        alert('Thank you for subscribing!')
    }

    return (
        <footer style={{
            backgroundColor: '#0f172a',
            color: '#ffffff',
            fontFamily: 'var(--font-inter), sans-serif',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Top Border Gradient */}
            <div style={{
                height: '4px',
                background: 'linear-gradient(90deg, #12DCFA, #204572, #FFD700)',
                width: '100%'
            }}></div>

            <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '80px 24px 40px' }}>
                <div className="footer-grid">
                    {/* Column 1: Brand & Contact */}
                    <div className="footer-col">
                        <Link href="/" style={{ textDecoration: 'none', display: 'inline-block', marginBottom: '24px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <div style={{
                                    width: '45px',
                                    height: '45px',
                                    position: 'relative',
                                    flexShrink: 0,
                                    backgroundColor: '#ffffff',
                                    borderRadius: '50%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    padding: '5px'
                                }}>
                                    <Image
                                        src="/dare1.png"
                                        alt="DARE CENTRE Logo"
                                        width={35}
                                        height={35}
                                        style={{ objectFit: 'contain' }}
                                    />
                                </div>
                                <div>
                                    <h2 style={{ fontSize: '18px', fontWeight: '900', color: '#fff', lineHeight: 1.2, margin: 0 }}>DURKKAS ACADEMY OF <br />RESEARCH AND EDUCATION</h2>
                                    <span style={{ fontSize: '11px', color: '#ffffff', letterSpacing: '2px', fontWeight: '700' }}>DARE CENTRE</span>
                                </div>
                            </div>
                        </Link>

                        <p style={{ lineHeight: '1.6', marginBottom: '32px', fontSize: '15px', color: '#ffffff' }}>
                            Pioneering the future of education in emerging cities through world-class AI, Robotics, and Business intelligence training. ISO 9001:2015 Certified.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                                <FaMapMarkerAlt style={{ color: '#12DCFA', marginTop: '4px', flexShrink: 0 }} />
                                <span style={{ fontSize: '14px', textAlign: 'justify', display: 'block' }}>
                                    DURKKAS ACADEMY OF RESEARCH AND EDUCATION,<br />
                                    58/2, MDR Nagar North, SBK College Road,<br />
                                    Aruppukottai<br />
                                    Virudhunagar  626101
                                </span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <FaPhoneAlt style={{ color: '#12DCFA', flexShrink: 0 }} />
                                <span style={{ fontSize: '14px' }}>+91 78128 76787 | 04566 359495</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                <FaEnvelope style={{ color: '#12DCFA', flexShrink: 0 }} />
                                <span style={{ fontSize: '14px' }}>learn@darecentre.in</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Schools & Divisions */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Our ecosystem</h3>
                        <ul className="footer-links-list">
                            <li><Link href="/divisions#ai-robotics">School of AI & Robotics</Link></li>
                            <li><Link href="/divisions#languages">School of Languages</Link></li>
                            <li><Link href="/divisions#finance">School of Finance</Link></li>
                            <li><Link href="/divisions#business">School of Business</Link></li>
                            <li><Link href="/edukoot">Edukoot Community</Link></li>
                            <li><Link href="/nextgen">NXTZEN Coders</Link></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Links & Resources */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Quick Links</h3>
                        <ul className="footer-links-list">
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/internship">Internships</Link></li>
                            <li><Link href="/workshop">Workshops</Link></li>
                            <li><a href="https://event.darecentre.in" target="_blank" rel="noopener noreferrer">Events</a></li>
                            <li><Link href="/gallery">Gallery</Link></li>
                            <li><Link href="/testimonials">Testimonials</Link></li>
                            <li><a href="https://cv.darecentre.in" target="_blank" rel="noopener noreferrer">Verify Certificate</a></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter & Social */}
                    <div className="footer-col">
                        <h3 className="footer-heading">Stay Connected</h3>
                        <p style={{ fontSize: '14px', marginBottom: '20px', color: '#ffffff' }}>
                            Join our newsletter for the latest updates on AI workshops and tech trends.
                        </p>

                        <form onSubmit={handleSubscribe} style={{ position: 'relative', marginBottom: '32px' }}>
                            <input
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '14px 48px 14px 16px',
                                    borderRadius: '8px',
                                    border: '1px solid #334155',
                                    background: '#1e293b',
                                    color: '#fff',
                                    fontSize: '14px',
                                    outline: 'none'
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    position: 'absolute',
                                    right: '8px',
                                    top: '50%',
                                    transform: 'translateY(-50%)',
                                    background: 'none',
                                    border: 'none',
                                    color: '#12DCFA',
                                    cursor: 'pointer',
                                    padding: '8px'
                                }}
                            >
                                <FaPaperPlane />
                            </button>
                        </form>

                        <h4 style={{ fontSize: '14px', fontWeight: '700', color: '#fff', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Follow Us</h4>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            <a href="https://www.facebook.com/darecentreapk/" target="_blank" rel="noopener noreferrer" className="social-btn facebook"><FaFacebookF /></a>
                            <a href="https://www.instagram.com/darecentreapk/?hl=en" target="_blank" rel="noopener noreferrer" className="social-btn instagram"><FaInstagram /></a>
                            <a href="https://in.linkedin.com/company/durkkasacademy" target="_blank" rel="noopener noreferrer" className="social-btn linkedin"><FaLinkedinIn /></a>
                            <a href="https://www.youtube.com/@Darecentreapk" target="_blank" rel="noopener noreferrer" className="social-btn youtube"><FaYoutube /></a>
                            <a href="https://x.com/darecentreapk" target="_blank" rel="noopener noreferrer" className="social-btn twitter"><FaTwitter /></a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div style={{
                    borderTop: '1px solid #1e293b',
                    paddingTop: '32px',
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '24px'
                }}>
                    <div style={{ fontSize: '14px', color: '#ffffff', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div>
                            © {currentYear} DURKKAS ACADEMY OF RESEARCH AND EDUCATION. All rights reserved. A <span style={{ color: '#fff' }}>DURKKAS Group</span> Initiative.
                        </div>
                        <div style={{ display: 'flex', gap: '16px', fontSize: '13px' }}>
                            <Link href="/privacy-policy" style={{ color: '#ffffff', textDecoration: 'none' }}>Privacy Policy</Link>
                            <Link href="/terms-and-conditions" style={{ color: '#ffffff', textDecoration: 'none' }}>Terms & Conditions</Link>
                            <Link href="/cookie" style={{ color: '#ffffff', textDecoration: 'none' }}>Cookie Policy</Link>
                        </div>
                    </div>

                    <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontSize: '13px' }}>
                            <FaGlobe />
                            <span>English (Global)</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontSize: '13px' }}>
                            <FaShieldAlt />
                            <span>Secure & ISO Certified</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .footer-grid {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    gap: 48px;
                    margin-bottom: 64px;
                }
                .footer-heading {
                    font-size: 16px;
                    font-weight: 800;
                    color: #fff;
                    margin-bottom: 24px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .footer-links-list {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    display: flex;
                    flex-direction: column;
                    gap: 12px;
                }
                .footer-links-list li :global(a) {
                    color: #ffffff !important;
                    text-decoration: none;
                    font-size: 14px;
                    transition: all 0.2s;
                    display: inline-block;
                }
                .footer-links-list li :global(a):visited {
                    color: #ffffff !important;
                }
                .footer-links-list li :global(a):hover {
                    color: #ffffff !important;
                    text-decoration: none;
                    transform: translateX(5px);
                }
                .social-btn {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: #1e293b;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    font-size: 18px;
                }
                /* Original Social Media Colors on Hover/Default */
                .social-btn.facebook { color: #1877F2; background: rgba(24, 119, 242, 0.1); }
                .social-btn.facebook:hover { background: #1877F2; color: white; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(24, 119, 242, 0.4); }
                
                .social-btn.instagram { color: #E4405F; background: rgba(228, 64, 95, 0.1); }
                .social-btn.instagram:hover { background: linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%); color: white; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(233, 30, 99, 0.4); }
                
                .social-btn.linkedin { color: #0A66C2; background: rgba(10, 102, 194, 0.1); }
                .social-btn.linkedin:hover { background: #0A66C2; color: white; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(10, 102, 194, 0.4); }
                
                .social-btn.youtube { color: #FF0000; background: rgba(255, 0, 0, 0.1); }
                .social-btn.youtube:hover { background: #FF0000; color: white; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(255, 0, 0, 0.4); }
                
                .social-btn.twitter { color: #1DA1F2; background: rgba(29, 161, 242, 0.1); }
                .social-btn.twitter:hover { background: #1DA1F2; color: white; transform: translateY(-3px); box-shadow: 0 5px 15px rgba(29, 161, 242, 0.4); }

                /* Specific Styling adjustments for social icons */
                .social-btn svg {
                   filter: drop-shadow(0 0 2px rgba(0,0,0,0.1));
                }

                @media (max-width: 1024px) {
                    .footer-grid {
                        grid-template-columns: repeat(2, 1fr);
                    }
                }

                @media (max-width: 640px) {
                    .footer-grid {
                        grid-template-columns: 1fr;
                    }
                    .footer-col {
                        text-align: left;
                    }
                }
            `}</style>
        </footer>
    )
}
