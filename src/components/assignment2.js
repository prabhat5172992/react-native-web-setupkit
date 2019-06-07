import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  ActivityIndicator
} from "react-native";

export default class Assignment2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  componentDidMount() {
    fetch("http://192.168.1.103:3000/products")
      .then(response => response.json())
      .then(result => this.setState({ products: result }))
      .catch(err => console.log("An error occured:", err));
  }

  render() {
    return (
      <View style={styles.container}>
        {!this.state.products.length ? (
          <React.Fragment>
            <ActivityIndicator size="large" color="#0000ff" />
            <Text> Loading..... </Text>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Text style={styles.productTitle}> Products Information </Text>
            <FlatList
              data={this.state.products}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between"
                  }}
                >
                  <View
                    style={{
                      flex: 2,
                      alignItems: "flex-start",
                      marginVertical: 5
                    }}
                  >
                    <Text style={styles.productsText}>{item.id}</Text>
                  </View>
                  <View
                    style={{
                      flex: 6,
                      alignItems: "flex-start",
                      marginVertical: 5
                    }}
                  >
                    <Text style={styles.productsText}>{item.productname}</Text>
                  </View>
                  <View
                    style={{
                      flex: 2,
                      alignItems: "flex-end",
                      marginVertical: 5
                    }}
                  >
                    <Text style={styles.productsText}>{item.quantity}</Text>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignSelf: "center",
    justifyContent: "flex-start",
    marginVertical: 50,
    marginHorizontal: 20
  },
  productTitle: {
    fontSize: 25,
    fontWeight: "bold",
    color: "red",
    marginVertical: 10
  },
  products: {
    marginVertical: 5,
    marginHorizontal: 30
  },
  productsText: {
    fontSize: 15,
    color: "blue",
    fontWeight: "bold",
    textAlign: "left"
  }
});
