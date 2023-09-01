"use client";
import React from "react";
import Galory from "@/components/Gallery";
import Niches from "@/components/Niches";
import ProductsSection from "@/components/ProductsSection";
import Slider from "@/components/Slider";
import { Box } from "@mui/material";
import { partners } from "../data";
import { useGlobalContext } from "@/context/store";

export default function Home() {
  const { lang, dataProducts } = useGlobalContext();

  return (
    <Box className={lang ? "mt-5 arabic" : "mt-5 francais"}>
      <Slider />
      <Niches />
      <ProductsSection
        className="hidden md:block"
        titleFr="1 - 5 Ans"
        titleAr="5 - 1 سنة"
        subtitleFr="Découvrez les meilleurs produits pour votre enfant dans ses premières années"
        subtitleAr="تعرف على افضل المنتجات لطفلك في اعوامه الاولى"
        data={dataProducts.slice(0, 4)}
      />
      <ProductsSection
        className="block md:hidden"
        titleFr="1 - 5 Ans"
        titleAr="5 - 1 سنة"
        subtitleFr="Découvrez les meilleurs produits pour votre enfant dans ses premières années"
        subtitleAr="تعرف على افضل المنتجات لطفلك في اعوامه الاولى"
        data={dataProducts.slice(0, 2)}
      />
      <ProductsSection
        className="hidden md:block"
        titleFr="6 - 10 Ans"
        titleAr="10 - 6 سنة"
        subtitleFr="Votre adolescent a besoin de plusieurs choses à savoir"
        subtitleAr="طفلك في مرحلة المراهقة يحتاج عدة امور تعرف عليها"
        data={dataProducts.slice(0, 4)}
      />
      <ProductsSection
        className="block md:hidden"
        titleFr="6 - 10 Ans"
        titleAr="10 - 6 سنة"
        subtitleFr="Votre adolescent a besoin de plusieurs choses à savoir"
        subtitleAr="طفلك في مرحلة المراهقة يحتاج عدة امور تعرف عليها"
        data={dataProducts.slice(0, 2)}
      />
      <ProductsSection
        className="hidden md:block"
        titleFr="11 - 15 Ans"
        titleAr="15 - 11 سنة"
        subtitleFr="Découvrez les meilleurs produits pour votre enfant dans ses premières années"
        subtitleAr="تعرف على افضل المنتجات لطفلك في اعوامه الاولى"
        data={dataProducts.slice(0, 4)}
      />
      <ProductsSection
        className="block md:hidden"
        titleFr="11 - 15 Ans"
        titleAr="15 - 11 سنة"
        subtitleFr="Découvrez les meilleurs produits pour votre enfant dans ses premières années"
        subtitleAr="تعرف على افضل المنتجات لطفلك في اعوامه الاولى"
        data={dataProducts.slice(0, 2)}
      />
      <ProductsSection
        className="hidden md:block"
        titleFr="Vos fournitures en tant que mère"
        titleAr="مستلزماتك ك ام"
        subtitleFr="Vous êtes une bonne mère, vous aurez besoin de ces produits, apprenez à les connaître dès maintenant"
        subtitleAr="انت ك ام جيدة ستلزمك هاته المنتجات تعرفي عليها الان"
        data={dataProducts.slice(0, 4)}
      />
      <ProductsSection
        className="block md:hidden"
        titleFr="Vos fournitures en tant que mère"
        titleAr="مستلزماتك ك ام"
        subtitleFr="Vous êtes une bonne mère, vous aurez besoin de ces produits, apprenez à les connaître dès maintenant"
        subtitleAr="انت ك ام جيدة ستلزمك هاته المنتجات تعرفي عليها الان"
        data={dataProducts.slice(0, 2)}
      />

      <Galory
        titleFr="Galerie de produits"
        titleAr="معرض المنتجات"
        subtitleFr="Découvrez nos nouveaux produits et nos meilleures ventes"
        subtitleAr="تعرف على منتجاتنا الجديدة و الاكثر مبيعا"
        data={dataProducts.map((item, index) => {
          const { image, titleFr } = item;
          return { image, titleFr, id: index };
        })}
        type={1}
      />
      <Galory
        titleFr="Nos partenaires"
        titleAr="شركاؤنا"
        subtitleFr="Découvrez les partenaires et revendeurs les plus importants avec lesquels nous travaillons"
        subtitleAr="تعرف على اهم الشركاء و المتعاملين الذين نعمل معهم"
        data={partners}
        type={0}
      />
    </Box>
  );
}
