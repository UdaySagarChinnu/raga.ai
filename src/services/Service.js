import {  message } from 'antd';
import { globalUri } from '../app.config';
import axios from 'axios';  

export const GetAccurancy = (key) => {
   return axios.get(globalUri+"getAccuracy?model="+key).then((data)=>{
        if(data.data != null){
           // message.success('This is a success message');
           var result = data.data.response;
           return result;
        }
    })
    .catch((error)=>{
        message.error(error.message);
    })
}


export const GetMainTableData = (key) => {
    let data = [] ;
    return axios.get(globalUri+"getModelData")
    .then((res) => {
        data = res.data.response[0];
        return data;
    })
   
    .catch((error)=>{
        message.error(error.message);
    })
}

export const GetFrameCount = (key) => {
    let data = [] ;
    return axios.get(globalUri+"plotFrameCountGraph")
    .then((res) => {
        data = res.data.response;
        return data;
    })
   
    .catch((error)=>{
        message.error(error.message);
    })
}

export const GetLabelCount = (key) => {
    let data = [] ;
    return axios.get(globalUri+"plotLabelCountGraph")
    .then((res) => {
        data = res.data.response;
        return data;
    })
   
    .catch((error)=>{
        message.error(error.message);
    })
}

export const GetAnamolyCount = (key) => {
    let data = [] ;
    return axios.get(globalUri+"plotAnamolyCountGraph")
    .then((res) => {
        data = res.data.response;
        return data;
    })
   
    .catch((error)=>{
        message.error(error.message);
    })
}