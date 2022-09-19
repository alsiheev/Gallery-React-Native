import { useEffect, useState } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  TouchableNativeFeedback,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import {
  clearPhotosArray,
  setIsLoading,
  updatePhotosArray,
} from '../../store/reducers/photos';
import { updatePhotos } from '../../store/sagas/photos-actions';
import PhotoComponent from './components/PhotoComponent';

const GalleryScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photos.photosArray);
  const isLoading = useSelector((state: RootState) => state.photos.isLoading);

  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(setIsLoading());
    dispatch(updatePhotos(1));
    return () => {
      dispatch(clearPhotosArray());
    };
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <PhotoComponent photo={item} navigation={navigation} key={item.id} />
        )}
        contentContainerStyle={styles.listStyle}
        onEndReached={() => {
          let curPage = page + 1;
          setPage(curPage);
          dispatch(setIsLoading());
          dispatch(updatePhotos(curPage));
        }}
        onEndReachedThreshold={0.1}
      />
      {isLoading && <ActivityIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  listStyle: {},
});

export default GalleryScreen;
