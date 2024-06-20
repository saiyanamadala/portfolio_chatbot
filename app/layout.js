import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "Naga Venkata Sairam Portfolio",
  description: "Naga Venkata Sairam Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap" rel="stylesheet"/>
      
        <link rel="icon" type="image/jpg" href="./images/sai.jpg"></link>
      </Head>
      <body>{children}</body>
    </html>
  );
}
