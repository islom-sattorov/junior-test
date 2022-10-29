import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect } from "react";
import { LoginButton } from '../LoginButton/LoginButton';
import style from './Header.module.scss';



export const Header:FC = () =>{
    const {scrollY} = useScroll();
    const offSetY = [0, 400];

    const heightSizes = [300, 60];
    const titleSizes = ["4rem", "2.4rem"];
    const inputWidths = ["300px", "180px"]

    const height = useTransform(scrollY, offSetY, heightSizes);
    const titleSize = useTransform(scrollY, offSetY, titleSizes);
    const inputWidth = useTransform(scrollY, offSetY, inputWidths);

    useEffect(() =>{
        axios.post(`http://localhost:3001/login`, {
            username: "admin",
            password: "admin"
        })
        .then((response) =>{
            console.log(response.data)
        })
        .catch((err) => {
            console.error(err)
        })
        .finally(() =>{
            console.log("End")
        })
    }, [])

    return(
        <motion.header 
        style={{height}}
        className={style.header}>
            <div className="container">
                <div className={style.header_container}>  {/* Flex */}
                <div className={style.header_left}>
                    <motion.h1 style={{
                        fontSize: titleSize
                    }} className={style.header_logo}>Работяга</motion.h1>
                </div>
                <div className={style.header_right}>
                <motion.input
                placeholder='search'
                style={{
                   width: inputWidth
                }}
                 type="text" name="search" id="search" />
                {/* <Avatar sx={{ bgcolor: deepPurple[500] }}>I</Avatar> */}
                <LoginButton/>
                </div>
                </div>
            </div>
        </motion.header>
    )
}