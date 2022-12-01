// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './SuggetedAccount.module.scss';
import AccountPreview from '../AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({ avatar }) {
    const renderPreview = (artrs) => {
        return (
            <div className={cx('account-preview')} tabIndex="-1" {...artrs}>
                <PopperWrapper className={cx('menu-popper')}>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy interactive offset={[-20, 0]} delay={[800, 500]} placement="bottom" render={renderPreview}>
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
            </Tippy>
        </div>
    );
}
AccountItem.propTypes = {
    // avatar: PropTypes.string.isRequired,
};
export default AccountItem;
