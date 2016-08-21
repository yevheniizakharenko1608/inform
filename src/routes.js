import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './containers/App'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'
import Home from './components/Home'

export const routes = (
    <div>
        <Route path='/' component={App}>
            <IndexRoute component={Home} />
            <Route path='/test1' component={Test1} />
            <Route path='/test2' component={Test2} />
            <Route path='/test3' component={Test3} />
            <Route path='/test4' component={Test4} />
        </Route>
    </div>
);