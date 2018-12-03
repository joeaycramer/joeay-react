import Prismic from "prismic-javascript";

class LoadPrismicWork {
  constructor() {
    this.apiEndpoint = "https://joeaycouk.cdn.prismic.io/api/v2";
  }

  getInititalThumbnails = () => {
    return Prismic.api(this.apiEndpoint).then(api => {
      return api.query(Prismic.Predicates.at("document.type", "portfolio"), {
        fetch: [
          "portfolio.thumbnail_title",
          "portfolio.thumbnail_image",
          "portfolio.thumbnail_colour"
        ],
        orderings: "[my.portfolio.date_completed desc]"
      });
    });
  };

  getSingleWork = slug => {
    return Prismic.api(this.apiEndpoint).then(api => {
      return api.getByUID("portfolio", slug);
    });
  };
}

export default LoadPrismicWork;
