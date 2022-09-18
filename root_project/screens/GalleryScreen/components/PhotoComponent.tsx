import { useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Animated,
} from 'react-native';
import Photo from '../../../types/photo';

interface PhotoProps {
  photo: Photo;
  navigation: any;
}

const PhotoComponent = (props: PhotoProps) => {
  const { photo, navigation } = props;

  const [scale, setScale] = useState(1);

  return (
    <View style={[styles.container]}>
      <View
        style={{
          position: 'absolute',
          width: '90%',
          height: '90%',
          backgroundColor: photo.color,
          opacity: 0.4,
          left: '10%',
        }}></View>
      <TouchableWithoutFeedback
        onPress={() => {
          navigation.navigate('PhotoScreen', { uri: photo.urls.regular });
        }}
        onPressIn={() => setScale(1.1)}
        onPressOut={() => setScale(1)}>
        <Animated.View>
          <Image
            source={{
              uri: photo.urls.small,
            }}
            style={[
              styles.photo,
              {
                transform: [{ scale: scale }],
              },
            ]}
            resizeMode="cover"
          />
        </Animated.View>
      </TouchableWithoutFeedback>
      <View style={styles.user}>
        <Text
          numberOfLines={1}
          style={{
            overflow: 'hidden',
          }}>
          {photo.user.name}
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: photo.user.profile_image.medium }}
          style={styles.avatar}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    flex: 1,
  },
  photo: {
    width: 180,
    height: 180,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  user: {
    display: 'flex',
    alignItems: 'flex-end',
    backgroundColor: '#fff',
    height: '30%',
    width: '40%',
    padding: 5,
    overflow: 'hidden',
    borderTopLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'white',
  },
  avatarContainer: {
    position: 'absolute',
    right: 15,
    bottom: 10,
  },
});

export default PhotoComponent;
