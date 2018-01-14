import React, { Component } from 'react'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import { Container, Dropdown, Header, Input, Menu, Responsive, Segment } from 'semantic-ui-react'
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
          <Menu pointing secondary style={{position: 'relative'}}>
            <Menu.Item className='header-logo'>
              <Link to='/'><Header as='h1'>@KilledByNLP</Header></Link>
            </Menu.Item>
            <Responsive minWidth={769} as={Menu.Menu} position='right'>
              <Menu.Item name='/' active={activeItem === '/'} onClick={this.handleItemClick} as='span' >
                Home
              </Menu.Item>
              <Menu.Item name='/posts' active={activeItem === '/posts'} onClick={this.handleItemClick} as='span' >
                Blog
              </Menu.Item>
            </Responsive>
            <Responsive maxWidth={768} style={{position: 'absolute', right: '0'}}>
              <Dropdown item icon='content' style={{paddingRight: '0'}}>
                <Dropdown.Menu style={{left: '-100%'}}>
                  <Dropdown.Item>
                    <Link to='/'>Home</Link>
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <Link to='/posts'>Blog</Link>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Responsive>
          </Menu>
        </Container>
      </header>
    )
  }
}

export default withRouter(H)
