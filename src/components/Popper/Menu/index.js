import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
// import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Popper';
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
    const handleBack = () => {
        setHistor((prev) => prev.slice(0, prev.length - 1));
        console.log(history);
    };
    const renderResult = (artrs) => (
        <div className={cx('menu-list')} tabIndex={-1} {...artrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && <Header title={current.title} onBack={handleBack} />}
                <div className={cx('menu-scrollable')}>{renderItem()}</div>
            </PopperWrapper>
        </div>
    );
    const handleResetMenu = () => {
        setHistor((prev) => prev.slice(0, 1));
    };
    return (
        <HeadlessTippy
            hideOnClick={hideOnClick}
            interactive
            delay={[0, 500]}
            offset={[10, 10]}
            placement={'bottom-end'}
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </HeadlessTippy>
    );
}
Menu.propTypes = {
    children: PropTypes.node.isRequired,
    item: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
};
export default Menu;
