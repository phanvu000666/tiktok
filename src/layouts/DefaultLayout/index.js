import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import Header from '../Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('container')}>
                <Sidebar />
                <div className={cx('contain')}>{children}</div>
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node
}
export default DefaultLayout;