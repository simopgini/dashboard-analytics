import Sidebar from "@component/components/Sidebar";
import "@component/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="md:flex bg-[#20232a]">
        <Sidebar className={`${poppins.className} bg-[#282c34] h-full`} />
        <Component className={`${poppins.className} bg-[#20232a] h-full w-full`} {...pageProps} />
      </div>
    </>
    //  <Component {...pageProps} />

  );
}
