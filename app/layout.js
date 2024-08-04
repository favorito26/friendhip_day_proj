import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Made by MM Codes",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-r from-green-300 to to-blue-200">
       
          <div className="mt-20">
            {children}
          </div>
      
    
    
  <Footer/> 
      </body>
    </html>
  );
}
