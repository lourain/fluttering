import React, { Component } from 'react';
import styles from './Home.less'
import autumn from '../../img/antumn.webp'
class App extends Component {
  // constructor(){
    
  // }
  render() {
    return (
      <div className={styles.home}>
        <header>风满楼</header>
        <div className={styles.content}>
          <div className={styles.daily}>
            <div className={styles.title}>游记</div>
            <ul>
              <li>
                <a href="/detail">
                  <img src={autumn} alt="" />
                  <p>深秋于苏</p>
                </a>
              </li>
              <li>
                <a href="/detail">
                  <img src={autumn} alt="" />
                  <p>深秋于苏深秋于苏深秋于苏</p>
                </a>
              </li>
              <li>
                <a href="/detail">
                  <img src={autumn} alt="" />
                  <p>深秋于苏</p>
                </a>
              </li>
            </ul>

          </div>
        </div>
      </div>
    )
  }
}

export default App;
