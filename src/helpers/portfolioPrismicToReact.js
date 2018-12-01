import ThumbnailHelper from "./thumbnailPrismicToReact";

const portfolioPrismicToReact = item => {
  const thumbnailFixer = ThumbnailHelper(item);

  let showcase = item.data.body.map(slice => {
    return {
      caption: slice.primary.caption.length
        ? slice.primary.caption[0].text
        : false,
      image: slice.primary.image.url,
      large_quote: slice.primary.large_quote.length
        ? slice.primary.large_quote[0].text
        : false,
      remove_shadow: slice.primary.shadow == "yes" ? true : false
    };
  });

  const transformedData = {
    ...item.data,
    ...thumbnailFixer,
    showcaseImages: showcase,
    description: item.data.description[0].text,
    task: item.data.task[0].text
  };

  delete transformedData.body;

  console.log(transformedData);

  return transformedData;
};

export default portfolioPrismicToReact;
