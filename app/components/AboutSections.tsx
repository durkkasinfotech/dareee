import React from 'react'

export default function AboutSections() {
  return (
    <section id="about" className="about-main-section">
      <div className="about-main-container">
        <div className="about-gallery-section">
          <div className="gallery-grid">
            <div className="gallery-card gallery-card-large">
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80" alt="Modern Classroom" />
              <div className="gallery-overlay">
                <span>Modern Learning Spaces</span>
              </div>
            </div>
            <div className="gallery-card">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80" alt="Students Learning" />
              <div className="gallery-overlay">
                <span>Interactive Learning</span>
              </div>
            </div>
            <div className="gallery-card">
              <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80" alt="Team Collaboration" />
              <div className="gallery-overlay">
                <span>Collaborative Environment</span>
              </div>
            </div>
            <div className="gallery-card">
              <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80" alt="Technology in Education" />
              <div className="gallery-overlay">
                <span>Tech-Enabled Education</span>
              </div>
            </div>
          </div>
        </div>

        <div className="why-choose-modern-section">
          <div className="section-header">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-heading">Excellence in Education</h2>
            <p className="section-description">
              We are committed to providing world-class education that empowers students to achieve their full potential
            </p>
          </div>
          <div className="why-choose-grid-modern">
            <div className="why-choose-card-modern">
              <div className="why-choose-icon">🎯</div>
              <h3 className="why-choose-title">ISO 9001:2015 Certified</h3>
              <p className="why-choose-desc">Internationally recognized quality standards ensuring excellence in education delivery</p>
            </div>
            <div className="why-choose-card-modern">
              <div className="why-choose-icon">🌍</div>
              <h3 className="why-choose-title">Global Competitiveness</h3>
              <p className="why-choose-desc">Empowering students from tier-2 and tier-3 cities to compete at international levels</p>
            </div>
            <div className="why-choose-card-modern">
              <div className="why-choose-icon">💡</div>
              <h3 className="why-choose-title">Innovative Teaching Methods</h3>
              <p className="why-choose-desc">Modern pedagogy including Harkness method, project-based learning, and personalized tracking</p>
            </div>
            <div className="why-choose-card-modern">
              <div className="why-choose-icon">🏆</div>
              <h3 className="why-choose-title">DURKKAS Group Support</h3>
              <p className="why-choose-desc">Backed by extensive resources and expertise of the DURKKAS Group of Companies</p>
            </div>
          </div>
        </div>

        <div className="frameworks-modern-section">
          <div className="section-header">
            <div className="section-label">Our Approach</div>
            <h2 className="section-heading">Integrated Learning Frameworks</h2>
          </div>
          <div className="frameworks-grid-modern">
            <div className="framework-card-modern">
              <div className="framework-icon-modern">📚</div>
              <h4 className="framework-title-modern">Modern Pedagogy</h4>
              <p className="framework-desc-modern">Cutting-edge teaching methodologies</p>
            </div>
            <div className="framework-card-modern">
              <div className="framework-icon-modern">🔬</div>
              <h4 className="framework-title-modern">Project-Based Learning</h4>
              <p className="framework-desc-modern">Hands-on practical experience</p>
            </div>
            <div className="framework-card-modern">
              <div className="framework-icon-modern">💬</div>
              <h4 className="framework-title-modern">Harkness Method</h4>
              <p className="framework-desc-modern">Interactive discussion-based learning</p>
            </div>
            <div className="framework-card-modern">
              <div className="framework-icon-modern">📊</div>
              <h4 className="framework-title-modern">Progress Tracking</h4>
              <p className="framework-desc-modern">Personalized learning analytics</p>
            </div>
            <div className="framework-card-modern">
              <div className="framework-icon-modern">💼</div>
              <h4 className="framework-title-modern">Industry Skills</h4>
              <p className="framework-desc-modern">Real-world career preparation</p>
            </div>
            <div className="framework-card-modern">
              <div className="framework-icon-modern">🌐</div>
              <h4 className="framework-title-modern">Multi-Mode Learning</h4>
              <p className="framework-desc-modern">Online, Offline & Workshop formats</p>
            </div>
          </div>
        </div>

        <div className="vision-mission-modern-section">
          <div className="vm-container">
            <div className="vm-card vision-card">
              <div className="vm-icon">🎯</div>
              <h3 className="vm-title">Our Vision</h3>
              <p className="vm-text">
                To become the leading educational institution that bridges the gap between tier-2/tier-3 cities and world-class education, empowering every learner to compete globally.
              </p>
            </div>
            <div className="vm-card mission-card">
              <div className="vm-icon">🚀</div>
              <h3 className="vm-title">Our Mission</h3>
              <p className="vm-text">
                To provide accessible, high-quality education through innovative teaching methods, personalized mentorship, and comprehensive skill development programs that prepare students for real-world challenges.
              </p>
            </div>
          </div>
        </div>

        <div className="core-values-section">
          <div className="section-header">
            <div className="section-label">Our Foundation</div>
            <h2 className="section-heading">Core Values</h2>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">💡</div>
              <h4>Innovation</h4>
            </div>
            <div className="value-item">
              <div className="value-icon">💬</div>
              <h4>Communication</h4>
            </div>
            <div className="value-item">
              <div className="value-icon">🔍</div>
              <h4>Curiosity</h4>
            </div>
            <div className="value-item">
              <div className="value-icon">⚡</div>
              <h4>Capability</h4>
            </div>
          </div>
          <p className="values-statement">
            We redefine education by placing <strong>innovation</strong>, <strong>communication</strong>, <strong>curiosity</strong>, and <strong>capability</strong> at the centre of every learning experience.
          </p>
        </div>

        <div className="faq-modern-section">
          <div className="section-header">
            <div className="section-label">Got Questions?</div>
            <h2 className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="faq-container-modern">
            <div className="faq-item-modern">
              <h4 className="faq-question">
                What is the goal of the DARE Centre for students in third-tier cities?
              </h4>
              <p className="faq-answer">
                The DARE Centre aims to offer top-notch educational and skill development opportunities that are usually only available in premier cities. This program closes the gap and gives students in small towns the tools they need to successfully compete globally.
              </p>
            </div>
            <div className="faq-item-modern">
              <h4 className="faq-question">
                How is DARE Centre considered a game-changer in education?
              </h4>
              <p className="faq-answer">
                The DARE Centre is regarded as a game-changer because it removes obstacles to accessibility, offers top-notch instruction, and uses contemporary teaching strategies that equip students for possibilities throughout the world and real-world issues.
              </p>
            </div>
            <div className="faq-item-modern">
              <h4 className="faq-question">
                Why does the DURKKAS Group view the DARE Centre as a ground-breaking development in education?
              </h4>
              <p className="faq-answer">
                The DARE Centre is ground-breaking because it uses Harkness method teaching techniques, makes the best education available in areas of need, and makes use of the DURKKAS Group's resources to offer unparalleled support and educational possibilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
