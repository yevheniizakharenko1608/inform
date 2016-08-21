import React, { Component } from 'react'
import NavLink from '../../components/NavLink'

export default class App extends Component {
    render() {
        return (
            <div className='container'>
                <ul className='nav nav-pills'>
                    <li><NavLink onlyActiveOnIndex={true} to='/'>Главная</NavLink></li>
                    <li><NavLink to='/test1'>Test №1</NavLink></li>
                    <li><NavLink to='/test2'>Test №2</NavLink></li>
                    <li><NavLink to='/test3'>Test №3</NavLink></li>
                    <li><NavLink to='/test4'>Test №4</NavLink></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}