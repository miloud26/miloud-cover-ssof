"use client";
import React, { useState, useEffect } from "react";
import { useGlobalContext } from "@/context/store";
import {
  Box,
  Typography,
  TextField,
  Button,
  Modal,
  FormControlLabel,
  Radio,
  FormControl,
  RadioGroup,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";

import Review from "@/components/Review";
import { wilayaCommuneInfo } from "../../../data";

type ProductType = {
  params: { id: string };
};
const wilayaInfo = wilayaCommuneInfo.map((item) => {
  const { id, name } = item;
  return { id, name };
});

export default function Page({ params }: ProductType) {
  const [error, setError] = useState(false);
  const [btnDisebled, setBtnDisebled] = useState(false);
  const [orderId, setOrderId] = useState("");
  const unique = new Date().getTime().toString();
  const createOrder = async () => {
    const order = {
      unique,
      name: "",
      number: "",
      wilaya: "",
      adress: "",
    };
    await fetch("https://ecom-api-miloud.onrender.com/order", {
      method: "POST",
      body: JSON.stringify(order),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const getOrder = async () => {
    const order = await fetch(`https://ecom-api-miloud.onrender.com/order`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const allOrders = await order.json();
    const tempOrderId = allOrders.orders.filter(
      (item: any) => item.unique == unique
    );

    setOrderId(tempOrderId[0]?._id.toString());
  };
  useEffect(() => {
    createOrder();
    getOrder();
  }, []);

  const { dataProducts, lang, sheet } = useGlobalContext();
  const dataProduct = dataProducts.filter(
    (item) => item.id.toString() == params.id.toString()
  )[0];

  const upsellProduct = dataProducts
    .filter((item) => item.id.toString() == dataProduct.upsellId.toString())
    .slice(0, 1)[0];

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [wilaya, setWilaya] = useState<string>("");
  const [adress, setAdress] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [model, setModel] = useState("");
  const [prixDelevred, setPrixDelevred] = useState(500);

  const communeInfo = Object.values(
    wilayaCommuneInfo.filter((item) => item.name === wilaya)[0]
  );

  const updateOrder = () => {
    setTimeout(async () => {
      console.log(orderId);
      await fetch(`https://ecom-api-miloud.onrender.com/order/${orderId}`, {
        method: "PATCH",
        body: JSON.stringify({
          name,
          number: phone,
          wilaya,
          adress,
          product: dataProduct?.titleFr,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }, 4000);
  };
  const deleteOrder = async () => {
    await fetch(`https://ecom-api-miloud.onrender.com/order/${orderId}`, {
      method: "DELETE",

      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  useEffect(() => {
    if (quantity > 1) {
      setPrixDelevred(500);
    } else {
      setPrixDelevred(500);
    }
  }, [quantity]);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleModel = (e: any) => {
    e.target.classList.toggle("valid");
  };

  const handleSubmitOrder = async (e: any) => {
    e.preventDefault();
    deleteOrder();
    if (!phone) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      setBtnDisebled(true);
      const dateNewOrder = new Date().getTime().toString();
      const lastOrder = localStorage.getItem("dateMakeOrder");

      let timeDeffrent = 0;
      if (lastOrder) {
        timeDeffrent = +dateNewOrder - +lastOrder;
      } else {
        timeDeffrent = +dateNewOrder;
      }

      localStorage.setItem("dateMakeOrder", dateNewOrder);

      try {
        const data = new FormData();
        data.append(
          "date",
          `${new Date().getDate()}/${
            new Date().getMonth() + 1
          } - ${new Date().getHours()}H : ${new Date().getMinutes()}M`
        );
        data.append("name", name);
        data.append("phone", `\'${phone}`);
        data.append("wilaya", wilaya);
        data.append("adress", adress);
        data.append("product", dataProduct.titleFr);
        data.append("quantity", quantity.toString());
        data.append("model", model);
        data.append("prix", quantity == 1 ? "3600" : "5800");
        data.append("upsell", timeDeffrent <= 5 * 60 * 60 * 1000 ? "oui" : "");

        await fetch(sheet, {
          method: "POST",
          body: data,
        });
        handleOpen();
        setBtnDisebled(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Box>
      <Box className="fixed bottom-0 left-0 w-full mb-2  flex justify-center items-center btn-buynow">
        <Button
          onClick={() => {
            window.scrollTo({ top: 0, left: 0 });
          }}
          className="  lg:text-xl w-[80%] h-[20px] py-6 font-bold lg:py-[30px] text-black hover:bg-[#91b7e9] bg-[#91b7e9] mx-[12px] flex justify-center items-center"
          variant="contained"
        >
          {lang ? "اشتري الان" : "Acheter maintenant"}
        </Button>
      </Box>
      <div>
        <Modal className="" open={open} onClose={handleClose}>
          <Box
            className="w-full lg:w-[650px]"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",

              bgcolor: "background.paper",
              borderRadius: "15px",
              boxShadow: 24,
              p: 4,
            }}
          >
            {upsellProduct && (
              <Box>
                <Box>
                  <Typography className="text-3xl text-center font-bold w-full mb-6">
                    {lang ? upsellProduct?.titleAr : upsellProduct?.titleFr}
                  </Typography>
                </Box>
                <Box>
                  <Image
                    src={upsellProduct?.image}
                    alt={upsellProduct?.titleFr}
                    width={600}
                    height={600}
                    className="rounded-lg"
                  />
                  <Link
                    target="_blank"
                    href={`/products/${dataProduct?.upsellId}`}
                  >
                    <Box className="mt-5 flex justify-center items-center w-full">
                      {" "}
                      <Button
                        className="block w-full font-bold py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] "
                        variant="contained"
                      >
                        {lang ? "استفد من العرض" : "Profitez de l'offre"}
                      </Button>
                    </Box>
                  </Link>
                </Box>
              </Box>
            )}
            <Box
              flexDirection={"column"}
              className="mt-5 flex justify-center items-center w-full"
            >
              {!upsellProduct && (
                <Typography className="text-center text-lg mb-6">
                  {lang
                    ? "لقد تم استلام طلبك سنتصل بك للتأكيد في اقرب وقت"
                    : "Votre demande a bien été reçue, nous vous contacterons pour confirmer dans les plus brefs délais"}
                </Typography>
              )}
              <Link href="/shop">
                {" "}
                <Button
                  className="block font-bold w-full py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mx-[12px] "
                  variant="contained"
                >
                  {upsellProduct
                    ? `${lang ? "لا شكرا" : "Non, Merci"} `
                    : `${lang ? "تسوق الان" : "Achetez maintenant"}`}
                </Button>
              </Link>
            </Box>
          </Box>
        </Modal>
      </div>
      <Box
        width="100%"
        height={"80px"}
        className="bg-blue-400 my-5  flex justify-center items-center w-full"
      >
        <Typography className="text-xl text-center font-bold w-full ">
          {lang
            ? "هل تريد المساعدة ؟ اتصل بنا 0777651022"
            : "Veux tu aider? appelez-nous +213777651022"}
        </Typography>
      </Box>
      <Box className=" flex w-fit justify-center items-start px-5 md:px-14  lg:px-[200px] gap-5 flex-wrap lg:flex-nowrap">
        <Box className="border border-blue-300 border-solid rounded-md relative mr-4 mt-10  mb-5 lg:sticky lg:top-[80px] lg:left-0 w-full lg:w-[500px] flex items-center justify-end">
          <img
            className="rounded-lg w-full h-full "
            alt={dataProduct?.titleFr}
            src={dataProduct?.image}
          />
        </Box>
        <Box className=" w-full lg:w-[48%] ">
          <Box className="mb-5 w-full">
            {" "}
            <Typography className="text-3xl font-bold w-full mt-3">
              {!lang ? dataProduct?.titleFr : dataProduct?.titleAr}
            </Typography>
            <Typography className="text-[24px] font-bold w-full mt-3 text-blue-400">
              {dataProduct?.prix}
              {lang ? " دج " : " DA "}
            </Typography>
          </Box>
          <Box>
            <form
              onSubmit={handleSubmitOrder}
              className="border-3 border-blue-400 border-solid rounded-md p-2 lg:p-5 shadow-xl my-10"
            >
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 ">
                <TextField
                  onChange={(e) => {
                    setName(e.target.value);
                    updateOrder();
                  }}
                  placeholder={lang ? "الاسم الكامل" : "Full Name"}
                  label={lang ? "الاسم الكامل" : "Nom & Prenom"}
                  className="mb-3"
                />
                <TextField
                  required
                  onChange={(e) => {
                    setPhone(e.target.value);
                    updateOrder();
                  }}
                  placeholder={lang ? "رقم الهاتف" : "Phone Number"}
                  label={lang ? "رقم الهاتف" : "Telephone"}
                />
              </Box>
              <Box className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-2 mt-3">
                <FormControl fullWidth>
                  <InputLabel>{lang ? "الولاية" : "Wilaya"}</InputLabel>
                  <Select
                    sx={{ direction: "ltr" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={wilaya}
                    label="Wilaya"
                    onChange={(e) => setWilaya(e.target.value)}
                  >
                    {wilayaInfo.slice(1).map((item, index) => {
                      return (
                        <MenuItem
                          sx={{ direction: "ltr" }}
                          key={index}
                          value={item.name}
                        >
                          {item.id} - {item.name}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
                <FormControl fullWidth>
                  <InputLabel>{lang ? "البلدية" : "Commune"}</InputLabel>
                  <Select
                    sx={{ direction: "ltr" }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={adress}
                    label="Commune"
                    onChange={(e) => setAdress(e.target.value)}
                  >
                    {communeInfo.slice(2).map((item, index) => {
                      return (
                        <MenuItem
                          sx={{ direction: "ltr" }}
                          key={index}
                          value={item}
                        >
                          {item}
                        </MenuItem>
                      );
                    })}
                  </Select>
                </FormControl>
              </Box>
              <Box className="my-6 w-full p-4  bg-[#dbeafe] rounded-lg">
                <Box className="w-fulll flex justify-between items-center mb-7">
                  <Typography className="font-bold text-xl">
                    {lang ? "سعر المنتج" : "prix de produit"}
                  </Typography>
                  <Typography className="font-bold text-xl">
                    {dataProduct?.prix} DZD
                  </Typography>
                </Box>
                <Box className="w-fulll flex justify-between items-center mb-7">
                  <Typography className="font-bold text-xl">
                    {lang ? "الكمية" : "Quantite"}
                  </Typography>
                  <Typography className="font-bold text-xl">
                    {quantity}
                  </Typography>
                </Box>
                <Box className="w-fulll flex justify-between items-center mb-7">
                  <Typography className="font-bold text-xl">
                    {lang ? "سعر التوصيل" : "prix de livraison"}
                  </Typography>
                  <Typography className="font-bold text-xl">
                    {prixDelevred} DZD
                  </Typography>
                </Box>
                <Box className="w-fulll flex justify-between items-center ">
                  <Typography className="font-bold text-xl">
                    {lang ? "المجموع" : "Total"}
                  </Typography>
                  <Typography className="font-bold text-xl">
                    {quantity == 1 ? "3600" : "5800"}
                    DZD
                  </Typography>
                </Box>
              </Box>
              <Box
                flexDirection={"row"}
                className="flex justify-center items-center"
              >
                <Box
                  onClick={(e) => {
                    handleModel(e);
                    setModel("bleu");
                  }}
                  className="bg-[#318ce7] w-[50px] h-[40px] mr-4"
                ></Box>
                <Box
                  onClick={(e) => {
                    handleModel(e);
                    setModel("marron");
                  }}
                  className="bg-[#c0874f] w-[50px] h-[40px] mr-4"
                ></Box>
                <Box
                  onClick={(e) => {
                    handleModel(e);
                    setModel("rose");
                  }}
                  className="bg-[#fd6c9e] w-[50px] h-[40px] mr-4"
                ></Box>
              </Box>
              <Box className="my-6 w-full p-4  bg-[#dbeafe] rounded-lg mt-5">
                <Box className="w-fulll flex justify-between items-center ">
                  <FormControl>
                    <RadioGroup>
                      <FormControlLabel
                        className="mb-5"
                        onClick={() => {
                          setQuantity(1);
                          setPrixDelevred(500);
                        }}
                        value="female"
                        control={<Radio />}
                        label={
                          lang ? (
                            <Typography className="font-bold text-xl">
                              اشتري قطعة واحدة ب 3100 دج
                            </Typography>
                          ) : (
                            <Typography className="font-bold text-xl">
                              Une pièce et la livraison est de 500 DZD
                            </Typography>
                          )
                        }
                      />
                      <FormControlLabel
                        onClick={() => {
                          setQuantity(2);
                          setPrixDelevred(500);
                        }}
                        value="male"
                        control={<Radio />}
                        label={
                          lang ? (
                            <>
                              <Typography className="font-bold text-xl mb-2">
                                اشتري قطعتين ب 5300 دج
                              </Typography>
                              <Typography className="text-lg">
                                ستقوم بتوفير 900 دج
                              </Typography>
                            </>
                          ) : (
                            <Typography className="font-bold text-xl">
                              Achetez-en deux et bénéficiez de la livraison
                              gratuite
                            </Typography>
                          )
                        }
                      />
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Box>
              <Box className="w-full flex justify-between items-center ">
                <Button
                  disabled={btnDisebled}
                  className="font-bold w-[55%] ml-1 mt-3 py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] "
                  variant="contained"
                  type="submit"
                >
                  {lang ? "اشتري الان" : "Acheter maintenant"}
                </Button>
                <Box className="w-[45%] flex justify-between items-center  rounded-lg p-4">
                  <Button
                    className="font-bold flex justify-between items-center w-[100%] mt-3 py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] "
                    variant="contained"
                  >
                    <Typography
                      className="font-bold "
                      onClick={() => setQuantity(quantity + 1)}
                    >
                      +
                    </Typography>
                    <Typography className="font-bold">{quantity}</Typography>
                    <Typography
                      className="font-bold "
                      onClick={() => {
                        if (quantity == 1) {
                          setQuantity(quantity);
                          setPrixDelevred(500);
                        } else {
                          setQuantity(quantity - 1);
                          setPrixDelevred(0);
                        }
                      }}
                    >
                      -
                    </Typography>
                  </Button>
                </Box>
              </Box>
            </form>
            {error && (
              <span style={{ color: "red", fontSize: "14px" }}>
                Please Check Your Information !
              </span>
            )}
            <Box className="mt-8">
              {" "}
              <img
                src="/shipping.jpeg"
                alt="shipping"
                className="w-auto object-cover"
              />
            </Box>
            <Box className="w-full flex justify-center">
              <div
                dangerouslySetInnerHTML={{
                  __html: lang
                    ? dataProduct?.descriptionAr
                    : dataProduct?.descriptionFr,
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Review />
    </Box>
  );
}
