"use client";
import { Box, Button, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Image from "next/image";
import Link from "next/link";
import { useGlobalContext } from "@/context/store";

const Navbar = () => {
  const productPage = "1";

  const { lang, setLang } = useGlobalContext();
  const handleLang = () => {
    setLang(!lang);
  };
  return (
    <Box
      sx={{ flexDirection: lang ? "row-reverse" : "" }}
      className={` justify-center md:justify-between items-center px-[25px] gap-x-3 md:px-[86px] py-3 shadow-xl ${
        productPage == "1" ? "flex" : "hidden"
      }`}
    >
      <Box className="w-full md:w-auto">
        <Link href="/">
          {" "}
          <Image
            width={"170"}
            height={"100"}
            src="/logo.png"
            alt="logo"
            className=" cursor-pointer"
          />
        </Link>
      </Box>
      <Box className="hidden md:block w-[500px]">
        <Box className="flex justify-between items-center border w-full rounded  border-blue-400 border-solid px-[15px] py-[10px]">
          <Box className="w-full px-r-6">
            <input
              type="text"
              className="w-full"
              placeholder={
                lang ? "البحث عن المنتجات" : "Rechercher des produits"
              }
            />
          </Box>
          <Box className="hover:scale-125 transition ease-out duration-300 cursor-pointer">
            <SearchIcon />
          </Box>
        </Box>
      </Box>

      <Box
        className={
          lang
            ? "md:flex justify-between items-center w-full md:w-auto"
            : "md:flex justify-between items-center"
        }
      >
        <Box className="mr-3  cursor-pointer border-3 w-[43px] h-[43px] flex justify-center items-center  border-blue-300 border-solid p-2 rounded-full">
          <Typography className="font-bold" onClick={handleLang}>
            {lang ? "FR" : "AR"}
          </Typography>
        </Box>
        <Box className="hidden md:block">
          <Link href="/shop">
            {" "}
            <Button
              className="hidden lg:block font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] "
              variant="contained"
            >
              {lang ? "تسوق الان" : "Achetez maintenant"}
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
