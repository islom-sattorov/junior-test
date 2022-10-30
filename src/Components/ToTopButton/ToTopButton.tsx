import { FC, useEffect, useState } from "react";

export const ToTopButton:FC = () =>{
    const [visible, setVisible] = useState(false)

    const toggleVisible = () =>{
        const scrolled = document.documentElement.scrollTop;
        console.log(scrolled)
        if(scrolled > 300){
          return  setVisible(true)
        }
        return setVisible(false)
    }

    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }


    useEffect(() => {
        window.addEventListener('scroll', toggleVisible)
      return () => {
        window.removeEventListener('scroll', toggleVisible)
      }
    })
    

    return(
        <button className="tot_top_btn" style={{display: visible ? "inline" : "none"}} onClick={scrollToTop}>
            {'>'}
        </button>
    )


}