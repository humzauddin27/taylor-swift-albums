import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header'
import AlbumList from './src/components/AlbumList'

class App extends React.Component {
  render() {
    return (
    	<View style={{ flex: 1 }}> 
    		<Header text={"Albums"} />
    		<AlbumList />
    	</View>
    );
  }
}

export default App;