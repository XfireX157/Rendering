import { IButton } from "Types/IButton"

const Button = ({children, ...rest}: IButton) => {
    return(
        <button
            {...rest}
        >{children}</button>
    )
}

export default Button