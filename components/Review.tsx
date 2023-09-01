import { Box, Button, Rating, Typography } from "@mui/material";
import React from "react";
import { useGlobalContext } from "@/context/store";

const Rev = ({
  name,
  rate,
  desc,
}: {
  name: string;
  rate: number;
  desc: string;
}) => {
  return (
    <Box className="bg-[#dbeafe] p-4 rounded-md m-2">
      <Typography className="text-center text-xl font-bold mb-5">
        {name}
      </Typography>
      <Typography className="text-center font-bold mb-5">
        <Rating readOnly name="simple-controlled" value={rate} />
      </Typography>

      <Typography className="text-center  text-lg ">{desc}</Typography>
    </Box>
  );
};

let reviews = [
  {
    name: "بن يخلف محمد",
    rate: 5,
    desc: "منتج جيد سياسعدك في تربية طفلك و منحه الدفئ اللازم في فصل الشتاء",
  },
  {
    name: "بن علي مروى",
    rate: 5,
    desc: "منتج جميل و خاصة في الون الوردي وصلني في ظرف يوم واحد",
  },
  {
    name: "مقادر رابح",
    rate: 5,
    desc: "خدمة جيدة و مستوى عالي من الاتقان كما ان المنتج جيد جدا و جودة عالية",
  },
  {
    name: "رمضان ايمن",
    rate: 5,
    desc: "خدمة توصيل جيدة و سريعة وجودة المنتج لا غبار عليها و المعاملة كانت احسن",
  },
  {
    name: "حجوطي مروان",
    rate: 5,
    desc: "منتج جيد للغاية ساعدني كثيرا ولقد تم التوصل به في ظرف يوم واحد",
  },
  {
    name: "نوار عبد الرحيم",
    rate: 5,
    desc: "اخترت اللون الازرق وهو جميل جدا و خدمة التوصيل سريعة للغاية والمعاملة توووب",
  },
];

const Review = () => {
  const { lang } = useGlobalContext();
  const [ShowAll, setShowAll] = React.useState(false);

  return (
    <>
      <Box className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 px-4 lg:px-11 my-7">
        {(ShowAll ? reviews : reviews.slice(0, 3)).map((item, index) => {
          return <Rev key={index} {...item} />;
        })}
      </Box>
      <Box className="flex justify-center items-center w-full mb-3">
        <Button
          onClick={() => setShowAll(true)}
          className={` font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] ${
            ShowAll ? "hidden" : "block"
          }`}
          variant="contained"
        >
          {lang ? "كل التقييمات" : "Toutes les notes"}
        </Button>
      </Box>
    </>
  );
};

export default Review;
