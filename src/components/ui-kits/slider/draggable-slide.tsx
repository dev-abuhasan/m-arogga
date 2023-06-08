'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import { IC_whatsapp } from '@/utils/images';
// import styles from "./menu-slide.module.scss";
import styles from "./draggable-slide.module.scss";

interface Props {
    children?: React.ReactNode;
}

const DraggableSlider: React.FC<Props> = ({ children }) => {
    const containerRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);

    const handleDragStart = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
    };

    const handleDrag = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const container: any = containerRef.current;
        const containerScrollLeft = container.scrollLeft;
        const movementX = e.movementX;

        container.scrollTo({
            left: containerScrollLeft - movementX,
            behavior: 'smooth',
        });

        setScrollLeft(container.scrollLeft);
    };

    const scrollLeftHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const container: any = containerRef.current;
        container.scrollTo({
            left: container.scrollLeft - 300,
            behavior: 'smooth',
        });

        setScrollLeft(container.scrollLeft);
    };

    const scrollRightHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const container: any = containerRef.current;
        container.scrollTo({
            left: container.scrollLeft + 300,
            behavior: 'smooth',
        });

        setScrollLeft(container.scrollLeft);
    };

    const data = [
        {
            img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
            name: 'Register Pharmacy',
            off: '14%',
            type: 'OFF+Cashback',
            color: 'warning'
        },
        {
            img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
            name: 'Register Pharmacy',
            off: '14%',
            type: 'OFF+Cashback',
            color: 'warning'
        },
        {
            img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
            name: 'Register Pharmacy',
            off: '14%',
            type: 'OFF+Cashback',
            color: 'warning'
        },
        {
            img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
            name: 'Register Pharmacy',
            off: '14%',
            type: 'OFF+Cashback',
            color: 'warning'
        },
        {
            img: 'https://www.arogga.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhealthcare.f2892a7b.png&w=1920&q=75',
            name: 'Register Pharmacy',
            off: '14%',
            type: 'OFF+Cashback',
            color: 'warning'
        }
    ];

    return (
        <div className={styles.draggable_section}>
            DragAble
            <div className={styles.arrowContainer}>
                <button className={styles.arrowLeft} onClick={scrollLeftHandler}>
                    LEFT
                </button>
            </div>
            <div
                className={styles.draggable_container}
                ref={containerRef}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
            >
                {children}
            </div>
            <div className={styles.arrowContainer}>
                <button className={styles.arrowRight} onClick={scrollRightHandler}>
                    RIGHT
                </button>
            </div>
        </div>
    );
};

export default DraggableSlider;
