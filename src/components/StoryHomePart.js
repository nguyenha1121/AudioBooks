import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { selectPart } from '../actions';

class StoryHomePart extends Component {
  render() {
    console.log(this.props.data);
    let ct = styles.container;
    if (this.props.selected !== null) {
      if (this.props.selected.id === this.props.data.id) {
        ct = styles.container_selected;
      }
    } else ct = styles.container;
    return (
      <View style={ct}>
        <TouchableOpacity onPress={() => { this.props.selectPart(this.props.data); }}>
          <Text>{this.props.data.name}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container_selected: {
    backgroundColor: '#f142f4',
  }
});

const mapStateToProps = ({ home }) => {
  const select = home.currentSong;
  return ({ selected: select });
};

export default connect(mapStateToProps, { selectPart })(StoryHomePart);
