import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import Player from './Player';
import StoryHomePart from './StoryHomePart';

class DetailStory extends Component {
  componentWillMount() {
    const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});
    console.log(this.props.story);
		this.dataSource = ds.cloneWithRows(this.props.story);
  }

  renderRow(part) {
    return (
      <View style={styles.item}>
        <StoryHomePart data={part} />
      </View>
    );
  }

  render() {
    console.log(this.props.story);
    return (
      <View style={styles.container}>
        <ListView
          style={styles.list}
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />
        <View style={styles.player}>
          <Player currentSong={this.props.currentSong} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  list: {
    backgroundColor: '#787878',
  },
  item: {
    height: 35,
  },
  player: {
    backgroundColor: '#999',
    height: 100
  }
});

const mapStateToProps = ({ home }) => {
  const story = home.story;
  const currentSong = home.currentSong;
  return ({ story, currentSong });
};

export default connect(mapStateToProps)(DetailStory);
