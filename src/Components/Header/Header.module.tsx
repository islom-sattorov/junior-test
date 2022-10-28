import { FC } from "react";
import style from './Header.module.scss';

export const Header:FC = () =>{
    return(
        <header className={style.header}>
            <div className="container">
                <div className={style.header_container}>
                <div className={style.header_left}>
                    <h1 className={style.header_logo}>Logo</h1>
                </div>
                <div className={style.header_right}>
                    <h1>Right</h1>
                </div>
                </div>
            </div>
        </header>
    )
}