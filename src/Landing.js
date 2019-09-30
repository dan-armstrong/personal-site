import React, { Component } from 'react';
import Header from './Header';
import './Landing.css'

class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {animate: "page-enter"};
  }

  componentDidMount() {
    setTimeout(function() {
      this.setState({animate: "page-enter page-enter-active"});
    }.bind(this));
  }

  render() {
    return (
      <div className={"Landing"}>
        <Logo/>
        <Header/>
      </div>
    );
  }
}

class Logo extends Component {
  render() {
    var svgString = `
    <svg class="Logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="86.0385356 294.4166667 467.038632 56.6666667">
      <defs>
        <path d="M95.37 295.42v43.5h6.5c15.89.89 23.78-5.42 23.67-18.92-.09-11.21-6.04-16.92-22.52-17.14-3.37-.04-7.86.14-13.48.56" id="D1"/>
        <path d="M104.71 348.08l.33-37.16c7.33-.56 10.89 2.77 10.67 10-.23 7.22-3.78 10.55-10.67 10h-18" id="D2"/>
        <path d="M167.2 347.13l-14.75-43.75h-13l-13.25 43.75" id="A1"/>
        <path d="M168.7 339h-14.5l-2.5-6.87h-11.5l-1.55 6.79-15.45.08" id="A2"/>
        <path d="M141.2 329.47l5.5-19.84 3.25 14.75H135.2" id="A3"/>
        <path d="M193.4 297.03l.75 31.25-13.25-24.9h-12.75l.55 42.15" id="N1"/>
        <path d="M176.65 343.78v-29.5L189.9 339h12.25v-41.97" id="N2"/>
        <path d="M258.2 346.87l-14.75-43.75h-13l-13.25 43.75" id="A4"/>
        <path d="M259.7 338.75h-14.5l-2.5-6.88h-11.5l-1.55 6.8-15.45.08" id="A5"/>
        <path d="M232.2 329.22l5.5-19.85 3.25 14.75H226.2" id="A6"/>
        <path d="M294.12 344.25c-9.58-13.93-14.37-20.89-14.37-20.87 0 .01 4.18-3.78 4.95-5.14.78-1.36.98-2.34 1.05-5.39.17-8.12-8.51-11.37-26.05-9.73v40.66" id="R1"/>
        <path d="M257.57 338.75h11.4v-12.41h2.8l7.4 12.41h16.2" id="R2"/>
        <path d="M268.97 322.54v-12c4.67-.13 6.87 1.13 6.6 3.8-.27 2.67-2.47 4.07-6.6 4.2h-3.2" id="R3"/>
        <path d="M333.81 343.56v-40.44h-13l-7.4 25.44-7.4-25.44h-12.6v41.13" id="M1"/>
        <path d="M324.81 344.25v-30.69l-7.2 25.19h-9l-7.4-25.19v30" id="M2"/>
        <path d="M340.05 332.5l11.38-.75c1.75-.17 2.87-.83 3.37-2s-.29-2.42-2.37-3.75c-2.53-1.02-4.5-1.9-5.92-2.61-1.6-.82.29.01-1.08-.52-3.88-1.5-7.13-8.37-4.63-14.12 1.67-3.83 7.5-5.83 17.5-6l8-.35" id="S1"/>
        <path d="M364.43 309.53l-11.38.75c-1.75.16-2.87.83-3.37 2-.5 1.16.29 2.41 2.37 3.75 2.52 1.02 4.49 1.89 5.92 2.61 1.6.81-.29-.02 1.08.51 3.88 1.5 7.13 8.38 4.63 14.13-1.67 3.83-7.5 5.83-17.5 6l-8 .34" id="S2"/>
        <path d="M398.59 303.54h-30.6v8h8.6v32" id="T1"/>
        <path d="M372.99 338.94h13.2v-27.6h8.4v-13.4" id="T2"/>
        <path d="M435.14 344.46c-9.58-13.94-14.37-20.89-14.37-20.88 0 .02 4.18-3.77 4.95-5.13.78-1.36.98-2.35 1.05-5.39.17-8.13-8.51-11.37-26.05-9.73v40.65" id="R4"/>
        <path d="M398.59 338.96h11.4v-12.41h2.8l7.4 12.41h16.2" id="R5"/>
        <path d="M409.99 322.75v-12c4.67-.14 6.87 1.13 6.6 3.8-.27 2.66-2.47 4.06-6.6 4.2h-3.2" id="R6"/>
        <path d="M436.39 337.13c2.37.4 5.29.87 8.75 1.42 1.88.29 4.4.38 7.57.25 4.09-.16 7.92-2.06 10.53-5.21 2.15-2.6 3.52-6.42 4.1-11.46 1.35-11.65-8.85-19.76-17.6-19.61-8.75.16-19.6 7.91-17.4 20.23 2.2 12.32 9.6 14.08 12.8 18.78" id="O1"/>
        <path d="M441.79 312.48c2.59-.63 4.6-1.1 6.05-1.41.97-.22 2.31-.12 4.03.27 1.23.29 2.34.97 3.15 1.93 1.08 1.28 1.77 3.68 2.06 7.2.57 6.66-3.68 11.31-7.33 11.22-3.64-.09-8.16-4.53-7.25-11.58.92-7.05 5.4-9.86 6.74-12.55" id="O2"/>
        <path d="M498.69 296.61l.75 31.25-13.25-24.9h-12.75l.55 42.15" id="N3"/>
        <path d="M481.94 343.36v-29.5l13.25 24.72h12.25v-41.97" id="N4"/>
        <path d="M546.41 299.62l-5.33 12.67-5.34-1.5c-8.55-.78-12.5 2.77-11.83 10.66.67 7.89 4.78 11.06 12.33 9.5l-.5-5.66h-6.33v-7.34h20.67" id="G1"/>
        <path d="M544.74 311.29c-.02 16.86-.02 25.41 0 25.66.05.38 1 1.34-9.16 2.5-10.17 1.17-13.19-.91-16.65-4.39-7.18-7.22-6.03-20.81-.85-26.44 5.11-5.56 13.77-6.78 26-3.67l4.4 2.67" id="G2"/>
      </defs>
      <use xlink:href="#D1" fill-opacity="0"/>
      <use xlink:href="#D2" fill-opacity="0"/>
      <use xlink:href="#A1" fill-opacity="0"/>
      <use xlink:href="#A2" fill-opacity="0"/>
      <use xlink:href="#A3" fill-opacity="0"/>
      <use xlink:href="#N1" fill-opacity="0"/>
      <use xlink:href="#N2" fill-opacity="0"/>
      <use xlink:href="#A4" fill-opacity="0"/>
      <use xlink:href="#A5" fill-opacity="0"/>
      <use xlink:href="#A6" fill-opacity="0"/>
      <use xlink:href="#R1" fill-opacity="0"/>
      <use xlink:href="#R2" fill-opacity="0"/>
      <use xlink:href="#R3" fill-opacity="0"/>
      <use xlink:href="#M1" fill-opacity="0"/>
      <use xlink:href="#M2" fill-opacity="0"/>
      <use xlink:href="#S1" fill-opacity="0"/>
      <use xlink:href="#S2" fill-opacity="0"/>
      <use xlink:href="#T1" fill-opacity="0"/>
      <use xlink:href="#T2" fill-opacity="0"/>
      <use xlink:href="#R4" fill-opacity="0"/>
      <use xlink:href="#R5" fill-opacity="0"/>
      <use xlink:href="#R6" fill-opacity="0"/>
      <use xlink:href="#O1" fill-opacity="0"/>
      <use xlink:href="#O2" fill-opacity="0"/>
      <use xlink:href="#N3" fill-opacity="0"/>
      <use xlink:href="#N4" fill-opacity="0"/>
      <use xlink:href="#G1" fill-opacity="0"/>
      <use xlink:href="#G2" fill-opacity="0"/>
    </svg>
    `;
    return (
      <div dangerouslySetInnerHTML={{ __html: svgString }} />
    );
  }
}

export default Landing;
