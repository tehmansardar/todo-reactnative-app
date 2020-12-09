import React, {useState} from 'react'
import {View, Text, StyleSheet, FlatList, Alert} from 'react-native'
import Header from './components/Header'
import AddItem from './components/AddItem'
import ListItem from './components/ListItem'
import uuid from 'uuid/v4'

const App = () => {
  const [items, setItems] = useState([
    {id: uuid(), text:'Milk'},
    {id: uuid(), text:'Eggs'},
    {id: uuid(), text:'Bread'},
    {id: uuid(), text:'Juice'},
  ])

  const addItem = text=>{
    if(!text){
      Alert.alert('Error', 'Please enter an item', {text:'Ok'});
    }else{
      setItems(prevItems=>{
        return[{id:uuid(), text}, ...prevItems]
      })
    }
  }

  const deleteItem = id=>{
    setItems( prevItems=>{
      return prevItems.filter(item=>item.id != id)
    })
  }

  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
      <AddItem addItem={addItem}/>
      <FlatList 
        data={items}
        renderItem={({item}) => <ListItem item={item} deleteItem={deleteItem} /> }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ffff'
  },

})

export default App
