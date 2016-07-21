import React, { Component } from 'react'
import '../../components/NavLink/styles.scss'
import NavLink from '../../components/NavLink/index'

export default class App extends Component {
  render() {
    return (
        <div className='container'>
          <ul className='nav nav-pills'>
              <li><NavLink onlyActiveOnIndex={true} to='/'>Главная</NavLink></li>
              <li><NavLink to='/admin'>Админка</NavLink></li>
              <li><NavLink to='/list'>Список жанров</NavLink></li>
          </ul>
          {this.props.children}
        </div>
    )
  }
}