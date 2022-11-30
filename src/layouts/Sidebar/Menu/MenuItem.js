import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function MenuItem({ icon, title, to, activeIcon}) {
    return (
        <NavLink to={to} className={(navValue) => cx('menu-item', { active: navValue.isActive })}>
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('menu-title')}>{title}</span>
        </NavLink>
    );
}
MenuItem.propTypes = {
    icon: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    to: PropTypes.string,
};
export default MenuItem;
