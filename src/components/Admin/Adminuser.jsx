import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
  Input,
  InputLabel,
  Box,
  Button
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import agentusers from "./../../data/agents";
import UserCard from "./../../Card";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  displayblock: {
    display: "none"
  },
  displaydiv: {
    display: "flex",
    flexDirection: "column",
    width: "35%"
  },
  submit: {
    margin: "10px"
  },
  agentuser: {
    marginRight: "20px",
    paddingRight: "20px"
  }
}));
export default function Adminuser(props) {
  const { username, password } = props;
  const classes = useStyles();
  const [clas, setclas] = useState(true);
  const handledisplay = () => {
    setclas(!clas);
  };
  return (
    <>
      <Fab color="primary" aria-label="add" onClick={handledisplay}>
        <AddIcon />
      </Fab>
      <Box className={clas ? classes.displayblock : classes.displaydiv}>
        <FormControl>
          <InputLabel htmlFor="my-input">Email address</InputLabel>
          <Input id="my-input" aria-describedby="my-helper-text" />
          <FormHelperText id="my-helper-text">
            We'll never share your email.
          </FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Full name</InputLabel>
          <Input id="my-input-name" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">Mobile Number</InputLabel>
          <Input id="my-input-number" aria-describedby="my-helper-text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="my-input">password</InputLabel>
          <Input
            id="my-input-number-password"
            aria-describedby="my-helper-text"
          />
        </FormControl>
        <Button variant="contained" color="primary" className={classes.submit}>
          submit
        </Button>
      </Box>
      <div>{username}</div>
      <div>{password}</div>
      <Box>
        {agentusers.map((el) => (
          <UserCard
            className={classes.agentuser}
            name={el.username}
            poster={el.image}
            DOB={el.DOB}
            phonenum={el.phonenumber}
            password={el.password}
            address={el.address}
            agency={el.agency}
            allotedseats={el.allotedseats}
          />
        ))}
      </Box>
    </>
  );
}
