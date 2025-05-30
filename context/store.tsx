"use client";
import { faker } from "@faker-js/faker";
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
    id: number;
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
    upsellId: number;
  }[];
  setDataProducts: (
    e: {
      id: number;
      titleFr: string;
      titleAr: string;
      descriptionFr: string;
      descriptionAr: string;
      prix: string;
      category: string;
      image: string;
      metaTitle: string;
      metaDesc: string;
      upsellId: number;
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
      id: number;
      titleFr: string;
      titleAr: string;
      descriptionFr: string;
      descriptionAr: string;
      prix: string;
      category: string;
      image: string;
      metaTitle: string;
      metaDesc: string;
      upsellId: number;
      productPage: string;
    }[]
  >([]);
  useEffect(() => {
    const generateDummyData = () => {
      const dummyArray = [];
      for (let i = 1; i <= 10; i++) {
        dummyArray.push({
          id: i,
          titleFr: faker.commerce.productName(),
          titleAr: faker.commerce.productName(),
          descriptionFr: faker.lorem.sentence(),
          descriptionAr: faker.lorem.sentence(),
          prix: Math.floor(+faker.commerce.price()).toString(),
          category: ["1-5-years", "6-10-years", "11-15-years", "baby-sitter"][
            Math.floor(
              Math.random() *
                ["1-5-years", "6-10-years", "11-15-years", "baby-sitter"].length
            )
          ], // تحديد عشوائي من الاربعة فقط
          image: `https://picsum.photos/334/334?random=${i}`,
          metaTitle: faker.lorem.words(3),
          metaDesc: faker.lorem.sentence(),
          upsellId: i + 125,
          productPage: `/product/${i}`,
        });
      }
      return dummyArray;
    };

    setDataProducts(generateDummyData());
  }, []);

  // const getAllProducts = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://ecom-api-miloud.onrender.com/products",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();

  //     const tempData = data.products.map((item: any) => {
  //       const id = item._id.toString();
  //       const prix = item.price.toString();
  //       const {
  //         titleFr,

  //         titleAr,
  //         descFr,
  //         descAr,
  //         img,
  //         category,
  //         productPage,
  //         upsellId,
  //         metaTitle,
  //         metaDesc,
  //       } = item;
  //       return {
  //         titleFr,
  //         titleAr,
  //         id,
  //         upsellId,
  //         descriptionFr: descFr,
  //         descriptionAr: descAr,
  //         image: img,
  //         category,
  //         productPage,
  //         prix,
  //         metaTitle,
  //         metaDesc,
  //       };
  //     });
  //     setDataProducts(tempData);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // const getSheetUrl = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://ecom-api-miloud.onrender.com/sheet",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     setSheet(data.sheet[0].sheet);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // const getPixelID = async () => {
  //   try {
  //     const response = await fetch(
  //       "https://ecom-api-miloud.onrender.com/pixel",
  //       {
  //         method: "GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const data = await response.json();
  //     setPixel(data.pixel[0].pixel);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   getAllProducts();
  //   getPixelID();
  //   getSheetUrl();
  // }, []);

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
