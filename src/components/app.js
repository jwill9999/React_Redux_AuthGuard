import React, { Component } from 'react';
import Resource from './resource';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          {this.props.children}
      </div>
    );
  }

}
