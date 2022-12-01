import classNames from 'classnames/bind';

import style from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(style);
function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/083bdd98191f72128eebdbcca718c29f~c5_100x100.jpeg?x-expires=1670058000&x-signature=%2B1lSuUx0o7B%2BF%2FImgvlG%2Fr5l3zg%3D"
                    alt=""
                />
                <Button primary className={cx('follow-btn')}>Follow</Button>
            </header>
            <div className={cx('body')}>
                <h4 className={cx('account-username')}>
                    hoaa.hanassii
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCircleCheck} />
                </h4>
                <p className={cx('account-name')}>Đào Lê Phương Hoa</p>
                <span className={cx('analytics')}>
                    <strong className={cx('follower-number')}>13.2M</strong>
                    <span className={cx('follower-title')}>Followers</span>
                    <strong className={cx('like-number')}>432.2M</strong>
                    <span className={cx('like-title')}>Likes</span>
                </span>
            </div>
        </div>
    );
}

export default AccountPreview;
