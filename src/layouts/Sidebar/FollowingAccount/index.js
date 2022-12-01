import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function FollowingAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See more</p>
        </div>
    );
}
FollowingAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
export default FollowingAccount;
