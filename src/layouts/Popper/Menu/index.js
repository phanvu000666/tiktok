import classNames from 'classnames/bind';
// import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/layouts/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFunc = () => {};

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFunc }) {
    const [history, setHistor] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItem = () => {
        return current.data.map((item, index) => {
            const hasParent = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (hasParent) {
                            setHistor((prev) => [...prev, item.children]);
                            console.log(history);
                        } else {
                            onChange(item);
                        }
                    }}
                ></MenuItem>
            );
        });
    };
    return (
        <HeadlessTippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 500]}
            offset={[10, 10]}
            placement={'bottom-end'}
            render={(artrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...artrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 && (
                            <Header
                                title="Leaguage"
                                onBack={() => {
                                    setHistor((prev) => prev.slice(0, prev.length - 1));
                                    console.log(history);
                                }}
                            />
                        )}
                        <div className={cx('menu-scrollable')}>{renderItem()}</div>
                    </PopperWrapper>
                </div>
            )}
            onHide={() => {
                setHistor((prev) => prev.slice(0, 1));
            }}
        >
            {children}
        </HeadlessTippy>
    );
}

export default Menu;
