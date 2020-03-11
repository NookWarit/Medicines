import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MemoryRouter as Router, Route, Switch } from "react-router-native";
import Home from "./src/Home";
import Detail from './src/Detail';
import * as Font from "expo-font";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
  }

    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/detail" component={Detail} />
          </Switch>
      </Router>
      );
    }   
} 
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
