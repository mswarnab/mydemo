import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dimensions } from 'react-native';
import App2 from './screenContainers/App2';



export default function App() {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  console.log(width, 'and ', height)
  console.log('Swarnab')
  return (
    <View style={styles.container}>
      {/* <View style={{backgroundColor: "lightgreen",width ,height:height - 250,borderBottomRightRadius:100}}>

      </View>
      <View style={{backgroundColor: "lightgreen",width,height: 250}}>

      </View>
      <View style={{backgroundColor: "white",justifyContent:'center',alignItems:'center' ,width,height:250 + 76.5 ,borderTopLeftRadius:100,position:'absolute',bottom:0}}>
        <TouchableOpacity style={{backgroundColor:'skyblue',borderRadius:50,paddingVertical:15,paddingHorizontal:100}}>
          <Text style={{color:'white',fontSize:16}}>Login</Text>
        </TouchableOpacity>
      </View> */}
      <App2 />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  
    backgroundColor: '#fff',

  },
});
