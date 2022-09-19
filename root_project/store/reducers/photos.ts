import { createSlice, configureStore } from '@reduxjs/toolkit';
import Photo from '../../types/photo';

interface State {
  photosArray: Photo[];
  isLoading: boolean;
  error: string;
}

const initialState: State = {
  photosArray: [],
  isLoading: false,
  error: '',
};

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    updatePhotosArray: (state, action) => {
      console.log(action.payload);
      state.photosArray.push(...action.payload);
      state.isLoading = false;
    },
    clearPhotosArray: state => {
      state.photosArray = [];
      state.isLoading = false;
    },
    setIsLoading: state => {
      state.isLoading = true;
    },
    errorPhotos: (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'Unknown error, try again later.';
    },
  },
});

export const {
  updatePhotosArray,
  clearPhotosArray,
  setIsLoading,
  errorPhotos,
} = photosSlice.actions;
export default photosSlice.reducer;
