import React from "react";
import { StyleSheet, View } from "react-native";
import Assignment2 from "./components/assignment2";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Assignment2 />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
