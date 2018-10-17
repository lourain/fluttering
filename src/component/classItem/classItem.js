import React, { Component } from 'react'
import autumn from '../../img/antumn.webp'
import styles from './classItem.less'

class classItem extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            fold: true,//是否收叠
        }
    }
    toggle() {
        this.setState({
            fold: !this.state.fold
        })
        console.log(this.state.fold);

    }
    render() {
        const { itemName } = this.props
        const { fold } = this.state
        return (
            <div>
                <div className={styles.title} onClick={this.toggle.bind(this)}>{itemName}</div>
                <ul className={!fold?styles.fold:styles.unfold}>
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
                {/* {
                    !fold ?
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
                        :
                        null
                } */}

            </div>
        )
    }
}

export default classItem