import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { connect } from "react-redux";
import { selectStory } from "../actions";

class StoryThumb extends Component {
  render() {
    const story = this.props.story;
    return (
      <View style={styles.storyThumb}>
        <TouchableOpacity
          onPress={() => {
            this.props.selectStory(story.id);
          }}
        >
          <Image
            source={{ uri: story.avatar }}
            style={{ width: 100, height: 120 }}
          />
          <Text style={styles.storyName}>{story.name}</Text>
          <Text style={styles.storyAuthor}>{story.author}</Text>
        </TouchableOpacity>
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

// const mapStateToProps = ({ auth }) => {
// 	const { email, password, error, loading } = auth;
// 	return ({ email, password, error, loading });
// };

export default connect(null, { selectStory })(StoryThumb);
// export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser, selectStory })(StoryThumb);

// onPress={() => { console.log(this.props); this.props.selectStory(story.id); }}
// // export default StoryThumbnail;
