{/* DBF Framework Section - Sticky Stacking Cards */}
<section style={{ padding: '20px 0 60px 0', background: '#f8fafc' }}>
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
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
                    color1: '#1e3a8a', color2: '#3b82f6'
                },
                {
                    step: 'Understand',
                    letter: 'U',
                    icon: FaBrain,
                    title: 'Understand Patterns',
                    description: 'Turn noise into signals. Using advanced ML algorithms and statistical models, we decode hidden patterns in user behavior to understand what truly drives engagement.',
                    color1: '#1e3a8a', color2: '#2563eb'
                },
                {
                    step: 'Recommend',
                    letter: 'R',
                    icon: FaCheckCircle,
                    title: 'Recommendation Engine',
                    description: 'Personalization at scale. Build intelligent engines that predict user needs and generate hyper-personalized recommendations to maximize conversion rates.',
                    color1: '#0f766e', color2: '#0d9488'
                },
                {
                    step: 'Keep',
                    letter: 'K',
                    icon: FaCloud,
                    title: 'Keep & Retain',
                    description: 'Retention engineering. Implement technical strategies to "Keep" the value locked in. We focus on low-latency storage and high-availability systems to ensure data sustainability.',
                    color1: '#b45309', color2: '#d97706'
                },
                {
                    step: 'KPI',
                    letter: 'K',
                    icon: FaCog,
                    title: 'KPI Optimization',
                    description: 'Measure what matters. Define and track technical Key Performance Indicators. Learn to build real-time dashboards that visualize system health and business impact.',
                    color1: '#be185d', color2: '#db2777'
                },
                {
                    step: 'Automate',
                    letter: 'A',
                    icon: FaRocket,
                    title: 'Automate Workflows',
                    description: 'Efficiency through code. Deploy intelligent bots, CI/CD pipelines, and AI agents to automate repetitive tasks, freeing up human creativity for high-value problem solving.',
                    color1: '#7e22ce', color2: '#9333ea'
                },
                {
                    step: 'Scale',
                    letter: 'S',
                    icon: FaSitemap,
                    title: 'Scale Globally',
                    description: 'Growth without limits. Architect systems built for exponential scale. from microservices to serverless, ensure your technology stack never becomes the bottleneck.',
                    color1: '#164e63', color2: '#06b6d4'
                }
            ].map((item, index) => (
                <div
                    key={index}
                    className="dbf-sticky-card"
                    style={{
                        position: 'sticky',
                        top: `${100 + (index * 40)}px`,
                        marginBottom: '30px',
                        minHeight: isMobile ? '400px' : '320px',
                        paddingTop: '20px',
                        zIndex: 10 - index
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
                        gap: '40px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.3s ease'
                    }}>
                        {/* Giant Letter Watermark */}
                        <div className="dbf-letter-watermark" style={{
                            position: 'absolute',
                            right: '-20px',
                            bottom: '-40px',
                            fontSize: '240px',
                            fontWeight: '900',
                            opacity: '0.05',
                            fontFamily: 'var(--font-inter), sans-serif',
                            pointerEvents: 'none'
                        }}>
                            {item.letter}
                        </div>

                        {/* Icon Box */}
                        <div className="dbf-icon-box" style={{
                            minWidth: '100px',
                            height: '100px',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
                            transition: 'transform 0.3s ease'
                        }}>
                            <item.icon color="#ffffff" />
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
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
                                fontSize: isMobile ? '28px' : '36px',
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
</section>


/* =========================================
   DURKKAS BUSINESS FRAMEWORK - STICKY CARDS
   ========================================= */

.dbf-sticky-card {
    position: sticky;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.dbf-card-content {
    transition: all 0.3s ease;
    transform-origin: center;
}

.dbf-card-content:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 25px 60px rgba(0,0,0,0.3);
}

.dbf-icon-box:hover {
    transform: rotate(5deg) scale(1.1);
}

.dbf-letter-watermark {
    animation: floatWatermark 6s ease-in-out infinite;
}

@keyframes floatWatermark {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg);
    }
    50% {
        transform: translate(10px, -10px) rotate(2deg);
    }
}

/* Smooth scroll behavior */
html {
    scroll-behavior: smooth;
}

/* Enhanced sticky positioning */
.dbf-sticky-card:nth-child(1) { top: 100px; }
.dbf-sticky-card:nth-child(2) { top: 140px; }
.dbf-sticky-card:nth-child(3) { top: 180px; }
.dbf-sticky-card:nth-child(4) { top: 220px; }
.dbf-sticky-card:nth-child(5) { top: 260px; }
.dbf-sticky-card:nth-child(6) { top: 300px; }
.dbf-sticky-card:nth-child(7) { top: 340px; }

/* Z-index stacking */
.dbf-sticky-card:nth-child(1) { z-index: 10; }
.dbf-sticky-card:nth-child(2) { z-index: 9; }
.dbf-sticky-card:nth-child(3) { z-index: 8; }
.dbf-sticky-card:nth-child(4) { z-index: 7; }
.dbf-sticky-card:nth-child(5) { z-index: 6; }
.dbf-sticky-card:nth-child(6) { z-index: 5; }
.dbf-sticky-card:nth-child(7) { z-index: 4; }


// The magic behind the stacking effect:
top: `${100 + (index * 40)}px`

// Breakdown:
// Card 1 (index 0): top: 100px  - First card appears at 100px from top
// Card 2 (index 1): top: 140px  - Second card at 140px (100 + 40)
// Card 3 (index 2): top: 180px  - Third card at 180px (100 + 80)
// ...and so on...

// Z-index stacking ensures proper layering:
zIndex: 10 - index

// Card 1: z-index: 10 (highest)
// Card 2: z-index: 9
// Card 3: z-index: 8
// ...and so on...