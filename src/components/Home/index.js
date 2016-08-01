import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Slider from '../Slider'
import Persons from '../Persons'

export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            meaning: '0'
        };
        this.update = this.update.bind(this)
    }

    update(){
        this.setState({
            meaning: ReactDOM.findDOMNode(this.refs.meaning.refs.inp).value
        })
    }

    render() {
        return (
            <div>  
            <div className='row'>
                <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'></div>
                <Slider className='col-lg-10 col-md-10 col-sm-10 col-xs-10'
                        ref='meaning'
                min={0}
                max={100} 
                step={1}
                val={this.state.meaning}
                label='How old are you?'
                update={this.update}/>
                <div className='col-lg-1 col-md-1 col-sm-1 col-xs-1'></div>
            </div>
                <div>
                    <Persons/>
                </div>
            </div>
        )
    }
}