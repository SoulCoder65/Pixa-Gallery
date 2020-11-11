import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Chip from "@material-ui/core/Chip";
import FavoriteIcon from "@material-ui/icons/Favorite";
import "./App.css";
import Tooltip from "@material-ui/core/Tooltip";
import VisibilityTwoToneIcon from "@material-ui/icons/VisibilityTwoTone";
import ChatBubbleTwoToneIcon from "@material-ui/icons/ChatBubbleTwoTone";
import GetAppTwoToneIcon from "@material-ui/icons/GetAppTwoTone";
import TransitionsModal from "./Modal";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

const Image = ({ img }) => {
  const classes = useStyles();
  //   SPlit tags to use separtely
  const tags = img.tags.split(",");
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img.webformatURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          {tags.map((tag, index) => (
            <Chip label={"#" + tag} />
          ))}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Tooltip title={img.views} placement="bottom-end">
          <VisibilityTwoToneIcon style={{ color: "blue" }} />
        </Tooltip>
        <Tooltip title={img.likes} placement="bottom-end">
          <FavoriteIcon style={{ color: "#e11d74" }} />
        </Tooltip>
        <Tooltip title={img.comments} placement="bottom-end">
          <ChatBubbleTwoToneIcon style={{ color: "#91d18b" }} />
        </Tooltip>
        <Tooltip title={img.downloads} placement="bottom-end">
          <GetAppTwoToneIcon style={{ color: "#7579e7" }} />
        </Tooltip>

        <TransitionsModal user={img.user} userimg={img.userImageURL} />
      </CardActions>
    </Card>
  );
};
export default Image;
