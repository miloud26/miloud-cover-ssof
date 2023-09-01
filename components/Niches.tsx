"use client";
import { Box, Button, Typography } from "@mui/material";
import { nicheCard } from "@/type";
import Image from "next/image";
import { useGlobalContext } from "@/context/store";
import Link from "next/link";
const CardNiche = ({
  id,
  image,
  titleFr,
  titleAr,
  subTitleFr,
  category,
  subTitleAr,
}: nicheCard) => {
  const { lang } = useGlobalContext();
  return (
    <Box className="relative  card-niche overflow-hidden">
      <Image
        width={"616"}
        height={"616"}
        alt="card niche"
        src={image}
        className="object-cover"
      />
      <Box className="absolute w-[300px] left-[50%] top-[50%] z-50  translate-x-[-50%] translate-y-[-50%] text-white">
        <Typography className=" text-3xl font-bold mb-3">
          {lang ? titleAr : titleFr}
        </Typography>
        <Typography className="text-xl mb-3 ">
          {lang ? subTitleAr : subTitleFr}
        </Typography>
        <Link href={`/category/${category}`}>
          <Button
            className="bg-[#dbeafe] text-black font-bold hover:bg-[#dbeafe]"
            variant="contained"
          >
            {lang ? "تسوق الان" : "Achetez maintenant"}
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

const data = [
  {
    id: 1,
    image: "/niche1.png",
    titleFr: "1 - 5 Ans",
    category: "1-5-years",
    titleAr: "5 - 1 سنة",
    subTitleFr:
      "Découvrez les meilleurs produits pour votre enfant dans ses premières années",
    subTitleAr: "تعرف على افضل المنتجات لطفلك في اعوامه الاولى",
  },
  {
    id: 2,
    image: "/niche2.jpg",
    titleFr: "6 - 10 Ans",
    category: "6-10-years",
    titleAr: "10 - 6 سنة",
    subTitleFr:
      "Votre enfant en phase d'exploration a besoin de plusieurs éléments, apprenez à les connaître",
    subTitleAr: "طفلك في مرحلة الاستكشاف يحتاج عدة أمور تعرف عليه",
  },
  {
    id: 3,
    image: "/niche3.png",
    titleFr: "11 - 15 Ans",
    titleAr: "15 - 11 سنة",
    category: "11-15-years",
    subTitleFr:
      "Découvrez les meilleurs produits pour votre enfant dans ses premières années",
    subTitleAr: "تعرف على افضل المنتجات لطفلك في اعوامه الاولى",
  },
  {
    id: 4,
    image: "/niche4.jpg",
    titleFr: "Ce dont vous avez besoin en tant que mère",
    titleAr: "ما تحتاجينه كأم",
    category: "baby-sitter",
    subTitleFr:
      "Pour une maternité facile, pleine de philanthropie et d’efforts des patients atteints de cancer",
    subTitleAr: "لأمومة سهلة ، مفعمة بالصحة والنشاط والكثير من المشاعر",
  },
];
const Niches = () => {
  return (
    <Box className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-7 lg:grid-cols-4">
      {data.map((item) => {
        return <CardNiche key={item.id} {...item} />;
      })}
    </Box>
  );
};

export default Niches;
