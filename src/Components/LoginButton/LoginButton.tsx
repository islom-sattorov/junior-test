import { FC } from "react";
import style from './LoginButton.module.scss';

export const LoginButton: FC = () =>{
    return(
        <button className={style.login_button}>Login</button>
    )
}