import React from 'react';
import {View} from "react-native";
import CardList from "./components/CardList";

const styles = StyleSheet.create({
  text1: {
    backgroundColor: "magenta",
    color: "cyan"
  }
})

class App extends React.Component {
  render() {
    return (
      <View>
        <CardList />
      </View>
    );
  }
}

export default App;
