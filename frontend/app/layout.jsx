import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "./redux/ReduxProvider";
import SocketProvider from "./redux/SocketProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WhatsApp",
  description: "Created by Md Tofaal Ahmed",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-screen flex-center`}>
        <ReduxProvider>
          <SocketProvider>
            {children}
            <Toaster />
          </SocketProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
