import React, { Component } from 'react';
import styles from './Home.less'
import autumn from '../../img/antumn.webp'
import Lotus from '../../img/logo.png'
import request from '../../request'
class App extends Component {
    constructor() {
        super()
        this.state = {
            // data: [
            //     {
            //         item_name: '游记',
            //         list: [
            //             { title: '深秋于苏' },
            //             { title: '深秋于苏深秋于苏深秋于苏' },
            //             { title: '深秋于苏' },
            //         ]
            //     },
            //     {
            //         item_name: '心情',
            //         list: [
            //             { title: '深秋于苏' },
            //             { title: '深秋于苏深秋于苏深秋于苏' },
            //             { title: '深秋于苏' },
            //         ]
            //     },
            //     {
            //         item_name: '图片',
            //         list: [
            //             { title: '深秋于苏' },
            //             { title: '深秋于苏深秋于苏深秋于苏' },
            //             { title: '深秋于苏' },
            //         ]
            //     }

            // ]
            data:[]
        }
        
    }
    componentWillMount(){
        this.getData()
        
    }
    getData() {
        request('get','/directory')
            .then(res=>{
                let _data = res.data
                _data.forEach(v=>{
                    v.fold = true
                })
                this.setState({
                    data:_data
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
        const { data } = this.state
        
        return (
            <div className={styles.home}>
                <header>
                    <p>风满楼</p>
                    {/* <img src={Lotus} alt="" /> */}
                    <div className={styles.logo}></div>
                </header>
                <div className={styles.content}>
                    {
                        data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <div className={styles.title} onClick={this.toggle.bind(this, index)}>{item.item_name}</div>
                                    <ul className={item.fold ? styles.fold : styles.unfold}>
                                        {
                                            item.list.map((article, index) => {
                                                return (
                                                    <li key={index}>
                                                        <a href="/detail">
                                                            <img src={autumn} alt="" />
                                                            {/* <div className="img" styles={{backgroundImage:'require('+autumn+')'}}></div> */}
                                                            <p>{article.title||article.album_name}</p>
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

export default App;
