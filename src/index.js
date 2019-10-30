import react,{component} from 'react';
import{
  Platform,
  StyleSheet,
  Text,
  View
}from 'react-native';

import api from ''

export default class App extends component{
  render(){
    return(
      <view style={StyleSheet.container}>

      <Button onPress={this.sigIn } title = "conectar" />

      </view>
    );
  }
}

const styles = styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
})