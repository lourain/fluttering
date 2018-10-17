import React, { Component } from 'react';
import styles from './Home.less'
import ClassItem from '../../component/classItem/classItem'
class App extends Component {
    constructor() {
        super()
        this.state = {

        }
    }
    toggle(boolean){
        console.log(boolean);            
    }
    render() {
        // console.log(this);
        
        return (
            <div className={styles.home}>
                <header>风满楼</header>
                <div className={styles.content}>
                    <ClassItem itemName={'游记'}/>
                    <ClassItem itemName={'心情'}/>
                </div>
            </div>
        )
    }
}

export default App;
