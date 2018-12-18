import React from 'react'
import {Route} from 'react-router-dom'
import Home from './page/home/Home'
import Article from './page/article/article'
import Ablum from './page/ablum/ablum'
export default ()=>{
    return [
        <Route path="/" component={Home} key="1" exact />,
        <Route path="/detail" component={Article} key="2"/>,
        <Route path="/ablum" component={Ablum} key="3"/>
    ]
}