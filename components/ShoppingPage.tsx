"use client";
import { Box, Typography, Button } from "@mui/material";
import { ProductsSection } from "@/type";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "@/context/store";

const ShoppingPage = ({
  titleFr,
  titleAr,
  subtitleFr,
  subtitleAr,
  data,
}: ProductsSection) => {
  const { setCollapse, collapse, lang } = useGlobalContext();
  const handleClick = () => {
    setCollapse(!collapse);
  };
  return (
    <Box className="mt-12">
      <Box className="w-full">
        <Typography className="text-center font-bold text-4xl uppercase">
          {lang ? titleAr : titleFr}
        </Typography>
        <Typography className="text-center  text-lg px-5">
          {lang ? subtitleAr : subtitleFr}
        </Typography>
      </Box>

      <Box className="flex justify-center items-center w-full">
        <Button
          onClick={handleClick}
          className="block md:hidden font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] mt-5"
          variant="contained"
        >
          {lang ? "فيلتر" : "filter"}
        </Button>
      </Box>

      <Box className="mt-12 grid grid-cols-1 sm:grid-cols-2  gap-x-5 gap-y-7 lg:grid-cols-3 xl:grid-cols-4 px-[10px]  ">
        {data.map((item, i) => {
          return <ProductCard key={i} {...item} />;
        })}
      </Box>
    </Box>
  );
};

export default ShoppingPage;
