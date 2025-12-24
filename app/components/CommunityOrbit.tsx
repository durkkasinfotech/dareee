'use client';

import React from 'react';
import Image from 'next/image';
import {
    FaUserGraduate,
    FaChalkboardTeacher,
    FaRocket,
    FaHandshake,
    FaLaptopCode,
    FaGlobe,
    FaAward,
    FaBrain,
    FaChartLine
} from 'react-icons/fa';
import styles from './CommunityOrbit.module.css';

export default function CommunityOrbit() {
    const innerSatellites = [
        { icon: FaUserGraduate, label: 'Learners', color: '#DC2626', angle: 0 },
        { icon: FaChalkboardTeacher, label: 'Mentors', color: '#0EA5C0', angle: 90 },
        { icon: FaLaptopCode, label: 'Skills', color: '#204572', angle: 180 },
        { icon: FaBrain, label: 'Knowledge', color: '#8B5CF6', angle: 270 },
    ];

    const outerSatellites = [
        { icon: FaRocket, label: 'Innovation', color: '#F59E0B', angle: 45 },
        { icon: FaHandshake, label: 'Community', color: '#10B981', angle: 117 },
        { icon: FaAward, label: 'Success', color: '#6366F1', angle: 189 },
        { icon: FaGlobe, label: 'Global', color: '#3B82F6', angle: 261 },
        { icon: FaChartLine, label: 'Growth', color: '#EC4899', angle: 333 },
    ];

    return (
        <div className={styles.orbitContainer}>
            {/* Central Core */}
            <div className={styles.core}>
                <Image
                    src="/edu-crop.png"
                    alt="Edukoot Core"
                    width={100}
                    height={100}
                    style={{
                        objectFit: 'contain',
                        borderRadius: '50%',
                        width: '85%',
                        height: '85%'
                    }}
                    priority
                />
                <div className="ping-anim" style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    border: '2px solid rgba(18, 220, 250, 0.3)',
                    pointerEvents: 'none'
                }}></div>
            </div>

            {/* Inner Ring */}
            <div className={`${styles.ring} ${styles.innerRing} ${styles.rotateLeftAnim}`}>
                {innerSatellites.map((sat, i) => (
                    <div
                        key={i}
                        className={styles.satellite}
                        style={{ transform: `rotate(${sat.angle}deg) translate(var(--inner-dist)) rotate(-${sat.angle}deg)` }}
                    >
                        <div className={styles.keepUprightLeftAnim}>
                            <sat.icon className={styles.satelliteIcon} style={{ color: sat.color }} />
                            <span className={styles.label}>{sat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Outer Ring */}
            <div className={`${styles.ring} ${styles.outerRing} ${styles.rotateRightAnim}`}>
                {outerSatellites.map((sat, i) => (
                    <div
                        key={i}
                        className={styles.satellite}
                        style={{ transform: `rotate(${sat.angle}deg) translate(var(--outer-dist)) rotate(-${sat.angle}deg)` }}
                    >
                        <div className={styles.keepUprightRightAnim}>
                            <sat.icon className={styles.satelliteIcon} style={{ color: sat.color }} />
                            <span className={styles.label}>{sat.label}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Decorative Ring */}
            <div className={`${styles.ring} ${styles.decoRing} ${styles.decoRotateAnim}`}></div>

            <style jsx>{`
                .ping-anim {
                    animation: ping 3s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                @keyframes ping {
                    75%, 100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}
