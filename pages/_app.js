import Sidebar from "@component/components/Sidebar";
import "@component/styles/globals.css";

 const App = ({ Component, pageProps }) => {
  
  return (
    <>
      <div className="md:flex bg-[#20232a]">
        <Sidebar className={`bg-[#282c34] h-full`} {...pageProps} />
        <Component className={`h-full w-full`} {...pageProps} />
      </div>
    </>
  );
}
export default App