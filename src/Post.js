import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import ReactMarkdown from 'react-markdown'
import './Post.css'

class Post extends Component {
  state = {
    body: ''
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    if (!isNaN(id)) {
      fetch('/posts/' + id + '.md')
      .then(response => {
        return response.text()
      })
      .then(response => {
        this.setState({
          body: response
        })
      })
    } else {
      this.setState({
        body: "Invalid Request"
      })
    }
  }

  render() {
    const { body } = this.state

    return (
      <Container>
        <ReactMarkdown source={body} escapeHtml={false} className='article' />
      </Container>
    )
  }
}

export default Post
