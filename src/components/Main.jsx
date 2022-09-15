import React from 'react'
import Constants from 'expo-constants'
import { Text, View} from 'react-native'
import SearchBar from './SearchBar.jsx'

const Main = () => {
  return (
    <View style={{ marginTop: Constants.statusBarHeight, flexGrow: 1}}>
      <Text>Search a term in the search bar</Text>
      <SearchBar />
    </View>
  )
}

export default Main