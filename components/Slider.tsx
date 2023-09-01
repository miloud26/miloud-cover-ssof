"use client";
import { Box, Button, Typography } from "@mui/material";
import { useGlobalContext } from "@/context/store";
import Link from "next/link";

const Slider = () => {
  const { lang } = useGlobalContext();
  return (
    <Box className="w-full p-0 lg:p-6 overBg">
      <video className="w-full" src="video.mp4" autoPlay muted loop></video>
      <Box
        className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-20 text-white "
        flexDirection={"column"}
      >
        {lang ? (
          <Box>
            <Typography className="text-xl  xl:text-6xl xl:mb-8 lg:text-4xl lg:mb-6  text-center  letter tracking-wider">
              من لحظة الولادة الى كل يوم
            </Typography>
            <Typography className="text-xl    xl:text-5xl  lg:text-4xl lg:mb-6  text-center letter tracking-wider">
              رحلتنا معا من حنان الامومة الى حظن متجرنا
            </Typography>
          </Box>
        ) : (
          <Box>
            <Typography className="text-xl  xl:text-6xl xl:mb-8 lg:text-4xl lg:mb-6  text-center  letter tracking-wider">
              Bébé dés sa naissance, chaque jour est un voyage
            </Typography>
            <Typography className="text-xl    xl:text-5xl  lg:text-4xl lg:mb-6  text-center letter tracking-wider">
              de la tendresse maternelle a la l'étreinte de notre boutique
            </Typography>
          </Box>
        )}
        <Box className="mt-10">
          {" "}
          <Link href="/shop">
            {" "}
            <Button
              className=" font-bold py-[10px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] "
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

export default Slider;
