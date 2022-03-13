import React, { useState, useCallback, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table } from "antd";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import Drift from "../drift/Drift";
import ConfidencePlot from "../plot/ConfidencePlot";
import InferTimePlot from "../plot/InferTimePlot";
import DataDriftPlot from "../plot/DataDriftPlot"
import UptimePlot from "../plot/UptimePlot"
import { GetSummary } from "../../services/Service";

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
    title: "Model",
    dataIndex: "model",
    key: "model"
  },
  {
    title: "Number of Instances",
    dataIndex: "num_instances",
    key: "num_instances"
  },
  {
    title: "Overall Health",
    dataIndex: "health",
    key: "health"
  },
  {
    title: "Drift",
    dataIndex: "drift",
    key: "drift"
  },
  {
    title: "Need Retrainng",
    dataIndex: "needs_training",
    key: "needs_training"
  },
  {
    title: "Confidence Score",
    dataIndex: "confidence",
    key: "confidence"
  },
  {
    title: "Inference Time",
    dataIndex: "infer_time",
    key: "infer_time"
  },
  {
    title: "Up Time/Day",
    dataIndex: "uptime",
    key: "uptime"
  },
  {
    title: "Data Drift",
    dataIndex: "data_drift",
    key: "data_drift"
  },
];

const DragSortingTable = () => {
  const [data, setData] = useState([]);
  let draft = [];
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
let count = 0;
const InitialLoad= async ()=>{
  var summary = await GetSummary();
  console.log("inside dashboard")
    console.log(summary);
   
    console.log("drag table");
    console.log("summary",summary);
  
    // let values = {
    //   model: "1",
    //   num_instances:"",
    //   health: 32,
    //   drift:"",
    //   needs_training: "",
    //   confidence:"",
    //   data_drift:"",
    //   infer_time:"",
    //   uptime:""
    // }
    summary.forEach((item,index)=>{
      let values = {
        model: "",
        num_instances:"",
        health: "",
        drift:"",
        needs_training: "",
        confidence:"",
        data_drift:"",
        infer_time:"",
        uptime:""
      }
      values.key = index

      console.log("Inside DragSort",item);
      item.confidence =  item.confidence.split(",");
      item.data_drift =  item.data_drift.split(",");
      item.infer_time =  item.infer_time.split(",");
      item.uptime =  item.uptime.split(",");
      values.model = item.model;
      values.num_instances = item.num_instances;
      values.health = item.health;
      values.drift = <Drift driftData={item.drift}/>;
      values.needs_training = item.needs_training;
      values.confidence = <ConfidencePlot confidenceData={item.confidence}/>;
      values.data_drift = <DataDriftPlot dataDriftData={item.data_drift}/>;
      values.infer_time = <InferTimePlot infer_timeData={item.infer_time}/>;
      values.uptime = <UptimePlot uptimeData={item.uptime}/>;
      draft.push(values)
    })

    //console.log("newarray",newarray);

    console.log("after dataarray",draft)
    setData(draft);
    console.log("data",data);
}

const dataFormate = ()=>{
  InitialLoad()

}

  useEffect(async()=>{
    if(count == 0){
      InitialLoad();
      count++;
    }
  },[])

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
