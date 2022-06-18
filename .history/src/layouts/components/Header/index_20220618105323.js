import React, { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { MessageIcon} from '~/components/Icons';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import Menu from '~/components/Popper/Menu';
import Image from '~/components/Image';

const cx = classNames.bind(styles);

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Language',
    },
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Settings',
    },
    {
        icon: <FontAwesomeIcon icon={faBell} />,
        title: 'Logout',
        separate: true,
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 2, 3]);
        }, 0);
    }, [searchResult]);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="logo" />
                    <h1>Logistics</h1>
                </div>

                {/*Search */}

                <div className={cx('actions')}>
                    <Tippy delay={[0, 50]} interactive content="Notification">
                        <button className={cx('action-btn')}>
                            <FontAwesomeIcon className={cx('notification-btn')} icon={faBell} />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>
                    <Tippy delay={[0, 50]} content="Message">
                        <button className={cx('action-btn')}>
                            <MessageIcon />
                            <span className={cx('badge')}>12</span>
                        </button>
                    </Tippy>

                    <Menu items={userMenu}>
                        <Image className={cx('user-avatar')} src="" alt="Nguyen  van A" />
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
