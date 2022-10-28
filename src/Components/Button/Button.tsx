import { FC } from "react"


interface BtnProps{
    btnText: string
}

export const Button: FC<BtnProps> = ({btnText}) =>{
    const style = {
        display: "inline-block",
        backgroundColor: "orange",
        padding: 8,
    }
    
    return(
        <div style={style}>{btnText}</div>
    )
}