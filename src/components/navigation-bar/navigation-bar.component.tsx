import * as React from 'react';
import { uiConfig } from '../../firebaseconfig';
import * as firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

const  logo = require('../../assets/logo-white.svg');

export const NavigationBar = () => (
  <div className="w-100 h3 flex ph3 pv2 white background-gradient_blue items-center justify-between">
    <img src={logo} alt="Bridge logo" className="w3"/>
    <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()}/>
  </div>
);
