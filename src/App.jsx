import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import U1 from './components/U1'
import U2 from './components/U2'
import U3 from './components/U3'
import U4 from './components/U4'

import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/unidad-1' exact component={U1} />
        <Route path='/unidad-2' exact component={U2} />
        <Route path='/unidad-3' exact component={U3} />
        <Route path='/unidad-4' exact component={U4} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
