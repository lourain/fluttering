import React, { Component } from 'react'
import style from './article.less'
import marked from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/tomorrow.css';
import request from '../../request'
import {connect} from 'react-redux'
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

class Article extends Component {
	constructor() {
    super()
    this.state = {
      article:[]
    }
	}
  componentDidMount() {
    // if (typeof window === 'undefined') {
    //   return false
    // }
    if(window.__initData__){
      let data = window.__initData__.data
      // data.content = marked(data.content || "", { sanitize: true })
      this.setState({
        article:data
      })
    }else{
      this.getArticle()    
    }

  }
  getArticle() {
    let id = window.location.search.slice(4)
    request('get',`/api/detail?id=${id}`)
      .then(res=>{
        res.data.content = marked(res.data.content || "", { sanitize: true })
        this.setState({
          article:res.data
        })
      })
  }
	render() {
    let {receive_data} = this.props
    let article = receive_data.data?receive_data.data:this.state.article
    
		return (
			<div className={style.article}>
        <h1>{article.title}</h1>
        <div className={style.time}>{article.time}</div>
        <div className={style.markdown} dangerouslySetInnerHTML={{__html:article.content}}></div>
			</div>
		)
	}
}
const mapStateToProps = state=>{
  return {
    receive_data: state.receive_data
  }
}
export default connect(mapStateToProps)(Article)