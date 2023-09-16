import "./globals.css";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { DataProvider } from "@/context/store";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Coozy | Home",
  description: "where every baby's needs find a hug",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  /*
  const response = await fetch("https://ecom-api-miloud.onrender.com/pixel", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    next: {
      revalidate: 60 * 60 * 7,
    },
  });
  
  const data = await response.json();
  const pixel = data.pixel[0].pixel;
  */
  return (
    <html lang="en">
      <Script
        dangerouslySetInnerHTML={{
          __html: `
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${256809223402388}');
fbq('track', 'PageView');
`,
        }}
      />

      <body id="root">
        <DataProvider>
          <Navbar />
          {children}
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
