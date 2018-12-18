import React, { Component } from 'react';
import styles from './Home.less'
import autumn from '../../img/antumn.webp'
import Lotus from '../../img/logo.png'
import request from '../../request'

class App extends Component {
	constructor() {
		super()
		this.state = {
			data: []
		}

	}
	componentWillMount() {
		this.getData()

	}
	getData() {
		request('get', '/directory')
			.then(res => {
				let _data = res.data
				_data.forEach(v => {
					v.fold = true
				})
				this.setState({
					data: _data
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
					<div className={styles.logo}></div>
				</header>
				<div className={styles.content}>
					{
						data.map((item, index) => {
              let path = item.path
							return (
								<div key={index}>
									<div className={styles.title} onClick={this.toggle.bind(this, index)}>{item.item_name}</div>
									<ul className={item.fold ? styles.fold : styles.unfold}>
										{
											item.list.map((article, index) => {
												return (
													<li key={index}>
														<a href={path+'?id='+article._id}>
															<img src={autumn} alt="" />
															<p>{article.title || article.album_name}</p>
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
