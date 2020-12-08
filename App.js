import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native'
const App = () => {
  return (
    <View style={styles.container}>
      <Text style={{color:'darkslateblue', fontSize:30}}>Hello world</Text>
      <Image style={styles.img} source={{uri:'https://post.greatist.com/wp-content/uploads/sites/3/2020/02/325466_1100-1100x628.jpg'}} />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  img:{
    width:100,
    height:100,
    borderRadius: 100/2
  }

})

export default App
