import React, { Component } from 'react'
import { BrowserRouter, Route, Link, withRouter } from 'react-router-dom'
import { Container, Header, Icon, Image, Label, Segment } from 'semantic-ui-react'

class DateSegment extends Component {
  render() {
    const { title, date, children } = this.props
    return (
      <Segment>
        <Header as='h3' style={{marginBottom: '0.5rem'}}>
          { title }
        </Header>
        <p style={{marginBottom: '0.5rem'}}>
          <Icon name='calendar' />
          { date }
        </p>
        { children }
      </Segment>
    )
  }
}

class Home extends Component {
  componentDidMount() {
    let l = window.location
    if (l.search) {
      var q = {}
      decodeURIComponent(l.search.slice(1)).split('&').forEach(function(v) {
        var a = v.split('=')
        q[a[0]] = a.slice(1).join('=').replace(/~and~/g, '&')
      })
      if (q.p !== undefined) {
        this.props.history.push(
          l.pathname.slice(0, -1) + (q.p || '') +
          (q.q ? ('?' + q.q) : '') +
          l.hash
        )
      }
    }
  }
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
        <section className='gradient-green white-text'>
          <Container>
            <Header as='h1'>職歴</Header>
            <DateSegment
              title='株式会社ドリコム'
              date='2017/10 - 現在'>
              機械学習エンジニア アルバイト
            </DateSegment>
            <DateSegment
              title='ウォンテッドリー株式会社'
              date='2017/06 - 2017/08'>
              <div>
                <p>
                  Wantedly Peopleチーム<br />機械学習エンジニア インターン
                </p>
                <p>
                  <Label>推薦システム</Label>
                  <Label>協調フィルタリング</Label>
                  <Label>Python</Label>
                  <Label>Docker</Label>
                  <Label>golang</Label>
                </p>
              </div>
            </DateSegment>
            <DateSegment
              title='エッジコンサルティング株式会社'
              date='2016/10 - 2017/04'>
              <div>
                <p>
                  機械学習エンジニア アルバイト
                </p>
                <p>
                  <Label>文書分類</Label>
                  <Label>オンライン学習</Label>
                  <Label>AROW</Label>
                </p>
              </div>
            </DateSegment>
            <DateSegment
              title='マッチングッド株式会社'
              date='2014/10 - 2017/05'>
              <div>
                <p>
                  フロントエンド/バックエンド エンジニア アルバイト
                </p>
                <p>
                  <Label>PHP</Label>
                  <Label>Laravel</Label>
                  <Label>MySQL</Label>
                </p>
              </div>
            </DateSegment>
          </Container>
        </section>
        <section className='gradient-red white-text'>
          <Container>
            <Header as='h1'>受賞</Header>
            <DateSegment
              title='DeNA サマーインターンシップ 新規サービス開発コース'
              date='2017/08'>
              優勝
            </DateSegment>
            <DateSegment
              title='株式会社エイチーム エンジニアコース'
              date='2017/09'>
              マインド賞(個人優秀賞)
            </DateSegment>
          </Container>
        </section>
        <section className='gradient-blue white-text'>
          <Container>
            <Header as='h1'>制作物</Header>
            <Segment>
              <Header as='h3'>
                <a href='https://github.com/KilledByNLP/twitter-icon-rotator-chrome-extension'>twitter-icon-rotator-chrome-extension</a> - Oct 2017
              </Header>
              <p>
                twitter.com 上に表示されたアイコンを回転させるGoogle Chrome 拡張機能です。
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

export default withRouter(Home)
