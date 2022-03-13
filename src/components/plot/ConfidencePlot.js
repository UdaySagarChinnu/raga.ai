import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Column } from '@ant-design/plots';

const ConfidencePlot = (props) => {
  const [data,setData] = useState([])
  let data1 = [
    {
      type: '',
      value: 0,
    }
  ];
  let count = 0;
  const paletteSemanticRed = '#F4664A';
  const brandColor = '#5B8FF9';
  const InitialLoad = ()=>{
    console.log(props.confidenceData);
    let values = { type: "",value: ""};
    let draftData = [];
    let i = 0;
    props.confidenceData.map((item)=>{
      console.log("I am Item",item)
      if(i==0){
        values.type= 10;
      }
      else{
        values.type= i+10;
      }
      
      values.value=item;
    })
    console.log("Confidence IN",props.confidenceData);
    setData(props.confidenceData);
  }
  useEffect(()=>{
    if(count == 0){
      InitialLoad();
      count++;
    }
    
   
  },[])
  const config = {
    data,
    xField: 'type',
    yField: 'value',
    seriesField: '',
    color: ({ type }) => {
      if (type === '10-30分' || type === '30+分') {
        return paletteSemanticRed;
      }

      return brandColor;
    },
    label: {
      content: (originData) => {
        const val = parseFloat(originData.value);

        if (val < 0.05) {
          return (val * 100).toFixed(1) + '%';
        }
      },
      offset: 2,
    },
    legend: false,
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default ConfidencePlot;