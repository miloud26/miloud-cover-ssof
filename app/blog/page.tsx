"use client";
import { Box, Button } from "@mui/material";
import { useGlobalContext } from "@/context/store";
const page = () => {
  const { lang } = useGlobalContext();
  return (
    <Box className="w-full h-[60vh] flex justify-center items-center">
      <Button
        className="block font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] ml-[12px] w-[310px]"
        variant="contained"
      >
        {" "}
        {lang ? "الصفحة قيد الانشاء" : "La page est en construction"}
      </Button>
    </Box>
  );
};

export default page;
