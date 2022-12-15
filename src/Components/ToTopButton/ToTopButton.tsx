import { useEffect, useState } from "react";
import { useMountTransition } from "../hook/useMountTransition";
import style from "./ScrollBtn.module.css";

export const ToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const hasTransitionedIn = useMountTransition(visible, 1000);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <>
      {(hasTransitionedIn || visible) && (
        <button
          className={`${style.btn_to_top} ${hasTransitionedIn && style.in} ${
            visible && style.visible
          }`}
          onClick={scrollToTop}
        >
          {">"}
        </button>
      )}
    </>
  );
};
