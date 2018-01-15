import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import processor from './markdown-processor'
import './Post.css'

class Post extends Component {
  state = {
    title: '',
    date: '',
    body: ''
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    if (!isNaN(id)) {
      fetch('/__posts/' + id + '.md')
      .then(response => {
        return response.text()
      })
      .then(response => {
        this.setState({
          title: response.split(/\n/)[0].slice(1),
          date: response.split(/\n/)[1],
          body: response.split(/\n/).slice(2).join("\n"),
        })
        document.title = response.split(/\n/)[0].slice(1)
      })
    } else {
      this.setState({
        body: "Invalid Request"
      })
    }
  }

  render() {
    const { title, body, date } = this.state

    return (
      <Container>
        <div className='article'>
          <h1>{ title }</h1>
          <h3 style={{textAlign: 'right'}}><i>Posted on { date }</i></h3>
          <div className='shares'>
            <a className="twitter-share-button"
              href="https://twitter.com/share"
              data-size="large"
              data-size="large"
              data-lang="ja"
              data-dnt="true">
            Tweet
            </a>
            <a href="http://b.hatena.ne.jp/entry/" className="hatena-bookmark-button" data-hatena-bookmark-layout="basic-label-counter" data-hatena-bookmark-lang="ja" title="このエントリーをはてなブックマークに追加"><img src="https://b.st-hatena.com/images/entry-button/button-only@2x.png" alt="このエントリーをはてなブックマークに追加" width="20" height="20" style={{border: 'none'}} /></a>
            <div className="fb-like"　data-layout="box_count"></div>
          </div>
          {processor.processSync(body).contents}
        </div>
      </Container>
    )
  }
}

export default Post
