import { TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Popover from "@mui/material/Popover";
import { deepPurple } from "@mui/material/colors";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllBoxStyles } from "../../app/reducers/boxStyle/boxStyleSlice";
import {
  exitLogin,
  selectAllLogin,
  toggleStatus,
} from "../../app/reducers/login/loginSlice";
import { addNotification } from "../../app/reducers/notification/notificationSlice";
import { LoginButton } from "../LoginButton/LoginButton";
import style from "./Header.module.scss";

interface PostReq {
  title: string;
  subtitle: string;
  category: string;
  salary: number;
  experience: number | string;
}

const adsCategories = [
  {
    value: "IT",
    label: "IT",
  },
  {
    value: "Restaurant",
    label: "Restaurant",
  },
  {
    value: "Medicine",
    label: "Medicine",
  },
  {
    value: "Other",
    label: "Other",
  },
];

export const Header: FC = () => {
  // Mui Popover
  const [anchorEl, setAnchorEl] = useState<
    HTMLButtonElement | null | undefined
  >();
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  // ADS FORM CONTROLLED
  const [adsForm, setAdsForm] = useState({
    id: 0,
    title: "",
    subtitle: "",
    category: "",
    experience: "",
    salary: 0,
  });

  const [inputSearchForm, setInputSearchForm] = useState({
    search: "",
  });

  // Post add
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => setOpenModal(false);

  // Frame Motion
  const { scrollY } = useScroll();
  const offSetY = [0, 400];
  const heightSizes = [300, 60];
  const titleSizes = ["4rem", "2.4rem"];
  const inputWidths = ["300px", "180px"];
  const height = useTransform(scrollY, offSetY, heightSizes);
  const titleSize = useTransform(scrollY, offSetY, titleSizes);
  const inputWidth = useTransform(scrollY, offSetY, inputWidths);

  // Modal Style
  const boxStyle = useSelector(selectAllBoxStyles);

  // Redux
  const dispatch = useDispatch();
  const { username, password, status } = useSelector(selectAllLogin);

  // Handle change form
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAdsForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Handle submit Form
  const handleSubmit = () => {
    setOpenModal(false);
    // postAds({
    //   title: adsForm.title,
    //   subtitle: adsForm.subtitle,
    //   category: adsForm.category,
    //   salary: adsForm.salary,
    //   experience: `Опыт работы ${adsForm.experience} ${
    //     Number(adsForm.experience) <= 4 ? `год` : "лет"
    //   }`,
    // });
    setAdsForm({
      id: 0,
      title: "",
      subtitle: "",
      category: "",
      experience: "",
      salary: 0,
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) =>
    setAnchorEl(e.currentTarget);

  const handleClose = () => setAnchorEl(null);

  const handleExit = () => {
    localStorage.setItem("status", JSON.stringify(false));
    dispatch(exitLogin({ username: "", password: "", status: false }));
    dispatch(addNotification({ type: false, message: "logged out " }));
  };

  // input Change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputSearchForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // POST request
  // const postAds = (props: PostReq) => {
  //   axios
  //     .post(`http://localhost:3001/posts/`, {
  //       id: nanoid(),
  //       title: props.title.toLowerCase(),
  //       subtitle: props.subtitle.toLowerCase(),
  //       category: props.category,
  //       salary: props.salary,
  //       experience: props.experience,
  //     })
  //     .then((response) => {
  //       dispatch(
  //         addNotification({ type: true, message: "Successfully Advertised" })
  //       );
  //       console.log(response);
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // };

  console.log(
    inputSearchForm,
    "Здесь должен быть get запрос из апи по значению инпута, посмотри branch v0.>5 ))))))"
  );

  // Post Request Login
  // useEffect(() => {
  //   if (username !== "" && username !== undefined) {
  //     axios
  //       .patch(`http://localhost:3001/login`, {
  //         username: username.toLowerCase(),
  //         password: password.toLowerCase(),
  //       })
  //       .then((response) => {
  //         if (
  //           response.status < 300 &&
  //           response.data.username.toLowerCase() === "admin" &&
  //           response.data.password.toLowerCase() === "admin" &&
  //           !status
  //         ) {
  //           localStorage.setItem("status", JSON.stringify(true));
  //           dispatch(toggleStatus(true));
  //         }
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       });
  //   }
  // });

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("status")!)) {
      dispatch(toggleStatus(true));
    }
  }, []);
  return (
    <motion.header style={{ height }} className={style.header}>
      <div className="container">
        <div className={style.header_container}>
          <div className={style.header_left}>
            <motion.h1
              style={{
                fontSize: titleSize,
              }}
              className={style.header_logo}
            >
              Работяга
            </motion.h1>
          </div>
          <div className={style.header_right}>
            <motion.input
              placeholder="search"
              value={inputSearchForm.search}
              onChange={handleInputChange}
              style={{
                width: inputWidth,
              }}
              type="text"
              name="search"
              id="search"
            />
            {status && (
              <button onClick={handleOpenModal} className={style.add_btn}>
                +
              </button>
            )}
            {status ? (
              <>
                <button className={style.avatar_btn} onClick={handleClick}>
                  <Avatar sx={{ bgcolor: deepPurple[500] }}>I</Avatar>
                </button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center",
                  }}
                >
                  <button onClick={handleExit} className={style.exit_login}>
                    Exit
                  </button>
                </Popover>
              </>
            ) : (
              <LoginButton />
            )}
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
            <TextField
              value={adsForm.title}
              error={adsForm.title.length === 0 ? true : false}
              name="title"
              onChange={handleChange}
              id="outlined-basic"
              label="Название"
              variant="outlined"
            />
            <TextField
              id="outlined-select-currency"
              select
              label="Select"
              name="category"
              value={adsForm.category}
              onChange={handleChange}
              helperText="Please select your currency"
            >
              {adsCategories.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              value={adsForm.subtitle}
              error={adsForm.subtitle.length === 0 ? true : false}
              name="subtitle"
              onChange={handleChange}
              id="outlined-basic"
              label="Требования"
              variant="outlined"
            />
            <TextField
              value={adsForm.experience}
              name="experience"
              onChange={handleChange}
              id="outlined-basic"
              label="Опыт"
              variant="outlined"
              type="number"
            />
            <TextField
              value={adsForm.salary}
              name="salary"
              onChange={handleChange}
              id="outlined-basic"
              label="Зарплата"
              variant="outlined"
              type="number"
            />
            <Button
              disabled={
                adsForm.title &&
                adsForm.subtitle &&
                adsForm.category &&
                adsForm.experience &&
                adsForm.salary
                  ? false
                  : true
              }
              onClick={handleSubmit}
              type="button"
              size="large"
              variant="contained"
            >
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </motion.header>
  );
};
