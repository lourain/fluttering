import React, { Component } from 'react'
import style from './article.less'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/brown-paper.css';
import request from '../../request'
marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  highlight: function(code, lang) {
    if (lang && hljs.getLanguage(lang)) {
      return hljs.highlight(lang, code, true).value;
    } else {
      return hljs.highlightAuto(code).value;
    }
  }
});

export default class Article extends Component {
	constructor() {
    super()
    this.state = {
      article:[]
    }
	}
  componentWillMount() {
    let id = window.location.search.slice(4)
    this.getArticle(id)    

  }
  getArticle(id) {
    request('get',`/api/detail?id=${id}`)
      .then(res=>{
        res.data.content = marked(res.data.content || "", { sanitize: true })
        this.setState({
          article:res.data
        })
      })
  }
	render() {
    const {article} = this.state

		return (
			<div className={style.article}>
        <h1>{article.title}</h1>
        <div className={style.time}>{article.time}</div>
        <div className={style.markdown} dangerouslySetInnerHTML={{__html:article.content}}></div>
			</div>
		)
	}
}