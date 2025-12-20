'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaUserGraduate, FaUserTie, FaEnvelope, FaLock, FaArrowLeft } from 'react-icons/fa'

export default function LoginPage() {
    const [loginType, setLoginType] = useState<'student' | 'employee'>('student')
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(`Logging in as ${loginType}:`, formData)
        // Add authentication logic here
    }

    return (
        <div style={{
            minHeight: '100vh',
            background: '#f8fafc',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '24px',
            fontFamily: 'Inter, system-ui, sans-serif',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Background Elements */}
            <div style={{
                position: 'fixed',
                top: '-10%',
                right: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(18, 220, 250, 0.15) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>
            <div style={{
                position: 'fixed',
                bottom: '-10%',
                left: '-10%',
                width: '40%',
                height: '40%',
                background: 'radial-gradient(circle, rgba(32, 69, 114, 0.1) 0%, transparent 70%)',
                filter: 'blur(80px)',
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            {/* Subtle Grid Pattern */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                opacity: 0.2,
                zIndex: 0,
                pointerEvents: 'none'
            }}></div>

            {/* Floating Animated Shapes */}
            <div className="floating-shape shape-1" style={{
                position: 'absolute',
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                background: 'rgba(18, 220, 250, 0.05)',
                top: '15%',
                left: '10%',
                zIndex: 0
            }}></div>
            <div className="floating-shape shape-2" style={{
                position: 'absolute',
                width: '100px',
                height: '100px',
                borderRadius: '50%',
                background: 'rgba(255, 215, 0, 0.05)',
                bottom: '20%',
                right: '15%',
                zIndex: 0
            }}></div>

            {/* Back to Home */}
            <Link
                href="/"
                style={{
                    position: 'absolute',
                    top: '24px',
                    left: '24px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#204572',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '14px',
                    transition: 'all 0.2s',
                    zIndex: 10
                }}
            >
                <FaArrowLeft /> Back to Home
            </Link>

            <div style={{
                width: '100%',
                maxWidth: '450px',
                background: '#ffffff',
                borderRadius: '24px',
                boxShadow: '0 20px 50px rgba(32, 69, 114, 0.15)',
                overflow: 'hidden',
                animation: 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)'
            }}>
                {/* Header Section */}
                <div style={{
                    padding: '40px 40px 20px',
                    textAlign: 'center',
                    background: 'linear-gradient(to bottom, #f8fafc, #ffffff)'
                }}>
                    <Image
                        src="/dare1.png"
                        alt="Dare Centre"
                        width={180}
                        height={60}
                        style={{ objectFit: 'contain', marginBottom: '24px' }}
                        priority
                    />
                    <h2 style={{
                        fontSize: '24px',
                        fontWeight: '800',
                        color: '#dc2626',
                        marginBottom: '8px'
                    }}>
                        Welcome Back
                    </h2>
                    <p style={{ color: '#64748b', fontSize: '14px' }}>
                        Please enter your details to sign in
                    </p>
                </div>

                {/* Login Type Switcher */}
                <div style={{
                    padding: '0 40px',
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '32px'
                }}>
                    <button
                        onClick={() => setLoginType('student')}
                        style={{
                            flex: 1,
                            padding: '12px 0',
                            borderRadius: '12px',
                            border: 'none',
                            background: loginType === 'student' ? '#12DCFA' : '#f1f5f9',
                            color: loginType === 'student' ? '#ffffff' : '#475569',
                            fontWeight: '700',
                            fontSize: '14px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: loginType === 'student' ? '0 4px 12px rgba(18, 220, 250, 0.3)' : 'none'
                        }}
                    >
                        <FaUserGraduate /> Student
                    </button>
                    <button
                        onClick={() => setLoginType('employee')}
                        style={{
                            flex: 1,
                            padding: '12px 0',
                            borderRadius: '12px',
                            border: 'none',
                            background: loginType === 'employee' ? '#204572' : '#f1f5f9',
                            color: loginType === 'employee' ? '#ffffff' : '#475569',
                            fontWeight: '700',
                            fontSize: '14px',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            transition: 'all 0.3s ease',
                            boxShadow: loginType === 'employee' ? '0 4px 12px rgba(32, 69, 114, 0.3)' : 'none'
                        }}
                    >
                        <FaUserTie /> Employee
                    </button>
                </div>

                {/* Form Section */}
                <form onSubmit={handleLogin} style={{ padding: '0 40px 40px' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{
                            display: 'block',
                            fontSize: '13px',
                            fontWeight: '700',
                            color: '#1e293b',
                            marginBottom: '8px',
                            textTransform: 'uppercase',
                            letterSpacing: '0.5px'
                        }}>
                            Email Address
                        </label>
                        <div style={{ position: 'relative' }}>
                            <FaEnvelope style={{
                                position: 'absolute',
                                left: '16px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#94a3b8'
                            }} />
                            <input
                                type="email"
                                required
                                placeholder="name@company.com"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '14px 16px 14px 44px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    fontSize: '15px',
                                    outline: 'none',
                                    transition: 'all 0.2s',
                                    color: '#0f172a'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = loginType === 'student' ? '#12DCFA' : '#204572'
                                    e.target.style.boxShadow = `0 0 0 4px ${loginType === 'student' ? 'rgba(18, 220, 250, 0.1)' : 'rgba(32, 69, 114, 0.1)'}`
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#e2e8f0'
                                    e.target.style.boxShadow = 'none'
                                }}
                            />
                        </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                            <label style={{
                                fontSize: '13px',
                                fontWeight: '700',
                                color: '#1e293b',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                Password
                            </label>
                            <a href="#" style={{
                                fontSize: '13px',
                                color: '#0ea5e9',
                                textDecoration: 'none',
                                fontWeight: '600'
                            }}>
                                Forgot?
                            </a>
                        </div>
                        <div style={{ position: 'relative' }}>
                            <FaLock style={{
                                position: 'absolute',
                                left: '16px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                color: '#94a3b8'
                            }} />
                            <input
                                type="password"
                                required
                                placeholder="••••••••"
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                style={{
                                    width: '100%',
                                    padding: '14px 16px 14px 44px',
                                    borderRadius: '12px',
                                    border: '1px solid #e2e8f0',
                                    fontSize: '15px',
                                    outline: 'none',
                                    transition: 'all 0.2s',
                                    color: '#0f172a'
                                }}
                                onFocus={(e) => {
                                    e.target.style.borderColor = loginType === 'student' ? '#12DCFA' : '#204572'
                                    e.target.style.boxShadow = `0 0 0 4px ${loginType === 'student' ? 'rgba(18, 220, 250, 0.1)' : 'rgba(32, 69, 114, 0.1)'}`
                                }}
                                onBlur={(e) => {
                                    e.target.style.borderColor = '#e2e8f0'
                                    e.target.style.boxShadow = 'none'
                                }}
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        style={{
                            width: '100%',
                            padding: '16px',
                            borderRadius: '12px',
                            border: 'none',
                            background: loginType === 'student'
                                ? 'linear-gradient(135deg, #12DCFA 0%, #0EA5C0 100%)'
                                : 'linear-gradient(135deg, #204572 0%, #1a365d 100%)',
                            color: '#ffffff',
                            fontWeight: '800',
                            fontSize: '16px',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
                            letterSpacing: '1px',
                            textTransform: 'uppercase'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                    >
                        Sign In
                    </button>

                    <p style={{ textAlign: 'center', marginTop: '24px', fontSize: '14px', color: '#64748b' }}>
                        Don't have an account? <a href="#" style={{ color: '#0ea5e9', fontWeight: '700', textDecoration: 'none' }}>Contact Admin</a>
                    </p>
                </form>

                {/* Footer Style Accent */}
                <div style={{
                    height: '6px',
                    width: '100%',
                    display: 'flex'
                }}>
                    <div style={{ flex: 1, background: '#12DCFA' }}></div>
                    <div style={{ flex: 1, background: '#FFD700' }}></div>
                    <div style={{ flex: 1, background: '#204572' }}></div>
                </div>
            </div>

            <style jsx global>{`
                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(30px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                @keyframes float {
                    0% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(5deg); }
                    100% { transform: translateY(0px) rotate(0deg); }
                }
                .floating-shape {
                    animation: float 8s ease-in-out infinite;
                }
                .shape-2 {
                    animation-delay: -4s;
                }
                input:focus {
                    background-color: #ffffff !important;
                }
            `}</style>
        </div>
    )
}
