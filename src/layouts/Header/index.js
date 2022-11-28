import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEllipsisVertical,
    faEarthAsia,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

import { UploadIcon, MessageIcon, InboxIcon } from '~/components/Icons';
import config from '~/config';
import Menu from '../Popper/Menu';
import Button from '~/components/Button';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Image from '~/components/Image';
import Search from './HeaderSearch';

const cx = classNames.bind(styles);
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            // eslint-disable-next-line no-sparse-arrays
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];
const MENU_USER = [
    { icon: <FontAwesomeIcon icon={faUser} />, title: 'View profile', to: '/@hoaa' },
    { icon: <FontAwesomeIcon icon={faCoins} />, title: 'Get coins', to: '/coins' },
    { icon: <FontAwesomeIcon icon={faGear} />, title: 'Settings', to: '/settings' },
    ...MENU_ITEMS,
    { icon: <FontAwesomeIcon icon={faSignOut} />, title: 'Log out', to: '/logout', separate: true },
];

function Header() {
    const [isLogin, setIsLogin] = useState(true);
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'english':
                //
                break;
            default:
        }
    };
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>
                <Search />

                <div className={cx('actions')}>
                    {isLogin ? (
                        <>
                            {/* <Button primary onClick={() => setIsLogin(!isLogin)}>Log out</Button> */}
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy delay={[0, 50]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('new-notification')}>22</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary onClick={() => setIsLogin(!isLogin)}>
                                Log in
                            </Button>
                        </>
                    )}
                    <Menu items={isLogin ? MENU_USER : MENU_ITEMS} onChange={handleMenuChange}>
                        {isLogin ? (
                            <Image
                                className={cx('current-user')}
                                src="https://kynguyenlamdep.com/wp-content/uploads/2022/06/anh-gai-xinh-che-mat-1.jpg"
                                alt="User"
                            />
                        ) : (
                            <button className={cx('btn-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
