import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import cv from './CV.pdf';
import './Header.css'

class Header extends Component {
  render() {
    return (
      <HeaderBuffer>
        <HeaderContent>
          <HeaderLink text="ABOUT" internalLink="/about"/>
          <HeaderLink text="PROJECTS" internalLink="/projects"/>
          <HeaderLink text="RESUME" externalLink={cv} target="_blank"/>
          <HeaderLink text="CONTACT" externalLink={"mailto:daniel.armstrong@cs.ox.ac.uk"} target="_top"/>
        </HeaderContent>
      </HeaderBuffer>
    );
  }
}

class HeaderBuffer extends Component {
  render() {
    return (
      <div className="HeaderWrapper">
        <div className="MobileHeader d-xs-none">
          DAN ARMSTRONG
        </div>
        <div className="d-none d-xs-inline">
          <div className="Header">
            {this.props.children}
          </div>
          <div className="Buffer">
            {this.props.children}
          </div>
          <div className="HeaderAnchor"/>
        </div>
      </div>
    );
  }
}

class HeaderContent extends Component {
  render() {
    return (
      <div className="HeaderContent" data-aos="header-out" data-aos-anchor=".HeaderAnchor"
           data-aos-anchor-placement="bottom-top" data-aos-duration="300" data-aos-offset="10">
        {this.props.children}
      </div>
    );
  }
}

class HeaderLink extends Component {
  render() {
    if (this.props.externalLink) {
      return (
        <span className="HeaderLink">
          <a href={this.props.externalLink} className="HeaderLinkBorder" target={this.props.target} rel="noopener noreferrer">
            {this.props.text}
            <span className="Top"/>
            <span className="Bottom"/>
            <span className="Left"/>
            <span className="Right"/>
          </a>
        </span>
      );
    }
    else {
      return (
        <span className="HeaderLink">
          <Link to={this.props.internalLink} className="HeaderLinkBorder">
            {this.props.text}
            <span className="Top"/>
            <span className="Bottom"/>
            <span className="Left"/>
            <span className="Right"/>
          </Link>
        </span>
      );
    }
  }
}

export default Header;
