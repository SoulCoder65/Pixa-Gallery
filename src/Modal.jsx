import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import AccountCircleTwoToneIcon from "@material-ui/icons/AccountCircleTwoTone";
import IconButton from "@material-ui/core/IconButton";
import CameraIcon from "./images/cameraicon.png";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  console.log(props.userimg);
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton
        type="button"
        style={{ marginLeft: "40%" }}
        onClick={handleOpen}
      >
        <AccountCircleTwoToneIcon />
      </IconButton>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title" style={{ color: "teal" }}>
              Author: {props.user}
            </h2>
            {props.userimg !== "" ? (
              <img src={props.userimg} alt={"user Image"} />
            ) : (
              <img
                src={CameraIcon}
                alt={"user Image"}
                style={{ width: "150px", height: "150px", textAlign: "center" }}
              />
            )}
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
