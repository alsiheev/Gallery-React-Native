import { View, StyleSheet, Image, ScrollView } from 'react-native';

const PhotoScreen = ({ route }) => {
  const { uri } = route.params;
  return (
    <Image source={{ uri: uri }} style={styles.image} resizeMode="cover" />
  );
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default PhotoScreen;
