"use client";
import { useState } from "react";
import ShoppingPage from "@/components/ShoppingPage";
import ShopSidebar from "@/components/ShopSidebar";
import { Box, Pagination } from "@mui/material";
import { useGlobalContext } from "@/context/store";

const Shop = () => {
  const { dataProducts } = useGlobalContext();

  console.log(dataProducts);
  const [page, setPage] = useState(1);
  const handleClick = (e: any) => {
    setPage(parseInt(e.target?.textContent));

    window.scrollTo({ top: 0, left: 0 });
  };
  return (
    <Box className="w-full flex justify-between gap-5 mb-7 relative">
      <ShopSidebar />
      <Box>
        <ShoppingPage
          className=""
          titleFr="Achetez maintenant dans notre magasin"
          titleAr="تسوق الان في متجرنا"
          subtitleFr="Vous pouvez maintenant trouver tout ce que vous cherchez pour votre enfant et pour vous-même en tant qu'éducateur"
          subtitleAr="يمكنك الان ايجاد كل ما تبحث عنه لطفلك و لنفسك كمربي"
          data={dataProducts?.slice((page - 1) * 12, page * 12)}
        />

        <Box className="w-full flex justify-center items-center mt-11">
          <Pagination
            count={Math.floor(dataProducts?.length / 12) + 1}
            onClick={handleClick}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Shop;
