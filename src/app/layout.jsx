import Footer from "@/components/Footer";
import "./globals.css";
import Header from "@/components/Header";
export async function generateMetadata() {
  // SEO DATA FETCH
  return {
    title: "Home",
  };
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
