export const IMAGE_PLACEHOLDER_URL = 'https://via.placeholder.com/400x250.png?text=Artwork%20image%20with%20error';

export const getImageUrl = (imageId: string) => {
  if (imageId == null) {
    return IMAGE_PLACEHOLDER_URL;
  }

  return `https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg`;
};
