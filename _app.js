import React from 'react';
import App, { Container } from 'next/app';
import Router from 'next/router';
import UserContext from '../components/UserContext';

export default class MyApp extends App {
  state = {
    user: null
  };

  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidMount = () => {
    const user = localStorage.getItem('user');
    const repos = localStorage.getItem('repos');
    const commits = localStorage.getItem('commits');
    const sha = localStorage.getItem('sha');

    // if (user) {
    //   this.setState({
    //     user
    //   });
    // } else {
    //   Router.push('/');
    // }
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <UserContext.Provider value={{ user: this.state.user, commits: this.state.commits, repos: this.state.repos, sha: this.state.sha}}>
          <Component {...pageProps} />
        </UserContext.Provider>
      </Container>
    );
  }
}