import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Gauge } from '@ant-design/plots';

const Drift = () => {
  const config = {
    percent: 0.75,
    radius: 80,
    range: {
      color: '#30BF78',
      width: 1,
    },
    indicator: {
      pointer: {
        style: {
          stroke: '#D0D0D0',
        },
      },
      pin: {
        style: {
          stroke: '#D0D0D0',
        },
      },
    },
    
  };
  return <Gauge {...config} />;
};

export default Drift;