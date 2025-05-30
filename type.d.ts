interface nicheCard {
  id: number;
  image: string;
  titleAr: string;
  subTitleAr: string;
  titleFr: string;
  subTitleFr: string;
  category: string;
}

interface ProductCard {
  titleFr: string;
  titleAr: string;
  prix: string;
  image: string;
  category: string;
}

type ProductsSection = {
  className: string;
  titleFr: string;
  subtitleFr: string;
  titleAr: string;
  subtitleAr: string;
  data: {
    titleAr: string;
    titleFr: string;
    descriptionFr: string;
    descriptionAr: string;
    prix: string;
    category: string;
    image: string;
  }[];
};
type GalorySection = {
  titleFr: string;
  subtitleFr: string;
  titleAr: string;
  subtitleAr: string;
  type: number;
  data: {
    id: number;
    image: string;
    titleFr: string;
  }[];
};

export { nicheCard, ProductsSection, ProductCard, GalorySection };
