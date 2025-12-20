# Durkkas Business Framework (DBF) Section Code

## JSX Code (from app/nextgen/page.tsx)

```jsx
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
                    color1: '#1e3a8a', color2: '#3b82f6' // Royal Blue Gradient
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
                    color1: '#164e63', color2: '#06b6d4' // Midnight Cyan Gradient
                }
            ].map((item, index) => (
                <div
                    key={index}
                    style={{
                        position: 'sticky',
                        top: `${100 + (index * 40)}px`, // Stacking offset
                        marginBottom: '30px', // Spacing between cards when scrolled past
                        minHeight: isMobile ? '400px' : '320px',
                        paddingTop: '20px',
                        /* "Animation" logic: Sticky keeps it in view while scrolling */
                    }}
                >
                    <div style={{
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
                        overflow: 'hidden'
                    }}>
                        {/* Giant Letter Watermark */}
                        <div style={{
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
                        <div style={{
                            minWidth: '100px',
                            height: '100px',
                            background: 'rgba(255,255,255,0.1)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '40px',
                            boxShadow: '0 8px 32px rgba(0,0,0,0.2)'
                        }}>
                            <item.icon color="#ffffff" />
                        </div>

                        {/* Content */}
                        <div style={{ flex: 1, position: 'relative', zIndex: 2 }}>
                            <div style={{
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
```

## CSS Code (from app/globals.css)

```css
/* =========================
   NXTZEN DURKKAS BUSINESS FRAMEWORK
   ========================= */

/* Note: The DBF section uses primarily inline styles in the JSX,
   but here are the related CSS variables and base styles that support it */

:root {
  --primary-blue: #204572;
  --secondary-blue: #12DCFA;
}

/* Responsive Design */
@media (max-width: 768px) {
  .nxt-creative-card {
    min-width: 280px;
  }
}

/* Supporting styles for sticky behavior and animations */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}

/* Scrollbar styling for containers */
.nxt-courses-scroll-container {
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.nxt-courses-scroll-container::-webkit-scrollbar {
  display: none;
}
```

## Dependencies

Make sure to import the required icons at the top of your component:

```jsx
import { FaDatabase, FaBrain, FaCheckCircle, FaCloud, FaCog, FaRocket, FaSitemap } from 'react-icons/fa'
```

## Features

- **Sticky Scrolling Effect**: Each card stays in view as you scroll, creating a layered presentation
- **Gradient Backgrounds**: Each step has its own unique color gradient
- **Responsive Design**: Adapts to mobile and desktop screens
- **Icon Integration**: Uses React Icons for visual elements
- **Typography**: Custom fonts and gradients for the heading
- **Interactive Elements**: Hover states and transitions
- **Accessibility**: Semantic HTML structure

## Color Scheme

- **Data**: Royal Blue Gradient (#1e3a8a → #3b82f6)
- **Understand**: Blue Gradient (#1e3a8a → #2563eb)
- **Recommend**: Teal Gradient (#0f766e → #0d9488)
- **Keep**: Orange Gradient (#b45309 → #d97706)
- **KPI**: Pink Gradient (#be185d → #db2777)
- **Automate**: Purple Gradient (#7e22ce → #9333ea)
- **Scale**: Cyan Gradient (#164e63 → #06b6d4)
