import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import processor from './markdown-processor'
import {
  FacebookShareButton, FacebookIcon, FacebookShareCount,
  GooglePlusShareButton, GooglePlusIcon, GooglePlusShareCount,
  TwitterShareButton, TwitterIcon,
} from 'react-share'
import { HatenabookmarkButton } from 'react-social-sharebuttons'
import './Post.css'

class ShareButtons extends Component {
  render () {
    const { url, title, decodedUrl } = this.props
    console.log(window.location.href)
    return (
      <div className='shares'>
        <TwitterShareButton url={url} title={title}>
          <TwitterIcon size={32} round={true} />
        </TwitterShareButton>
        <FacebookShareButton url={decodedUrl} quote={title}>
          <FacebookIcon size={32} round={true} />
        </FacebookShareButton>
        <GooglePlusShareButton url={decodedUrl} title={title}>
          <GooglePlusIcon size={32} round={true} />
        </GooglePlusShareButton>
        <HatenabookmarkButton url={window.location.href} title={title}/>
      </div>
    )
  }
}

class Post extends Component {
  state = {
    title: '',
    date: '',
    body: '',
    id: '',
  }

  componentDidMount = () => {
    const { id, year, month } = this.props.match.params
    if (id.search(/[a-zA-Z0-9\-/]$/) != -1) {
      var dist = id
      if (year !== undefined && month !== undefined) {
        dist = year + '/' + month + '/' + id
        console.log(dist)
      }
      fetch('/post-sources/' + dist + '.md?d='+Math.random())
      .then(response => {
        return response.text()
      })
      .then(response => {
        this.setState({
          title: response.split(/\n/)[0].slice(1),
          date: response.split(/\n/)[1],
          body: response.split(/\n/).slice(2).join("\n"),
          id: dist
        })
        document.title = response.split(/\n/)[0].slice(1)
      })
    } else {
      this.setState({
        title: "Invalid Request",
        body: "Invalid Request"
      })
    }
  }

  render() {
    const { title, body, date, id, } = this.state
    const url = 'https://killedbynlp.github.io/posts/' + id + '/'
    const decodedUrl = 'https://killedbynlp.github.io/?p=posts/' + id + '/'
    return (
      <div>
        <Container>
          <div className='article'>
            <h1>{ title }</h1>
            <h3 style={{textAlign: 'right'}}><i>Posted on { date }</i></h3>
            <ShareButtons url={url} decodedUrl={decodedUrl} title={title} />
            {processor.processSync(body).contents}
            <div style={{margin: '10px 0', paddingTop: '40px'}}>
              <hr />
              {"1度でもシェアして頂けるととても喜びます。"}
              <ShareButtons url={url} decodedUrl={decodedUrl} title={title} />
            </div>
          </div>
        </Container>
        <div style={{marginTop: '200px', padding:'20px 0', background: '#444', color: '#fff'}}>
          <Container>
            <small>© 2017-2018 Kosui Iwasa</small>
          </Container>
        </div>
      </div>
    )
  }
}

export default Post
