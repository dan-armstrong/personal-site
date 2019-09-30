import React, { Component } from 'react';
import link from './Arrow.png';
import './Arrow.css'

export class ArrowLink extends Component {
  render() {
    return (
      <div className="ArrowLink" onClick={this.props.action}>
        {this.props.text}
        <img src={link} alt=""/>
      </div>
    );
  }
}
