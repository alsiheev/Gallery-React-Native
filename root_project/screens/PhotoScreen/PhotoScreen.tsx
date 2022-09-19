import { View, StyleSheet, Image, ScrollView } from 'react-native';

const PhotoScreen = ({ route }) => {
  const { uri, color } = route.params;
  return (
    <>
      <View
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: color || 'black',
          opacity: 0.6,
        }}
      />
      <View style={styles.container}>
        <Image
          source={{ uri: uri }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '95%',
    height: '95%',
  },
});

export default PhotoScreen;
