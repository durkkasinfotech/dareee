'use client'

import { useState, useRef, useEffect } from 'react'
import { FaRobot, FaUserTie, FaPaperPlane, FaTimes, FaCommentDots, FaChevronDown, FaCheckCircle } from 'react-icons/fa'

type Message = {
    id: string
    text: string
    sender: 'user' | 'bot' | 'tutor'
    timestamp: Date
}

type UserDetails = {
    name: string
    email: string
    mobile: string
}

export default function ChatWidget() {
    const [isOpen, setIsOpen] = useState(false)
    const [activeTab, setActiveTab] = useState<'ai' | 'tutor'>('ai')
    const [messages, setMessages] = useState<Message[]>([])

    useEffect(() => {
        setMessages([
            {
                id: '1',
                text: "Hi there! 👋 I'm DARE's AI Assistant. Ask me anything about our courses, internships, or workshops!",
                sender: 'bot',
                timestamp: new Date()
            }
        ])
    }, [])

    const [tutorMessages, setTutorMessages] = useState<Message[]>([])
    const [inputValue, setInputValue] = useState('')
    const [isTyping, setIsTyping] = useState(false)
    const [showLeadForm, setShowLeadForm] = useState(false)
    const [userDetails, setUserDetails] = useState<UserDetails | null>(null)
    const [formData, setFormData] = useState({ name: '', email: '', mobile: '' })

    // Confirmation Modal State
    const [showConfirmation, setShowConfirmation] = useState(false)

    const messagesEndRef = useRef<HTMLDivElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    useEffect(() => {
        scrollToBottom()
    }, [messages, tutorMessages, isTyping, activeTab])

    // Prevent background scrolling when chat is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleSendMessage = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!inputValue.trim()) return

        if (activeTab === 'ai') {
            const userMsg: Message = {
                id: Date.now().toString(),
                text: inputValue,
                sender: 'user',
                timestamp: new Date()
            }
            setMessages(prev => [...prev, userMsg])
            setInputValue('')
            setIsTyping(true)

            // Simulate AI processing
            setTimeout(() => {
                const aiResponse = generateAIResponse(userMsg.text)
                setMessages(prev => [...prev, {
                    id: (Date.now() + 1).toString(),
                    text: aiResponse,
                    sender: 'bot',
                    timestamp: new Date()
                }])
                setIsTyping(false)
            }, 1500)
        } else {
            // Tutor Mode: Show Confirmation instead of sending immediately
            setShowConfirmation(true)
        }
    }

    const handleConfirmSend = () => {
        const userMsg: Message = {
            id: Date.now().toString(),
            text: inputValue,
            sender: 'user',
            timestamp: new Date()
        }

        setTutorMessages(prev => [...prev, userMsg])
        const sentText = inputValue // Capture text for logic if needed
        setInputValue('')
        setShowConfirmation(false)
        setIsTyping(true)

        // Simulate System Confirmation Response
        setTimeout(() => {
            setTutorMessages(prev => [...prev, {
                id: (Date.now() + 1).toString(),
                text: `Thank you! We have received your query. Our team will contact you shortly at ${userDetails?.email} within 24 hours.`,
                sender: 'tutor',
                timestamp: new Date()
            }])
            setIsTyping(false)
        }, 1000)
    }

    const generateAIResponse = (query: string): string => {
        const lowerQuery = query.toLowerCase()
        if (lowerQuery.includes('internship')) return "Our internship programs offer hands-on experience in AI, Robotics, and Full Stack Development. We have 15-day and 1-month tracks available. Would you like to know about the eligibility?"
        if (lowerQuery.includes('course') || lowerQuery.includes('workshop')) return "We offer various workshops and value-added courses designed by industry experts. Topics range from Basic Electronics to Advanced AI. Check out our 'Workshops' page for the schedule!"
        if (lowerQuery.includes('fee') || lowerQuery.includes('cost')) return "The fee structure varies by program duration and type. For specific pricing, I recommend switching to the 'Live Tutor' tab to get a personalized quote."
        if (lowerQuery.includes('contact') || lowerQuery.includes('location')) return "We are located at DARE Centre, Madurai. You can reach us at info@darecentre.in or +91 90805 87177."
        if (lowerQuery.includes('certificate')) return "Yes! All our programs come with ISO 9001:2015 certified completion certificates which are verifiable online."
        return "I'm not entirely sure about that specific detail, but I can help you with course info, internships, or general inquiries. For specific guidance, feel free to switch to the 'Live Tutor' mode!"
    }

    const handleTabChange = (tab: 'ai' | 'tutor') => {
        setActiveTab(tab)
        if (tab === 'tutor' && !userDetails) {
            setShowLeadForm(true)
        }
    }

    const handleLeadSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        setUserDetails(formData)
        setShowLeadForm(false)
        setTutorMessages([
            {
                id: 'init',
                text: `Welcome ${formData.name}! Please type your specific query or doubt below. We will assign an expert to address it.`,
                sender: 'tutor',
                timestamp: new Date()
            }
        ])
    }

    const currentMessages = activeTab === 'ai' ? messages : tutorMessages

    return (
        <>
            {/* Floating Toggle Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    style={{
                        position: 'fixed',
                        bottom: '24px',
                        right: '24px',
                        width: '60px',
                        height: '60px',
                        borderRadius: '30px',
                        background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                        color: 'white',
                        border: 'none',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 9999,
                        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
                    }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                >
                    <FaCommentDots size={28} />
                </button>
            )}

            {/* Main Chat Widget */}
            <div style={{
                position: 'fixed',
                bottom: isOpen ? '24px' : '-800px',
                right: isOpen ? '24px' : '-400px',
                width: '380px',
                height: '520px',
                maxWidth: 'calc(100vw - 48px)',
                maxHeight: 'calc(100vh - 48px)',
                backgroundColor: '#ffffff',
                borderRadius: '16px',
                boxShadow: '0 20px 40px -10px rgba(0,0,0,0.15), 0 0 20px rgba(0,0,0,0.05)',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                zIndex: 9999,
                transition: 'all 0.4s cubic-bezier(0.19, 1, 0.22, 1)',
                opacity: isOpen ? 1 : 0,
                pointerEvents: isOpen ? 'all' : 'none',
                fontFamily: "'Inter', sans-serif"
            }}>

                {/* Header */}
                <div style={{
                    padding: '20px',
                    background: 'linear-gradient(135deg, #1a3d5c 0%, #204572 100%)',
                    color: 'white',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                            <div style={{
                                width: '10px',
                                height: '10px',
                                borderRadius: '50%',
                                backgroundColor: '#4ade80',
                                boxShadow: '0 0 10px #4ade80'
                            }}></div>
                            <span style={{ fontWeight: '600' }}>DARE Assistant</span>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', opacity: 0.8 }}
                        >
                            <FaChevronDown />
                        </button>
                    </div>

                    {/* Mode Switcher */}
                    <div style={{
                        background: 'rgba(0,0,0,0.2)',
                        padding: '4px',
                        borderRadius: '12px',
                        display: 'flex',
                        position: 'relative'
                    }}>
                        <button
                            onClick={() => handleTabChange('ai')}
                            style={{
                                flex: 1,
                                padding: '8px',
                                borderRadius: '10px',
                                border: 'none',
                                background: activeTab === 'ai' ? '#ffffff' : 'transparent',
                                color: activeTab === 'ai' ? '#1a3d5c' : '#bdc3c7',
                                fontWeight: '600',
                                fontSize: '13px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}
                        >
                            <FaRobot size={14} /> AI Chatbot
                        </button>
                        <button
                            onClick={() => handleTabChange('tutor')}
                            style={{
                                flex: 1,
                                padding: '8px',
                                borderRadius: '10px',
                                border: 'none',
                                background: activeTab === 'tutor' ? '#ffffff' : 'transparent',
                                color: activeTab === 'tutor' ? '#1a3d5c' : '#bdc3c7',
                                fontWeight: '600',
                                fontSize: '13px',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '6px'
                            }}
                        >
                            <FaUserTie size={14} /> Live Tutor
                        </button>
                    </div>
                </div>

                {/* Chat Area */}
                <div style={{
                    flex: 1,
                    padding: '20px',
                    overflowY: 'auto',
                    backgroundColor: '#f8fafc',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px'
                }}>

                    {/* Messages */}
                    {currentMessages.map((msg) => (
                        <div
                            key={msg.id}
                            style={{
                                alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '85%',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: msg.sender === 'user' ? 'flex-end' : 'flex-start'
                            }}
                        >
                            <div style={{
                                padding: '12px 16px',
                                borderRadius: msg.sender === 'user' ? '16px 16px 0 16px' : '16px 16px 16px 0',
                                backgroundColor: msg.sender === 'user' ? '#204572' : 'white',
                                color: msg.sender === 'user' ? 'white' : '#1e293b',
                                boxShadow: msg.sender !== 'user' ? '0 2px 8px rgba(0,0,0,0.05)' : 'none',
                                fontSize: '14px',
                                lineHeight: '1.5'
                            }}>
                                {msg.text}
                            </div>
                            <span style={{ fontSize: '10px', color: '#94a3b8', marginTop: '4px', margin: '0 4px' }}>
                                {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                            </span>
                        </div>
                    ))}

                    {/* Typing Indicator */}
                    {isTyping && (
                        <div style={{ alignSelf: 'flex-start', background: 'white', padding: '12px', borderRadius: '16px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                            <div className="typing-dots" style={{ display: 'flex', gap: '4px' }}>
                                <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%', animation: 'bounce 1s infinite' }}></span>
                                <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%', animation: 'bounce 1s infinite 0.2s' }}></span>
                                <span style={{ width: '6px', height: '6px', background: '#94a3b8', borderRadius: '50%', animation: 'bounce 1s infinite 0.4s' }}></span>
                            </div>
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                {/* Lead Form Overlay (Tutor Mode) */}
                {activeTab === 'tutor' && showLeadForm && (
                    <div style={{
                        position: 'absolute',
                        top: '120px', // Below header
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(255,255,255,0.98)',
                        zIndex: 10,
                        padding: '30px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        backdropFilter: 'blur(5px)'
                    }}>
                        <h3 style={{ fontSize: '18px', color: '#1a3d5c', marginBottom: '8px', fontWeight: 'bold' }}>Connect with an Expert</h3>
                        <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px' }}>Please provide your details to start a live session with our senior counselor.</p>

                        <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                            <input
                                required
                                type="text"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', fontSize: '14px' }}
                            />
                            <input
                                required
                                type="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={e => setFormData({ ...formData, email: e.target.value })}
                                style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', fontSize: '14px' }}
                            />
                            <input
                                required
                                type="tel"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={e => setFormData({ ...formData, mobile: e.target.value })}
                                style={{ padding: '12px', border: '1px solid #e2e8f0', borderRadius: '8px', outline: 'none', fontSize: '14px' }}
                            />
                            <button
                                type="submit"
                                style={{
                                    marginTop: '8px',
                                    padding: '14px',
                                    background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '10px',
                                    fontSize: '14px',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}
                            >
                                Start Chat
                            </button>
                        </form>
                    </div>
                )}

                {/* Confirmation Popup Overlay */}
                {showConfirmation && (
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(0,0,0,0.5)',
                        zIndex: 20,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: '20px'
                    }}>
                        <div style={{
                            backgroundColor: 'white',
                            borderRadius: '16px',
                            padding: '24px',
                            width: '90%',
                            maxWidth: '300px',
                            textAlign: 'center',
                            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
                            animation: 'scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#ebfcfc',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 16px'
                            }}>
                                <FaCheckCircle size={24} color="#12DCFA" />
                            </div>
                            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1a3d5c', marginBottom: '8px' }}>Confirm Submission?</h3>
                            <p style={{ fontSize: '14px', color: '#64748b', marginBottom: '24px', lineHeight: '1.5' }}>
                                Are you sure you want to send this query? Our team will review it.
                            </p>
                            <div style={{ display: 'flex', gap: '12px' }}>
                                <button
                                    onClick={() => setShowConfirmation(false)}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        borderRadius: '8px',
                                        border: '1px solid #e2e8f0',
                                        background: 'white',
                                        color: '#64748b',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirmSend}
                                    style={{
                                        flex: 1,
                                        padding: '10px',
                                        borderRadius: '8px',
                                        border: 'none',
                                        background: 'linear-gradient(135deg, #204572 0%, #12DCFA 100%)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        fontSize: '14px',
                                        fontWeight: '600'
                                    }}
                                >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {/* Input Area */}
                <form onSubmit={handleSendMessage} style={{
                    padding: '16px',
                    backgroundColor: 'white',
                    borderTop: '1px solid #e2e8f0',
                    display: 'flex',
                    gap: '10px',
                    alignItems: 'center'
                }}>
                    <input
                        type="text"
                        placeholder={activeTab === 'ai' ? "Ask about internships, courses..." : "Type your query for the tutor..."}
                        value={inputValue}
                        onChange={e => setInputValue(e.target.value)}
                        disabled={(activeTab === 'tutor' && showLeadForm) || showConfirmation}
                        style={{
                            flex: 1,
                            padding: '12px 16px',
                            borderRadius: '24px',
                            border: '1px solid #e2e8f0',
                            outline: 'none',
                            fontSize: '14px',
                            backgroundColor: '#f8fafc'
                        }}
                    />
                    <button
                        type="submit"
                        disabled={!inputValue.trim() || (activeTab === 'tutor' && showLeadForm) || showConfirmation}
                        style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: inputValue.trim() ? '#204572' : '#e2e8f0',
                            color: 'white',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: inputValue.trim() ? 'pointer' : 'not-allowed',
                            transition: 'background 0.3s'
                        }}
                    >
                        <FaPaperPlane size={16} />
                    </button>
                </form>

                <style jsx global>{`
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          @keyframes scaleIn {
            from { transform: scale(0.9); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
        `}</style>
            </div>
        </>
    )
}
