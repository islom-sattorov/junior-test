import { TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import { deepPurple } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Popover from '@mui/material/Popover';
import axios from 'axios';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { exitLogin, selectAllLogin, toggleStatus } from '../../features/login/loginSlice';
import { addNotification } from '../../features/notification/notificationSlice';
import { LoginButton } from '../LoginButton/LoginButton';
import style from './Header.module.scss';


const boxStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


export const Header:FC = () =>{
    // Mui Popover
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null | undefined>();
    const [adsForm, setAdsForm] = useState({
        id: 0,
        title: "",
        subtitle: "",
        category: "",
        experience: "",
        salary: 0,
    })

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setAdsForm(prev => {
            return{
                ...prev,
                [name]: value
            }
        })
    };


    const handleSubmit =  () =>{
        setOpenModal(false)
        patchAds();
        setAdsForm({
            id: 0,
            title: "",
            subtitle: "",
            category: "",
            experience: "",
            salary: 0,
        })
    }

    const patchAds =  () =>{
        axios.post(`http://localhost:3001/posts/`, {
            id: 1,
            title: "Frontend Developer",
            subtitle: "HTML CSS JS TS React",
            category: "IT",
            salary: 3000,
            experience: "1 год",
        })
        .then((response) =>{
            console.log(response)
        })
        .catch((err) => {
            console.error(err)
        })
    }
    
    // Frame Motion
    const {scrollY} = useScroll();
    const offSetY = [0, 400];
    
    const heightSizes = [300, 60];
    const titleSizes = ["4rem", "2.4rem"];
    const inputWidths = ["300px", "180px"]
    
    const height = useTransform(scrollY, offSetY, heightSizes);
    const titleSize = useTransform(scrollY, offSetY, titleSizes);
    const inputWidth = useTransform(scrollY, offSetY, inputWidths);
    
    // Redux
    const dispatch = useDispatch()
    const {username, password, status} = useSelector(selectAllLogin);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) =>{
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const handleExit = () =>{
        dispatch(exitLogin({username: "", password: "", status: false}))
        dispatch(addNotification({type: false, message: "logged out "}))
    }


    // Post Request Login
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

// Post add
const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false)

// Local Storage 
    // useEffect(() =>{
    //     if(status){
    //         localStorage.setItem("statusLogin", JSON.stringify(true))
    //     }else if(!status){
    //         localStorage.setItem("statusLogin", JSON.stringify(false))
    //     }
    // })

    // useEffect(() =>{
    //     if(JSON.parse(localStorage.getItem("statusLogin") || "")){
    //         dispatch(toggleStatus(true))
    //     }
    // })

    return(
        <motion.header 
        style={{height}}
        className={style.header}>
            <div className="container">
                <div className={style.header_container}> 
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
                 <button onClick={handleOpenModal} className={style.add_btn}>+</button>
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
                <button onClick={handleExit} className={style.exit_login}>Exit</button>
                </Popover>
                </>
                 : 
                <LoginButton/>
                }
                </div>
                </div>
            </div>
            <Modal
  open={openModal}
  onClose={handleCloseModal}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={boxStyle}>
    <form className={style.header_add_table}>
  <TextField name='title' onChange={handleChange} id="outlined-basic" label="Название" variant="outlined" />      
  <TextField name='id' onChange={handleChange} id="outlined-basic" label="ID" variant="outlined" />      
  <TextField name='category' onChange={handleChange} id="outlined-basic" label="Категория" variant="outlined" />      
  <TextField name='subtitle' onChange={handleChange} id="outlined-basic" label="Требования" variant="outlined" />      
  <TextField name='experience' onChange={handleChange} id="outlined-basic" label="Опыт" variant="outlined" />      
  <TextField name='salary' onChange={handleChange} id="outlined-basic" label="Зарплата" variant="outlined" />      
  <Button onClick={handleSubmit} type='button' size='large' variant="contained">Submit</Button>
</form>

    </Box>
</Modal>
        </motion.header>

    )
}