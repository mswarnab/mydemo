import React from 'react';
import {View,StyleSheet, Image} from 'react-native';
import { Dimensions } from 'react-native';

 
const App2=()=>{

      const width = Dimensions.get('window').width;
      const height = Dimensions.get('window').height;
    
  return (
      <View>
           <Image source={require('../assets/banner1.png')} style={{height:height-200,width}}/> 
      </View>
  )
}
 
const styles=StyleSheet.create({
  container: {

  }
})
 
export default App2;