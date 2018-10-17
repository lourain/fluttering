import React, { Component } from 'react'
import autumn from '../../img/antumn.webp'
import styles from './classItem.less'

class classItem extends Component {
    constructor(){
        super()
        this.state = {
            title:''
        }
    }

    render() {
        const {itemName} = this.props
        
        return (
            <div>
                <div className={styles.title}>{itemName}</div>
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
                </ul>
            </div>
        )
    }
}

export default classItem