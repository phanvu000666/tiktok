// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './FollowingAccount.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem({ avatar }) {
    return (
        <div className={cx('account-item')}>
            <img
                className={cx('account-avatar')}
                src={
                    avatar ||
                    'https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1670058000&x-signature=%2B1lSuUx0o7B%2BF%2FImgvlG%2Fr5l3zg%3D'
                }
                alt=""
            />
            <div className={cx('account-infor')}>
                <h4 className={cx('account-username')}>
                    hoaa.hanassii
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <p className={cx('account-name')}>Đào Lê Phương Hoa</p>
            </div>
        </div>
    );
}
AccountItem.propTypes = {
    // avatar: PropTypes.string.isRequired,
};
export default AccountItem;
