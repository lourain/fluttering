import React from 'react'
import {Route} from 'react-router-dom'
import Home from './page/home/Home'
import Article from './page/article/article'
export default ()=>{
    return [
        <Route path="/" component={Home} key="1" exact />,
        <Route path="/detail" component={Article} key="2"/>
    ]
}