'use client';

import React from 'react';
import styles from './WhyChooseUs3D.module.css';

interface WhyChooseItem {
    text: string;
    description: string;
    icon: React.ReactNode;
}

interface WhyChooseUs3DProps {
    items: WhyChooseItem[];
}

const WhyChooseUs3D: React.FC<WhyChooseUs3DProps> = ({ items }) => {
    return (
        <div className={styles.scene}>
            <div className={styles.carousel}>
                {items.map((item, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.number}>0{index + 1}</div>
                        <div className={styles.iconWrapper}>
                            {item.icon}
                        </div>
                        <h3 className={styles.title}>{item.text}</h3>
                        <p className={styles.description}>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WhyChooseUs3D;
