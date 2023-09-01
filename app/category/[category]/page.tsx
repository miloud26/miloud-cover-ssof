"use client";
import React, { FC, useState } from "react";
import { Box, Pagination, Button, Typography } from "@mui/material";
import ShopSidebar from "@/components/ShopSidebar";
import ShoppingPage from "@/components/ShoppingPage";
import { useGlobalContext } from "@/context/store";
import Link from "next/link";
import { Metadata } from "next";

type CategoryType = {
  params: { category: string };
};

const SinglePageProductsCategory: FC<CategoryType> = ({ params }) => {
  const { dataProducts, lang } = useGlobalContext();

  const dataProduct = dataProducts?.filter(
    (item) => item.category == params.category
  );

  const [page, setPage] = useState(1);
  const handleClick = (e: any) => {
    setPage(parseInt(e.target?.textContent));
    console.log(page);
    window.scrollTo({ top: 0, left: 0 });
  };
  if (dataProduct?.length == 0) {
    return (
      <Box
        className="w-full h-[60vh] flex justify-center items-center gap-y-5"
        flexDirection={"column"}
      >
        <Box>
          <Typography className="text-black text-2xl">
            {lang ? "!!! لا توجد منتجات " : "Oups il n'y a pas de produits!!!"}
          </Typography>
        </Box>
        <Box className="mt-5 flex justify-center items-center">
          <Link href="/shop">
            {" "}
            <Button
              className="block font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] "
              variant="contained"
            >
              {lang ? "تسوق الان" : "Achetez maintenant"}
            </Button>
          </Link>
        </Box>
      </Box>
    );
  }
  return (
    <Box className="w-full flex justify-between gap-5 mb-7 relative">
      <ShopSidebar />
      <Box>
        {
          <ShoppingPage
            className=""
            titleFr="Achetez maintenant dans notre magasin"
            titleAr="تسوق الان في متجرنا"
            subtitleFr="Vous pouvez maintenant trouver tout ce que vous cherchez pour votre enfant et pour vous-même en tant qu'éducateur"
            subtitleAr="يمكنك الان ايجاد كل ما تبحث عنه لطفلك و لنفسك كمربي"
            data={dataProduct?.slice((page - 1) * 12, page * 12)}
          />
        }
        <Box className="w-full flex justify-center items-center mt-11">
          <Pagination
            count={Math.floor(dataProduct.length / 12) + 1}
            onClick={handleClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default SinglePageProductsCategory;

