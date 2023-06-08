'use client'
import { useRef, useState } from 'react';
import Image from 'next/image';
import { IC_whatsapp } from '@/utils/images';
import styles from "./menu-slide.module.scss";

const ActionSlider = () => {
    const containerRef = useRef(null);
    const [scrollLeft, setScrollLeft] = useState(0);
    console.log(scrollLeft);
    const handleDragStart = (e: any) => {
        e.preventDefault();
    };

    const handleDrag = (e: any) => {
        const container: any = containerRef.current;
        const containerScrollLeft = container.scrollLeft;
        const movementX = e.movementX;

        container.scrollTo({
            left: containerScrollLeft - movementX,
            behavior: 'smooth',
        });

        setScrollLeft(container.scrollLeft);
    };

    const scrollLeftHandler = () => {
        const container: any = containerRef.current;
        container.scrollTo({
            left: container.scrollLeft - 300, // Adjust the scroll amount as per your requirement
            behavior: 'smooth',
        });

        setScrollLeft(container.scrollLeft);
    };

    const scrollRightHandler = () => {
        const container: any = containerRef.current;
        container.scrollTo({
            left: container.scrollLeft + 300, // Adjust the scroll amount as per your requirement
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
        <div className={styles.productSection}>
            <div className={styles.arrowContainer}>
                <div className={styles.arrowLeft} onClick={scrollLeftHandler}>
                    {/* Add your left arrow icon here */}
                    LEFT
                </div>
            </div>
            <div
                className={styles.productContainer}
                ref={containerRef}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
            >
                {data?.map((d, i) =>
                    <div className={styles.card} key={i}>
                        <div className={styles.icon_wrap}>
                            <Image alt="" src={IC_whatsapp} />
                        </div>
                        <div className={styles.content}>
                            <div>
                                <h5>Order</h5>
                                <p>Via WhatsApp</p>
                                <p>01810117100</p>
                            </div>
                            <button onClick={() => alert('Test')}>
                                Click Here
                            </button>
                        </div>
                    </div>
                )}
            </div>
            <div className={styles.arrowContainer}>
                <div className={styles.arrowRight} onClick={scrollRightHandler}>
                    {/* Add your right arrow icon here */}
                    RIGHT
                </div>
            </div>
        </div>
    );
};

export default ActionSlider;
