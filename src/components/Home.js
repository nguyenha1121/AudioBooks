import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Actions } from "react-native-router-flux";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import ListStories from "./ListStories";
import Spinner from "./common/Spinner";

class Home extends Component {
  componentWillMount() {
    const url = "anythings";
    this.props.fetchData(url);
    // const ds = new ListView.dataSource({
    //   rowHasChanged: (r1, r2) => r1 !== r2
    // });
    // this.dataSource = ds.cloneWithRows(this.props.data);
  }

  load() {
    if (this.props.loading) {
      return <Spinner size="medium" />;
    } else if (this.props.data !== null) {
      return <ListStories stories={this.props.data} />;
    }
    return <Text>Loading fail!</Text>;
  }

  render() {
    return <View>{this.load()}</View>;
  }
}

const mapStateToProps = ({ home }) => {
  const data = home.data;
  const loading = home.loading;
  return { data, loading };
};

export default connect(mapStateToProps, { fetchData })(Home);
