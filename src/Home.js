import React, { Component } from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'
import { Container, Header, Icon, Image, Label, Segment } from 'semantic-ui-react'

class Home extends Component {
  render() {
    return (
      <div>
        <section className='hero'>
          <Container>
            <Header as='h1'>{"Hello! I'm Kosui Iwasa"}</Header>
            <Header as='h2'>Web & Machine Learning Engineer</Header>
            <a href='https://twitter.com/KilledByNLP'><Icon name='twitter' size='huge' /></a>
            <a href='https://github.com/KilledByNLP'><Icon name='github' size='huge' /></a>
          </Container>
        </section>
        <section className='gradient-1 white-text'>
          <Container>
            <Header as='h1'>Awards</Header>
            <Segment>
              <Header as='h3'>
                DeNA サマーインターンシップ 新規サービス開発コース - Aug 2017
              </Header>
              優勝
            </Segment>
            <Segment>
              <Header as='h3'>
                株式会社エイチーム エンジニアコース - Sep 2017
              </Header>
              マインド賞(個人優秀賞)受賞
            </Segment>
          </Container>
        </section>
        <section className='gradient-2 white-text'>
          <Container>
            <Header as='h1'>Products</Header>
            <Segment>
              <Header as='h3'>
                <a href='https://github.com/KilledByNLP/twitter-icon-rotator-chrome-extension'>twitter-icon-rotator-chrome-extension</a> - Oct 2017
              </Header>
              <p>
                This is a chrome extension to make avatars on twitter.com rotate! It works not only on twitter.com, but also on TweetDeck.
              </p>
              <p>
                各種メディアにて掲載<br />
                <a href='http://nlab.itmedia.co.jp/nl/articles/1710/26/news084.html' target='_blank'>
                Twitterのアイコンを回転させたい人に朗報　Twitterのアイコンを回転させるChrome拡張が登場 - ねとらぼ
                </a><br />
                <a href='https://forest.watch.impress.co.jp/docs/serial/yajiuma/1088039.html' target='_blank'>
                “Twitter”のアイコンがぐるぐる回るだけのGoogle Chrome拡張機能が静かなブーム？ - やじうまの杜 - 窓の杜
                </a><br />
              </p>
              <p>
                <Label>JavaScript</Label>
              </p>
            </Segment>
            <Segment>
              <Header as='h3'>
                <a href='https://github.com/KilledByNLP/UNKO'>UNKO</a> - Nov 2017
              </Header>
              <p>
                Useless Deep Learning Framework for Python
              </p>
              <p>
                <Label>Python</Label>
              </p>
            </Segment>
            <Segment>
              <Header as='h3'>
                <a href='http://kurorekishi.net'>†闇†シェアリング</a> - Sep 2016
              </Header>
              <p>
                恥ずかしい黒歴史、つらい人間関係、会社や学校、家族や恋愛の闇。
                そんな闇は、†闇†シェアリングで吐き出しませんか？
              </p>
              <p>
                <Label>Riot.js</Label>
                <Label>Laravel 5.1</Label>
              </p>
            </Segment>
          </Container>
        </section>
      </div>
    )
  }
}

export default Home
