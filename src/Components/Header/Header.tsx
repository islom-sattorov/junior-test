import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC } from "react";
import style from './Header.module.scss';




export const Header:FC = () =>{
    const {scrollY} = useScroll();
    const offSetY = [0, 400];

    const heightSizes = [400, 100];
    const titleSizes = ["4rem", "2rem"];
    const inputPosition = ["absolute", "static"]
    const inputPosTop = "10px"

    const height = useTransform(scrollY, offSetY, heightSizes)
    const titleSize = useTransform(scrollY, offSetY, titleSizes)
    const inputPos = useTransform(scrollY, offSetY, inputPosition)

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
                style={{
                    position: inputPos,
                    top: inputPosTop
                }}
                 type="text" name="search" id="search" />
                <Avatar sx={{ bgcolor: deepPurple[500] }}>I</Avatar>
                </div>
                </div>
            </div>
        </motion.header>
    )
}