import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import NativeSelect from "@material-ui/core/NativeSelect";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import Datas from "./Simpledata.json";

function SelectChart() {
  const [one, setone] = useState("");
  const [two, settwo] = useState("");
  const chart = ["PieChart", "Line", "Bar"];
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggles = () => setDropdownOpens((prevState) => !prevState);
  const [chartData, setChartData] = useState({});
  const [labeldata, setlabeldata] = useState(54)

  const [selectedchart, setselectedchart] = useState("Bar");
  const [selectedcharts, setselectedcharts] = useState(
    "Select Area Operations"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpens, setDropdownOpens] = useState(false);

  const [name, setname] = useState("");
  // const Nchart = () => {
  //   let arr1 = [];

  //   for (const value of Datas.chartdata) {
  //     arr1.push(value.name);
  //   }
  //   setChartData({
  //     data: [
  //       [
  //         "Area Operation",
  //         "2019-20",
  //         "2018-19",
  //         "2017-18",
  //         "2016-17",
  //         "2015-16",
  //         "2014-15",
  //       ],
  //       ["abcde", 54548, 22448, 20561, 17368, 17122, 17122],
  //       ["abcde", 54548, 22448, 20561, 17368, 17122, 17122],
  //     ],
  //   });
  // };

  var arr = [];
  var year = [];

  for (const value of Datas.chartdata) {
    arr.push(value.name);
    for (const items of value.year) {
      console.log(items)
      
    }
  }
  console.log("arr is " + arr);

  const BootstrapInput = withStyles((theme) => ({
    root: {
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: "relative",
      backgroundColor: theme.palette.background.paper,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
      },
    },
  }))(InputBase);

  const useStyles = makeStyles((theme) => ({
    margin: {
      margin: theme.spacing(1),
    },

    root: {
      "& > *": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  }));
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleFrauds = (e) => {
    setone(e.target.value);
  };

  
  const handleYear = (e) => {
    settwo(e.target.value);
  };

  const dataset = () => {
    Datas.chartdata.map((val, i) => {
      console.log(val.name);
    });
  };



  useEffect(() => {
    dataset();
    // Nchart();
  }, []);

  console.log(arr);
  return (
    <div>
      <center>
      {one}
      {two}
        <form className={classes.root} noValidate autoComplete="off">
          <TextField
            id="standard-basic"
            label="No of Frauds"
            onChange={handleFrauds}
          />
          <TextField id="standard-basic" label="Year"   onChange={handleYear}/>
          <Button
            variant="contained"
            color="secondary"
            style={{ zIndex: 1, cursor: "pointer" }}
            onClick={() => {
              if(Number(two) && selectedcharts === "Forex Transaction"){
                setlabeldata(Number(54548) + Number(one))
              }
              console.log(Datas.chartdata[0].year[0].nine.Amount)
            }}
          >
            Submit
          </Button>
        </form>
        <div>        
          <Dropdown
            isOpen={dropdownOpen}
            toggle={toggle}
            style={{ marginLeft: 900, marginTop: -55 }}
          >
            <DropdownToggle caret>{selectedchart}</DropdownToggle>
            <DropdownMenu>
              {chart.map((val, i) => {
                {
                  /* console.log(val) */
                }
                return (
                  <DropdownItem
                    key={i}
                    onClick={() => {
                      setselectedchart(val);
                    }}
                  >
                    {val}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
          <Dropdown
            isOpen={dropdownOpens}
            toggle={toggles}
            style={{ marginRight: 1000, position: "relative", top: -20 }}
          >
            <DropdownToggle caret>{selectedcharts}</DropdownToggle>
            <DropdownMenu>
              {arr.map((val, i) => {
                {
                  /* console.log(val) */
                }
                return (
                  <DropdownItem
                    key={i}
                    onClick={() => {
                      setselectedcharts(val);
                    }}
                  >
                    {val}
                  </DropdownItem>
                );
              })}
            </DropdownMenu>
          </Dropdown>
        </div>
        <Chart
          width={"90%"}
          height={600}
          chartType={selectedchart}
          loader={<div>Loading Chart</div>}
          data={[
            [
              "Area Operation",
              "2019-20",
              "2018-19",
              "2017-18",
              "2016-17",
              "2015-16",
              "2014-15",
            ],
            ["Advances", 182051, 54548, 22448, 20561, 17368, 17122],
            ["Off Balance Sheet", 2445, 5538, 16288, 63, 63, 699],
            ["Forex Transaction", labeldata, 695, 1426, 2201, 2201, 899],
            ["Card/Internet", 195, 71, 110, 42, 40, 52],
            ["Deposits", 616, 148, 457, 903, 809, 437],
            ["Inter Branch Accounts", 0, 0, 1, 1, 10, 0],
            ["Cash", 63, 56, 40, 37, 22, 43],
            ["Cheques/DD", 39, 34, 34, 40, 25, 26],
            ["Clearing Account", 7, 209, 6, 6, 87, 7],
            ["others", 174, 244, 247, 80, 155, 170],
          ]}
          options={{
            title: "",
            chartArea: { width: "100%" },
            hAxis: {
              title: "Total Population",
              maxValue: 1000,
              //     maxValue:20,
            },
            vAxis: {
              title: "Area Operation",
              max: 1000,
              min: 500,
            },
          }}
          legendToggle
        />
      </center>
    </div>
  );
}

export default SelectChart;

// data={[
//   [
//     "Area Operation",
//     "2019-20",
//     "2018-19",
//     "2017-18",
//     "2016-17",
//     "2015-16",
//     "2014-15",
//   ],
//   ["Advances", 54548, 22448, 20561, 17368, 17122, 17122],
//   ["Off Balance Sheet", 2445, 5538, 16288, 63, 63, 699],
//   ["Forex Transaction", 54, 695, 1426, 2201, 2201, 899],
//   ["Card/Internet", 195, 71, 110, 42, 40, 52],
//   ["Deposits", 616, 148, 457, 903, 809, 437],
//   ["Inter Branch Accounts", 0, 0, 1, 1, 10, 0],
//   ["Cash", 63, 56, 40, 37, 22, 43],
//   ["Cheques/DD", 39, 34, 34, 40, 25, 26],
//   ["Clearing Account", 7, 209, 6, 6, 87, 7],
//   ["others", 174, 244, 247, 80, 155, 170],
