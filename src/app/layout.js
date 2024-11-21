import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import DuplicateLayout from "./duplicateLayout";
import ScrollToTop from "@/components/ui/scrollToTop";

const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--plus-jakarta-sans',
})

export const metadata = {
  title: "Industria",
  description: "This theme is designed specifically for businesses and professionals in the oil and manufacturing industries. It offers a comprehensive, modern, and visually appealing layout that showcases the full spectrum of services and capabilities within these sectors. The theme is ideal for companies looking to present their expertise in areas such as offshore drilling, pipeline integrity, enhanced oil recovery, refinery operations, factory automation, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={plus_jakarta_sans.variable} suppressHydrationWarning={true}>
        {/* ------ body line start */}
        <div className="w-full h-full fixed -z-[1] top-0 left-0 page-lines">
          <div className="container relative h-full">
            <span className="absolute left-0 top-0 h-full w-[1px] bg-accent"></span>
            <span className="absolute right-[28%] top-0 h-full w-[1px] bg-accent"></span>
            <span className="absolute right-0 top-0 h-full w-[1px] bg-accent"></span>
          </div>
        </div>
        {/* ------ body line end */}
          <DuplicateLayout>
            {children}
          </DuplicateLayout>
          <ScrollToTop/>
      </body>
    </html>
  );
}
