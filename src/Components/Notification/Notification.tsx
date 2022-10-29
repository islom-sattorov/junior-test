import { AnyAction, Dispatch } from '@reduxjs/toolkit';
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeNotification, selectAllNotifications } from "../../features/notification/notificationSlice";
import style from './Notification.module.scss';


interface NotificationProps  {
    dispatch: Dispatch<AnyAction>
    id: string
    key: string
    type: boolean
    message: string
}

export const Notification: FC = () =>{
    const notification = useSelector(selectAllNotifications)
    const dispatch = useDispatch();

    return(
        <div>
            <div className={style.notification_wrapper}>
            {notification.map((note: any) => {
                    return <NotificationItem dispatch={dispatch} id={note.id} key={note.id} type={note.type} message={note.message} />
                })}
            </div>
        </div>
    )
}

const NotificationItem: FC <NotificationProps> = ({dispatch, id, type, message}) =>{
    const [exit, setExit] = useState(() => false);
    const [width, setWidth] = useState(() => 0)
    const [intervalId, setIntervalId] = useState<NodeJS.Timer>()

    const handleStartTimer = () =>{
        const id = setInterval(() =>{
            setWidth((prev) =>{
                if(prev < 100){
                    return prev + 0.5
                }

                clearTimeout(id)
                return prev
            })
        }, 20)
        setIntervalId(id)
    }

    const handlePauseTimer = () =>{
        clearInterval(intervalId)
    }

    const handleCloseNotification = () =>{
        handlePauseTimer();
        setExit(true)
        setTimeout(() =>{
            dispatch(removeNotification(id))
        }, 400)
    }

    useEffect(() =>{
        if(width === 100){
            handleCloseNotification()
        }
    }, [width])

    useEffect(() =>{
        handleStartTimer()
    }, [])



    return (
        <div
            onClick={() => setExit(() => true)}
            onMouseEnter={handlePauseTimer}
            onMouseLeave={handleStartTimer}
            className={
                `${style.notification_item} 
            ${type === true ? style.success : style.error}
            ${exit ? style.exit : ""}`}>
            <p>{message}</p>
            <div className={style.bar} style={{ width: `${width}%` }}></div>
        </div>
    )
}