import React, { Component } from 'react';
import './App.css';
import WelcomeMessage from '../Settings/WelcomeMessage';
import styled from 'styled-components';
import AppLayout from './AppLayout';
import Abar from './Abar';
import {AppProvider} from './AppProvider';
import Settings from '../Settings';
import ConfirmButton from '../Settings/ConfirmButton';
import Content from "../Shared/Content"

class App extends Component {
  render () {
    return(
      <AppLayout>
        <AppProvider>
          <Abar/>
          <Content>
            <Settings/>
          </Content>
        </AppProvider>
      </AppLayout>
    );
  };
}

export default App;
