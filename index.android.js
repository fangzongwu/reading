/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {
  Component
} from 'react';
import {
  AppRegistry
} from "react-native";
import ShowIndex from "./src/index";
export default class MyReading extends Component {
  render() {
    return (
      <ShowIndex />
    );
  }
}

AppRegistry.registerComponent('MyReading', () => MyReading);