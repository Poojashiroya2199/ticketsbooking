import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Card, CardHeader } from "@material-ui/core";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import MoreVertIcon from "@material-ui/icons/MoreVert";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345
  },
  media: {
    height: 0,
    width: "250px",
    paddingTop: "50%", // 16:9,
    marginLeft: "30px",
    borderRadius: "15px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function UserCard(props) {
  const { name, poster, DOB, phonenum, address, agency, allotedseats } = props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            s
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={name}
        subheader={agency}
      />
      <CardMedia className={classes.media} image={poster} title="Paella dish" />

      <CardActions disableSpacing>
        {" "}
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            Phone no.: {phonenum}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Alloted seats: {allotedseats}
          </Typography>
        </CardContent>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph> Address : {address}</Typography>
          <Typography paragraph> DOB : {DOB}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
