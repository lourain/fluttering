import React, { Component } from 'react';
import styles from './Home.less'
import autumn from '../../img/antumn.webp'
import Lotus from '../../img/logo.png'

class App extends Component {
	constructor() {
		super()
		this.state = {
			broadcastFold: true,
			data: [
				{
					item_name: '游记',
					list: [
						{ article_title: '深秋于苏' },
						{ article_title: '深秋于苏深秋于苏深秋于苏' },
						{ article_title: '深秋于苏' },
					]
				},
				{
					item_name: '心情',
					list: [
						{ article_title: '深秋于苏' },
						{ article_title: '深秋于苏深秋于苏深秋于苏' },
						{ article_title: '深秋于苏' },
					]
				},
				{
					item_name: '图片',
					list: [
						{ article_title: '深秋于苏' },
						{ article_title: '深秋于苏深秋于苏深秋于苏' },
						{ article_title: '深秋于苏' },
					]
				}

			]
		}
		this.state.data.forEach(v => {
			v.fold = true
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

	}
	render() {
		const { data } = this.state

		return (
			<div className={styles.home}>
				<header>
					<p>风满楼</p>
					<img src={Lotus} alt="" />
				</header>
				<svg width='100' height='100'>
           <rect width='40' height='40' fill='red' rx='10' ry="10"/>
            <text fill='white'>
              <tspan x='0' y='10'>风</tspan>
              <tspan x='20' y='20'>满</tspan>
              <tspan x='0' y='40'>楼</tspan>
            </text>
          </svg>
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
														<p>{article.article_title}</p>
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
