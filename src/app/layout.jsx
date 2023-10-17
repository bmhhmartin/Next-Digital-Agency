import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
import { getHomeMeta } from "@/libs/getHomeMeta";

const metaHome = getHomeMeta();

export async function generateMetadata(){
  return{
    title : "Home",
    keywords: "", 
    description : "asdfasfdasdf"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header /> {children} <Footer />
      </body>
    </html>
  );
}
