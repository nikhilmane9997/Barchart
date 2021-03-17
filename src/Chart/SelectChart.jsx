import React, { useEffect, useState } from "react";
import { Chart } from "react-google-charts";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import Button from "@material-ui/core/Button";
import { Container, Row, Col } from "reactstrap";
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
  const chart = ["PieChart", "Line", "Bar","Horizontal_stacked","Doughnut"];
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const toggles = () => setDropdownOpens((prevState) => !prevState);
  const [doughnutChart, setdoughnutChart] = useState();
  // advances
  const [labeldata, setlabeldata] = useState(54549);
  const [twos, setlabeldatatwo] = useState(22448);
  const [three, setlabeldatathree] = useState(20561);
  const [four, setlabeldatafour] = useState(17368);
  const [five, setlabeldatafive] = useState(17122);
  const [six, setlabeldatasix] = useState(4567);

  // offset
  // ["Off Balance Sheet", 2445, 5538, 16288, 63, 63, 699],
  const [labeldataoffset, setlabeldataoffset] = useState(2445);
  const [twosoffset, setlabeldatatwooffset] = useState(5538);
  const [threeoffset, setlabeldatathreeoffset] = useState(16288);
  const [fouroffset, setlabeldatafouroffset] = useState(63);
  const [fiveoffset, setlabeldatafiveoffset] = useState(63);
  const [sixoffset, setlabeldatasixoffset] = useState(699);

  // "Forex Transaction", 54, 695, 1426, 2201, 2201, 899

  const [labeldataForex, setlabeldataForex] = useState(54);
  const [twosForex, setlabeldatatwoForex] = useState(695);
  const [threeForex, setlabeldatathreeForex] = useState(1426);
  const [fourForex, setlabeldatafourForex] = useState(2201);
  const [fiveForex, setlabeldatafiveForex] = useState(2201);
  const [sixForex, setlabeldatasixForex] = useState(899);

  // ["Card/Internet", 195, 71, 110, 42, 40, 52],
  const [labeldataCard, setlabeldataCard] = useState(195);
  const [twosCard, setlabeldatatwoCard] = useState(71);
  const [threeCard, setlabeldatathreeCard] = useState(110);
  const [fourCard, setlabeldatafourCard] = useState(42);
  const [fiveCard, setlabeldatafiveCard] = useState(40);
  const [sixCard, setlabeldatasixCard] = useState(52);

  // ["Deposits", 616, 148, 457, 903, 809, 437],

  const [labeldataDeposits, setlabeldataDeposits] = useState(616);
  const [twosDeposits, setlabeldatatwoDeposits] = useState(148);
  const [threeDeposits, setlabeldatathreeDeposits] = useState(457);
  const [fourDeposits, setlabeldatafourDeposits] = useState(903);
  const [fiveDeposits, setlabeldatafiveDeposits] = useState(809);
  const [sixDeposits, setlabeldatasixDeposits] = useState(437);

  const [selectedchart, setselectedchart] = useState("Bar");
  const [selectedcharts, setselectedcharts] = useState(
    "Select Area Operations"
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpens, setDropdownOpens] = useState(false);

  const [name, setname] = useState("");

  var arr = [];
  var year = [];

  for (const value of Datas.chartdata) {
    arr.push(value.name);
    for (const items of value.year) {
      console.log(items);
    }
  }

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
  const handleChange = (event) => {
    if (Number(two) === 2019 && selectedcharts === "Advances") {
      return setlabeldata(Number(54548) + Number(one));
    } else if (Number(two) === 2018 && selectedcharts === "Advances") {
      return setlabeldatatwo(Number(22448) + Number(one));
    } else if (Number(two) === 2017 && selectedcharts === "Advances") {
      return setlabeldatathree(Number(20561) + Number(one));
    } else if (Number(two) === 2016 && selectedcharts === "Advances") {
      return setlabeldatafour(Number(17368) + Number(one));
    } else if (Number(two) === 2015 && selectedcharts === "Advances") {
      return setlabeldatafive(Number(17122) + Number(one));
    } else if (Number(two) === 2014 && selectedcharts === "Advances") {
      return setlabeldatasix(Number(4567) + Number(one));
    } else if (Number(two) === 2019 && selectedcharts === "Off Balance Sheet") {
      return setlabeldataoffset(Number(2445) + Number(one));
    } else if (Number(two) === 2018 && selectedcharts === "Off Balance Sheet") {
      return setlabeldatatwooffset(Number(5538) + Number(one));
    } else if (Number(two) === 2017 && selectedcharts === "Off Balance Sheet") {
      return setlabeldatathreeoffset(Number(16288) + Number(one));
    } else if (Number(two) === 2016 && selectedcharts === "Off Balance Sheet") {
      return setlabeldatafouroffset(Number(63) + Number(one));
    } else if (Number(two) === 2015 && selectedcharts === "Off Balance Sheet") {
      return setlabeldatafiveoffset(Number(63) + Number(one));
    } else if (Number(two) === 2014 && selectedcharts === "Off Balance Sheet") {
      return setlabeldatasixoffset(Number(699) + Number(one));
    }
    // "Forex Transaction", 54, 695, 1426, 2201, 2201, 899
    else if (Number(two) === 2019 && selectedcharts === "Forex Transaction") {
      return setlabeldataForex(Number(54) + Number(one));
    } else if (Number(two) === 2018 && selectedcharts === "Forex Transaction") {
      return setlabeldatatwoForex(Number(695) + Number(one));
    } else if (Number(two) === 2017 && selectedcharts === "Forex Transaction") {
      return setlabeldatathreeForex(Number(1426) + Number(one));
    } else if (Number(two) === 2016 && selectedcharts === "Forex Transaction") {
      return setlabeldatafourForex(Number(2201) + Number(one));
    } else if (Number(two) === 2015 && selectedcharts === "Forex Transaction") {
      return setlabeldatafiveForex(Number(2201) + Number(one));
    } else if (Number(two) === 2014 && selectedcharts === "Forex Transaction") {
      return setlabeldatasixForex(Number(899) + Number(one));
    }
    // ["Card/Internet", 195, 71, 110, 42, 40, 52],
    else if (Number(two) === 2019 && selectedcharts === "Card/Internet") {
      return setlabeldataCard(Number(195) + Number(one));
    } else if (Number(two) === 2018 && selectedcharts === "Card/Internet") {
      return setlabeldatatwoCard(Number(71) + Number(one));
    } else if (Number(two) === 2017 && selectedcharts === "Card/Internet") {
      return setlabeldatathreeCard(Number(110) + Number(one));
    } else if (Number(two) === 2016 && selectedcharts === "Card/Internet") {
      return setlabeldatafourCard(Number(42) + Number(one));
    } else if (Number(two) === 2015 && selectedcharts === "Card/Internet") {
      return setlabeldatafiveCard(Number(40) + Number(one));
    } else if (Number(two) === 2014 && selectedcharts === "Card/Internet") {
      return setlabeldatasixCard(Number(52) + Number(one));
    }
    // ["Deposits", 616, 148, 457, 903, 809, 437],
    else if (Number(two) === 2019 && selectedcharts === "Deposits") {
      return setlabeldataDeposits(Number(616) + Number(one));
    } else if (Number(two) === 2018 && selectedcharts === "Deposits") {
      return setlabeldatatwoDeposits(Number(148) + Number(one));
    } else if (Number(two) === 2017 && selectedcharts === "Deposits") {
      return setlabeldatathreeDeposits(Number(457) + Number(one));
    } else if (Number(two) === 2016 && selectedcharts === "Deposits") {
      return setlabeldatafourDeposits(Number(903) + Number(one));
    } else if (Number(two) === 2015 && selectedcharts === "Deposits") {
      return setlabeldatafiveDeposits(Number(809) + Number(one));
    } else if (Number(two) === 2014 && selectedcharts === "Deposits") {
      return setlabeldatasixDeposits(Number(437) + Number(one));
    } else {
      alert("Enter Valid Details");
    }
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

  // console.log(arr);

// const doughnut =""

//  if(doughnutChart){
//   doughnut=
//   }






  return (
    <div className="mainDiv">
    <Container>
      <center> <br/>
        <h3 style={{ color:"purple" }}>AIOTF ANALYSIS</h3>
        <Row>
          <Col>
            <Dropdown
              isOpen={dropdownOpens}
              toggle={toggles}
              //Area selection
              // style={{ marginRight: 1000, position: "relative", top: -80 }}
            >
              <DropdownToggle caret>{selectedcharts}</DropdownToggle>
              <DropdownMenu>
                {arr.map((val, i) => {
                  {
                   console.log(val)
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
          </Col>
          <Col>
            <TextField
              id="standard-basic"
              label="No of Frauds"
              onChange={handleFrauds}
            />
          </Col>
          <Col>
            {" "}
            <TextField id="standard-basic" label="Year" onChange={handleYear} />
          </Col>
          <Col>
            {" "}
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleChange()}
            >
              Submit
            </Button>
          </Col>
          <Col>
            <Dropdown
              isOpen={dropdownOpen}
              toggle={toggle}
              className="chartDropdown"
              // style={{ marginLeft: 900, position: "relative", top: -40 }}
            >
              <DropdownToggle caret>{selectedchart}</DropdownToggle>
              <DropdownMenu>
                {chart.map((val, i) => {
                  return (
                    <DropdownItem
                      key={i}
                      onClick={() => {
                        if(val==="Horizontal_stacked"){
                          setselectedchart("BarChart")
                        }
                        else if(val==="Doughnut"){
                          setselectedchart("PieChart")
                          setdoughnutChart(0.4)
                        }
                        else if(val==="PieChart"){
                          setselectedchart("PieChart")
                          setdoughnutChart(0)
                        }
                        
                        else{
                        setselectedchart(val);}
                      }}
                    >
                      {val}
                    </DropdownItem>
                  );
                })}
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        {/* <form className={classes.root} noValidate autoComplete="off"> */}

        {/* </form> */}
        <div>
        <Chart
          width={"90%"}
          height={500}
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
            ["Advances", labeldata, twos, three, four, five, six],
            [
              "Off Balance Sheet",
              labeldataoffset,
              twosoffset,
              threeoffset,
              fouroffset,
              fiveoffset,
              sixoffset,
            ],
            [
              "Forex Transaction",
              labeldataForex,
              twosForex,
              threeForex,
              fourForex,
              fiveForex,
              sixForex,
            ],
            [
              "Card/Internet",
              labeldataCard,
              twosCard,
              threeCard,
              fourCard,
              fiveCard,
              sixCard,
            ],
            [
              "Deposits",
              labeldataDeposits,
              twosDeposits,
              threeDeposits,
              fourDeposits,
              fiveDeposits,
              sixDeposits,
            ],
            // ["Inter Branch Accounts", 0, 0, 1, 1, 10, 0],
            // ["Cash", 63, 56, 40, 37, 22, 43],
            // ["Cheques/DD", 39, 34, 34, 40, 25, 26],
            // ["Clearing Account", 7, 209, 6, 6, 87, 7],
            // ["others", 174, 244, 247, 80, 155, 170],
          ]}
          options={{
            title: "",
            chartArea: { width: "100%" },
            isStacked: true,
            pieHole: doughnutChart,
            hAxis: {
              title: "Total Population",
              maxValue: 1000,
              is3D: true,
              
             
              //     maxValue:20,
            },
            
            vAxis: {
              title: "Area Operation",
              max: 1000,
              min: 500,
            },
            animation: {
              duration: 1000,
              easing: "in",
              startup: true,
            },
            
          }}
          legendToggle
          
        /></div>
      </center>
    </Container>
    </div>
  );
}

export default SelectChart;
