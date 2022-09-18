export const photosActions = {
  UPDATE_PHOTOS: 'UPDATE_PHOTOS',
};

export const updatePhotos = (page = 1) => ({
  type: photosActions.UPDATE_PHOTOS,
  page,
});
