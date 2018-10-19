import React, { Component } from 'react';
import styles from './Home.less'
import autumn from '../../img/antumn.webp'


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
		console.log(new_data[index].fold)

	}
	render() {
		const { data } = this.state

		return (
			<div className={styles.home}>
				<header>风满楼</header>
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
			</div>
		)
	}
}

export default App;
