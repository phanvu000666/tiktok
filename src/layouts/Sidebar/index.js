import classNames from "classnames/bind";
import styles from './Siderbar.module.scss'

import Menu from "./Menu";
import MenuItem from "./Menu/MenuItem";
import config from "~/config";
import { HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon, UserGroupActiveIcon, UserGroupIcon } from "~/components/Icons";
import SuggetedAccount from "./SuggetedAccount";
import FollowingAccount from "./FollowingAccount";

const cx = classNames.bind(styles)
function Sidebar() {
    return <aside className={cx('wrapper')}>
        <Menu>
            <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon/>} activeIcon={<HomeActiveIcon/>}/>
            <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon/>} activeIcon={<UserGroupActiveIcon/>}/>
            <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon/>} activeIcon={<LiveActiveIcon/>}/>
        </Menu>
        <SuggetedAccount label="Suggeted Account"/>
        <FollowingAccount label="Following Account"/>
    </aside>;
}

export default Sidebar;
