import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
const About = () => {
  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "33px",
          fontWeight: "bold",
          width: "100%",
          padding: "40px",
        }}
      >
        About Us
      </Typography>

      <Box
        marginBottom={"120px"}
        padding="10px 300px"
        sx={{
          "@media(max-width:1640px)": {
            padding: "10px 315px",
          },
          "@media(max-width:1500px)": {
            padding: "10px 205px",
          },
          "@media(max-width:1200px)": {
            padding: "10px 20px",
          },
        }}
        className="w-full justify-between items-start flex-wrap grid grid-cols-1 md:grid-cols-2 gap-9"
      >
        <Box
          sx={{
            cursor: "pointer",
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
        >
          <Image
            width={"700"}
            height={"540"}
            src="/about1.webp"
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
              color: "#232323",
              fontSize: "30px",
              display: "block",
              letterSpacing: "1.7px",
              fontWeight: "600",
              margin: "20px 0 10px",
              "@media(max-width:600px)": {
                fontSize: "20px",
              },
            }}
          >
            We Have Everything You Need?
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
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit.
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
                Address
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
                Ain Defla, Khemis Miliana 44001 <br /> Hay salam
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
                Phone
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
                Email
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
          <Button
            className="block font-bold  text-black hover:bg-[#dbeafe] bg-[#dbeafe]
            "
            variant="contained"
          >
            contact
          </Button>
        </Box>
      </Box>

      <Box
        marginBottom={"120px"}
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
        className="w-full justify-between items-start flex-wrap grid grid-cols-1 md:grid-cols-2 gap-9 "
      >
        <Box
          sx={{
            cursor: "pointer",
            "@media(max-width:1200px)": {
              width: "100%",
            },
          }}
        >
          <Image
            width={"700"}
            height={"540"}
            src="/about2.webp"
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
              color: "#232323",
              fontSize: "30px",
              display: "block",
              letterSpacing: "1.7px",
              fontWeight: "600",
              margin: "20px 0 10px",
              "@media(max-width:600px)": {
                fontSize: "20px",
              },
            }}
          >
            We Have Everything You Need?
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
            Faded short sleeves t-shirt with high neckline. Soft and stretchy
            material for a comfortable fit.
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
                Address
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
                Ain Defla, Khemis Miliana 44001 <br /> Hay salam
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
                Phone
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
                Email
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
          <Button
            className="block font-bold  text-black hover:bg-[#dbeafe] bg-[#dbeafe]
            "
            variant="contained"
          >
            contact
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
