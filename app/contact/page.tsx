"use client";
import { Box, Typography, Button, TextField } from "@mui/material";
import Image from "next/image";
import { useGlobalContext } from "@/context/store";

import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Contact = () => {
  const { lang } = useGlobalContext();
  return (
    <Box>
      <Typography className="text-center text-[33px] font-bold w-full p-[40px]">
        {lang ? "اتصل بنا" : "Contact"}
      </Typography>
      <Box
        padding="10px 400px"
        sx={{
          "@media(max-width:1740px)": {
            padding: "10px 315px",
          },
          "@media(max-width:1500px)": {
            padding: "10px 205px",
          },
          "@media(max-width:1200px)": {
            padding: "10px 20px",
          },
        }}
        className="w-full justify-between items-center flex-wrap grid grid-cols-1 md:grid-cols-2 gap-9"
      >
        <Box
          sx={{
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
          className="cursor-pointer"
        >
          <Image
            width={"540"}
            height={"540"}
            src="/contact.webp"
            alt="cover Contact"
          />
        </Box>
        <Box
          sx={{
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
        >
          <Typography
            sx={{
              margin: "0px 0 10px",
              "@media(max-width:600px)": {
                fontSize: "29px",
              },
            }}
            className="text-[#232323] text-[40px] block font-bold"
          >
            {lang ? "ابقى على تواصل" : "Rester en contact"}
          </Typography>
          <Typography
            sx={{
              color: "#666666",
              fontSize: "17px",
              display: "block",
              letterSpacing: "1.7px",
              marginBottom: "35px",
            }}
          >
            {lang
              ? "نود أن نسمع منك ، دعنا نتواصل!"
              : "Nous serions ravis d'avoir de vos nouvelles, entrons en contact !"}
          </Typography>
          <Box
            width="100%"
            display="flex"
            gap="20"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box marginRight={5}>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                {lang ? "العنوان" : "Adresse"}
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                {lang
                  ? "عين الدفلى , خميس مليانة , 44001"
                  : "Ain Defla, Khemis Miliana 44001"}{" "}
                <br />
                {lang ? "حي السلام" : "Hay salam"}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                {lang ? "الهاتف" : "Telephone"}
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                +213777651022
              </Typography>
            </Box>
          </Box>
          <Box
            width="100%"
            display="flex"
            gap="20"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <Box
              marginRight={5}
              sx={{
                "@media(max-width:600px)": {
                  width: "100%",
                },
              }}
            >
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                }}
              >
                {lang ? "مزيد من المعلومات" : "Informations Complémentaires"}
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                  "@media(max-width:700px)": {
                    width: "100%",
                  },
                }}
              >
                {lang
                  ? "نحن منفتحون: من الاثنين إلى السبت ،"
                  : "Nous sommes ouverts : du lundi au samedi,"}{" "}
                <br />
                {lang
                  ? "من 10 صباحًا حتى 5 مساءً وتغلق أيام الأحد"
                  : "10h - 17h et fermé le dimanche"}{" "}
                <br /> {lang ? "آسف." : "Désolé"}
              </Typography>
            </Box>
            <Box>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "16px",
                  display: "block",
                  fontWeight: "bold",
                  marginBottom: "10px",
                  "@media(max-width:600px)": {
                    width: "100%",
                  },
                }}
              >
                {lang ? "الايميل" : "Email"}
              </Typography>
              <Typography
                sx={{
                  color: "#666666",
                  fontSize: "15px",
                  display: "block",
                  letterSpacing: "1.7px",
                  marginBottom: "35px",
                }}
              >
                miloud00@protonmail.com
              </Typography>
            </Box>
          </Box>

          <Box>
            <Typography
              sx={{
                color: "#666666",
                fontSize: "16px",
                display: "block",
                fontWeight: "bold",
                marginBottom: "10px",
              }}
            >
              {lang ? "التواصل الاجتماعي" : "Social"}
            </Typography>
            <Box width="100%" display="flex" gap="20" alignItems="center">
              <AiFillFacebook
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <AiFillInstagram
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <AiFillTwitterSquare
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
              <AiFillLinkedin
                style={{
                  color: "#e26414",
                  fontSize: "32px",
                  marginRight: "10px",
                  cursor: "pointer",
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box width="100%" height={"800px"} margin="70px 0">
        <Box width="100%" height={"100%"}>
          <iframe
            title="map"
            style={{ width: "100%", height: "100%" }}
            src="https://maps.google.com/maps?q=Lyc%C3%A8e%20Hamza%20ibn%20abd%20El%20Motalib&t=&z=13&ie=UTF8&iwloc=&output=embed"
          ></iframe>
        </Box>
      </Box>
      <Box
        padding="0px 200px"
        width="100%"
        margin="100px 0"
        sx={{
          "@media(max-width:1000px)": {
            padding: "0px 40px",
          },
        }}
      >
        <Typography className="text-center text-[33px] font-bold w-full p-[40px] mb-4">
          {lang ? "ابقى على تواصل" : "Rester en contact"}
        </Typography>
        <form className="form-contact px-7 py-4 rounded-lg w-full">
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            flexWrap="wrap"
            className="grid justify-between items-center flex-wrap grid-cols-1 md:grid-cols-2 gap-3"
          >
            {" "}
            <TextField
              label={lang ? "الاسم الكامل*" : "Full Name*"}
              type="text"
              sx={{
                marginBottom: "15px",
                "@media(max-width:950px)": {
                  width: "100%",
                },
              }}
            />
            <TextField
              label={lang ? "رقم الهاتف*" : "Phone Number*"}
              type="text"
              sx={{
                marginBottom: "15px",
                "@media(max-width:950px)": {
                  width: "100%",
                },
              }}
            />
          </Box>

          <Box>
            <textarea
              className="textArea w-full mt-3 h-[200px] p-5 rounded"
              placeholder={lang ? "اكتب رسالتك*" : "You're Message..."}
            />
          </Box>
          <Box
            width="100%"
            display="flex"
            justifyContent="center"
            marginTop={1}
          >
            {" "}
            <Button
              className="block font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] ml-[12px] w-[310px]"
              variant="contained"
            >
              {lang ? "ارسال" : "envoyer"}
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;


