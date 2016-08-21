import React, { Component } from 'react'
var sizeof = require('object-sizeof');
import './style.scss'


export default class Test1 extends Component {
    constructor(){
        super();
        this.state = {
            angle: 0
        };
        this.submit = this.submit.bind(this);
    }
    submit(){
        this.setState({
            angle: this.state.angle + 90
        })
    }

    render() {
        let arr = [], div;

        arr[0] = 'im';
        arr[1] = 'g/';
        arr[2] = 'ro';
        arr[3] = 'ob';
        arr[4] = 'in';
        arr[5] = 'Ho';
        arr[6] = 'od';
        arr[7] = '.p';
        arr[8] = 'ng';
        
        if(arr.map((item) => sizeof(item) == 4)) {
                div = <div className='img' style={{transform: 'rotate('+ this.state.angle + 'deg)'}}></div>;
        }

        return (
            <div>
                {div}
                <button className='button' onClick={this.submit}>Turn image</button>
                <p>Первое тестовое задание реализованно с помощью JavaScript + React (Папка src-> components -> Test1)</p>
            </div>
        )
    }
}