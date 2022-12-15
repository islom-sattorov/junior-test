import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { createLoginForm } from "../../app/reducers/login/loginSlice";
import { addNotification } from "../../app/reducers/notification/notificationSlice";
import style from "./LoginButton.module.scss";

const boxStyle = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface Init {
  username: string;
  password: string;
}

export const LoginButton: FC = () => {
  const [open, setOpen] = useState(false);
  const [loginForm, setLoginForm] = useState<Init>({
    username: "",
    password: "",
  });
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(createLoginForm(loginForm));
    setOpen(false);
    if (loginForm.username.toLowerCase() === "admin") {
      dispatch(
        addNotification({
          type: true,
          message: `Hello ${loginForm.username.toLowerCase()}`,
        })
      );
    } else {
      dispatch(
        addNotification({
          type: false,
          message: `This user doesn't exist, please try again`,
        })
      );
    }
    setLoginForm({
      username: "",
      password: "",
    });
  };

  const handleOpen = () => setOpen(true);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <button onClick={handleOpen} className={style.login}>
        Login
      </button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={boxStyle}>
          <form className={style.login_form}>
            <TextField
              error={loginForm.username.length < 4 ? true : false}
              label="Username"
              variant="outlined"
              size="small"
              color={true ? "success" : "primary"}
              name="username"
              value={loginForm.username}
              onChange={handleChange}
            />
            <TextField
              error={loginForm.password.length < 4 ? true : false}
              label="Password"
              variant="outlined"
              size="small"
              color={true ? "success" : "primary"}
              name="password"
              value={loginForm.password}
              onChange={handleChange}
            />
            {(loginForm.username.length < 4 ||
              loginForm.password.length < 4) && (
              <h3>Имя и пароль должны содержать 4 или более символов</h3>
            )}
            <Button
              onClick={() => {
                handleSubmit();
              }}
              type="button"
              disabled={
                loginForm.username.length < 4 || loginForm.password.length < 4
                  ? true
                  : false
              }
              variant="contained"
            >
              Log in
            </Button>
          </form>
        </Box>
      </Modal>
    </>
  );
};
