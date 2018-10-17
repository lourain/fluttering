import React, { Component } from 'react';
import styles from './Home.less'
import chuan from '../../img/chuan.png'
class App extends Component {
  render() {
    return (
      <div className={styles.home}>
        
        <header>风满楼</header>
        <img src={chuan} alt=""/>
      </div>
    )
  }
}

export default App;
