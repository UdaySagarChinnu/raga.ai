import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Line, DualAxes } from '@ant-design/plots';

const DualLineGraph = (props)=>{
  
    const [data,setData] = useState([])
   
  useEffect(()=>{
    setData(props.data)
  })

  const config = {
    data,
    padding: 'auto',
    xField: props.Date,
    yField: props.scales,
    xAxis: {
      tickCount: 5,
    },
   
  };

  return <Line {...config} />;
}


export default DualLineGraph;