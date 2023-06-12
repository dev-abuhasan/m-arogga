'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import { IC_whatsapp } from '@/utils/images';
// import styles from "./menu-slide.module.scss";
import styles from "./draggable-slide.module.scss";
import { left_arrow_v1, right_arrow_v1 } from '@/utils/svg';
import Link from 'next/link';

interface Props {
    children?: React.ReactNode;
    title?: string;
    label?: string;
    link?: string;
    arrow?: any;
}

const DraggableSlider: React.FC<Props> = ({ children, title, label, link, arrow }) => {
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

    return (
        <div className={styles.draggable_section} >
            <div className={styles.title}>
                <b>{title ? title : 'Not Found'}</b>
                <Link href="/">{label ? label : 'View ALL'}</Link>
            </div>
            {arrow && <div className={`${styles.arrowContainer} ${styles.arrow_left}`}>
                <button className={styles.arrowLeft} onClick={scrollLeftHandler}>
                    {left_arrow_v1}
                </button>
            </div>}
            <div
                className={`${styles.draggable_container} ${arrow ? styles.space : ''}`}
                ref={containerRef}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
            >
                {children}
            </div>
            {arrow && <div className={`${styles.arrowContainer} ${styles.arrow_right}`}>
                <button className={styles.arrowRight} onClick={scrollRightHandler}>
                    {right_arrow_v1}
                </button>
            </div>}
        </div >
    );
};

export default DraggableSlider;
