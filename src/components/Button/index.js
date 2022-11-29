import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';
import PropTypes from 'prop-types'

const cx = classNames.bind(styles);

function Button({
    to,
    href,
    primary = false,
    text = false,
    disabled = false,
    outline = false,
    small = false,
    large = false,
    className,
    rounded,
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...pasProps
}) {
    let Component = 'button';
    const props = {
        onClick,
        ...pasProps,
    };
    if (to) {
        props.to = to;
        Component = Link;
    } else if (href) {
        props.href = href;
        Component = 'a';
    }
    if (disabled) {
        // delete props.onClick;
        Object.keys(props).forEach((key) => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key];
            }
        });
    }

    let classes = cx('wrapper', { [className]: className, primary, text, disabled, outline, small, large, rounded });
    return (
        <Component className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
            {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
        </Component>
    );
}
Button.propTypes = {
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    outline: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    rounded: PropTypes.bool,
    className: PropTypes.string,
    left: PropTypes.node,
    right: PropTypes.node,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func
}

export default Button;
