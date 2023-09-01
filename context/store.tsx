"use client";
import { useState, createContext, useContext, useEffect } from "react";

type DataType = {
  collapse: boolean;
  setCollapse: (e: boolean) => void;
  sheet: string;
  setSheet: (e: string) => void;
  pixel: string;
  setPixel: (e: string) => void;

  lang: boolean;
  setLang: (e: boolean) => void;
  dataProducts: {
    id: string;
    productPage: string;
    titleFr: string;
    titleAr: string;
    descriptionFr: string;
    descriptionAr: string;
    prix: string;
    category: string;
    image: string;
    metaTitle: string;
    metaDesc: string;
    upsellId: string;
  }[];
  setDataProducts: (
    e: {
      id: string;
      titleFr: string;
      titleAr: string;
      descriptionFr: string;
      descriptionAr: string;
      prix: string;
      category: string;
      image: string;
      metaTitle: string;
      metaDesc: string;
      upsellId: string;
      productPage: string;
    }[]
  ) => void;
};

const DataContext = createContext<DataType>({
  collapse: false,
  setCollapse() {},
  sheet: "",
  setSheet() {},
  pixel: "",
  setPixel() {},

  lang: false,
  setLang() {},
  dataProducts: [],
  setDataProducts() {},
});

const DataProvider = ({ children }: { children: React.ReactNode }) => {
  const [collapse, setCollapse] = useState(false);
  const [lang, setLang] = useState(true);
  const [sheet, setSheet] = useState("");
  const [pixel, setPixel] = useState("");
  const [dataProducts, setDataProducts] = useState<
    {
      id: string;
      titleFr: string;
      titleAr: string;
      descriptionFr: string;
      descriptionAr: string;
      prix: string;
      category: string;
      image: string;
      metaTitle: string;
      metaDesc: string;
      upsellId: string;
      productPage: string;
    }[]
  >([]);

  const getAllProducts = async () => {
    try {
      const response = await fetch(
        "https://ecom-api-miloud.onrender.com/products",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      const tempData = data.products.map((item: any) => {
        const id = item._id.toString();
        const prix = item.price.toString();
        const {
          titleFr,

          titleAr,
          descFr,
          descAr,
          img,
          category,
          productPage,
          upsellId,
          metaTitle,
          metaDesc,
        } = item;
        return {
          titleFr,
          titleAr,
          id,
          upsellId,
          descriptionFr: descFr,
          descriptionAr: descAr,
          image: img,
          category,
          productPage,
          prix,
          metaTitle,
          metaDesc,
        };
      });
      setDataProducts(tempData);
    } catch (error) {
      console.log(error);
    }
  };
  const getSheetUrl = async () => {
    try {
      const response = await fetch(
        "https://ecom-api-miloud.onrender.com/sheet",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setSheet(data.sheet[0].sheet);
    } catch (error) {
      console.log(error);
    }
  };

  const getPixelID = async () => {
    try {
      const response = await fetch(
        "https://ecom-api-miloud.onrender.com/pixel",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      setPixel(data.pixel[0].pixel);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllProducts();
    getPixelID();
    getSheetUrl();
  }, []);

  return (
    <DataContext.Provider
      value={{
        collapse,
        pixel,
        setPixel,
        dataProducts,
        setDataProducts,
        setCollapse,
        lang,
        sheet,
        setSheet,
        setLang,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DataContext);
};
export { DataProvider };
