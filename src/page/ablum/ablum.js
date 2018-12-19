import React, { Component } from 'react'
import request from '../../request'
export default class Ablum extends Component {
  constructor(){
    super()
    this.state = {
      data:[]
    }
  }
  componentWillMount() {
    let id = window.location.search.slice(4)
    this.getPic(id)  
  }
  getPic(id) {
    request('get',`/api/ablum?id=${id}`)
      .then(res=>{
        console.log(res.data);
        
      })
  }

  render() {
    return (
      <div></div>
    )
  }
}