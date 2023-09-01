"use client";
import { Box, Button, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { useGlobalContext } from "@/context/store";
const links = [
  {
    textFr: "Home",
    textAr: "الرئيسية",
    href: "/",
  },
  {
    textFr: "Shop",
    textAr: "التسوق",
    href: "/shop",
  },
  {
    textFr: "Contact",
    textAr: "اتصل بنا",
    href: "/contact",
  },
  {
    textFr: "About",
    textAr: "من نحن",
    href: "/about",
  },
];
const social = [
  {
    icon: FacebookIcon,
    href: "#",
  },
  {
    icon: InstagramIcon,
    href: "#",
  },
  {
    icon: TwitterIcon,
    href: "#",
  },
  {
    icon: YouTubeIcon,
    href: "#",
  },
];
const companyInfo = [
  {
    textFr: "Services",
    textAr: "خدماتنا",
    href: "/services",
  },
  {
    textFr: "Blog",
    textAr: "المدونة",
    href: "/blog",
  },
  {
    textFr: "Privacy Policy",
    textAr: "سياسة الخصوصية",
    href: "/privacypolicy",
  },
  {
    textFr: "Shipping",
    textAr: "الشحن",
    href: "/shipping",
  },
];
const adresse = [
  {
    textFr: (
      <Box>
        <img src="/logo.png" alt="logo" className="w-[170px] cursor-pointer" />
      </Box>
    ),
    textAr: (
      <Box>
        <img src="/logo.png" alt="logo" className="w-[170px] cursor-pointer" />
      </Box>
    ),
  },
  {
    textFr: "Tiaret - Ain Bouchkif",
    textAr: "تيارت - عين بوشقيف",
  },
  {
    textFr: "Hay Bouchkif - 14012",
    textAr: "حي بوشقيف - 14012",
  },
  {
    textFr: "+213777586210",
    textAr: "+213777586210",
  },
];

const Footer = () => {
  const productPage = "1";
  const { lang } = useGlobalContext();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <>
      <Box
        className={`mt-1 bg-blue-100 text-dark items-center grid grid-cols-1 md:grid-cols-2 gap-y-9   xl:grid-cols-4  px-[20px] lg:px-[90px] py-9 ${
          lang ? "arabic" : ""
        } ${productPage == "1" ? "grid" : "hidden"}`}
      >
        <Box>
          <ul>
            {adresse.map((item, index) => {
              return (
                <li key={index} className="my-5 font-bold text-lg ">
                  {lang ? item.textAr : item.textFr}
                </li>
              );
            })}
          </ul>
        </Box>
        <Box>
          <ul>
            {links.map((item, index) => {
              return (
                <li key={index} className="my-5 ">
                  <a className="font-bold text-lg" href={item.href}>
                    {lang ? item.textAr : item.textFr}
                  </a>
                </li>
              );
            })}
          </ul>
        </Box>
        <Box>
          <ul>
            {companyInfo.map((item, index) => {
              return (
                <li key={index} className="my-5 ">
                  <a className="font-bold text-lg" href={item.href}>
                    {lang ? item.textAr : item.textFr}
                  </a>
                </li>
              );
            })}
          </ul>
        </Box>
        <Box>
          <Box>
            <Typography className="font-bold text-[22px] mb-6">
              {lang
                ? "أدخل رقم هاتفك واشترك معنا ليصلك كل الأخبار"
                : "Entrez votre numéro de téléphone et abonnez-vous "}
            </Typography>
          </Box>
          <form
            className="w-[100%] bg-white rounded-lg"
            onSubmit={handleSubmit}
          >
            <Box className="flex justify-between items-center  px-[15px] py-[10px]">
              <Box className="w-[100%]">
                <input
                  type="text"
                  className=" bg-transparent w-[100%]"
                  placeholder={lang ? "رقم الهاتف" : "Numéro de téléphone"}
                />
              </Box>
              <Box className="hover:scale-125 transition ease-out duration-300 ml-4 cursor-pointer">
                <Button type="submit">
                  <SendIcon />
                </Button>
              </Box>
            </Box>
          </form>
          <Box className="mt-5">
            <ul className="flex justify-between items-center w-[200px] ">
              {social.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={item.href}>
                      {<item.icon className="text-[33px]" />}
                    </a>
                  </li>
                );
              })}
            </ul>
          </Box>
        </Box>
      </Box>
      <Box className="flex justify-center items-center w-[100%] bg-blue-100 py-[12px] mt-1">
        <Typography className="text-xl font-bold text-center">
          {lang
            ? "جميع الحقوق محفوظة من طرف لعزيزي عماد الدين"
            : `All Right Reserved By Imed.lazyzy`}
          &copy;
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
