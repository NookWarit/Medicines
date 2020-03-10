import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PacmanIndicator } from "react-native-indicators";
import { MemoryRouter as Router, Route, Switch } from "react-router-native";
import Home from "./src/Home";
import Detail from './src/Detail';

export default function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/detail" component={Detail} />
    </Switch>
  </Router>
    // <View style={styles.container}>
    //   <Text>Open up App.js to start working on your app!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
