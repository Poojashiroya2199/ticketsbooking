import React, { useState } from "react";
import { TextField, FormControl, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import authService from "./../../service/authService";
//
const useStyles = makeStyles((theme) => ({
  seats: {
    display: "flex",
    flexDirection: "row",
    width: "50px",
    height: "30px",
    margin: "10px",
    backgroundColor: "lightblue",
    padding: "10px"
  },
  window: {
    backgroundColor: "red",
    color: "white"
  },
  middle: {
    backgroundColor: "lightblue",
    borderRadius: "5px",
    margin: "2px",
    width: 50,
    height: 50
  },

  aside: {
    backgroundColor: "lightpink",
    color: "white",
    borderRadius: "5px",
    margin: "2px",
    width: 50,
    height: 50
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    margin: "10px"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));
export default function Agentuser(props) {
  const classes = useStyles();

  const [start, setstart] = useState({
    from: "",
    to: ""
  });
  const [error, setError] = useState({
    from: "",
    to: ""
  });
  let arr = [];
  const [date, setdate] = useState(new Date());
  const handlechangedate = (event) => {
    setdate(event.target.value);
  };
  let k = 1;
  const creatediv = () => {
    for (let i = 0; i < 6; i++) {
      arr[i] = [];
      for (let j = 0; j < 6; j++) {
        arr[i].push({ value: k++, clicked: false });
      }
    }
  };
  creatediv();

  let [click, setclick] = useState([]);
  let clickarr = [];
  const handleseatClick = (id, val) => {
    // console.log(val);
    let selected = arr[id].map((el) => {
      console.log(el);
      if (el.value === val && !el.clicked) {
        // console.log(el.value);
        el.clicked = true;
        // el.style.backgroundColor = "red";
      } else if (el.value === val && el.clicked) {
        el.clicked = false;
      }
      return el;
    });
    setclick(selected);
    clickarr.push(click);
  };

  const handleLogout = () => {
    authService.handleLogout(props);
  };
  const handleChange = (property, event) => {
    const accountCopy = {
      ...start
    };
    accountCopy[property] = event.target.value;
    setstart(accountCopy);
    validate(property);
  };
  const validateFrom = () => {
    const errorCopy = { ...error };
    if (start.from.includes(" ")) {
      errorCopy.from = "from which city you want to go";
    } else if (start.from.length < 1) {
      errorCopy.username = `city name should be proper`;
    } else {
      errorCopy.username = "";
    }

    setError(errorCopy);
  };
  const validateTo = () => {
    const errorCopy = { ...error };
    if (start.to.includes(" ")) {
      errorCopy.to = "To which city you want to go";
    } else if (start.to.length < 1) {
      errorCopy.to = `city name should be proper`;
    } else {
      errorCopy.to = "";
    }

    setError(errorCopy);
  };
  const validate = (property) => {
    property === "from" ? validateFrom() : validateTo();
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={handleLogout}>
        logout
      </Button>
      <Box display="flex">
        <h1>From:</h1>
        <FormControl>
          <TextField
            value={start.from}
            onChange={(event) => handleChange("from", event)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={error.from}
            helperText={error.from}
            id="from"
            label="From"
            name="From"
            autoFocus
          />
        </FormControl>
      </Box>
      <Box display="flex">
        <h1>To:</h1>
        <FormControl>
          <TextField
            value={start.to}
            onChange={(event) => handleChange("to", event)}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            error={error.to}
            helperText={error.username}
            id="to"
            label="To"
            name="To"
            autoFocus
          />
        </FormControl>
      </Box>
      <Box>
        <form className={classes.container} noValidate>
          <TextField
            id="date"
            label="select date"
            type="date"
            defaultValue="2020-12-7"
            className={classes.textField}
            InputLabelProps={{
              shrink: true
            }}
            value={date}
            onChange={(event) => handlechangedate(event)}
          />
        </form>
      </Box>

      <Box display="flex" flexDirection="row">
        {arr[0].map((el) => {
          return (
            <button
              key={el.value}
              id={el.value}
              onClick={(event) => handleseatClick(0, el.value)}
              className={el.clicked ? classes.middle : classes.aside}
            >
              {el.value}
            </button>
          );
        })}
      </Box>

      <Box display="flex" flexDirection="row">
        {arr[1].map((el) => {
          return (
            <button
              key={el.value}
              id={el.value}
              onClick={(event) => handleseatClick(1, el.value)}
              className={el.clicked ? classes.middle : classes.aside}
            >
              {el.value}
            </button>
          );
        })}
      </Box>
      <Box display="flex" flexDirection="row">
        {arr[2].map((el) => {
          return (
            <button
              key={el.value}
              id={el.value}
              onClick={(event) => handleseatClick(2, el.value)}
              className={el.clicked ? classes.middle : classes.aside}
            >
              {el.value}
            </button>
          );
        })}
      </Box>
      <Box display="flex" flexDirection="row">
        {arr[3].map((el) => {
          return (
            <button
              key={el.value}
              id={el.value}
              onClick={(event) => handleseatClick(3, el.value)}
              className={el.clicked ? classes.middle : classes.aside}
            >
              {el.value}
            </button>
          );
        })}
      </Box>
      <Box display="flex" flexDirection="row">
        {arr[4].map((el) => {
          return (
            <button
              key={el.value}
              id={el.value}
              className={el.clicked ? classes.middle : classes.aside}
              onClick={(event) => handleseatClick(4, el.value)}
            >
              {el.value}
            </button>
          );
        })}
      </Box>
      <Box display="flex" flexDirection="row">
        {arr[5].map((el) => {
          return (
            <button
              key={el.value}
              id={el.value}
              className={el.clicked ? classes.middle : classes.aside}
              onClick={(event) => handleseatClick(5, el.value)}
            >
              {el.value}
            </button>
          );
        })}
      </Box>
      <h4>
        Seating arrangement for 5 rows
        <br /> 0th and 5th column - window seats <br />
        1st and 4th column - middle seats
        <br /> 2nd and 3rd column - aside seats
      </h4>
      {clickarr.map((ele) => (ele.clicked ? <div>{ele.value}</div> : ""))}
    </>
  );
}
