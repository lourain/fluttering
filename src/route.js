import React from 'react'
import {Route} from 'react-router-dom'
import Home from './page/home/Home'

export default ()=>{
    return [
        <Route path="/" component={Home} key="1" exact />,
    ]
}