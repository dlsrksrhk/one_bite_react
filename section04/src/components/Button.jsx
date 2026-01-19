const Button = ({children, text, color = "orange"}) => {
    const onClickButton = (e) => {
        console.log(e);
        console.log(text);
    };

    console.log(color);
    return (
        <button
            onClick={onClickButton}
            style={{backgroundColor: color}}>
            {children}
        </button>
    )
}

export default Button;