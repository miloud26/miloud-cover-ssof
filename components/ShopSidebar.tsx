"use client";
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  FormControl,
  Button,
  RadioGroup,
  Radio,
} from "@mui/material";
import Link from "next/link";
import React from "react";

import { useGlobalContext } from "@/context/store";

const ShopSidebar = () => {
  const { collapse, setCollapse, lang } = useGlobalContext();

  const [categoryValue, setCategoryValue] = React.useState("");
  const [openSubMenu, setOpenSubMenu] = React.useState(false);

  const handleClickFilter = () => {
    if (window.innerWidth < 900) {
      setCollapse(!collapse);
      window.scrollTo({ top: 0, left: 0 });
    }
  };
  const categorys = [
    {
      valueAr: "1 - 5 سنة",
      valueFr: "1 - 5 ans",
      value: "1-5-years",
    },
    {
      valueAr: "6 - 10 سنة",
      valueFr: "6 - 10 ans",
      value: "6-10-years",
    },
    {
      valueAr: "11 - 15 سنة",
      valueFr: "11 - 15 ans",
      value: "11-15-years",
    },
    {
      valueAr: "مربية الاطفال",
      valueFr: "Baby-sitter",
      value: "baby-sitter",
    },
  ];
  // let categorys: string[] = Array.from(
  //   new Set(dataProducts.map((item) => item.category))
  // );

  return (
    <Box
      className={`${
        collapse ? "absolute z-10 w-full  top-0 left-0 mr-[10px] " : "hidden"
      } md:block ${
        typeof window !== "undefined" && window.innerWidth < 900 ? "" : "sticky"
      }  w-[700px] h-[700px] top-12 left-0  rounded-lg ml-[10px] bg-white mt-3 lg:mt-12 border border-blue-300 border-solid py-10 px-5 `}
    >
      <Typography className="text-start font-bold text-2xl border-b-4  border-black mb-11">
        {lang ? "فيلتر بالفئات" : "filter par categorie"}
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        margin="20px 0 10px 0"
        padding="0 20px"
        width={"100"}
      >
        <FormGroup>
          <Box>
            <Box>
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  {categorys.map((ele, index) => {
                    return (
                      <>
                        <FormControlLabel
                          key={index}
                          className="my-5"
                          onClick={() => setOpenSubMenu(!openSubMenu)}
                          onChange={() => setCategoryValue(ele.value)}
                          value={ele.value}
                          control={<Radio />}
                          label={lang ? ele.valueAr : ele.valueFr}
                        />
                        {/* <FormGroup
                          className={`ml-5 transition overflow-hidden ${
                            openSubMenu ? "h-[135px]" : "h-0"
                          }`}
                        >
                          <Box>
                            <Box>
                              <FormControl>
                                <RadioGroup
                                  aria-labelledby="demo-radio-buttons-group-label"
                                  defaultValue="female"
                                  name="radio-buttons-group"
                                >
                                  {subCategorys
                                    .filter((item) => item[0] == ele)[0]
                                    .slice(1)
                                    .map((item, index) => {
                                      return (
                                        <FormControlLabel
                                          key={index}
                                          value={item[index + 1]}
                                          control={<Radio />}
                                          label={item}
                                        />
                                      );
                                    })}
                                </RadioGroup>
                              </FormControl>
                            </Box>
                          </Box>
                        </FormGroup> */}
                      </>
                    );
                  })}
                </RadioGroup>
              </FormControl>
            </Box>
          </Box>
        </FormGroup>
      </Box>
      <Link href={`/category/${categoryValue}`}>
        <Button
          onClick={handleClickFilter}
          className="font-bold  py-[8px] text-black hover:bg-[#dbeafe] bg-[#dbeafe] mt-7 "
          variant="contained"
        >
          {lang ? "فيلتر" : "filter"}
        </Button>
      </Link>
    </Box>
  );
};

export default ShopSidebar;
