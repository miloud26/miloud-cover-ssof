"use client";
import { Box, Typography } from "@mui/material";
import { ProductsSection } from "@/type";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "@/context/store";

const ProductsSection = ({
  titleFr,
  titleAr,
  subtitleFr,
  subtitleAr,
  data,
  className,
}: ProductsSection) => {
  const { lang } = useGlobalContext();
  return (
    <Box className={`mt-12 ${className}`}>
      <Box className="w-full">
        <Typography className="text-center font-bold text-4xl uppercase">
          {lang ? titleAr : titleFr}
        </Typography>
        <Typography className="text-center  text-lg px-5">
          {lang ? subtitleAr : subtitleFr}
        </Typography>
      </Box>
      <Box className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-7 lg:grid-cols-4 px-[10px] md:px-[70px] lg:px-[80px] xl:px-[110px]">
        {data.map((item, i) => {
          return <ProductCard key={i} {...item} />;
        })}
      </Box>
    </Box>
  );
};

export default ProductsSection;
