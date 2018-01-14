import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import processor from './markdown-processor'
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
        document.title = response.split(/\n/)[0].slice(1)
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
        <div className='article'>
          {processor.processSync(body).contents}
        </div>
      </Container>
    )
  }
}

export default Post
