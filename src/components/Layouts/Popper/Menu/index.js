import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapper } from '~/components/Layouts/Popper';
import MenuItem from './MenuItem';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
    const renderItem = () => {
        return items.map((item, index) => <MenuItem key={index} data={item}></MenuItem>);
    };
    return (
        <Tippy
            interactive
            delay={[0,500]}
            placement={'bottom-end'}
            render={(artrs) => (
                <div className={cx('menu-list')} tabIndex={-1} {...artrs}>
                    <PopperWrapper className={cx('menu-popper')}>{renderItem()}</PopperWrapper>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
