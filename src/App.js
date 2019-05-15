import React, { Component } from 'react';
// import TaskApp from './task-app';
import Message from 'bee-message';
import { Button } from 'tinper-bee';
// import Switch from 'bee-switch';
// import { message, Button } from 'antd';
// import "antd/dist/antd.css";
// import "tinper-bee/assets/theme/tinper-bee-indigo.css";

// const info = () => {
//     message.info('This is a normal message');
//     setTimeout(()=>{
//         console.log('antd 重置')
//         message.config({
//             top: 200,
//             duration: 10,
//             maxCount: 3,
//         });
//     },2000)
// };

const info = () => {
    Message.create({content: '单据状态更新，请在审批中心查看最新状态。', color: 'info'});
    setTimeout(()=>{
        console.log('tinper-bee 重置')
        Message.config({
            top: 350,
            duration: 10,
        });
    },2000)
};

export default class App extends Component{
    state={
    }

    render(){
        return (
            <div>
                <Button colors="primary" onClick={info}>
                    Display normal message
                </Button>
            </div>
        )
    }
}