"use client";
import { Box, Button, Typography } from "@mui/material";
import { ProductCard } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "@/context/store";
const ProductCard = ({
  id,
  titleFr,
  titleAr,
  category,
  prix,
  image,
}: ProductCard) => {
  const { lang } = useGlobalContext();
  return (
    <Box className="card-item p-[15px] rounded-[15px] ">
      <Box>
        <Image
          width={"616"}
          height={"400"}
          alt={titleFr}
          src={image}
          className="object-cover rounded-[15px] hover:scale-105 transition "
        />
      </Box>

      <Typography className="mt-4 font-bold text-lg ">
        {lang ? titleAr : titleFr}
      </Typography>
      <Typography className="mt-4 font-bold text-lg mb-6">
        {prix}
        {lang ? "دج" : "DA"}{" "}
      </Typography>

      <Link href={`/products/${id}`}>
        <Button
          className="bg-[#dbeafe] text-black text-[15px] md:text-[15px] font-bold hover:bg-[#dbeafe] w-full mb-8"
          variant="contained"
        >
          {lang ? "تفاصيل المنتج" : "détails du produit"}
        </Button>
      </Link>
    </Box>
  );
};

export default ProductCard;
