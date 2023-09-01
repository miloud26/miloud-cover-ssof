import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coozy | Shopping",
  description: "where every baby's needs find a hug",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
