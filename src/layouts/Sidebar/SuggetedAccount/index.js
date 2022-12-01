import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggetedAccount.module.scss';
import AccountItem from './AccountItem';

const cx = classNames.bind(styles);

function SuggetedAccount({ label }) {
    return (
        <div className={cx('wrapper')}>
            <p className={cx('label')}>{label}</p>
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See all</p>
        </div>
    );
}
SuggetedAccount.propTypes = {
    label: PropTypes.string.isRequired,
};
export default SuggetedAccount;
