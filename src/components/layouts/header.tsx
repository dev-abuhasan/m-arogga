'use client'
import React from 'react';
import SideNav from './side-nav';
import styles from './header.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { cart_v1, x_v1, down_arrow_v1, menu_v1, messenger_v1 } from '@/utils/svg';
import MenuSlide from '../ui-kits/slider/menu-slide';

const Header = () => {
    const [isOpen, seIsOpen] = React.useState(false);

    const handleOpen = () => {
        seIsOpen((ps) => !ps);
    };

    const [prevScrollPos, setPrevScrollPos] = React.useState(0);
    const [visible, setVisible] = React.useState(true);

    React.useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.pageYOffset;
            const visible = prevScrollPos > currentScrollPos;
            setPrevScrollPos(currentScrollPos);
            currentScrollPos < 32 ? setVisible(true) : setVisible(visible);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [prevScrollPos]);

    //search
    const [search, setSearch] = React.useState('');

    return (
        <header style={{ paddingTop: visible ? '150px' : '150px' }}>
            <div className={`${styles.header} ${!visible ? styles.visible : ''}`}>
                <div className={styles.top}>
                    <div className={styles.logo_wrap}>
                        <Link href="/">
                            <Image
                                src="/img/logo_green.png" alt="Arogga Logo" className={styles.vercelLogo}
                                width={100}
                                height={50}
                                priority
                                style={{ width: '65px', height: '100%' }}
                            />
                        </Link>
                        <Link href='/'>
                            <small>
                                Deliver To
                                <b>&nbsp;<span>Choose Address</span>{down_arrow_v1}</b>
                            </small>
                        </Link>
                    </div>
                    <div className={styles.menu_icon}>
                        <span className={`${styles.cash} text-xs`}>
                            <b>৳</b> 10000.00
                        </span>
                        <span className={styles.icon}>
                            {messenger_v1}
                        </span>
                        <span className={styles.icon}>
                            <span className={styles.count_item}>99</span>
                            {cart_v1}
                        </span>
                    </div>
                </div>
                <div className={styles.bottom}>
                    <div className={styles.search}>
                        <button onClick={handleOpen}>
                            {menu_v1}
                        </button>
                        <label htmlFor="search">
                            <input type="text" placeholder='Search for medicine/health products' value={search} onChange={(e) => setSearch(e.target.value)} />
                        </label>
                        {search !== '' && <span onClick={() => setSearch('')}>{x_v1}</span>}
                    </div>
                </div>
                <div className={`${styles.bottom} ${styles.btm_brd}`}>
                    <MenuSlide />
                </div>
            </div>
            <SideNav isOpen={isOpen} onClose={handleOpen} />
        </header >
    );
};

export default Header;