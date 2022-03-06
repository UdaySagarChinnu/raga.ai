import {  message } from 'antd';
import { globalUri } from '../app.config';
import axios from 'axios';  

export const GetAccurancy = (key) => {
    axios.get(globalUri+"getAccuracy?model="+key).then((data)=>{
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