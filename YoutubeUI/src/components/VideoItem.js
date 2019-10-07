import React from 'react';
import { 
  View, StyleSheet, Image, Text, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function VideoItem( props ) {
  let video = props.video;

  function nFormatter(num, digits) {
    var si = [
      { value: 1, symbol: "" },
      { value: 1E3, symbol: "k" },
      { value: 1E6, symbol: "M" },
      { value: 1E9, symbol: "G" },
      { value: 1E12, symbol: "T" },
      { value: 1E15, symbol: "P" },
      { value: 1E18, symbol: "E" }
    ];
    var rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var i;
    for (i = si.length - 1; i > 0; i--) {
      if (num >= si[i].value) {
        break;
      }
    }
    return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol + " views";
  }

  return (
    <View style={styles.container}>
      <Image style={styles.thumbnail} source={{uri: video.snippet.thumbnails.medium.url}} />

      <View style={styles.descContainer}>
        <Image style={styles.thumbnailUser} source={{uri: 'https://randomuser.me/api/portraits/men/41.jpg'}} />
        <View style={styles.videoDetails}>
          <Text style={styles.videoTitle}>{video.snippet.title}</Text>
          <Text style={styles.videoStats}>{video.snippet.channelTitle + " · " + nFormatter(video.statistics.viewCount, 1) + " · " + video.snippet.publishedAt.getTime() - Date.now}</Text>
        </View>
        <TouchableOpacity>
          <Icon name="more" size={20} color="#999999" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  thumbnail: {
    height: 200,
  },
  descContainer: {
    flexDirection: 'row',
    paddingTop: 15,
  },
  thumbnailUser: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
  videoDetails: {
    flex: 1,
    paddingHorizontal: 15,
  },
  videoTitle: {
    fontSize: 16,
    color: '#3c3c3c',
  },
  videoStats: {
    fontSize: 15,

  }
});
