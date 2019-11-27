import React, { Component } from 'react';
import ColorPicker from "bee-colorpicker";
import "bee-colorpicker/build/ColorPicker.css";

export default class App extends Component{
    state = {
        value : "#E14C46"
    }

    handleChange = (v) => {
        console.log("选择的色彩信息 ：" , v);
        this.setState({
            value: v.hex || ''
        })
    }
    render(){
        return (
            <div>
                <ColorPicker 
                    label="颜色"
                    placeholder="请输入十六进制色值"
                    value={this.state.value} 
                    onChange={this.handleChange}
                    disabledModal={true}
                />
            </div>
        )
    }
}