import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';
import { connect } from 'react-redux';
import { togglePlay, toggleVolume, setTime, onLoad, onSlidingStart, onSlidingChange, onSlidingComplete, onEnd } from '../actions';

class Player extends Component {

  onLoad = (params) => {
    this.props.onLoad(params.duration);
  }

  onEnd = () => {
    this.props.onEnd();
  }

  setTime = (params) => {
    if (!this.props.sliding) {
      this.props.setTime(params.currentTime);
    }
  }
  //
  // renderVideo() {
  //   if (this.props.currentSong !== null) {
  //     return (
  //       <Video
  //         source={{ uri: this.props.currentSong.urlMedia }}
  //         ref="audio"
  //         volume={this.props.muted ? 0 : 1.0}
  //         muted={false}
  //         paused={!this.props.playing}
  //         onLoad={this.onLoad}
  //         onProgress={this.setTime}
  //         onEnd={this.onEnd}
  //         resizeMode="cover"
  //         repeat={false}
  //       />
  //     );
  //   }
  //   // onLoad={ this.onLoad.bind(this) }
  //   // onProgress={ this.setTime.bind(this) }
  //   // onEnd={ this.onEnd.bind(this) }
  //   return (
  //     <Text>sssss</Text>
  //   );
  // }

  render() {
    console.log(this.props);
    let url = '';
    if (this.props.currentSong !== null) {
      url = this.props.currentSong.urlMedia;
    }
    return (
      <View style={styles.containerBottom}>
        <View>
          <Video
            source={{ uri: url }}
            ref="audio"
            volume={this.props.muted ? 0 : 1.0}
            muted={false}
            paused={!this.props.playing}
            onLoad={this.onLoad}
            onProgress={this.setTime}
            onEnd={this.onEnd}
            resizeMode="cover"
            repeat={false}
          />
          <TouchableOpacity
            onPress={() => this.props.togglePlay()}
          >
            <Text>any thing</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerBottom: {
    height: 60,
    backgroundColor: '#cdcdcd',
  }
});

const mapStateToProps = ({ player, home }) => {
  const playing = player.playing;
  const muted = player.muted;
  const sliding = player.sliding;
  const currentTime = player.currentTime;
  const songIndex = player.songIndex;
  const currentSong = home.currentSong;
  return ({ playing, muted, sliding, currentTime, songIndex, currentSong });
};
// 
// export default connect(mapStateToProps, {
//   togglePlay,
//   toggleVolume,
//   setTime,
//   onLoad,
//   onSlidingStart,
//   onSlidingChange,
//   onSlidingComplete,
//   onEnd })(Player);
