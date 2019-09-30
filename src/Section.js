import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import leftArrow from './LeftArrow.png';
import rightArrow from './RightArrow.png';
import './Section.css'

class SectComp extends Component {
  breakouts(def) {
    if (this.props.breakout) {return " " + this.props.breakout}
    return " " + def
  }
}

export class Section extends SectComp {
  render() {
    return (
      <div className={"Section row " + (this.props.hideMobile ? "d-none d-xs-flex" : "")}>
        <SectionTitle text={this.props.title}/>
        <SectionContent>
          {this.props.children}
        </SectionContent>
      </div>
    );
  }
}

export class SectionTitle extends SectComp {
  render() {
    return (
      <h1 className={"SectionTitle" + this.breakouts("col-sm-4")}>
        {this.props.text}
      </h1>
    );
  }
}

export class SectionContent extends SectComp {
  render() {
    return (
      <div className={"SectionContent" + this.breakouts("col-sm-8 col-lg-7")}>
        {this.props.children}
      </div>
    );
  }
}

export class SectionLink extends SectComp {
  render() {
      if (this.props.link) {
        return (
          <a className="SectionLink" href={this.props.link} target="_blank" rel="noopener noreferrer">
            {this.props.children}
          </a>
        );
      }
      else {
        return (
          <span className="SectionLink" onClick={this.props.action}>
            {this.props.children}
          </span>
        );
      }
  }
}


export class SubSection extends SectComp {
  render() {
    return (
      <div className={"SubSection " + (this.props.title && "TitledSubSection")}>
        {this.props.title && (<SubSectionTitle date={this.props.date} text={this.props.title}/>)}
        <SubSectionContent>
          {this.props.children}
        </SubSectionContent>
      </div>
    );
  }
}

export class SubSectionTitle extends SectComp {
  render() {
    if (this.props.date) {
      return (
        <div className="row">
          <div className="SubSectionTitle col-xxs-8">
            {this.props.text}
          </div>
          <div className="SubSectionTitleDate col-xxs-4 d-none d-xxs-inline-block">
            {this.props.date}
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="SubSectionTitle">
          {this.props.text}
        </div>
      );
    }
  }
}

export class SubSectionContent extends SectComp {
  render() {
    return (
      <div className="SubSectionContent">
        {this.props.children}
      </div>
    );
  }
}

export class ImageSection extends SectComp {
  render() {
    return (
      <div className="Section row">
        <SectionTitle text={this.props.title} breakout="col-sm-4 col-md-3"/>
        <SectionContent breakout="col-sm-8 col-md-9">
          {this.props.children}
        </SectionContent>
      </div>
    );
  }
}

export class ImageSubSection extends SectComp {
  render() {
    if (this.props.flip) {
      return (
        <div className="row ImageSubSection Left">
          <ImageSubSectionLabel title={this.props.title} flip={this.props.flip} internalLink={this.props.internalLink} externalLink={this.props.externalLink}>
            {this.props.children}
          </ImageSubSectionLabel>
          <ImageSubSectionImg link={this.props.image}>
            {this.props.children}
          </ImageSubSectionImg>
        </div>
      );
    }
    else {
      return (
        <div className="row ImageSubSection Right">
          <ImageSubSectionImg link={this.props.image}>
            {this.props.children}
          </ImageSubSectionImg>
          <ImageSubSectionLabel title={this.props.title} flip={this.props.flip} internalLink={this.props.internalLink} externalLink={this.props.externalLink}>
            {this.props.children}
          </ImageSubSectionLabel>
        </div>
      );
    }
  }
}

export class ImageSubSectionImg extends SectComp {
  render() {
    return (
      <img className="ImageSubSectionImg col-xxs-12 col-xs-8 col-sm-12 col-md-8" src={this.props.link} alt="Project"/>
    );
  }
}

export class ImageSubSectionLabel extends SectComp {
  render() {
    var label;
    if (this.props.flip) {
      label = (
        <>
          <div className="ImageSubSectionTitle">
            {this.props.title}
            <img src={leftArrow} alt="" className="d-none d-xs-inline"/>
          </div>
          <SubSectionContent>
            {this.props.children}
          </SubSectionContent>
        </>
      );
    }
    else {
      label = (
        <>
          <div className="ImageSubSectionTitle">
            <div className="ArrowRotator">
              <img src={rightArrow} alt="" className="d-none d-xs-inline"/>
            </div>
            {this.props.title}
          </div>
          <SubSectionContent>
            {this.props.children}
          </SubSectionContent>
        </>
      );
    }

    if (this.props.internalLink) {
      if (this.props.flip) {
        return (
          <Link to={this.props.internalLink} className="ImageSubSectionLabel Left col-xxs-12 col-xs-4 col-sm-12 col-md-4">
            {label}
          </Link>
        );
      }
      else {
        return (
          <Link to={this.props.internalLink} className="ImageSubSectionLabel Right col-xxs-12 col-xs-4 col-sm-12 col-md-4">
            {label}
          </Link>
        );
      }
    }
    else {
      if (this.props.flip) {
        return (
          <a href={this.props.externalLink} target="_blank" className="ImageSubSectionLabel Left col-xxs-12 col-xs-4 col-sm-12 col-md-4" rel="noopener noreferrer">
            {label}
          </a>
        );
      }
      else {
        return (
          <a href={this.props.externalLink} target="_blank" className="ImageSubSectionLabel Right col-xxs-12 col-xs-4 col-sm-12 col-md-4" rel="noopener noreferrer">
            {label}
          </a>
        );
      }
    }
  }
}
