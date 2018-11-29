const thumbnailPrismicToReact = item => {
  return {
    slug: item.uid,
    thumbnail_title: item.data.thumbnail_title,
    thumbnail_image: item.data.thumbnail_image.url,
    thumbnail_colour: item.data.thumbnail_colour
  };
};

export default thumbnailPrismicToReact;
