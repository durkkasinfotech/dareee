'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

interface HeroCarouselProps {
    images: string[]
}

export default function HeroCarousel({ images }: HeroCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768)
        }
        checkMobile()
        window.addEventListener('resize', checkMobile)
        return () => window.removeEventListener('resize', checkMobile)
    }, [])

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length)
        }, 3000) // Change every 3 seconds

        return () => clearInterval(timer)
    }, [images.length])

    // Offsets and sizing based on device
    const xOffsetStep = isMobile ? 12 : 30
    const yOffsetStep = isMobile ? 6 : 10
    const cardWidth = isMobile ? '88%' : '90%'

    // We'll show 3 images at a time for the stack effect
    // 0: Active (Center, Front)
    // 1: Next (Right/Back, Scaled down)
    // 2: Next Next (Further back, more scaled down)
    // -1: Previous (Left, fading out)

    const getStyle = (offset: number) => {
        const baseStyle: React.CSSProperties = {
            position: 'absolute',
            top: isMobile ? '5%' : 0,
            left: 0, // We'll align left and let width leave space on right
            width: cardWidth,
            height: isMobile ? '90%' : '100%', // Adjust height slightly on mobile to be safe
            transition: 'all 0.8s cubic-bezier(0.25, 1, 0.5, 1)',
            borderRadius: '24px',
            overflow: 'hidden',
        }

        if (offset === 0) {
            // Active
            return {
                ...baseStyle,
                zIndex: 3,
                opacity: 1,
                transform: 'translateX(0) scale(1)',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
            }
        } else if (offset === 1) {
            // Next
            return {
                ...baseStyle,
                zIndex: 2,
                opacity: 0.6,
                transform: `translateX(${xOffsetStep}px) scale(0.9) translateY(${yOffsetStep}px)`,
                filter: 'brightness(0.7)'
            }
        } else if (offset === 2) {
            // Next Next
            return {
                ...baseStyle,
                zIndex: 1,
                opacity: 0.4,
                transform: `translateX(${xOffsetStep * 2}px) scale(0.8) translateY(${yOffsetStep * 2}px)`,
                filter: 'brightness(0.5)'
            }
        } else {
            // Others (Hidden/Exiting)
            // If it's the one that just left (index - 1 effectively), slide it out left
            return {
                ...baseStyle,
                zIndex: 0,
                opacity: 0,
                transform: 'translateX(-100%) scale(0.8)',
            }
        }
    }

    // Since we want a continuous cycle, we calculate the "relative index" for all images
    // But for a simple stack of "Current, Next, NextNext", we need to handle the wrapping carefully.
    // Let's render ALL images but only position the relevant 3-4 visible ones.

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', perspective: '1000px' }}>
            {images.map((src, index) => {
                // Calculate position relative to current index handling wrap-around
                let offset = (index - currentIndex + images.length) % images.length;

                // If it's the immediate previous one (for exit animation), we want it to be "fading out left".
                // In a circular buffer of length L, "previous" corresponds to offset L-1.
                // However, our generic "else" handles anything not 0, 1, 2. 
                // We want the L-1 one to specifically slide left, others can just be hidden behind '2'.

                // Let's check specifically:
                let style = getStyle(offset);
                if (offset === images.length - 1) {
                    // This is the "previous" image. Slide it out to the left or keep it behind?
                    // My getStyle implementation sends "Others" to translate(-100%).
                    // So offset L-1 will be treated as "Others" and slide left. Correct.
                    // But wait, if we have 20 images, offset 3, 4, ... 18 will also fly left?
                    // We probably only want the *immediate* previous one to have the "exit" animation visible, 
                    // and the others to reset silently.
                    // But with `transition: all`, "resetting silently" is hard without a jump.
                    // Actually, if they are all at -100%, it's fine. They just stay there.
                    // The problem is when an image moves from "Next Next" (2) to "Next" (1) ... to "Active" (0) -> "Exit" (-1) -> "Back of stack" (Last).
                    // "Back of Stack" is offset L-1? No, offset L-1 is "Previous". 
                    // The image entering the stack (becoming '2') comes from offset 3.
                    // It transitions from 'hidden/left' to 'position 2'. That might mean it flies across the screen.
                    // We want new images to appear "behind" the stack.

                    // Revised Logic:
                    // 0: Active
                    // 1: Stack 1
                    // 2: Stack 2
                    // Everything else: Hidden "behind" stack 2 (same transform as 2 but opacity 0)
                    // EXCEPT the one effectively at -1 (previous), which flies Left.

                    // Let's simplify.
                    // Active (0)
                    // Next (1)
                    // Next (2)
                    // Previous (which is effectively images.length - 1)

                    if (offset > 2 && offset !== images.length - 1) {
                        // Park these behind stack 2, invisible, so they can slide into 2 seamlessly?
                        // If we transition 3 -> 2:
                        // 3 needs to be at 'transform 2' but 'opacity 0'. Then at '2' it gains opacity?
                        // Or just have them sit at 'transform 2' always?
                        style = {
                            ...style,
                            transform: `translateX(${xOffsetStep * 2}px) scale(0.8) translateY(${yOffsetStep * 2}px)`, // Park behind stack 2
                            opacity: 0,
                            zIndex: 0,
                            transition: 'none' // No transition when moving around in the hidden pile?
                        };
                    }
                }

                return (
                    <div
                        key={index}
                        style={style}
                    >
                        <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 600px"
                            style={{ objectFit: 'cover' }}
                            priority={index === currentIndex}
                        />
                        {/* Gradient Overlay for text readability or style */}
                        <div style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: '40%',
                            background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)'
                        }} />
                    </div>
                )
            })}
        </div>
    )
}
