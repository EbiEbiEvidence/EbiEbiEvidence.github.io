import React, { Component } from 'react'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import { Container, Header, Input, Menu, Segment } from 'semantic-ui-react'
import './Header.css'

class H extends Component {
  state = { activeItem: '/' }

  componentDidMount = () => {
    this.setState({
      activeItem: '/'
    })
  }

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.history.push(name)
  }

  render() {
    const { activeItem } = this.state

    return (
      <header>
        <Container>
          <Menu pointing secondary>
            <Menu.Item className='header-logo'>
              <Header as='h1'>@KilledByNLP</Header>
            </Menu.Item>
            <Menu.Menu position='right'>
              <Menu.Item name='/' active={activeItem === '/'} onClick={this.handleItemClick} as='span' >
                Home
              </Menu.Item>
              <Menu.Item name='posts' active={activeItem === 'posts'} onClick={this.handleItemClick} as='span' >
                Blog
              </Menu.Item>
            </Menu.Menu>
          </Menu>
        </Container>
      </header>
    )
  }
}

export default withRouter(H)
