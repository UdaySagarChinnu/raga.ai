import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line, DualAxes } from '@ant-design/plots';


const DualLineGraph2 = (props)=>{
    console.log("1first")
  const [data,setData] = useState([])
  console.log("2second")
useEffect(()=>{
  setData(props.data)
  console.log("3second")
}, [])
const config = {
    data,
    padding: 'auto',
    xField: props.Date,
    yField: props.anomoly,
    xAxis: {
      tickCount: 3,
    },
   
  };

  return <Line {...config} />;
};


export default DualLineGraph2;