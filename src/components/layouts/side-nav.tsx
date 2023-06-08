'use client'
import React, { useEffect, useRef } from 'react';
import styles from './header.module.scss';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    children?: React.ReactNode;
}

const SideNav: React.FC<Props> = ({ isOpen, onClose = () => { }, children }) => {
    const overlayRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (
                isOpen &&
                overlayRef.current &&
                overlayRef.current === event.target
            ) {
                onClose();
            }
        };

        window.addEventListener('mousedown', handleOutsideClick);
        return () => {
            window.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen, onClose]);

    return (
        <div className={`${styles.overlay} ${isOpen ? styles.open : ''}`} ref={overlayRef}>
            <div className={styles.sideNav}>
                <button className={styles.closeButton} onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default SideNav;
