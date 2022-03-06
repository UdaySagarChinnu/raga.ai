import React, { useState, useCallback, useRef } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import Drift from "../drift/Drift";
import Plot from "../plot/Plot";

const type = "DraggableBodyRow";

const DraggableBodyRow = ({
  index,
  moveRow,
  className,
  style,
  ...restProps
}) => {
  const ref = useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: (monitor) => {
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? " drop-over-downward" : " drop-over-upward"
      };
    },
    drop: (item) => {
      moveRow(item.index, index);
    }
  });
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });
  drop(drag(ref));

  return (
    <tr
      ref={ref}
      className={`${className}${isOver ? dropClassName : ""}`}
      style={{ cursor: "move", ...style }}
      {...restProps}
    />
  );
};

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Number of Instances",
    dataIndex: "numberOfInstances",
    key: "numberOfInstances"
  },
  {
    title: "Overall Health",
    dataIndex: "overallHealth",
    key: "overallHealth"
  },
  {
    title: "Drift",
    dataIndex: "drift",
    key: "drift"
  },
  {
    title: "Need Retrainng",
    dataIndex: "needRetrainng",
    key: "needRetrainng"
  },
  {
    title: "Confidence Score",
    dataIndex: "confidenceScore",
    key: "confidenceScore"
  },
  {
    title: "Inference Time",
    dataIndex: "inferenceTime",
    key: "inferenceTime"
  },
  {
    title: "Up Time/Day",
    dataIndex: "upTimeDay",
    key: "upTimeDay"
  },
  {
    title: "Data Drift",
    dataIndex: "dataDrift",
    key: "dataDrift"
  },
];

const DragSortingTable = () => {
  const [data, setData] = useState([
    {
      key: "1",
      name: "Modal 1",
      numberOfInstances: 32,
      overallHealth: "New York No. 1 Lake Park",
      drift:<Drift/>,
      needRetraining:"",
      confidenceScore:<Plot/>,
      inferenceTime:<Plot/>,
      upTimeDay:<Plot/>,
      dataDrift:<Plot/>
    },
    {
      key: "2",
      name: "Modal 2",
      numberOfInstances: 33,
      overallHealth: "New York No. 1 Lake Park",
      drift:<Drift/>,
      needRetraining:"",
      confidenceScore:<Plot/>,
      inferenceTime:<Plot/>,
      upTimeDay:<Plot/>,
      dataDrift:<Plot/>
    },
    {
      key: "3",
      name: "Modal 3",
      numberOfInstances: 34,
      overallHealth: "New York No. 1 Lake Park",
      drift:<Drift/>,
      needRetraining:"",
      confidenceScore:<Plot/>,
      inferenceTime:<Plot/>,
      upTimeDay:<Plot/>,
      dataDrift:<Plot/>
    },
    {
      key: "4",
      name: "Modal 4",
      numberOfInstances: 35,
      overallHealth: "New York No. 1 Lake Park",
      drift:<Drift/>,
      needRetraining:"",
      confidenceScore:<Plot/>,
      inferenceTime:<Plot/>,
      upTimeDay:<Plot/>,
      dataDrift:<Plot/>
    },
    {
      key: "5",
      name: "Modal 5",
      numberOfInstances: 36,
      overallHealth: "New York No. 1 Lake Park",
      drift:<Drift/>,
      needRetraining:"",
      confidenceScore:<Plot/>,
      inferenceTime:<Plot/>,
      upTimeDay:<Plot/>,
      dataDrift:<Plot/>
    },
    {
      key: "6",
      name: "Modal 6",
      numberOfInstances: 37,
      overallHealth: "New York No. 1 Lake Park",
      drift:<Drift/>,
      needRetraining:"",
      confidenceScore:<Plot/>,
      inferenceTime:<Plot/>,
      upTimeDay:<Plot/>,
      dataDrift:<Plot/>
    }
    
  ]);

  const components = {
    body: {
      row: DraggableBodyRow
    }
  };

  const moveRow = useCallback(
    (dragIndex, hoverIndex) => {
      const dragRow = data[dragIndex];
      setData(
        update(data, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, dragRow]
          ]
        })
      );
    },
    [data]
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <Table
        columns={columns}
        dataSource={data}
        components={components}
        onRow={(record, index) => ({
          index,
          moveRow
        })}
      />
    </DndProvider>
  );
};

export default DragSortingTable;
