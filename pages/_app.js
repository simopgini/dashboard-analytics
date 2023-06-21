import Sidebar from "@component/components/Sidebar";
import "@component/styles/globals.css";

const App = ({ Component, pageProps }) => {
  return (
    <>
      <div className='md:flex bg-gray-dark'>
        <Sidebar className={`bg-gray-sidebar h-full`} {...pageProps} />
        <Component className={`h-full w-full`} {...pageProps} />
      </div>
    </>
  );
};
export default App;
