import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './containers/App/index'
import Admin from './components/Admin/index'
import List from './components/List/index'
import Genre from './components/Genre/index'
import Release from './components/Release/index'
import Home from './components/Home/index'
import NotFound from './components/NotFound/index'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/admin' component={Admin} />
            <Route path='/genre/:genre' component={Genre}>
                <Route path='/genre/:genre/:release' component={Release} />
            </Route>
            <Route path='/list' component={List} />
        </Route>
        <Route path='*' component={NotFound} />
    </div>
);