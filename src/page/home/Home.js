import React, { Component } from 'react';
import styles from './Home.less'
import request from '../../request'
import { connect } from 'react-redux'
import * as action from '../../store/actions'

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: [],
    }
  }
  onIncrement (){
    console.log(this.props);
    
      this.props.dispatch(action.onincrement());
    };
    
  componentDidMount() {
    // if(! window.__initData__ ) this.props.fetchPost()
    this.getData()

  }
  async getData() {
    if (typeof window === 'undefined') {
      return false
    }
    let data = window.__initData__?this.props.receive_data.data:await this.fetchDate()    
    data.forEach(v => {
      v.fold = true
    })
    this.setState({
      data: data
    })
    
  }
  fetchDate() {
    return new Promise((resolve,reject)=>{
      request('get', '/api/directory')
      .then(res => {
        resolve(res.data)
      })
    })
  }
  toggle(index) {
    let new_data = this.state.data
    
    new_data.forEach((value, i) => {
      if (i === index) {
        value.fold = !value.fold
      } else {
        value.fold = true
      }
    })
    this.setState({
      data: new_data
    })

    new_data = null
  }
  render() {
    let {receive_data} = this.props
    // let data = receive_data.data
    // console.log(data);
    // let {data} = this.state
    let data = receive_data.data?receive_data.data:this.state.data
  

    return (
      <div className={styles.home}>
        <header>
          <p>风满楼</p>
          <div className={styles.logo}></div>
        </header>
        <div>{this.props.count}</div>
        <button onClick={this.props.onincrement}>increment</button>
				<div className={styles.content}>
          {
           data && data.map((item, index) => {
              let path = item.path
              return (
                <div key={index}>
                  <div className={styles.title} onClick={this.toggle.bind(this, index)}>{item.item_name}</div>
                  <ul className={item.fold ? styles.fold : styles.unfold}>
                    {
                      item.list.map((article, index) => {
                        return (
                          <li key={index}>
                            <a href={path + '?id=' + article._id}>
                              <img src={require('../../img/antumn.png')} alt="" />
                              <p>{article.title || article.album_name}</p>
                            </a>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>

              )

            })
          }

        </div>
      </div >
    )
  }
}
const mapStateToProps = state => {
  return {
    receive_data: state.receive_data,
    count:state.count
  }
};


export default connect(mapStateToProps,action)(App);

