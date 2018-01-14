import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container, Header, Segment, Icon } from 'semantic-ui-react'

class Posts extends Component {
  state = {
    posts: []
  }
  componentDidMount = () => {
    fetch('/posts.json')
    .then(response => {
      return response.json()
    })
    .then(response => {
      this.setState({
        posts: response
      })
    })
  }
  render() {
    const { posts } = this.state

    return (
      <Container>
        <section style={{marginTop: '50px'}}>
          <Header as='h1'>
            新着の投稿一覧
          </Header>

          {posts.map((post) => (
            <Segment key={post.id}>
              <Link to={'/posts/' + post.id}>
                <h3>{post.title}</h3>
              </Link>
              <Icon name='calendar' />{post.date}
            </Segment>
          ))}
        </section>
      </Container>
    )
  }
}

export default Posts
