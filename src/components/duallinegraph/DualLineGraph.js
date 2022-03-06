import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { DualAxes } from '@ant-design/plots';

function DualLineGraph(){
    const data = [
        {
          year: '0',
          value: 3,
          count: 10,
        },
        {
          year: '5',
          value: 4,
          count: 4,
        },
        {
          year: '10',
          value: 3.5,
          count: 5,
        },
        {
          year: '15',
          value: 5,
          count: 5,
        },
        {
          year: '20',
          value: 4.9,
          count: 4.9,
        },
        {
          year: '25',
          value: 6,
          count: 35,
        },
        {
          year: '30',
          value: 7,
          count: 7,
        },
        {
          year: '35',
          value: 9,
          count: 1,
        },
        {
          year: '40',
          value: 13,
          count: 20,
        },
      ];
      const config = {
        data: [data, data],
        xField: 'year',
        yField: ['value', 'count'],
       
        slider: {
          start:10,
          end: 15,
        },
        geometryOptions: [
          {
            geometry: 'line',
            color: '#5B8FF9',
          },
          {
            geometry: 'line',
            color: '#5AD8A6',
          },
        ],
      };
      return <DualAxes {...config} />;
}

export default DualLineGraph;