import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Header from './Header.js'
import Home from './Home.js'
import Posts from './Posts.js'
import Post from './Post.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Home} />
            <Route exact path='/posts' component={Posts} />
            <Route path='/posts/:id' component={Post} />
          </div>
        </BrowserRouter>
      </div>
    )
  }
}

export default App
