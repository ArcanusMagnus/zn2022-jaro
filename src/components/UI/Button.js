import styles from './Button.module.css';

const Button = props => {
    const classes = styles.button + ' ' + props.className;
    return <button type={props.type} className={classes} onClick={props.onClick} disabled={props.disabled || false}>{props.children}</button>
}

export default Button;