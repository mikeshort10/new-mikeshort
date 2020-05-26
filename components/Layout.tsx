import React from "react";
import { Navbar } from "./Navbar";
import Head from "next/head";

type LayoutProps = { title: string; description?: string };

export const Layout: React.FC<LayoutProps> = ({
  children,
  title,
  description,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <Navbar />
      <main className="pt-16">{children}</main>
    </>
  );
};
