import React, { Component } from 'react';
import styles from './Home.less'
import ClassItem from '../../component/classItem/classItem'
class App extends Component {
    constructor() {
        super()
        this.state = {
            broadcastFold:true
        }
    }
    render() {
        const {broadcastFold} = this.state
        return (
            <div className={styles.home}>
                <header>风满楼</header>
                <div className={styles.content}>
                    <ClassItem itemName={'游记'} broadcastFold={broadcastFold}/>
                    <ClassItem itemName={'心情'} broadcastFold={broadcastFold}/>
                </div>
            </div>
        )
    }
}

export default App;
