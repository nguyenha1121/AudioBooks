import React, { Component } from "react";
import { View, Text, ListView, Image, StyleSheet } from "react-native";
import { connect } from "react-redux";
// import { selectStory } from '../actions';
// import { Actions } from 'react-native-router-flux';
import StoryThumb from "./StoryThumb";

class ListStories extends Component {
  componentWillMount() {
    console.log(this.props.stories);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(this.props.stories);
  }

  renderRow(story) {
    // console.log(story);
    return <StoryThumb story={story} />;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Hot Stories".toUpperCase()}></Text>
        <ListView
          dataSource={this.dataSource}
          renderRow={this.renderRow}
          horizontal
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20
  },
  title: {
    color: "red",
    paddingBottom: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd"
  },
  storyThumb: {
    paddingRight: 15
  },
  storyName: {
    color: "blue",
    fontWeight: "bold"
  },
  storyAuthor: {
    color: "green"
  }
});
//
// const mapStateToProps = (state) => {
// 	return ({ child: state.child });
// };

export default ListStories;
//
// export default connect(mapStateToProps, { selectStory })(ListStories);
