function Button({text, onClick, style}) {
    return (
        <button onClick={onClick} className={style} >{text}</button>
    );
}

Button.defaultProps = {
    text: 'Empty Button'
}

export default Button;
