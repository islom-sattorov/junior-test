import Avatar from '@mui/material/Avatar';
import { deepPurple } from '@mui/material/colors';
import Popover from '@mui/material/Popover';
import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { selectAllLogin, toggleStatus } from '../../features/login/loginSlice';
import { LoginButton } from '../LoginButton/LoginButton';
import style from './Header.module.scss';


export const Header:FC = () =>{
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    
    const {scrollY} = useScroll();
    const offSetY = [0, 400];

    const heightSizes = [300, 60];
    const titleSizes = ["4rem", "2.4rem"];
    const inputWidths = ["300px", "180px"]

    const height = useTransform(scrollY, offSetY, heightSizes);
    const titleSize = useTransform(scrollY, offSetY, titleSizes);
    const inputWidth = useTransform(scrollY, offSetY, inputWidths);

    const dispatch = useDispatch()


const {username, password, status} = useSelector(selectAllLogin);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
      };

      const open = Boolean(anchorEl);
      const id = open ? 'simple-popover' : undefined;



    useEffect(() =>{
        if(username !== "" && username !== undefined){
        axios.patch(`http://localhost:3001/login`, {
            username: username,
            password: password,
        })
        .then((response) =>{
            if(response.status < 300 && response.data.username === "admin" && response.data.password === "admin" && !status){
                dispatch(toggleStatus(true))
            }
        })
        .catch((err) => {
            console.error(err)
        })
    }
})

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
                 {status ? 
                 <>
                <button className={style.avatar_btn} onClick={handleClick}><Avatar sx={{ bgcolor: deepPurple[500] }}>I</Avatar></button>
                <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',}}>
                <button className={style.exit_login}>Exit</button>
                </Popover>
                </>
                 : 
                <LoginButton/>
                }
                </div>
                </div>
            </div>
        </motion.header>
    )
}