import React, {Component} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createStackNavigator, createAppContainer, StackNavigator} from 'react-navigation';

import {Actions, Router, Screen} from 'react-native-router-flux';

import Home from './components/homescreen/Home'
import SystemProgramming from './components/subjectScreen/SystemProgramming'

/*class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={{fontSize:24}}> StudyCom </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});*/
const MainApp = createStackNavigator({
  homeScreen:{screen: Home},
  systemProgrammingScreen:{screen: SystemProgramming}
});

const App=createAppContainer(MainApp);

export default App;