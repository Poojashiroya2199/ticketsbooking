import React, { useState } from "react";
import {
  FormControl,
  Snackbar,
  Box,
  Button,
  TextField
} from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import agentusers from "./../../data/agents";
import UserCard from "./../../Card";
import authService from "./../../service/authService";
import Link from "react-router-dom";
import { MIN_USERNAME_LENGTH, MIN_PASSWORD_LENGTH } from "./../../config";
import Home from "./../Home";
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
  const handleLogout = () => {
    authService.handleLogout(props);
  };
  const { username, password } = props;
  const classes = useStyles();
  const [clas, setclas] = useState(true);

  const [account, setaccount] = useState({
    username: "",
    password: "",
    email: "",
    phonenum: "",
    seats: "",
    dob: "",
    address: "",
    image: ""
  });
  const [error, setError] = React.useState({
    username: "",
    password: "",
    email: "",
    phoneum: "",
    seats: "",
    dob: "",
    address: "",
    image: ""
  });
  const [open, setOpen] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  const handledisplay = () => {
    setclas(!clas);
  };
  const handleLogin = () => {
    if (!isValidUser(account.username, account.password, account.email)) {
      setOpen(true);
    } else {
      let obj = {
        username: account.username,
        password: account.password,
        email: account.email,
        phonenumber: account.phonenum,
        image: account.image,
        DOB: account.dob,
        allotedseats: account.seats,
        address: account.address
      };
      agentusers.push(obj);
      setclas(true);
      console.log(agentusers);
    }
  };
  const handleChange = (property, event) => {
    const accountCopy = {
      ...account
    };

    accountCopy[property] = event.target.value;
    setaccount(accountCopy);

    validate(property);
  };

  const isValidUser = (username, password, email) => {
    return agentusers.find(
      (user) =>
        user.username !== username ||
        user.password !== password ||
        user.email !== email
    );
  };

  const validateUsername = () => {
    const errorCopy = { ...error };
    if (account.username.includes(" ")) {
      errorCopy.username = "Username cannot contain a space";
    } else if (account.username.length < MIN_USERNAME_LENGTH) {
      errorCopy.username = `Username should be greater than ${MIN_USERNAME_LENGTH} chars`;
    } else {
      errorCopy.username = "";
    }
    setError(errorCopy);
  };
  const validatePassword = () => {
    const errorCopy = { ...error };
    if (account.password.length < MIN_PASSWORD_LENGTH) {
      errorCopy.password = `Password should be greater than ${MIN_PASSWORD_LENGTH} chars`;
    } else {
      errorCopy.password = "";
    }
    setError(errorCopy);
  };
  const validateEmail = () => {
    const errorCopy = { ...error };
    if (account.email.length < 10) {
      errorCopy.email = "Email should be greater than 10 chars";
    } else if (account.email.includes(" ")) {
      errorCopy.email = "Email cannot contain a space";
    } else if (!account.email.includes("@")) {
      errorCopy.email = "Not valid emailId";
    } else {
      errorCopy.email = "";
    }
    setError(errorCopy);
  };
  const validatePhonenum = () => {
    const errorCopy = { ...error };
    if (account.phonenum.length > 10) {
      errorCopy.phonenum = "Phone number should be 10 digits.";
    } else if (account.phonenum.includes(" ")) {
      errorCopy.phonenum = "Phone number cannot contain space";
    } else {
      errorCopy.phonenum = "";
    }
    setError(errorCopy);
  };
  const validateSeats = () => {
    const errorCopy = { ...error };
    if (account.seats.length > 3) {
      errorCopy.seats = "Less number of seats avilable";
    } else {
      errorCopy.seats = "";
    }
  };
  const validateAddress = () => {
    const errorCopy = { ...error };
    if (account.address.length !== 10) {
      errorCopy.address = "Please give us a full address";
    } else {
      errorCopy.address = "";
    }
    setError(errorCopy);
  };
  const validateDob = () => {
    const errorCopy = { ...error };
    if (account.dob.length > 10) {
      errorCopy.dob = "Pleasw provide valid DOB";
    } else if (!account.dob.includes("/")) {
      errorCopy.dob = "not valid DOB";
    } else {
      errorCopy.dob = "";
    }
    setError(errorCopy);
  };
  const validateImage = () => {
    const errorCopy = { ...error };
    if (account.image === "") {
      errorCopy.image = "please give  profile image link";
    } else {
      errorCopy.image = "";
    }
    setError(errorCopy);
  };
  const validate = (property) => {
    if (property === "username") {
      validateUsername();
    } else if (property === "password") {
      validatePassword();
    } else if (property === "email") {
      validateEmail();
    } else if (property === "phonenum") {
      validatePhonenum();
    } else if (property === "seats") {
      validateSeats();
    } else if (property === "dob") {
      validateDob();
    } else if (property === "address") {
      validateAddress();
    } else if (property === "image") {
      validateImage();
    }
  };

  return (
    <>
      <Fab color="primary" aria-label="add" onClick={handledisplay}>
        <AddIcon />
      </Fab>
      <Button color="primary" onClick={handleLogout}>
        logout
      </Button>

      <Box className={clas ? classes.displayblock : classes.displaydiv}>
        <FormControl>
          <TextField
            value={account.username}
            onChange={(event) => handleChange("username", event)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={error.username}
            helperText={error.username}
            id="username"
            label="Username"
            name="username"
            autoFocus
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            error={error.password}
            helperText={error.password}
            type="password"
            id="password"
            autoComplete="current-password"
            value={account.password}
            onChange={(event) => handleChange("password", event)}
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="EmailId"
            label="EmailId"
            error={error.email}
            helperText={error.email}
            type="email"
            id="email"
            autoComplete="current-email"
            value={account.email}
            onChange={(event) => handleChange("email", event)}
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="MobileNumber"
            label="Mobile No."
            error={error.phonenum}
            helperText={error.phonenum}
            type="number"
            id="number"
            autoComplete="current-num"
            value={account.phonenum}
            onChange={(event) => handleChange("phonenum", event)}
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="DOB"
            label="DOB"
            error={error.dob}
            helperText={error.dob}
            type="text"
            id="dob"
            autoComplete="current-dob"
            value={account.dob}
            onChange={(event) => handleChange("dob", event)}
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="address"
            label="Address"
            error={error.addree}
            helperText={error.address}
            type="text"
            id="address"
            autoComplete="current-address"
            value={account.address}
            onChange={(event) => handleChange("address", event)}
          />
        </FormControl>

        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="seats"
            label="Alloted seats"
            error={error.seats}
            helperText={error.seats}
            type="number"
            id="seat"
            autoComplete="current-seat"
            value={account.seats}
            onChange={(event) => handleChange("seats", event)}
          />
        </FormControl>
        <FormControl>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="url"
            label="Profile link"
            error={error.image}
            helperText={error.image}
            type="text"
            id="image"
            autoComplete="current-image"
            value={account.image}
            onChange={(event) => handleChange("image", event)}
          />
        </FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          className={classes.submit}
        >
          submit
        </Button>
      </Box>
      <Box display="flex">
        {agentusers.map((el) => (
          <UserCard
            key={el.username}
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
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          Incorrect username or password
        </Alert>
      </Snackbar>
    </>
  );
}
