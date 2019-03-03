import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, Button} from 'react-native';


class Home extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Button title='Hi Click me!' block={true} onPress={()=>this.props.navigation.navigate('systemProgrammingScreen')} />
      </View>
    );
  }
}

const styles=StyleSheet.create({
  container:{
    backgroundColor:'#455a64',
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  }
});

export default Home;