import React, { Component } from 'react'
import autumn from '../../img/antumn.webp'
import styles from './classItem.less'

class classItem extends Component {
    constructor() {
        super()
        this.state = {
            fold: true,//是否收叠

        }
    }
    toggle() {
        this.setState({
            fold: !this.state.fold
        })
    }
    render() {
        const { itemData, broadcastFold } = this.props
        const { fold } = this.state
        console.log(fold)
        return (
            <div>
                <div className={styles.title} onClick={this.toggle.bind(this)}>{itemData.item_name}</div>
                <ul className={fold  ? styles.fold : styles.unfold}>
                    {
                        itemData.list.map((article,index) => {
                            return (
                                <li key={index}>
                                    <a href="/detail">
                                        <img src={autumn} alt="" />
                                        <p>{article.article_title}</p>
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

export default classItem