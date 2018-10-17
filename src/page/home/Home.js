import React, { Component } from 'react';
import styles from './Home.less'
import autumn from '../../img/antumn.webp'
class App extends Component {
  render() {
    return (
      <div className={styles.home}>
        <header>风满楼</header>
        {/* <img src={chuan} alt=""/> */}
        <div className={styles.content}>
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
                <p>深秋于苏</p>
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
    )
  }
}

export default App;
