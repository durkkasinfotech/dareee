'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroSectionProps {
  tagline: string
  title: string
  description: string
  buttonText?: string
  buttonAction?: () => void
  imageSrc?: string
  imageAlt?: string
  videoEmbed?: string
  backgroundType?: 'gradient' | 'solid'
  backgroundColor?: string
  customMedia?: React.ReactNode
  centered?: boolean
}

export default function HeroSection({
  tagline,
  title,
  description,
  buttonText,
  buttonAction,
  imageSrc,
  imageAlt,
  videoEmbed,
  backgroundType = 'gradient',
  backgroundColor = '#ebfcfc',
  customMedia,
  centered = false
}: HeroSectionProps) {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const backgroundStyle = backgroundType === 'gradient'
    ? 'linear-gradient(to bottom, #ebfcfc, #ffffff)'
    : backgroundColor

  return (
    <section
      className="global-hero-section"
      style={{
        background: backgroundStyle,
        overflow: 'hidden',
        position: 'relative'
      }}
    >
      <div className="global-hero-container" style={centered ? { flexDirection: 'column', textAlign: 'center', gap: '40px' } : {}}>
        {/* Left Content */}
        <div className="global-hero-left" style={centered ? { alignItems: 'center', textAlign: 'center' } : {}}>
          {/* Tagline */}
          <div className="global-hero-tagline-wrapper">
            <span className="global-hero-tagline">
              {tagline}
            </span>
          </div>

          {/* Title */}
          <h1 className="global-hero-title" dangerouslySetInnerHTML={{ __html: title }} />

          {/* Description */}
          <div className="global-hero-description" style={{ maxWidth: '650px' }} dangerouslySetInnerHTML={{ __html: description }} />

          {/* Button */}
          {buttonText && buttonAction && (
            <div className="global-hero-button-container">
              <button
                className="global-hero-button"
                onClick={buttonAction}
              >
                <span>{buttonText}</span>
                <span className="btn-arrow">→</span>
              </button>
              <style jsx>{`
                @keyframes btnPulse {
                  0% { box-shadow: 0 0 0 0 rgba(18, 220, 250, 0.7); }
                  70% { box-shadow: 0 0 0 15px rgba(18, 220, 250, 0); }
                  100% { box-shadow: 0 0 0 0 rgba(18, 220, 250, 0); }
                }
              `}</style>
            </div>
          )}
        </div>

        {/* Right Content */}
        <div className="global-hero-right">
          {/* Custom Media (Dashboard Cards) */}
          {customMedia && (
            <div
              className="global-hero-custom-media"
              style={{
                width: '100%',
                maxWidth: '700px',
                position: 'relative',
                zIndex: 2
              }}
            >
              {customMedia}
            </div>
          )}

          {/* Core Media (Images/Video) */}
          {(imageSrc || videoEmbed) && (
            <div
              className="global-hero-main-media"
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '600px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                aspectRatio: videoEmbed ? '16/9' : '4/3',
                border: '4px solid #ffffff'
              }}
            >
              {videoEmbed ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={videoEmbed}
                  title="Hero Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    left: 0
                  }}
                />
              ) : imageSrc ? (
                <Image
                  src={imageSrc}
                  alt={imageAlt || 'Hero Image'}
                  fill
                  style={{ objectFit: 'cover' }}
                />
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
