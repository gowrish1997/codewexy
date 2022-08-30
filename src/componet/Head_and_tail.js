import React, { useState } from "react";
import Table from "./Table";
import Select from "react-select";
import {Link} from 'react-router-dom'
const style = {
  mainconatainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  formcontainer: {
    display: "flex",
    flexDirection: "column",
    height: "400px",
    justifyContent: "space-around",
  },
  button:{
    position:'absolute',
        top:'10px',
        left:'10px',
padding:'10px 20px',
borderRadius:'10px',

backgroundColor:'rgb(0,255,0)'
  }
};

const data = [[]];
const option = [
  {
    label: "select a value",
    value: "select a value",
  },
  {
    label: "H",
    value: "H",
  },
  {
    label: "T",
    value: "T",
  },
];

var i = 0;
var j = 0;
var k = 0;
let l = 0;
const Head_and_tail = () => {
  const [value, setvalue] = useState("select a value");
  const [prev, setprev] = useState("");
  const [error, setError] = useState(false);
  const [tabledata, settabledata] = useState(data);
  function onchangehandler(value) {
    console.log(value.value);
    setvalue(value.value);
  }

  function submithandler(e) {
    e.preventDefault();
    console.log(value);

    if (value == "H" || value == "T") {
      setError(false);

      if (tabledata[i].length == 0) {
        tabledata[i].push(value);
        setprev(value);
        setvalue(null);
        console.log(tabledata);
      } else if (value == prev) {
        if (k) {
          i++;
          if (i < tabledata.length) {
            console.log(tabledata);
            console.log(i);
            console.log("thiis is first");
            const diff=tabledata[i-1].length-tabledata[i].length;
            for (let m = 1; m <=diff; m++) {
              if (m == diff) {
                
                tabledata[i].push(value);
                setprev(value);
                setvalue(null);
              } else {
                tabledata[i].push("");
              }
            }
          } else {
            console.log(tabledata);
            console.log(i)
            console.log("this is second ");
            const arr=[];
            tabledata[i] = arr.slice(0, 1);
            for (let m = 0; m < tabledata[i-1].length; m++) {
                if (m ==tabledata[i-1].length-1) {
                
                  tabledata[i].push(value);
                  setprev(value);
                  setvalue(null);
                } else {
                  tabledata[i].push("");
                }
              }
        
          }
        } else {
          i++;

          const data = [...value];
          console.log(data);
          tabledata[i] = data.slice(0, 1);
          setprev(value);
          setvalue(null);
          console.log(tabledata);
        }
      } else {
        if(i>0){
            k=0;
        }
       k++;
        tabledata[j].push(value);
        setprev(value);
        setvalue(null);
        console.log(tabledata);
        i = 0;
      }
    } else {
      setError(true);
    }
  }
  return (
    <di>
        <Link to='/'><button style={style.button}>HOME</button> </Link>
    <div style={style.mainconatainer}>
      <form onSubmit={submithandler}>
        <div style={style.formcontainer}>
          <div>
            <label htmlFor="toss">Choose a option:</label>

            <Select
              options={option}
              value={option.filter(function(option) {
                return option.value === value;
              })}
              onChange={onchangehandler}
              defaultValue={{
                label: "select a value",
                value: "select a value",
              }}
            >
              {/* {/* <option>{value}</option>
              <option value={option[1]}>{option[1]}</option>
              <option value={option[2]}>{option[2]}</option> */}
            </Select>
            {error && (
              <div style={{ color: "red" }}>
                Please select value from dropdown
              </div>
            )}
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </div>
      </form>
      <Table tabledata={tabledata}></Table>
    </div>
    </di>
  );
};

export default Head_and_tail;
